<template>
  <div>
  
    <section id="community" class="py-24 relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>

      <div class="max-w-5xl mx-auto px-6">
       
        <div class="text-center mb-16 reveal">
          <div class="section-tag mx-auto w-fit">
            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            </svg>
            Featured Video
          </div>
          <h2 class="text-4xl sm:text-5xl font-bold mt-4 text-brand-cream">
            Build an Empire: <span class="text-gradient">A Technician's Story</span>
          </h2>
          <p class="text-brand-cream/50 mt-4 max-w-xl mx-auto leading-relaxed">
            "A Journey of Innovation, Leadership, and Legacy in the World of Successful Franchising and Business Growth"
          </p>
        </div>

        <!-- Video Container -->
        <div class="reveal" style="transition-delay: 0.2s">
          <div class="relative group">
            <div class="absolute -inset-4 bg-gradient-to-r from-brand-orange/20 via-transparent to-brand-orange/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-brand-darker group-hover:border-brand-orange/30 transition-colors duration-500">
              <div class="absolute top-4 left-4 z-10 w-6 h-6 border-t-2 border-l-2 border-brand-orange/60 rounded-tl-lg pointer-events-none"></div>
              <div class="absolute top-4 right-4 z-10 w-6 h-6 border-t-2 border-r-2 border-brand-orange/60 rounded-tr-lg pointer-events-none"></div>
              <div class="absolute bottom-4 left-4 z-10 w-6 h-6 border-b-2 border-l-2 border-brand-orange/60 rounded-bl-lg pointer-events-none"></div>
              <div class="absolute bottom-4 right-4 z-10 w-6 h-6 border-b-2 border-r-2 border-brand-orange/60 rounded-br-lg pointer-events-none"></div>
              <div class="aspect-video">
                <iframe
                  class="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/C6GQ25YTcaI?rel=0&modestbranding=1&color=white"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 px-2 gap-4">
            <div>
              <p class="text-brand-cream/80 font-semibold">TNC Group – Eric M. Redulfin's Story</p>
              <p class="text-brand-cream/40 text-sm mt-1">Eric M. Redulfin shares his life story, from humble beginnings to building a business empire, inspiring others to pursue their dreams.</p>
            </div>
            <a href="https://www.youtube.com/@EricMRedulfin" target="_blank" rel="noopener noreferrer"
              class="flex items-center gap-2 text-brand-orange text-sm font-medium hover:gap-3 transition-all duration-300 flex-shrink-0">
              <span>View Channel</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>
        </div>

      
        <div class="mt-24 reveal" style="transition-delay: 0.3s">
          <div class="text-center mb-12">
            <p class="text-brand-orange uppercase tracking-[0.35em] text-xs font-semibold mb-3">His Expertise</p>
            <h3 class="text-3xl sm:text-4xl font-bold text-brand-cream max-w-3xl mx-auto">
              The Amazing Journey of <span class="text-gradient">His Growth!</span>
            </h3>
          </div>

          
          <div class="cf-stage" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
            <div
              v-for="(slide, i) in slides"
              :key="i"
              class="cf-slide"
              :class="{ 'is-active': i === active }"
              :style="getSlideStyle(i)"
              @click="i === active ? openLightbox(i) : goTo(i)"
            >
              <img :src="slide.src" :alt="slide.title" class="cf-img" />
              <!-- zoom hint on active slide -->
              <div v-if="i === active" class="cf-zoom-hint">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </div>
            </div>

            <button class="cf-arrow cf-arrow-left" @click="prev" aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button class="cf-arrow cf-arrow-right" @click="next" aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>

     
          <div class="cf-dots">
            <button
              v-for="(_, i) in slides"
              :key="i"
              class="cf-dot"
              :class="{ 'cf-dot--active': i === active }"
              @click="goTo(i)"
              :aria-label="`Go to slide ${i + 1}`"
            />
          </div>
        </div>

       
        <Teleport to="body">
          <Transition name="lb">
            <div v-if="lightbox !== null" class="lb-backdrop" @click.self="closeLightbox" @keydown.esc="closeLightbox" tabindex="-1">
              <button class="lb-close" @click="closeLightbox" aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
              <button class="lb-nav lb-nav-left" @click="lbPrev" aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="15 18 9 12 15 6"/>
                </svg>
              </button>
              <div class="lb-img-wrap">
                <img :src="slides[lightbox].src" :alt="slides[lightbox].title" class="lb-img" />
              </div>
              <button class="lb-nav lb-nav-right" @click="lbNext" aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="9 18 15 12 9 6"/>
                </svg>
              </button>
              <div class="lb-counter">{{ lightbox + 1 }} / {{ slides.length }}</div>
            </div>
          </Transition>
        </Teleport>

    
        <div class="mt-20 reveal" style="transition-delay: 0.4s">
          <div class="text-center mb-10">
            <p class="text-brand-orange uppercase tracking-[0.35em] text-xs font-semibold mb-3">Brands we work with</p>
            <h3 class="text-3xl sm:text-4xl font-bold text-brand-cream max-w-3xl mx-auto">
              Trusted by industry leaders and ambitious visionaries.
            </h3>
          </div>

          <div class="infinite-slider-container mb-6" @mouseenter="pauseSlider1" @mouseleave="resumeSlider1">
            <div class="infinite-slider-track slider-track-1">
              <div class="slider-content">
                <div v-for="(logo, index) in brandLogos" :key="`s1-${index}`" class="brand-card">
                  <img :src="logo.src" :alt="logo.name" class="logo-image" />
                </div>
                <div v-for="(logo, index) in brandLogos" :key="`s1d-${index}`" class="brand-card">
                  <img :src="logo.src" :alt="logo.name" class="logo-image" />
                </div>
              </div>
            </div>
          </div>

          <div class="infinite-slider-container" @mouseenter="pauseSlider2" @mouseleave="resumeSlider2">
            <div class="infinite-slider-track slider-track-2">
              <div class="slider-content-reverse">
                <div v-for="(logo, index) in brandLogos" :key="`s2-${index}`" class="brand-card">
                  <img :src="logo.src" :alt="logo.name" class="logo-image" />
                </div>
                <div v-for="(logo, index) in brandLogos" :key="`s2d-${index}`" class="brand-card">
                  <img :src="logo.src" :alt="logo.name" class="logo-image" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'


const lightbox = ref(null)

const openLightbox = (i) => {
  lightbox.value = i
  clearInterval(autoTimer)
  document.body.style.overflow = 'hidden'
}
const closeLightbox = () => {
  lightbox.value = null
  document.body.style.overflow = ''
  startAutoplay()
}
const lbNext = () => { lightbox.value = (lightbox.value + 1) % slides.length }
const lbPrev = () => { lightbox.value = (lightbox.value - 1 + slides.length) % slides.length }

const onKeydown = (e) => {
  if (lightbox.value === null) return
  if (e.key === 'Escape')    closeLightbox()
  if (e.key === 'ArrowRight') lbNext()
  if (e.key === 'ArrowLeft')  lbPrev()
}


const slides = [
  { src: '/images/E4.jpg'},
  { src: '/images/ee.jpg'},
  { src: '/images/E6.jpg'},
  { src: '/images/E7.jpg'},
  { src: '/images/E8.jpg'},
  { src: '/images/r2.jpg'},
   { src: '/images/r1.jpg'},
     { src: '/images/r3.jpg'},
      { src: '/images/r7.webp'},
       { src: '/images/3.jpg'},
        { src: '/images/r5.webp'},
         { src: '/images/r4.jpg'},
          { src: '/images/r6.jpg'},

]


const active = ref(0)
let autoTimer = null

const OFFSET  = 300   
const ROT_Y   = 48
const SIDE_SC = 0.78
const FADE_SC = 0.62
const MAX_VIS = 2

const getSlideStyle = (i) => {
  const total = slides.length
  let d = i - active.value
  if (d >  total / 2) d -= total
  if (d < -total / 2) d += total

  const abs  = Math.abs(d)
  const sign = d < 0 ? -1 : 1
  const mob  = typeof window !== 'undefined' && window.innerWidth < 640

  if (abs > MAX_VIS) {
    return {
      opacity: 0, pointerEvents: 'none', zIndex: 0,
      transform: `translateX(${sign * (mob ? 170 : OFFSET) * MAX_VIS}px) rotateY(${sign * ROT_Y}deg) scale(${FADE_SC - 0.1})`
    }
  }

  return {
    transform:    `translateX(${d * (mob ? 170 : OFFSET)}px) rotateY(${d === 0 ? 0 : sign * ROT_Y}deg) scale(${d === 0 ? 1 : abs === 1 ? SIDE_SC : FADE_SC})`,
    opacity:      d === 0 ? 1 : abs === 1 ? 0.75 : 0.45,
    zIndex:       10 - abs,
    pointerEvents: 'auto',
  }
}

const goTo = (i) => { active.value = ((i % slides.length) + slides.length) % slides.length; resetAutoplay() }
const next = () => goTo(active.value + 1)
const prev = () => goTo(active.value - 1)

const startAutoplay = () => { autoTimer = setInterval(next, 4000) }
const resetAutoplay  = () => { clearInterval(autoTimer); startAutoplay() }

let touchX = 0
const onTouchStart = (e) => { touchX = e.touches[0].clientX }
const onTouchEnd   = (e) => { const diff = touchX - e.changedTouches[0].clientX; if (Math.abs(diff) > 40) diff > 0 ? next() : prev() }

onMounted(() => { startAutoplay(); window.addEventListener('keydown', onKeydown) })
onBeforeUnmount(() => { clearInterval(autoTimer); window.removeEventListener('keydown', onKeydown) })


const brandLogos = [
  '/images/tnclogo.png',  '/images/l1.png', '/images/l2.png','/images/l3.png',  '/images/l4.png',
  '/images/l5.png',   '/images/l6.png',  '/images/l7.png',  '/images/l8.png',  '/images/l9.png',
  '/images/l10.png',  '/images/l11.png', '/images/l13.png',  '/images/l14.png',
  '/images/l15.png',  '/images/l16.png', '/images/l18.png', '/images/l19.png', '/images/l20.png',
  '/images/l21.png',  '/images/l22.png', '/images/l23.png', '/images/l24.png', '/images/l26.png',
  '/images/l27.png',  '/images/l28.png', '/images/l29.png', '/images/l30.png', '/images/l31.png', '/images/l32.png',
].map((src, i) => ({ name: `Partner ${i + 1}`, src }))

const pauseSlider1  = () => { const t = document.querySelector('.slider-track-1 .slider-content');         if (t) t.style.animationPlayState = 'paused'  }
const resumeSlider1 = () => { const t = document.querySelector('.slider-track-1 .slider-content');         if (t) t.style.animationPlayState = 'running' }
const pauseSlider2  = () => { const t = document.querySelector('.slider-track-2 .slider-content-reverse'); if (t) t.style.animationPlayState = 'paused'  }
const resumeSlider2 = () => { const t = document.querySelector('.slider-track-2 .slider-content-reverse'); if (t) t.style.animationPlayState = 'running' }
</script>

<style scoped>

.cf-stage {
  position: relative;
  width: 100%;
  height: 520px;           
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1100px;
  overflow: visible;
}

.cf-slide {
  position: absolute;
  width: 500px;           
  height: 420px;           
  border-radius: 18px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.58s cubic-bezier(0.25, 0.46, 0.45, 0.94),
 opacity   0.58s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform-style: preserve-3d;
  will-change: transform, opacity;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.55);
}

.cf-slide.is-active {
  box-shadow:
    0 0 0 2px rgba(234, 88, 12, 0.65),
    0 30px 80px rgba(0, 0, 0, 0.7);
}

.cf-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  transition: transform 0.58s ease;
}
.cf-slide.is-active .cf-img { transform: scale(1.04); }

.cf-arrow {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  z-index: 30;
  width: 48px; height: 48px;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.8);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
.cf-arrow svg { width: 20px; height: 20px; }
.cf-arrow:hover { background: rgba(234,88,12,0.22); border-color: rgba(234,88,12,0.55); color: #ea580c; }
.cf-arrow-left  { left: 0; }
.cf-arrow-right { right: 0; }

.cf-dots { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 28px; }
.cf-dot {
  width: 7px; height: 7px; border-radius: 9999px;
  background: rgba(255,255,255,0.18); border: none; cursor: pointer;
  transition: width 0.3s ease, background 0.3s ease;
}
.cf-dot--active { width: 26px; background: #ea580c; }

@media (max-width: 768px) {
  .cf-stage  { height: 380px; }
  .cf-slide  { width: 360px;  height: 300px; }
}
@media (max-width: 480px) {
  .cf-stage  { height: 280px; }
  .cf-slide  { width: 260px;  height: 210px; border-radius: 12px; }
  .cf-arrow-left  { left: -4px; }
  .cf-arrow-right { right: -4px; }
}


.cf-zoom-hint {
  position: absolute;
  top: 12px; right: 12px;
  width: 36px; height: 36px;
  border-radius: 50%;
  background: rgba(0,0,0,0.45);
  border: 1px solid rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,0.85);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  backdrop-filter: blur(6px);
}
.cf-zoom-hint svg { width: 18px; height: 18px; }
.cf-slide.is-active:hover .cf-zoom-hint { opacity: 1; }


.lb-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.lb-img-wrap {
  max-width: 90vw;
  max-height: 88vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(234,88,12,0.35), 0 40px 100px rgba(0,0,0,0.8);
}

.lb-img {
  max-width: 90vw;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  border-radius: 16px;
}

.lb-close {
  position: fixed;
  top: 20px; right: 24px;
  z-index: 10000;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.18);
  color: rgba(255,255,255,0.85);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.lb-close svg { width: 20px; height: 20px; }
.lb-close:hover { background: rgba(234,88,12,0.3); color: #fff; border-color: rgba(234,88,12,0.6); }

.lb-nav {
  position: fixed;
  top: 50%; transform: translateY(-50%);
  z-index: 10000;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.14);
  color: rgba(255,255,255,0.8);
  display: flex; align-items: center; justify-content: center;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s, color 0.25s;
  backdrop-filter: blur(10px);
}
.lb-nav svg { width: 22px; height: 22px; }
.lb-nav:hover { background: rgba(234,88,12,0.22); border-color: rgba(234,88,12,0.55); color: #ea580c; }
.lb-nav-left  { left: 20px; }
.lb-nav-right { right: 20px; }

.lb-counter {
  position: fixed;
  bottom: 24px; left: 50%; transform: translateX(-50%);
  font-size: 0.8rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.1em;
  pointer-events: none;
}


.lb-enter-active, .lb-leave-active { transition: opacity 0.3s ease; }
.lb-enter-from, .lb-leave-to { opacity: 0; }
.lb-enter-active .lb-img-wrap, .lb-leave-active .lb-img-wrap { transition: transform 0.3s ease; }
.lb-enter-from .lb-img-wrap, .lb-leave-to .lb-img-wrap { transform: scale(0.92); }
.infinite-slider-container {
  width: 100%; position: relative; overflow: hidden;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}
.infinite-slider-track { width: 100%; overflow: visible; }

.slider-track-1 .slider-content,
.slider-track-2 .slider-content-reverse {
  display: flex; gap: 3rem; width: fit-content;
  animation-duration: 60s; animation-timing-function: linear;
  animation-iteration-count: infinite; animation-fill-mode: forwards;
}
.slider-track-1 .slider-content      { animation-name: slideForward; }
.slider-track-2 .slider-content-reverse { animation-name: slideReverse; }

@keyframes slideForward { 0% { transform: translateX(0); }    100% { transform: translateX(-50%); } }
@keyframes slideReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); }    }

.brand-card { flex: 0 0 auto; display: flex; align-items: center; justify-content: center; background: transparent; border: none; transition: transform 0.3s ease; }
.brand-card:hover { transform: translateY(-2px); }
.logo-image { max-width: 280px; max-height: 100px; width: auto; height: auto; object-fit: contain; transition: transform 0.3s ease; }
.brand-card:hover .logo-image { transform: scale(1.05); }

@media (max-width: 1024px) { .logo-image { max-width: 240px; max-height: 85px; } .slider-track-1 .slider-content, .slider-track-2 .slider-content-reverse { gap: 2.5rem; animation-duration: 50s; } }
@media (max-width: 768px)  { .logo-image { max-width: 200px; max-height: 70px; } .slider-track-1 .slider-content, .slider-track-2 .slider-content-reverse { gap: 2rem;   animation-duration: 40s; } }
@media (max-width: 640px)  { .logo-image { max-width: 160px; max-height: 60px; } .slider-track-1 .slider-content, .slider-track-2 .slider-content-reverse { gap: 1.5rem; animation-duration: 30s; } }
</style>