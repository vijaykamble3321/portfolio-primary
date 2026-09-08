import type { CaseStudy } from '../types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-01',
    number: '01',
    category: 'MERN STACK / CLINICAL INFRASTRUCTURE',
    titleLine1: 'Hospital Management System,',
    titleLine2: 'Patient Records & Role-Based Access.',
    tags: ['#MERN-STACK', '#MONGODB', '#EXPRESS', '#NODEJS', '#RBAC'],
    description:
      'A full-stack clinical management portal streamlining patient electronic medical records, doctor appointment scheduling, and multi-tier role-based access control (Admin, Doctor, Patient) with real-time consultation queues.',
    metrics: [
      { label: 'Role-Based Access', value: '3 Portals' },
      { label: 'Booking Latency', value: '<250ms' },
      { label: 'Data Security', value: 'HIPAA-Ready' },
    ],
    partnerLogos: [
      { name: 'MongoDB Atlas', mark: 'MONGO' },
      { name: 'Express.js', mark: 'EXPRESS' },
      { name: 'React.js', mark: 'REACT' },
      { name: 'Node.js', mark: 'NODE' },
    ],
    type: 'health',
  },
  {
    id: 'case-02',
    number: '02',
    category: 'MERN & REACT NATIVE / TELEMEDICINE',
    titleLine1: 'Healthcare Mobile App,',
    titleLine2: 'Consultations & Health Records on Mobile.',
    tags: ['#REACT-NATIVE', '#MERN-STACK', '#ANDROID', '#TELEHEALTH'],
    description:
      'Cross-platform mobile application engineered with React Native and MERN backend. Enables seamless remote patient doctor consultations, automated slot booking, real-time prescription tracking, and synchronized clinical history.',
    metrics: [
      { label: 'Platforms', value: 'Web + Android' },
      { label: 'Sync Latency', value: '38ms' },
      { label: 'Uptime', value: '99.9%' },
    ],
    accentColor: '#E8281A',
    badge: 'HEALTHCARE MOBILE',
    type: 'dietitian',
  },
  {
    id: 'case-03',
    number: '03',
    category: 'NEXT.JS & MERN / TALENT PLATFORM',
    titleLine1: 'Job Portal & ATS Engine,',
    titleLine2: 'Resume Parsing & Real-Time Application Tracking.',
    tags: ['#NEXTJS', '#MERN-STACK', '#ATS-WORKFLOW', '#TAILWIND-CSS'],
    description:
      'A high-performance recruitment portal built with Next.js and MERN stack. Features recruiter job postings, candidate resume uploads with document verification, real-time application status pipelines, and search filters.',
    metrics: [
      { label: 'Search Speed', value: '18ms' },
      { label: 'Status Tracking', value: 'Real-time' },
      { label: 'Pipeline Stages', value: '5-Stage ATS' },
    ],
    type: 'productivity',
  },
  {
    id: 'case-04',
    number: '04',
    category: 'MERN STACK / FINTECH WORKFLOW',
    titleLine1: 'Loan Management System,',
    titleLine2: 'Approval Workflows & Real-Time EMI Telemetry.',
    tags: ['#FINTECH', '#MERN-STACK', '#EMI-CALC', '#KYC-DOCS'],
    description:
      'Secure financial web application managing end-to-end loan lifecycles: customer applications, credit officer verification workflows, dynamic EMI amortization tracking, and Amazon S3 encrypted KYC document management.',
    metrics: [
      { label: 'Approval Cycle', value: '-60% Time' },
      { label: 'Doc Storage', value: 'AWS S3' },
      { label: 'EMI Accuracy', value: '100.0%' },
    ],
    partnerLogos: [
      { name: 'Amazon S3', mark: 'AWS S3' },
      { name: 'MongoDB', mark: 'MONGO' },
      { name: 'JWT Auth', mark: 'JWT' },
    ],
    accentColor: '#E8281A',
    type: 'fintech',
  },
  {
    id: 'case-05',
    number: '05',
    category: 'MERN STACK / COMMERCE ENGINE',
    titleLine1: 'E-Commerce Enterprise Website,',
    titleLine2: 'Product Catalog, Payments & Admin Dashboard.',
    tags: ['#MERN', '#PAYMENT-GATEWAY', '#CART-CHECKOUT', '#INVENTORY'],
    description:
      'Full-featured electronic storefront equipped with high-speed catalog filtering, persistent shopping cart, secure payment gateway checkout integration, automated invoice generation, and comprehensive inventory admin dashboard.',
    metrics: [
      { label: 'Checkout Conversion', value: '+35%' },
      { label: 'Catalog Latency', value: '12ms' },
      { label: 'Payment Gateway', value: 'Verified' },
    ],
    type: 'automotive',
  },
  {
    id: 'case-06',
    number: '06',
    category: 'THREE.JS & BLENDER / 3D WEB',
    titleLine1: 'Interactive 3D Websites,',
    titleLine2: 'High-Impact Visuals with Three.js & Blender.',
    tags: ['#THREEJS', '#BLENDER', '#WEBGL', '#3D-INTERACTIVE'],
    description:
      'Modern interactive 3D web experiences combining custom low-poly and high-detail 3D models sculpted in Blender with Three.js WebGL rendering, custom camera choreography, dynamic lighting, and particle effects.',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Model Pipeline', value: 'GLTF / Blender' },
      { label: 'User Engagement', value: '2.4x Lift' },
    ],
    accentColor: '#E8281A',
    type: 'spatial',
  },
  {
    id: 'case-07',
    number: '07',
    category: 'DEVOPS & CLOUD INFRASTRUCTURE',
    titleLine1: 'Cloud Deployment Pipelines,',
    titleLine2: 'Zero-Downtime Releases on AWS, Heroku & Cloudflare.',
    tags: ['#AWS', '#HEROKU', '#CLOUDFLARE', '#BUNNY-NET'],
    description:
      'Production deployment engineering managing multi-cloud container orchestration across AWS EC2/S3, Heroku dynos, Bunny.net edge routing, and Cloudflare DNS security caching to guarantee sub-second global responses.',
    metrics: [
      { label: 'Global Uptime', value: '99.95%' },
      { label: 'CDN Acceleration', value: '4.2x' },
      { label: 'Downtime Incidents', value: '0 Critical' },
    ],
    type: 'climate',
  },
  {
    id: 'case-08',
    number: '08',
    category: 'CREATIVE UI & 3D STORYTELLING',
    titleLine1: '3D Interactive Product Showcase,',
    titleLine2: 'Immersive Web Experiences for Premium Clients.',
    tags: ['#3D-WEBGL', '#THREEJS', '#CREATIVE-UI', '#BLENDER-3D'],
    description:
      'Immersive digital showcase featuring 3D product inspection with 360-degree rotation, exploded part disassembly views, and reactive lighting that engages users beyond static web pages.',
    metrics: [
      { label: 'Session Dwell', value: '5.8m' },
      { label: 'Interaction Rate', value: '88%' },
      { label: 'Shader Performance', value: 'WebGL 2.0' },
    ],
    accentColor: '#E8281A',
    type: 'luxury',
  },
  {
    id: 'case-09',
    number: '09',
    category: 'AI & LLM INTEGRATION / ASKMYLLM',
    titleLine1: 'AI-Powered Applications,',
    titleLine2: 'Intent Recognition & Real-Time Vector Workflows.',
    tags: ['#LLM-AI', '#ASKMYLLM', '#INTENT-RECOGNITION', '#VECTOR-AI'],
    description:
      'Building next-generation intelligent applications integrating AskMyLLM and OpenAI APIs for automated query classification, intent recognition, vector search embeddings, and real-time streaming conversational assistants.',
    metrics: [
      { label: 'Intent Accuracy', value: '96.4%' },
      { label: 'Stream Latency', value: '<350ms' },
      { label: 'Tasks Automated', value: '100k+/mo' },
    ],
    type: 'audio',
  },
  {
    id: 'case-10',
    number: '10',
    category: 'REST API & BACKEND ARCHITECTURE',
    titleLine1: 'High-Throughput Node APIs,',
    titleLine2: 'Modular Express Backends Tested with Postman & Bruno.',
    tags: ['#NODEJS', '#EXPRESS', '#REST-APIS', '#POSTMAN', '#BRUNO'],
    description:
      'Architected resilient microservices and RESTful API endpoints utilizing Node.js, Express.js, Axios, and dotenv. Tested rigorously with Postman and Bruno test collections for payload validation, rate-limiting, and error handling.',
    metrics: [
      { label: 'P99 Latency', value: '<22ms' },
      { label: 'Test Coverage', value: '98%' },
      { label: 'Concurrent Req', value: '5,000/s' },
    ],
    type: 'infrastructure',
  },
  {
    id: 'case-11',
    number: '11',
    category: 'MOBILE ENGINEERING / REACT NATIVE',
    titleLine1: 'Android App Development,',
    titleLine2: 'Native Performance with React Native & Redux.',
    tags: ['#REACT-NATIVE', '#ANDROID', '#MOBILE-APPS', '#OFFLINE-CACHE'],
    description:
      'Engineered responsive native Android applications using React Native, native Android bridge modules, offline AsyncStorage caching, and push notification triggers for seamless client mobility.',
    metrics: [
      { label: 'Crash-Free Rate', value: '99.8%' },
      { label: 'App Size', value: '<24MB' },
      { label: 'Play Store Ready', value: 'Certified' },
    ],
    accentColor: '#E8281A',
    type: 'edtech',
  },
  {
    id: 'case-12',
    number: '12',
    category: 'SECURITY & IDENTITY VERIFICATION',
    titleLine1: 'Zero-Trust Authentication Gateway,',
    titleLine2: 'JWT, OTP Verification, Google Auth & Passkey.',
    tags: ['#JWT', '#OTP-AUTH', '#GOOGLE-LOGIN', '#PASSKEY', '#SECURITY'],
    description:
      'Bulletproof authentication and identity pipeline featuring signed JSON Web Tokens (JWT), SMS/Email OTP verification, Google OAuth 2.0 social login, biometric Passkey authentication, and protected route middlewares.',
    metrics: [
      { label: 'Security Grade', value: 'A+' },
      { label: 'Token Expiry', value: 'Sliding JWT' },
      { label: 'Attack Protection', value: 'CSRF/XSS' },
    ],
    type: 'cyber',
  },
  {
    id: 'case-13',
    number: '13',
    category: 'ENTERPRISE INTEGRATION / ZOHO & MAILJET',
    titleLine1: 'Workflow Automation Hub,',
    titleLine2: 'Zoho Projects, Sprints APIs, Mailjet & Node Cron.',
    tags: ['#ZOHO-APIS', '#MAILJET', '#CRON-JOBS', '#WORKFLOW-AUTOMATION'],
    description:
      'Seamless multi-platform integration connecting enterprise client workflows with Zoho Projects and Zoho Sprints APIs, scheduled automated background Node.js cron jobs, and high-deliverability Mailjet email dispatch.',
    metrics: [
      { label: 'Cron Sync', value: '24/7 Automation' },
      { label: 'Email Deliverability', value: '99.8%' },
      { label: 'Sync Accuracy', value: '100%' },
    ],
    accentColor: '#E8281A',
    type: 'robotics',
  },
];

