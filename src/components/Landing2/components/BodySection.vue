<template>
    <section :class="['body-section', `body-section-${variant}`, { reverse }]">
        <img
            v-if="bgImage"
            loading="lazy"
            :src="bgImage"
            alt=""
            class="body-bg"
        />
        <div class="body-section-inner" :class="{ 'with-image': !!bannerImg }">
            <div class="body-text">
                <h1>{{ title }}</h1>
                <span v-for="(paragraph, index) in text" :key="index">
                    {{ paragraph }}
                </span>
                <button v-if="hasButton" class="btn">{{ buttonText }}</button>
            </div>
            <div v-if="bannerImg" class="body-media">
                <img
                    loading="lazy"
                    :src="bannerImg"
                    alt=""
                    class="body-banner-img"
                />
            </div>
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
    // When true (and an image is present), the image sits on the left and text
    // on the right. CmsPage alternates this per section for a zig-zag layout.
    reverse?: boolean;
}

withDefaults(defineProps<Props>(), {
    variant: "even",
    hasButton: false,
    buttonText: "Läs mer",
    reverse: false,
});
</script>

<style scoped>
.body-section {
    position: relative;
    overflow: hidden;
    background-color: white;
    padding: 72px 24px;
    display: flex;
    justify-content: center;
}

.body-section-odd {
    background-color: #b37a1b;
}

/* Faint repeating food-icon backdrop */
.body-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.1;
    pointer-events: none;
}

.body-section-inner {
    position: relative;
    width: 100%;
    max-width: 1080px;
}

/* Single-column (image-less) sections: a centred, comfortably wide text block. */
.body-section-inner:not(.with-image) .body-text {
    max-width: 820px;
    margin: 0 auto;
}

/* Two-column layout when an image is present. */
.body-section-inner.with-image {
    display: flex;
    align-items: center;
    gap: 56px;
}

.body-section.reverse .body-section-inner.with-image {
    flex-direction: row-reverse;
}

.body-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1 1 0;
    text-align: left;
}

.body-text h1 {
    font-family: Georgia, serif;
    font-size: 2rem;
    margin: 0 0 0.5rem;
}

.body-text span {
    line-height: 1.7;
}

.body-media {
    flex: 1 1 0;
}

.body-banner-img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
}

.btn {
    align-self: flex-start;
    margin-top: 0.5rem;
    padding: 12px 22px;
    border: none;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 13px;
    color: white;
    cursor: pointer;
    transition: opacity 0.2s;
}

.btn:hover {
    opacity: 0.9;
}

/* Button contrasts with its section background */
.body-section-even .btn {
    background-color: #7b9737;
}

.body-section-odd .btn {
    background-color: #2d3b2d;
}

/* Mobile: stack with the image on top, text below. */
@media (max-width: 768px) {
    .body-section {
        padding: 48px 20px;
    }

    .body-section-inner.with-image,
    .body-section.reverse .body-section-inner.with-image {
        flex-direction: column;
        gap: 24px;
    }

    .body-media {
        order: -1;
        width: 100%;
    }
}
</style>
