import project1 from "../assets/ProjectImage1.webp";
import project2 from "../assets/ProjectImage2.webp";
import project3 from "../assets/ProjectImage3.webp";
import project4 from "../assets/ProjectImage4.webp";
// import project5 from "../assets/project5.webp";
import project6 from "../assets/ProjectImage6.webp";

import Rajesh_Kumar from "../assets/Rajesh_Kumar.webp";
import Priya_Sharma from "../assets/Priya_Sharma.webp";
import Amit_Patel from "../assets/Amit_Patel.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiFlowChart,
  RiDatabase2Line,
  RiDatabase2Fill,
  RiGitMergeLine,
} from "@remixicon/react";
import {
  RiDatabaseLine,
  RiCodeSSlashLine,
  RiGitBranchLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#works" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  firstName: "Mohd",
  lastName: "Kaif",
  role: "Full Stack Developer",
  subheading:
    "Crafting scalable web solutions that grow with your vision. I specialize in building robust, modern applications that adapt to evolving business needs. Always excited to tackle challenging projects that push boundaries.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "ThreadScape - E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, order management and an integrated payment gateway.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redux",
      "Tailwind CSS",
    ],
    imgSrc: project1,
    link: "https://threadscape-kai.vercel.app",
  },
  {
    id: 2,
    title: "StreamX - Landing Page",
    description:
      "A dynamic landing page for a game streaming platform where gamers can broadcast their gameplay live. Features stream previews, gaming categories, interactive chat, and monetization tools for content creators.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    imgSrc: project2,
    link: "https://stream-x-henna.vercel.app",
  },
  {
    id: 3,
    title: "Umar Masih - Graphic Designer",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "React Bits",
      "EmailJS",
    ],
    imgSrc: project3,
    link: "https://umar-masih-gd.vercel.app",
  },
  {
    id: 4,
    title: "Pixelta.ai",
    description:
      "Pixelta is an AI-based image processing website that offers features such as background removal, smart crop, AI enhancement, and many more.",
    techStack: [
      "React",
      "TypeScript",
      "HuggingFace",
      "Supabase",
      "Tailwind CSS",
    ],
    imgSrc: project4,
    link: "https://pixelta-ai.lovable.app/",
  },
  // {
  //   id: 5,
  //   title: "Online Learning Platform",
  //   description:
  //     "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
  //   techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
  //   imgSrc: project5,
  //   link: "https://example-learningplatform.com",
  // },
  {
    id: 5,
    title: "TaskBuddy - An App for Lazy Genius",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Supabase"],
    imgSrc: project6,
    link: "https://task-buddy-mk.vercel.app",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600 w-10 h-10" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500 w-10 h-10" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500 w-10 h-10" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400 w-10 h-10" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500 w-10 h-10" />,
  },
  {
    name: "MongoDB",
    icon: <RiDatabaseLine className="text-green-600 w-10 h-10" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiCodeSSlashLine className="text-teal-400 w-10 h-10" />,
  },
  {
    name: "GraphQL",
    icon: <RiGitBranchLine className="text-pink-400 w-10 h-10" />,
  },
  {
    name: "Redux",
    icon: <RiFlowChart className="text-purple-500 w-10 h-10" />,
  },
  {
    name: "React Query",
    icon: <RiDatabase2Line className="text-red-400 w-10 h-10" />,
  },
  {
    name: "PostgreSQL",
    icon: <RiDatabase2Fill className="text-blue-600 w-10 h-10" />,
  },
  {
    name: "Git",
    icon: <RiGitMergeLine className="text-orange-500 w-10 h-10" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "2024 - Present",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    description:
      "Working with clients to build responsive and modern web applications. Focusing on creating pixel-perfect UI implementations and optimizing web performance. Handling complete project lifecycles from requirement gathering to deployment.",
    techStack: ["React.js", "Next.js", "Tailwind CSS", "Node.js"],
  },
  {
    yearRange: "2023 - 2024",
    role: "Frontend Developer (Contract)",
    company: "Freelance",
    description:
      "Developed custom WordPress themes and e-commerce solutions for small businesses. Created responsive layouts and implemented SEO best practices. Increased client conversion rates by an average of 25% through optimized user experiences.",
    techStack: [
      "WordPress",
      "Elementor",
      "JavaScript",
      "React.js",
      "WooCommerce",
    ],
  },
  {
    yearRange: "2023",
    role: "Meta Frontend Developer Certificate",
    company: "Meta",
    description:
      "Completed Meta's professional certification program focused on modern frontend development. Built practical projects including a restaurant booking system and social media dashboard. Learned industry best practices and modern development workflows.",
    techStack: [
      "React.js",
      "JavaScript",
      "Git",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    yearRange: "2023",
    role: "Python Training Intern",
    company: "Tevatron Pvt. Ltd.",
    description:
      "Gained hands-on experience in Python development through remote internship. Assisted in developing and maintaining web applications using modern technologies. Collaborated with senior developers to implement new features and fix bugs.",
    techStack: ["Python", "Django", "MySQL", "JavaScript", "CSS3"],
  },
  {
    yearRange: "2022 - 2023",
    role: "Freelance WordPress Developer",
    company: "Self-Employed",
    description:
      "Built and maintained WordPress websites for local businesses and startups. Customized themes and plugins to meet specific client requirements. Provided ongoing maintenance and security updates for client websites.",
    techStack: ["WordPress", "Elementor", "MySQL", "JavaScript", "CSS3"],
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Master of Computer Application",
    institution: "Jamia Hamdard University",
    duration: "2024 - Present",
    description:
      "Currently pursuing MCA with focus on software development, data structures, and cloud computing. Learning modern development practices and working on projects involving web technologies and distributed systems.",
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "Ewing Christian College",
    duration: "2018 - 2021",
    description:
      "Graduated with honors in Computer Science, focusing on algorithms, data structures, and web development. Completed a capstone project on scalable cloud architectures.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    title: "CTO, Tevatron Pvt. Ltd.",
    quote:
      "Kaif demonstrated exceptional skills during his internship with us. His ability to quickly grasp new technologies and contribute meaningfully to our projects was impressive. His work on our Restraunt Management System showed great attention to detail and a solid understanding of Python development.",
    image: Rajesh_Kumar,
  },
  {
    name: "Priya Sharma",
    title: "Project Lead, Tevatron Pvt. Ltd.",
    quote:
      "Working with Kaif was a pleasure. He brought fresh perspectives to our team and showed great initiative in solving complex problems. His collaborative nature and strong technical skills made him a valuable team member during his internship.",
    image: Priya_Sharma,
  },
  {
    name: "Amit Patel",
    title: "Business Owner",
    quote:
      "As a freelance WordPress developer, Kaif delivered exceptional results for my business website. His expertise in customization and attention to detail helped create exactly what I envisioned. He was always responsive and professional throughout the project.",
    image: Amit_Patel,
  },
];
