<template>
    <div class="guide-editor">
        <fieldset>
            <legend>Guide</legend>
            <label class="field">
                <span>Titel</span>
                <input v-model="page.title" type="text" />
            </label>
            <ImageField v-model="page.banner" label="Bannerbild" />
            <label class="field">
                <span>Brödtext (ett stycke per rad)</span>
                <textarea
                    :value="page.body.join('\n')"
                    rows="10"
                    @input="page.body = lines($event)"
                />
            </label>
        </fieldset>
    </div>
</template>

<script lang="ts" setup>
import type { GuidePage } from "../../cms/types";
import ImageField from "./ImageField.vue";

defineProps<{ page: GuidePage }>();

function lines(e: Event): string[] {
    return (e.target as HTMLTextAreaElement).value.split("\n");
}
</script>

<style scoped>
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
input,
textarea {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
}
</style>
