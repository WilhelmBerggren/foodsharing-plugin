<template>
    <FssToolbar />
    <div class="fss-page">
        <template v-if="page">
            <HeroSection v-if="page.hero" :banner="assetUrl(page.hero.banner)">
                <h1 v-for="(line, i) in page.hero.headingLines" :key="i">
                    {{ line }}
                </h1>
                <h2 v-if="page.hero.subtitle">{{ page.hero.subtitle }}</h2>
                <div v-if="page.hero.buttons.length" class="hero-section-btns">
                    <component
                        :is="btn.href ? 'a' : 'button'"
                        v-for="(btn, i) in page.hero.buttons"
                        :key="i"
                        :href="btn.href"
                        :class="btn.style === 'secondary' ? 'hero-btn-2' : 'hero-btn-1'"
                    >
                        {{ btn.label }}
                    </component>
                </div>
            </HeroSection>

            <BodySection
                v-for="(section, index) in page.sections"
                :key="index"
                :title="section.title"
                :text="section.text"
                :variant="section.variant"
                :bg-image="assetUrl(section.bgImage)"
                :banner-img="assetUrl(section.bannerImg)"
                :has-button="section.hasButton"
                :button-text="section.buttonText"
            />

            <GroupsSection v-if="page.showGroups" />
        </template>
        <FssFooter />
    </div>
</template>

<script lang="ts" setup>
import FssToolbar from "./Landing2/components/FssToolbar.vue";
import HeroSection from "./Landing2/components/HeroSection.vue";
import BodySection from "./Landing2/components/BodySection.vue";
import GroupsSection from "./Landing2/components/GroupsSection.vue";
import FssFooter from "./Landing2/components/FssFooter.vue";
import { usePage } from "../cms/usePage";
import { assetUrl } from "../cms/client";

const props = defineProps<{ slug: string }>();

// `data` is renamed to `page`; while loading it is undefined and we render
// just the toolbar + footer so the layout never looks broken.
const { data: page } = usePage(() => props.slug);
</script>

<style scoped>
.fss-page {
    display: flex;
    flex-direction: column;
}

.hero-section-btns {
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: center;
}

.hero-btn-1,
.hero-btn-2 {
    padding: 16px 16px;
    border: none;
    border-radius: 8px;
    box-shadow: -2px 3px 9px 0px #00000040;
    font-family: Arial;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
    transition: opacity 0.2s;
    text-decoration: none;
    text-align: center;
}

.hero-btn-1 {
    background-color: #7b9737;
    color: white;
    text-transform: capitalize;
}

.hero-btn-2 {
    background-color: #2d3b2d;
    color: white;
}

.hero-section-btns button:hover,
.hero-section-btns a:hover {
    opacity: 0.9;
}

h1 {
    font-family: Georgia;
    font-weight: 700;
    font-size: 28px;
    line-height: 150%;
    letter-spacing: -1.9%;
    text-align: center;
    margin: 0px;
    color: black;
    -webkit-text-stroke: 9px white;
    paint-order: stroke fill;
}

h2 {
    margin: 0px;
    text-align: center;
    font-family: Arial, serif;
    font-size: 12px;
    font-weight: 400;
}
</style>
