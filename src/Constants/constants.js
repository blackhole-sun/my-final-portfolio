

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  avatar,
  firebaseIcon,
  flutterIcon,
  springBootIcon,
  kotlinIcon,
  swaggerIcon
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
  firebaseIcon,
  flutterIcon,
  springBootIcon,
  kotlinIcon,
  swaggerIcon
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Disclaimer - I look ugly irl",

    "Hello there, I'm so happy you are here! (Trust me, IDGAF)",

    "My name is Shashank, I'm a software development engineer (bad one). I have a strong passion for the technologies (lol) related to the microservices and web-application.",

    "I like solving problem (only easy one) and come up with unique solution (copied from stackoverflow or chatGPT)",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  // {
  //   id: 'projects',
  //   title: 'Projects',
  // },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: "Arasartara's Gallery",
    description: 'A memory game with an art theme implemented with React. Test your memory skills and enjoy beautiful artwork as you match pairs of cards in this engaging game.',
    image: memoryGame,
    source_code_link: 'https://github.com/bl33h/artMemoryGame',
    demo_link: 'https://arasarmemory.netlify.app/',
  },
  {
    name: 'Pawsitive',
    description: 'Explore a user-friendly Figma prototype for an adoption and sterilization awareness website. Experience the sleek design and contribute to a noble cause.',
    image: pawsitivePrototype,
    source_code_link: 'https://github.com/bl33h/pawsitive',
    demo_link: 'https://www.figma.com/proto/zhK8DMa7uPyQIcHxkemIcx/Pawsitive?type=design&node-id=40-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=40%3A2',
  },
  {
    name: 'Basic Calculator',
    description: 'A completely functional basic calculator website created with React. It allows you to perform mathematical calculations effortlessly. With testing implemented, the results are accurate.',
    image: calculator,
    source_code_link: 'https://github.com/bl33h/calculator',
    demo_link: 'https://bl33hscalculator.netlify.app/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'springboot',
    title: 'Sprinboot',
    icon: springBootIcon,
    description:
      'I have strong Spring Boot experience (that\'s true), specializing in developing scalable microservices with solid principles. I consistently deliver high-quality code (ummmmm) and maintainable architecture (trust me bro, I haven\'t copied this from chatGPT), ensuring efficient and reliable solutions for modern applications.',
  },
  {
    id: 'flutter',
    title: 'Flutter',
    icon: flutterIcon,
    description:
    'Experienced in Flutter app development with a user-centric approach (I\'ll google what does it mean later). Create visually appealing, feature-rich mobile apps that meet client requirement (funny)',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'Haven\'t much work experiece but I have intermediate level of understand',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'Still learing',
  },
  {
    id: 'java',
    title: 'Java',
    icon: javaIcon,
    description:
      'I have extensive experience utilizing Java for object-oriented programming (OOP) and implementing data structures.',
  },
  {
    id: 'figma',
    title: 'Figma',
    icon: figmaIcon,
    description:
    'In my Figma skills, I unleash creativity, designing captivating user interfaces and collaborating seamlessly with designers and developers.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'kotlin',
    title: 'Kotlin',
    icon: kotlinIcon,
    description:
      'Experienced in Kotlin, I develop high-quality mobile apps with clean and concise code, leveraging the language\'s powerful features for a seamless user experience.',
  },
  {
    id: 'firebase',
    title: 'Firebase',
    icon: firebaseIcon,
    description:
      'I possess strong knowledge of Firebase, utilizing its powerful features to develop scalable and real-time applications',
  },
  {
    id: 'swagger',
    title: 'Swagger',
    icon: swaggerIcon,
    description:
      'I have expertise in Swagger, leveraging its capabilities to design and document APIs effectively, ensuring seamless integration and collaboration among developers.' ,
  }
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
