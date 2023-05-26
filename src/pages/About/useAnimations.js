import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let aboutAnim = gsap.timeline({
        scrollTrigger: {
          trigger: '#about',
          start: 'top center',
          end: 'bottom center',
          toggleActions: 'play pause play pause',
        },
      })
      aboutAnim.from('', {
        x: -200,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
}
