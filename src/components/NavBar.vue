<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-poppins dark"
    :class="scrolled ? 'py-3 bg-brand-darker/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-5 bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
    
      <a href="#home" @click.prevent="scrollTo('#home')" class="flex items-center gap-3 group">
        <div class="relative">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
            <img
              src="/images/tnclogo.png"
              alt="TNC Logo"
              class="w-10 h-10 object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_8px_rgba(255,107,53,0.6)] transition-all duration-300"
            />
          </div>
          <div class="absolute -inset-1 rounded-xl bg-brand-orange/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="hidden sm:block">
          <p class="text-brand-cream font-semibold text-sm leading-none">Eric M. Redulfin</p>
          <p class="text-brand-orange/70 text-xs font-medium mt-0.5">CEO, TNC Group</p>
        </div>
      </a>

    
      <div class="hidden lg:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="'#' + link.id"
          @click.prevent="scrollTo('#' + link.id)"
          class="relative text-brand-cream/70 text-sm font-medium hover:text-brand-cream transition-colors duration-300 group"
        >
          {{ link.label }}
          <span class="absolute -bottom-1 left-0 h-px w-0 bg-brand-orange group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

     
      <div class="lg:hidden flex items-center gap-3">
        <button
          @click="menuOpen = !menuOpen"
          class="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span class="block w-6 h-0.5 bg-brand-cream transition-all duration-300" :class="menuOpen ? 'rotate-45 translate-y-2' : ''"></span>
          <span class="block w-6 h-0.5 bg-brand-cream transition-all duration-300" :class="menuOpen ? 'opacity-0' : ''"></span>
          <span class="block w-6 h-0.5 bg-brand-cream transition-all duration-300" :class="menuOpen ? '-rotate-45 -translate-y-2' : ''"></span>
        </button>
      </div>
    </div>

   
    <Transition name="mobile-menu">
      <div
        v-if="menuOpen"
        class="lg:hidden absolute top-full left-0 right-0 bg-brand-darker/95 backdrop-blur-xl border-b border-white/5"
      >
        <div class="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="'#' + link.id"
            @click.prevent="mobileNav(link.id)"
            class="text-brand-cream/80 font-medium py-2 border-b border-white/5 hover:text-brand-orange transition-colors"
          >
            {{ link.label }}
          </a>
          <a href="#contact" @click.prevent="mobileNav('contact')" class="btn-primary text-center mt-2">
            Contact Me
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const menuOpen = ref(false)

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'community', label: 'Community' },
  { id: 'news', label: 'Brands' },
  { id: 'companies', label: 'Companies' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
  menuOpen.value = false
}

function mobileNav(id) {
  scrollTo('#' + id)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Force dark mode on
  document.documentElement.classList.add('dark')
  document.documentElement.classList.remove('light')
})

onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>