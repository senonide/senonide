import { createI18n } from "vue-i18n";

const messages = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      stack: "Stack",
      contact: "Contact",
    },
    hero: {
      greeting: "I'm",
      name: "Sergio Nonide",
      role: "Software Engineer",
      tagline:
        "I design and deliver scalable cloud infrastructure, distributed systems, and high-performance software for companies that need reliable technology at scale.",
      cta_primary: "Get in touch",
      cta_secondary: "Learn more",
      available: "Available for projects",
    },
    about: {
      title: "About Me",
      subtitle:
        "Engineering software that scales — from architecture to production",
      p1: "I specialize in cloud infrastructure, distributed systems, and backend engineering. My work focuses on designing systems that perform reliably under real-world conditions — high traffic, complex integrations, and strict uptime requirements.",
      p2: "Go is my primary language and AWS my platform of choice. I build on open-source technologies and Linux-based environments, which allows me to deliver transparent, auditable, and vendor-flexible solutions.",
      p3: "I have hands-on experience building systems that serve millions of daily requests: asynchronous architectures, message-driven pipelines, distributed services, and large-scale web scraping infrastructure. I work with startups and established companies alike, adapting to each team's pace and standards.",
      values_title: "Engineering principles",
      value1_title: "Simplicity first",
      value1_desc:
        "The most effective solution is often the simplest one. I prioritize clarity and maintainability over unnecessary abstraction.",
      value2_title: "Performance by design",
      value2_desc:
        "Efficiency is not an optimization — it is a design decision. I build systems that are fast and resource-conscious from day one.",
      value3_title: "Open source",
      value3_desc:
        "I build with open-source tools and contribute back when possible. It ensures flexibility, transparency, and long-term independence from proprietary lock-in.",
    },
    services: {
      title: "Services",
      subtitle:
        "Technical solutions from infrastructure to product — designed, built, and delivered",
      s1_title: "Cloud Architecture & Infrastructure",
      s1_desc:
        "Design and deployment of production-grade cloud environments on AWS. Terraform-managed, auto-scaling infrastructure — from serverless functions to Kubernetes clusters — built for reliability and cost control.",
      s2_title: "Backend & API Development",
      s2_desc:
        "High-performance backends and APIs built in Go. Distributed systems, microservices, event-driven architectures, and message queues engineered to keep platforms stable under heavy load.",
      s3_title: "Web & Mobile Applications",
      s3_desc:
        "Full-stack web applications and cross-platform mobile apps. Clean, maintainable codebases with a focus on usability and long-term scalability.",
      s4_title: "Web Scraping & Data Extraction",
      s4_desc:
        "Large-scale web scraping systems and automated browser workflows built for throughput and reliability. Data extraction pipelines capable of processing millions of records with minimal supervision.",
      s5_title: "Process Automation",
      s5_desc:
        "Automation of repetitive workflows, browser-based tasks, and manual business processes. Designed to reduce operational overhead and eliminate human error at scale.",
      s6_title: "Custom Software Development",
      s6_desc:
        "Purpose-built software for specific business needs. From internal tooling and CLI utilities to complex, domain-specific systems — engineered to fit, not to generalize.",
      badge_cloud: "AWS · Terraform · Kubernetes",
      badge_backend: "Go · Distributed Systems",
      badge_apps: "Vue · Flutter",
      badge_scraping: "Go · CDP · Data Pipelines",
      badge_automation: "Browser Automation · RPA",
      badge_custom: "Any Stack · Any Scale",
    },
    stack: {
      title: "Tech Stack",
      subtitle: "Tools and technologies I rely on in production",
      cat_languages: "Languages",
      cat_cloud: "Cloud & Infra",
      cat_tools: "Tools & Platforms",
      cat_databases: "Databases",
      expert: "Expert",
      proficient: "Proficient",
      familiar: "Familiar",
    },
    contact: {
      title: "Start a Conversation",
      subtitle:
        "Based in Madrid, I work with clients across Europe and the United States. Whether you need to scope a new project or reinforce an existing team, I'm available to discuss how I can help.",
      name_label: "Name",
      name_placeholder: "Your name",
      email_label: "Email",
      email_placeholder: "your{'@'}email.com",
      subject_label: "Subject",
      subject_placeholder: "Project overview",
      message_label: "Message",
      message_placeholder:
        "Describe your project, technical requirements, and timeline...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent. I will get back to you shortly.",
      error: "Something went wrong. Please try again or reach out directly.",
      or: "Or reach me directly at",
      response_time: "I typically respond within 24 hours.",
    },
    footer: {
      built_with: "Built with",
      and: "and",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      services: "Servicios",
      stack: "Stack",
      contact: "Contacto",
    },
    hero: {
      greeting: "Soy",
      name: "Sergio Nonide",
      role: "Ingeniero de Software",
      tagline:
        "Diseño y desarrollo infraestructura cloud escalable, sistemas distribuidos y software de alto rendimiento para empresas que necesitan tecnología fiable a escala.",
      cta_primary: "Contactar",
      cta_secondary: "Saber más",
      available: "Disponible para proyectos",
    },
    about: {
      title: "Sobre Mí",
      subtitle:
        "Ingeniería de software que escala — de la arquitectura a producción",
      p1: "Estoy especializado en infraestructura cloud, sistemas distribuidos y desarrollo backend. Mi trabajo se centra en diseñar sistemas que funcionen de forma fiable en condiciones reales: tráfico elevado, integraciones complejas y requisitos estrictos de disponibilidad.",
      p2: "Go es mi lenguaje principal y AWS mi plataforma de referencia. Trabajo sobre tecnologías open source y entornos basados en Linux, lo que me permite ofrecer soluciones transparentes, auditables y libres de dependencia de proveedores.",
      p3: "Tengo experiencia directa construyendo sistemas que procesan millones de peticiones diarias: arquitecturas asíncronas, pipelines basados en colas de mensajes, servicios distribuidos e infraestructura de web scraping a gran escala. Colaboro tanto con startups como con empresas consolidadas, adaptándome al ritmo y los estándares de cada equipo.",
      values_title: "Principios de ingeniería",
      value1_title: "Simplicidad ante todo",
      value1_desc:
        "La solución más eficaz suele ser la más simple. Priorizo la claridad y la mantenibilidad frente a abstracciones innecesarias.",
      value2_title: "Rendimiento por diseño",
      value2_desc:
        "La eficiencia no es una optimización posterior — es una decisión de diseño. Construyo sistemas rápidos y eficientes en recursos desde el primer día.",
      value3_title: "Open source",
      value3_desc:
        "Desarrollo con herramientas de código abierto y contribuyo cuando es posible. Esto garantiza flexibilidad, transparencia e independencia de soluciones propietarias.",
    },
    services: {
      title: "Servicios",
      subtitle:
        "Soluciones técnicas de infraestructura a producto — diseñadas, construidas y entregadas",
      s1_title: "Arquitectura Cloud e Infraestructura",
      s1_desc:
        "Diseño y despliegue de entornos cloud en AWS preparados para producción. Infraestructura gestionada con Terraform, con auto-escalado — desde funciones serverless hasta clústeres de Kubernetes — orientada a fiabilidad y control de costes.",
      s2_title: "Backend y Desarrollo de APIs",
      s2_desc:
        "Backends y APIs de alto rendimiento desarrollados en Go. Sistemas distribuidos, microservicios, arquitecturas orientadas a eventos y colas de mensajes, diseñados para mantener la estabilidad de la plataforma bajo carga.",
      s3_title: "Aplicaciones Web y Móvil",
      s3_desc:
        "Aplicaciones web full-stack y apps móviles multiplataforma. Código limpio y mantenible, con foco en la usabilidad y la escalabilidad a largo plazo.",
      s4_title: "Web Scraping y Extracción de Datos",
      s4_desc:
        "Sistemas de web scraping a gran escala y flujos automatizados de navegador, diseñados para alto rendimiento y fiabilidad. Pipelines de extracción capaces de procesar millones de registros con supervisión mínima.",
      s5_title: "Automatización de Procesos",
      s5_desc:
        "Automatización de flujos de trabajo repetitivos, tareas basadas en navegador y procesos de negocio manuales. Diseñada para reducir la carga operativa y eliminar errores humanos a escala.",
      s6_title: "Desarrollo de Software a Medida",
      s6_desc:
        "Software diseñado para necesidades de negocio concretas. Desde herramientas internas y utilidades de línea de comandos hasta sistemas complejos de dominio específico — construido para encajar, no para generalizar.",
      badge_cloud: "AWS · Terraform · Kubernetes",
      badge_backend: "Go · Sistemas Distribuidos",
      badge_apps: "Vue · Flutter",
      badge_scraping: "Go · CDP · Data Pipelines",
      badge_automation: "Automatización · RPA",
      badge_custom: "Cualquier Stack · Cualquier Escala",
    },
    stack: {
      title: "Stack Tecnológico",
      subtitle: "Herramientas y tecnologías en las que confío en producción",
      cat_languages: "Lenguajes",
      cat_cloud: "Cloud e Infraestructura",
      cat_tools: "Herramientas y Plataformas",
      cat_databases: "Bases de Datos",
      expert: "Experto",
      proficient: "Avanzado",
      familiar: "Intermedio",
    },
    contact: {
      title: "Iniciar una Conversación",
      subtitle:
        "Con base en Madrid, trabajo con clientes en Europa y Estados Unidos. Ya sea para definir un nuevo proyecto o reforzar un equipo existente, estoy disponible para analizar cómo puedo ayudar.",
      name_label: "Nombre",
      name_placeholder: "Su nombre",
      email_label: "Email",
      email_placeholder: "su{'@'}email.com",
      subject_label: "Asunto",
      subject_placeholder: "Descripción del proyecto",
      message_label: "Mensaje",
      message_placeholder:
        "Describa su proyecto, requisitos técnicos y plazos estimados...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado. Responderé a la mayor brevedad.",
      error:
        "Se ha producido un error. Por favor, inténtelo de nuevo o contacte directamente por email.",
      or: "O contacte directamente en",
      response_time: "Tiempo de respuesta habitual: menos de 24 horas.",
    },
    footer: {
      built_with: "Hecho con",
      and: "y",
      rights: "Todos los derechos reservados.",
    },
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
