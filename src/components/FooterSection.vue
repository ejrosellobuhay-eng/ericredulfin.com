<template>
  <footer class="relative pt-20 pb-8 overflow-hidden border-t border-white/5">
  
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6 relative">
   
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
   
        <div class="lg:col-span-1 space-y-5">
          <div class="flex items-center gap-3">
            <img
              src="/images/tnclogo.png"
              alt="TNC Group of Companies"
              class="w-10 h-10 object-contain"
            />
            <div>
              <p class="text-brand-cream font-semibold text-sm">Eric M. Redulfin</p>
              <p class="text-brand-orange/70 text-xs">CEO, TNC Group</p>
            </div>
          </div>
          <p class="text-brand-cream/40 text-sm leading-relaxed">
           His story embodies the true essence of being self-made—achieving success through one's own efforts. The journey of becoming a pillar of esports and 
           gaming in the Philippines is a prime example of this.
          </p>
         
          <div class="flex gap-3">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center hover:bg-brand-orange/20 hover:scale-110 transition-all duration-300 border border-white/8 hover:border-brand-orange/40"
              :aria-label="social.name"
            >
              <svg class="w-4 h-4 text-brand-cream/60 hover:text-brand-orange" fill="currentColor" viewBox="0 0 24 24" v-html="social.icon"></svg>
            </a>
          </div>
        </div>

    
        <div class="space-y-4">
          <p class="text-brand-cream font-semibold text-sm tracking-wide">Quick Links</p>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.label">
              <a
                :href="'#' + link.id"
                @click.prevent="scrollTo('#' + link.id)"
                class="text-brand-cream/40 text-sm hover:text-brand-orange transition-colors duration-300 flex items-center gap-2 group"
              >
                <span class="w-0 h-px bg-brand-orange group-hover:w-4 transition-all duration-300"></span>
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

      
        <div class="space-y-4">
          <p class="text-brand-cream font-semibold text-sm tracking-wide">TNC Companies</p>
          <ul class="space-y-3">
            <li v-for="company in tncLinks" :key="company.name">
              <a
                :href="company.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-brand-cream/40 text-sm hover:text-brand-orange transition-colors duration-300 flex items-center gap-2 group"
              >
                <span class="w-0 h-px bg-brand-orange group-hover:w-4 transition-all duration-300"></span>
                {{ company.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <p class="text-brand-cream font-semibold text-sm tracking-wide">Contact</p>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <svg class="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <p class="text-brand-cream/40 text-xs leading-relaxed">477 E Rodriguez Sr. Ave, Quezon City, 1111 Metro Manila</p>
            </div>
            <div class="flex items-center gap-3">
              <svg class="w-4 h-4 text-brand-orange flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a href="mailto:ceo@tncgroup.com" class="text-brand-cream/40 text-xs hover:text-brand-orange transition-colors">eric@tnc.com.ph</a>
            </div>
          </div>

         
          <div class="mt-6">
            <p class="text-brand-cream/50 text-xs mb-3">Stay updated with TNC news</p>
            <div class="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                class="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-brand-cream placeholder-brand-cream/20 focus:outline-none focus:border-brand-orange/50 transition-colors"
              >
              <button class="bg-brand-orange text-white text-xs px-3 py-2 rounded-xl hover:bg-orange-500 transition-colors font-medium">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <div class="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

      
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-brand-cream/30 text-xs">© 2026 All Rights Reserved. Eric M. Redulfin – TNC Group of Companies</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'Facebook', url: 'https://www.facebook.com/ericmredulfin', icon: '<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>' },
  { name: 'YouTube', url: 'https://www.youtube.com/@EricMRedulfin', icon: '<path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>' },
  { name: 'Instagram', url: 'https://www.instagram.com/eric_tncgm/', icon: '<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/eric-redulfin-0863995b/', icon: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>' },
]

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Eric' },
  { id: 'companies', label: 'Our Companies' },
  { id: 'contact', label: 'Contact' },
  { id: 'news', label: 'Brands' },
]

const tncLinks = [
  { name: 'TNC Cybercafe',               url: 'https://www.facebook.com/TNCCyberCafe/' },
  { name: 'TNC Events',                  url: 'https://www.facebook.com/TNCEsports/' },
  { name: 'TNC PC Warehouse',            url: 'https://tncpcwarehouse.com/' },
  { name: 'TNC Pro Team',                url: 'https://www.facebook.com/TNCProTeamML/' },
  { name: 'TNC Study Hub',               url: 'https://www.facebook.com/tncstudyhub/' },
  { name: 'TNC Training Center',         url: 'https://tnc.com.ph/' },
  { name: 'TNC Production',              url: 'https://www.facebook.com/tncproductionofficialpage' },
  { name: 'BigFour Global Technologies', url: 'https://bigfourglobal.com' }, 
  { name: 'TNC Digital Marketing',       url: 'https://tnc.com.ph/' },
   { name: 'TNC Properties',             url: 'https://tncproperties.com.ph/' },
]

function scrollTo(selector) {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>