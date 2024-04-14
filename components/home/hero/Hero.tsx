import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { OutlineButton } from "../../buttons/OutlineButton";
import ReactTypingEffect from 'react-typing-effect';
export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
            Hey, I&apos;m Dhawal<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            I&apos;m  <span><ReactTypingEffect
              text={["MERN Stack Developer.", "Ai/Ml enthusiast."]}
              speed={40}
              eraseSpeed={40}
              eraseDelay={900}
              typingDelay={300}
            /></span>
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
            Crafting meaningful websites that tell your story🎨
            <br />
            Let&apos;s connect!
          </p>
        </Reveal>
        <Reveal>
          <OutlineButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}
          >
            Contact me
          </OutlineButton>
        </Reveal>
      </div>
      <DotGrid />
    </section>
  );
};
