import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  let observer = null

  function init() {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px',
      }
    )

  
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el)
    })
  }

  onMounted(() => {
    
    setTimeout(init, 100)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { init }
}
