<template>
    <FssToolbar />

    <div class="fss-page">
        <HeroSection :banner="heroBanner">
            <h1>Om oss</h1>
        </HeroSection>

        <BodySection
            v-for="(section, index) in bodySections"
            :key="index"
            v-bind="section"
        />
        <FssFooter />
    </div>
</template>
<script lang="ts" setup>
import FssToolbar from "./Landing2/components/FssToolbar.vue";
import HeroSection from "./Landing2/components/HeroSection.vue";
import BodySection from "./Landing2/components/BodySection.vue";
import FssFooter from "./Landing2/components/FssFooter.vue";

const heroBanner = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/plastic_bag_with_food.png?raw=true",
).href;

const bg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true",
).href;

const bodySections = [
    {
        title: "Vad är Foodsharing Sweden?",
        text: [
            "Foodsharing Sweden är ett projekt med målet att sprida den framgångsrika gräsrotsmodellen för maträddning på nationell nivå. Med erfarenheter från Solikyl i Göteborg som grund arbetar vi för att bygga upp ett nätverk och en paraplyförening för foodsharing-grupper runt om i Sverige.",
            "Projektet får stöd från Västra Götalandsregionen under en tvåårsperiod och samarbetar med olika föreningar och initiativ som delar våra mål: att minska matsvinnet, stärka lokalsamhällen och främja delning av resurser.",
        ],
        variant: "even" as const,
        bgImage: bg,
    },
    {
        title: "Vad är foodsharing?",
        text: [
            "Vi organiserar oss genom hela Sverige som del av en rörelse för att kunna minska matsvinn och främja delande av matöverskott. Främst genom samarbete med våra olika samarbetspartners, butiker, bageer, osv. Genom öppna matutdelningar lyckas vi göra en konkret handling för miljön och för medmänniskor.",
            "Att dela utan motprestation är ett självklart sätt att skapa gemenskap! Hjälp oss att rädda maten, tillsammans!",
        ],
        variant: "odd" as const,
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
</style>
