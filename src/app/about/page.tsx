import styles from './about.module.css';

export default function About() {
  return (
    <div className="container">
      <section className="section">
        <div className="glow" style={{ top: '30%', right: '10%' }} />
        
        <div className={styles.about}>
          <h1 className={styles.title}>About Me</h1>
          
          <div className={styles.content}>
            <p className={styles.description}>
              I'm a passionate software engineer with a keen eye for design and a
              love for creating beautiful, functional websites. With years of
              experience in web development, I specialize in building modern web
              applications using cutting-edge technologies.
            </p>

            <div className={styles.skillsSection}>
              <h2>Technical Skills</h2>
              <div className={styles.skillsGrid}>
                <div className={styles.skillCard}>
                  <h3>Frontend</h3>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>CSS3/SASS</li>
                  </ul>
                </div>

                <div className={styles.skillCard}>
                  <h3>Backend</h3>
                  <ul>
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div className={styles.skillCard}>
                  <h3>Tools</h3>
                  <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>VS Code</li>
                    <li>Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 