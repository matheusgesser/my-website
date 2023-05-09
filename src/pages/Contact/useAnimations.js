import { gsap, ScrollTrigger } from 'gsap/all'
import { useEffect } from 'react'

export function useAnimations() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger)
      let contactAnim = gsap.timeline({
        scrollTrigger: {
          horizontal: true,
          trigger: '#contact',
          start: 'left center',
          toggleActions: 'play reset play reset',
        },
      })
      contactAnim.from('', {
        x: -200,
        opacity: 0,
        duration: 0.3
      })
    })
    return () => ctx.revert()
  }, [])
}
