import { useState, useRef, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
// COMPREHENSIVE KNOWLEDGE BASE TRAINED ON NIRMALYA'S PORTFOLIO
// ─────────────────────────────────────────────────────────────
const PORTFOLIO_KNOWLEDGE = {
  personal: {
    name: "Nirmalya Chatterjee",
    title: "AI & Creative Developer, UI Specialist",
    location: "Kolkata, West Bengal, India 🇮🇳",
    email: "nirmalyachatterjee617@gmail.com",
    phone: "+91-9635316064",
    github: "https://github.com/Nirmalya-alt",
    linkedin: "https://www.linkedin.com/in/nirmalya-chatterjee-9b2784428",
    university: "Sister Nivedita University, Kolkata (SNU)",
    degree: "Bachelor of Computer Applications (BCA)",
    graduation: "2023 – 2026",
    summary:
      "Nirmalya Chatterjee is a passionate Creative & AI Developer and UI Specialist currently pursuing his BCA at Sister Nivedita University in Kolkata (2023–2026). He combines artificial intelligence with modern design, prompt engineering, and interactive web development to build exceptional digital experiences.",
  },

  projects: [
    {
      id: "tripbuddy",
      title: "TripBuddy App",
      category: "Web & AI",
      tags: ["tripbuddy", "trip", "travel", "itinerary", "booking"],
      desc: "TripBuddy is a smart travel companion & booking application offering both traditional and AI-powered trip planning. Features personalized AI trip recommendations, ready-made booking, transport options, 24/7 chat support, an admin dashboard, and coupon management. Built with React, JavaScript, CSS3, and AI APIs.",
    },
    {
      id: "crop",
      title: "Climate Impact on Crop Production",
      category: "AI/ML",
      tags: ["crop", "climate", "ml", "machine learning", "agriculture", "scikit", "yield", "prediction", "xgboost", "random forest"],
      desc: "An end-to-end Machine Learning project that predicts crop yields using historical climate data (temperature, rainfall, humidity). Built with Python, scikit-learn, Pandas, and an interactive React dashboard comparing models like Random Forest and XGBoost with high accuracy. GitHub: https://github.com/Nirmalya-alt/farmer-assistent-AI-best-version",
    },
    {
      id: "bookleaf",
      title: "BookLeaf Publishing — Author Support & Communication Portal",
      category: "AI & Enterprise Full-Stack",
      tags: ["bookleaf", "publishing", "author", "ticket", "support", "gemini", "portal", "catalog"],
      desc: "An integrated, enterprise-grade full-stack web application designed for BookLeaf Publishing to solve author communication at scale across 22,000+ catalog titles. Features role-based portals for Authors and Operations Admins, real-time ticket synchronization, and server-side Google Gemini 3.8 Flash integration for automated ticket classification, urgency priority scoring, and policy-grounded draft response generation. GitHub: https://github.com/Nirmalya-alt/Bookleaf",
    },
    {
      id: "editorial",
      title: "Editorial — Full-Stack Blog Publishing Platform",
      category: "Web & Full-Stack",
      tags: ["editorial", "blog", "blogging", "writing", "articles", "stories", "typography", "reading"],
      desc: "A production-quality, responsive editorial blogging platform designed for clarity, balanced mathematical typography, and distraction-free reading and authoring. Features an Editorial Homepage, full-text search with category filters (Tech, Programming, AI, Design, Business, Lifestyle, Career), a centered 740px reading container with live read counts & reading time estimates, real-time database persistence, and email/password + 1-click Google Sign-in. GitHub: https://github.com/Nirmalya-alt/Bolg-Writing",
    },
    {
      id: "petguard",
      title: "PetGuard",
      category: "AI Health",
      tags: ["petguard", "pet", "dog", "cat", "animal", "health", "symptom", "vet"],
      desc: "PetGuard is an AI-powered web app for pet health tracking, symptom checking, personalized diet care recommendations, and connecting owners with nearby veterinary clinics. Built using React, JavaScript, AI integration, and Node.js. GitHub: https://github.com/Nirmalya-alt/mynimal",
    },
    {
      id: "swiftpay",
      title: "SwiftPay — Offline UPI Mesh Payments",
      category: "FinTech & Mesh Networking",
      tags: ["swiftpay", "upi", "offline", "mesh", "bluetooth", "payment", "crypto", "vercel", "express"],
      desc: "An end-to-end demonstration of offline UPI payments routed through a Bluetooth gossip mesh network and settled asynchronously upon internet reconnection. Built with Node.js & Express (MIT License, deployed on Vercel), devices sign and hybrid-encrypt transactions and hop peer-to-peer until an online device forwards them for cryptographic verification, deduplication, and atomic settlement. GitHub: https://github.com/Nirmalya-alt/UPI_NET_OFLINE",
    },
    {
      id: "devportfolio",
      title: "DEV's Portfolio",
      category: "Client Portfolio & UI/UX",
      tags: ["dev", "dev's portfolio", "client", "portfolio"],
      desc: "A custom-built client portfolio website crafted with modern responsive UI, interactive project showcases, and smooth animations for personal branding. GitHub: https://github.com/Nirmalya-alt/DEV_PORTFOLIO",
    },
    {
      id: "ems",
      title: "EMS — Employment Management System",
      category: "Enterprise Web App",
      tags: ["ems", "employment", "employee", "management", "hr", "attendance"],
      desc: "An Employment Management System (EMS) designed to streamline employee records, role management, task oversight, and HR workflows with a clean administrative dashboard. GitHub: https://github.com/Nirmalya-alt/EMS",
    },
    {
      id: "bill",
      title: "Bill Application",
      category: "Utility & Web App",
      tags: ["bill", "billing", "invoice", "receipt", "tax"],
      desc: "A smart billing and invoice management application for itemized bill creation, automated subtotal & tax calculation, and customer receipt management. GitHub: https://github.com/Nirmalya-alt/bill",
    },
    {
      id: "fruit",
      title: "Creative UI — Fruit App",
      category: "UI/UX Design",
      tags: ["fruit", "ui", "glassmorphism", "design", "creative ui", "mobile ui"],
      desc: "A mobile-first UI concept for a healthy food and fruit ordering app. Demonstrates advanced CSS animations, glassmorphism aesthetics, smooth micro-interactions, and responsive design built with HTML5, CSS3, and JavaScript. GitHub: https://github.com/Nirmalya-alt/fruit",
    },
    {
      id: "portfolio",
      title: "3D Interactive Portfolio",
      category: "Web & 3D",
      tags: ["portfolio", "website", "avatar", "three.js", "liquid text", "3d"],
      desc: "Nirmalya's personal portfolio featuring a real-time interactive 3D avatar built with Three.js and GLTFLoader, fluid liquid text physics, dark/light theme switching, and this AI assistant trained on his exact background!",
    },
  ],

  experience: [
    {
      company: "RT Network Solutions Pvt. Ltd.",
      role: "AI Image Prompt Engineering & Annotation Intern",
      period: "2026 – Present",
      tags: ["rt network", "prompt engineering", "image prompt", "ai prompt", "annotation"],
      desc: "At RT Network Solutions (2026–Present), Nirmalya designs creative AI image generation prompts for marketing and product campaigns, crafts structured prompt engineering workflows to improve output consistency, and performs dataset annotation and quality validation for AI/CV models.",
    },
    {
      company: "Employability.life",
      role: "DevOps Intern",
      period: "2024",
      tags: ["devops", "employability", "docker", "azure", "ci/cd", "nginx", "pipelines"],
      desc: "At Employability.life (2024), Nirmalya worked on Azure DevOps pipelines, automated CI/CD workflows using GitHub Actions, deployed and managed Docker containers, configured Nginx as a reverse proxy/load balancer, and managed virtual machine environments.",
    },
    {
      company: "Chipherbytechnology Pvt Ltd",
      role: "Web Developer Intern",
      period: "2024",
      tags: ["chipherbytechnology", "web developer", "frontend", "html", "css", "javascript"],
      desc: "At Chipherbytechnology (2024), Nirmalya developed responsive frontend UI components using HTML, CSS, JavaScript, and React, contributed to event management web apps, and practiced agile team workflows.",
    },
  ],

  certifications: [
    { company: "Deloitte", title: "Technology Consulting Job Simulation", platform: "Forage" },
    { company: "Amazon Web Services (AWS)", title: "AWS Cloud Foundations", platform: "Forage" },
    { company: "TCS", title: "Software Development Simulation", platform: "Forage" },
    { company: "Tata Group", title: "Data Analytics Virtual Experience", platform: "Forage" },
    { company: "Electronic Arts (EA)", title: "Software Engineering Program", platform: "Forage" },
    { company: "Walmart", title: "Software Engineering Simulation", platform: "Forage" },
  ],

  skills: {
    frontend: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Three.js", "Responsive UI", "Glassmorphism"],
    backend: ["Python", "Java", "Node.js", "MongoDB", "REST APIs"],
    ai_ml: ["AI Prompt Engineering", "AI Image Generation", "Generative AI", "scikit-learn", "Pandas", "Machine Learning"],
    devops_tools: ["Docker", "Azure DevOps", "Git", "GitHub", "CI/CD Pipelines", "GitHub Actions", "Nginx", "Linux/VMs"],
    design: ["UI/UX Design", "Figma", "Visual Thinking", "Creative Problem Solving", "Storytelling"],
  },
};

// ─────────────────────────────────────────────────────────────
// INTELLIGENT NATURAL LANGUAGE ANSWERING ENGINE
// ─────────────────────────────────────────────────────────────
function answerQuestion(query) {
  try {
    const q = query.toLowerCase().trim();
    if (!q) return "Please ask a question about Nirmalya's skills, projects, experience, or education!";

    // 1. Greetings & Pleasantries
    if (/^(hi|hello|hey|hii|hola|greetings|good\s*(morning|afternoon|evening)|yo)\b/i.test(q)) {
      return "Hello! 👋 I'm Nirmalya's personal portfolio assistant. Ask me anything about his projects, skills, internship experience, certifications, or how to get in touch!";
    }

    if (/who (are|r) you|what are you|what is your name|your purpose/i.test(q)) {
      return "I'm Nirmalya's AI Portfolio Assistant! 🤖 I'm trained with full details about his background as an AI & Creative Developer, his 10+ projects, 3 internships, 6 certifications, and technical skills.";
    }

    if (/thank|thanks|awesome|great|cool|nice|good job/i.test(q)) {
      return "You're very welcome! 😊 Feel free to ask more, check out the Projects section, or view his Resume!";
    }

    // 2. Contact & Hiring Questions
    if (/contact|email|phone|call|mobile|number|reach|message|touch|address|location|where (is|does|live)|city|kolkata/i.test(q)) {
      return `📬 You can reach Nirmalya directly:
• Email: ${PORTFOLIO_KNOWLEDGE.personal.email}
• Phone: ${PORTFOLIO_KNOWLEDGE.personal.phone}
• Location: ${PORTFOLIO_KNOWLEDGE.personal.location}
• GitHub: ${PORTFOLIO_KNOWLEDGE.personal.github}
• LinkedIn: ${PORTFOLIO_KNOWLEDGE.personal.linkedin}
He is always happy to connect!`;
    }

    if (/hire|job|internship|freelance|available|open to work|opportunity|recruit|work with/i.test(q)) {
      return "💼 Yes! Nirmalya is actively open to internship, full-time developer, and freelance opportunities. He specializes in AI Prompt Engineering, React frontend development, UI/UX design, and DevOps. You can reach him at nirmalyachatterjee617@gmail.com!";
    }

    // 3. Resume / CV
    if (/resume|cv|curriculum vitae|download|print/i.test(q)) {
      return "📄 You can view and print Nirmalya's complete interactive resume right here on this website! Simply click the 'Resume' button in the navbar or top header.";
    }

    // 4. Specific Projects
    if (/tripbuddy|trip buddy|travel|itinerary/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "tripbuddy");
      return `🚀 ${p.title} (${p.category}):\n${p.desc}\n\nKey highlights: AI trip suggestions, budget & travel planning, admin panel, and 24/7 support features.`;
    }

    if (/bookleaf|book leaf|author support|publishing portal|ticket/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "bookleaf");
      return `📚 ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/editorial|blog|blogging|writing platform|bolg/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "editorial");
      return `✍️ ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/crop|climate|agriculture|yield|scikit|xgboost|random forest|farmer/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "crop");
      return `🌍 ${p.title} (${p.category}):\n${p.desc}\n\nIt analyzes temperature, humidity, and rainfall to provide accurate agricultural yield forecasts using Python ML models!`;
    }

    if (/swiftpay|upi|offline payment|bluetooth mesh|gossip mesh|upi_net/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "swiftpay");
      return `💸 ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/dev'?s portfolio|dev portfolio|client portfolio/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "devportfolio");
      return `💼 ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/\bems\b|employment management|employee management/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "ems");
      return `👥 ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/\bbill\b|billing|invoice/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "bill");
      return `🧾 ${p.title} (${p.category}):\n${p.desc}`;
    }

    if (/petguard|pet guard|pet|veterinary|vet\b|animal|mynimal/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "petguard");
      return `🐾 ${p.title} (${p.category}):\n${p.desc}\n\nFeatures an AI symptom analyzer, care tips, and nearby vet clinic directory.`;
    }

    if (/fruit|fruit app|creative ui/i.test(q)) {
      const p = PORTFOLIO_KNOWLEDGE.projects.find((x) => x.id === "fruit");
      return `🍎 ${p.title} (${p.category}):\n${p.desc}\n\nHighlights premium glassmorphism, fluid micro-interactions, and clean mobile responsiveness.`;
    }

    if (/3d|avatar|liquid text|three\.js|glb/i.test(q)) {
      return "🎭 This website features an interactive 3D Avatar rendered in real-time with Three.js (using GLTFLoader for /models/avatar-new.glb) that tracks cursor movement and can be dragged 360°, plus custom liquid text physics that responds to cursor velocity!";
    }

    // General projects query
    if (/project|projects|built|portfolio work|apps|creations/i.test(q)) {
      return `🚀 Nirmalya has built 10+ standout projects:
1. 🌍 Climate Impact on Crop Production — ML yield predictor (github.com/Nirmalya-alt/farmer-assistent-AI-best-version)
2. 📚 BookLeaf Publishing — Enterprise Author Support Portal with Gemini 3.8 Flash AI (github.com/Nirmalya-alt/Bookleaf)
3. ✍️ Editorial — Full-Stack Blog Publishing Platform (github.com/Nirmalya-alt/Bolg-Writing)
4. 💸 SwiftPay — Offline UPI Bluetooth Mesh Payments (github.com/Nirmalya-alt/UPI_NET_OFLINE)
5. 🐾 PetGuard — AI pet health companion (github.com/Nirmalya-alt/mynimal)
6. 💼 DEV's Portfolio — Client portfolio project (github.com/Nirmalya-alt/DEV_PORTFOLIO)
7. 👥 EMS — Employment Management System (github.com/Nirmalya-alt/EMS)
8. 🧾 Bill Application — Smart billing & invoicing app (github.com/Nirmalya-alt/bill)
9. 🚀 TripBuddy App — Smart AI travel planner
10. 🍎 Creative Fruit UI — Mobile glassmorphism UI (github.com/Nirmalya-alt/fruit)`;
    }

    // 5. Specific Experience / Companies
    if (/rt network|prompt engineering intern|annotation/i.test(q)) {
      const exp = PORTFOLIO_KNOWLEDGE.experience[0];
      return `🤖 ${exp.role} at ${exp.company} (${exp.period}):\n${exp.desc}`;
    }

    if (/employability|devops intern|docker|azure/i.test(q)) {
      const exp = PORTFOLIO_KNOWLEDGE.experience[1];
      return `☁️ ${exp.role} at ${exp.company} (${exp.period}):\n${exp.desc}`;
    }

    if (/chipherbytechnology|chipher|web dev intern/i.test(q)) {
      const exp = PORTFOLIO_KNOWLEDGE.experience[2];
      return `💻 ${exp.role} at ${exp.company} (${exp.period}):\n${exp.desc}`;
    }

    if (/experience|internship|intern|work history|career|job history/i.test(q)) {
      return `💼 Nirmalya has completed 3 internships:
1. 🤖 AI Image Prompt Engineering Intern — RT Network Solutions (2026–Present): AI prompt refinement, dataset annotation, generative AI workflows.
2. ☁️ DevOps Intern — Employability.life (2024): Azure DevOps CI/CD, Docker containerization, Nginx reverse proxy.
3. 💻 Web Developer Intern — Chipherbytechnology Pvt Ltd (2024): Responsive React & JavaScript frontend development.`;
    }

    // 6. Education
    if (/education|degree|college|university|school|study|studying|bca|sister nivedita|snu|academic/i.test(q)) {
      return `🎓 Nirmalya is pursuing his Bachelor of Computer Applications (BCA) at Sister Nivedita University, Kolkata (2023–2026). Prior to that, he completed his Higher Secondary (12th) in the Science stream under the West Bengal Board in 2022.`;
    }

    // 7. Certifications
    if (/certif|forage|deloitte|aws|tcs|tata|ea|walmart|simulation/i.test(q)) {
      return `📜 Nirmalya holds 6 verified Forage Virtual Experience Certifications:
• Deloitte — Technology Consulting Job Simulation
• AWS — AWS Cloud Foundations
• TCS — Software Development Simulation
• Tata Group — Data Analytics Virtual Experience
• Electronic Arts (EA) — Software Engineering Program
• Walmart — Software Engineering Simulation`;
    }

    // 8. Individual Skills
    if (/(react|three\.js|javascript|js|html|css|frontend)/i.test(q)) {
      return "⚛️ Nirmalya is well-versed in modern frontend technologies: React, JavaScript (ES6+), HTML5, CSS3 design systems, Three.js 3D rendering, responsive web design, and glassmorphic UI architectures.";
    }

    if (/(python|java|backend|node|mongodb|sql|database)/i.test(q)) {
      return "🐍 On the backend and programming side, Nirmalya writes clean Python, Java, and Node.js code, with experience working with MongoDB, REST APIs, and data science libraries like Pandas and scikit-learn.";
    }

    if (/(devops|docker|azure|ci\/cd|pipeline|nginx|git|github)/i.test(q)) {
      return "🐳 Nirmalya has strong DevOps fundamentals: Docker containers, Azure DevOps pipelines, GitHub Actions CI/CD workflows, Nginx reverse proxy and load balancing, Git version control, and Linux virtual machines.";
    }

    if (/(ai|ml|machine learning|prompt|prompt engineering|genai|generative ai)/i.test(q)) {
      return "🤖 Nirmalya specializes in AI and Machine Learning: AI prompt engineering, image annotation and quality control, model development with scikit-learn and XGBoost, and integrating modern AI APIs into web apps.";
    }

    if (/(design|ui|ux|figma|glassmorphism)/i.test(q)) {
      return "🎨 For UI/UX and design, Nirmalya creates engaging visual layouts in Figma, applies modern glassmorphism, and builds interactive micro-animations that deliver delightful user experiences.";
    }

    if (/skill|technolog|stack|tools|what do you know|languages/i.test(q)) {
      return `🛠️ Nirmalya's primary skills include:
• Technical: React, Python, Java, JavaScript, Node.js, MongoDB, Three.js, HTML5/CSS3
• AI & Data: Prompt Engineering, GenAI, Machine Learning (scikit-learn, Pandas)
• DevOps: Docker, Azure DevOps, CI/CD (GitHub Actions), Nginx, Git
• Creative & UI: UI/UX Design, Figma, Glassmorphism, Micro-interactions`;
    }

    // 9. Bio / Overview / About
    if (/about|who is|tell me about nirmalya|summary|bio/i.test(q)) {
      return `${PORTFOLIO_KNOWLEDGE.personal.summary}\n\nHe is based in Kolkata, India, and is skilled across AI, DevOps, web development, and creative UI design!`;
    }

    // 10. Fallback with helpful suggestions
    return `Great question! Nirmalya is an AI & Creative Developer based in Kolkata with experience in React, Python, Three.js, DevOps (Docker, Azure), and AI Prompt Engineering.

You can ask me specifically about:
• 🚀 His projects: "SwiftPay", "BookLeaf Publishing", "Editorial", "Climate Crop ML", "DEV's Portfolio", "EMS", "Bill App", "PetGuard", "Fruit App"
• 💼 His internships: "RT Network", "Employability.life", "Chipherbytechnology"
• 🎓 His education: "Where does he study?" or "Certifications"
• 📬 How to contact him or view his resume!`;
  } catch (err) {
    console.error("[Chatbot answer error]:", err);
    return "I'm here to help! You can ask me about Nirmalya's skills, projects, internships, or contact details.";
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
      text: "Hi! 👋 I'm Nirmalya's portfolio AI assistant. Ask me anything about his skills, projects, internships, education, or how to get in touch!",
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
    const msg = (textToSend || input).trim();
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
        text: "Conversation cleared! What would you like to know about Nirmalya?",
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
