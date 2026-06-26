<template>
    <footer>
        <div class="footer-inner">
            <div class="footer-cols">
                <dl class="footer-menu">
                    <dt>Meny</dt>
                    <dd><a href="#/om-oss">Om oss</a></dd>
                    <dd><a href="#/starta-en-grupp">Starta en grupp</a></dd>
                    <dd><a href="#/bli-volontar">Bli volontär</a></dd>
                    <dd><a href="#/donera-mat">Donera mat</a></dd>
                    <dd><a href="#/ta-emot-mat">Ta emot mat</a></dd>
                </dl>

                <dl class="footer-contact">
                    <dt>Kontakta oss</dt>
                    <dd>info@foodsharing.se</dd>
                    <dd>Göteborg, Sverige</dd>
                </dl>

                <dl class="footer-socials">
                    <dt>Följ oss</dt>
                    <dd>
                        <a
                            href="https://www.facebook.com/people/Foodsharing-Sweden/61584366521201/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                        >
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
                                        <rect
                                            width="44"
                                            height="44"
                                            fill="white"
                                        />
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
                        </a>
                        <a
                            href="https://www.instagram.com/foodsharingsweden/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
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
                                        <rect
                                            width="44"
                                            height="44"
                                            fill="white"
                                        />
                                    </clipPath>
                                    <clipPath id="clip1_508_3820">
                                        <rect
                                            width="44"
                                            height="44"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </dd>
                </dl>
            </div>

            <div class="footer-bottom">
                <hr />
                <p>
                    @ Foodsharing Sweden, tillsammans räddar vi mat och skapar
                    gemenskap.
                </p>
            </div>
        </div>
    </footer>
</template>
<script lang="ts" setup></script>

<style scoped>
footer {
    width: 100%;
    background-color: #121212;
    color: white;
    padding: 4rem 2rem 2rem;
}

.footer-inner {
    max-width: 1320px;
    margin: 0 auto;
}

.footer-cols {
    display: grid;
    align-items: start;
    gap: 2.5rem;
    /* Mobile: Meny spans left, Följ oss + Kontakta oss stack on the right. */
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
        "menu follow"
        "menu contact";
}

@media (min-width: 768px) {
    .footer-cols {
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: "menu contact follow";
    }
}

.footer-menu {
    grid-area: menu;
}
.footer-contact {
    grid-area: contact;
}
.footer-socials {
    grid-area: follow;
}

dl {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    margin: 0;
}

dt {
    font-family: Arial;
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.75rem;
}

dd {
    margin: 0;
    font-family: Arial;
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.85);
}

.footer-menu a {
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
}

.footer-menu a:hover {
    color: #ffffff;
}

.footer-socials dd {
    display: flex;
    gap: 16px;
}

.footer-socials a {
    display: inline-flex;
    line-height: 0;
}

.footer-socials svg {
    background-color: #7b9737;
    border-radius: 8px;
    cursor: pointer;
}

.footer-bottom {
    margin-top: 3rem;
}

.footer-bottom hr {
    border: 0;
    border-top: 1px solid #3a3a3a;
    margin: 0 0 1.75rem;
}

.footer-bottom p {
    text-align: center;
    color: #9a9a9a;
    font-family: Arial;
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
}
</style>
