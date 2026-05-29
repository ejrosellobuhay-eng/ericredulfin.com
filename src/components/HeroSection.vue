<template>
  <section id="home" class="relative min-h-screen flex flex-col overflow-hidden hero-bg">

    <div class="absolute inset-0 z-0 stripe-overlay pointer-events-none"></div>

    <div class="absolute inset-0 z-0">
      <div class="photo-right">
        <img
          src="/images/E1.png"
          alt="Eric M. Redulfin"
          class="photo-img"
        />
        <div class="photo-fade-left"></div>
        <div class="photo-fade-bottom"></div>
      </div>
      <div class="left-panel"></div>
      <div class="glow-tl"></div>
      <div class="glow-photo"></div>
    </div>

    <div class="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 pt-32 pb-4 w-full">

      <div class="eyebrow-tag reveal mb-7" style="transition-delay:0.05s">
        <span class="eyebrow-dot"></span>
        CEO & Visionary Leader
        <span class="eyebrow-dot"></span>
      </div>

      <div class="reveal" style="transition-delay:0.12s">
        <h1 class="hero-headline">
          <span class="block line-cream">ERIC M.</span>
          <span class="block line-orange">REDULFIN</span>
        </h1>
      </div>

      <div class="flex items-center gap-4 mt-6 reveal" style="transition-delay:0.18s">
        <div class="h-[3px] w-12 bg-brand-orange rounded-full flex-shrink-0"></div>
        <p class="text-brand-orange font-semibold text-sm tracking-widest uppercase">CEO, TNC Group of Companies</p>
      </div>

      <p class="text-brand-cream/55 text-base leading-relaxed max-w-md mt-6 reveal" style="transition-delay:0.22s">
        A man from humble beginnings who continues to uplift the status of esports and gaming in the country through his empire, TNC.
      </p>

      <div class="flex flex-wrap gap-4 mt-8 reveal" style="transition-delay:0.28s">
        <a href="#contact" @click.prevent="scrollTo('#contact')" class="btn-primary flex items-center gap-2">
          <span>Contact Me</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </a>
        <a href="#about" @click.prevent="scrollTo('#about')" class="btn-ghost">
          Learn More
        </a>
      </div>

    </div>

    <!-- Stats Bar -->
    <div class="relative z-10 w-full">
      <div class="max-w-7xl mx-auto px-6 pb-10">
        <div class="stats-bar" ref="statsBarRef">
          <div
            v-for="(stat, i) in heroStats"
            :key="stat.label"
            class="stat-item"
            :class="{
              'with-divider': i < heroStats.length - 1,
              'stat-visible': statsVisible
            }"
            :style="{ transitionDelay: statsVisible ? `${i * 0.12}s` : '0s' }"
          >
            <div class="stat-inner">
              <p class="stat-value">
                <span class="stat-number">{{ displayValues[i] }}</span><span class="stat-suffix">{{ stat.suffix }}</span>
              </p>
              <div class="stat-accent"></div>
              <p class="stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

const heroStats = [
  { numeric: 160, suffix: '+', label: 'Franchises'       },
  { numeric: 8,   suffix: '+', label: 'Companies'        },
  { numeric: 14,  suffix: '+', label: 'Award Wins'       },
  { numeric: 25,  suffix: '+', label: 'Years Experience' },
]

const statsBarRef  = ref(null)
const statsVisible = ref(false)
const displayValues = reactive(heroStats.map(() => 0))

// Ease-out expo for a snappy deceleration
function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function animateCount(index, target, duration = 1600, delay = 0) {
  setTimeout(() => {
    const start = performance.now()
    function step(now) {
      const elapsed  = now - start
      const progress = Math.min(elapsed / duration, 1)
      displayValues[index] = Math.round(easeOutExpo(progress) * target)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, delay)
}

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !statsVisible.value) {
        statsVisible.value = true
        heroStats.forEach((stat, i) => {
          // stagger both entrance slide-up and count-up
          animateCount(i, stat.numeric, 1600, i * 140)
        })
        observer.disconnect()
      }
    },
    { threshold: 0.25 }
  )
  if (statsBarRef.value) observer.observe(statsBarRef.value)
})

onUnmounted(() => observer?.disconnect())

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>

.hero-bg {
  background-color: #080401;
}

.stripe-overlay {
  background-image: repeating-linear-gradient(
    -45deg,
    transparent,
    transparent 18px,
    rgba(255, 110, 30, 0.018) 18px,
    rgba(255, 110, 30, 0.018) 19px
  );
  background-size: 26px 26px;
}

.photo-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 58%;
  height: 100%;
  overflow: hidden;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
}

.photo-fade-left {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #080401 0%, rgba(8,4,1,0.55) 30%, transparent 65%);
}

.photo-fade-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 35%;
  background: linear-gradient(to top, rgba(8,4,1,0.75) 0%, transparent 100%);
}

.left-panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 45%;
  height: 100%;
  background: linear-gradient(to right, #080401 70%, transparent 100%);
  pointer-events: none;
}

.glow-tl {
  position: absolute;
  top: 0;
  left: 0;
  width: 480px;
  height: 480px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,120,40,0.10) 0%, transparent 70%);
  transform: translate(-30%, -30%);
  pointer-events: none;
}

.glow-photo {
  position: absolute;
  top: 50%;
  left: 42%;
  width: 300px;
  height: 500px;
  background: radial-gradient(ellipse, rgba(255,100,20,0.07) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.eyebrow-tag {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(255, 120, 40, 0.85);
}

.eyebrow-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #ff7828;
  opacity: 0.7;
  flex-shrink: 0;
}

.hero-headline {
  font-size: clamp(3.8rem, 10vw, 8.5rem);
  font-weight: 900;
  line-height: 0.9;
  letter-spacing: -0.03em;
}

.line-cream {
  color: rgba(255, 248, 235, 0.96);
}

.line-orange {
  background: linear-gradient(135deg, #ff7828 0%, #ffb060 45%, #ff7828 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 4s linear infinite;
}

@keyframes shimmer {
  0%   { background-position: 0% center; }
  100% { background-position: 200% center; }
}


.stats-bar {
  display: flex;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  min-width: 120px;
  padding: 16px 24px 16px 0;

 
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity  0.55s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}


.stat-item.stat-visible {
  opacity: 1;
  transform: translateY(0);
}

.with-divider {
  border-right: 1px solid rgba(255, 100, 20, 0.18);
  padding-right: 24px;
  margin-right: 24px;
}

.stat-inner {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-value {
  font-size: 2.4rem;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -0.03em;
  color: #ff7828;

 
  transition: transform 0.15s ease;
}


.stat-number {
  display: inline-block;
  transition: color 0.08s ease;
}

.stat-item.stat-visible .stat-number {
  animation: tick-flash 1.6s ease-out forwards;
}

@keyframes tick-flash {
  0%   { color: #ffb060; }
  60%  { color: #ff7828; }
  100% { color: #ff7828; }
}

.stat-suffix {
  display: inline-block;
  /* suffix pops in after a beat */
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.stat-item.stat-visible .stat-suffix {
  animation: suffix-pop 0.35s ease forwards;
  animation-delay: 1.35s;
}

@keyframes suffix-pop {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.stat-accent {
  width: 28px;
  height: 3px;
  border-radius: 2px;
  background: linear-gradient(to right, #ff7828, #ffb060);
  transition: width 0.4s ease;

 
  clip-path: inset(0 100% 0 0);
}

.stat-item.stat-visible .stat-accent {
  animation: draw-line 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  animation-delay: 0.3s;
}

@keyframes draw-line {
  to { clip-path: inset(0 0% 0 0); }
}

.stat-item:hover .stat-accent {
  width: 48px;
}

.stat-label {
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255, 248, 235, 0.35);
  margin-top: 2px;
}
</style>