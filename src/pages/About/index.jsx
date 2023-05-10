import './styles.scss'
// import { useAnimations } from './useAnimations'
import ProfilePic from '../../assets/profile.jpg'

import ReactLogo from '../../assets/skills/react.jpg'
import JavaScriptLogo from '../../assets/skills/javascript.jpg'
import TypeScriptLogo from '../../assets/skills/typescript.jpg'
import GitLogo from '../../assets/skills/git.jpg'
import HTML5Logo from '../../assets/skills/html5.jpg'
import CSS3Logo from '../../assets/skills/css3.jpg'
import SassLogo from '../../assets/skills/sass.jpg'
import StyledComponentsLogo from '../../assets/skills/styled-components.jpg'


export function About() {
  // useAnimations()

  return (
    <main id='about'>
      <section className="profile">
          <img src={ProfilePic} alt="Matheus' front picture" />
        <p><span>❝</span>Graduating in Systems Analysis and Development, with a keen eye for problem detection and solution finding, endowed with a great ability to learn, skill to adjust to changes, curious spirit and always seeking growth and development in the work environment<span>❞</span></p>
      </section>
      <section className="content">
        <h3>Skills</h3>
        <section className="skills">
          <img src={ReactLogo} alt="React logo" />
          <img src={JavaScriptLogo} alt="React logo" />
          <img src={TypeScriptLogo} alt="React logo" />
          <img src={GitLogo} alt="React logo" />
          <img src={HTML5Logo} alt="React logo" />
          <img src={CSS3Logo} alt="React logo" />
          <img src={SassLogo} alt="React logo" />
          <img src={StyledComponentsLogo} alt="React logo" />
        </section>
      </section>
    </main>
  )
}