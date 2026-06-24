<template>
    <footer>
        <dl>
            <dt>Meny</dt>
            <dd>Om oss</dd>
            <dd>Starta en grupp</dd>
            <dd>Bli volontär</dd>
            <dd>Donera mat</dd>
            <dd>Ta emot mat</dd>
        </dl>
        <div class="footer-socials">
            <dl>
                <dt>Följ oss</dt>
                <dd>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_508_3821)">
                            <g clip-path="url(#clip1_508_3821)">
                                <path d="M12.833 18.3333V25.6667H18.333V38.5H25.6663V25.6667H31.1663L32.9997 18.3333H25.6663V14.6667C25.6663 14.1804 25.8595 13.7141 26.2033 13.3703C26.5471 13.0265 27.0134 12.8333 27.4997 12.8333H32.9997V5.5H27.4997C25.0685 5.5 22.7369 6.46577 21.0179 8.18485C19.2988 9.90394 18.333 12.2355 18.333 14.6667V18.3333H12.833Z" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_508_3821"><rect width="44" height="44" fill="white" /></clipPath>
                            <clipPath id="clip1_508_3821"><rect width="44" height="44" rx="8" fill="white" /></clipPath>
                        </defs>
                    </svg>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_508_3820)">
                            <g clip-path="url(#clip1_508_3820)">
                                <path d="M30.2497 13.7502V13.7685M7.33301 14.6668C7.33301 12.7219 8.10562 10.8566 9.48089 9.48138C10.8562 8.10611 12.7214 7.3335 14.6663 7.3335H29.333C31.2779 7.3335 33.1432 8.10611 34.5185 9.48138C35.8937 10.8566 36.6663 12.7219 36.6663 14.6668V29.3335C36.6663 31.2784 35.8937 33.1437 34.5185 34.5189C33.1432 35.8942 31.2779 36.6668 29.333 36.6668H14.6663C12.7214 36.6668 10.8562 35.8942 9.48089 34.5189C8.10562 33.1437 7.33301 31.2784 7.33301 29.3335V14.6668ZM16.4997 22.0002C16.4997 23.4589 17.0791 24.8578 18.1106 25.8893C19.142 26.9207 20.541 27.5002 21.9997 27.5002C23.4584 27.5002 24.8573 26.9207 25.8888 25.8893C26.9202 24.8578 27.4997 23.4589 27.4997 22.0002C27.4997 20.5415 26.9202 19.1425 25.8888 18.1111C24.8573 17.0796 23.4584 16.5002 21.9997 16.5002C20.541 16.5002 19.142 17.0796 18.1106 18.1111C17.0791 19.1425 16.4997 20.5415 16.4997 22.0002Z" stroke="#121212" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_508_3820"><rect width="44" height="44" fill="white" /></clipPath>
                            <clipPath id="clip1_508_3820"><rect width="44" height="44" fill="white" /></clipPath>
                        </defs>
                    </svg>
                </dd>
            </dl>
        </div>
        <dl>
            <dt>Kontakta oss</dt>
            <dd>info@foodsharing.se</dd>
            <dd>Göteborg, Sverige</dd>
        </dl>
        <hr />
        <p>
            Menu @ Foodsharing Sweden, tillsammans räddar vi mat och skapar
            gemenskap.
        </p>
    </footer>
</template>

<style scoped>
footer {
    padding: 4rem 2rem;
    background-color: #f9faf7;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    text-align: center;
}

dl {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

dt {
    font-weight: bold;
    margin-bottom: 0.5rem;
}

dd {
    margin: 0;
    color: #666;
}

.footer-socials {
    display: flex;
    gap: 1rem;
}

.footer-socials svg {
    margin: 0 10px;
    cursor: pointer;
}

hr {
    width: 100%;
    border: 0;
    border-top: 1px solid #eee;
    margin: 2rem 0;
}

p {
    font-size: 0.9rem;
    color: #999;
}
</style>
