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
        <GroupsSection />
        <FssFooter />
    </div>
</template>
<script lang="ts" setup>
import FssToolbar from "./Landing2/components/FssToolbar.vue";
import HeroSection from "./Landing2/components/HeroSection.vue";
import FssFooter from "./Landing2/components/FssFooter.vue";
import BodySection from "./Landing2/components/BodySection.vue";
import GroupsSection from "./Landing2/components/GroupsSection.vue";

const heroBanner = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/plastic_bag_with_food.png?raw=true",
).href;
const bg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true",
).href;

const bodySections = [
    {
        title: "Starta en egen grupp – vi backar dig!",
        text: [
            "Vill du dra igång något eget där du bor? Rädda mat, skapa gemenskap och göra konkret skillnad? Vi hjälper dig att komma igång!",
            "Med stöd och erfarenhet från Solidariskt Kylskåp i Göteborg slipper du börja från noll. Vi delar med oss av det vi lärt oss – allt från hur du pratar med butiker till hur ni fixar en trygg och schysst matutdelning.",
        ],
        variant: "even" as const,
        bgImage: bg,
    },
    {
        title: "Du fixar viljan – vi fixar resten (typ)",
        text: [
            "Oavsett om du är själv eller ett gäng, så kan vi stötta dig med:",
            "- En enkel steg-för-steg-guide för att dra igång och hålla igång",
            "- Studiebesök – kom till oss eller bjud in oss (inom Västra Götaland)",
            "- En plattform att organisera er på + ett gemensamt namn att samlas kring",
            "- Kontakter, tips och ett nätverk av andra som gör samma resa",
        ],
        variant: "odd" as const,
    },
];
</script>
