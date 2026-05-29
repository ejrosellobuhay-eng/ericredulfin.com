<template>
  <section id="news" class="py-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    <div class="absolute -left-40 top-1/2 w-80 h-80 bg-brand-orange/6 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      
     <!-- Header -->
<div class="text-center mb-20 reveal">
   <div class="section-tag w-fit px-4 py-2 rounded-full inline-flex items-center justify-center">
      Our Brands
   </div>

        <h2 class="text-4xl sm:text-5xl font-bold mt-4 text-brand-cream">
          The <span class="text-gradient">Companies</span>
        </h2>
        <p class="text-brand-cream/50 mt-4 max-w-xl mx-auto">
          Each brand in the TNC family represents a unique vision, serving communities with excellence and innovation.
        </p>
      </div>

      <!-- Companies List -->
      <div class="space-y-4 flex flex-col items-center">
        <a
          v-for="(company, index) in companies"
          :key="company.name"
          :href="company.link"
          target="_blank"
          rel="noopener noreferrer"
          class="glass-card rounded-2xl p-6 sm:p-8 group hover:border-brand-orange/40 transition-all duration-500 cursor-pointer reveal block max-w-4xl mx-auto"
          :style="{ transitionDelay: (index * 0.1) + 's' }"
        >
          <div class="flex flex-col items-center sm:flex-row sm:items-center gap-6 text-center sm:text-left">
           
            <div class="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden bg-brand-orange/8 group-hover:bg-brand-orange/15 transition-colors duration-300">
              <img 
                :src="company.image" 
                :alt="company.name"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>

            <!-- Info -->
            <div class="flex-1 min-w-0 flex flex-col items-center sm:items-start">
              <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 w-full">
                <div>
                  <span class="text-brand-orange text-xs font-semibold uppercase tracking-widest">{{ company.category }}</span>
                  <h3 class="text-brand-cream font-bold text-lg sm:text-xl mt-1 group-hover:text-brand-orange transition-colors duration-300">
                    {{ company.name }}
                  </h3>
                </div>
                <div class="flex items-center gap-2 text-brand-orange/0 group-hover:text-brand-orange/70 group-active:text-brand-orange/70 transition-all duration-300 text-sm font-medium">
                  <span>Learn More</span>
                  <svg class="w-4 h-4 translate-x-0 group-hover:translate-x-1 group-active:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>
              <p class="text-brand-cream/50 text-sm leading-relaxed mt-2 max-w-2xl mx-auto sm:mx-0">{{ company.desc }}</p>
            </div>
          </div>

          
          <div class="h-1 w-0 bg-gradient-to-r from-brand-orange to-transparent mt-6 group-hover:w-full group-active:w-full transition-all duration-700"></div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const companies = [
  {
    name: 'BIG FOUR GLOBAL TECHNOLOGIES INC.',
    image: '/images/big4.png',
    category: 'Technology',
    desc: 'Established in August 2014, Big Four Technologies, Inc. quickly gained recognition as one-stop-shop for computer sales, innovative software, system integration, and related services',
    link: 'https://bigfourglobal.com',
  },
  {
    name: 'TNC',
    image: '/images/tnclogo.png',
    category: 'Flagship Brand',
    desc: 'As a leading pioneer, key driver, and innovator with over 15 years of experience across various sectors of the gaming and esports industry, TNC has a proven track record of successfully navigating challenges and pushing beyond boundaries to achieve success.',
    link: 'https://www.facebook.com/TNCGroupPH/',
  },
  
  {
    name: 'HIGH GROUNDS CAFÉ',
    image: '/images/highgrounds.png', 
    category: 'Food & Beverage',
    desc: 'High Grounds Café is a unique destination in Quezon City that seamlessly blends a cozy café ambiance with a state-of-the-art gaming experience. Located at 67 Scout Rallos, Tomas Morato, this establishment offers patrons a place to enjoy quality coffee and food while engaging in gaming activities.',
    link: 'https://www.facebook.com/search/top?q=high%20grounds%20cafe', 
  },
  {
    name: 'MAJA CAFÉ + DONUTS',
    image: '/images/maja.png',
    category: 'Food & Beverage',
    desc: 'MAJA Café + Donuts is a vibrant culinary destination in Biñan, Laguna, celebrated for its innovative take on Filipino comfort food and artisanal pastries. With branches at Pavilion Mall and Southwoods Mall, MAJA offers a cozy and inviting atmosphere where tradition meets creativity.',
    link: 'https://www.facebook.com/MAJAdoughsanddoughnuts/',
  },
  {
    name: 'FIREBALL',
    image: '/images/fireball.png',
    category: 'Entertainment',
    desc: 'Fireball Communications, Inc. is a dynamic marketing and advertising agency based in Quezon City, Metro Manila. Comprising a team of expert strategists and creative professionals, the company is dedicated to delivering impactful and relevant marketing solutions that resonate with audiences.',
    link: 'https://www.facebook.com/FireballCommunications/',
  },
 
]
</script>