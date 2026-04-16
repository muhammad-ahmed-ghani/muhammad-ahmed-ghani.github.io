export const portfolioData = {
    personal: {
        name: "Muhammad Ahmed Ghani",
        role: "Lead Machine Learning Engineer & AI Solution Architect",
        image: "/Muhammad_ahmed_DP.webp",
        email: "i.am.a.pakistani.programmer@gmail.com",
        phone: "+92 301 4902083",
        location: "Lahore, Pakistan",
        tagline: "Architecting the future of Generative AI and Agentic Systems.",
        summary: "AI Solution Architect with 5+ years building production-grade AI at global scale. Creator of ImagineArt 2.0 — the world's most realistic text-to-image model. Expert in Generative AI, Computer Vision, and MLOps. Delivered 25+ high-impact production products used by millions worldwide.",
        socials: {
            github: "https://github.com/muhammad-ahmed-ghani",
            linkedin: "https://www.linkedin.com/in/ahmedghani/",
            twitter: "https://twitter.com/muhammad_ahmed_ghani",
            instagram: "https://instagram.com/muhammad_ahmed_ghani",
            whatsapp: "https://wa.me/923014902083",
            calendly: "https://calendly.com/muhammad-ahmad-ghani/30min"
        }
    },
    experience: [
        {
            company: "ImagineArt",
            role: "Machine Learning Lead",
            period: "Sep 2024 – Present",
            details: [
                "Led the architecture and training of ImagineArt 2.0 — achieving state-of-the-art photorealism and text rendering, surpassing all prior benchmarks.",
                "Built ImagineArt 1.5, the industry-leading text-to-image model, with a team of 7 ML engineers.",
                "Architected Chatly/Everask Agentic AI solutions utilizing GPT-4o, Gemini 1.5 Pro, and Claude 3.5.",
                "Pioneered Imagine Shorts (AI Video Shorts) for automated cinematic content creation.",
                "Developed Imagine Avatars — world-class high-fidelity AI persona generation and animation."
            ]
        },
        {
            company: "ImagineArt",
            role: "Sr. ML Engineer",
            period: "Mar 2024 – Aug 2024",
            details: [
                "Optimized model infrastructure for dynamic CPU/GPU switching, reducing operational costs by 40%.",
                "Developed Saaz — a singing voice cloning product with real-time inference capabilities.",
                "Built professional-grade AI Product Photography with sub-2s inference and production-ready pipelines."
            ]
        },
        {
            company: "Ekkel AI",
            role: "Sr. AI Engineer / Team Lead",
            period: "May 2021 – Mar 2024",
            details: [
                "Led team of 5 engineers, delivering 22+ projects across Speech Processing, NLP, and Computer Vision.",
                "Managed large-scale deployments on AWS, GCP, and Runpod across global infrastructure.",
                "Mentored 8+ junior ML engineers on production-grade AI practices.",
                "Technological Lead at Kodezi — architecting AI-powered developer tools."
            ]
        },
        {
            company: "Kodezi",
            role: "Founding Machine Learning Engineer",
            period: "2022 – 2023",
            details: [
                "Founding member responsible for MLOps and infrastructure of Kodezi's core AI products.",
                "Designed scalable pipelines for VS Code extension integration and real-time code analysis."
            ]
        },
        {
            company: "Sigmetec",
            role: "Software Engineer Intern (Android)",
            period: "Mar 2021 – May 2021",
            details: [
                "Developed scalable architecture for real-time messaging using Firebase and Android Jetpack."
            ]
        }
    ],
    education: {
        university: "University Of Central Punjab",
        degree: "Bachelor of Science in Computer Science",
        period: "2018 – 2022",
        location: "Lahore, Pakistan",
        cgpa: "3.52/4.00",
        details: [
            "Active Lead at Computer Society, organizing international tech competitions."
        ]
    },
    skills: {
        hive: [
            "Generative AI", "Computer Vision", "NLP", "LLMs", "Stable Diffusion",
            "MLOps", "Model Optimization", "Python", "JavaScript", "C", "C++",
            "Shell", "PyTorch", "TensorFlow", "FastAPI", "Flask", "AWS", "GCP",
            "Docker", "Git", "Runpod", "Hugging Face", "OpenCV", "ONNX",
            "MongoDB", "Firebase"
        ],
        categorized: {
            ai_ml: [
                "Generative AI", "Computer Vision", "NLP", "LLMs", "Stable Diffusion",
                "MLOps", "Model Optimization", "LLMOps", "Speech Processing",
                "PyTorch", "TensorFlow", "ONNX", "TensorRT"
            ],
            languages: ["Python", "JavaScript", "TypeScript", "C", "C++", "Shell", "CUDA"],
            infrastructure: ["AWS", "GCP", "Docker", "Runpod", "Git", "FastAPI", "Flask", "MongoDB", "Firebase", "Hugging Face"]
        }
    },
    certifications: [
        { name: "Generative AI For Business Leaders", issuer: "Microsoft", date: "Jul 2024" },
        { name: "DeepLearning Specialization", issuer: "DeepLearning.AI", date: "Jul 2021" },
        { name: "TensorFlow Developer Specialization", issuer: "DeepLearning.AI", date: "Jun 2021" },
        { name: "Artificial Intelligence Specialization", issuer: "Samsung Innovation Campus", date: "Dec 2022" },
        { name: "Intro to AR/VR/MR/XR", issuer: "University of Michigan", date: "Oct 2021" },
        { name: "Fullstack Web Development", issuer: "Ewiglife", date: "Oct 2019" }
    ],
    projects: [
        {
            id: "P.001",
            title: "ImagineArt 2.0",
            category: "Generative AI",
            description: "The world's most realistic text-to-image model. State-of-the-art photorealism, flawless text rendering, and unmatched creative control at production scale.",
            link: "https://www.imagine.art/image?modelListId=69",
            featured: true
        },
        {
            id: "P.002",
            title: "ImagineArt 1.5",
            category: "Generative AI",
            description: "The global standard for photorealistic image synthesis. Led a team of 7 to achieve industry-leading benchmark scores.",
            link: "https://www.imagine.art/image?modelListId=15",
            featured: false
        },
        {
            id: "P.003",
            title: "Imagine Shorts",
            category: "Video Generation",
            description: "AI-automated cinematic video creation for professional studios — from single text prompt to broadcast-ready content.",
            link: "https://www.shorts.imagine.art/dashboard",
            featured: false
        },
        {
            id: "P.004",
            title: "Imagine Avatars",
            category: "Computer Vision",
            description: "High-fidelity AI persona generation and animation. Real-time inference, sub-second rendering, production-grade fidelity.",
            link: "https://www.imagine.art/dashboard/avatars",
            featured: false
        },
        {
            id: "P.005",
            title: "Chatly AI",
            category: "Agentic NLP",
            description: "State-of-the-art multi-agent AI system integrating GPT-4o, Claude 3.5, and Gemini for enterprise-grade conversational intelligence.",
            link: "https://chatlyai.app/",
            featured: false
        }
    ]
};
