import FACEBOOK from './assets/logos/facebook-f_1.svg'
import GITHUB from './assets/logos/github_10.svg'
import LINKDIN from './assets/logos/linkedin_6.svg'
import MAIL from './assets/logos/mail-outline_1.svg'
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
    href: 'mailto:stephan@pwm.co.il',
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
  duration: 350,
  easing: 'ease-in',
  mirror: true,
};

export const loremIpsum = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
export const aboutText = "Hi! My name is Stephan and I enjoy creating things that live on the internet. My relationship with computers & softwares started back in 2006 when I did my Bachelor degree in Sound engineering. After years in the music production industry i decided to take things to the next level and studied web development. As a web developer I had the privilege of working with 2 major outsourcing companies which gave web solutions to fintech companies and start ups. As a developer my main focus is building accessible, inclusive products and digital experiences for a variety of clients."
export const technologiesArr = [
  'Javascript',
  'Typescript',
  'React',
  'Angular',
  'Node JS',
  'SQL',
  'Mongo DB',
  'Figma',
  'Wordpress'
]