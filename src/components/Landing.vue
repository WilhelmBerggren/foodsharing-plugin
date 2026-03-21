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

      <!-- Language toggle — top-right on tablet/desktop -->
      <!-- <div class="hero-lang-corner gt-xs">
        <q-btn
          unelevated
          dense
          label="ENG"
          class="lang-corner-btn"
          @click="toggleLanguage"
        />
      </div> -->

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
        <h1 class="hero-headline">
          Den här hemsidan är
          <span class="hero-headline-highlight">nyplanterad</span><span
            class="hero-sprout"
            aria-hidden="true"
          >
            <!-- Small leaf SVG matching the Figma design -->
            <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 28C11 28 2 18 2 10C2 5.02944 6.02944 1 11 1C15.9706 1 20 5.02944 20 10C20 18 11 28 11 28Z"
                fill="#6BAF20"
              />
            </svg>
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="hero-subtitle">
          Titta gärna in snart igen och se hur den växer fram
        </p>

        <!-- Language button — mobile only, below subtitle -->
        <!-- <div class="lt-sm q-mt-xl">
          <q-btn
            outline
            label="English"
            class="lang-mobile-btn"
            @click="toggleLanguage"
          />
        </div> -->

      </div>

      <!-- Scroll chevron — tablet/desktop only -->
      <div class="hero-chevron gt-xs">
        <q-icon name="keyboard_arrow_down" color="white" size="2.2rem" />
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
// ---------------------------------------------------------------------------
// Language toggle — swap between Swedish and English content
// ---------------------------------------------------------------------------
const toggleLanguage = () => {
  // TODO: implement i18n / route change
  console.log('Toggle language')
}
const logo = new URL('../assets/fwdloggafss/FSS logga 6.1.png', import.meta.url).href
</script>

<style scoped>
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
:root {
  --fss-dark-green   : #0d2818;
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
  background-color: #0d2818;
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
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 3px solid #ffffff;
  object-fit: cover;
  background: #fff;     /* fallback while image loads */
}
 
/* Headline */
.hero-headline {
  font-size: clamp(1.75rem, 4.5vw, 3.2rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  margin: 0 0 18px;
}
 
.hero-headline-highlight {
  color: #e8761a;
}
 
/* Inline sprout icon next to headline */
.hero-sprout {
  display: inline-block;
  vertical-align: middle;
  margin-left: 4px;
  margin-bottom: 4px;
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
  background-color: #6b9a1a;
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
  background-color: #0d2818;
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
    width: 72px;
    height: 72px;
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
