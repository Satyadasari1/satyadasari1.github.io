/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Satyanarayana Dasari⚡Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Satyanarayana Dasari Portfolio",
    type: "website",
    url: "https://github.com/Satyanarayana-dasari",
  },
};

//Home Page
const greeting = {
  title: "Satyanarayana Dasari",
  logo_name: "Satyanarayana Dasari",
  nicknames: [
    "Full Stack Developer 🚀",
    "Data Analyst 📊",
    "Tech Enthusiast 🌐",
    "Problem Solver 🧠",
    "AI Agent Developer 🧠🤖",
    "Intelligent Systems Explorer 🧬",
    "React Developer ⚛️",
    "Creative Coder ✨",
    "Lifelong Learner 📚",
    "Tech Storyteller 📖",
    "Cloud Explorer ☁️",
    "UI/UX Designer 🎨",
  ],
  subTitle:
    "Versatile developer with a passion for building impactful, scalable, and user-friendly products. I specialize in full-stack development, data analysis, and creative problem-solving, always eager to learn and innovate in fast-paced environments.",
  resumeLink: "https://github.com/Satyanarayana-dasari",
  githubProfile: "https://github.com/Satyanarayana-dasari",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Satyanarayana-dasari",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/satyanarayana-dasari/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:satya.dasari323@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/satya.dasari._/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Satyanarayana's Blog",
    link: "https://github.com/Satyanarayana-dasari",
    fontAwesomeIcon: "fa-hashnode",
    backgroundColor: "#1877F2",
  },
  {
    name: "X-Twitter",
    link: "https://x.com/_iamsatyanarayana-dasari_",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites front end using JS, React",
        "⚡ Experience of hosting websites on servers and cloud platforms",
        "⚡ Developing Web backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "devicon:nextjs-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon:nodejs-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Tailwind css",
          fontAwesomeClassname: "devicon:tailwindcss",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django-wordmark",
          style: {
            color: "#",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "devicon:express",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "API",
          fontAwesomeClassname: "arcticons:api-tester",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "devicon:typescript",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "devicon:netlify-wordmark",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },

        {
          skillName: "Figma",
          fontAwesomeClassname: "logos:figma",
          style: {
            backgroundColor: "#",
            color: "",
          },
        },
      ],
    },
    {
      title: "Data Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing scalable models for various Machine Learning and statistical use cases",
        "⚡ Experience of working on Machine Learning projects",
        "⚡ Data quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },

        {
          skillName: "SQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Data Analysis & Visualization",
          fontAwesomeClassname: "carbon:data-volume",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django-wordmark",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "devicon:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },

    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "logos:figma",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "logos:adobe-xd",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "logos:adobe-illustrator",
    //       style: {
    //         color: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Canva",
    //       fontAwesomeClassname: "simple-icons:canva",
    //       style: {
    //         color: "",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#000000",
      },
      profileLink: "https://github.com/Satyanarayana-dasari",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/satya_dasari323",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "V S M COLLEGE OF ENGINEERING",
      subtitle: "B.Tech. in Computer Science and Engineering - 7.11 CGPA",
      logo_path: "srm logo.png",
      duration: "2019 - 2022",
      descriptions: [
        "🔺 I studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "📈 Apart from this, I have done courses on Machine Learning, Data Analysis, AWS Cloud Technical, Web Development and UI/UX.",
        "⚡ I also served as a student volunteer in the National Service Scheme (NSS) during college, engaging in various social service activities and community outreach programs.",
      ],
      website_link: "https://vsm.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Essentials",
      subtitle: "Cisco",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "Cisco",
      color_code: "#ffffff",
    },
    {
      title: "Machine Learning",
      subtitle: "Kaggle",
      logo_path: "kaggle.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Generative AI Applictions and Python Fundamentals",
      subtitle: "",
      logo_path: "images.png",
      certificate_link: "",
      alt_name: "Google",
      color_code: "#ffffff",
    },
    {
      title: "Software Engineer",
      subtitle: "HackerRank",
      logo_path: "course.png",
      certificate_link: "",
      alt_name: "HackerRank",
      color_code: "#ffffff",
    },
    {
      title:  "Web Development",
      subtitle: "IBM SkillBuild",
      logo_path: "ibm_logo.png",
      certificate_link: "",
      alt_name: "IBM",
      color_code: "#ffffff",
    },
    {
      title: "JavaScript",
      subtitle: "",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "Cisco",
      color_code: "#ffffff",
    },
    {
      title:"Reactjs",
      subtitle: "GUVI Geek Networks",
      logo_path: "images (2).png",
      certificate_link: "",
      alt_name: "GUVI",
      color_code: "#ffffff",
    },
    {
      title: "Python",
      subtitle: "",
      logo_path: "course.png",
      certificate_link: "",
      alt_name: "deeplearning.ai",
      color_code: "#ffffff",
    },
    {
      title: "Data Analytics",
      subtitle: "",
      logo_path: "cisco.png",
      certificate_link: "",
      alt_name: "Cisco",
      color_code: "#ffffff",
    },
    {
      title: "Accenture Developer Virtual Internship",
      subtitle: "",
      logo_path: "acc1.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
    {
      title: "J.P. Morgan Software Engineering Virtual Internship",
      subtitle: "",
      logo_path: "jp.png",
      certificate_link: "",
      alt_name: "NPTEL",
      color_code: "#ffffff",
    },
    {
      title: "3-Week Course on Python",
      subtitle: "GeeksforGeeks",
      logo_path: "gl.jpg",
      certificate_link: "",
      alt_name: "GCP",
      color_code: "#ffffff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work / Internship",
  description:
    " I am actively seeking opportunities to apply my skills, academic projects, and training in a professional environment. I would be excited to connect and explore how I can contribute to your team, project, or organization.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Looking for opportunities",
          company: "",
          company_url: "https://github.com/Satyanarayana-dasari",
          logo_path: "tiktok_logo.png",
          duration: "Currently Present in ",
          location: "Rajahmundry / Konaseema District, Andhra Pradesh, India",
          description:
            "I'm continually growing my skillset and eager to apply what I’ve learned in real-world projects. If you've made it this far in my portfolio, I truly appreciate your time — and I’d be excited to connect. Let’s talk about how I can contribute to your team and take the next step in my career journey.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analyst",
          company: "KultureHire",
          company_url: "https://www.kulturehire.com/",
          logo_path: "tiktok_logo.png",
          duration: "October 2024 - November 2024",
          location: "Remote",
          description:
            "Successfully completed a remote internship focused on web, app, and design solutions within a student-led community. Took ownership of project planning, client interaction, and concept development. Actively contributed to front-end and back-end development, data handling, and testing workflows. Demonstrated strong analytical thinking, leadership, and team collaboration while improving user experience and delivering functional web applications aligned with client needs.",
          color: "#000000",
        },
        {
          title: "Python Developer",
          company: "CODTECH IT SOLUTIONS",
          company_url: "https://www.codtechitsolutions.com/",
          logo_path: "tiktok_logo.png",
          duration: "March 2024 - April 2024",
          location: "Remote",
          description:
            "Completed a project-based internship as a Python Developer, contributing to the development and deployment of dynamic web and software solutions. Actively engaged in backend logic, API integration, and data handling using Python. Collaborated with cross-functional teams on concept development, client requirements, and testing. Demonstrated strong problem-solving skills, effective teamwork, and a solid understanding of software development workflows in a remote professional environment.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Volunteer, National Service Scheme (NSS)",
          company: "V S M COLLEGE OF ENGINEERING",
          company_url: "https://www.vsm.edu.in/",
           duration: "June 2019 - April 2022",
          location:
            " Rayavaram, Andhra Pradesh",
          description:
            "Actively served as a student volunteer in the National Service Scheme (NSS), participating in a wide range of social service initiatives and community outreach programs. Contributed to organizing and supporting medical camps, blood donation drives, Swachh Bharat (Clean India), plastic awareness initiatives, and other civic engagement activities. Developed a strong sense of social responsibility, teamwork, and leadership while working toward the betterment of local communities.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
  "I've built a variety of projects using modern technologies that reflect my passion for solving real-world problems. My core strengths lie in Python programming, Machine Learning, Data Analysis, and Full Stack Web Development. From responsive websites to intelligent applications, I enjoy bringing ideas to life—right from concept to deployment—focusing on usability, performance, and clean code. Every project is a step forward in my learning journey and a showcase of my commitment to quality and innovation.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "0satyas",
 
};

const publications = {
  data: [
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "SATYA.jpg",
    description: (
  <span>
    I'm always open to exciting opportunities—whether it's a project collaboration, part-time/full-time role, presentation, or just a friendly tech conversation. <br />
    With a passion for building intelligent systems and user-focused solutions, I bring strong skills in Python, Machine Learning, SQL, Data Analysis, Web Development, and UI/UX Design. <br />
    I’m also exploring AI agents and innovative technologies that push the boundaries of what’s possible. <br />
    Let’s connect and build something impactful together!
  </span>
),

  },
  blogSection: {
    title: "Aspiration",
    subtitle:
  "I'm actively seeking exciting opportunities where I can contribute, grow, and make a meaningful impact. From innovative projects to dynamic roles, I'm eager to apply my skills in real-world environments. Explore my GitHub to see my work, and feel free to reach out if you believe I’d be a great fit for your team or initiative.",
    link: "https://github.com/Satyanarayana-dasari",
    avatar_image_path: "code.png",
  },
  addressSection: {
    title: "Connect",
    subtitle:
      "Feel free to reach out if you're looking for a Developer or designer, or simply want to connect. Check out my other socials and links here🔻",
    avatar_image_path: "",
    location_map_link: "https://github.com/Satyanarayana-dasari",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

console.log(
  "%c Designed and Developed by Satyanarayana Dasari⚡",
  "background-image: linear-gradient(90deg,#abc4ff,#D5CFD6); color: black;font-weight:1000;font-size:1rem; padding:20px;"
);

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
