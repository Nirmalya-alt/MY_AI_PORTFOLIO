import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE KNOWLEDGE BASE TRAINED ON NIRMALYA'S PORTFOLIO
// Zero external API keys required — 100% client-side trained
// ─────────────────────────────────────────────────────────────
const PORTFOLIO_KNOWLEDGE = {
  personal: {
    name: "Nirmalya Chatterjee",
    title: "AI & Creative Developer · UI Specialist",
    roles: [
      "AI & Creative Developer",
      "Prompt Engineering",
      "Generative AI",
      "Web & UI Development",
      "Content Writing",
      "Building AI-Driven Applications",
    ],
    status: "Available for Opportunities",
    location: "Kolkata, West Bengal, India 🇮🇳",
    email: "nirmalyachatterjee617@gmail.com",
    phone: "+91-9635316064",
    github: "https://github.com/Nirmalya-alt",
    linkedin: "https://www.linkedin.com/in/nirmalya-chatterjee-9b2784428",
    university: "Sister Nivedita University, Kolkata, West Bengal",
    degree: "Bachelor of Computer Applications (BCA)",
    graduation: "2023 – 2026",
    stats: {
      internships: "3+ Internships",
      projects: "10+ Projects Built",
      certifications: "6+ Certifications (Forage)",
      gradYear: "2026 BCA Graduate",
      skillsCount: "18 Core Skills across Technical, Creative & Tools",
    },
    summary:
      "Nirmalya Chatterjee is a passionate Creative & AI Developer and UI Specialist pursuing his Bachelor of Computer Applications (BCA) at Sister Nivedita University, Kolkata (2023–2026). His work bridges artificial intelligence, prompt engineering, generative AI, DevOps, content writing, and responsive full-stack web development to build engaging, real-world digital products.",
  },

  education: [
    {
      id: "bca",
      emoji: "🎓",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sister Nivedita University, Kolkata, West Bengal",
      duration: "2023 – 2026",
      desc: "Pursuing BCA with focus on software development, AI fundamentals, data structures, web technologies, and database management. Active in coding events and hackathons.",
      keywords: ["bca", "bachelor", "computer applications", "college", "university", "sister nivedita", "snu", "2023", "2026", "graduate", "graduation", "degree", "data structures", "hackathon"],
    },
    {
      id: "hs",
      emoji: "📜",
      degree: "Higher Secondary (12th) — Science Stream",
      institution: "West Bengal Board",
      duration: "Completed 2022",
      desc: "Completed Higher Secondary with Science stream, building a strong analytical and mathematical foundation before entering the field of computer science.",
      keywords: ["12th", "higher secondary", "hs", "school", "science", "west bengal board", "2022", "class 12"],
    },
  ],

  projects: [
    {
      id: "crop",
      emoji: "🌍",
      title: "Climate Impact on Crop Production",
      category: "AI/ML",
      shortDesc: "ML project predicting crop yield using climate data with high accuracy.",
      longDesc:
        "A machine learning project that analyzes historical climate data (temperature, rainfall, humidity) to predict agricultural crop production output. Built with Python's scikit-learn and visualized using React for an interactive dashboard.",
      tech: ["Python", "Machine Learning", "React", "scikit-learn", "Pandas"],
      features: [
        "Climate data preprocessing and feature engineering",
        "Multiple ML model comparison (Random Forest, XGBoost)",
        "Interactive crop yield prediction dashboard",
        "Visualization of climate-crop correlation insights",
      ],
      github: "https://github.com/Nirmalya-alt/farmer-assistent-AI-best-version",
      keywords: ["crop", "climate", "agriculture", "farmer", "yield", "prediction", "scikit", "xgboost", "random forest", "pandas", "rainfall", "humidity", "temperature", "ml"],
    },
    {
      id: "bookleaf",
      emoji: "📚",
      title: "BookLeaf Publishing — Author Support & Communication Portal",
      category: "AI",
      shortDesc: "Enterprise full-stack author support portal for 22,000+ titles with Gemini 3.8 Flash AI.",
      longDesc:
        "An integrated, enterprise-grade full-stack web application designed for BookLeaf Publishing to solve author communication at scale across 22,000+ catalog titles. Features role-based portals for Authors and Operations Admins, real-time ticket synchronization, and server-side Google Gemini 3.8 Flash integration for automated ticket classification, urgency priority scoring, and policy-grounded draft response generation.",
      tech: ["React", "Full-Stack", "Google Gemini 3.8 Flash", "Real-Time Sync", "Role-Based Auth"],
      features: [
        "Role-based portals for Authors and Operations Admins across 22,000+ catalog titles",
        "Real-time support ticket synchronization and status tracking",
        "Server-side Google Gemini 3.8 Flash integration for automated ticket classification",
        "AI-powered urgency priority scoring and policy-grounded draft response generation",
      ],
      github: "https://github.com/Nirmalya-alt/Bookleaf",
      keywords: ["bookleaf", "book leaf", "publishing", "author", "communication portal", "ticket", "22000", "22,000", "gemini", "gemini 3.8", "operations admin"],
    },
    {
      id: "editorial",
      emoji: "✍️",
      title: "Editorial — Full-Stack Blog Publishing Platform",
      category: "Web",
      shortDesc: "Responsive editorial blogging platform built for clarity, typography, and distraction-free reading.",
      longDesc:
        "A production-quality, responsive editorial blogging platform designed for clarity, typography, and distraction-free reading and authoring. Editorial delivers a calm, human-crafted publication experience built with a warm light aesthetic, balanced mathematical typography, real-time database persistence, and secure authentication so writers can create, curate, and share deep perspectives with ease.",
      tech: ["React", "Full-Stack", "Real-Time DB", "Google Auth", "Typography UI"],
      features: [
        "Editorial Homepage with curated featured stories spotlight, category navigator, and latest publications",
        "Full-text search (title, description, content) with category filters (Tech, Programming, AI, Design, Business, Lifestyle, Career)",
        "Distraction-free 740px reading container with reading time estimates, live read counts, author bio cards, and related stories",
        "Email & password authentication with friendly error validation and 1-click Google Sign-in",
      ],
      github: "https://github.com/Nirmalya-alt/Bolg-Writing",
      keywords: ["editorial", "blog", "blogging", "writing platform", "bolg-writing", "740px", "typography", "articles", "stories", "google sign-in", "publication"],
    },
    {
      id: "petguard",
      emoji: "🐾",
      title: "PetGuard",
      category: "AI",
      shortDesc: "AI-powered app for pet health tracking, care tips, and vet guidance.",
      longDesc:
        "PetGuard is an AI-powered web application that helps pet owners manage their pets' health. It provides intelligent care recommendations, health tracking, symptom analysis, and connects users with nearby veterinary resources.",
      tech: ["React", "JavaScript", "AI Integration", "CSS3", "Node.js"],
      features: [
        "AI-driven pet health symptom checker",
        "Daily health tracking and reminders",
        "Personalized care tips and diet recommendations",
        "Vet locator with nearby clinic listings",
      ],
      github: "https://github.com/Nirmalya-alt/mynimal",
      keywords: ["petguard", "pet guard", "pet", "dog", "cat", "animal", "vet", "veterinary", "symptom", "mynimal", "diet care"],
    },
    {
      id: "swiftpay",
      emoji: "💸",
      title: "SwiftPay — Offline UPI Mesh Payments",
      category: "Web",
      shortDesc: "End-to-end offline UPI payments routed via Bluetooth gossip mesh and settled asynchronously.",
      longDesc:
        "An end-to-end demonstration of offline UPI payments routed through a Bluetooth gossip mesh network and settled asynchronously upon internet reconnection. Even in zero-connectivity zones like a basement or airplane cabin, a device signs and hybrid-encrypts the transaction and broadcasts it peer-to-peer across bystander devices until an internet-connected device forwards it to the banking backend for cryptographic verification, deduplication, and atomic settlement. Built with Node.js & Express, deployed on Vercel (MIT License).",
      tech: ["Node.js", "Express", "Bluetooth Mesh", "Hybrid Crypto", "Vercel"],
      features: [
        "Offline transaction signing and hybrid encryption without cellular or Wi-Fi",
        "Peer-to-peer Bluetooth gossip mesh packet hopping across bystander devices",
        "Asynchronous forwarding to banking backend upon internet reconnection",
        "Cryptographic verification, deduplication, and atomic settlement (MIT License)",
      ],
      github: "https://github.com/Nirmalya-alt/UPI_NET_OFLINE",
      keywords: ["swiftpay", "swift pay", "upi", "offline payment", "bluetooth", "mesh", "gossip", "express", "atomic settlement", "crypto", "upi_net_offline", "mit license"],
    },
    {
      id: "devportfolio",
      emoji: "💼",
      title: "DEV's Portfolio",
      category: "UI/UX",
      shortDesc: "Custom-crafted client portfolio website with modern responsive UI and smooth interactions.",
      longDesc:
        "A bespoke client portfolio website engineered to showcase developer expertise, featured projects, and personal branding with a sleek responsive layout, fluid animations, and intuitive navigation across desktop and mobile devices.",
      tech: ["React", "JavaScript", "CSS3", "Responsive UI", "UI/UX"],
      features: [
        "Tailored personal branding and clean modern aesthetic",
        "Interactive project showcase and smooth section navigation",
        "Mobile-first responsive layout across all screen sizes",
        "Optimized performance and clean visual hierarchy",
      ],
      github: "https://github.com/Nirmalya-alt/DEV_PORTFOLIO",
      keywords: ["dev's portfolio", "devs portfolio", "dev portfolio", "dev_portfolio", "client project", "client portfolio"],
    },
    {
      id: "ems",
      emoji: "👥",
      title: "EMS — Employment Management System",
      category: "Web",
      shortDesc: "Full-featured employment management system for employee records, roles, and HR workflows.",
      longDesc:
        "A structured Employment Management System (EMS) designed to streamline workforce administration, employee onboarding, department and role assignments, attendance tracking, and operational HR workflows through an organized, easy-to-use dashboard.",
      tech: ["React", "JavaScript", "Node.js", "Database", "Dashboard UI"],
      features: [
        "Centralized employee directory with profile & role management",
        "Department assignment, status tracking, and task oversight",
        "Streamlined HR workflow and administrative controls",
        "Responsive dashboard layout for quick data management",
      ],
      github: "https://github.com/Nirmalya-alt/EMS",
      keywords: ["ems", "employment management", "employee management", "hr", "attendance", "onboarding", "workforce"],
    },
    {
      id: "bill",
      emoji: "🧾",
      title: "Bill Application",
      category: "Web",
      shortDesc: "Smart billing and invoice generator with automated tax calculations and receipt tracking.",
      longDesc:
        "A practical billing and invoicing application designed for fast, accurate receipt generation. Supports itemized product entry, automatic subtotal, discount, and tax calculations, printable invoice summaries, and clean transaction record keeping.",
      tech: ["JavaScript", "React", "HTML5", "CSS3", "Invoice Logic"],
      features: [
        "Dynamic itemized bill & invoice creation",
        "Automated calculation of subtotals, discounts, and taxes",
        "Clean, print-ready customer receipt formatting",
        "Fast and responsive interface for day-to-day billing workflows",
      ],
      github: "https://github.com/Nirmalya-alt/bill",
      keywords: ["bill", "billing", "invoice", "receipt", "tax", "discount", "subtotal"],
    },
    {
      id: "tripbuddy",
      emoji: "🚀",
      title: "TripBuddy App",
      category: "Web",
      shortDesc: "Smart travel companion app with AI itinerary planning and budget tracking.",
      longDesc:
        "TripBuddy is a smart travel planning application that helps users plan their trips efficiently. It features AI-powered itinerary suggestions, budget management, packing lists, and travel tips for destinations worldwide.",
      tech: ["React", "JavaScript", "CSS3", "AI API", "Local Storage"],
      features: [
        "AI-powered trip itinerary generation",
        "Budget planning and expense tracker",
        "Smart packing list suggestions by destination",
        "Weather-aware activity recommendations",
      ],
      github: "https://github.com/Nirmalya-alt",
      keywords: ["tripbuddy", "trip buddy", "travel", "itinerary", "packing", "budget tracker", "destination"],
    },
    {
      id: "fruit",
      emoji: "🍎",
      title: "Creative UI — Fruit App",
      category: "UI/UX",
      shortDesc: "Visually stunning mobile UI concept for a fruit ordering application.",
      longDesc:
        "A premium mobile-first UI design concept for a fruit and health food ordering app. Showcases advanced CSS animation, glassmorphism design, smooth hover transitions, and a vibrant color palette for a delightful user experience.",
      tech: ["HTML5", "CSS3", "JavaScript", "UI Design"],
      features: [
        "Glassmorphism and vibrant gradient UI elements",
        "Smooth product card micro-interactions",
        "Mobile-first responsive layout",
        "Animated cart and checkout flow",
      ],
      github: "https://github.com/Nirmalya-alt/fruit",
      keywords: ["fruit", "fruit app", "creative ui", "glassmorphism", "checkout flow", "health food"],
    },
  ],

  experience: [
    {
      id: "rt",
      emoji: "🤖",
      company: "RT Network Solutions Pvt. Ltd.",
      role: "AI Image Prompt Engineering Intern",
      period: "2026 – Present",
      bullets: [
        "Designed creative AI image generation prompts for marketing and product campaigns.",
        "Developed structured prompt engineering workflows to improve output quality and consistency.",
        "Collaborated with design and marketing teams on AI-assisted creative projects.",
        "Researched cutting-edge generative AI tools and maintained documentation of best practices.",
      ],
      keywords: ["rt network", "rt network solutions", "prompt engineering intern", "ai image", "marketing campaigns", "annotation"],
    },
    {
      id: "employability",
      emoji: "☁️",
      company: "Employability.life",
      role: "DevOps Intern",
      period: "2024",
      bullets: [
        "Worked with Azure DevOps for project management, CI/CD pipeline setup and maintenance.",
        "Configured and managed Docker containers for application deployment.",
        "Set up and maintained Nginx as a reverse proxy and load balancer.",
        "Worked with virtual machines for staging and production environment management.",
      ],
      keywords: ["employability", "employability.life", "devops intern", "azure devops", "docker", "nginx", "reverse proxy", "load balancer", "virtual machines", "ci/cd"],
    },
    {
      id: "chipher",
      emoji: "💻",
      company: "Chipherbytechnology Pvt Ltd",
      role: "Web Developer Intern",
      period: "2024",
      bullets: [
        "Developed responsive frontend UI components using HTML, CSS, and JavaScript.",
        "Collaborated on web development projects following agile team workflows.",
        "Improved website performance through code optimization and best practices.",
        "Gained hands-on experience with React for dynamic UI development.",
      ],
      keywords: ["chipherbytechnology", "chipher", "web developer intern", "agile", "frontend ui", "performance optimization"],
    },
  ],

  certifications: [
    { emoji: "🔵", company: "Deloitte", title: "Technology Consulting Job Simulation", platform: "Forage", keywords: ["deloitte", "consulting"] },
    { emoji: "☁️", company: "AWS", title: "AWS Cloud Foundations", platform: "Forage", keywords: ["aws", "amazon", "cloud foundations"] },
    { emoji: "🔷", company: "TCS", title: "Software Development Simulation", platform: "Forage", keywords: ["tcs", "tata consultancy"] },
    { emoji: "🟠", company: "Tata Group", title: "Data Analytics Simulation", platform: "Forage", keywords: ["tata group", "data analytics"] },
    { emoji: "🎮", company: "EA (Electronic Arts)", title: "Software Engineering Program", platform: "Forage", keywords: ["ea", "electronic arts"] },
    { emoji: "🟡", company: "Walmart", title: "Software Engineering Simulation", platform: "Forage", keywords: ["walmart"] },
  ],

  skills: {
    technical: ["HTML5", "CSS3", "JavaScript", "React", "Python", "Java", "Node.js", "MongoDB"],
    creative: ["UI/UX Design", "Prompt Engineering", "AI Image Gen", "Figma", "Content Writing", "Generative AI"],
    tools: ["Docker", "Azure DevOps", "Git", "GitHub", "CI/CD", "Nginx"],
    extras: ["Three.js", "scikit-learn", "Pandas", "Express", "Glassmorphism", "Responsive Design", "REST APIs"],
  },

  websiteFeatures: {
    avatar: "Interactive 3D Avatar built with Three.js & GLTFLoader (/models/avatar-new.glb) — tracks cursor and touch movement in real time and can be dragged 360° on both desktop and mobile screens.",
    liquidText: "Custom LiquidText water-ripple physics across headings, nav links, and buttons — responds to both desktop hover and mobile touch interactions.",
    theme: "Built-in Dark & Light Mode toggle in the top navbar (and mobile drawer) with smooth glassmorphism styling.",
    resume: "Interactive Resume Modal with print-ready formatting accessible directly from the Navbar and Hero/About sections.",
    chatbot: "Offline-ready Portfolio AI Assistant trained on all of Nirmalya's projects, internships, education, skills, and certifications with zero external API keys needed.",
    footerYear: "© 2026 Nirmalya Chatterjee · Crafted with ☕",
  },
};

function formatProjectReply(p) {
  const feats = p.features.map((f) => `• ${f}`).join("\n");
  return `${p.emoji} ${p.title} [${p.category}]
${p.longDesc}

✨ Key Features:
${feats}

🛠️ Tech Stack: ${p.tech.join(", ")}
🐙 GitHub: ${p.github}`;
}

function formatExperienceReply(exp) {
  const bullets = exp.bullets.map((b) => `• ${b}`).join("\n");
  return `${exp.emoji} ${exp.role} — ${exp.company} (${exp.period})
${bullets}`;
}

// ─────────────────────────────────────────────────────────────
// INTELLIGENT NATURAL LANGUAGE + BANGLISH ANSWERING ENGINE
// ─────────────────────────────────────────────────────────────
function answerQuestion(query) {
  try {
    const raw = String(query || "").trim();
    const q = raw.toLowerCase();
    if (!q) {
      return "Please ask a question about Nirmalya's skills, 10+ projects, 3 internships, education, certifications, or contact details!";
    }

    // 1. Greetings & Conversational Pleasantries (English + Banglish)
    if (/^(hi|hello|hey|hii+|hola|greetings|good\s*(morning|afternoon|evening)|yo|nomoshkar|namaskar|salam|ki khobor|kemon ach(o|en)|how are you)\b/i.test(q)) {
      return "Hello! 👋 I'm Nirmalya's personal portfolio AI assistant. I know everything about his 10+ featured projects, 3 internships, BCA & 12th education, 18 core skills, 6 Forage certifications, and contact links. Ask me anything!";
    }

    if (/^(thank|thanks|thank you|thx|dhonnobad|awesome|great|cool|nice|good job|bhalo|darun)\b/i.test(q)) {
      return "You're very welcome! 😊 Feel free to ask about any specific project, internship, skill, or open Nirmalya's Resume anytime!";
    }

    if (/who (are|r) you|what are you|what is your name|your purpose|tumi ke|apni ke|bot\b/i.test(q)) {
      return "I'm Nirmalya AI 🤖 — Nirmalya Chatterjee's built-in portfolio assistant! I'm trained directly on every section of this website (projects, internships, education, skills, certifications, website features, and contact info) and work 100% client-side with zero API setup needed.";
    }

    // 2. Specific Project Matches (checked early so project+github / project+tech queries land cleanly)
    if (/crop|climate|agriculture|farmer|yield|xgboost|random forest|scikit/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "crop"));
    }
    if (/bookleaf|book leaf|author support|publishing|22,?000|gemini 3\.?8|ticket/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "bookleaf"));
    }
    if (/editorial|blog|blogging|writing platform|bolg|740px/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "editorial"));
    }
    if (/petguard|pet guard|\bpet\b|pets|vet\b|veterinary|animal|mynimal/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "petguard"));
    }
    if (/swiftpay|swift pay|upi|offline payment|bluetooth|mesh|gossip|upi_net/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "swiftpay"));
    }
    if (/dev'?s portfolio|dev portfolio|dev_portfolio|client portfolio|client project/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "devportfolio"));
    }
    if (/\bems\b|employment management|employee management/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "ems"));
    }
    if (/\bbill(ing)?\b|invoice|receipt/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "bill"));
    }
    if (/tripbuddy|trip buddy|travel|itinerary|packing/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "tripbuddy"));
    }
    if (/fruit|fruit app|creative ui|glassmorphism/i.test(q)) {
      return formatProjectReply(PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "fruit"));
    }

    // 3. Specific Internship / Company Matches
    if (/rt network|image prompt engineering intern|annotation/i.test(q)) {
      return formatExperienceReply(PORTFOLIO_KNOWLEDGE.experience[0]);
    }
    if (/employability|devops intern/i.test(q)) {
      return formatExperienceReply(PORTFOLIO_KNOWLEDGE.experience[1]);
    }
    if (/chipherbytechnology|chipher|web developer intern|web dev intern/i.test(q)) {
      return formatExperienceReply(PORTFOLIO_KNOWLEDGE.experience[2]);
    }

    // 4. Specific Forage Certification Company Matches
    if (/deloitte|aws|tcs|tata group|electronic arts|\bea\b|walmart/i.test(q)) {
      const matched = PORTFOLIO_KNOWLEDGE.certifications.filter((c) =>
        c.keywords.some((kw) => new RegExp(`\\b${kw}\\b`, "i").test(q)) || q.includes(c.company.toLowerCase())
      );
      if (matched.length > 0) {
        const details = matched.map((c) => `${c.emoji} ${c.title} — ${c.company} (${c.platform})`).join("\n");
        return `📜 Verified Forage Certification Match:\n${details}\n\nNirmalya holds 6 Forage Virtual Experience certifications in total (Deloitte, AWS, TCS, Tata Group, EA, and Walmart).`;
      }
    }

    // 5. Website / 3D / UI Feature Questions
    if (/3d|avatar|three\.js|glb|liquid\s*text|water\s*effect|ripple|dark\s*mode|light\s*mode|theme|website\s*feature|built\s*this\s*(site|website|portfolio)/i.test(q)) {
      const wf = PORTFOLIO_KNOWLEDGE.websiteFeatures;
      return `🎭 About This Interactive Portfolio Website:
• 3D Avatar: ${wf.avatar}
• Liquid Text: ${wf.liquidText}
• Theme Toggle: ${wf.theme}
• Resume Modal: ${wf.resume}
• AI Chatbot: ${wf.chatbot}
• Footer: ${wf.footerYear}`;
    }

    // 6. Resume / CV
    if (/resume|cv|curriculum vitae|print|download/i.test(q)) {
      return "📄 You can view and print Nirmalya's complete interactive resume right on this page! Click the 'Resume' button in the top navigation bar, mobile drawer, Hero section, or About section (press Esc anytime to close it).";
    }

    // 7. GitHub / LinkedIn / Social Links (fixed before DevOps skill match)
    if (/(github|linkedin|social|profile\s*link|repo|repositories|links)/i.test(q) && !/skill|tool|devops|version control/i.test(q)) {
      return `🔗 Nirmalya's Official Links & Repositories:
• GitHub Profile: ${PORTFOLIO_KNOWLEDGE.personal.github}
  (If any individual repo link is updating, all active projects & source code are hosted on github.com/Nirmalya-alt)
• LinkedIn: ${PORTFOLIO_KNOWLEDGE.personal.linkedin}
• Email: ${PORTFOLIO_KNOWLEDGE.personal.email}
• Phone: ${PORTFOLIO_KNOWLEDGE.personal.phone}`;
    }

    // 8. Hiring / Availability / Freelance
    if (/hire|job|freelance|available|open to work|opportunity|opportunities|recruit|work with|status/i.test(q)) {
      return `💼 Status: ${PORTFOLIO_KNOWLEDGE.personal.status}!
Nirmalya is open to internships, full-time software/AI/frontend developer roles, and freelance projects (including client portfolios and full-stack web apps).
📧 Email: ${PORTFOLIO_KNOWLEDGE.personal.email}
📞 Phone: ${PORTFOLIO_KNOWLEDGE.personal.phone}`;
    }

    // 9. Contact / Location (English + Banglish)
    if (/contact|email|mail|phone|call|mobile|number|reach|message|touch|address|location|where\s*(is|does|live)|city|kolkata|west bengal|india|kothai|thake|kivabe|jogajog/i.test(q)) {
      return `📬 Contact & Location Details:
• Email: ${PORTFOLIO_KNOWLEDGE.personal.email}
• Phone: ${PORTFOLIO_KNOWLEDGE.personal.phone}
• Location: ${PORTFOLIO_KNOWLEDGE.personal.location}
• GitHub: ${PORTFOLIO_KNOWLEDGE.personal.github}
• LinkedIn: ${PORTFOLIO_KNOWLEDGE.personal.linkedin}
You can also click the email card in the Contact section at the bottom of the page!`;
    }

    // 10. Projects by Category or Tech Filter (e.g. "React projects", "AI projects", "Node projects")
    if (/(project|projects|app|apps|built|made|work)/i.test(q) && /(ai\/ml|ai\b|ml\b|web\b|ui\/ux|ui\b|react|python|node|express|gemini|javascript|full-?stack)/i.test(q)) {
      const matchedProjects = PORTFOLIO_KNOWLEDGE.projects.filter((p) => {
        const haystack = `${p.category} ${p.tech.join(" ")} ${p.longDesc}`.toLowerCase();
        if (/ui\/ux|\bui\b/i.test(q) && p.category === "UI/UX") return true;
        if (/\bml\b|machine learning|python/i.test(q) && /ml|python/i.test(haystack)) return true;
        if (/\bai\b/i.test(q) && (p.category.includes("AI") || /gemini|ai/i.test(haystack))) return true;
        if (/node|express/i.test(q) && /node|express/i.test(haystack)) return true;
        if (/react/i.test(q) && /react/i.test(haystack)) return true;
        if (/\bweb\b|full-?stack/i.test(q) && (p.category === "Web" || /full-?stack/i.test(haystack))) return true;
        if (/gemini/i.test(q) && /gemini/i.test(haystack)) return true;
        return false;
      });

      if (matchedProjects.length > 0) {
        const list = matchedProjects
          .map((p, i) => `${i + 1}. ${p.emoji} ${p.title} (${p.category}) — ${p.shortDesc}\n   GitHub: ${p.github}`)
          .join("\n");
        return `🚀 Matching Projects (${matchedProjects.length} found):\n${list}`;
      }
    }

    // 11. General Projects List (English + Banglish)
    if (/project|projects|built|portfolio work|apps|creations|koto\s*project|ki\s*ki\s*project|project\s*gulo/i.test(q)) {
      const list = PORTFOLIO_KNOWLEDGE.projects
        .map((p, i) => `${i + 1}. ${p.emoji} ${p.title} [${p.category}] — ${p.github}`)
        .join("\n");
      return `🚀 Nirmalya has built 10 Featured Projects across AI/ML, AI, Web, and UI/UX:\n${list}\n\nAsk me about any project by name (e.g., "Tell me about SwiftPay" or "BookLeaf features") for full details!`;
    }

    // 12. Education (BCA & Higher Secondary 12th — English + Banglish)
    if (/education|degree|college|university|school|study|studying|bca|sister nivedita|snu|academic|12th|higher secondary|west bengal board|2022|porashona|kothai por/i.test(q)) {
      return `🎓 Academic Background:
1. Bachelor of Computer Applications (BCA)
   • Institution: Sister Nivedita University, Kolkata, West Bengal
   • Duration: 2023 – 2026
   • Focus: Software development, AI fundamentals, data structures, web technologies, database management, plus coding events and hackathons.

2. Higher Secondary (12th) — Science Stream
   • Board: West Bengal Board
   • Completed: 2022
   • Built a strong analytical and mathematical foundation before entering computer science.`;
    }

    // 13. General Experience / Internships (English + Banglish)
    if (/experience|internship|internships|intern|work history|career|job history|oviggota|kaj/i.test(q)) {
      return `💼 Nirmalya has completed 3 Internships across AI, DevOps, and Web Development:

1. 🤖 AI Image Prompt Engineering Intern — RT Network Solutions Pvt. Ltd. (2026 – Present)
   • Creative AI image generation prompts, structured prompt workflows, design/marketing collaboration, and generative AI best-practice docs.

2. ☁️ DevOps Intern — Employability.life (2024)
   • Azure DevOps & CI/CD pipelines, Docker containers, Nginx reverse proxy/load balancer, and staging/production VMs.

3. 💻 Web Developer Intern — Chipherbytechnology Pvt Ltd (2024)
   • Responsive HTML/CSS/JS UI components, agile team collaboration, performance optimization, and dynamic React UI.

Ask about any company name for full bullet details!`;
    }

    // 14. Certifications
    if (/certif|forage|simulation|badges|courses/i.test(q)) {
      const list = PORTFOLIO_KNOWLEDGE.certifications
        .map((c) => `• ${c.emoji} ${c.title} — ${c.company} (${c.platform})`)
        .join("\n");
      return `📜 Nirmalya holds 6 Verified Forage Virtual Experience Certifications:\n${list}`;
    }

    // 15. Stats / Overview Counts (English + Banglish)
    if (/how many|count|stats|achievements|highlights|koto\b|kotogulo/i.test(q)) {
      const st = PORTFOLIO_KNOWLEDGE.personal.stats;
      return `📊 Nirmalya's Portfolio Highlights:
• 💼 ${st.internships} (RT Network Solutions, Employability.life, Chipherbytechnology)
• 🚀 ${st.projects} (AI/ML, Full-Stack Web, FinTech, UI/UX)
• 📜 ${st.certifications} (Deloitte, AWS, TCS, Tata Group, EA, Walmart)
• 🛠️ ${st.skillsCount}
• 🎓 ${st.gradYear} (Sister Nivedita University, Kolkata)`;
    }

    // 16. Specific Skill & Tech Stack Queries
    if (/content\s*writ|prompt\s*engineer|generative\s*ai|genai|ai\s*image|figma|ui\/ux|\bdesign\b/i.test(q)) {
      return `🎨 Creative, AI & Design Capabilities:
Nirmalya specializes in:
• Prompt Engineering & AI Image Generation (currently AI Image Prompt Engineering Intern at RT Network Solutions)
• Generative AI & Content Writing (featured in his Hero roles & Editorial blogging platform)
• UI/UX Design & Figma (wireframing, glassmorphism, micro-interactions, responsive design — seen in DEV's Portfolio & Fruit App)`;
    }

    if (/(react|three\.js|javascript|\bjs\b|html5?|css3?|frontend)/i.test(q)) {
      return `⚛️ Frontend & Interactive Web Skills:
• Core: ${PORTFOLIO_KNOWLEDGE.skills.technical.slice(0, 4).join(", ")} (HTML5, CSS3, JavaScript, React)
• 3D & Motion: Three.js (GLTFLoader 3D Avatar), LiquidText ripple physics, glassmorphism, and responsive mobile-first layouts.
Used across TripBuddy, Editorial, BookLeaf, DEV's Portfolio, EMS, Bill App, PetGuard, and Fruit App.`;
    }

    if (/(python|java\b|backend|node\.?js|mongodb|database|express|rest\s*api)/i.test(q)) {
      return `🐍 Backend, Languages & Data Skills:
• Languages & Runtime: Python, Java, Node.js, Express
• Database & ML: MongoDB, REST APIs, scikit-learn, Pandas, XGBoost, Random Forest
Used in SwiftPay (Node.js/Express), Climate Crop ML (Python/scikit-learn/Pandas), EMS, and PetGuard.`;
    }

    if (/(devops|docker|azure|ci\/cd|pipeline|nginx|\bgit\b|github|vm|virtual machine)/i.test(q)) {
      return `🐳 DevOps & Developer Tools (6 Tools in Skills Section):
• Tools: Docker, Azure DevOps, Git, GitHub, CI/CD, Nginx
• Hands-on Experience: Configured Azure DevOps CI/CD pipelines, Docker containers, Nginx reverse proxy/load balancing, and staging/production VMs during his DevOps Internship at Employability.life (2024).
• GitHub Profile: ${PORTFOLIO_KNOWLEDGE.personal.github}`;
    }

    if (/(\bai\b|\bml\b|machine learning)/i.test(q)) {
      return `🤖 AI & Machine Learning Expertise:
• Generative AI & Prompt Engineering: AI Image Prompt Engineering Intern at RT Network Solutions (2026–Present), plus server-side Google Gemini 3.8 Flash integration in BookLeaf Publishing.
• Machine Learning: Python, scikit-learn, Pandas, Random Forest & XGBoost (Climate Impact on Crop Production).
• AI Apps: PetGuard (AI symptom checker) & TripBuddy (AI itinerary planner).`;
    }

    if (/skill|technolog|stack|tools|languages|ki\s*ki\s*(pare|jane|skill)|what\s*(can|does)\s*he\s*(do|know)/i.test(q)) {
      return `🛠️ Nirmalya's Complete Skill Set (18 Core Skills + Roles):
• Technical (8): ${PORTFOLIO_KNOWLEDGE.skills.technical.join(", ")}
• Creative & AI (6): ${PORTFOLIO_KNOWLEDGE.skills.creative.join(", ")}
• Tools & DevOps (6): ${PORTFOLIO_KNOWLEDGE.skills.tools.join(", ")}
• Plus: Three.js, scikit-learn, Pandas, Express, Glassmorphism`;
    }

    // 17. About / Bio / Roles (English + Banglish)
    if (/about|who is|tell me about|nirmalya|summary|bio|roles|ki kore|ke\b/i.test(q)) {
      return `👨‍💻 ${PORTFOLIO_KNOWLEDGE.personal.summary}

🎯 Focus Roles: ${PORTFOLIO_KNOWLEDGE.personal.roles.join(" · ")}
📍 Location: ${PORTFOLIO_KNOWLEDGE.personal.location}
🟢 Status: ${PORTFOLIO_KNOWLEDGE.personal.status}`;
    }

    // 18. Intelligent Scored Knowledge-Base Search Fallback
    const stopWords = new Set(["what", "where", "when", "which", "about", "tell", "does", "have", "with", "from", "that", "this", "your", "nirmalya", "please", "know", "more", "details", "give"]);
    const tokens = q
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length >= 2 && !stopWords.has(t));

    if (tokens.length > 0) {
      let bestScore = 0;
      let bestReply = null;

      for (const p of PORTFOLIO_KNOWLEDGE.projects) {
        const hay = `${p.title} ${p.category} ${p.shortDesc} ${p.longDesc} ${p.tech.join(" ")} ${p.features.join(" ")} ${p.keywords.join(" ")}`.toLowerCase();
        const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? (p.title.toLowerCase().includes(t) ? 3 : 1) : 0), 0);
        if (score > bestScore) {
          bestScore = score;
          bestReply = formatProjectReply(p);
        }
      }

      for (const exp of PORTFOLIO_KNOWLEDGE.experience) {
        const hay = `${exp.role} ${exp.company} ${exp.period} ${exp.bullets.join(" ")} ${exp.keywords.join(" ")}`.toLowerCase();
        const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? (exp.company.toLowerCase().includes(t) ? 3 : 1) : 0), 0);
        if (score > bestScore) {
          bestScore = score;
          bestReply = formatExperienceReply(exp);
        }
      }

      for (const edu of PORTFOLIO_KNOWLEDGE.education) {
        const hay = `${edu.degree} ${edu.institution} ${edu.duration} ${edu.desc} ${edu.keywords.join(" ")}`.toLowerCase();
        const score = tokens.reduce((acc, t) => acc + (hay.includes(t) ? 2 : 0), 0);
        if (score > bestScore) {
          bestScore = score;
          bestReply = `${edu.emoji} ${edu.degree}\n• Institution: ${edu.institution}\n• Duration: ${edu.duration}\n• Details: ${edu.desc}`;
        }
      }

      if (bestScore >= 2 && bestReply) {
        return bestReply;
      }
    }

    // 19. Helpful Guided Menu Fallback
    return `I'm trained on every detail of Nirmalya Chatterjee's portfolio! You can ask me about:
• 🚀 10 Featured Projects: Crop Production ML, BookLeaf Publishing, Editorial Blog, PetGuard, SwiftPay UPI Mesh, DEV's Portfolio, EMS, Bill App, TripBuddy, Fruit UI
• 💼 3 Internships: RT Network Solutions, Employability.life (DevOps), Chipherbytechnology
• 🎓 Education: BCA at Sister Nivedita University (2023–2026) & 12th Science (2022)
• 📜 6 Forage Certifications: Deloitte, AWS, TCS, Tata Group, EA, Walmart
• 🛠️ 18 Skills & Website Features: React, Python, AI/Prompt Eng., Docker, Figma, 3D Avatar, Liquid Text
• 📬 Contact, Resume & Links: Email, Phone, GitHub, LinkedIn!`;
  } catch (err) {
    console.error("[Chatbot answer error]:", err);
    return "I'm here to help! Ask me about Nirmalya's 10+ projects, 3 internships, skills, education, certifications, or contact details.";
  }
}

const QUICK_REPLIES = [
  { label: "🛠 Skills", query: "What are your core technical and creative skills?" },
  { label: "🚀 Projects", query: "Tell me about your featured projects" },
  { label: "💼 Experience", query: "What internship experience do you have?" },
  { label: "🎓 Education", query: "Where did you study and what is your degree?" },
  { label: "📜 Certifications", query: "What certifications do you have from Forage?" },
  { label: "📍 Contact", query: "How can I contact Nirmalya?" },
];

function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi! 👋 I'm Nirmalya's portfolio AI assistant, trained on every project, skill, internship, degree, and certification on this site. Ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto scroll to latest message
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, open]);

  // Handle Escape key to close chatbot
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const sendMessage = (textToSend) => {
    const msg = (typeof textToSend === "string" ? textToSend : input).trim();
    if (!msg || loading) return;

    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: msg }]);
    setLoading(true);

    // Natural responsive delay
    setTimeout(() => {
      try {
        const reply = answerQuestion(msg);
        setMessages((prev) => [...prev, { role: "ai", text: reply }]);
      } catch (err) {
        console.error("[Chatbot reply error]:", err);
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: "Nirmalya is a Creative & AI Developer skilled in React, Python, AI Prompt Engineering, and DevOps. You can reach him at nirmalyachatterjee617@gmail.com!",
          },
        ]);
      } finally {
        setLoading(false);
      }
    }, 450);
  };

  const handleClear = () => {
    setMessages([
      {
        role: "ai",
        text: "Conversation cleared! Ask me anything about Nirmalya's projects, internships, skills, education, or contact info.",
      },
    ]);
  };

  if (!open) return null;

  return (
    <div className="chatbot-window" role="dialog" aria-label="Portfolio AI Chatbot">
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <div className="chatbot-avatar">🤖</div>
          <div>
            <h3>Nirmalya AI</h3>
            <span>● Online — Trained Portfolio Assistant</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <button
            className="chatbot-clear-btn"
            onClick={handleClear}
            title="Clear chat"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              fontSize: "12px",
              padding: "4px 8px",
              borderRadius: "4px",
            }}
          >
            Clear
          </button>
          <button className="chatbot-close" onClick={onClose} aria-label="Close Chat">
            ✕
          </button>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-msg ${msg.role}`}
            style={{ whiteSpace: "pre-line", wordBreak: "break-word" }}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="chat-msg ai" style={{ display: "flex", gap: "6px", alignItems: "center" }}>
            <span style={{ animation: "blink 1s infinite" }}>●</span>
            <span style={{ animation: "blink 1s 0.25s infinite" }}>●</span>
            <span style={{ animation: "blink 1s 0.5s infinite" }}>●</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-quick-replies">
        {QUICK_REPLIES.map((qr) => (
          <button
            key={qr.label}
            className="quick-reply-btn"
            onClick={() => sendMessage(qr.query)}
            disabled={loading}
          >
            {qr.label}
          </button>
        ))}
      </div>

      <div className="chatbot-input-row">
        <input
          type="text"
          placeholder="Ask anything about Nirmalya..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          disabled={loading}
          autoFocus
        />
        <button
          className="chatbot-send"
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          aria-label="Send message"
        >
          ➤
        </button>
      </div>
    </div>
  );
}

export default Chatbot;
