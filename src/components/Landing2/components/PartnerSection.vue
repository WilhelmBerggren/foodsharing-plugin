<template>
    <section :class="['partner-section', `partner-section-${variant}`]">
        <div class="partner-inner">
            <h2 class="partner-title">{{ title }}</h2>
            <div class="partner-grid">
                <div v-for="(item, i) in items" :key="i" class="partner-item">
                    <div class="partner-logo-wrap">
                        <img
                            v-if="item.logo"
                            :src="assetUrl(item.logo)"
                            :alt="item.name"
                            class="partner-logo"
                        />
                    </div>
                    <div class="partner-name">{{ item.name }}</div>
                    <a
                        v-if="item.url"
                        class="partner-link"
                        :href="item.url"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{ item.linkLabel || item.url }}
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M14 5h5v5M19 5l-9 9M11 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { assetUrl } from "../../../cms/client";
import type { PartnerItem } from "../../../cms/types";

defineProps<{
    title: string;
    variant: "even" | "odd";
    items: PartnerItem[];
}>();
</script>

<style scoped>
.partner-section {
    display: flex;
    justify-content: center;
    padding: 64px 24px;
    background-color: #fffdf9;
}

.partner-section-odd {
    background-color: #c9a15f;
}

.partner-inner {
    width: 100%;
    max-width: 1080px;
}

.partner-title {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 1.3;
    color: #1a1a1a;
    margin: 0 0 40px;
}

.partner-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 56px;
}

.partner-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 200px;
}

.partner-logo-wrap {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
}

.partner-logo {
    max-width: 150px;
    max-height: 130px;
    object-fit: contain;
}

.partner-name {
    font-family: Georgia, serif;
    font-size: 18px;
    color: #1a1a1a;
    margin-bottom: 6px;
}

.partner-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: Arial;
    font-size: 14px;
    color: #2b6cb0;
    text-decoration: underline;
}

.partner-link:hover {
    opacity: 0.85;
}

@media (max-width: 768px) {
    .partner-section {
        padding: 48px 20px;
    }
    .partner-grid {
        gap: 36px;
    }
}
</style>
