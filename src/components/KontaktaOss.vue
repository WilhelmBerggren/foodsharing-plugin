<template>
    <FssToolbar />
    <div class="fss-page contact">
        <template v-if="page">
            <HeroSection :banner="heroBanner">
                <h1 class="hero-title">{{ page.title }}</h1>
            </HeroSection>

            <section class="section">
                <img :src="bg" alt="" class="section-bg" />
                <div class="section-inner">
                    <h2 class="contact-heading">{{ page.heading }}</h2>
                    <p class="contact-subtitle">{{ page.subtitle }}</p>

                    <div class="email-card">
                        <svg
                            class="mail-icon"
                            width="78"
                            height="78"
                            viewBox="0 0 78 78"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9.75 22.75C9.75 21.0261 10.4348 19.3728 11.6538 18.1538C12.8728 16.9348 14.5261 16.25 16.25 16.25H61.75C63.4739 16.25 65.1272 16.9348 66.3462 18.1538C67.5652 19.3728 68.25 21.0261 68.25 22.75V55.25C68.25 56.9739 67.5652 58.6272 66.3462 59.8462C65.1272 61.0652 63.4739 61.75 61.75 61.75H16.25C14.5261 61.75 12.8728 61.0652 11.6538 59.8462C10.4348 58.6272 9.75 56.9739 9.75 55.25V22.75ZM9.75 22.75L39 42.25L68.25 22.75"
                                fill="#7B9737"
                            />
                            <path
                                d="M9.75 22.75C9.75 21.0261 10.4348 19.3728 11.6538 18.1538C12.8728 16.9348 14.5261 16.25 16.25 16.25H61.75C63.4739 16.25 65.1272 16.9348 66.3462 18.1538C67.5652 19.3728 68.25 21.0261 68.25 22.75M9.75 22.75V55.25C9.75 56.9739 10.4348 58.6272 11.6538 59.8462C12.8728 61.0652 14.5261 61.75 16.25 61.75H61.75C63.4739 61.75 65.1272 61.0652 66.3462 59.8462C67.5652 58.6272 68.25 56.9739 68.25 55.25V22.75M9.75 22.75L39 42.25L68.25 22.75"
                                stroke="#121212"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        <h3 class="email-card-heading">
                            {{ page.emailCard.heading }}
                        </h3>
                        <a
                            v-if="page.emailCard.email"
                            class="email-card-link"
                            :href="`mailto:${page.emailCard.email}`"
                            >{{ page.emailCard.email }}</a
                        >
                        <p class="email-card-note">{{ page.emailCard.note }}</p>
                    </div>

                    <h2 class="social-heading">{{ page.socialHeading }}</h2>
                    <div class="socials">
                        <a
                            href="https://www.facebook.com/people/Foodsharing-Sweden/61584366521201/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.833 18.3333V25.6667H18.333V38.5H25.6663V25.6667H31.1663L32.9997 18.3333H25.6663V14.6667C25.6663 14.1804 25.8595 13.7141 26.2033 13.3703C26.5471 13.0265 27.0134 12.8333 27.4997 12.8333H32.9997V5.5H27.4997C25.0685 5.5 22.7369 6.46577 21.0179 8.18485C19.2988 9.90394 18.333 12.2355 18.333 14.6667V18.3333H12.833Z"
                                    stroke="#121212"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/foodsharingsweden/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <svg
                                width="64"
                                height="64"
                                viewBox="0 0 44 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.2497 13.7502V13.7685M7.33301 14.6668C7.33301 12.7219 8.10562 10.8566 9.48089 9.48138C10.8562 8.10611 12.7214 7.3335 14.6663 7.3335H29.333C31.2779 7.3335 33.1432 8.10611 34.5185 9.48138C35.8937 10.8566 36.6663 12.7219 36.6663 14.6668V29.3335C36.6663 31.2784 35.8937 33.1437 34.5185 34.5189C33.1432 35.8942 31.2779 36.6668 29.333 36.6668H14.6663C12.7214 36.6668 10.8562 35.8942 9.48089 34.5189C8.10562 33.1437 7.33301 31.2784 7.33301 29.3335V14.6668ZM16.4997 22.0002C16.4997 23.4589 17.0791 24.8578 18.1106 25.8893C19.142 26.9207 20.541 27.5002 21.9997 27.5002C23.4584 27.5002 24.8573 26.9207 25.8888 25.8893C26.9202 24.8578 27.4997 23.4589 27.4997 22.0002C27.4997 20.5415 26.9202 19.1425 25.8888 18.1111C24.8573 17.0796 23.4584 16.5002 21.9997 16.5002C20.541 16.5002 19.142 17.0796 18.1106 18.1111C17.0791 19.1425 16.4997 20.5415 16.4997 22.0002Z"
                                    stroke="#121212"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </template>

        <FssFooter />
    </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import FssToolbar from "./shared/FssToolbar.vue";
import HeroSection from "./shared/HeroSection.vue";
import FssFooter from "./shared/FssFooter.vue";
import { usePage } from "../cms/usePage";
import type { ContactPage } from "../cms/types";

const heroBanner =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/ta_emot_mat.jpg?raw=true";
const bg =
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true";

const { data } = usePage(() => "kontakta-oss");
const page = computed(() =>
    data.value?.kind === "contact" ? (data.value as ContactPage) : undefined,
);
</script>

<style scoped>
.fss-page {
    display: flex;
    flex-direction: column;
}

.hero-title {
    font-family: Georgia, serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.2;
    text-align: center;
    margin: 0;
    color: #2d3b2d;
    -webkit-text-stroke: 9px white;
    paint-order: stroke fill;
}

.section {
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    padding: 72px 24px;
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
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.contact-heading {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    color: #1a1a1a;
    margin: 0 0 12px;
}

.contact-subtitle {
    font-family: Arial;
    font-size: 15px;
    line-height: 1.7;
    color: #222;
    margin: 0 0 48px;
    max-width: 620px;
}

.email-card {
    border: 2px solid #7b9737;
    border-radius: 12px;
    padding: 32px 48px;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mail-icon {
    margin-bottom: 16px;
}

.email-card-heading {
    font-family: Georgia, serif;
    font-weight: 700;
    font-size: 22px;
    color: #1a1a1a;
    margin: 0 0 12px;
}

.email-card-link {
    font-family: Arial;
    font-size: 16px;
    color: #1a1a1a;
    text-decoration: none;
    margin-bottom: 16px;
}

.email-card-link:hover {
    text-decoration: underline;
}

.email-card-note {
    font-family: Arial;
    font-size: 13px;
    color: #555;
    margin: 0;
}

.social-heading {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 26px;
    color: #1a1a1a;
    margin: 0 0 24px;
}

.socials {
    display: flex;
    gap: 20px;
}

.socials a {
    display: inline-flex;
    line-height: 0;
}

.socials svg {
    background-color: #7b9737;
    border-radius: 12px;
    padding: 8px;
}

@media (max-width: 768px) {
    .section {
        padding: 48px 20px;
    }
    .email-card {
        padding: 28px 24px;
    }
}
</style>
