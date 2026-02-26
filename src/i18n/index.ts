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
      greeting: "Hi, I'm",
      name: "Sergio Nonide",
      role: "Software Engineer",
      tagline:
        "I build robust, scalable systems that handle millions of requests — from distributed cloud infrastructure to high-performance backends and data pipelines.",
      cta_primary: "Let's work together",
      cta_secondary: "See my work",
      available: "Available for projects",
    },
    about: {
      title: "About Me",
      subtitle: "Passionate about elegant solutions to complex problems",
      p1: "I'm a software engineer with deep expertise in cloud infrastructure, distributed systems, and backend development. I design and build systems that scale — from the architecture level down to the last line of code.",
      p2: "My main language is Go, and my primary cloud platform is AWS. I'm a strong advocate for open-source software and Linux, both professionally and personally.",
      p3: "I've built systems serving millions of daily requests, including asynchronous architectures, message queues, distributed services, and high-throughput web scraping pipelines. I enjoy working with startups and companies of all sizes that value technical excellence.",
      values_title: "What drives me",
      value1_title: "Simple over complex",
      value1_desc:
        "I believe the best solution is usually the simplest one that solves the problem correctly. No over-engineering.",
      value2_title: "Performance by design",
      value2_desc:
        "Systems should be fast and efficient from the start, not as an afterthought. I design for performance at every layer.",
      value3_title: "Open source first",
      value3_desc:
        "Strong believer in open-source software. I use it, contribute to it, and build on top of it whenever possible.",
    },
    services: {
      title: "Services",
      subtitle: "End-to-end technical solutions for teams that need to ship",
      s1_title: "Cloud Architecture & Infrastructure",
      s1_desc:
        "Design and deployment of scalable, auto-scaling cloud solutions on AWS. From serverless to Kubernetes, Terraform-managed infrastructure built for reliability and cost efficiency.",
      s2_title: "Backend & API Development",
      s2_desc:
        "High-performance backends and APIs in Go. Distributed systems, microservices, event-driven architectures, message queues, and everything that keeps your platform running under load.",
      s3_title: "Web & Mobile App Development",
      s3_desc:
        "Full-stack web applications and cross-platform mobile apps. Clean, maintainable code with a focus on user experience and performance.",
      s4_title: "Web Scraping & Data Pipelines",
      s4_desc:
        "High-performance, large-scale web scraping systems and automated browser workflows. Data extraction pipelines built to handle millions of records reliably.",
      s5_title: "Process Automation",
      s5_desc:
        "Automation of repetitive business processes and browser-based workflows. Save time and reduce errors by automating what slows your team down.",
      s6_title: "Custom Software Development",
      s6_desc:
        "Tailored software solutions for any domain. If you have a technical problem, I can build the solution — from CLI tools to complex enterprise systems.",
      badge_cloud: "AWS · Terraform · Kubernetes",
      badge_backend: "Go · Distributed Systems",
      badge_apps: "Vue · Flutter",
      badge_scraping: "Go · CDP · Data Pipelines",
      badge_automation: "Browser Automation · RPA",
      badge_custom: "Any Stack · Any Scale",
    },
    stack: {
      title: "Tech Stack",
      subtitle: "Tools I use daily and trust in production",
      cat_languages: "Languages",
      cat_cloud: "Cloud & Infra",
      cat_tools: "Tools & Platforms",
      cat_databases: "Databases",
      expert: "Expert",
      proficient: "Proficient",
      familiar: "Familiar",
    },
    contact: {
      title: "Let's Build Something",
      subtitle:
        "Have a project in mind? Based in Madrid, I work with clients across Europe and the US. Always open to new opportunities — whether you're a startup, a scale-up, or an established company.",
      name_label: "Name",
      name_placeholder: "Your name",
      email_label: "Email",
      email_placeholder: "your@email.com",
      subject_label: "Subject",
      subject_placeholder: "Project overview",
      message_label: "Message",
      message_placeholder:
        "Tell me about your project, your stack, your timeline...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent! I'll get back to you soon.",
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
      greeting: "Hola, soy",
      name: "Sergio Nonide",
      role: "Ingeniero de Software",
      tagline:
        "Construyo sistemas robustos y escalables que gestionan millones de peticiones — desde infraestructura cloud distribuida hasta backends de alto rendimiento y pipelines de datos.",
      cta_primary: "Hablemos de tu proyecto",
      cta_secondary: "Ver mi trabajo",
      available: "Disponible para proyectos",
    },
    about: {
      title: "Sobre Mí",
      subtitle: "Apasionado por soluciones elegantes a problemas complejos",
      p1: "Soy un ingeniero de software con profunda experiencia en infraestructura cloud, sistemas distribuidos y desarrollo backend. Diseño y construyo sistemas que escalan — desde el nivel de arquitectura hasta la última línea de código.",
      p2: "Mi lenguaje principal es Go y mi plataforma cloud de referencia es AWS. Soy un firme defensor del software de código abierto y Linux, tanto en entornos profesionales como personales.",
      p3: "He construido sistemas que sirven millones de peticiones diarias: arquitecturas asíncronas, colas de mensajes, servicios distribuidos y pipelines de web scraping de alto rendimiento. Disfruto trabajando con startups y empresas de cualquier tamaño que valoran la excelencia técnica.",
      values_title: "Lo que me mueve",
      value1_title: "Simple antes que complejo",
      value1_desc:
        "La mejor solución suele ser la más simple que resuelve el problema correctamente. Sin sobreingeniería.",
      value2_title: "Rendimiento por diseño",
      value2_desc:
        "Los sistemas deben ser rápidos y eficientes desde el inicio, no como una corrección posterior. Diseño el rendimiento en cada capa.",
      value3_title: "Open source primero",
      value3_desc:
        "Firme creyente en el software de código abierto. Lo uso, contribuyo a él y construyo sobre él siempre que es posible.",
    },
    services: {
      title: "Servicios",
      subtitle:
        "Soluciones técnicas end-to-end para equipos que necesitan entregar",
      s1_title: "Arquitectura Cloud e Infraestructura",
      s1_desc:
        "Diseño y despliegue de soluciones cloud escalables y de auto-escala en AWS. Desde serverless hasta Kubernetes, infraestructura gestionada con Terraform orientada a fiabilidad y eficiencia de costes.",
      s2_title: "Backend & Desarrollo de APIs",
      s2_desc:
        "Backends y APIs de alto rendimiento en Go. Sistemas distribuidos, microservicios, arquitecturas orientadas a eventos, colas de mensajes y todo lo que mantiene tu plataforma funcionando bajo carga.",
      s3_title: "Desarrollo de Apps Web y Móvil",
      s3_desc:
        "Aplicaciones web full-stack y apps móviles multiplataforma. Código limpio y mantenible con foco en la experiencia de usuario y el rendimiento.",
      s4_title: "Web Scraping & Pipelines de Datos",
      s4_desc:
        "Sistemas de web scraping de gran escala y alto rendimiento, y flujos de automatización de navegadores. Pipelines de extracción de datos construidos para procesar millones de registros de forma fiable.",
      s5_title: "Automatización de Procesos",
      s5_desc:
        "Automatización de procesos de negocio repetitivos y flujos de trabajo en navegador. Ahorra tiempo y reduce errores automatizando lo que ralentiza a tu equipo.",
      s6_title: "Desarrollo de Software a Medida",
      s6_desc:
        "Soluciones de software a medida para cualquier dominio. Si tienes un problema técnico, puedo construir la solución — desde herramientas CLI hasta sistemas empresariales complejos.",
      badge_cloud: "AWS · Terraform · Kubernetes",
      badge_backend: "Go · Sistemas Distribuidos",
      badge_apps: "Vue · Flutter",
      badge_scraping: "Go · CDP · Data Pipelines",
      badge_automation: "Automatización de Navegador · RPA",
      badge_custom: "Cualquier Stack · Cualquier Escala",
    },
    stack: {
      title: "Stack Tecnológico",
      subtitle:
        "Herramientas que uso a diario y en las que confío en producción",
      cat_languages: "Lenguajes",
      cat_cloud: "Cloud e Infraestructura",
      cat_tools: "Herramientas y Plataformas",
      cat_databases: "Bases de Datos",
      expert: "Experto",
      proficient: "Avanzado",
      familiar: "Conocido",
    },
    contact: {
      title: "Construyamos Algo",
      subtitle:
        "¿Tienes un proyecto en mente? Con base en Madrid, trabajo con clientes en toda Europa y EEUU. Siempre abierto a nuevas oportunidades — ya seas una startup, una empresa en crecimiento o una gran compañía.",
      name_label: "Nombre",
      name_placeholder: "Tu nombre",
      email_label: "Email",
      email_placeholder: "tu@email.com",
      subject_label: "Asunto",
      subject_placeholder: "Resumen del proyecto",
      message_label: "Mensaje",
      message_placeholder:
        "Cuéntame sobre tu proyecto, tu stack, tus plazos...",
      send: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Me pondré en contacto contigo pronto.",
      error:
        "Algo salió mal. Por favor, inténtalo de nuevo o contáctame directamente.",
      or: "O contáctame directamente en",
      response_time: "Normalmente respondo en menos de 24 horas.",
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
