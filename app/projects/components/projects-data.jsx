const year = new Date().getFullYear();

const DataGames = [
  {
    title: "PONG!",
    imgUrl: "/images/games/pong.webp",
    description:
      "A classic game of Pong made on TASM for intel 8086! Play against the computer or challenge your friends in this retro-style game. Can you beat the high score?",
    descriptionEs:
      "¡Un clásico juego de Pong hecho en TASM para el Intel 8086! Juega contra la computadora o reta a tus amigos en este juego de estilo retro. ¿Podrás superar el récord?",
    descriptionHe:
      "משחק Pong קלאסי שנכתב ב-TASM עבור Intel 8086! שחקו נגד המחשב או אתגרו חברים במשחק בסגנון רטרו. תצליחו לשבור את השיא?",
    source: "https://github.com/ghero56/Pong.git",
    platform: "DosBox (TASM)",
    year: "August 2021",
    techs: ["TASM", "Intel 8086"],
  },
  {
    title: "Bubble Game",
    imgUrl: "/images/games/blend.webp",
    description:
      "Infinite runner where you must avoid the leafs, you are the bubble!",
    descriptionEs:
      "Infinite runner donde debes esquivar las hojas. ¡Tú eres la burbuja!",
    descriptionHe:
      "ריצה אינסופית שבה עליכם להתחמק מהעלים — אתם הבועה!",
    source: "none",
    platform: "Windows",
    year: "April 2023",
    techs: ["Game Development"],
  },
  {
    title: "curlINGenieros",
    imgUrl: [
      "/images/games/curling1.webp",
      "/images/games/curling2.webp",
      "/images/games/curling3.webp",
      "/images/games/curling4.webp",
    ],
    description:
      "Made with Unity, this is a 24 hours game jam game. You must throw the curling stone and try to get it as close as possible to the center of the target. You can play with your friends in local multiplayer.",
    descriptionEs:
      "Hecho con Unity, es un juego de game jam de 24 horas. Debes lanzar la piedra de curling e intentar acercarla lo más posible al centro del objetivo. Puedes jugar con tus amigos en multijugador local.",
    descriptionHe:
      "נעשה ב-Unity, משחק של game jam בן 24 שעות. עליכם להטיל את אבן הקרלינג ולקרב אותה כמה שיותר למרכז המטרה. אפשר לשחק עם חברים במצב מרובה משתתפים מקומי.",
    source: "https://ghero56.itch.io/curlingenieros",
    platform: "Windows, (coming soon to Android and Linux)",
    year: "January 2024",
    techs: ["Unity", "C#"],
  },
  {
    title: "Healthy Meal",
    imgUrl: [
      "https://img.itch.zone/aW1hZ2UvMzIyNTMzMi8xOTI2OTM1MS5qcGc=/original/2vtqSn.jpg",
      "https://img.itch.zone/aW1hZ2UvMzIyNTMzMi8xOTI2OTM0OC5qcGc=/original/7rENcV.jpg",
      "https://img.itch.zone/aW1hZ2UvMzIyNTMzMi8xOTI2OTM0Ny5qcGc=/original/al5iiN.jpg",
    ],
    description:
      "A game where you must eat healthy food and avoid junk food. Made with Unity, this game was made in 4 hours for a game jam.",
    descriptionEs:
      "Un juego donde debes comer comida saludable y evitar la comida chatarra. Hecho con Unity en 4 horas para una game jam.",
    descriptionHe:
      "משחק שבו עליכם לאכול אוכל בריא ולהימנע מאוכל מהיר. נעשה ב-Unity בתוך 4 שעות עבור game jam.",
    source: "https://ghero56.itch.io/healthy-meal",
    platform: "Windows",
    year: "2024",
    techs: ["Unity", "C#"],
  },
  {
    title: "Zombie Invasion",
    imgUrl: "/images/games/zombie.webp",
    video: "/images/games/zombie.mp4",
    description:
      "A 3D game where you must survive a zombie invasion. Made with UE5",
    descriptionEs:
      "Un juego 3D donde debes sobrevivir a una invasión zombie. Hecho con UE5.",
    descriptionHe:
      "משחק תלת-ממד שבו עליכם לשרוד פלישת זומבים. נעשה ב-UE5.",
    source: "none",
    platform: "Windows",
    year: "2023",
    techs: ["Unreal Engine 5", "C++"],
  },
  {
    title: "Primal Origins",
    imgUrl: "/images/games/primal.webp",
    video: "/images/games/primal.mp4",
    description:
      "In the year 1, 000,000 BC, you are a caveman who must survive in a world full of dangers. Made with Unity for the Global Game Jam 2023.",
    descriptionEs:
      "En el año 1,000,000 a.C., eres un cavernícola que debe sobrevivir en un mundo lleno de peligros. Hecho con Unity para la Global Game Jam 2023.",
    descriptionHe:
      "בשנת 1,000,000 לפנה״ס, אתם איש מערות שצריך לשרוד בעולם מלא סכנות. נעשה ב-Unity עבור ה-Global Game Jam 2023.",
    source: "https://v3.globalgamejam.org/2023/games/primal-origins-vr-5",
    platform: "Windows, VR (Oculus Quest 2 standalone)",
    year: "January 2023",
    techs: ["Unity", "C#", "VR"],
  },
  {
    title: "Hostile Behavior",
    imgUrl: ["/images/games/hostile1.webp", "/images/games/hostile2.webp"],
    description:
      "A game where you must avoid obstacles and keep your distance to a space lovecraftian monster!. Made with Unity as a First Level Design project for the SODVI.",
    descriptionEs:
      "Un juego donde debes esquivar obstáculos y mantener distancia de un monstruo espacial lovecraftiano. Hecho con Unity como proyecto de Diseño de Niveles I para la SODVI.",
    descriptionHe:
      "משחק שבו עליכם להתחמק ממכשולים ולשמור מרחק ממפלצת חלל בסגנון לאבקראפט! נעשה ב-Unity כפרויקט עיצוב שלבים א׳ עבור SODVI.",
    source: "/projects/games/hostile-behavior",
    platform: "Windows, Web",
    year: "July 2022",
    techs: ["Unity", "C#"],
  },
];

const DataHardware = [
  {
    title: "Video upscaler & Depth map (OCV2)",
    imgUrl: [
      "/images/projects/ia/zynq.webp",
      "/images/projects/hardware/zed2.webp",
    ],
    description:
      'This project implements a video upscaler using OpenCV2 and Python and AMD, improving their resolution || showing a depth "mono-camera" map a LAN model.',
    descriptionEs:
      'Este proyecto implementa un escalador de video usando OpenCV2, Python y AMD, mejorando su resolución o mostrando un mapa de profundidad "mono-cámara" con un modelo LAN.',
    descriptionHe:
      "הפרויקט מממש מגדיל רזולוציית וידאו באמצעות OpenCV2, Python ו-AMD, ומשפר את הרזולוציה או מציג מפת עומק ממצלמה יחידה עם מודל LAN.",
    source: "https://github.com/ghero56/zedboard-cv",
    platform: "Web (Zynq 7000, ARM, Python)",
    year: "December 2024",
    techs: ["OpenCV2", "Python", "AMD", "Zynq 7000"],
  },
  {
    title: "3D printer",
    imgUrl: "/images/projects/hardware/printer.webp",
    video: "/images/projects/hardware/printer.mp4",
    description:
      "This is a 3D printer project made with a small team of students, where we designed and built a 3D printer from scratch, including the electronics and mechanics.",
    descriptionEs:
      "Proyecto de impresora 3D hecho con un pequeño equipo de estudiantes, donde diseñamos y construimos una impresora 3D desde cero, incluyendo la electrónica y la mecánica.",
    descriptionHe:
      "פרויקט מדפסת תלת-ממד שנעשה עם צוות קטן של סטודנטים, שבו תכננו ובנינו מדפסת תלת-ממד מאפס, כולל האלקטרוניקה והמכניקה.",
    source: "none",
    platform: "DE 10 Lite (FPGA, INTEL Quartus, ARM)",
    year: "November 2024",
    techs: ["FPGA", "INTEL Quartus", "ARM", "Hardware Design"],
  },
];

const DataSoftware = [
  {
    title: "Product catalog with Python",
    imgUrl: "/images/projects/software/productos-python.webp",
    description:
      "This project is a product catalog implemented in Python, allowing users to view and manage products with a simple interface.",
    descriptionEs:
      "Catálogo de productos implementado en Python, que permite ver y administrar productos con una interfaz sencilla.",
    descriptionHe:
      "קטלוג מוצרים שמומש ב-Python, המאפשר לצפות ולנהל מוצרים בממשק פשוט.",
    source: "https://github.com/ghero56/Proyecto-Final-EDA1",
    platform: "x64, ARM (Python)",
    year: "April 2020",
  },
  {
    title: "Aliat University Laboratories 3D App",
    video: "/images/projects/software/aliat/7.mp4",
    imgUrl: [
      "/images/projects/software/aliat/1.webp",
      "/images/projects/software/aliat/2.webp",
      "/images/projects/software/aliat/3.webp",
      "/images/projects/software/aliat/4.webp",
      "/images/projects/software/aliat/5.webp",
      "/images/projects/software/aliat/6.webp",
    ],
    description:
      "This project is a 3D application developed for Aliat Universities, showcasing their laboratories and facilities in an interactive way.",
    descriptionEs:
      "Aplicación 3D desarrollada para Aliat Universidades, que muestra sus laboratorios e instalaciones de forma interactiva.",
    descriptionHe:
      "אפליקציית תלת-ממד שפותחה עבור אוניברסיטאות Aliat, המציגה את המעבדות והמתקנים שלהן בצורה אינטראקטיבית.",
    source: "none",
    platform: "Android, iOS",
    year: "2023",
  },
  {
    title: "Custom Game Engine",
    imgUrl: "/images/projects/software/engine.webp",
    video: "/images/projects/software/engine.mp4",
    description:
      "This is a custom bare bone game engine made with C++ and OpenGL, allowing users to create 3D games with a simple interface, including a scene editor, 3D fmod sound system and more.",
    descriptionEs:
      "Un motor de videojuegos hecho desde cero con C++ y OpenGL, que permite crear juegos 3D con una interfaz sencilla, incluyendo un editor de escenas, sistema de sonido 3D con fmod y más.",
    descriptionHe:
      "מנוע משחקים שנבנה מאפס עם C++ ו-OpenGL, המאפשר ליצור משחקי תלת-ממד בממשק פשוט, כולל עורך סצנות, מערכת קול תלת-ממדית עם fmod ועוד.",
    source: "none",
    platform: "x64 (C++, OpenGL)",
    year: "2025",
  },
  {
    title: "AeroLaundry",
    imgUrl: [
      "/images/projects/software/aerolaundry/image1.webp",
      "/images/projects/software/aerolaundry/image2.webp",
      "/images/projects/software/aerolaundry/image3.webp",
    ],
    description:
      "Website for a laundry business in Tláhuac, Mexico City. Built in February 2026 with Node.js, deployed on GitHub Pages with a CI/CD pipeline.",
    descriptionEs:
      "Página web para una lavandería en Tláhuac, Ciudad de México. Hecha en febrero de 2026 con Node.js y desplegada en GitHub Pages con CI/CD.",
    descriptionHe:
      "אתר עבור מכבסה בטלאוואק, מקסיקו סיטי. נבנה בפברואר 2026 עם Node.js, ופורסם ב-GitHub Pages עם תהליך CI/CD.",
    source: "/aerolaundry",
    platform: "Web (Node.js, GitHub Pages)",
    year: "February 2026",
  },
  {
    title: "Cursos PyM",
    imgUrl: [
      "/images/projects/software/cursos-pym/image1.webp",
      "/images/projects/software/cursos-pym/image2.webp",
      "/images/projects/software/cursos-pym/image3.webp",
      "/images/projects/software/cursos-pym/image4.webp",
      "/images/projects/software/cursos-pym/image5.webp",
      "/images/projects/software/cursos-pym/image6.webp",
    ],
    description:
      "Online learning platform with JWT authentication, roles, video streaming and real-time chat. Built with Next.js, Flask and MongoDB.",
    descriptionEs:
      "Plataforma de cursos en línea con autenticación JWT, roles, streaming de video y chat en tiempo real. Hecha con Next.js, Flask y MongoDB.",
    descriptionHe:
      "פלטפורמת לימוד מקוונת עם אימות JWT, הרשאות, סטרימינג וידאו וצ'אט בזמן אמת. נבנתה עם Next.js, Flask ו-MongoDB.",
    source: "/pym-front",
    platform: "Web (Next.js, Flask, MongoDB)",
    year: "2025",
  },
];

const DataAI = [
  {
    title: "Video upscaler & Depth map (OCV2)",
    imgUrl: "/images/projects/ia/zynq.webp",
    description:
      'This project implements a video upscaler using OpenCV2 and Python, improving their resolution || showing a depth "mono-camera" map a LAN model.',
    descriptionEs:
      'Este proyecto implementa un escalador de video usando OpenCV2 y Python, mejorando su resolución o mostrando un mapa de profundidad "mono-cámara" con un modelo LAN.',
    descriptionHe:
      "הפרויקט מממש מגדיל רזולוציית וידאו באמצעות OpenCV2 ו-Python, ומשפר את הרזולוציה או מציג מפת עומק ממצלמה יחידה עם מודל LAN.",
    source: "https://github.com/ghero56/zedboard-cv",
    platform: "Zynq 7000, ARM (Python)",
    year: "December 2024",
  },
  {
    title: "Chatbot (openAI API)",
    imgUrl: "/images/projects/ia/chatbot.webp",
    description:
      "This is Paquito! an IA assistant that will help you on this journey into building neural networks",
    descriptionEs:
      "¡Este es Paquito! un asistente de IA que te ayudará en este viaje de construir redes neuronales.",
    descriptionHe:
      "זה Paquito! עוזר בינה מלאכותית שילווה אתכם במסע בניית רשתות נוירונים.",
    source:
      "https://drive.google.com/file/d/1BzZfSLWAYeG-cwNN05GeWYIx7aX7-7wh/view?usp=sharing",
    platform: "ARM, x64 (Python)",
    year: "December 2023",
  },
  {
    title: "Age recognizer",
    imgUrl: "/images/projects/ia/age.webp",
    description:
      "An age recognizer built with a neural network trained to estimate a person's age from images.",
    descriptionEs:
      "Reconocedor de edad construido con una red neuronal entrenada para estimar la edad de una persona a partir de imágenes.",
    descriptionHe:
      "מזהה גיל שנבנה עם רשת נוירונים שאומנה להעריך את גיל האדם מתוך תמונות.",
    source:
      "https://drive.google.com/file/d/1BzZfSLWAYeG-cwNN05GeWYIx7aX7-7wh/view?usp=sharing",
    platform: "ARM, x64 (Python)",
    year: "December 2023",
  },
  {
    title: "Convolutional Neural Network",
    imgUrl: "/images/projects/ia/cnn.webp",
    description:
      "This project implements a CNN to classify images from several TV shows, achieving a high accuracy of 98% on the test set. The model was trained using TensorFlow and Keras, and it can be used to classify images from the same dataset or similar ones.",
    descriptionEs:
      "Este proyecto implementa una CNN para clasificar imágenes de varias series de TV, logrando una precisión del 98% en el conjunto de prueba. El modelo se entrenó con TensorFlow y Keras, y puede usarse para clasificar imágenes del mismo conjunto de datos o similares.",
    descriptionHe:
      "הפרויקט מממש רשת נוירונים קונבולוציונית (CNN) לסיווג תמונות מכמה תוכניות טלוויזיה, ומשיג דיוק גבוה של 98% על סט הבדיקה. המודל אומן עם TensorFlow ו-Keras, וניתן להשתמש בו לסיווג תמונות מאותו מאגר או דומים.",
    source:
      "https://drive.google.com/file/d/1BzZfSLWAYeG-cwNN05GeWYIx7aX7-7wh/view?usp=sharing",
    platform: "ARM, x64 (Python)",
    year: "December 2023",
  },
];

const DataMisc = [
  {
    title: "Portfolio website",
    imgUrl: "/images/projects/misc/portfolio.webp",
    description: "This webpage... 😄",
    descriptionEs: "Esta página web... 😄",
    descriptionHe: "דף האינטרנט הזה... 😄",
    source: "https://ghero56.github.io/",
    platform: "Web (React, Next.js)",
    year: "2025",
  },
  {
    title: "UE5 Video productions",
    imgUrl: "/images/projects/masonry.webp",
    video: "/images/projects/masonry.mp4",
    description:
      "This is a collection of videos made with Unreal Engine 5, showcasing the capabilities of the engine and my skills in video production.",
    descriptionEs:
      "Colección de videos hechos con Unreal Engine 5, mostrando las capacidades del motor y mis habilidades en producción de video.",
    descriptionHe:
      "אוסף סרטונים שנעשו עם Unreal Engine 5, המציג את יכולות המנוע ואת כישוריי בהפקת וידאו.",
    source: "none",
    platform: "None",
    year: "2023",
  },
  {
    title: "Photography",
    imgUrl: [
      "/images/photo/1.webp",
      "/images/photo/2.webp",
      "/images/photo/3.webp",
    ],
    description:
      "This is a collection of my photography work, showcasing my skills in capturing moments and creating beautiful images.",
    descriptionEs:
      "Colección de mi trabajo de fotografía, mostrando mi habilidad para capturar momentos y crear imágenes hermosas.",
    descriptionHe:
      "אוסף מעבודות הצילום שלי, המציג את יכולתי ללכוד רגעים וליצור תמונות יפות.",
    source: "https://www.instagram.com/ghero56/",
    platform: "None",
    year: "2025",
  },
];

export { DataGames, DataHardware, DataSoftware, DataAI, DataMisc };
