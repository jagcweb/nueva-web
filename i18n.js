// ==================== SISTEMA DE INTERNACIONALIZACIÓN ====================

const translations = {
    es: {
        // Loader
        loader: {
            text: "Cargando portafolio..."
        },
        
        // Navegación
        nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            skills: "Skills",
            projects:  "Proyectos",
            testimonials: "Testimonios",
            contact:  "Contacto",
            cta:  "Hablemos"
        },
        
        // Hero
        hero: {
            badge: "Disponible para proyectos",
            greeting: "Hola, mi nombre es",
            subtitle:  "Desarrollo ",
            rotating: {
                1: "aplicaciones web",
                2: "smart contracts",
                3: "experiencias únicas",
                4: "soluciones escalables"
            },
            description: 'Fullstack Developer con <strong>+6 años de experiencia</strong> especializado en crear aplicaciones web modernas, APIs robustas y soluciones blockchain. Transformo ideas en productos digitales excepcionales.',
            cta: {
                projects: "Ver proyectos",
                contact: "Contactar",
                cv: "Descargar CV"
            },
            scroll: "Scroll",
            profile: {
                role: "Fullstack Developer",
                years: "Años Exp.",
                projects: "Proyectos",
                clients: "Clientes"
            }
        },
        
        // About
        about: {
            tag: "Conóceme",
            title: "Sobre Mí",
            subtitle: "Más que un desarrollador, un creador de soluciones",
            lead: 'Soy un <span class="highlight">desarrollador fullstack apasionado</span> por transformar ideas complejas en soluciones digitales elegantes y funcionales.',
            p1: "Con más de 6 años de experiencia en el desarrollo de software, he tenido la oportunidad de trabajar en proyectos diversos que van desde startups innovadoras hasta empresas consolidadas.  Mi enfoque combina la excelencia técnica con un profundo entendimiento de las necesidades del negocio.",
            p2: "Me especializo en el desarrollo de aplicaciones web completas, desde el diseño de arquitecturas backend robustas hasta interfaces de usuario intuitivas y atractivas. También tengo experiencia en el mundo blockchain, desarrollando smart contracts y aplicaciones descentralizadas.",
            details: {
                location: "Ubicación",
                locationValue: "Madrid (España)",
                email: "Email",
                availability: "Disponibilidad",
                availabilityValue: "Disponible",
                languages: "Idiomas",
                languagesValue: "Español, Inglés"
            },
            interests: {
                title: "Intereses",
                startups: "Startups",
                web3: "Web3",
                ai: "AI/ML",
                gaming: "Gaming",
                music: "Música",
                travel: "Viajar"
            },
            expBadge: {
                number: "6+",
                text: "Años de<br>Experiencia"
            }
        },
        
        // Experience
        experience: {
            tag: "Trayectoria",
            title: "Experiencia & Educación",
            subtitle: "Mi camino profesional en el desarrollo de software",
            tabs: {
                work: "Experiencia Laboral",
                education: "Educación",
                certifications: "Certificaciones"
            },
            current: "Actual",
            work: {
                job1: {
                    date: "jul. 2022 - Presente",
                    title: "Desarrollador web Fullstack",
                    company:  "Digital Training (Viewnext / Cajamar)",
                    description: "Trabajando con Viewnext dando soporte a Banco Cajamar. Desarrollo con Symfony y Angular. Uso de Jira, Jenkins y Bitbucket. Scripts de automatización en Python."
                },
                job2: {
                    date: "feb. 2022 - jul. 2022",
                    title: "Desarrollador web Fullstack",
                    company: "E-Coordina",
                    description: "Creación de nuevos proyectos y actualización de proyectos legados. Uso de múltiples lenguajes y frameworks: JavaScript & TypeScript (NestJS, React), PHP (Laravel), Python (Django). Creación de scripts en Python (automatización, Selenium, microservicios). Uso de Git, Docker, ESLint."
                },
                job3: {
                    date: "ene. 2022 - feb. 2022",
                    title:  "Automatización de procesos",
                    company: "NTT Data (Everis)",
                    description: "Automatización de procesos para clientes y la propia empresa. Trabajo con Docker y diseñados con Node-RED (Node.js). Empleo de Selenium."
                },
                job4: {
                    date: "feb. 2021 - Presente",
                    title: "Desarrollador web Fullstack y Gestor de Plataforma",
                    company: "Kooperador",
                    description: "Creación de la plataforma web con HTML5, CSS3 (Bootstrap), JavaScript (jQuery + AJAX) y PHP (Laravel). Uso de librerías internas (Hash, Crypt, Mail) y externas (Invoices, Excels, Stripe). WordPress con WooCommerce, Yoast SEO, Elementor y creación de plugins propios con PHP."
                }
            },
            education:  {
                edu1: {
                    date: "Graduado",
                    title: "Administración de Sistemas Informáticos",
                    institution: "Formación Profesional",
                    description: "Grado en Administración de Sistemas Informáticos. Aprendizaje de redes, sistemas operativos, bases de datos y administración de servidores."
                },
                edu2: {
                    date: "Continuo",
                    title:  "Desarrollo Web Autodidacta",
                    institution: "Formación autodidacta",
                    description: "Aprendizaje autodidacta de desarrollo web: HTML5, CSS3, JavaScript, TypeScript, PHP, Python, Solidity y sus frameworks asociados."
                }
            },
            certs: {
                aws: {
                    title: "AWS Solutions Architect",
                    issuer: "Amazon Web Services"
                },
                google: {
                    title: "Google Cloud Professional",
                    issuer: "Google Cloud Platform"
                },
                blockchain: {
                    title: "Blockchain Developer",
                    issuer: "Ethereum Foundation"
                },
                security: {
                    title: "Cybersecurity Fundamentals",
                    issuer: "CompTIA"
                }
            }
        },
        
        // Skills
        skills: {
            tag: "Habilidades",
            title: "Skills & Tecnologías",
            subtitle: "Las herramientas que domino para crear soluciones excepcionales",
            categories: {
                backend: {
                    title: "Backend Development",
                    subtitle: "Arquitecturas robustas y escalables"
                },
                frontend: {
                    title: "Frontend Development",
                    subtitle: "Interfaces modernas e interactivas"
                },
                blockchain: {
                    title: "Blockchain & Web3",
                    subtitle: "Desarrollo descentralizado"
                },
                database:  {
                    title: "Bases de Datos",
                    subtitle:  "SQL y NoSQL"
                }
            },
            tools: "Herramientas & DevOps"
        },
        
        // Projects
        projects: {
            tag: "Portfolio",
            title:  "Proyectos Destacados",
            subtitle: "Una selección de mis trabajos más recientes",
            filters: {
                all: "Todos",
                fullstack: "Fullstack",
                frontend: "Frontend",
                backend: "Backend",
                blockchain:  "Blockchain"
            },
            featured: "Destacado",
            viewCode: "Ver código",
            liveDemo: "Demo en vivo",
            moreInfo: "Más info",
            documentation: "Documentación",
            viewMore: "Ver más en GitHub",
            items: {
                soinuka: {
                    category: "Fullstack",
                    title: "New-Soinuka",
                    description: "Plataforma web completa desarrollada con Laravel."
                },
                marketplaceEth: {
                    category: "Blockchain",
                    title: "Marketplace ETH",
                    description: "Marketplace descentralizado construido con Next.js y Web3.js."
                },
                autoMessage: {
                    category: "Bot / Automatización",
                    title: "Auto-Message Discord",
                    description: "Bot de automatización de mensajes para Discord desarrollado en Python."
                },
                faucet: {
                    category: "Blockchain",
                    title: "Faucet",
                    description: "Faucet creado con React, Solidity, Ganache, Truffle y BulmaCSS."
                },
                nasaOracle: {
                    category: "Blockchain / Oracle",
                    title: "NASA Oracle",
                    description: "Oracle con Smart Contracts que consume datos de la API de la NASA. React y Solidity."
                },
                hotspania: {
                    category: "Fullstack",
                    title: "Hotspania",
                    description: "Plataforma web desarrollada con Laravel."
                },
                niolshotsBack: {
                    category: "Backend",
                    title: "Niolshots Backend",
                    description: "API backend para Niolshots desarrollada con Node.js."
                },
                niolshotsFront: {
                    category: "Frontend",
                    title: "Niolshots Frontend",
                    description: "Interfaz de usuario para Niolshots desarrollada con React."
                },
                rescueAirdrop: {
                    category: "Blockchain / Security",
                    title: "Rescue Airdrop Linea",
                    description: "Script para rescatar tokens de airdrop de Linea desde una wallet comprometida."
                },
                rescueHype: {
                    category: "Blockchain",
                    title: "Rescue Hype",
                    description: "Herramienta de rescate de tokens desarrollada con JavaScript y Ethers.js."
                },
                diavla: {
                    category: "Fullstack",
                    title: "Diavla Hookah",
                    description: "Plataforma web para Diavla Hookah desarrollada con Laravel."
                }
            }
        },
        
        // Testimonials
        testimonials:  {
            tag:  "Testimonios",
            title: "Lo que dicen de mí",
            subtitle: "Opiniones de clientes y colaboradores",
            clients: "Empresas con las que he colaborado y trabajado",
            items: {
                1: {
                    text: '"Trabajar con JagcWeb fue una experiencia excepcional. Su capacidad técnica y profesionalismo superaron nuestras expectativas.  Entregó un producto de alta calidad en tiempo récord."',
                    name: "María García",
                    role: "CEO, TechStartup S.L."
                },
                2: {
                    text: '"La solución blockchain que desarrolló para nosotros revolucionó nuestro modelo de negocio.  Su conocimiento en Solidity y Web3 es impresionante.  Sin duda volveremos a trabajar juntos."',
                    name: "Carlos Rodríguez",
                    role: "CTO, CryptoVentures"
                },
                3: {
                    text: '"Un desarrollador excepcional.  Su API nos permitió escalar de 1000 a 100. 000 usuarios sin problemas. La documentación y el código son impecables.  100% recomendado."',
                    name: "Laura Martínez",
                    role: "Product Manager, ScaleUp Inc."
                }
            }
        },
        
        // Contact
        contact:  {
            tag:  "Contacto",
            title: "¿Hablamos?",
            subtitle: "Estoy disponible para nuevos proyectos y oportunidades",
            heading: 'Construyamos algo <span class="gradient-text">increíble</span> juntos',
            description: "Ya sea que tengas un proyecto en mente, una pregunta o simplemente quieras saludar, estaré encantado de escucharte. Mi bandeja de entrada está siempre abierta.",
            methods: {
                email: "Email",
                phone:  "Teléfono",
                location: "Ubicación",
                locationValue: "Madrid (España) - Remoto"
            },
            social: "También puedes encontrarme en:",
            form: {
                title: "Envíame un mensaje",
                subtitle: "Respondo en menos de 24 horas",
                name: "Nombre",
                email: "Email",
                subject: "Asunto",
                budget: "Presupuesto estimado",
                budgetOptions: {
                    small: "Menos de 1. 000€",
                    medium: "1.000€ - 5.000€",
                    large: "5.000€ - 10.000€",
                    enterprise: "Más de 10.000€"
                },
                message:  "Mensaje",
                privacy: 'Acepto la <a href="#">política de privacidad</a> y el tratamiento de mis datos.',
                submit: "Enviar mensaje"
            },
            toast: {
                success: {
                    title:  "¡Mensaje enviado!",
                    message: "Te responderé en menos de 24 horas."
                }
            }
        },
        
        // CTA
        cta: {
            title: "¿Listo para empezar tu proyecto?",
            subtitle: "Transformemos juntos tu idea en realidad.  Contáctame y hablemos de cómo puedo ayudarte.",
            start: "Empezar proyecto",
            schedule: "Agendar llamada"
        },
        
        // Footer
        footer:  {
            tagline: "Desarrollador Fullstack apasionado por crear experiencias digitales excepcionales.",
            navigation: "Navegación",
            services: {
                title: "Servicios",
                web:  "Desarrollo Web",
                mobile: "Aplicaciones móviles",
                api: "APIs & Backend",
                contracts: "Smart Contracts",
                consulting: "Consultoría técnica",
                mentoring: "Mentoring"
            },
            resources: {
                title: "Recursos",
                blog: "Blog",
                tutorials: "Tutoriales",
                newsletter: "Newsletter",
                snippets: "Snippets",
                opensource: "Open Source"
            },
            newsletter: {
                title: "Newsletter",
                description:  "Suscríbete para recibir tips de desarrollo y novedades.",
                placeholder: "tu@email.com",
                note: "Sin spam.  Cancela cuando quieras."
            },
            copyright: "© 2026 JagcWeb. Todos los derechos reservados.",
            legal: {
                privacy: "Política de Privacidad",
                terms: "Términos de Uso",
                cookies:  "Cookies"
            },
            credits: 'Diseñado y desarrollado con <i class="fas fa-heart"></i> y mucho <i class="fas fa-coffee"></i>'
        },
        
        // Modal
        modal: {
            client: "Cliente",
            date: "Fecha",
            role: "Rol",
            roleValue: "Fullstack Developer",
            technologies: "Tecnologías",
            viewDemo: "Ver demo",
            viewCode:  "Ver código"
        }
    },
    
    en: {
        // Loader
        loader: {
            text: "Loading portfolio..."
        },
        
        // Navigation
        nav: {
            home: "Home",
            about: "About",
            experience: "Experience",
            skills: "Skills",
            projects: "Projects",
            testimonials: "Testimonials",
            contact:  "Contact",
            cta: "Let's talk"
        },
        
        // Hero
        hero: {
            badge: "Available for projects",
            greeting: "Hi, my name is",
            subtitle: "I develop ",
            rotating: {
                1: "web applications",
                2: "smart contracts",
                3: "unique experiences",
                4: "scalable solutions"
            },
            description:  'Fullstack Developer with <strong>+6 years of experience</strong> specialized in creating modern web applications, robust APIs and blockchain solutions. I transform ideas into exceptional digital products.',
            cta:  {
                projects:  "View projects",
                contact: "Contact",
                cv:  "Download CV"
            },
            scroll: "Scroll",
            profile: {
                role: "Fullstack Developer",
                years: "Years Exp.",
                projects: "Projects",
                clients:  "Clients"
            }
        },
        
        // About
        about:  {
            tag:  "Get to know me",
            title: "About Me",
            subtitle: "More than a developer, a solutions creator",
            lead:  'I\'m a <span class="highlight">passionate fullstack developer</span> who transforms complex ideas into elegant and functional digital solutions.',
            p1: "With over 6 years of experience in software development, I've had the opportunity to work on diverse projects ranging from innovative startups to established companies. My approach combines technical excellence with a deep understanding of business needs.",
            p2: "I specialize in developing complete web applications, from designing robust backend architectures to intuitive and attractive user interfaces. I also have experience in the blockchain world, developing smart contracts and decentralized applications.",
            details: {
                location: "Location",
                locationValue: "Madrid (Spain)",
                email:  "Email",
                availability: "Availability",
                availabilityValue: "Available",
                languages:  "Languages",
                languagesValue: "Spanish, English"
            },
            interests:  {
                title:  "Interests",
                startups: "Startups",
                web3: "Web3",
                ai: "AI/ML",
                gaming: "Gaming",
                music: "Music",
                travel:  "Travel"
            },
            expBadge: {
                number: "6+",
                text: "Years of<br>Experience"
            }
        },
        
        // Experience
        experience: {
            tag: "Career Path",
            title:  "Experience & Education",
            subtitle:  "My professional journey in software development",
            tabs: {
                work: "Work Experience",
                education: "Education",
                certifications: "Certifications"
            },
            current: "Current",
            work: {
                job1: {
                    date: "Jul. 2022 - Present",
                    title:  "Fullstack Web Developer",
                    company: "Digital Training (Viewnext / Cajamar)",
                    description: "Working with Viewnext providing support to Banco Cajamar. Development with Symfony and Angular. Use of Jira, Jenkins and Bitbucket. Automation scripts in Python."
                },
                job2: {
                    date: "Feb. 2022 - Jul. 2022",
                    title: "Fullstack Web Developer",
                    company: "E-Coordina",
                    description: "Creation of new projects and updating legacy projects. Use of multiple languages and frameworks: JavaScript & TypeScript (NestJS, React), PHP (Laravel), Python (Django). Python scripts (automation, Selenium, microservices). Use of Git, Docker, ESLint."
                },
                job3: {
                    date:  "Jan. 2022 - Feb. 2022",
                    title: "Process Automation",
                    company: "NTT Data (Everis)",
                    description: "Process automation for clients and the company itself. Work with Docker and designed with Node-RED (Node.js). Use of Selenium."
                },
                job4: {
                    date: "Feb. 2021 - Present",
                    title: "Fullstack Web Developer & Platform Manager",
                    company: "Kooperador",
                    description: "Creation of the web platform with HTML5, CSS3 (Bootstrap), JavaScript (jQuery + AJAX) and PHP (Laravel). Use of internal libraries (Hash, Crypt, Mail) and external ones (Invoices, Excels, Stripe). WordPress with WooCommerce, Yoast SEO, Elementor and custom plugin development with PHP."
                }
            },
            education: {
                edu1: {
                    date: "Graduated",
                    title: "IT Systems Administration",
                    institution: "Vocational Training",
                    description: "Degree in IT Systems Administration. Learning of networks, operating systems, databases and server administration."
                },
                edu2: {
                    date: "Ongoing",
                    title: "Self-taught Web Development",
                    institution: "Self-taught",
                    description: "Self-taught web development learning: HTML5, CSS3, JavaScript, TypeScript, PHP, Python, Solidity and their associated frameworks."
                }
            },
            certs: {
                aws: {
                    title: "AWS Solutions Architect",
                    issuer: "Amazon Web Services"
                },
                google: {
                    title: "Google Cloud Professional",
                    issuer:  "Google Cloud Platform"
                },
                blockchain: {
                    title: "Blockchain Developer",
                    issuer: "Ethereum Foundation"
                },
                security: {
                    title: "Cybersecurity Fundamentals",
                    issuer: "CompTIA"
                }
            }
        },
        
        // Skills
        skills: {
            tag: "Skills",
            title: "Skills & Technologies",
            subtitle:  "The tools I master to create exceptional solutions",
            categories: {
                backend: {
                    title: "Backend Development",
                    subtitle: "Robust and scalable architectures"
                },
                frontend: {
                    title:  "Frontend Development",
                    subtitle: "Modern and interactive interfaces"
                },
                blockchain: {
                    title:  "Blockchain & Web3",
                    subtitle: "Decentralized development"
                },
                database: {
                    title: "Databases",
                    subtitle: "SQL and NoSQL"
                }
            },
            tools: "Tools & DevOps"
        },
        
        // Projects
        projects: {
            tag: "Portfolio",
            title: "Featured Projects",
            subtitle: "A selection of my most recent work",
            filters: {
                all: "All",
                fullstack: "Fullstack",
                frontend: "Frontend",
                backend: "Backend",
                blockchain:  "Blockchain"
            },
            featured: "Featured",
            viewCode: "View code",
            liveDemo: "Live demo",
            moreInfo: "More info",
            documentation:  "Documentation",
            viewMore: "View more on GitHub",
            items: {
                soinuka: {
                    category: "Fullstack",
                    title: "New-Soinuka",
                    description: "Complete web platform built with Laravel."
                },
                marketplaceEth: {
                    category: "Blockchain",
                    title: "Marketplace ETH",
                    description: "Decentralized marketplace built with Next.js and Web3.js."
                },
                autoMessage: {
                    category: "Bot / Automation",
                    title: "Auto-Message Discord",
                    description: "Discord message automation bot developed in Python."
                },
                faucet: {
                    category: "Blockchain",
                    title: "Faucet",
                    description: "Faucet built with React, Solidity, Ganache, Truffle and BulmaCSS."
                },
                nasaOracle: {
                    category: "Blockchain / Oracle",
                    title: "NASA Oracle",
                    description: "Oracle with Smart Contracts consuming data from the NASA API. React and Solidity."
                },
                hotspania: {
                    category: "Fullstack",
                    title: "Hotspania",
                    description: "Web platform built with Laravel."
                },
                niolshotsBack: {
                    category: "Backend",
                    title: "Niolshots Backend",
                    description: "Backend API for Niolshots built with Node.js."
                },
                niolshotsFront: {
                    category: "Frontend",
                    title: "Niolshots Frontend",
                    description: "User interface for Niolshots built with React."
                },
                rescueAirdrop: {
                    category: "Blockchain / Security",
                    title: "Rescue Airdrop Linea",
                    description: "Script to rescue Linea airdrop tokens from a compromised wallet."
                },
                rescueHype: {
                    category: "Blockchain",
                    title: "Rescue Hype",
                    description: "Token rescue tool built with JavaScript and Ethers.js."
                },
                diavla: {
                    category: "Fullstack",
                    title: "Diavla Hookah",
                    description: "Web platform for Diavla Hookah built with Laravel."
                }
            }
        },
        
        // Testimonials
        testimonials: {
            tag: "Testimonials",
            title: "What they say about me",
            subtitle: "Opinions from clients and collaborators",
            clients: "Companies I've worked with",
            items: {
                1: {
                    text: '"Working with JagcWeb was an exceptional experience. His technical capacity and professionalism exceeded our expectations. He delivered a high-quality product in record time."',
                    name: "María García",
                    role: "CEO, TechStartup S.L."
                },
                2: {
                    text: '"The blockchain solution he developed for us revolutionized our business model. His knowledge in Solidity and Web3 is impressive. We will definitely work together again."',
                    name: "Carlos Rodríguez",
                    role: "CTO, CryptoVentures"
                },
                3: {
                    text:  '"An exceptional developer. His API allowed us to scale from 1,000 to 100,000 users without problems. The documentation and code are impeccable.  100% recommended."',
                    name: "Laura Martínez",
                    role: "Product Manager, ScaleUp Inc."
                }
            }
        },
        
        // Contact
        contact: {
            tag: "Contact",
            title: "Let's talk? ",
            subtitle:  "I'm available for new projects and opportunities",
            heading:  'Let\'s build something <span class="gradient-text">amazing</span> together',
            description: "Whether you have a project in mind, a question or just want to say hi, I'll be happy to hear from you. My inbox is always open.",
            methods: {
                email: "Email",
                phone:  "Phone",
                location:  "Location",
                locationValue: "Madrid (Spain) - Remote"
            },
            social: "You can also find me on:",
            form:  {
                title:  "Send me a message",
                subtitle: "I respond within 24 hours",
                name: "Name",
                email: "Email",
                subject: "Subject",
                budget:  "Estimated budget",
                budgetOptions: {
                    small: "Less than €1,000",
                    medium:  "€1,000 - €5,000",
                    large:  "€5,000 - €10,000",
                    enterprise: "More than €10,000"
                },
                message: "Message",
                privacy:  'I accept the <a href="#">privacy policy</a> and the processing of my data.',
                submit: "Send message"
            },
            toast: {
                success: {
                    title: "Message sent!",
                    message: "I'll respond within 24 hours."
                }
            }
        },
        
        // CTA
        cta: {
            title: "Ready to start your project?",
            subtitle: "Let's transform your idea into reality together. Contact me and let's talk about how I can help you.",
            start: "Start project",
            schedule: "Schedule call"
        },
        
        // Footer
        footer: {
            tagline:  "Fullstack Developer passionate about creating exceptional digital experiences.",
            navigation: "Navigation",
            services:  {
                title:  "Services",
                web: "Web Development",
                mobile: "Mobile Applications",
                api:  "APIs & Backend",
                contracts: "Smart Contracts",
                consulting: "Technical Consulting",
                mentoring: "Mentoring"
            },
            resources:  {
                title:  "Resources",
                blog: "Blog",
                tutorials: "Tutorials",
                newsletter: "Newsletter",
                snippets:  "Snippets",
                opensource: "Open Source"
            },
            newsletter:  {
                title:  "Newsletter",
                description: "Subscribe to receive development tips and news.",
                placeholder: "your@email.com",
                note:  "No spam. Cancel anytime."
            },
            copyright:  "© 2026 JagcWeb. All rights reserved.",
            legal: {
                privacy: "Privacy Policy",
                terms: "Terms of Use",
                cookies: "Cookies"
            },
            credits: 'Designed and developed with <i class="fas fa-heart"></i> and lots of <i class="fas fa-coffee"></i>'
        },
        
        // Modal
        modal:  {
            client:  "Client",
            date: "Date",
            role: "Role",
            roleValue: "Fullstack Developer",
            technologies: "Technologies",
            viewDemo:  "View demo",
            viewCode: "View code"
        }
    }
};

// ==================== I18N CLASS ====================
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'es';
        this.translations = translations;
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLang);
        this.bindEvents();
    }
    
    bindEvents() {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            langToggle.addEventListener('click', () => {
                const newLang = this.currentLang === 'es' ? 'en' : 'es';
                this.setLanguage(newLang);
            });
        }
    }
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('language', lang);
        this.updateLanguage(lang);
        this.updateToggleButton(lang);
    }
    
    updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key, lang);
            
            if (translation) {
                // Check if it's an input placeholder
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } 
                // Check if it contains HTML
                else if (translation.includes('<')) {
                    element.innerHTML = translation;
                } 
                // Plain text
                else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update toggle button
        this.updateToggleButton(lang);
    }
    
    getTranslation(key, lang) {
        const keys = key.split('.');
        let result = this.translations[lang];
        
        for (const k of keys) {
            if (result && result[k] !== undefined) {
                result = result[k];
            } else {
                return null;
            }
        }
        
        return result;
    }
    
    updateToggleButton(lang) {
        const langToggle = document.getElementById('langToggle');
        if (langToggle) {
            const flag = langToggle.querySelector('.lang-flag');
            const code = langToggle.querySelector('.lang-code');
            
            if (lang === 'es') {
                flag.textContent = '🇪🇸';
                code.textContent = 'ES';
            } else {
                flag.textContent = '🇬🇧';
                code.textContent = 'EN';
            }
        }
    }
    
    // Get current translation for dynamic use
    t(key) {
        return this.getTranslation(key, this.currentLang);
    }
}

// Initialize i18n
const i18n = new I18n();

// Export for global use
window.i18n = i18n;