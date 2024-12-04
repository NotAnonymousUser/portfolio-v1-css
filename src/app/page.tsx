import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const projects = [
    {
      title: "Ticket System App",
      description: "A Ticket Web App for tracking, assigning, and resolving tasks or issues with status updates, priorities, and collaborative comments.",
      status: "Under Construction"
    },
    {
      title: "Tic Tac Toe",
      description: "A simple Tic Tac Toe game built using HTML, CSS, and JavaScript. It offers an engaging interface and smooth game functionality."
    },
    {
      title: "Simple Resume",
      description: "A Simple & Minimalist Animated Resume using HTML, CSS Javascript."
    }
  ];

  return (
    <div className="container">
      <section className="section">
        <div className="glow" style={{ top: "20%", left: "60%" }} />
        <div className="glow" style={{ top: "60%", left: "20%" }} />

        <div className={styles.hero}>
          <p className={styles.greeting}>Hello! I am Muhammad Mubeen Javaid</p>
          <h1 className={styles.title}>
            A Developer who
            <br />
            Judges a book by its{" "}
            <span style={{ color: "var(--accent)" }}>code</span>...
          </h1>

          <p className={styles.subtitle}>I&apos;m a Full Stack Developer.</p>

          <p className={styles.description}>
            A self-taught developer with a passion for creating beautiful,
            functional websites and applications that solve real-world problems.
          </p>

          <div className={styles.skills}>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>TypeScript</span>
            <span className={styles.skill}>Node.js</span>
            <span className={styles.skill}>CSS3</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className={styles.sectionTitle}>Work Experience</h2>
        <div className={styles.workGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.workCard}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              {project.status && (
                <span className={styles.status}>{project.status}</span>
              )}
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
