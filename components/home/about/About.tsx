import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText}`}>
              <span>Hi</span> there! My name is Dhawal Bisht, and I&apos;m a Computer Science student with a passion for creating and designing websites. Passionate tech enthusiast with a knack for staying ahead in the ever-evolving tech landscape. Proven ability to leverage emerging technologies and contribute hands-on expertise. Eager to join innovative projects, driven by a commitment to continuous learning and impactful solutions.
            </p>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
