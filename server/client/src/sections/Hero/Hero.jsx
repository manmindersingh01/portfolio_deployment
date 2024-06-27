import styles from './HeroStyles.module.css';
import heroImg from '../../assets/slate.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <div className=' border-4 border-violet-500 rounded-lg my-9'>
      <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
          <div className=' border-4 border-violet-400 rounded-full'>
            <img
              src={heroImg}
              //className={styles.hero}
              className=' h-96  rounded-full'

              alt="Profile picture of manminder singh"
            />
          </div>
          <img
            className={styles.colorMode}
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
          />
        </div>
        <div className={styles.info}>
          <h1 className=' text-violet-500 text-xl'>
            Manminder
            <br />
            Singh
          </h1>
          <h2>fullStack web-developer</h2>
          <span>
            <a href="https://x.com/manminders1ngh" target="_blank">
              <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/manmindersingh01" target="_blank">
              <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/manminder-singh-596447204/" target="_blank">
              <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
          </span>
          <p className={styles.description}>
            With a passion for developing modern web apps.
          </p>
          <a href={CV} download>
            <button className="hover bg-violet-500">Resume</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
