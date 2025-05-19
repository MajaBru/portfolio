import wildlife from '../assets/wildlife.png'
import prototype1 from '../assets/prototype-accessibility.png'
import wildlife2 from '../assets/wildlife-2.png'
import wildlife3 from '../assets/wildlife-3.png'
import wildlife4 from '../assets/wildlife-4.png'
import wildlife5 from '../assets/wildlife-5.png'
import wildlife6 from '../assets/wildlife-6.png'

import supermain from '../assets/super-10.png'
import prototype2 from '../assets/prototype-super.png'
import super2 from '../assets/super-2.png'
import super3 from '../assets/super-3.png'
import super4 from '../assets/super-4.png'
import super5 from '../assets/super-5.png'
import super9 from '../assets/super-9.png'
import super7 from '../assets/super-7.png'
import super8 from '../assets/super-8.png'
import super11 from '../assets/super-11.png'

import mainitp from '../assets/itp-home2.png'
import prototype3 from '../assets/prototype3.png'
import itp1 from '../assets/itp-1.png'
import itp3 from '../assets/itp-3.png'
import itp4 from '../assets/itp-4.png'
import itp6 from '../assets/itp-6.png'
import itp7 from '../assets/itp-7.png'
import itp8 from '../assets/itp-8.png'


const projectsDetails = {
  "the-super-assessor": {
    title: "The SUPER Assessor",
    description: "The SUPER Assessor was a group project during the course Fullstack Development, in Spring 2024. It is a digitalized card game where educators, in either solo or multiplayer mode, can create a new unique assessment method. During the game, the player is in charge of their deck of cards, and have options to replace and randomize cards. When the player is satisfied with their assessment schema, they can share it with the community. The SUPER Assessor also includes an admin interface where admins can manage both cards and users. ",
    mainImg: supermain,
    techStack: ["React", "CSS", "Node.js", "Express", "MongoDB"],
    about: {
      prototype:
        "Me and the group started out creating a lo-fi prototype, which we then iterated to a mid-fi/hi-fi prototype. In the picture below is a snippet of the game flow for solo playmode.",
      prototypeImg: prototype2,
        result:
        "The SUPER assessor is a MERN-stack application which offers a public landing page, a user interface for teachers/assistants, and an admin interface for administrators. In the backend we developed a RESTful API using express and documented with Swagger. We also implemented a secure role-based authentication system with protected routes in the whole stack. My contributions in this project was mainly implementing: CRUD operations for both mission and assessment cards, CRUD operations for assessment schemas, cards and users management panels in the admin interface, creating displays of user created assessment schemas, authentication logic (login, registration, protected routes) on the frontend, styling of card components, and sidebar navigation.",
        imgs: [super2,super4, super5, super9,super11,super7,super8],
    },
    githublink: "",
    livelink: "",
  },
  "saving-wildlife": {
    title: "Saving Wildlife",
    description: "During fall 2023, I developed a fictional accessible website about saving and protecting the norwegian wildlife. The aim was to create a website which is accessible for individuals with an impairment and/or disability. The website is compliant with WCAG 2.1 Level AA (Web Content Accessibility Guidelines). I utilized tools such as WebAIM for contrast checking, Google Lighthouse to run accessibility tests, and NVDA to test screen reader support",
    mainImg: wildlife,
    techStack: ["HTML", "SASS", "JavaScript "],
    about: {
      prototype:
        "In the beginning of this project I created some Lo-Fi wireframes in Figma in order to define the main structure of the website.",
      prototypeImg: prototype1,
        result:
        "In the finished result, I had developed a responsive website where I implemented features such as: accessible navigation, custom mediaplayers (audio and video players) with accessible action buttons, accessible contact form and modal popup. This project taught me a lot about the importance of semantic HTML and ARIA. I also gained a broader understanding of how to follow WCAG 2.1 guidelines and use tools to test accessibility.",
    imgs: [wildlife2, wildlife3, wildlife6]
    },
    
    githublink: "https://github.com/MajaBru/Saving-Wildlife-IDG2012",
    livelink: "https://majabru.github.io/Saving-Wildlife-IDG2012/",
  },
    "itp-association": {
    title: "ITP Association Norway",
    description: "As a part of our bachelor project, me and two other students developed a new website solution for the ITP association Norway. It is an informative website which is primarily aimed towards for individuals diagnosed with ITP as well as others affected. The ITP association website serves as public site where visitors can learn more about the ITP association, and stay updated on ITP-related information. Our solution also features a custom CMS, where users with roles: admin and superadmin, can log in and manage content such as articles and users.",
    mainImg: mainitp,
    techStack: ["React", "TypeScript", "CSS", "Supabase", "NodeJS", "Express"],
    about: {
      prototype:
        "The team created a lo-fi prototype for most of the website. Then we iterated, and created Hi-Fi prototypes of selected pages. In the picture below, is a portion of our Lo-Fi prototype created in Figma.",
      prototypeImg: prototype3,
        result:
        "The finished result includes a public site for visitors featuring: a tidy landing page, informational main-articles about ITP, sub-articles which are connected to one or more categories, contact page featuring a contact form and people to contact, membership page to learn how to become a member. Our solution also offers a custom CMS for admin/superadmin users. Within this solution, non-technical users can log in and manage content. As an Admin the user has only access to manage content, but Superadmins have access to the user management page where they can edit role and create new user accounts. In the CMS, the users can do CRUD functionalites on articles, and can also save articles as drafts. They can also update other content such as contact information, sponsors, boardmembers etc.",
    imgs: [itp3,itp4,itp1,itp6,itp7,itp8]
    },
    
    githublink: "",
    livelink: "",
  },
};

export default projectsDetails