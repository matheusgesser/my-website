import './styles.scss'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { AiFillHome, AiFillQuestionCircle, AiFillCode, AiFillMessage } from 'react-icons/ai'
import USFlag from '../../assets/flags/us.svg'
import BRFlag from '../../assets/flags/br.svg'

export function Things({ theme, toggleTheme, lang, toggleLang }) {
  
  function handleNav(event) {
    document.querySelectorAll('.active').forEach(el => {
      el.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  return (
    <>
      <aside className={`top ${theme}`}>
        <a href='#home'>
          <strong>MG {theme} {lang}</strong>
        </a>
        <button className='theme-switcher' onClick={toggleTheme}>
          {theme == 'light' ?
          <MdDarkMode /> :
          <MdLightMode />}
        </button>
        <button className='lang-switcher' onClick={toggleLang}>
          {lang == 'br' ?
          <img src={USFlag} alt='United States Flag' /> :
          <img src={BRFlag} alt='Brazil Flag' />}
        </button>
      </aside>

      <aside className={`socials ${theme}`}>
        <a href='https://github.com/matheusgesser' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/matheusgesser/' target='_blank' rel='noreferrer'><FaLinkedin /></a>
        <a href='mailto:matheusmvg@hotmail.com' target='_blank' rel='noreferrer'><GrMail /></a>
        <div className='line' />
      </aside>

      <aside className={`navigation ${theme}`}>
        <a href='#home' onClick={handleNav}><AiFillHome className='active' /></a>
        <a href='#about' onClick={handleNav}><AiFillQuestionCircle /></a>
        <a href='#projects' onClick={handleNav}><AiFillCode /></a>
        <a href='#contact' onClick={handleNav}><AiFillMessage /></a>
      </aside>
    </>
  )
}