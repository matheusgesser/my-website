import './styles.scss'
import JSLogo from '../../assets/js.png'
import ReactLogo from '../../assets/react.png'
import SassLogo from '../../assets/sass.png'
import { useEffect } from 'react'
import { useAnimations } from './useAnimations'

export function Home() {
  useAnimations()

  useEffect(() => {
    window.addEventListener('mousemove', IconMove)
    return () => window.removeEventListener('mousemove', IconMove)
  })
  
  function IconMove(event) {
    let { clientX: posX, clientY: posY } = event;
    let icons = document.querySelectorAll('[data-speedx]')
    icons.forEach(icon => {
      if (icon.style.opacity < 1) return
      icon.style.transform = `translate(${posX*icon.dataset.speedx/window.innerWidth}px, ${posY*icon.dataset.speedy/window.innerHeight}px)`
    })
  }

  return (
    <main id='home' onMouseMove={IconMove}>
      <h1 data-speedx={8} data-speedy={5}>Matheus Gesser</h1>
      <h2 data-speedx={20} data-speedy={-10}>Front-end Developer</h2>
        <img src={JSLogo} id='js' data-speedx={-30} data-speedy={-50} alt="JavaScript Logo" />
        <img src={ReactLogo} id='react' data-speedx={60} data-speedy={-40} alt="React Logo" />
        <img src={SassLogo} id='sass' data-speedx={-50} data-speedy={60} alt="Sass Logo" />
    </main>
  )
}