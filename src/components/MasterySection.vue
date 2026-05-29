<template>
  <section class="py-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    <div class="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
     
        <div class="space-y-8 reveal-left">
          <div>
            <div class="section-tag w-fit">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              His Mastery
            </div>
            <h2 class="text-4xl sm:text-5xl font-bold mt-4 text-brand-cream">
              Areas of <span class="text-gradient">Excellence</span>
            </h2>
            <p class="text-brand-cream/50 mt-4 leading-relaxed">
            The growth of his company has been remarkable. He expanded into various fields in IT including hardware, e–sports, and franchising. He multiplied his wealth in the past years and forged strategic partnerships with industry leaders.
            </p>
          </div>

        
          <div class="space-y-7" ref="skillsContainer">
            <div
              v-for="(skill, index) in skills"
              :key="skill.name"
              class="space-y-3"
            >
              <div class="flex items-center justify-between">
                <span class="text-brand-cream/80 font-medium text-sm">{{ skill.name }}</span>
                <span class="text-brand-orange font-bold text-sm">{{ skill.percent }}%</span>
              </div>

              <!-- Progress Bar -->
              <div class="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  class="h-full rounded-full bg-gradient-to-r from-brand-orange to-orange-400 transition-all duration-1000 ease-out"
                  :style="{ width: skillsVisible ? skill.percent + '%' : '0%', transitionDelay: (index * 0.15) + 's' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

       
        <div class="reveal-right">
          <div class="rounded-3xl overflow-hidden orange-glow aspect-square">
            <img
              src="/images/eric-redulfin.jpg"
              alt="Eric M. Redulfin"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const skillsContainer = ref(null)
const skillsVisible = ref(false)

const skills = [
  { name: 'Innovation', percent: 98 },
  { name: 'Business Strategy', percent: 85 },
  { name: 'Financial Management', percent: 95 },
  { name: 'Strategic Planning', percent: 91 },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        skillsVisible.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )
  if (skillsContainer.value) observer.observe(skillsContainer.value)
})
</script>