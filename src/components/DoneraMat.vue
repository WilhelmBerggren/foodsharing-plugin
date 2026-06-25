<template>
    <FssToolbar />
    <div class="fss-page donera">
        <template v-if="page">
            <HeroSection :banner="heroBanner">
                <h1 class="hero-title">{{ page.hero.title }}</h1>
                <span class="hero-subtitle">{{ page.hero.subtitle }}</span>
            </HeroSection>

            <!-- För regelbundna donationer -->
            <section class="section section-light">
                <img :src="bg" alt="" class="section-bg" />
                <div class="section-inner">
                    <h2 class="section-title">{{ page.intro.title }}</h2>
                    <p v-for="(para, i) in page.intro.paragraphs" :key="i">
                        {{ para }}
                    </p>
                    <p v-if="page.intro.lead" class="lead">
                        {{ page.intro.lead }}
                    </p>

                    <div class="steps">
                        <div
                            class="step-card"
                            v-for="(step, i) in page.steps"
                            :key="i"
                        >
                            <div class="step-icon">
                                <CmsIcon :name="step.icon" />
                            </div>
                            <p>{{ step.text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Några fördelar -->
            <section class="section section-gold">
                <div class="section-inner">
                    <h2 class="section-title">{{ page.benefitsTitle }}</h2>
                    <div class="benefits">
                        <div
                            class="benefit-card"
                            v-for="(b, i) in page.benefits"
                            :key="i"
                        >
                            <CmsIcon :name="b.icon" class="benefit-icon" />
                            <p>{{ b.text }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- För tillfälliga donationer -->
            <section class="section section-light">
                <img :src="bg" alt="" class="section-bg" />
                <div class="section-inner">
                    <h2 class="section-title">{{ page.temporary.title }}</h2>
                    <p>{{ page.temporary.text }}</p>
                    <a
                        v-if="page.temporary.buttonLabel"
                        class="btn btn-green"
                        :href="page.temporary.buttonHref"
                        >{{ page.temporary.buttonLabel }}</a
                    >
                </div>
            </section>

            <!-- Hör av dig! -->
            <section class="section section-gold">
                <div class="section-inner">
                    <h2 class="section-title">{{ page.contact.title }}</h2>
                    <p>{{ page.contact.text }}</p>
                    <a
                        v-if="page.contact.buttonLabel"
                        class="btn btn-dark"
                        :href="page.contact.buttonHref"
                        >{{ page.contact.buttonLabel }}</a
                    >
                </div>
            </section>
        </template>

        <FssFooter />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import FssToolbar from "./Landing2/components/FssToolbar.vue";
import HeroSection from "./Landing2/components/HeroSection.vue";
import FssFooter from "./Landing2/components/FssFooter.vue";
import CmsIcon from "./icons/CmsIcon.vue";
import { usePage } from "../cms/usePage";
import type { DoneraPage } from "../cms/types";

// The hero banner image stays in code (not CMS-managed). Served from the repo.
const heroBanner =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/donera_mat.jpg?raw=true";
const bg =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true";

const { data } = usePage(() => "donera-mat");
// Narrow to the donera shape; render nothing rich until it's loaded.
const page = computed(() =>
    data.value?.kind === "donera" ? (data.value as DoneraPage) : undefined,
);
</script>

<style scoped>
.fss-page {
    display: flex;
    flex-direction: column;
}

/* Hero */
.hero-title {
    font-family: Georgia, serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.2;
    text-align: center;
    margin: 0;
    color: #2d3b2d;
    -webkit-text-stroke: 9px white;
    paint-order: stroke fill;
}

.hero-subtitle {
    display: inline-block;
    margin-top: 12px;
    color: #2d3b2d;
    font-family: Arial;
    font-weight: 700;
    font-size: 14px;
    -webkit-text-stroke: 6px white;
    paint-order: stroke fill;
}

/* Sections */
.section {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 72px 24px;
}

.section-light {
    background-color: #fffdf9;
}

.section-gold {
    background-color: #c9a15f;
}

.section-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    pointer-events: none;
}

.section-inner {
    position: relative;
    width: 100%;
    max-width: 1080px;
}

.section-title {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.3;
    color: #1a1a1a;
    margin: 0 0 24px;
}

.section p {
    font-family: Arial;
    font-size: 15px;
    line-height: 1.7;
    color: #222;
    margin: 0 0 16px;
    max-width: 760px;
}

.section .lead {
    margin-top: 24px;
    margin-bottom: 8px;
}

/* Process steps */
.steps {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 16px;
}

.step-card {
    display: flex;
    align-items: center;
    gap: 28px;
    background: #ffffff;
    border: 1px solid #121212;
    border-radius: 8px;
    padding: 20px 28px;
}

.step-icon {
    flex-shrink: 0;
    width: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.step-icon :deep(svg),
.step-icon :deep(img) {
    width: 72px;
    height: auto;
}

.step-card p {
    margin: 0;
}

/* Benefits */
.benefits {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.benefit-card {
    background: #d8c08c;
    border-radius: 8px;
    padding: 24px;
}

.benefit-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    display: block;
    margin-bottom: 16px;
}

.benefit-card p {
    margin: 0;
    font-family: Arial;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
    max-width: none;
}

/* Buttons */
.btn {
    display: inline-block;
    margin-top: 8px;
    padding: 12px 22px;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 13px;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn:hover {
    opacity: 0.9;
}

.btn-green {
    background: #7b9737;
    color: #ffffff;
}

.btn-dark {
    background: #2d3b2d;
    color: #ffffff;
}

@media (max-width: 768px) {
    .section {
        padding: 48px 20px;
    }
    .benefits {
        grid-template-columns: 1fr;
    }
    .step-card {
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }
}
</style>
