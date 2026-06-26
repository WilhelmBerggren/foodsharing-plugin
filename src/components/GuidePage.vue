<template>
    <FssToolbar />
    <div class="fss-page guide">
        <!-- Tillbaka bar -->
        <div class="back-bar">
            <button type="button" class="back-btn" @click="goBack">
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 6l-6 6 6 6"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Tillbaka
            </button>
        </div>

        <template v-if="page">
            <img
                v-if="page.banner"
                :src="assetUrl(page.banner)"
                alt=""
                class="guide-banner"
            />

            <section class="section section-light">
                <img :src="bg" alt="" class="section-bg" />
                <div class="section-inner">
                    <h1 class="guide-title">{{ page.title }}</h1>
                    <p v-for="(para, i) in page.body" :key="i">{{ para }}</p>
                </div>
            </section>
        </template>

        <FssFooter />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import FssToolbar from "./shared/FssToolbar.vue";
import FssFooter from "./shared/FssFooter.vue";
import { usePage } from "../cms/usePage";
import { assetUrl } from "../cms/client";
import type { GuidePage } from "../cms/types";

const props = defineProps<{ slug: string }>();

const router = useRouter();
function goBack() {
    router.back();
}

const bg =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true";

const { data } = usePage(() => props.slug);
const page = computed(() =>
    data.value?.kind === "guide" ? (data.value as GuidePage) : undefined,
);
</script>

<style scoped>
.fss-page {
    display: flex;
    flex-direction: column;
}

.back-bar {
    background-color: #eceee8;
    padding: 14px 40px;
}

.back-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: none;
    border: none;
    cursor: pointer;
    color: #1a1a1a;
    font-family: Arial;
    font-size: 16px;
    padding: 0;
}

.guide-banner {
    width: 100%;
    height: 360px;
    object-fit: cover;
    display: block;
}

.section {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 64px 24px;
    background-color: #fffdf9;
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

.guide-title {
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
}

@media (max-width: 768px) {
    .back-bar {
        padding: 12px 20px;
    }
    .guide-banner {
        height: 220px;
    }
    .section {
        padding: 48px 20px;
    }
}
</style>
