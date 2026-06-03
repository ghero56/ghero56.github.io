// Real course data recovered from the original CV.
// Course names are kept as proper / technical nouns (valid in both languages);
// section headings come from the i18n dictionary.

// Courses Fernando has TAKEN. Use MUI icon names so we don't depend on
// logo images that aren't in the repo.
export const coursesTaken = [
  {
    name: "Game Designer",
    place:
      "Sociedad de Desarrollo en Videojuegos (SODVI), Facultad de Ingeniería, UNAM",
    icon: "SportsEsports",
  },
  {
    name: "IT Essentials (Cisco)",
    place:
      "Centro de Reintegración Juvenil Nezahualcóyotl, Estado de México",
    icon: "Router",
  },
  {
    name: "Programación en Python (Básico–Avanzado)",
    place: "Facultad de Ingeniería, UNAM",
    icon: "Code",
  },
  {
    name: "Programación Orientada a Objetos en Java",
    place: "Facultad de Ingeniería, UNAM",
    icon: "Coffee",
  },
];

// Courses Fernando has TAUGHT. Images already live in /public/images/courses.
const SODVI = "https://www.sodvi.com";

export const coursesTaught = [
  {
    name: "Unity Básico",
    place: "SODVI, Facultad de Ingeniería, UNAM",
    img: "/images/courses/1.webp",
    source: SODVI,
  },
  {
    name: "C# para videojuegos",
    place: "SODVI, Facultad de Ingeniería, UNAM",
    img: "/images/courses/5.webp",
    source: SODVI,
  },
  {
    name: "Python para videojuegos",
    place: "SODVI, Facultad de Ingeniería, UNAM",
    img: "/images/courses/7.webp",
    source: SODVI,
  },
  {
    name: "Unreal Engine Básico 2022-2",
    place: "SODVI, remoto asíncrono",
    img: "/images/courses/2.webp",
    source: SODVI,
  },
  {
    name: "Unity Avanzado 2022-2",
    place: "SODVI, remoto asíncrono",
    img: "/images/courses/4.webp",
    source: SODVI,
  },
  {
    name: "Git y GitHub desde cero",
    place: "Udemy",
    img: "/images/courses/6.webp",
    source:
      "https://www.udemy.com/course/introduccion-a-git-y-github-desde-cero/",
  },
  {
    name: "Unreal Engine Básico 2023-1",
    place: "SODVI, remoto asíncrono",
    img: "/images/courses/3.webp",
    source: SODVI,
  },
  {
    name: "Unity 3D Avanzado 2023-1",
    place: "SODVI, remoto asíncrono",
    img: "/images/courses/8.webp",
    source: SODVI,
  },
];
