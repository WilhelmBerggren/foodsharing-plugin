<template>
    <section :class="['body-section', `body-section-${variant}`]">
        <img
            v-if="bgImage"
            loading="lazy"
            :src="bgImage"
            alt="Background"
            class="body-bg"
        />
        <div class="body-section-content">
            <h1>{{ title }}</h1>
            <img
                v-if="bannerImg"
                loading="lazy"
                :src="bannerImg"
                alt="Banner"
                class="body-banner-img"
            />
            <span v-for="(paragraph, index) in text" :key="index">
                {{ paragraph }}
            </span>
            <button v-if="hasButton" class="btn">{{ buttonText }}</button>
        </div>
    </section>
</template>

<script setup lang="ts">
interface Props {
    title: string;
    text: string[];
    variant?: "even" | "odd";
    bgImage?: string;
    bannerImg?: string;
    hasButton?: boolean;
    buttonText?: string;
}

withDefaults(defineProps<Props>(), {
    variant: "even",
    hasButton: false,
    buttonText: "Läs mer",
});
</script>

<style scoped>
.body-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    overflow: hidden;

    .body-section-content {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
    }

    h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .body-banner-img {
        max-width: 100%;
        height: auto;
        margin-bottom: 1rem;
    }

    .body-bg {
        display: flex;
        position: absolute;
        width: 100vw;
        height: 100%;
        scale: 300%;
        opacity: 10%;
        pointer-events: none;
    }
}

.body-section-odd {
    background-color: #b37a1b;
}

.btn {
    padding: 12px 8px;
    border: none;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 12px;
    cursor: pointer;
}
</style>
