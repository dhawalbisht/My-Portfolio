import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};
const projects = [
  {
    title: "Labour-Link",
    imgSrc: "/project-imgs/project1.jpg",
    code: "https://github.com/dhawalbisht/Labour-Link",
    projectLink: "https://labour-link-knn1.vercel.app/",
    tech: ["JavaScript", "ReactJs", "TailwindCss", "Firebase"],
    description:
      "Our platform streamlines the process of connecting laborers with employment opportunities, providing a user-friendly interface for both parties involved. Feel free to explore and contribute to our project!",
    modalContent: (
      <>
        <p>
The project serves the dual purpose of connecting both skilled and unskilled laborers seeking employment with users in need of their services. It is particularly beneficial for individuals looking to expand their reach in the job market or those new to a town seeking assistance with tasks such as house renovations, painting, electrical work, and more.
        </p>
        <p>
        Platform Workflow</p>
        <p>
1. Labourer Registration:
   - Labourers register on the website by submitting necessary documents and providing basic details.
   - Access the registration form through the "Find Work" page.<p>


2. User Hiring Process:
   - Users sign in using their phone numbers for authentication and receive an OTP.
   - Fill out the user form with specific details about the job requirements.
   - Browse and hire laborers based on their profiles.
   - Make payments securely through the website.

   </p>
3. Confirmation and Communication:
   - Users receive email notifications containing details about the hired laborer.
   - This ensures transparency and effective communication between the two parties.
        </p>
        <p>
          Labour-Link is hosted in vercel
        </p>
      </>
    ),
  },
  {
    title: "Expense Tracker",
    imgSrc: "/project-imgs/project2.jpg",
    code: "https://github.com/dhawalbisht/Expense-Tracker",
    projectLink: "https://dhawalbisht.github.io/Expense-Tracker/",
    tech: ["JavaScript", "ReactJs", "Vite",  "CSS"],
    description:
      "This project is a simple transaction management system where users can add new transactions by entering a text description and the corresponding amount. Transactions are categorized as either expenses (negative amounts) or income (positive amounts).",
    modalContent: (
      <>
        <p>
        Personal Finance Management: Individuals can use this application to track their personal expenses, income sources, and overall financial health. It serves as a digital ledger for managing budgets and analyzing spending patterns.
        </p>
        <p>
        Small Business Accounting: Small businesses or freelancers can utilize the application to record business transactions, monitor cash flows, and maintain accurate financial records. The categorization feature aids in separating business expenses from personal ones.
        </p>
        <p>
        Budget Tracking and Analysis: Users can leverage the total balance display and categorized transactions to create budgets, track expenses against income, identify areas for cost-cutting, and make informed financial decisions.
        </p>
      </>
    ),
  },
  {
    title: "Muxik",
    imgSrc: "/project-imgs/Muxik.png",
    code: "https://github.com/ShivaBhattacharjee/Muxik",
    projectLink: "https://muxik.netlify.app/",
    tech: ["JavaScript", "ReactJs", "Vite", "Framer-Motion", "TailwindCSS"],
    description:
      "Muxik is a music streaming and downloading platform developed on ReactJs. It provides users with a wide variety of songs, albums, playlists, and artists across different genres. Users can enjoy a seamless and immersive music listening experience through the platform.",
    modalContent: (
      <>
        <p>
          Muxik is a music streaming / downloading site that offers a vast library for streaming and downloading. With a user-friendly interface, you can easily find your favorite song and stream them in high-definition quality. Our platform is updated regularly with the songs, so you can stay up-to-date with your favorite songs.Muxik is the go-to destination for audiophiles who want to stream or download their favorite music anytime, anywhere
        </p>
        <p>
          Users can conveniently batch download their favorite music and enjoy it offline, making it perfect for road trips or areas with limited internet connectivity. Muxik&apos;s Progressive Web Application (PWA) support ensures seamless access across devices without the need for separate installations.
        </p>
        <p>
          Enhancing the listening experience, Muxik allows users to adjust volume levels, auto-skip songs, and repeat tracks with ease. Personalized song recommendations and curated top playlists help users discover new music and diversify their library. With Muxik, users can enjoy a tailored and immersive audio experience, thanks to its volume change feature that adapts to individual preferences.
        </p>
        <p>
          In summary, Muxik offers a convenient solution for music lovers. It provides batch downloading and offline streaming capabilities, along with features like PWA support, volume control, auto-skip, recommended songs, top playlists, and repeat functionality. With Muxik, users can effortlessly enjoy their favorite music, discover new tracks, and personalize their listening experience.
        </p>
      </>
    ),
  },

  {
    title: "Synthia",
    imgSrc: "/project-imgs/Synthia.png",
    code: "https://github.com/ShivaBhattacharjee/Synthia",
    projectLink: "",
    tech: ["Rust"],
    description:
      "Synthia is a lightweight and beginner-friendly interpreted programming language developed in Rust. With a simple, intuitive syntax and a focus on ease of use, Synthia is perfect for both newcomers to programming and experienced developers looking for a flexible scripting language",
    modalContent: (
      <>
        <p>
          Synthia is a powerful and user-friendly programming language designed to make coding accessible to all skill levels. Built on top of Rust, it combines the blazing speed of Rust with a forgiving grammar and intuitive syntax. Say goodbye to complex rules and hello to rapid development.
        </p>
        <h3>
          Synthia Offers
        </h3>
        <li>
          <b>Lightning-Fast Execution</b>: Synthia harnesses the speed and performance of Rust, making it significantly faster than Python for a wide range of applications.
        </li>
        <li>
          <b>Beginner-Friendly</b>: With an easy-to-learn syntax and grammar rules that forgive common mistakes, Synthia is the ideal choice for those new to programming and experienced developers looking for productivity.
        </li>
        <li>
        <b>Built on Rust</b>: Benefit from Rust&apos; memory safety and ecosystem while enjoying the simplicity of Synthia&apos;s syntax.
        </li>
      </>
    ),
  },
];
