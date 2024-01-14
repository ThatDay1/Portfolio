
import { faHome, faEnvelope, faUserGraduate, faFolder } from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon: faUserGraduate,
        path: '/about'
    },
    {
        id: 3,
        name: 'Portfolio',
        icon: faFolder,
        path: '/portfolio'
    },
    {
        id: 4,
        name: 'Contact',
        icon: faEnvelope,
        path: '/contact'
    },
];



export const experience = [
    {
        id: 1,
        no: 'Education',
        title: 'Computer Education and Instructional Technology'
    },
    {
        id: 2,
        no: '10+',
        title: 'Complete Projects'
    }
];


import image1 from '../../src/assets/javascript.png'
import image2 from '../../src/assets/react.png'
import image3 from '../../src/assets/typescript.png'
import image4 from '../../src/assets/html.png'
import image5 from '../../src/assets/node.png'
import image6 from '../../src/assets/css.png'
export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];


import { faCodeBranch, faCode, faCodeCompare, } from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faCode,
        name: 'Web Development',
        des: 'Specializing in web development, I bring a keen eye for design and a proficiency in the latest technologies to create immersive, responsive and visually stunning websites that leave a lasting impression.'
    },
    {
        id: 2,
        icon: faCodeBranch,
        name: 'Apps Development',
        des: 'As an app development enthusiast, I leverage cutting-edge technologies to craft use-friendly applications, ensuring a delightful user experience while staying at the forefront of innovation in the ever-evolving world of technology.'
    }
];




import protfoliImg1 from '../../src/assets/p1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.jpg'
export const portfolio = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Modern-Business',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github: '#',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Project-2',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github: '#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Project-3',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github: '#',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Project-4',
        des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione officiis iusto nulla exercitationem',
        github: '#',
    },
];
