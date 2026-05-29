<template>
  <section id="contact" class="py-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>

    <!-- Background  -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <div class="section-tag mx-auto w-fit">
          <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          Get In Touch
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mt-4 text-brand-cream">
          Let's <span class="text-gradient">Connect</span>
        </h2>
        <p class="text-brand-cream/50 mt-4 max-w-xl mx-auto">
          Ready to collaborate or explore partnership opportunities? Reach out and let's build something extraordinary together.
        </p>
      </div>

    
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        <!-- Location Card -->
        <div class="glass-card p-8 group hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-500 reveal" style="transition-delay: 0.1s">
          <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
            <svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
          </div>
          <h3 class="text-brand-cream font-semibold text-lg mb-2">Office Location</h3>
          <p class="text-brand-cream/50 text-sm leading-relaxed">
            477 E Rodriguez Sr. Ave,<br>
            Quezon City, 1111<br>
            Metro Manila, Philippines
          </p>
         
          <a
            href="https://www.google.com/maps/search/?api=1&query=477+E+Rodriguez+Sr+Ave+Quezon+City+1111+Metro+Manila+Philippines"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 flex items-center gap-2 text-brand-orange text-sm font-medium group-hover:gap-3 transition-all duration-300"
          >
            <span>Get Directions</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>

        <!-- Email Card -->
        <div class="glass-card p-8 group hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-500 reveal" style="transition-delay: 0.2s">
          <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
            <svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-brand-cream font-semibold text-lg mb-2">Email Address</h3>
          <p class="text-brand-cream/50 text-sm mb-1">For business inquiries:</p>
          <a href="mailto:eric@tnc.com.ph" class="text-brand-cream/80 hover:text-brand-orange transition-colors text-sm font-medium">
            eric@tnc.com.ph
          </a>
          <br>
          <a href="mailto:eric@tnc.com.ph" class="text-brand-cream/50 hover:text-brand-orange transition-colors text-xs mt-1 block">
            eric@tnc.com.ph
          </a>
        
        </div>

        <!-- Social Card -->
        <div class="glass-card p-8 group hover:border-brand-orange/40 hover:-translate-y-2 transition-all duration-500 reveal sm:col-span-2 lg:col-span-1" style="transition-delay: 0.3s">
          <div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors duration-300">
            <svg class="w-7 h-7 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
            </svg>
          </div>
          <h3 class="text-brand-cream font-semibold text-lg mb-4">Follow Along</h3>
          <div class="flex gap-3 flex-wrap">
            <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener"
              class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange/20 hover:scale-110 transition-all duration-300 border border-white/10 hover:border-brand-orange/40"
              :aria-label="social.name"
            >
              <svg class="w-5 h-5 text-brand-cream/70 hover:text-brand-orange" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
            </a>
          </div>
          <p class="text-brand-cream/40 text-xs mt-4">Stay connected for updates</p>
        </div>
      </div>

   
      <div class="reveal" style="transition-delay: 0.4s">
        <div class="relative group rounded-3xl overflow-hidden">
          <div class="absolute -inset-1 bg-gradient-to-r from-brand-orange/20 to-transparent rounded-3xl blur-md opacity-60"></div>
          <div class="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group-hover:border-brand-orange/30 transition-colors duration-500">
            <div class="h-96 sm:h-[480px]">
            
              <iframe
                width="100%"
                height="100%"
                frameborder="0"
                style="border:0"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3!2d121.0035!3d14.6194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b7031b5df667%3A0x4e3b16f58a1ede6b!2s477%20E%20Rodriguez%20Sr.%20Ave%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1"
                title="TNC Group of Companies Location"
              ></iframe>
            </div>
          </div>
        </div>
        <p class="text-center text-brand-cream/30 text-xs mt-4">477 E Rodriguez Sr. Ave, Quezon City, 1111 Metro Manila</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/ericmredulfin',
    icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@EricMRedulfin',
    icon: '<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/eric_tncgm/',
    icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/eric-redulfin-0863995b/',
    icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>'
  },
]
</script>