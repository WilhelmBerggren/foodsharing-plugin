<template>
    <FssToolbar />
    <div class="fss-page">
        <HeroSection :banner="heroBanner">
            <h1>Mindre matsvinn,</h1>
            <h1>Mer <span>gemenskap</span></h1>
            <h2>Tillsammans räddar vi mat och bygger en hållbar framtid</h2>
            <div class="hero-section-btns">
                <button class="hero-btn-1">Bli Voluntär</button>
                <button class="hero-btn-2">Donera Mat</button>
            </div>
        </HeroSection>

        <BodySection
            v-for="(section, index) in bodySections"
            :key="index"
            v-bind="section"
        />

        <GroupsSection />

        <FssFooter />
    </div>
</template>

<script setup lang="ts">
import FssToolbar from "./Landing2/components/FssToolbar.vue";
import HeroSection from "./Landing2/components/HeroSection.vue";
import BodySection from "./Landing2/components/BodySection.vue";
import GroupsSection from "./Landing2/components/GroupsSection.vue";
import FssFooter from "./Landing2/components/FssFooter.vue";

const heroBanner = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/plastic_bag_with_food.png?raw=true",
).href;
const bg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true",
).href;
const startGroupImg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/starta_en_grupp.jpg?raw=true",
).href;
const taEmotMatImg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/ta_emot_mat.png?raw=true",
).href;

const bodySections = [
    {
        title: "Foodsharing Sweden",
        text: [
            "Gå med i en rörelse för att minska matsvinn och främja delande av matöverskott! Genom samarbete med våra olika samarbetspartners – butiker, bagerier, och andra aktörer. – samt öppna matutdelningar gör vi en konkret insats för miljön och våra medmänniskor.",
            "",
            "Att dela utan motprestation är ett självklart sätt att skapa gemenskap. Hjälp oss att rädda maten - tillsammans!",
        ],
        variant: "even" as const,
        bgImage: bg,
    },
    {
        title: "Starta en grupp",
        text: [
            "Om du inte redan finns en aktiv grupp i din kommun så hjälper vi dig att komma igång. Du kan få handledning och hjälp med allt från att hitta samarbeten med butiker och hantera livsmedel på ett säkert sätt, till att ordna en lokal för matutdelning.",
        ],
        variant: "odd" as const,
        bannerImg: startGroupImg,
        hasButton: true,
    },
    {
        title: "Ta emot mat",
        text: [
            "Du gör miljön en tjänst genom att rädda maten! Alla våra utdelningar är öppna för allmänheten. Ta med egen påse och tänk på att vi är ingen välgörenhetsorganisation, utan vi jobbar solidariskt mot oss själva och mot andra, oavsett inkomst och bakgrund.",
        ],
        variant: "even" as const,
        bgImage: bg,
        bannerImg: taEmotMatImg,
        hasButton: true,
    },
];
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

.hero-section-btns button:hover {
    opacity: 0.9;
}

h1 {
    font-family: Georgia;
    font-weight: 700;
    font-style: Bold;
    font-size: 28px;
    line-height: 150%;
    letter-spacing: -1.9%;
    text-align: center;
    margin: 0px;
    color: black;
    -webkit-text-stroke: 9px white; /* stroke width + color */
    paint-order: stroke fill; /* paint stroke FIRST, fill on top */
}

h1 span {
    font-style: italic;
    color: #b37a1b;
    -webkit-text-stroke: 18px white; /* stroke width + color */
}

h2 {
    margin: 0px;
    text-align: center;
    font-family: Arial, serif;
    font-size: 12px;
    font-weight: 400;
}
</style>
