import { Home, About, Projects, Contact } from './pages'
import { Things } from './components'
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from 'react'


export default function App() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.from('#about', {
        scrollTrigger: {
          horizontal: true,
          trigger: '#about',
          start: 'left center',
          toggleActions: 'play reset play reset',
        },
        y: -100,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
  

  return (
    <>
      <Things />
      <div className="pages">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  )
}
