<template>
    <section class="hero-section">
        <img
            loading="lazy"
            :src="banner"
            alt="Hero Banner"
            class="hero-banner"
        />
        <div class="hero-section-content">
            <slot></slot>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    banner: string;
}

defineProps<Props>();
</script>

<style scoped>
.hero-section {
    height: 321px;
    min-height: 321px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-section-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.hero-banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 50%;
}
</style>
