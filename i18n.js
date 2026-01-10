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
                    date: "2022 - Presente",
                    title: "Senior Fullstack Developer",
                    company:  "Empresa Tech Placeholder",
                    description: "Liderazgo técnico en el desarrollo de aplicaciones web escalables.  Implementación de arquitecturas microservicios y mentoring de desarrolladores junior."
                },
                job2: {
                    date: "2020 - 2022",
                    title: "Fullstack Developer",
                    company: "Startup Innovadora S.L.",
                    description: "Desarrollo de plataformas SaaS utilizando Laravel y Angular. Integración de pasarelas de pago y sistemas de terceros."
                },
                job3: {
                    date: "2018 - 2020",
                    title:  "Backend Developer",
                    company: "Agencia Digital Creativa",
                    description: "Desarrollo de APIs RESTful y sistemas backend con Symfony.  Optimización de bases de datos y mejora de rendimiento."
                }
            },
            education:  {
                edu1: {
                    date: "2014 - 2018",
                    title: "Grado en Ingeniería Informática",
                    institution: "Universidad Placeholder",
                    description: "Especialización en desarrollo de software y sistemas distribuidos.  Proyecto fin de grado sobre arquitecturas cloud-native."
                },
                edu2: {
                    date: "2019",
                    title:  "Máster en Desarrollo Web",
                    institution: "Escuela de Tecnología Avanzada",
                    description: "Programa intensivo de especialización en tecnologías web modernas, metodologías ágiles y buenas prácticas de desarrollo."
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
                shopmaster: {
                    category: "E-Commerce",
                    title: "ShopMaster Pro",
                    description: "Plataforma e-commerce completa con gestión de inventario en tiempo real, múltiples pasarelas de pago, sistema de recomendaciones AI y panel administrativo avanzado."
                },
                artverse: {
                    category: "NFT Marketplace",
                    title: "ArtVerse NFT",
                    description: "Marketplace descentralizado para creación, compra y subasta de NFTs con soporte multi-chain y royalties automáticos para creadores."
                },
                microcore: {
                    category: "API REST",
                    title: "MicroCore API",
                    description: "Arquitectura de microservicios escalable con autenticación OAuth2, rate limiting inteligente y documentación OpenAPI auto-generada."
                },
                dataviz: {
                    category: "Dashboard",
                    title: "DataViz Pro",
                    description: "Panel de analytics interactivo con visualizaciones en tiempo real, reportes personalizables y exportación en múltiples formatos."
                },
                devconnect: {
                    category: "Social Network",
                    title: "DevConnect",
                    description:  "Red social para desarrolladores con sistema de posts, mensajería en tiempo real, colaboración en proyectos y sistema de mentoring."
                },
                yieldmax: {
                    category: "DeFi",
                    title:  "YieldMax Protocol",
                    description: "Protocolo DeFi para staking y yield farming con gobernanza descentralizada, auto-compound y estrategias optimizadas."
                }
            }
        },
        
        // Testimonials
        testimonials:  {
            tag:  "Testimonios",
            title: "Lo que dicen de mí",
            subtitle: "Opiniones de clientes y colaboradores",
            clients: "Empresas con las que he colaborado",
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
                    date: "2022 - Present",
                    title:  "Senior Fullstack Developer",
                    company: "Tech Company Placeholder",
                    description: "Technical leadership in developing scalable web applications.  Implementation of microservices architectures and mentoring junior developers."
                },
                job2: {
                    date: "2020 - 2022",
                    title: "Fullstack Developer",
                    company: "Innovative Startup S.L.",
                    description: "Development of SaaS platforms using Laravel and Angular. Integration of payment gateways and third-party systems."
                },
                job3: {
                    date:  "2018 - 2020",
                    title: "Backend Developer",
                    company: "Creative Digital Agency",
                    description: "Development of RESTful APIs and backend systems with Symfony.  Database optimization and performance improvement."
                }
            },
            education: {
                edu1: {
                    date: "2014 - 2018",
                    title: "Computer Engineering Degree",
                    institution: "Placeholder University",
                    description: "Specialization in software development and distributed systems. Final project on cloud-native architectures."
                },
                edu2: {
                    date: "2019",
                    title: "Master in Web Development",
                    institution: "Advanced Technology School",
                    description: "Intensive specialization program in modern web technologies, agile methodologies and development best practices."
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
                shopmaster: {
                    category: "E-Commerce",
                    title: "ShopMaster Pro",
                    description:  "Complete e-commerce platform with real-time inventory management, multiple payment gateways, AI recommendation system and advanced admin panel."
                },
                artverse: {
                    category:  "NFT Marketplace",
                    title: "ArtVerse NFT",
                    description: "Decentralized marketplace for creating, buying and auctioning NFTs with multi-chain support and automatic royalties for creators."
                },
                microcore: {
                    category: "REST API",
                    title: "MicroCore API",
                    description: "Scalable microservices architecture with OAuth2 authentication, intelligent rate limiting and auto-generated OpenAPI documentation."
                },
                dataviz: {
                    category: "Dashboard",
                    title: "DataViz Pro",
                    description: "Interactive analytics panel with real-time visualizations, customizable reports and export in multiple formats."
                },
                devconnect: {
                    category: "Social Network",
                    title: "DevConnect",
                    description: "Social network for developers with post system, real-time messaging, project collaboration and mentoring system."
                },
                yieldmax:  {
                    category: "DeFi",
                    title: "YieldMax Protocol",
                    description: "DeFi protocol for staking and yield farming with decentralized governance, auto-compound and optimized strategies."
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