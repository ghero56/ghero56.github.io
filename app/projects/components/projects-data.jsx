const year = new Date().getFullYear();

const DataGames = [
  {
    title: "PONG!",
    imgUrl: "/images/games/pong.webp",
    description:
      "A classic game of Pong made on TASM for intel 8086! Play against the computer or challenge your friends in this retro-style game. Can you beat the high score?",
    source: "https://github.com/ghero56/Pong.git",
    platform: "DosBox (TASM)",
    year: "August 2021",
  },
  {
    title: "Bubble Game",
    imgUrl: "/images/games/blend.webp",
    description:
      "Infinite runner where you must avoid the leafs, you are the bubble!",
    source: "none",
    platform: "Windows",
    year: "April 2023",
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
    source: "https://ghero56.itch.io/curlingenieros",
    platform: "Windows, (coming soon to Android and Linux)",
    year: "January 2024",
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
    source: "https://ghero56.itch.io/healthy-meal",
    platform: "Windows",
    year: "2024",
  },
  {
    title: "Zombie Invasion",
    imgUrl: "/images/games/zombie.webp",
    description:
      "A 3D game where you must survive a zombie invasion. Made with UE5",
    source: "none",
    platform: "Windows",
    year: "2023",
  },
  {
    title: "Primal Origins",
    imgUrl: "/images/games/primal.webp",
    description:
      "In the year 1, 000,000 BC, you are a caveman who must survive in a world full of dangers. Made with Unity for the Global Game Jam 2023.",
    source: "https://v3.globalgamejam.org/2023/games/primal-origins-vr-5",
    platform: "Windows, VR (Oculus Quest 2 standalone)",
    year: "January 2023",
  },
  {
    title: "Hostile Behavior",
    imgUrl: ["/images/games/hostile1.webp", "/images/games/hostile2.webp"],
    description:
      "A game where you must avoid obstacles and keep your distance to a space lovecraftian monster!. Made with Unity as a First Level Design project for the SODVI.",
    source: "/projects/games/hostile-behavior",
    platform: "Windows, Web",
    year: "July 2022",
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
    source: "https://github.com/ghero56/zedboard-cv",
    platform: "Web (Zynq 7000, ARM, Python)",
    year: "December 2024",
  },
  {
    title: "3D printer",
    imgUrl: "/images/projects/hardware/printer.webp",
    description:
      "This is a 3D printer project made with a small team of students, where we designed and built a 3D printer from scratch, including the electronics and mechanics.",
    source: "none",
    platform: "DE 10 Lite (FPGA, INTEL Quartus, ARM)",
    year: "November 2024",
  },
];

const DataSoftware = [
  {
    title: "Product catalog with Python",
    imgUrl: "/images/projects/software/productos-python.webp",
    description:
      "This project is a product catalog implemented in Python, allowing users to view and manage products with a simple interface.",
    source: "https://github.com/ghero56/Proyecto-Final-EDA1",
    platform: "x64, ARM (Python)",
    year: "April 2020",
  },
  {
    title: "Aliat University Laboratories 3D App",
    imgUrl: [
      "/images/projects/software/aliat/7.webp",
      "/images/projects/software/aliat/1.webp",
      "/images/projects/software/aliat/2.webp",
      "/images/projects/software/aliat/3.webp",
      "/images/projects/software/aliat/4.webp",
      "/images/projects/software/aliat/5.webp",
      "/images/projects/software/aliat/6.webp",
    ],
    description:
      "This project is a 3D application developed for Aliat Universities, showcasing their laboratories and facilities in an interactive way.",
    source: "none",
    platform: "Android, iOS",
    year: "2023",
  },
  {
    title: "Custom Game Engine",
    imgUrl: "/images/projects/software/engine.webp",
    description:
      "This is a custom bare bone game engine made with C++ and OpenGL, allowing users to create 3D games with a simple interface, including a scene editor, 3D fmod sound system and more.",
    source: "none",
    platform: "x64 (C++, OpenGL)",
    year: "2025",
  },
];

const DataAI = [
  {
    title: "Video upscaler & Depth map (OCV2)",
    imgUrl: "/images/projects/ia/zynq.webp",
    description:
      'This project implements a video upscaler using OpenCV2 and Python, improving their resolution || showing a depth "mono-camera" map a LAN model.',
    source: "https://github.com/ghero56/zedboard-cv",
    platform: "Zynq 7000, ARM (Python)",
    year: "December 2024",
  },
  {
    title: "Chatbot (openAI API)",
    imgUrl: "/images/projects/ia/chatbot.webp",
    description:
      "This is Paquito! an IA assistant that will help you on this journey into building neural networks",
    source:
      "https://drive.google.com/file/d/1BzZfSLWAYeG-cwNN05GeWYIx7aX7-7wh/view?usp=sharing",
    platform: "ARM, x64 (Python)",
    year: "December 2023",
  },
  {
    title: "Age recognizer",
    imgUrl: "/images/projects/ia/age.webp",
    description:
      "This is Paquito! an IA assistant that will help you on this journey into building neural networks",
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
    source: "https://ghero56.github.io/",
    platform: "Web (React, Next.js)",
    year: "2025",
  },
  {
    title: "UE5 Video productions",
    imgUrl: "/images/projects/masonry.webp",
    description:
      "This is a collection of videos made with Unreal Engine 5, showcasing the capabilities of the engine and my skills in video production.",
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
    source: "https://www.instagram.com/ghero56/",
    platform: "None",
    year: "2025",
  },
];

export { DataGames, DataHardware, DataSoftware, DataAI, DataMisc };
