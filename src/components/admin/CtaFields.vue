<template>
    <div class="cta-fields">
        <label class="field">
            <span>Rubrik</span>
            <input v-model="cta.title" type="text" />
        </label>
        <label class="field">
            <span>Text</span>
            <textarea v-model="cta.text" rows="2" />
        </label>
        <div class="row">
            <label class="field grow">
                <span>Knapptext</span>
                <input v-model="cta.buttonLabel" type="text" />
            </label>
            <label class="field grow">
                <span>Knapplänk</span>
                <input v-model="cta.buttonHref" type="text" placeholder="#/..." />
            </label>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Cta } from "../../cms/types";

defineProps<{ cta: Cta }>();
</script>

<style scoped>
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
.row {
    display: flex;
    gap: 12px;
}
.grow {
    flex: 1;
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
