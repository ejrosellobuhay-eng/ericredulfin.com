<template>
  <div class="bg-brand-dark min-h-screen font-poppins">
    <NavBar />
    <HeroSection />
    <VideoSection />
    <DivisionsSection />
    <CompaniesSection />
    <AboutSection />
    <MasterySection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import VideoSection from '../components/VideoSection.vue'
import DivisionsSection from '../components/DivisionsSection.vue'
import CompaniesSection from '../components/CompaniesSection.vue'
import AboutSection from '../components/AboutSection.vue'
import MasterySection from '../components/MasterySection.vue'
import ContactSection from '../components/ContactSection.vue'
import FooterSection from '../components/FooterSection.vue'

import { useScrollReveal } from '../composables/useScrollReveal.js'

useScrollReveal()
</script>
