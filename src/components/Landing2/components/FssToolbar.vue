<template>
    <div class="fss-toolbar" ref="root">
        <div class="fss-toolbar-inner">
            <a href="/#/welcome2">
                <img :src="logo" alt="Foodsharing Sweden" class="hero-logo" />
            </a>

            <nav class="toolbar-links">
                <a href="/#/om-oss">Om oss</a>
                <button
                    class="mer-trigger"
                    type="button"
                    :aria-expanded="open"
                    @click.stop="toggle"
                >
                    Mer
                    <svg
                        class="chevron"
                        :class="{ open }"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            stroke-width="1.8"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </nav>

            <div class="toolbar-right">
                <a class="tb-btn tb-btn-secondary" href="/#/login">Logga In</a>
                <a class="tb-btn tb-btn-primary" href="/#/starta-en-grupp"
                    >Starta En Grupp</a
                >
            </div>

            <button
                class="hamburger"
                type="button"
                :aria-label="open ? 'Stäng meny' : 'Meny'"
                :aria-expanded="open"
                @click.stop="toggle"
            >
                <svg
                    v-if="!open"
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
                <svg
                    v-else
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.3333 18.3333L25.6667 25.6667M25.6667 18.3333L18.3333 25.6667M22 5.5C35.2 5.5 38.5 8.8 38.5 22C38.5 35.2 35.2 38.5 22 38.5C8.8 38.5 5.5 35.2 5.5 22C5.5 8.8 8.8 5.5 22 5.5Z"
                        stroke="#F9FAF7"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>

        <transition name="dropdown">
            <div v-if="open" class="dropdown">
                <nav class="dropdown-menu">
                    <a
                        v-for="link in links"
                        :key="link.href"
                        :href="link.href"
                        :class="{ 'mobile-only': link.mobileOnly }"
                        @click="close"
                    >
                        {{ link.label }}
                    </a>
                </nav>

                <div class="dropdown-actions">
                    <a class="login-btn" href="/#/login" @click="close"
                        >Logga In/Registrera Dig</a
                    >
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const logo = new URL(
    "https://raw.githubusercontent.com/WilhelmBerggren/foodsharing-plugin/refs/heads/main/src/assets/fwdloggafss/FSS%20logga%206.4.png",
).href;

// `mobileOnly` links are part of the top-level toolbar on desktop (Om oss) or
// the CTA button (Starta en grupp), so they only appear inside the mobile menu.
const links = [
    { label: "Om oss", href: "#/om-oss", mobileOnly: true },
    { label: "Starta en grupp", href: "#/starta-en-grupp", mobileOnly: true },
    { label: "Hitta din grupp", href: "#/groupPreview", mobileOnly: false },
    { label: "Donera mat", href: "#/donera-mat", mobileOnly: false },
    { label: "Ta emot mat", href: "#/ta-emot-mat", mobileOnly: false },
    { label: "Kontakta oss", href: "#/kontakta-oss", mobileOnly: false },
];

const open = ref(false);
const root = ref<HTMLElement | null>(null);

function toggle() {
    open.value = !open.value;
}
function close() {
    open.value = false;
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
}
function onDocClick(e: MouseEvent) {
    if (open.value && root.value && !root.value.contains(e.target as Node)) {
        close();
    }
}

onMounted(() => {
    window.addEventListener("keydown", onKeydown);
    document.addEventListener("click", onDocClick);
});
onBeforeUnmount(() => {
    window.removeEventListener("keydown", onKeydown);
    document.removeEventListener("click", onDocClick);
});
</script>

<style scoped>
.fss-toolbar {
    position: relative;
    width: 100%;
    background-color: #121212;
    z-index: 1000;
}

.fss-toolbar-inner {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 64px;
    padding: 0 16px;
}

.hero-logo {
    height: 44px;
    filter: brightness(0) saturate(100%) invert(49%) sepia(81%) saturate(313%)
        hue-rotate(36deg) brightness(94%) contrast(91%);
}

/* Desktop nav (hidden on mobile) */
.toolbar-links {
    display: none;
    align-items: center;
    gap: 28px;
    margin-left: 16px;
}

.toolbar-links a,
.mer-trigger {
    color: white;
    text-decoration: none;
    font-family: Arial;
    font-size: 16px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}

.chevron {
    transition: transform 0.2s ease;
}
.chevron.open {
    transform: rotate(180deg);
}

/* Desktop right-side actions (hidden on mobile) */
.toolbar-right {
    margin-left: auto;
    display: none;
    align-items: center;
    gap: 20px;
}

.tb-btn {
    padding: 12px 26px;
    border-radius: 8px;
    font-family: Arial;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    color: #2d3b2d;
    background-color: #7b9737;
    cursor: pointer;
    transition: opacity 0.2s;
    white-space: nowrap;
}
.tb-btn:hover {
    opacity: 0.9;
}

/* Hamburger (mobile only) */
.hamburger {
    display: inline-flex;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
}

/* ---- Dropdown: full-screen panel on mobile ---- */
.dropdown {
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background: #f9faf7;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 40px;
    overflow-y: auto;
}

.dropdown-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 26px;
    margin-top: 24px;
}

.dropdown-menu a {
    color: #121212;
    text-decoration: none;
    font-family: Arial;
    font-size: 22px;
}

.dropdown-actions {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-top: 32px;
}

.login-btn {
    background: #121212;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    padding: 14px 28px;
    font-family: Arial;
    font-weight: 700;
    font-size: 15px;
}

.dropdown-enter-active,
.dropdown-leave-active {
    transition: opacity 0.18s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
    opacity: 0;
}

/* ---- Desktop ---- */
@media screen and (min-width: 640px) {
    .fss-toolbar-inner {
        height: 80px;
        padding: 0 40px;
    }
    .toolbar-links {
        display: flex;
    }
    .toolbar-right {
        display: flex;
    }
    .hamburger {
        display: none;
    }

    /* Dropdown becomes a horizontal bar under the header */
    .dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: auto;
        bottom: auto;
        width: 100%;
        padding: 0;
        display: block;
        overflow: visible;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
    }
    .dropdown-menu {
        flex-direction: row;
        justify-content: center;
        gap: 0;
        margin-top: 0;
    }
    .dropdown-menu a {
        font-size: 16px;
        padding: 22px 40px;
        border-left: 1px solid #d9d9d9;
    }
    .dropdown-menu a:last-child {
        border-right: 1px solid #d9d9d9;
    }
    .dropdown-menu a.mobile-only {
        display: none;
    }
    .dropdown-actions {
        display: none;
    }
}
</style>
