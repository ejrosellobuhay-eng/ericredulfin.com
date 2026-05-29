<template>
  <section id="companies" class="companies-section py-32 relative overflow-hidden">

  
    <div class="absolute inset-0 z-0">

   
      <div class="absolute inset-0 bg-[#07070a]"></div>

   
      <div class="logo-bg-wrap">
        <img
          src="/images/tnclogo.png"
          alt=""
          aria-hidden="true"
          class="logo-bg-img"
        />
      </div>

    
      <div class="absolute inset-0 bg-radial-vignette"></div>

  
      <div class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#07070a] to-transparent"></div>
      <div class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07070a] to-transparent"></div>

     
      <div class="center-bloom"></div>

     
      <div class="grain-layer"></div>
    </div>

  
    <div class="relative z-10 max-w-7xl mx-auto px-6">

      <!-- Header -->
      <div class="text-center mb-20 reveal">
        <div class="section-tag w-fit px-4 py-2 rounded-full inline-flex items-center justify-center">
          Our Divisions
        </div>

        <h2 class="section-heading mt-3">
          TNC Group of <em>Companies</em>
        </h2>
        <p class="section-sub mt-5 max-w-lg mx-auto">
          Helm ventures range from vibrant internet cafes, trusted computer parts shops, shaping the digital landscape one connection at a time.
        </p>
      </div>

     
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="(brand, index) in brands"
          :key="brand.title"
          :href="brand.link"
          class="brand-card reveal"
          :style="{ transitionDelay: (index * 0.06) + 's', animationDelay: (index * 0.06) + 's' }"
        >
          <!-- Top row: category tag + arrow -->
          <div class="card-top">
            <span class="card-tag">{{ brand.description }}</span>
            <span class="card-arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </span>
          </div>

          <!-- Title -->
          <h3 class="card-title">{{ brand.title }}</h3>

          <!-- Bottom line accent -->
          <div class="card-line"></div>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const brands = [
  { title: 'TNC  PC Warehouse',      description: 'Computer Store',           link: ' https://tncpcwarehouse.com/' },
  { title: 'TNC  Digital Marketing', description: 'Marketing',                link: ' https://tnc.com.ph/' },
  { title: 'TNC  Events',            description: 'Gaming & E-Sports',        link: ' https://www.facebook.com/TNCEsports/' },
  { title: 'TNC  Production',        description: 'Media Production',         link: ' https://www.facebook.com/tncproductionofficialpage' },
  { title: 'TNC  Study Hub',         description: 'Study Space',              link: ' https://www.facebook.com/tncstudyhub/' },
  { title: 'TNC  Pro Team',          description: 'E-Sports Team',            link: ' https://www.facebook.com/TNCProTeamML/' },
  { title: 'TNC  Cybercafe',         description: 'Cyber Café',               link: ' https://www.facebook.com/TNCCyberCafe/' },
  { title: 'TNC Properties',          description: 'Real Estate',              link: ' https://tncproperties.com.ph/' },
  { title: 'TNC Training Center',     description: 'Training Space',           link: ' https://tnc.com.ph/' },
]
</script>

<style scoped>



.companies-section {
  isolation: isolate;
}

.logo-bg-wrap {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.logo-bg-img {
  width: min(1100px, 95vw);
  height: auto;
  object-fit: contain;
  opacity: 0.13;
  filter:
    brightness(1.4)
    saturate(0.6)
    drop-shadow(0 0 80px rgba(255, 107, 53, 0.35))
    drop-shadow(0 0 160px rgba(255, 107, 53, 0.15));
  animation: logoBreath 8s ease-in-out infinite;
  will-change: opacity, filter;
}

@keyframes logoBreath {
  0%, 100% {
    opacity: 0.13;
    filter:
      brightness(1.4) saturate(0.6)
      drop-shadow(0 0 80px rgba(255,107,53,0.35))
      drop-shadow(0 0 160px rgba(255,107,53,0.15));
  }
  50% {
    opacity: 0.18;
    filter:
      brightness(1.7) saturate(0.8)
      drop-shadow(0 0 120px rgba(255,107,53,0.55))
      drop-shadow(0 0 220px rgba(255,107,53,0.25));
  }
}

.bg-radial-vignette {
  background: radial-gradient(
    ellipse 65% 60% at 50% 50%,
    transparent 0%,
    rgba(7,7,10,0.5) 55%,
    rgba(7,7,10,0.92) 80%,
    #07070a 100%
  );
}

.center-bloom {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 65%);
  pointer-events: none;
  animation: bloomPulse 8s ease-in-out infinite;
}
@keyframes bloomPulse {
  0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
  50%       { opacity: 1;   transform: translate(-50%, -50%) scale(1.15); }
}

.grain-layer {
  position: absolute;
  inset: 0;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px 200px;
  pointer-events: none;
}



.section-heading {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: rgba(255, 248, 240, 0.95);
  letter-spacing: -0.02em;
  line-height: 1.1;
}
.section-heading em {
  font-style: normal;
  background: linear-gradient(135deg, #ff6b35 0%, #ffaa70 50%, #ff6b35 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmerText 4s linear infinite;
}
@keyframes shimmerText {
  0%   { background-position: 0% center; }
  100% { background-position: 200% center; }
}

.section-sub {
  font-size: 0.95rem;
  color: rgba(255,248,240,0.38);
  line-height: 1.75;
}



.brand-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 2rem 1.75rem;
  border-radius: 16px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  /* Solid dark background — no transparency, no blur */
  background: #0e0d11;
  border: 1px solid rgba(255,255,255,0.07);
  min-height: 160px;
  overflow: hidden;
  text-align: center;
  transition:
    transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
    border-color 0.4s ease,
    background 0.4s ease,
    box-shadow 0.4s ease;
}


.brand-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 50%;
  height: 2px;
  background: linear-gradient(to right, transparent, #ff6b35, transparent);
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}


.brand-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(255,107,53,0.07) 0%, transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.brand-card:hover {
  transform: translateY(-6px);
  border-color: rgba(255,107,53,0.35);
  background: #131118;
  box-shadow:
    0 20px 50px rgba(0,0,0,0.45),
    0 0 0 1px rgba(255,107,53,0.12),
    0 0 40px rgba(255,107,53,0.08);
}

.brand-card:hover::before {
  opacity: 1;
  transform: translateX(-50%) scaleX(1);
}

.brand-card:hover::after {
  opacity: 1;
}


.card-top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.card-tag {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(255,107,53,0.5);
  transition: color 0.35s ease;
}
.brand-card:hover .card-tag {
  color: rgba(255,107,53,0.9);
}

.card-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,107,53,0.5);
  transform: translate(-3px, 3px);
  opacity: 0;
  transition:
    opacity 0.35s ease,
    transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
    color 0.35s ease;
}
.brand-card:hover .card-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: #ff6b35;
}


.card-title {
  font-size: 25px;
  font-weight: 700;
  color: rgba(255,248,240,0.88);
  letter-spacing: -0.015em;
  line-height: 1.3;
  flex: 1;
  transition: color 0.35s ease;
}
.brand-card:hover .card-title {
  color: rgba(255,248,240,1);
}


.card-line {
  height: 1px;
  width: 40%;
  background: linear-gradient(to right, transparent, rgba(255,107,53,0.6), transparent);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.45s cubic-bezier(0.23, 1, 0.32, 1);
}
.brand-card:hover .card-line {
  transform: scaleX(1);
}


@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>