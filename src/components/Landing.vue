/*
Den här hemsidan är nyplanterad 
Titta gärna in snart igen och se hur den växer fram
*/

/*
Om Foodsharing

Vill du starta en lokal maträddningsgrupp? Vi hjälper dig att komma igång!

Med inspiration och stöd från Solidariskt Kylskåp (solikyl.se) i Göteborg kan du få handledning och hjälp – från att hitta samarbeten med butiker och hantera livsmedel på ett säkert sätt, till att ordna en lokal för matutdelning.

Det här kan vi erbjuda:

    Steg-för-steg-handledning i hur man startar en maträddningsverksamhet, anpassad för både individer och grupper

    Studiebesök till och från Göteborg (gäller inom Västra Götaland)

    Organiseringsplattform samt gemensam webbplats/”varumärke”

    Kontakter och tillgång till ett nätverk
*/

/*
Kontakta oss
info@foodsharing.se
*/

<template>
  <div class="fss-page">

    <!-- ===================== HERO SECTION ===================== -->
    <section class="hero-section">

      <!-- Centred hero content -->
      <div class="hero-content">

        <!-- Logo -->
        <div class="hero-logo-wrap">
          <img
            :src="logo"
            alt="Foodsharing Sweden"
            class="hero-logo"
          />
        </div>

        <!-- Headline -->
        <img
          :src="heroBannerWide"
          alt="Den här hemsidan är nyplanterad"
          class="hero-banner hero-banner--wide"
        />
        <img
          :src="heroBannerNarrow"
          alt="Den här hemsidan är nyplanterad"
          class="hero-banner hero-banner--narrow"
        />

      </div>

      <!-- Scroll chevron — tablet/desktop only -->
      <div class="hero-chevron" @click="scrollToAbout">
        <svg width="82" height="51" viewBox="0 0 82 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 10L41 40.5L71.5 10" stroke="white" stroke-width="8"/>
        </svg>
      </div>

    </section>

    <!-- ===================== ABOUT SECTION ===================== -->
    <section class="about-section">
      <div class="about-inner">

        <h2 class="about-heading">Om Foodsharing</h2>

        <p class="about-body">
          Vill du starta en lokal maträddningsgrupp? Vi hjälper dig att komma igång!
        </p>
        <p class="about-body">
          Med inspiration och stöd från Solidariskt Kylskåp (solikyl.se) i Göteborg kan du få handledning och hjälp – från att hitta samarbeten med butiker och hantera livsmedel på ett säkert sätt, till att ordna en lokal för matutdelning.
        </p>
        <p class="about-body">
          Det här kan vi erbjuda:
        </p>
        <ul class="about-list">
          <li>
            Steg-för-steg-handledning i hur man startar en maträddningsverksamhet, anpassad för både individer och grupper
          </li>
          <li>
            Studiebesök till och från Göteborg (gäller inom Västra Götaland)
          </li>
          <li>
            Organiseringsplattform samt gemensam webbplats/”varumärke”
          </li>
          <li>
            Kontakter och tillgång till ett nätverk
          </li>
        </ul>

      </div>
    </section>

    <!-- ===================== CONTACT / FOOTER SECTION ===================== -->
    <footer class="contact-section">
      <div class="contact-inner">

        <h2 class="contact-heading">Kontakta oss</h2>

        <p class="contact-email">
          <span class="contact-email-label">Email</span>
          <a href="mailto:info@foodsharing.se" class="contact-email-link">info@foodsharing.se</a>
        </p>

      </div>
    </footer>

  </div>
</template>

<script setup>
const scrollToAbout = () => {
  const aboutSection = document.querySelector('.about-section');
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// const logo = new URL('../assets/fwdloggafss/FSS logga 6.1.png', import.meta.url).href
const logo = new URL('https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/fwdloggafss/FSS%20logga%206.2.png').href
const heroBannerWide = new URL('https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/banner/Hero_title_plant_wide.png').href
const heroBannerNarrow = new URL('https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/banner/Hero_title_plant_narrow.png').href
</script>

<style scoped>
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
:root {
  --fss-dark-green   : #002809;
  --fss-olive-green  : #6b9a1a;
  --fss-orange       : #e8761a;
  --fss-white        : #ffffff;
  --fss-text-muted   : rgba(255, 255, 255, 0.80);
}
 
/* ============================================================
   PAGE WRAPPER
   ============================================================ */
.fss-page {
  min-height: 100vh;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
}
 
/* ============================================================
   HERO SECTION
   ============================================================ */
.hero-section {
  position: relative;
  background-color: #002809;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 72px 24px 96px;
}
 
/* Language button — top-right corner (tablet / desktop) */
.hero-lang-corner {
  position: absolute;
  top: 16px;
  right: 16px;
}
 
.lang-corner-btn {
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.55) !important;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  padding: 2px 10px;
  border-radius: 2px;
  background: transparent !important;
}
 
/* Hero centred block */
.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 860px;
  width: 100%;
}
 
/* Logo */
.hero-logo-wrap {
  margin-bottom: 36px;
}
 
.hero-logo {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  object-fit: contain;
  background: #fff;     /* fallback while image loads */
}
 
/* Headline banners */
.hero-banner {
  max-width: 100%;
  height: auto;
  margin: 0 0 18px;
}

.hero-banner--wide {
  display: block;
}

.hero-banner--narrow {
  display: none;
}

@media (max-width: 599px) {
  .hero-banner--wide {
    display: none;
  }

  .hero-banner--narrow {
    display: block;
  }
}
 
/* Subtitle */
.hero-subtitle {
  color: rgba(255, 255, 255, 0.72);
  font-size: clamp(0.9rem, 1.6vw, 1rem);
  margin: 0;
  max-width: 420px;
}
 
/* Language button — mobile only */
.lang-mobile-btn {
  border-color: #ffffff !important;
  color: #ffffff !important;
  min-width: 168px;
  border-radius: 4px;
  font-weight: 500;
  letter-spacing: 0.02em;
}
 
/* Scroll chevron */
.hero-chevron {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  animation: chevron-bounce 1.6s ease-in-out infinite;
}
 
@keyframes chevron-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(10px); }
}
 
/* ============================================================
   ABOUT SECTION
   ============================================================ */
.about-section {
  background-color: #739f0c;
  padding: 64px 24px;
}
 
.about-inner {
  max-width: 860px;
  margin: 0 auto;
}
 
.about-heading {
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 24px;
}
 
.about-body {
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  line-height: 1.75;
  margin: 0 0 22px;
}
 
.about-body:last-child {
  margin-bottom: 0;
}
 
/* Unordered list inside the about section */
.about-list {
  list-style: none;
  padding: 0;
  margin: 0 0 22px;
}
 
.about-list li {
  position: relative;
  padding-left: 1.4em;
  color: rgba(255, 255, 255, 0.88);
  font-size: clamp(0.85rem, 1.4vw, 0.95rem);
  line-height: 1.75;
  margin-bottom: 10px;
}
 
.about-list li:last-child {
  margin-bottom: 0;
}
 
/* Custom bullet — small white circle */
.about-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ffffff;
  opacity: 0.75;
}
 
/* ============================================================
   CONTACT / FOOTER SECTION
   ============================================================ */
.contact-section {
  background-color: #002809;
  padding: 64px 24px 80px;
}
 
.contact-inner {
  max-width: 860px;
  margin: 0 auto;
}
 
.contact-heading {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 12px;
}
 
.contact-email {
  display: flex;
  gap: 12px;
  align-items: baseline;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
}
 
.contact-email-label {
  font-weight: 500;
}
 
.contact-email-link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: color 0.2s;
}
 
.contact-email-link:hover {
  color: #ffffff;
  text-decoration: underline;
}
 
/* ============================================================
   RESPONSIVE OVERRIDES
   ============================================================ */
 
/* Mobile (< 600 px — Quasar xs) */
@media (max-width: 599px) {
  .hero-section {
    min-height: unset;
    padding: 48px 20px 64px;
    justify-content: flex-start;
    padding-top: 64px;
  }
 
  .hero-logo {
    width: 86px;
    height: 86px;
  }
 
  .about-section,
  .contact-section {
    padding: 48px 20px;
  }
}
 
/* Tablet (600 px – 1023 px — Quasar sm) */
@media (min-width: 600px) and (max-width: 1023px) {
  .about-inner,
  .contact-inner {
    max-width: 680px;
  }
}
 
/* Desktop (≥ 1024 px — Quasar md+) */
@media (min-width: 1024px) {
  .about-section {
    padding: 80px 48px;
  }
 
  .contact-section {
    padding: 80px 48px 100px;
  }
 
  .about-inner,
  .contact-inner {
    max-width: 1000px;
  }
}
</style>
<!-- 
<template>
  <div class="column items-center justify-center q-pa-xl">
    <img :src="logo" alt="FoodSharing logo" style="max-width: 100%; width: 600px;" />
    <div class="row q-gutter-md q-mt-md">
      <QBtn unelevated color="primary" label="Log in" to="/login" />
      <QBtn unelevated outline color="primary" label="Sign up" to="/signup" />
    </div>
  </div>
</template> -->

<!-- Plant: <svg width="67" height="60" viewBox="0 0 67 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.44802 58.2593C1.42723 43.9676 -3.99148 14.1593 22.5 9.25928" stroke="#739F0C" stroke-width="5"/>
<ellipse cx="9.26489" cy="23.2236" rx="9.26489" ry="23.2236" transform="matrix(0.188036 -0.982162 -0.959416 -0.281995 63.0156 31.2971)" fill="#739F0C"/>
</svg> -->

<!-- <script setup>
import { QBtn } from 'quasar'
const bg1 = '#002809'
const bg2 = '#739F0C'
const logo = new URL('../assets/fwdloggafss/FSS logga 6.1.png', import.meta.url).href
</script> -->
