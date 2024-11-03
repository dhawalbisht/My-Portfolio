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
    title: "Inflow-Ai",
    imgSrc: "/project-imgs/inflow.jpg",
    code: "https://github.com/dhawalbisht/Inflow-Ai",
    projectLink: "https://inflow-ai.vercel.app/",
    tech: ["ReactJs", "NodeJs", "CohereAi"],
    description:
      "Inflow-Ai empowers users to effortlessly visualize their ideas with AI-generated mind maps and flowcharts, simplifying the brainstorming process and enhancing clarity in planning.",
      modalContent: (
        <>
        <p>
          Inflow-Ai is an innovative web application designed to help users visualize their ideas through AI-generated mind maps and flowcharts. By simply inputting a topic or keywords, users can see their thoughts transformed into structured visual representations, making complex concepts easier to understand.
        </p>
        <p>
          The app features interactive flowcharts that allow users to explore their ideas in real-time, offering a dynamic approach to brainstorming and planning. With the ability to export mind maps and flowcharts as JPG or PDF files, sharing and printing becomes effortless.
        </p>
        <p>
          Built with React and styled using Tailwind CSS, Inflow-Ai ensures a sleek and user-friendly experience across devices, making it accessible for both desktop and mobile users. Powered by Node.js and Express on the backend and hosted on Vercel, Inflow-Ai delivers fast and reliable performance.
        </p>
      </>
      
    ),
  },
  
  {
    title: "Insightify",
    imgSrc: "/project-imgs/insight.jpg",
    code: "https://github.com/dhawalbisht/Insightify",
    projectLink: "https://github.com/dhawalbisht/Insightify",
    tech: ["Fask", "ReactJs",  "CSS"],
    description:
      "This project provides a web-based PDF summarizer application with two main features: text summarization and question answering. The backend is powered by Flask, while the frontend is built using React.js.",
    modalContent: (
      <>
        <p>
        Our app simplifies complex PDFs, offering quick summaries and answering questions to boost productivity.
        Leveraging Flask on the backend, the app seamlessly processes PDF documents uploaded by users, extracting key information for summarization and question answering.
        </p>
        <p>
       Built with React on the frontend, the app features an intuitive and interactive user interface that allows users to upload PDFs, customize summary lengths, ask questions, and receive instant answers.
        </p>
        <p>
        The app is designed for continuous improvement, with plans for incorporating additional features such as language translation, sentiment analysis, and document clustering to further enhance its capabilities.
        </p>
      </>
    ),
  },
  
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
    title: "Credit Card Fraud Detection",
    imgSrc: "/project-imgs/project4.png",
    code: "https://github.com/dhawalbisht/CreditCardFraudDetection.git",
    projectLink: "https://github.com/dhawalbisht/CreditCardFraudDetection.git",
    tech: ["TensorFlow", "Seaborn", "Python prediction libraries"],
    description:
      "Credit Card Fraud Detection project successfully addressed the pressing need for an intelligent and scalable solution to combat electronic transaction fraud.",
    modalContent: (
      <>
        <p>
        Deep Learning Model with TensorFlow
Developed a robust deep learning model capable of autonomously learning intricate patterns indicative of fraudulent transactions.
        </p>
        <p>
        Exploratory Data Analysis with Seaborn
Utilized Seaborn integration for comprehensive exploratory data analysis, providing valuable insights into transaction patterns, outliers, and key features influencing fraud detection.
        </p>
        <p>
        Python Prediction Libraries
Incorporated diverse Python prediction libraries such as Scikit-learn and XGBoost for model evaluation, fine-tuning, and prediction accuracy.
        </p>
      </>
    ),
  },
];
