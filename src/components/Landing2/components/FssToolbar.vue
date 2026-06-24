<template>
    <div class="fss-toolbar">
        <div class="fss-toolbar-inner">
            <img :src="logo" alt="Foodsharing Sweden" class="hero-logo" />
            <div class="om-oss"><a href="/#/om-oss">Om oss</a></div>

            <button command="show-modal" commandfor="menu-modal">
                <span class="hamburger-menu-text"
                    >Mer
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_683_3891)">
                            <path
                                d="M10 9L16 15L22 9"
                                stroke="#F9FAF7"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_683_3891">
                                <rect
                                    width="24"
                                    height="24"
                                    fill="white"
                                    transform="translate(4)"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <svg
                    class="hamburger-menu-icon"
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
            </button>
            <dialog id="menu-modal">
                <button command="close" commandfor="menu-modal">
                    <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_952_2480)">
                            <path
                                d="M18.3333 18.3333L25.6667 25.6667M25.6667 18.3333L18.3333 25.6667M22 5.5C35.2 5.5 38.5 8.8 38.5 22C38.5 35.2 35.2 38.5 22 38.5C8.8 38.5 5.5 35.2 5.5 22C5.5 8.8 8.8 5.5 22 5.5Z"
                                stroke="#F9FAF7"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_952_2480">
                                <rect width="44" height="44" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <dl class="toolbar-menu">
                    <dd><a href="#/om-oss">Om oss</a></dd>
                    <hr />
                    <dd><a href="#/starta-en-grupp">Starta en grupp</a></dd>
                    <hr />
                    <dd><a href="#/bli-volontar">Bli volontär</a></dd>
                    <hr />
                    <dd><a href="#/donera-mat">Donera mat</a></dd>
                    <hr />
                    <dd><a href="#/ta-emot-mat">Ta emot mat</a></dd>
                </dl>
            </dialog>
        </div>
    </div>
</template>

<script setup lang="ts">
const logo = new URL(
    "https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/fwdloggafss/FSS%20logga%206.4.png",
).href;
</script>

<style scoped>
button {
    background: none;
    border: none;
    cursor: pointer;
}

dialog:modal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    border: none;
    background-color: white;

    button {
        position: absolute;
        right: 16px;
        top: -16px;
        background-color: #121212;
    }
}

dd {
    font-family: Arial;
    font-weight: 400;
    font-style: Regular;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: -1.9%;
    text-align: center;
    height: 64px;
}

.fss-toolbar {
    width: 100%;
    background-color: #121212;
    .fss-toolbar-inner {
        padding-left: 16px;
        padding-right: 16px;
        width: 100%;
        height: 64px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 16px;
    }
    .hero-logo {
        height: 47px;
        filter: brightness(0) saturate(100%) invert(49%) sepia(81%)
            saturate(313%) hue-rotate(36deg) brightness(94%) contrast(91%);
    }
}

.om-oss {
    color: white;
}
.hamburger-menu-text {
    color: white;
    display: none;
}
@media screen and (min-width: 640px) {
    .fss-toolbar-inner {
        margin-left: 16px;
        grid-template-columns: auto;
    }
    .hamburger-menu-text {
        display: inline;
    }
    .hamburger-menu-icon {
        display: none;
    }

    dialog:modal {
        height: 80px;
        top: 64px;

        .toolbar-menu {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            hr {
                /*flex: 1;*/
                border-color: #737373;
                height: 16px;
            }
        }
    }
}
</style>
