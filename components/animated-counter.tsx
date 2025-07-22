"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      let startTime: number
      const startCount = 0

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)

        setCount(Math.floor(startCount + (end - startCount) * percentage))

        if (percentage < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className="font-bold">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}
