"use client"

import { useEffect } from "react"

export function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe all elements with scroll-animate class
    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
