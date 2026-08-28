import FACEBOOK from './assets/logos/facebook-f_1.svg'
import GITHUB from './assets/logos/github_10.svg'
import LINKDIN from './assets/logos/linkedin_6.svg'
import MAIL from './assets/logos/mail-outline_1.svg'
import ALEX_PIC from './assets/pics/alex-pic.jpg'
import DOZEN_SHOP from './assets/pics/dozen_wishes.jpg'
import LULU_PIC from './assets/pics/lulusinit_pic.jpg'
import PTCH from './assets/pics/PTCH.jpg'
import OTEF from './assets/pics/OTEF.jpg'
import MONK from './assets/pics/MONK.jpg'
import LAMAFILM from './assets/pics/lama-films.jpg'
import MAGALI from './assets/pics/magali.jpg'
import ZEBRA from './assets/pics/zebra-books.jpg'
import NAMER from './assets/pics/namer-site.png'

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

export const aboutText = "Experienced Web Developer.\n" +
    "From complex server architecture and frontend pixel perfect scenarios to Shopify and Squaresapce design with code intervention ."

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
export const Projects = [
      {
    link: 'https://www.namer-design.com/',
    title: 'Wood Designer Portfolio',
    text: 'Chinese medicine therapist website',
    tech: ['Squarespace', 'css', 'javascript'],
    pic: NAMER
  },
    {
    link: 'https://magali-sasson.co.il/',
    title: 'Holistic Retreats Shop',
    text: 'Chinese medicine therapist website',
    tech: ['Shopify', 'css', 'javascript'],
    pic: MAGALI
  },
    {
    link: 'https://zebra-books.com/',
    title: 'Online Book Store',
    text: 'Chinese medicine therapist website',
    tech: ['Shopify', 'css', 'javascript'],
    pic: ZEBRA
  },
    {
    link: 'https://www.lama-films.com/',
    title: 'Company Portfolio Website',
    text: 'Chinese medicine therapist website',
    tech: ['Squarespace', 'css', 'javascript'],
    pic: LAMAFILM
  },
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
]

export const homeIconObj = {
  src: "https://cdn.lordicon.com/gmzxduhd.json",
  trigger: "hover",
  className: 'lord-icon',
  style: { width: '60px', height: '60px', cursor: 'pointer' }
}