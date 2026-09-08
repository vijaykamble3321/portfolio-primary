import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface ThreeCharacterViewerProps {
  mouseOffset?: { x: number; y: number };
  className?: string;
}

// Global cached model data so re-renders or tab switches never re-download the 22.5MB model
let cachedModelScene: THREE.Group | null = null;
let cachedBoxData: { center: THREE.Vector3; size: THREE.Vector3; minY: number } | null = null;

// Ground level for both the 3D character and the pedestal stand
const GROUND_Y = -0.90;

export const ThreeCharacterViewer: React.FC<ThreeCharacterViewerProps> = ({
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Three.js Core Refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const modelWrapperRef = useRef<THREE.Group | null>(null);
  const reqIdRef = useRef<number | null>(null);

  // Scroll rotation refs (smoothly spins 360 in place on page scroll)
  const targetRotationY = useRef<number>(0);
  const currentRotationY = useRef<number>(0);

  // Loading State
  const [isLoading, setIsLoading] = useState<boolean>(!cachedModelScene);
  const [loadingProgress, setLoadingProgress] = useState<number>(cachedModelScene ? 100 : 0);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Helper to mount the model cleanly into the scene in fixed front-facing pose
  const setupModelInScene = useCallback((scene: THREE.Scene, model: THREE.Group, boxData: { center: THREE.Vector3; size: THREE.Vector3; minY: number }) => {
    // Traverse meshes: enable shadows, tune materials for crisp realism
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
          materials.forEach((mat) => {
            if ('roughness' in mat && 'metalness' in mat) {
              const stdMat = mat as THREE.MeshStandardMaterial;
              // Disable the blinding white emissive factor from Sketchfab export
              stdMat.emissive.setHex(0x000000);
              stdMat.emissiveIntensity = 0;
              if (stdMat.emissiveMap) stdMat.emissiveMap = null;

              // Realistic human skin & cloth PBR values (non-metallic, natural diffuse roughness)
              stdMat.roughness = 0.55;
              stdMat.metalness = 0.0;

              // Natural warm human skin tone tint
              stdMat.color.setHex(0xfff2e6);
              stdMat.needsUpdate = true;
            }
          });
        }
      }
    });

    // Center horizontally/depth-wise, align feet to y = 0
    model.position.x = -boxData.center.x;
    model.position.y = -boxData.minY;
    model.position.z = -boxData.center.z;

    // Fixed 0 degree rotation so front face and chest face the user/camera directly
    model.rotation.set(0, 0, 0);

    // Wrapper group for scaling and position
    const wrapper = new THREE.Group();
    wrapper.add(model);

    // Scale model: clean proportion that harmonizes with cards
    const maxDim = Math.max(boxData.size.x, boxData.size.y, boxData.size.z);
    const targetScale = maxDim > 0 ? 2.05 / maxDim : 1;
    wrapper.scale.setScalar(targetScale);

    // Lock position firmly on top of the pedestal
    wrapper.position.set(0, GROUND_Y, 0);
    wrapper.rotation.set(0, 0, 0);

    if (modelWrapperRef.current) {
      scene.remove(modelWrapperRef.current);
    }
    scene.add(wrapper);
    modelWrapperRef.current = wrapper;

    setIsLoading(false);
    setLoadingProgress(100);
  }, []);

  // Model Loader (only called once, or on manual retry)
  const loadModel = useCallback((scene: THREE.Scene) => {
    if (cachedModelScene && cachedBoxData) {
      setupModelInScene(scene, cachedModelScene.clone(true), cachedBoxData);
      return;
    }

    setIsLoading(true);
    setLoadError(null);
    setLoadingProgress(10);

    const loader = new GLTFLoader();
    const modelUrl = '/models/casual_black_t-_shirt_portrait.glb';

    loader.load(
      modelUrl,
      (gltf) => {
        const rawModel = gltf.scene;

        const box = new THREE.Box3().setFromObject(rawModel);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);

        const boxData = {
          center,
          size,
          minY: box.min.y,
        };

        cachedModelScene = rawModel;
        cachedBoxData = boxData;

        setupModelInScene(scene, rawModel.clone(true), boxData);
      },
      (xhr) => {
        if (xhr.total > 0) {
          const pct = Math.min(99, Math.round((xhr.loaded / xhr.total) * 100));
          setLoadingProgress(pct);
        } else if (xhr.loaded > 0) {
          const totalEstimate = 22562472;
          const pct = Math.min(99, Math.round((xhr.loaded / totalEstimate) * 100));
          setLoadingProgress(pct);
        }
      },
      (err) => {
        console.error('Failed to load GLB model:', err);
        setLoadError('Model load failed. Click retry.');
        setIsLoading(false);
      }
    );
  }, [setupModelInScene]);

  // Main Three.js Scene Setup — ONLY RUNS ONCE on mount
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const width = container.clientWidth || 300;
    const height = container.clientHeight || 400;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera: Flattering ~35° FOV portrait view
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.05, 3.6);
    cameraRef.current = camera;

    // 3. Renderer with transparent background and high-fidelity tone mapping
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    // 4. Studio Lighting System (tuned for realistic warm human skin tones)
    const ambientLight = new THREE.AmbientLight(0xfff7ed, 1.1);
    scene.add(ambientLight);

    const hemiLight = new THREE.HemisphereLight(0xffedd5, 0x1e293b, 0.9);
    scene.add(hemiLight);

    // Front-Right Key Light: Warm golden portrait key light
    const keyLight = new THREE.DirectionalLight(0xffedd5, 1.8);
    keyLight.position.set(2.8, 3.8, 3.2);
    scene.add(keyLight);

    // Front-Left Fill Light: Soft natural fill
    const fillLight = new THREE.DirectionalLight(0xe0f2fe, 1.0);
    fillLight.position.set(-2.8, 2.0, 2.8);
    scene.add(fillLight);

    // Center Eye-Level Fill: Warm gentle fill for facial features
    const frontCenterLight = new THREE.DirectionalLight(0xffedd5, 0.8);
    frontCenterLight.position.set(0, 0.6, 3.2);
    scene.add(frontCenterLight);

    // Rim/Back Light: Clean hair and shoulder contour
    const rimLight = new THREE.DirectionalLight(0xfff7ed, 1.6);
    rimLight.position.set(0, 3.2, -2.8);
    scene.add(rimLight);

    // Subtle bottom bounce
    const bounceLight = new THREE.DirectionalLight(0xe8281a, 0.5);
    bounceLight.position.set(0, -3.0, 1.5);
    scene.add(bounceLight);

    // 5. Contact Shadow & Pedestal Ring
    const pedestalGroup = new THREE.Group();
    pedestalGroup.position.set(0, GROUND_Y, 0);

    const shadowGeo = new THREE.CircleGeometry(0.65, 32);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.20,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    pedestalGroup.add(shadowMesh);

    const ringGeo = new THREE.RingGeometry(0.55, 0.58, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xe8281a,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.65,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    pedestalGroup.add(ringMesh);

    scene.add(pedestalGroup);

    // 6. Load Model
    loadModel(scene);

    // 7. Scroll & Wheel driven in-place 360° kinetic rotation
    let wheelRotation = 0;

    const updateRotation = (currentScroll?: number) => {
      const scrollY =
        typeof currentScroll === 'number'
          ? currentScroll
          : window.scrollY || document.documentElement.scrollTop || window.pageYOffset || 0;
      // Page scroll: full 360-degree rotation (2 * Math.PI) per 360px of page scroll
      const scrollContrib = (scrollY / 360) * Math.PI * 2;
      targetRotationY.current = scrollContrib + wheelRotation;
    };

    // Wheel event: spins character directly on mouse wheel / trackpad scroll
    const handleWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      wheelRotation += delta * 0.007;
      updateRotation();
    };

    // Native scroll event: spins character on page scroll
    const handleScroll = () => {
      updateRotation();
    };

    // Lenis smooth scroll event
    const handleLenisScroll = (e: Event) => {
      const customEvent = e as CustomEvent;
      const scroll = customEvent.detail?.scroll;
      updateRotation(typeof scroll === 'number' ? scroll : undefined);
    };

    // Touch swipe vertical drag support
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        touchStartY = e.touches[0].clientY;
      }
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const delta = touchStartY - e.touches[0].clientY;
        touchStartY = e.touches[0].clientY;
        wheelRotation += delta * 0.012;
        updateRotation();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('lenis-scroll', handleLenisScroll);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    updateRotation();

    // 8. Render Loop — Smooth kinetic in-place spin on scroll
    const clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth kinetic rotation on scroll (spins 360 in place with inertia)
      currentRotationY.current += (targetRotationY.current - currentRotationY.current) * 0.08;

      if (modelWrapperRef.current) {
        modelWrapperRef.current.rotation.y = currentRotationY.current;
      }

      // Subtle breathing pulse on the ring
      ringMat.opacity = 0.6 + Math.sin(elapsedTime * 2.2) * 0.22;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current) return;
      const w = containerRef.current.clientWidth || 300;
      const h = containerRef.current.clientHeight || 400;
      cameraRef.current.aspect = w / h;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('lenis-scroll', handleLenisScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      renderer.dispose();
      shadowGeo.dispose();
      shadowMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      scene.clear();
    };
  }, [loadModel]);

  return (
    <div
      ref={containerRef}
      className={`relative w-[260px] sm:w-[290px] md:w-[320px] h-[340px] sm:h-[380px] md:h-[410px] flex items-center justify-center select-none ${className}`}
    >
      {/* 3D WebGL Canvas Stage — pointer-events-none so swiping cards is 100% smooth without spinning */}
      <canvas
        ref={canvasRef}
        className={`w-full h-full block pointer-events-none filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.38)] transition-opacity duration-500 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        title="3D Character: Vijay Kamble"
      />

      {/* Cybernetic Loading Badge */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-20">
          <div className="flex flex-col items-center gap-2.5 px-4 py-3 rounded-2xl bg-neutral-900/85 dark:bg-black/85 backdrop-blur-md border border-neutral-700/60 dark:border-neutral-800/80 shadow-2xl text-center">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-10 h-10 -rotate-90 transform" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="3"
                  className="text-neutral-800 dark:text-neutral-900"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#e8281a"
                  strokeWidth="3.5"
                  strokeDasharray={125.6}
                  strokeDashoffset={125.6 - (125.6 * loadingProgress) / 100}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                  fill="none"
                />
              </svg>
              <span className="absolute text-[10px] font-mono font-bold text-white">
                {loadingProgress}%
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-neutral-200 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#e8281a] animate-spin" />
                Loading 3D Character
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Error Fallback with Retry */}
      {loadError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-auto z-30 p-4">
          <div className="flex flex-col items-center gap-2.5 p-4 rounded-xl bg-red-950/85 border border-red-800/60 backdrop-blur-md text-center max-w-[240px]">
            <AlertCircle className="w-6 h-6 text-red-400" />
            <span className="text-xs font-mono text-red-200">{loadError}</span>
            <button
              onClick={() => sceneRef.current && loadModel(sceneRef.current)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded text-[11px] font-mono transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Retry Load
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
