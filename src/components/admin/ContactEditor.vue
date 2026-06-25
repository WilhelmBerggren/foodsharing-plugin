<template>
    <div class="contact-editor">
        <fieldset>
            <legend>Kontakta oss</legend>
            <label class="field">
                <span>Sidtitel (hero)</span>
                <input v-model="page.title" type="text" />
            </label>
            <label class="field">
                <span>Rubrik</span>
                <input v-model="page.heading" type="text" />
            </label>
            <label class="field">
                <span>Ingress</span>
                <textarea v-model="page.subtitle" rows="3" />
            </label>
        </fieldset>

        <fieldset>
            <legend>E-postkort</legend>
            <label class="field">
                <span>Rubrik</span>
                <input v-model="page.emailCard.heading" type="text" />
            </label>
            <label class="field">
                <span>E-postadress</span>
                <input v-model="page.emailCard.email" type="text" />
            </label>
            <label class="field">
                <span>Notis</span>
                <input v-model="page.emailCard.note" type="text" />
            </label>
        </fieldset>

        <fieldset>
            <legend>Sociala medier</legend>
            <label class="field">
                <span>Rubrik</span>
                <input v-model="page.socialHeading" type="text" />
            </label>
            <small class="hint"
                >Länkarna till Facebook/Instagram hanteras i koden.</small
            >
        </fieldset>
    </div>
</template>

<script lang="ts" setup>
import type { ContactPage } from "../../cms/types";

defineProps<{ page: ContactPage }>();
</script>

<style scoped>
.contact-editor {
    display: flex;
    flex-direction: column;
    gap: 16px;
}
fieldset {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
}
legend {
    font-weight: 700;
    padding: 0 6px;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin: 8px 0;
}
.field > span {
    font-size: 13px;
    font-weight: 600;
}
.hint {
    color: #666;
}
input,
textarea {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
}
</style>
