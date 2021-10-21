import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react'
import throttle from 'lodash.throttle'

export default function useFrameScroll(frames: number, scrollParent: MutableRefObject<HTMLElement>, delayMs: number) {
  const [frame, setFrame] = useState<number | null>(null)
  const lastScrollTop = useRef(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledSetFrame = useCallback(
    throttle((frame: number) => setFrame(frame), delayMs, {leading: true}),
    [delayMs]
  )

  const handleScroll = useCallback(
    (ev: Event) => {
      const isScrollingUp = window.scrollY < lastScrollTop.current
      lastScrollTop.current = window.scrollY

      if (scrollParent.current) {
        const {top, bottom, height} = scrollParent.current.getBoundingClientRect()

        if (isScrollingUp ? bottom - height >= 10 && frame > 0 : top <= 10 && frame < frames - 1) {
          ev.preventDefault()
          ev.stopPropagation()

          throttledSetFrame(frame + (isScrollingUp ? -1 : 1))
        }
      }
    },
    [frame, frames, scrollParent, throttledSetFrame]
  )

  useEffect(() => {
    if (frame !== null) {
      document.body.classList.add('overflow-hidden')

      const timeoutId = setTimeout(() => {
        document.body.classList.remove('overflow-hidden')
      }, delayMs)

      return () => {
        clearTimeout(timeoutId)
      }
    }
  }, [frame, delayMs])

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, {passive: false})
    window.addEventListener('touchmove', handleScroll, {passive: false})

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }
  }, [handleScroll])

  return frame
}
