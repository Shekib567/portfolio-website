export const config = {
    developer: {
        name: "Shekib",
        fullName: "Shekib Hussain Khil",
        title: "IT-Spezialist für Automatisierungssysteme",
        description: "IT-Spezialist für Automatisierungssysteme mit Erfahrung in SPS-Programmierung, Webentwicklung, Softwareentwicklung, SQL und Netzwerken."
    },
    social: {
        email: "kontakt@shekib.me",
        location: "Monheim am Rhein"
    },
    about: {
        title: "Über mich",
        description: "Ich heiße Shekib Hussain Khil, Fachinformatiker für Anwendungsentwicklung mit Fokus auf Automatisierungstechnik. Ich entwickle responsive Firmenwebseiten und Kundenportale mit HTML, CSS, JavaScript und AWS und setze Backend- sowie Datenbankanbindungen für 5 bis 10 Kundenprojekte um. Self-Service-Portale haben Kundenabläufe um etwa 70 % effizienter gemacht. Meine Schwerpunkte sind zurzeit Web- und Softwareentwicklung, SQL und Netzwerke."
    },
    experiences: [
        {
            position: "Webagentur (Co-Founder)",
            company: "Kaizen Webworks",
            period: "Nov 2025 – Heute",
            location: "Monheim am Rhein",
            description: "Nov 2025 – Heute · Entwicklung responsiver Firmenwebseiten und Kundenportale mit HTML, CSS, JavaScript und AWS. Backend-Implementierung und Datenbankanbindungen für 5–10 Kundenprojekte. Optimierung von Kundenabläufen durch Self-Service-Portale (ca. 70 % Effizienzsteigerung).",
            responsibilities: [
                "Entwicklung responsiver Firmenwebseiten und Kundenportale",
                "Backend-Implementierung und Datenbankanbindungen",
                "Optimierung von Kundenabläufen durch Self-Service-Portale"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "AWS"]
        },
        {
            position: "Ausbildung zum Fachinformatiker für Anwendungsentwicklung",
            company: "ProLeiT by Schneider Electric",
            period: "Aug 2023 – Jan 2026",
            location: "Deutschland",
            description: "Aug 2023 – Jan 2026 · Prozessvisualisierung mit Simatic Step 7 / SPS und Test von Anlagenfunktionen. Parametrierung im Automatisierungssystem und Mitwirkung an internen Kundenportalen.",
            responsibilities: [
                "Prozessvisualisierung (Simatic Step 7 / SPS)",
                "Test von Anlagenfunktionen",
                "Parametrierung im Automatisierungssystem",
                "Mitwirkung an internen Kundenportalen"
            ],
            technologies: ["Simatic Step 7", "SPS", "Kundenportale"]
        },
        {
            position: "Verkäufer (Minijob)",
            company: "Papperts Bäckerei",
            period: "Nov 2021 – Jul 2023",
            location: "Deutschland",
            description: "Nov 2021 – Jul 2023 · Kundenbedienung, Kassiertätigkeit, Brötchen backen und Brötchen belegen.",
            responsibilities: [
                "Kundenbedienung",
                "Kassiertätigkeit",
                "Brötchen backen und belegen"
            ],
            technologies: []
        },
        {
            position: "Fachinformatiker für Anwendungsentwicklung",
            company: "Heinrich-Hertz-Berufskolleg Düsseldorf",
            period: "Aug 2023 – Jan 2026",
            location: "Düsseldorf",
            description: "Aug 2023 – Jan 2026 · Schwerpunkte: Webentwicklung (Java), Softwareentwicklung (Python), SQL und Netzwerke.",
            responsibilities: [
                "Webentwicklung (Java)",
                "Softwareentwicklung (Python)",
                "SQL und Netzwerke"
            ],
            technologies: ["Java", "Python", "SQL", "Netzwerke"]
        },
        {
            position: "Fachhochschulreife",
            company: "Fachoberschule Marktheidenfeld",
            period: "Sep 2021 – Jul 2022",
            location: "Marktheidenfeld",
            description: "Sep 2021 – Jul 2022 · Fachhochschulreife an der Fachoberschule Marktheidenfeld.",
            responsibilities: [],
            technologies: []
        },
        {
            position: "Mittlerer Schulabschluss",
            company: "Städtische Wirtschaftsschule Würzburg",
            period: "Sep 2019 – Jul 2021",
            location: "Würzburg",
            description: "Sep 2019 – Jul 2021 · Mittlerer Schulabschluss an der Städtischen Wirtschaftsschule Würzburg.",
            responsibilities: [],
            technologies: []
        }
    ],
    projects: [] as {
        id: number;
        title: string;
        category: string;
        technologies: string;
        image: string;
        description: string;
        link: string;
    }[],
    /*projects: [
        {
            id: 1,
            title: "Drishti",
            category: "AI / LLM",
            technologies: "Python, PyTorch, Transformers, FastAPI, React, MongoDB",
            image: "/images/Drishti.png",
            description: "Bangladesh's first intelligent advanced AI chatbot powered by a custom Large Language Model. Features natural language understanding, contextual conversations, and multilingual support including Bengali.",
            link: "https://huggingface.co/red1-for-hek/drishti-ilm-x1"
        },
        {
            id: 2,
            title: "VoteChain",
            category: "Blockchain",
            technologies: "Solidity, Web3.js, React, Ethereum, IPFS, MetaMask, Node.js",
            image: "/images/VoteChain.png",
            description: "A decentralized election system built on blockchain technology ensuring transparent, tamper-proof, and verifiable voting. Features smart contracts for vote integrity and real-time result tracking.",
            link: "https://github.com/red1-for-hek/smart-election-by-blockchain"
        },
        {
            id: 4,
            title: "Flood Spaces 2.0",
            category: "AI / ML",
            technologies: "Python, TensorFlow, Pandas, React, FastAPI, GIS",
            image: "/images/FloodSpaces.png",
            description: "Predicts flood risks across Bangladesh up to one month in advance and sends early alerts to help people prepare.",
            link: "https://github.com/red1-for-hek/Flood-Spaces-2.0"
        },
        {
            id: 5,
            title: "Phoenix 3.0",
            category: "AI Assistant",
            technologies: "Python, Speech Recognition, PyAutoGUI, OpenAI API, Tkinter",
            image: "/images/Phoenix3.0.png",
            description: "A JARVIS-inspired personal AI desktop assistant. Controls system functions, manages tasks, answers queries, automates workflows, and provides voice-activated computing experience.",
            link: "https://github.com/red1-for-hek/phoenix3.0"
        },
        {
            id: 6,
            title: "RedxChess",
            category: "AI / Game Engine",
            technologies: "Python, C++, Neural Networks, Bitboards, UCI Protocol",
            image: "/images/RedxChess.png",
            description: "A high-performance chess engine rated 3640 ELO. Features advanced search algorithms, neural network evaluation, and optimized bitboard representation for lightning-fast move generation.",
            link: "/play"
        },
        {
            id: 7,
            title: "Prodesk",
            category: "E-commerce",
            technologies: "React, Node.js, MongoDB, Express, Stripe",
            image: "/images/Prodesk.png",
            description: "A complete e-commerce platform with secure checkout and smooth product browsing.",
            link: "https://github.com/red1-for-hek/prodesk"
        },
        {
            id: 8,
            title: "HekTools",
            category: "Security / Android",
            technologies: "Kotlin, Android SDK, Firebase, Python, Encryption",
            image: "/images/hektools.png",
            description: "An advanced Android monitoring and security research tool. Features remote device management, activity logging, and encrypted data transmission for security testing purposes.",
            link: ""
        }
    ], */
    contact: {
        email: "kontakt@shekib.me",
        phone: "+49 176 44767986",
        address: "Tegelerstraße 8, 40789 Monheim",
        linkedin: "https://www.linkedin.com/in/shekib-hussainkhil-125b85326/",
        facebook: "https://m.facebook.com/ahmed.shekib.56/",
        instagram: "https://www.instagram.com/shekib100523/"
    },
    skills: {
        develop: {
            title: "PROGRAMMIERUNG",
            description: "Sprachen für Software- und Webentwicklung",
            details: "C#, Java, Python, HTML, CSS, JavaScript und SQL.",
            tools: ["C#", "Java", "Python", "HTML", "CSS", "JavaScript", "SQL"]
        },
        design: {
            title: "TOOLS & KOMPETENZEN",
            description: "Frameworks & Tools · KI & Data Science · Sprachen",
            details: "Frameworks & Tools: WPF, MVVM, Flask, .NET, Git, VS Code, SQL Server. KI & Data Science: Prompt Engineering, Generative AI, Machine Learning. Sprachen: Deutsch (fließend), Englisch (fließend), Dari (Muttersprache), Pashtu (fließend), Hindi/Urdu (Anfänger).",
            tools: ["WPF", "MVVM", "Flask", ".NET", "Git", "VS Code", "SQL Server", "Prompt Engineering", "Generative AI", "Machine Learning"]
        }
    }
};
