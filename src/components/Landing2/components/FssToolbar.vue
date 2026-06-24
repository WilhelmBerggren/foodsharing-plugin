<template>
    <div class="fss-toolbar">
        <div class="fss-toolbar-inner">
            <img :src="logo" alt="Foodsharing Sweden" class="hero-logo" />

            <svg
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6 10H38M6 22H38M6 34H38"
                    stroke="#F9FAF7"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    </div>
</template>

<script setup lang="ts">
const logo = new URL(
    "https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/fwdloggafss/FSS%20logga%206.4.png",
).href;
</script>

<style scoped>
.fss-toolbar {
    background-color: #121212;
    .fss-toolbar-inner {
        padding-top: 36px;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
        width: 100%;
        min-height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }
    .hero-logo {
        height: 47px;
        filter: brightness(0) saturate(100%) invert(49%) sepia(81%)
            saturate(313%) hue-rotate(36deg) brightness(94%) contrast(91%);
    }
}
</style>
