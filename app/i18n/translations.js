// Bilingual dictionary (ES / EN). Consumed through the useLanguage() hook.
// Keep keys grouped by section so components can read t.section.key.

export const translations = {
  es: {
    nav: {
      home: "Inicio",
      projects: "Proyectos",
      courses: "Cursos",
      events: "Eventos",
      brand: "Ghero56",
    },
    home: {
      greeting: "¡Hola! Soy",
      name: "Fernando Arciga Guzmán",
      role: "Game Dev (Unity/Unreal) · Full Stack Dev (Flask/React)",
      intro:
        "Ingeniero en Computación por la UNAM. Desarrollo aplicaciones 3D de distintos tipos con Unity y C#, aplicaciones nativas de Windows con Python, y cuento con la base teórica para desarrollo web con PHP y MySQL. Aprendo rápido nuevas tecnologías y me adapto a la metodología del equipo.",
      ctaProjects: "Ver mis proyectos",
      ctaCourses: "Ver mis cursos",
      skillsTitle: "Tecnologías y herramientas",
      skillGroups: {
        gamedev: "Videojuegos y 3D",
        web: "Web y backend",
        tools: "Herramientas y más",
      },
      aboutTitle: "Sobre mí",
      aboutBody:
        "Fui presidente de la Sociedad de Desarrollo de Videojuegos (SODVI) en la Facultad de Ingeniería de la UNAM. En SODVI usábamos Unity y C# para aprender a crear videojuegos; implementé el uso de Unreal Engine, C++ y Python para abrir el panorama hacia otras industrias. Esto hizo necesario un sistema de control de versiones y me llevó a formar equipos de trabajo para simular un entorno lo más parecido posible al mundo laboral real.",
      experienceTitle: "Experiencia",
      experience: [
        {
          role: "Desarrollador Unity",
          place: "Ironbit",
          period: "Dic 2021 – Actualidad",
          desc: "Desarrollo de aplicaciones 3D, optimización para móvil, gestión de AssetBundles en producción y creación de herramientas internas con Unity y C#.",
        },
        {
          role: "Presidente e instructor",
          place: "SODVI — Facultad de Ingeniería, UNAM",
          period: "Desde 2019",
          desc: "Dirigí la sociedad e impartí cursos; introduje Unreal Engine, C++, Python y control de versiones, formando equipos para simular un entorno laboral real.",
        },
        {
          role: "Profesor de computación",
          place: "Servicios Académicos SABER",
          period: "Dic 2019 – Feb 2020",
          desc: "Impartición de clases de computación e introducción a la programación.",
        },
      ],
      highlightsTitle: "Algunas cosas que he hecho",
      highlights: [
        "Traducción de prácticas de laboratorio a entornos 3D con Unity y VR Trainer (Innoactive).",
        "Optimización 3D para aplicaciones móviles.",
        "Desarrollo y gestión de AssetBundles en producción.",
        "Creación de herramientas y comportamientos a medida para optimizar el flujo del equipo.",
        "Testing de videojuegos para Spaceboy.",
        "Aplicaciones web CRUD y CI con GitHub Pages.",
        "Implementación de metodologías ágiles.",
      ],
      certsTitle: "Certificaciones",
      certsVerify: "Ver credencial",
    },
    courses: {
      takenTitle: "Cursos que he tomado",
      taughtTitle: "Cursos que he impartido",
      taughtSubtitle: "Algunos de los cursos que he impartido 🧑‍🏫",
    },
    events: {
      intro:
        "Estos son algunos de los eventos que hemos organizado y los que planeamos organizar en el futuro.",
      ggj2025Title: "Global Game Jam 2025",
      ggj2025Desc:
        "Evento internacional organizado en la ENAC (Escuela Nacional de Artes Cinematográficas) en la Ciudad de México.",
      ggj2026Title: "Global Game Jam 2026",
      ggj2026Desc:
        "Edición 2026 de la Global Game Jam, el evento internacional de desarrollo de videojuegos.",
      comingSoonTitle: "Próximamente",
      comingSoonDesc: "Nuevos y emocionantes eventos llegarán pronto.",
      albumButton: "Ver álbum completo en Google Photos",
      albumNote: "Las fotos completas están en mi álbum de Google Photos.",
    },
    projects: {
      title: "Proyectos 👀",
      all: "Todos los proyectos 🗂️",
      cards: { AI: "IA", games: "Juegos", hardware: "Hardware", software: "Software" },
      pageTitles: {
        games: "Mis juegos 🕹️",
        AI: "Proyectos de IA 🤖",
        hardware: "Proyectos de hardware 🛠️",
        software: "Proyectos de software 💻",
      },
      sections: {
        ai: "Proyectos de IA 🤖",
        games: "Juegos 🕹️",
        hardware: "Proyectos de hardware 🛠️",
        misc: "Proyectos varios 📦",
        software: "Proyectos de software 💻",
      },
      filters: {
        platform: "Plataforma",
        year: "Año",
        technology: "Tecnología",
        all: "Todos",
        found: "proyectos encontrados",
      },
      modal: {
        platform: "Plataforma",
        year: "Año",
        viewMore: "Ver más",
        goBack: "Regresar",
      },
      back: "Volver a proyectos",
      visit: "Visitar sitio",
    },
    footer: {
      contact: "¡Contáctame en mis redes sociales!",
      rights: "Todos los derechos reservados.",
    },
    common: {
      viewMore: "Ver más",
      source: "Fuente",
      platform: "Plataforma",
      year: "Año",
    },
  },
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      courses: "Courses",
      events: "Events",
      brand: "Ghero56",
    },
    home: {
      greeting: "Hi! I'm",
      name: "Fernando Arciga Guzmán",
      role: "Game Dev (Unity/Unreal) · Full Stack Dev (Flask/React)",
      intro:
        "Computer Engineer from UNAM. I build 3D applications of many kinds with Unity and C#, native Windows apps with Python, and I have the theoretical foundation for web development with PHP and MySQL. I learn new technologies quickly and adapt to the team's methodology.",
      ctaProjects: "See my projects",
      ctaCourses: "See my courses",
      skillsTitle: "Tech & tools",
      skillGroups: {
        gamedev: "Games & 3D",
        web: "Web & backend",
        tools: "Tools & more",
      },
      aboutTitle: "About me",
      aboutBody:
        "I was president of the Game Development Society (SODVI) at UNAM's School of Engineering. At SODVI we used Unity and C# to learn game development; I introduced Unreal Engine, C++ and Python to open the scope toward other industries. This made version control necessary and led me to build teams to simulate an environment as close as possible to a real workplace.",
      experienceTitle: "Experience",
      experience: [
        {
          role: "Unity Developer",
          place: "Ironbit",
          period: "Dec 2021 – Present",
          desc: "3D application development, mobile optimization, production AssetBundle management and building internal tools with Unity and C#.",
        },
        {
          role: "President & instructor",
          place: "SODVI — School of Engineering, UNAM",
          period: "Since 2019",
          desc: "Led the society and taught courses; introduced Unreal Engine, C++, Python and version control, building teams to simulate a real work environment.",
        },
        {
          role: "Computer science teacher",
          place: "Servicios Académicos SABER",
          period: "Dec 2019 – Feb 2020",
          desc: "Taught computer science and introduction to programming.",
        },
      ],
      highlightsTitle: "Some things I've done",
      highlights: [
        "Translated lab practice text into 3D environments using Unity and the VR Trainer (Innoactive).",
        "3D optimization for mobile applications.",
        "Development and management of AssetBundles in production.",
        "Creation of custom tools and behaviors to optimize team workflows.",
        "Videogame testing for Spaceboy.",
        "CRUD web applications and CI using GitHub Pages.",
        "Implementation of agile methodologies.",
      ],
      certsTitle: "Certifications",
      certsVerify: "View credential",
    },
    courses: {
      takenTitle: "Courses I have taken",
      taughtTitle: "Courses I have taught",
      taughtSubtitle: "Some of the courses I have taught 🧑‍🏫",
    },
    events: {
      intro:
        "These are some of the events we have hosted and the ones we plan to host in the future.",
      ggj2025Title: "Global Game Jam 2025",
      ggj2025Desc:
        "International event hosted by ENAC (National School of Cinematographic Arts) in Mexico City.",
      ggj2026Title: "Global Game Jam 2026",
      ggj2026Desc:
        "2026 edition of the Global Game Jam, the international game development event.",
      comingSoonTitle: "Stay Tuned",
      comingSoonDesc: "New and awesome events are coming in the near future.",
      albumButton: "View full album on Google Photos",
      albumNote: "The complete photos are in my Google Photos album.",
    },
    projects: {
      title: "Projects 👀",
      all: "All Projects 🗂️",
      cards: { AI: "AI", games: "Games", hardware: "Hardware", software: "Software" },
      pageTitles: {
        games: "My Games 🕹️",
        AI: "AI Projects 🤖",
        hardware: "Hardware Projects 🛠️",
        software: "Software Projects 💻",
      },
      sections: {
        ai: "AI Projects 🤖",
        games: "Games 🕹️",
        hardware: "Hardware Projects 🛠️",
        misc: "Miscellaneous Projects 📦",
        software: "Software Projects 💻",
      },
      filters: {
        platform: "Platform",
        year: "Year",
        technology: "Technology",
        all: "All",
        found: "projects found",
      },
      modal: {
        platform: "Platform",
        year: "Year",
        viewMore: "View More",
        goBack: "Go back",
      },
      back: "Back to projects",
      visit: "Visit site",
    },
    footer: {
      contact: "Contact me on my social media!",
      rights: "All rights reserved.",
    },
    common: {
      viewMore: "View more",
      source: "Source",
      platform: "Platform",
      year: "Year",
    },
  },
};

export default translations;
