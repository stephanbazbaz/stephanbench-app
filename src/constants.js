import ALEX_PIC from './assets/pics/alex-pic.webp'
import LULU_PIC from './assets/pics/lulusinit_pic.webp'
import PTCH from './assets/pics/PTCH.webp'
import OTEF from './assets/pics/OTEF.webp'
import MONK from './assets/pics/MONK.webp'
import LAMAFILM from './assets/pics/lama-films.webp'
import MAGALI from './assets/pics/magali.webp'
import ZEBRA from './assets/pics/zebra-books.webp'
import NAMER from './assets/pics/namer-site.webp'
import YASMINE from './assets/pics/yasmine.webp'

// ---- Contact (single source of truth) ----
export const CONTACT_EMAIL = 'stephanbncml@gmail.com'
export const MAILTO = `mailto:${CONTACT_EMAIL}`
export const WHATSAPP_URL = 'https://wa.me/972544522614'

// ---- Hero ----
export const hero = {
  eyebrow: 'Hi, I\'m Stephan · your digital partner',
  headline: 'I build your brand online, then help it grow.',
  subline: 'Websites, online stores, Meta ads and Google Business Profile, handled by one person who knows your business. You focus on running it, I take care of the digital side.',
  availability: 'Taking on new clients',
}

// ---- Services ----
// priceFrom: e.g. '₪4,500' — leave '' to hide the price line
export const services = [
  {
    title: 'Websites & online stores',
    text: 'Designed and built from scratch on Shopify, Squarespace or fully custom code, ready to sell on any device.',
    priceFrom: '',
  },
  {
    title: 'Meta ads',
    text: 'Facebook & Instagram campaigns planned, launched and optimized to bring real customers, not just likes.',
    priceFrom: '',
  },
  {
    title: 'Google Business Profile',
    text: 'Get found on Google Search and Maps: profile setup, reviews and local SEO for your area.',
    priceFrom: '',
  },
  {
    title: 'Marketing strategy',
    text: 'A clear plan for what to promote, where and with what budget, based on what actually sells.',
    priceFrom: '',
  },
  {
    title: 'Custom development',
    text: 'Theme customization, new features and migrations, for when the site builder hits its limits.',
    priceFrom: '',
  },
  {
    title: 'Ongoing digital management',
    text: 'A monthly partner for your site, ads and online presence, so nothing falls through the cracks.',
    priceFrom: '',
  },
]

// ---- Testimonials ----
// Entries with an empty quote are skipped; the section hides when none are left.
// Copy the object below for each testimonial.
export const testimonials = [
  {
    quote: 'Stephan understood the look I wanted right away and built a site that shows my work the way I see it. it was easy to update myself.',          // e.g. 'Stephan rebuilt our store and set up our ads. Sales doubled in 3 months.'
    name: 'Or Gido',           // e.g. 'Or Gido'
    brand: 'NAMER',          // e.g. 'NAMER' (optional)
    link: 'https://www.namer-design.com/',           // e.g. 'https://www.namer-design.com/' (optional)
  },
    {
    quote: 'Stephan built our online store from scratch and made it feel like our brand, not a template. He is quick to answer and always finds a solution.',          // e.g. 'Stephan rebuilt our store and set up our ads. Sales doubled in 3 months.'
    name: 'Yasmine Layani',           // e.g. 'Or Gido'
    brand: 'Yasmine',          // e.g. 'NAMER' (optional)
    link: 'https://yasminenosara.com/',           // e.g. 'https://www.namer-design.com/' (optional)
  },
    {
    quote: 'Working with Stephan was easy from start to finish. He took my vision for the retreats shop and turned it into a calm, beautiful site that my clients love.',          // e.g. 'Stephan rebuilt our store and set up our ads. Sales doubled in 3 months.'
    name: 'Magali Sasson',           // e.g. 'Or Gido'
    brand: 'MAGALI',          // e.g. 'NAMER' (optional)
    link: 'https://magali-sasson.co.il/',           // e.g. 'https://www.namer-design.com/' (optional)
  },
    {
    quote: 'Stephan built a portfolio that lets my work speak for itself, clean and simple.',          // e.g. 'Stephan rebuilt our store and set up our ads. Sales doubled in 3 months.'
    name: 'Guy Pitchon',           // e.g. 'Or Gido'
    brand: 'Guy Pitchon',          // e.g. 'NAMER' (optional)
    link: 'https://www.guypitchon.com/',           // e.g. 'https://www.namer-design.com/' (optional)
  },
].filter(t => t.quote && t.name)

// ---- About ----
export const aboutText =
  "I help small brands, creatives and independent businesses build and grow their presence online, from the website itself to the ads and listings that bring people to it.\n\n" +
  "I started as a full-stack developer, so when a site builder can't do what you need, I write the code instead of telling you no. " +
  "Today I also run Meta ad campaigns and manage Google Business Profiles for my clients, in Hebrew and English, so you have one person who sees the whole picture."

export const platformsArr = ['Shopify', 'Squarespace', 'Meta Ads', 'Google Business', 'Figma']
export const underTheHoodArr = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'SQL', 'MongoDB']

// ---- Projects ----
// featured: true  → large alternating card. Others → compact "More work" grid.
// Entries without a link AND pic are skipped, so placeholders never ship.
export const Projects = [
  {
    name: 'NAMER',
    type: 'Wood designer portfolio',
    summary: 'A clean, image-led portfolio that puts handcrafted wood design front and center.',
    tags: ['Squarespace', 'Custom design', 'Portfolio'],
    link: 'https://www.namer-design.com/',
    pic: NAMER,
    featured: true,
  },
  {
    name: 'Yasmine',
    type: 'Handmade fashion store',
    summary: 'An editorial Shopify store for a Costa Rica designer of handmade beachwear, festival and bridal pieces.',
    tags: ['Shopify', 'Custom design', 'E-commerce'],
    link: 'https://yasminenosara.com/',
    pic: YASMINE,
    featured: true,
  },
  {
    name: 'MAGALI',
    type: 'Holistic retreats shop',
    summary: 'An online shop for holistic retreats and treatments, with a calm look that matches the brand.',
    tags: ['Shopify', 'Custom theme', 'Hebrew'],
    link: 'https://magali-sasson.co.il/',
    pic: MAGALI,
    featured: true,
  },
  {
    name: 'Guy Pitchon',
    type: 'Artist portfolio',
    summary: 'A gallery-style portfolio that lets the artwork speak for itself.',
    tags: ['Squarespace', 'Custom design', 'Portfolio'],
    link: 'https://www.guypitchon.com/',
    pic: PTCH,
    featured: true,
  },
  {
    name: 'OTEF',
    type: 'Clothing store',
    tags: ['Shopify'],
    link: 'https://otef.shop/',
    pic: OTEF,
  },
  {
    name: 'Lulusinit',
    type: 'Personal business',
    tags: ['Squarespace'],
    link: 'https://www.lulusinit.com/',
    pic: LULU_PIC,
  },
  {
    name: 'Monkoffee',
    type: 'Coffee shop',
    tags: ['Shopify'],
    link: 'https://monkoffee.com/',
    pic: MONK,
  },
  {
    name: 'Lama Films',
    type: 'Production company',
    tags: ['Squarespace'],
    link: 'https://www.lama-films.com/',
    pic: LAMAFILM,
  },
  {
    name: 'Zebra Books',
    type: 'Book store',
    tags: ['Shopify'],
    link: 'https://zebra-books.com/',
    pic: ZEBRA,
  },
  {
    name: 'Alex Sahara',
    type: 'Women\'s clothing',
    tags: ['Shopify', 'Bilingual HE/EN'],
    link: 'https://alexsahara.com/',
    pic: ALEX_PIC,
  },
].filter(p => p.link && p.pic)

export const homeIconObj = {
  src: "https://cdn.lordicon.com/gmzxduhd.json",
  trigger: "hover",
  className: 'lord-icon',
  style: { width: '60px', height: '60px', cursor: 'pointer' }
}
