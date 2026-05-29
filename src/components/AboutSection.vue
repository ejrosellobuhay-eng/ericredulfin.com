<template>
  <section id="about" class="py-24 relative overflow-hidden">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent"></div>
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-6">
      <!-- Header -->
      <div class="text-center mb-20 reveal">
        <div class="section-tag mx-auto w-fit">
          The Journey
        </div>
        <h2 class="text-4xl sm:text-5xl font-bold mt-4 text-brand-cream">
          Pioneering the Path<br><span class="text-gradient">to Success</span>
        </h2>
        <p class="text-brand-cream/50 mt-4 max-w-2xl mx-auto leading-relaxed text-lg">
          From humble beginnings to building a multi-company empire — the story of relentless ambition, strategic vision, and transformative leadership.
        </p>
      </div>

      
      <div class="space-y-24">
        <div
          v-for="(story, index) in stories"
          :key="story.title"
          class="grid lg:grid-cols-2 gap-12 items-center"
          :class="index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''"
        >
          <!-- Images -->
          <div
            class="reveal"
            :class="index % 2 === 0 ? 'reveal-left' : 'reveal-right'"
            :style="{ transitionDelay: '0.1s' }"
          >
          <div class="aspect-[4/3] rounded-3xl overflow-hidden border border-brand-orange">
              <img
                :src="story.image"
                :alt="story.imageCaption"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Content  -->
          <div
            class="reveal space-y-6"
            :class="index % 2 === 0 ? 'reveal-right' : 'reveal-left'"
            :style="{ transitionDelay: '0.2s' }"
          >
            <h3 class="text-2xl sm:text-3xl font-bold text-brand-cream leading-tight">{{ story.title }}</h3>
            <p class="text-brand-cream/60 leading-relaxed">{{ story.description }}</p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in story.tags"
                :key="tag"
                class="px-3 py-1 rounded-full text-xs font-medium bg-brand-orange/10 text-brand-orange border border-brand-orange/20"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stories = [
  {
    image: '/images/E2.jpg',
    title: 'A Vision is Born',
    description: 'Eric M. Redulfin began his entrepreneurial journey with a single internet café in Manila, fueled by a passion for technology and an unwavering belief that digital connectivity could transform communities.',
    tags: ['First Venture', 'Technology', 'Internet Café'],
  },
  {
    image: '/images/E3.jpg',
    title: 'Building the Foundation',
    description: 'With the success of the first location, the TNC brand was established and franchise expansion began. The blueprint for a business empire was laid — one built on quality, innovation, and community.',
    tags: ['TNC Founded', 'Franchise', 'Expansion'],
  },
  {
    image: '/images/r2.jpg',
    title: 'Diversification & Growth',
    description: 'TNC Group evolved from a single concept to a diverse portfolio spanning cybercafes, events, PC retail, esports, training centers, and production — cementing its position as a leading Filipino enterprise.',
    tags: ['8+ Companies', 'Diversification', 'Leadership'],
  },
  {
    image: '/images/r1.jpg',
    title: 'Pioneering the Digital Future',
    description: 'With BigFour Global Technologies and TNC Digital Marketing, the group enters a bold new chapter — transforming businesses through cutting-edge digital solutions and global connectivity.',
    tags: ['Global Tech', 'Digital Transformation', 'Innovation'],
  },
]
</script>