import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Layers,
  Cpu,
  Terminal,
  ArrowUpRight,
  FileText,
  Download,
  Check,
  Building2,
  Calendar,
  Briefcase,
  Award,
  GraduationCap,
  Globe,
  Mail,
  Phone,
  Github,
  Linkedin,
  Compass,
  Code2,
  Database,
  Smartphone,
  Box,
  Bot,
  ShieldCheck,
  Cloud,
  CheckCircle2,
} from 'lucide-react';
import { sound } from '../lib/sound';

interface AboutProps {
  onOpenInquiry?: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenInquiry }) => {
  const [copiedResume, setCopiedResume] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<string>('ALL');

  const skillCategories = [
    {
      category: 'Frontend & UI',
      icon: <Code2 className="w-3.5 h-3.5 text-blue-500" />,
      items: ['React.js', 'Next.js', 'Vue.js', 'Nuxt.js', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'React Router', 'Vite', 'Tailwind CSS', 'Bootstrap', 'DaisyUI', 'Responsive Web Design'],
    },
    {
      category: 'Backend & APIs',
      icon: <Cpu className="w-3.5 h-3.5 text-emerald-500" />,
      items: ['Node.js', 'Express.js', 'REST APIs', 'Axios', 'CORS', 'dotenv', 'API Testing (Postman/Bruno)', 'Centralized Error Handling'],
    },
    {
      category: 'Databases & Storage',
      icon: <Database className="w-3.5 h-3.5 text-amber-500" />,
      items: ['MongoDB Atlas', 'Mongoose ODM', 'MySQL', 'SQLite', 'Amazon S3 Document Vault'],
    },
    {
      category: 'Mobile Development',
      icon: <Smartphone className="w-3.5 h-3.5 text-purple-500" />,
      items: ['React Native', 'Android App Development', 'Native Modules', 'AsyncStorage Offline Sync', 'Cross-Platform Workflows'],
    },
    {
      category: '3D & Immersive Web',
      icon: <Box className="w-3.5 h-3.5 text-rose-500" />,
      items: ['Three.js', 'Blender 3D Modeling', 'GLTF/GLB Asset Pipeline', 'Interactive 3D Web Experiences', 'WebGL 2.0 Shaders'],
    },
    {
      category: 'AI & LLM Integration',
      icon: <Bot className="w-3.5 h-3.5 text-red-500" />,
      items: ['AskMyLLM', 'Intent Recognition', 'Vector Classification', 'AI API Integration', 'Streaming AI Completions'],
    },
    {
      category: 'Auth & Security',
      icon: <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />,
      items: ['JWT (JSON Web Tokens)', 'OTP Verification (SMS/Email)', 'Google Authentication (OAuth 2.0)', 'Passkey Biometrics', 'Security Verification Flows'],
    },
    {
      category: 'Cloud, DevOps & Integrations',
      icon: <Cloud className="w-3.5 h-3.5 text-cyan-500" />,
      items: ['AWS (Amazon S3)', 'Heroku', 'Cloudflare CDN & DNS', 'Bunny.net', 'Git & GitHub', 'Mailjet API', 'Zoho Projects API', 'Zoho Sprints API', 'Node Cron Jobs'],
    },
  ];

  const filteredSkillCategories = activeSkillCategory === 'ALL'
    ? skillCategories
    : skillCategories.filter(sc => sc.category === activeSkillCategory);

  const careerMilestones = [
    {
      period: 'MAR 2026 — PRESENT',
      role: 'Full Stack Developer (MERN, Next.js & React Native)',
      company: 'Walstar Technologies',
      location: 'Kolhapur, Maharashtra',
      description:
        'Developing and maintaining full-stack web and mobile applications using MERN stack, Next.js, and React Native. Building scalable REST APIs with Node.js/Express and managing MongoDB databases with Mongoose. Integrating modern 3D web experiences using Three.js and Blender, and architecting LLM/AI-powered features with intent recognition and vector classification. Managing production deployments on AWS, Heroku, and Cloudflare.',
      tags: ['MERN', 'Next.js', 'React Native', 'Three.js', 'Blender', 'AskMyLLM', 'AWS'],
    },
    {
      period: 'AUG 2025 — MAR 2026',
      role: 'MERN Stack Developer',
      company: 'Neosao Services Pvt Ltd',
      location: 'Kolhapur, Maharashtra',
      description:
        'Engineered responsive web applications using React.js, Node.js, Express.js, and MongoDB. Integrated third-party APIs including Mailjet, Zoho Projects, and Zoho Sprints, along with scheduled Node cron jobs. Implemented secure authentication and verification flows including JWT, OTP verification, and Passkey. Collaborated directly with clients on requirements and feature deliveries.',
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Mailjet', 'Zoho APIs', 'JWT/Passkey'],
    },
    {
      period: 'JAN 2025 — JUL 2025',
      role: 'Full Stack Developer (MERN)',
      company: 'Suyotech Solutions',
      location: 'Kolhapur, Maharashtra',
      description:
        'Crafted dynamic frontends using React.js, Tailwind CSS, Bootstrap, and DaisyUI. Developed robust backend services in Node.js/Express, modeled data in MongoDB and MySQL, and conducted extensive API testing and debugging using Postman and Bruno collections. Maintained version control and merge workflows with Git and GitHub.',
      tags: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'Postman', 'Bruno', 'Git'],
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      period: '2023 — 2025',
      institution: 'Sanjay Ghodawat University, Atigre',
      score: 'CGPA: 8.5',
      focus: 'Advanced Software Engineering, Distributed Systems & Full-Stack Architecture',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      period: '2020 — 2023',
      institution: 'Annasaheb Dange College, Hatkanangale',
      score: 'CGPA: 8.0',
      focus: 'Object-Oriented Programming, Database Management Systems & Web Technologies',
    },
  ];

  const certifications = [
    {
      title: 'Full Stack Web Development Program',
      issuer: 'Geekster',
      description: 'Comprehensive specialization covering MERN stack, data structures, algorithms, and real-world application architecture.',
    },
    {
      title: 'Data Science Certification',
      issuer: 'Infosys',
      description: 'Data analytics, Python fundamentals, predictive modeling, and data manipulation workflows.',
    },
  ];

  const languages = [
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Hindi', level: 'Fluent / Full Professional' },
    { name: 'Marathi', level: 'Native / Bilingual' },
  ];

  const extraCurricular = [
    {
      icon: <Compass className="w-4 h-4 text-[#E8281A]" />,
      title: 'Photography & Heritage Exploration',
      desc: 'Passionate about landscape and architectural photography, with a focus on exploring and documenting the historical hill forts of Maharashtra.',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-emerald-500" />,
      title: 'Learning New Technologies',
      desc: 'Constantly testing emerging web technologies, WebGL innovations, AI agent frameworks, and modern full-stack developer tooling.',
    },
    {
      icon: <Box className="w-4 h-4 text-purple-500" />,
      title: 'Creative UI & 3D Interactive Design',
      desc: 'Experimenting with Blender 3D assets, Three.js shaders, and interactive user experiences that make web applications fun and memorable.',
    },
  ];

  const handleDownloadResume = () => {
    sound.playClick(1000);
    const cvText = `# VIJAY KAMBLE
Full Stack Developer (MERN, Next.js & React Native)
Kolhapur, Maharashtra, India
Portfolio: https://my-portfolio-vijay-kamble.vercel.app
Phone: (+91) 8483022465 | Email: vijaykamble3321@gmail.com
GitHub: https://github.com/vijaykamble3321
LinkedIn: https://linkedin.com/in/vijay-kamble-3929b2315

---

## PROFESSIONAL SUMMARY
MERN Stack Developer with 1.5+ years of hands-on experience building responsive web and mobile applications using React.js, Node.js, Express.js, MongoDB, Next.js, and React Native. Proven track record of developing secure REST APIs, managing production deployments (AWS, Heroku, Cloudflare), and collaborating directly with clients on requirements and delivery. Skilled in creating modern, interactive 3D websites using Three.js and Blender, and currently building LLM/AI-powered applications with real-time features.

---

## TECHNICAL SKILLS
- **Frontend Development**: React.js, Next.js, Vue.js, Nuxt.js, JavaScript (ES6+), HTML5, CSS3, React Router, Vite
- **UI & Styling**: Tailwind CSS, Bootstrap, DaisyUI, Responsive Web Design
- **Backend Development**: Node.js, Express.js, REST APIs, Axios, CORS, dotenv
- **Databases**: MongoDB, Mongoose, MySQL, SQLite
- **Mobile Development**: React Native, Android App Development, Mobile Application Development
- **3D Web Development**: Three.js, Blender, 3D Web Experiences, Interactive 3D Websites
- **AI & LLM Integration**: AskMyLLM, Intent Recognition, Vector Classification, AI API Integration
- **Authentication & Security**: JWT, OTP Verification, Google Authentication, Passkey, Security Verification Flows
- **Cloud & Deployment**: AWS, Amazon S3, Heroku, Bunny.net, Cloudflare, Server Deployment, Environment Configuration
- **DevOps & Version Control**: Git, GitHub, Branch Management, Merge Conflict Resolution, Deployment & Release
- **Testing & Debugging**: Postman, Bruno, API Testing, Debugging, Build & Deployment Validation
- **Third-Party Integrations**: Mailjet API, Zoho Projects API, Zoho Sprints API, Cron Jobs
- **Development Tools**: VS Code, npm, Nodemon, Git

---

## PROFESSIONAL EXPERIENCE

### Full Stack Developer (MERN, Next.js & React Native)
**Walstar Technologies, Kolhapur** | Mar 2026 – Present
- Developing and maintaining full-stack web and mobile applications using MERN stack, Next.js, and React Native.
- Building scalable REST APIs with Node.js and Express.js; managing MongoDB databases with Mongoose.
- Integrating modern 3D web elements using Three.js and Blender for high-impact visual presentations.
- Implementing LLM/AI integrations with intent recognition and vector classification for intelligent workflows.
- Deploying and maintaining production applications on AWS, Heroku, and Cloudflare.

### MERN Stack Developer
**Neosao Services Pvt Ltd, Kolhapur** | Aug 2025 – Mar 2026
- Designed and developed client-facing web applications using React.js, Node.js, Express.js, and MongoDB.
- Integrated third-party APIs (Mailjet, Zoho Projects, Zoho Sprints) and configured automated cron jobs.
- Implemented authentication and security verification flows including JWT, OTP verification, and Passkey.
- Collaborated closely with clients to gather requirements, deliver features, and handle iterative feedback.

### Full Stack Developer (MERN)
**Suyotech Solutions, Kolhapur** | Jan 2025 – Jul 2025
- Built responsive frontends using React.js, Tailwind CSS, Bootstrap, and DaisyUI.
- Developed backend services with Node.js and Express.js, performing database modeling in MongoDB and MySQL.
- Conducted API testing and debugging using Postman and Bruno to ensure high endpoint reliability.
- Managed version control with Git and GitHub, handling branch workflows and merge conflicts.

---

## KEY PROJECTS
1. **Hospital Management System (MERN Stack)**: Comprehensive clinical management portal with patient electronic records, appointment scheduling, and 3-tier role-based access control (Admin, Doctor, Patient).
2. **Healthcare Mobile App (React Native & MERN)**: Cross-platform mobile telehealth solution for patient consultations, doctor slot bookings, and medical history synchronization.
3. **Job Portal & ATS (Next.js & MERN)**: Dynamic recruitment platform featuring job listings, candidate resume parsing, and 5-stage automated application tracking.
4. **Loan Management System (MERN Stack)**: Fintech application automating loan applications, multi-tier officer approvals, dynamic EMI calculations, and encrypted KYC uploads to Amazon S3.
5. **E-Commerce Enterprise Website (MERN Stack)**: High-speed product catalog filtering, cart management, payment gateway integration (Stripe/Razorpay), and admin inventory dashboard.
6. **Interactive 3D Web Experiences (Three.js & Blender)**: Custom WebGL product inspection and 3D websites with custom camera choreography and shaders.
7. **AskMyLLM Integration (AI & Vector Classification)**: Generative AI workflows featuring intent recognition, vector search embeddings, and streaming responses.
8. **Cloud Deployments & Infrastructure**: Multi-cloud orchestration on AWS EC2/S3, Heroku dynos, and Cloudflare edge caching.

---

## EDUCATION
- **Master of Computer Applications (MCA)** (2023 – 2025)
  Sanjay Ghodawat University, Atigre — CGPA: 8.5
- **Bachelor of Computer Applications (BCA)** (2020 – 2023)
  Annasaheb Dange College, Hatkanangale — CGPA: 8.0

---

## CERTIFICATIONS
- **Full Stack Web Development Program** — Geekster
- **Data Science Certification** — Infosys

---

## LANGUAGES
- English (Professional Working Proficiency)
- Hindi (Fluent)
- Marathi (Native)

---

## EXTRA-CURRICULAR ACTIVITIES & INTERESTS
- Passionate about Photography and exploring Historical Forts & Heritage Sites across Maharashtra.
- Actively interested in Learning New Technologies and modern web development trends.
- Enjoy Creative UI Design, 3D Modeling in Blender, and Building Interactive Web Applications.
`;
    const blob = new Blob([cvText], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Vijay_Kamble_Full_Stack_Developer_Resume.md');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 3000);
  };

  return (
    <section
      id="about"
      className="relative w-full bg-[#FFFFFF] dark:bg-[#0A0A0A] border-t border-[#0A0A0A]/10 dark:border-white/10 px-4 sm:px-8 lg:px-16 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#0A0A0A]/10 dark:border-white/10 pb-4 gap-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8281A]" />
            <h2 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
              SECTION 02 // PROFILE & CAREER DOSSIER
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-neutral-400">
            <span>KOLHAPUR, MAHARASHTRA, INDIA</span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-bold">1.5+ YEARS EXP</span>
          </div>
        </div>

        {/* Top Grid: Profile Showcase & Core Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Developer Card + Contact Quick Bar */}
          <div className="lg:col-span-5 space-y-6">
            {/* Identity Card */}
            <div className="relative bg-neutral-900 dark:bg-[#151515] text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Terminal className="w-32 h-32 text-white" />
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-white text-[#0A0A0A] flex items-center justify-center font-bold text-2xl font-mono shadow-md border-2 border-white">
                    VK
                  </div>
                  <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>AVAILABLE FOR HIRE</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    Vijay Kamble
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-emerald-400 mt-1">
                    Full Stack Developer (MERN, Next.js & React Native)
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 font-mono flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-neutral-500" />
                    <span>my-portfolio-vijay-kamble.vercel.app</span>
                  </p>
                </div>

                {/* Direct Contact Links */}
                <div className="pt-4 border-t border-neutral-800 space-y-2.5 text-xs font-mono">
                  <a
                    href="mailto:vijaykamble3321@gmail.com"
                    className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#E8281A]" />
                    <span>vijaykamble3321@gmail.com</span>
                  </a>
                  <a
                    href="tel:+918483022465"
                    className="flex items-center gap-2.5 text-neutral-300 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>(+91) 8483022465</span>
                  </a>
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href="https://github.com/vijaykamble3321"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white transition-colors text-[11px]"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>github.com/vijaykamble3321</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/vijay-kamble-3929b2315"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white transition-colors text-[11px]"
                    >
                      <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                {/* Resume Download Action */}
                <div className="pt-2">
                  <button
                    onClick={handleDownloadResume}
                    className="w-full py-2.5 rounded-lg bg-white text-[#0A0A0A] text-xs font-mono font-bold flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors cursor-pointer shadow-sm"
                  >
                    {copiedResume ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>RESUME DOWNLOADED!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>DOWNLOAD COMPLETE RESUME (.MD)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Inquire Card */}
            <div
              onClick={() => {
                sound.playClick(1000);
                if (onOpenInquiry) onOpenInquiry();
              }}
              className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 hover:border-black dark:hover:border-neutral-500 transition-colors cursor-pointer flex items-center justify-between group"
            >
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-black dark:group-hover:text-white">
                  Interested in collaborating or hiring?
                </div>
                <div className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
                  Full-time roles, contracts, or high-impact freelance
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A] flex items-center justify-center group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Right Column: Professional Summary & Stats */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#E8281A] font-bold uppercase">
                EXECUTIVE SUMMARY
              </span>
              <h3 className="font-headline text-3xl sm:text-4xl text-[#0A0A0A] dark:text-white leading-tight">
                MERN STACK DEVELOPER CRAFTING ROBUST WEB, MOBILE & 3D EXPERIENCES.
              </h3>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
              <p>
                I am a passionate <strong>MERN Stack Developer with 1.5+ years of hands-on experience</strong> building responsive web and mobile applications using <strong>React.js, Node.js, Express.js, MongoDB, Next.js, and React Native</strong>.
              </p>
              <p>
                With a proven track record of developing secure REST APIs, managing production multi-cloud deployments across <strong>AWS, Heroku, and Cloudflare</strong>, I collaborate directly with clients and teams from technical requirements discovery to final delivery.
              </p>
              <p>
                Beyond standard web apps, I specialize in creating <strong>modern, interactive 3D websites using Three.js and Blender</strong>, and am actively building <strong>LLM/AI-powered applications with real-time vector classification and intent recognition</strong>.
              </p>
            </div>

            {/* Highlight Metric Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-neutral-200 dark:border-neutral-800">
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-white">1.5+ Yrs</div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5">Hands-On Exp</div>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-white">13+ Projects</div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5">Web & Mobile</div>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-white">8.5 CGPA</div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5">MCA Masters</div>
              </div>
              <div className="p-3 bg-neutral-50 dark:bg-neutral-900/60 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-900 dark:text-white">3 Cloud</div>
                <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400 uppercase mt-0.5">AWS • Heroku • CF</div>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  sound.playClick(1000);
                  if (onOpenInquiry) onOpenInquiry();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0A0A0A] text-white hover:bg-neutral-800 dark:bg-white dark:text-[#0A0A0A] dark:hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400" />
                <span>SAVE RESUME (.MD)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-3">
              <Briefcase className="w-4 h-4 text-[#E8281A]" />
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
                WORK EXPERIENCE // PRODUCTION TRACK RECORD
              </h3>
            </div>
            <span className="text-xs font-mono text-neutral-500 dark:text-neutral-400">MERN • NEXT.JS • REACT NATIVE</span>
          </div>

          <div className="space-y-4">
            {careerMilestones.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:border-neutral-400 dark:hover:border-neutral-600 transition-all shadow-2xs hover:shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-[#E8281A] tracking-wider uppercase">
                      {exp.period}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white mt-1">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 flex items-center gap-2 mt-0.5">
                      <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:justify-end max-w-sm">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-xs bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed pt-2 border-t border-neutral-100 dark:border-neutral-800">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Cpu className="w-4 h-4 text-[#E8281A]" />
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
                TECHNICAL SKILLS & COMPETENCY MATRIX
              </h3>
            </div>

            {/* Filter pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => {
                  sound.playClick(900);
                  setActiveSkillCategory('ALL');
                }}
                className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                  activeSkillCategory === 'ALL'
                    ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A]'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                ALL ({skillCategories.reduce((acc, c) => acc + c.items.length, 0)})
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.category}
                  onClick={() => {
                    sound.playClick(950);
                    setActiveSkillCategory(cat.category);
                  }}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono transition-colors cursor-pointer ${
                    activeSkillCategory === cat.category
                      ? 'bg-[#0A0A0A] text-white dark:bg-white dark:text-[#0A0A0A]'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkillCategories.map((group) => (
              <div
                key={group.category}
                className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-2 text-xs font-bold text-neutral-900 dark:text-white font-mono">
                    {group.icon}
                    <span>{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-xs bg-neutral-50 dark:bg-neutral-800/80 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 pt-2 border-t border-neutral-100 dark:border-neutral-800 flex justify-between">
                  <span>Proficiency</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Production Ready</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-4 h-4 text-[#E8281A]" />
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
                EDUCATION QUALIFICATIONS
              </h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#E8281A] font-bold">{edu.period}</span>
                    <span className="px-2 py-0.5 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 rounded font-bold">
                      {edu.score}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white">{edu.degree}</h4>
                  <div className="text-xs text-neutral-600 dark:text-neutral-400 font-mono">{edu.institution}</div>
                  <div className="text-xs text-neutral-500 dark:text-neutral-400 pt-1 border-t border-neutral-100 dark:border-neutral-800">
                    {edu.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Languages Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-[#E8281A]" />
              <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
                CERTIFICATIONS & LANGUAGES
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-neutral-900 dark:text-white">{cert.title}</span>
                    <span className="px-2 py-0.5 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-[10px] font-bold">
                      {cert.issuer}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{cert.description}</p>
                </div>
              ))}

              {/* Languages Box */}
              <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#121212] space-y-2">
                <div className="text-xs font-mono font-bold text-neutral-900 dark:text-white">
                  LANGUAGES KNOWN
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {languages.map((lang) => (
                    <div key={lang.name} className="p-2 bg-white dark:bg-neutral-900 rounded border border-neutral-200 dark:border-neutral-700">
                      <div className="text-xs font-bold text-neutral-900 dark:text-white">{lang.name}</div>
                      <div className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">{lang.level}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra-Curricular Activities & Passions */}
        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800 space-y-6">
          <div className="flex items-center gap-3">
            <Compass className="w-4 h-4 text-[#E8281A]" />
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-[#0A0A0A] dark:text-white">
              EXTRA-CURRICULAR ACTIVITIES & PERSONAL PASSIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {extraCurricular.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#121212] hover:border-neutral-300 dark:hover:border-neutral-600 transition-colors space-y-2"
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};


