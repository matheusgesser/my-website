import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let projectsAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '#projects',
          start: 'top center',
          end: 'bottom top',
          toggleActions: 'play reset play reset',
        },
      })
      projectsAnim.from('', {
        x: -200,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
}
