import { Heading } from "@chakra-ui/react";
import styles from "./styles.module.scss";
import ImageGithub from "../../assets/github.png";
import ImageLinkedin from "../../assets/linkedin.png";
export default function Header() {
  const github = ImageGithub;
  const linkedin = ImageLinkedin;

  return (
    <header className={styles.header}>
      <Heading className={styles.h1}>Redux Learning</Heading>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/denner-august"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/denner-bernardes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
