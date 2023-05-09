import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let projectsAnim = gsap.timeline({
        scrollTrigger: {
          horizontal: true,
          trigger: '#projects',
          start: 'left center',
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
