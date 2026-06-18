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
    <div class="fss-page">
        <section class="hero-section">
            <img
                loading="lazy"
                :src="heroBanner"
                alt="Hero Banner"
                class="hero-banner"
            />
            <div class="hero-section-content">
                <h1>Mindre matsvinn,</h1>
                <h1>Mer <span>gemenskap</span></h1>
                <!-- <img
                    :src="heroBannerText"
                    alt="Hero Banner Text"
                    class="hero-banner-text"
                /> -->
                <h2>Tillsammans räddar vi mat och bygger en hållbar framtid</h2>
                <div class="hero-section-btns">
                    <button class="hero-btn-1">Bli Voluntär</button>
                    <button class="hero-btn-2">Donera Mat</button>
                </div>
            </div>
        </section>

        <section class="body-section body-section-even">
            <img loading="lazy" :src="bg" alt="Background" class="body-bg" />
            <div class="body-section-content">
                <h1>Foodsharing Sweden</h1>
                <span>
                    Vi organiserar oss genom hela Sverige som del av en rörelse
                    för att kunna minska matsvinn och främja delande av
                    matöverskott. Främst genom samarbete med våra olika
                    samarbetspartners, butiker, bageer, osv. Genom öppna
                    matutdelningar lyckas vi göra en konkret handling för miljön
                    och för medmänniskor. Att dela utan motprestation är ett
                    självklart sätt att skapa gemenskap! Hjälp oss att rädda
                    maten, tillsammans!
                </span>
            </div>
        </section>

        <section class="body-section body-section-odd">
            <div class="body-section-content">
                <h1>Starta en grupp</h1>
                <img
                    loading="lazy"
                    :src="startGroup"
                    alt="Background"
                    class="body-banner-img"
                />
                <span>
                    Om du inte redan finns en aktiv grupp i din kommun så
                    hjälper vi dig att komma igång. Du kan få handledning och
                    hjälp med allt från att hitta samarbeten med butiker och
                    hantera livsmedel på ett säkert sätt, till att ordna en
                    lokal för matutdelning.
                </span>
                <button class="btn">Läs mer</button>
            </div>
        </section>

        <section class="body-section body-section-even">
            <img loading="lazy" :src="bg" alt="Background" class="body-bg" />
            <div class="body-section-content">
                <h1>Ta emot mat</h1>
                <img
                    loading="lazy"
                    :src="taEmotMat"
                    alt="Background"
                    class="body-banner-img"
                />
                <span>
                    Du gör miljön en tjänst genom att rädda maten! Alla våra
                    utdelningar är öppna för allmänheten. Ta med egen påse och
                    tänk på att vi är ingen välgörenhetsorganisation, utan vi
                    jobbar solidariskt mot oss själva och mot andra, oavsett
                    inkomst och bakgrund.
                </span>
                <button class="btn">Läs mer</button>
            </div>
        </section>

        <section class="groups-section">
            <h1>Grupper</h1>
            <div class="groups-section-content">
                <div
                    class="group-item"
                    v-for="group in groupsData"
                    :key="group.id"
                >
                    <a :href="`#/group/${group.id}`">
                        <img
                            v-if="group.photo_urls.thumbnail"
                            :src="group.photo_urls.thumbnail"
                            alt="Group avatar"
                        />
                        <div class="group-image-placeholder" v-else></div>
                        <div class="group-info">
                            <h2>{{ group.name }}</h2>
                            <span>{{ group.member_count }} Members</span>
                        </div>
                        <p>{{ group.public_description }}</p>
                    </a>
                </div>
            </div>
        </section>

        <section class="about-section"></section>

        <footer>
            <dl>
                <dt>Meny</dt>
                <dd>Om oss</dd>
                <dd>Starta en grupp</dd>
                <dd>Bli volontär</dd>
                <dd>Donera mat</dd>
                <dd>Ta emot mat</dd>
            </dl>
            <div>
                <dl>
                    <dt>Följ oss</dt>
                    <dd>
                        <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_508_3821)">
                                <g clip-path="url(#clip1_508_3821)">
                                    <path
                                        d="M12.833 18.3333V25.6667H18.333V38.5H25.6663V25.6667H31.1663L32.9997 18.3333H25.6663V14.6667C25.6663 14.1804 25.8595 13.7141 26.2033 13.3703C26.5471 13.0265 27.0134 12.8333 27.4997 12.8333H32.9997V5.5H27.4997C25.0685 5.5 22.7369 6.46577 21.0179 8.18485C19.2988 9.90394 18.333 12.2355 18.333 14.6667V18.3333H12.833Z"
                                        stroke="#121212"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_508_3821">
                                    <rect width="44" height="44" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_508_3821">
                                    <rect
                                        width="44"
                                        height="44"
                                        rx="8"
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                        <svg
                            width="44"
                            height="44"
                            viewBox="0 0 44 44"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_508_3820)">
                                <g clip-path="url(#clip1_508_3820)">
                                    <path
                                        d="M30.2497 13.7502V13.7685M7.33301 14.6668C7.33301 12.7219 8.10562 10.8566 9.48089 9.48138C10.8562 8.10611 12.7214 7.3335 14.6663 7.3335H29.333C31.2779 7.3335 33.1432 8.10611 34.5185 9.48138C35.8937 10.8566 36.6663 12.7219 36.6663 14.6668V29.3335C36.6663 31.2784 35.8937 33.1437 34.5185 34.5189C33.1432 35.8942 31.2779 36.6668 29.333 36.6668H14.6663C12.7214 36.6668 10.8562 35.8942 9.48089 34.5189C8.10562 33.1437 7.33301 31.2784 7.33301 29.3335V14.6668ZM16.4997 22.0002C16.4997 23.4589 17.0791 24.8578 18.1106 25.8893C19.142 26.9207 20.541 27.5002 21.9997 27.5002C23.4584 27.5002 24.8573 26.9207 25.8888 25.8893C26.9202 24.8578 27.4997 23.4589 27.4997 22.0002C27.4997 20.5415 26.9202 19.1425 25.8888 18.1111C24.8573 17.0796 23.4584 16.5002 21.9997 16.5002C20.541 16.5002 19.142 17.0796 18.1106 18.1111C17.0791 19.1425 16.4997 20.5415 16.4997 22.0002Z"
                                        stroke="#121212"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_508_3820">
                                    <rect width="44" height="44" fill="white" />
                                </clipPath>
                                <clipPath id="clip1_508_3820">
                                    <rect width="44" height="44" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </dd>
                </dl>
                <dl>
                    <dt>Kontakta oss</dt>
                    <dd>info@foodsharing.se</dd>
                    <dd>Göteborg, Sverige</dd>
                </dl>
            </div>
            <hr />
            <p>
                Menu @ Foodsharing Sweden, tillsammans räddar vi mat och skapar
                gemenskap.
            </p>
        </footer>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const scrollToAbout = () => {
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
    }
};

const groupsData = ref([]);
const fetchGroupData = async () =>
    fetch("/api/bootstrap?fields=groups%2Cplaces%2Cgeoip")
        .then((response) => response.json())
        .then((data) => {
            groupsData.value.push(
                ...data.groups.sort((a, b) => b.member_count - a.member_count),
            );
        });

onMounted(fetchGroupData);

// const logo = new URL('../assets/fwdloggafss/FSS logga 6.1.png', import.meta.url).href
const logo = new URL(
    "https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/fwdloggafss/FSS%20logga%206.4.png",
).href;
const heroBanner = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/plastic_bag_with_food.png?raw=true",
).href;
const heroBannerText = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/Mindre%20matsvinn,%20Mer%20gemenskap.png?raw=true",
);
const bg = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/foodsharing_bg.png?raw=true",
);
const startGroup = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/starta_en_grupp.jpg?raw=true",
).href;

const taEmotMat = new URL(
    "https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/banner/ta_emot_mat.png?raw=true",
).href;
</script>

<style scoped>
/* ============================================================
   DESIGN TOKENS
   ============================================================ */
:root {
    --fss-bg-dark: #121212;
    --fss-dark-green: #002809;
    --fss-olive-green: #6b9a1a;
    --fss-orange: #e8761a;
    --fss-white: #ffffff;
    --fss-text-muted: rgba(255, 255, 255, 0.8);
}

.fss-toolbar {
    background-color: #121212;
    .fss-toolbar-inner {
        padding-top: 36px;
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 16px;
        width: 100%;
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
    }
    .hero-logo {
        width: 47px;
        filter: brightness(0) saturate(100%) invert(49%) sepia(81%)
            saturate(313%) hue-rotate(36deg) brightness(94%) contrast(91%);
    }
}

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

        span {
            font-style: italic;
            color: #b37a1b;
            -webkit-text-stroke: 18px white; /* stroke width + color */
        }
    }
    h2 {
        margin: 0px;
        text-align: center;
        font-family: Arial, serif;
        font-size: 12px;
        font-weight: 400;
    }
}

.btn {
    padding: 12px 8px;
    opacity: 1;
    border: none;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-style: Bold;
    font-size: 12px;
    line-height: Typography/Line Height/22 px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
}

.hero-section-btns {
    display: flex;
    gap: 16px;
    flex-direction: column;

    .hero-btn-1,
    .hero-btn-2 {
        padding: 16px 16px;
        opacity: 1;
        border: none;
        border-radius: 8px;
        box-shadow: -2px 3px 9px 0px #00000040;
        font-family: Arial;
        font-weight: 700;
        font-style: Bold;
        font-size: 12px;
        line-height: Typography/Line Height/22 px;
        letter-spacing: 0%;
        text-align: center;
        vertical-align: middle;
    }

    .hero-btn-1 {
        background-color: #7b9737;
        text-transform: capitalize;
    }
    .hero-btn-2 {
        background-color: #2d3b2d;
        color: white;
    }
}

.hero-banner {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 50%;
}

.hero-banner-text {
    width: 70%;
    height: 100%;
    object-fit: contain;
}

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
        margin: 48px 0px;
        display: flex;
        flex-direction: column;

        h1 {
            font-size: 18px;
            margin-bottom: 0px;
            font-family: Georgia;
            font-weight: 400;
            font-style: Regular;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: -1.9%;
        }
        span {
            font-size: 14px;
            margin-top: 8px;
            margin-bottom: 16px;
            font-family: Arial;
            font-weight: 400;
            font-style: Regular;
            font-size: 14px;
            line-height: 150%;
            letter-spacing: -1.9%;
        }

        .body-banner-img {
            width: 100%;
            aspect-ratio: 304 / 150;
            object-fit: cover;
            border-radius: 8px;
        }
    }

    .body-bg {
        display: flex;
        position: absolute;
        width: 100vw;
        height: 100%;
        scale: 300%;
        opacity: 10%;
    }
}

.body-section-odd {
    background-color: #b37a1b;
}

.groups-section {
    background-color: #b37a1b;
    h1 {
        font-family: Georgia;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -1.9%;
        padding-top: 32px;
        padding-left: 32px;
    }
    .groups-section-content {
        display: flex;
        flex-direction: row;
        gap: 32px;
        overflow-y: scroll;
        height: 460px;
        width: 100%;
        padding: 32px;

        .group-item {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 0;
            width: 272px;
            height: 268px;
            background-color: white;
            border: 1px solid black;
            border-radius: 12px;
            overflow: clip;
            a {
                img,
                .group-image-placeholder {
                    width: 100%;
                    height: 80px;
                    background-color: white;
                    object-fit: contain;
                }

                .group-info {
                    background-color: #121212;
                    padding-bottom: 16px;

                    h2 {
                        font-family: Roboto;
                        font-weight: 500;
                        font-style: Medium;
                        font-size: 20px;
                        line-height: 32px;
                        letter-spacing: 0.25px;
                        vertical-align: middle;
                        color: white;
                        margin: 0;
                        margin-left: 16px;
                        text-overflow: ellipsis;
                        height: 22px;
                        width: 100%;
                    }

                    span {
                        font-family: Roboto;
                        font-weight: 500;
                        font-style: Medium;
                        font-size: 14px;
                        line-height: 22px;
                        letter-spacing: 0.1px;
                        vertical-align: middle;
                        color: white;
                        text-overflow: ellipsis;
                        margin: 16px;
                    }
                }

                p {
                    margin: 16px;
                    font-family: Roboto;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    line-height: 21px;
                    letter-spacing: 0px;
                    vertical-align: middle;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}

footer {
    display: flex;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 295px;
    background-color: #121212;
    color: white;

    svg {
        fill: #7b9737;
        background-color: #7b9737;
        border-radius: 8px;
    }

    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid white;
        margin: 1em 0;
        padding: 0;
    }
}
</style>
