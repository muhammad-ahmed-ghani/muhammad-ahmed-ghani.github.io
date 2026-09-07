export const portfolioData = {
    personal: {
        name: "Muhammad Ahmed Ghani",
        role: "AI Research Lead & Machine Learning Lead at ImagineArt",
        image: "/Muhammad_ahmed_DP.webp",
        email: "muhammad.ahmed@imagine.art",
        personalEmail: "i.am.a.pakistani.programmer@gmail.com",
        phone: "+92 301 4902083",
        location: "Islamabad, Pakistan",
        tagline: "Generative image, video and speech models — research through to production.",
        summary: "AI Research Lead and Machine Learning Lead at ImagineArt, directing the model programme behind ImagineArt 2.0, 1.5 Pro and 1.5 — text-to-image models built for photorealism and accurate text rendering. Works across image, video, speech and agentic systems, taking research from first experiment through to production inference.",
        socials: {
            github: "https://github.com/muhammad-ahmed-ghani",
            linkedin: "https://www.linkedin.com/in/ahmedghani/",
            twitter: "https://x.com/_ahmedghani",
            huggingface: "https://huggingface.co/ahmedghani",
            producthunt: "https://www.producthunt.com/@muhammad_ahmed_ghani",
            instagram: "https://instagram.com/_ahmedghani",
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
                "Led architecture and training for ImagineArt 2.0, focused on photorealism and text rendering.",
                "Built ImagineArt 1.5, a text-to-image model, with a team of seven ML engineers.",
                "Architected Chatly/Everask Agentic AI solutions utilizing GPT-4o, Gemini 1.5 Pro, and Claude 3.5.",
                "Built Imagine Shorts for automated video generation from text prompts.",
                "Developed Imagine Avatars for AI persona generation and animation."
            ]
        },
        {
            company: "ImagineArt",
            role: "Sr. ML Engineer",
            period: "Mar 2024 – Aug 2024",
            details: [
                "Optimised model infrastructure for dynamic CPU/GPU switching, reducing operational cost by about 40%.",
                "Developed Saaz — a singing voice cloning product with real-time inference capabilities.",
                "Built AI product photography with sub-2s inference and production pipelines."
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
        period: "F18",
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
            description: "Text-to-image model built for photorealism and accurate text rendering at production scale. Led its architecture and training.",
            link: "https://www.imagine.art/image?modelListId=69",
            featured: true
        },
        {
            id: "P.002",
            title: "ImagineArt 1.5",
            category: "Generative AI",
            description: "Photorealistic text-to-image model, built with a team of seven ML engineers.",
            link: "https://www.imagine.art/image?modelListId=15",
            featured: false
        },
        {
            id: "P.003",
            title: "Imagine Shorts",
            category: "Video Generation",
            description: "Automated video generation, from a single text prompt through to a finished cut.",
            link: "https://www.shorts.imagine.art/dashboard",
            featured: false
        },
        {
            id: "P.004",
            title: "Imagine Avatars",
            category: "Computer Vision",
            description: "AI persona generation and animation, with real-time inference and sub-second rendering.",
            link: "https://www.imagine.art/dashboard/avatars",
            featured: false
        },
        {
            id: "P.005",
            title: "Chatly AI",
            category: "Agentic NLP",
            description: "Multi-agent conversational system integrating GPT-4o, Claude 3.5 and Gemini.",
            link: "https://chatlyai.app/",
            featured: false
        }
    ]
};
