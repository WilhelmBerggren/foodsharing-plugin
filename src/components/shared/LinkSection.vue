<template>
    <section class="link-section">
        <img :src="bg" alt="" class="link-bg" />
        <div class="link-inner">
            <h2 class="link-title">{{ title }}</h2>
            <a
                v-for="(item, i) in items"
                :key="i"
                class="link-card"
                :href="item.href"
            >
                <span>{{ item.label }}</span>
                <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9 6l6 6-6 6"
                        stroke="#1a1a1a"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { LinkItem } from "../../cms/types";

defineProps<{ title: string; items: LinkItem[] }>();

const bg =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true";
</script>

<style scoped>
.link-section {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 72px 24px;
    background-color: #fffdf9;
}

.link-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    pointer-events: none;
}

.link-inner {
    position: relative;
    width: 100%;
    max-width: 1080px;
}

.link-title {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.3;
    color: #1a1a1a;
    margin: 0 0 24px;
}

.link-card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 18px 24px;
    margin-bottom: 16px;
    border: 1px solid #1a1a1a;
    border-radius: 8px;
    background: #ffffff;
    text-decoration: none;
    color: #1a1a1a;
    font-family: Arial;
    font-size: 15px;
    transition: background 0.15s;
}

.link-card:last-child {
    margin-bottom: 0;
}

.link-card:hover {
    background: #f4f2ec;
}
</style>
