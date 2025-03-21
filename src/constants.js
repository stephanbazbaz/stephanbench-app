import FACEBOOK from './assets/logos/facebook-f_1.svg'
import GITHUB from './assets/logos/github_10.svg'
import LINKDIN from './assets/logos/linkedin_6.svg'
import MAIL from './assets/logos/mail-outline_1.svg'
import STUDIO_PIC from './assets/pics/studiobaz.png'
import MUSIC4LOVERS from './assets/pics/music4lovers_pic.png'
import TIMEOUT_PIC from './assets/pics/TIMEOUT_2.png'
import ALEX_PIC from './assets/pics/alex-pic.png'
import DOZEN_SHOP from './assets/pics/dozen_wishes.png'
import LULU_PIC from './assets/pics/lulusinit_pic.png'
import PTCH from './assets/pics/PTCH.png'
import OTEF from './assets/pics/OTEF.png'
import MONK from './assets/pics/MONK.png'


export const mobileWidth = 769
export const socialsArr = [
  {
    href: 'https://www.linkedin.com/in/stephan-benchemoul-38879320b/',
    src: LINKDIN,
    alt: 'linkdin'
  },
  {
    href: 'https://github.com/stephanbazbaz',
    src: GITHUB,
    alt: 'github'
  },
  {
    href: 'https://www.facebook.com/ethan.hearing.10/',
    src: FACEBOOK,
    alt: 'facebook'
  },
  {
    href: 'mailto:stephanbncml@gmail.com',
    src: MAIL,
    alt: 'email'
  },
]

export const activeAos = () => {
  const aosAnimation = document.querySelectorAll('[data-aos]');
  let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('aos-animate');
      } else {
        entry.target.classList.remove('aos-animate');
      }
    });
  });
  aosAnimation.forEach(aosObject => {
    observer.observe(aosObject);
  });
}

export const aosConfig = {
  duration: 300,
  easing: 'ease-in',
  mirror: true,
}

export const loremIpsum = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
// export const aboutText = "Hi! My name is Stephan and I enjoy creating things that live on the internet. My relationship with computers & softwares started back in 2006 when I did my Bachelor degree in Sound engineering. After years in the music production industry i decided to take things to the next level and studied web development. As a web developer I had the privilege of working with 2 major outsourcing companies which gave web solutions to fintech companies and start ups. As a developer my main focus is building accessible, inclusive products and digital experiences for a variety of clients."
export const aboutText = "Full stack Web developer with 5 years experience.\n" +
    "From complex server architecture and frontend pixel perfect scenarios to Shopify and Squaresapce design and code intervention ."
export const techText = "Here are a few technologies I’ve been working with recently:"


export const technologiesArr = [
  'Shopify',
  'Squarespace',
  'Javascript',
  'Typescript',
  'React',
  'Node JS',
  'SQL',
  'Mongo DB',
  'Figma',
]
export const isMobile = () => window.innerWidth <= 768
export const aosFadeUpLeft = {
  'data-aos-once': true,
  'data-aos': "fade-up-left",
  'data-aos-anchor-placement': "top-center"
}
export const aosFadeUpRight = {
  'data-aos-once': true,
  'data-aos': "fade-up-right",
  'data-aos-anchor-placement': "top-center"
}
export const aosFadeUpUp = {
  'data-aos-once': true,
  'data-aos': "fade-up",
  'data-aos-anchor-placement': "top-center"
}
export const aboutObj = {
  myNameIs: 'Hi, my name is',
  fullName: 'Stephan Benchemoul.',
  profession: "Web Developer & Sound Designer.",
  description: 'I build and design web applications using modern web technologies with a focus on responsiveness, accessibility and pleasing aesthetics.',
  web: 'Software Engineer & Web',
  developer: 'Developer.',
}
export const experienceArr = [
  {
    label: 'Freelance',
    date: 'May 2020 - Present',
    description: [
      'Shopify and Squarespace expert, building full apps from scratch or fixing existing websites. code intervention.',
      'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Angular, React, Node JS, WordPress, Heroku and Netlify',
    ],
    title: 'Web Developer',
    link: 'https://www.linkedin.com/in/stephan-benchemoul-38879320b/'
  },
  {
    label: 'nRich',
    date: 'Nov 2022 - Nov 2024',
    description: [
      'A Node.js backend developer builds server-side applications using Node.js, ensuring efficient and scalable backend systems.',
    ],
    title: 'Backend Developer',
    link: 'https://www.linkedin.com/in/stephan-benchemoul-38879320b/'
  },
  {
    label: 'PWM',
    date: 'May 2021 - Sep 2022',
    description: [
      'Web solutions for major tech companies.',
      'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across web browsers',
      "Worked with a team of 9 developers to build a CRM for a major fin tech company",
      'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
    ],
    title: 'Full stack Developer',
    link: 'https://www.linkedin.com/company/pwm-il/'
  },
  {
    label: 'Moveo Group',
    date: 'Dec 2020 - May 2021',
    description: [
      'Built a full Culinary App with Admin and User systems using Angular for Front-end developing and in Node Js for Server side. database in Mongo DB.',
      'Built a design system for a major bank company using React, Mui Components, Scss and Redux Toolkit.',
      'Communicate with multi-disciplinary teams of engineers, designers, product managers, and clients on a daily basis'
    ],
    title: 'Web Developer',
    link: 'https://www.moveo.group/'
  }
]

export const Projects = [
  {
    link: 'https://monkoffee.com/',
    title: 'Online Coffee Shop',
    text: 'Chinese medicine therapist website',
    tech: ['Shopify', 'css', 'javascript'],
    pic: MONK
  },
  {
    link: 'https://otef.shop/',
    title: 'Online Clothing Shop',
    text: 'Chinese medicine therapist website',
    tech: ['Shopify', 'css', 'javascript'],
    pic: OTEF
  },
  {
    link: 'https://www.guypitchon.com/',
    title: 'Artist Portfolio Website',
    text: 'Chinese medicine therapist website',
    tech: ['Squarespace', 'css', 'javascript'],
    pic: PTCH
  },
  {
    link: 'https://www.lulusinit.com/',
    title: 'Personal Business Website',
    text: 'Chinese medicine therapist website',
    tech: ['Squarespace', 'css', 'javascript'],
    pic: LULU_PIC
  },
  {
    link: 'https://alexsahara.com/',
    title: 'Alex Online Clothes',
    text: 'Shopify clothing store for woman clothing. english and hebrew languages, desktop amd mobile design',
    tech: ['Shopify', 'css', 'javascript'],
    pic: ALEX_PIC
  },
  {
    link: 'https://dozen-wishes.com/',
    title: 'Jewelry online shop',
    text: 'Shopify design for desktop and mobile',
    tech: ['Shopify', 'css', 'javascript'],
    pic: DOZEN_SHOP
  },
  // {
  //   link: 'https://drnaomiheyman.com/',
  //   title: 'Therapist portfolio',
  //   text: 'Portfolio app for an expressive therapist',
  //   tech: ['React', 'css', 'javascript'],
  //   pic: NAOMI_PIC
  // },
  // {
  //   link: 'https://stephansupermarketapp.herokuapp.com/',
  //   title: 'Super Market App',
  //   text: 'Final project from my studies at Jhon bryce Academy. Full E-commerce website of a Vegan Supermarket.',
  //   tech: ['React', 'Node.js', 'SQL', 'PostgreSQL', 'Heroku'],
  //   pic: SUPER_PIC
  // },
  // {
  //   link: 'https://stark-basin-64884.herokuapp.com/',
  //   title: 'Vacations App',
  //   text: 'Second project from my studies at Jhon bryce Academy emulating a vacation App where you can search & follow vacations. you can login to Admin to upload new vacations using admin username: adminadmin, password: admin1234.',
  //   tech: ['React', 'Node.js', 'SQL', 'PostgreSQL', 'Heroku'],
  //   pic: VACATION_PIC
  // },
  // {
  //   link: 'https://brave-sammet-525389.netlify.app/',
  //   title: 'MPC Disco Sequencer',
  //   text: 'Virtual loop machine contaning disco sounds with option to record a session',
  //   tech: ['React', 'Styled-Components', 'Netlify'],
  //   pic: DISCO_PIC
  // }
]

export const Articles = [
  {
    link: 'https://trommelmusic.com/music/tutorials/the-source-welcome-stephen-bazbaz-who-delivers-a-masterclass-on-pitch-modulation/',
    title: 'Production Master Class',
    text: 'Tutorial i made for Trommel magazine on some tips and tricks how to produce interesting sounds.',
    pic: STUDIO_PIC,
  },
  {
    link: 'https://timeout.co.il/%D7%98%D7%99%D7%95%D7%9F-%D7%90%D7%99%D7%9F-%D7%A1%D7%98%D7%A4%D7%9F-%D7%91%D7%96%D7%91%D7%96/',
    title: 'Timeout Magazine Interview',
    text: 'Some words about my life as a producer and my new passion for code.',
    pic: TIMEOUT_PIC,
  },
  {
    link: 'https://www.musicis4lovers.com/stephan-bazbaz-interview/',
    title: 'Music 4 Lovers Interview',
    text: 'Interview for Music 4 Lovers radio show in Ibiza on my EP for Cyclic Records.',
    pic: MUSIC4LOVERS,
  },
]

export const homeIconObj = {
  src: "https://cdn.lordicon.com/gmzxduhd.json",
  trigger: "hover",
  className: 'lord-icon',
  style: { width: '60px', height: '60px', cursor: 'pointer' }
}