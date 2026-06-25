<template>
    <fieldset>
        <legend>Partnersektioner (logotyper)</legend>

        <div v-for="(sec, si) in sections" :key="si" class="partner-card">
            <div class="item-head">
                <strong>{{ sec.title || "Sektion" }} #{{ si + 1 }}</strong>
                <span class="spacer" />
                <button type="button" class="ghost" :disabled="si === 0" @click="move(sections, si, -1)">↑</button>
                <button type="button" class="ghost" :disabled="si === sections.length - 1" @click="move(sections, si, 1)">↓</button>
                <button type="button" class="link-btn" @click="sections.splice(si, 1)">Ta bort sektion</button>
            </div>

            <div class="row">
                <label class="field grow">
                    <span>Rubrik</span>
                    <input v-model="sec.title" type="text" placeholder="t.ex. Drivs av:" />
                </label>
                <label class="inline">
                    Färg
                    <select v-model="sec.variant">
                        <option value="even">Vit</option>
                        <option value="odd">Orange</option>
                    </select>
                </label>
            </div>

            <div v-for="(item, ii) in sec.items" :key="ii" class="logo-row">
                <ImageField v-model="item.logo" label="Logotyp" />
                <div class="logo-fields">
                    <input v-model="item.name" placeholder="Namn" />
                    <input v-model="item.linkLabel" placeholder="Länktext (t.ex. solikyl.se)" />
                    <input v-model="item.url" placeholder="Länk (https://…)" />
                </div>
                <div class="logo-actions">
                    <button type="button" class="ghost" :disabled="ii === 0" @click="move(sec.items, ii, -1)">↑</button>
                    <button type="button" class="ghost" :disabled="ii === sec.items.length - 1" @click="move(sec.items, ii, 1)">↓</button>
                    <button type="button" class="link-btn" @click="sec.items.splice(ii, 1)">×</button>
                </div>
            </div>
            <button type="button" class="ghost" @click="sec.items.push(emptyPartnerItem())">+ logotyp</button>
        </div>

        <button type="button" class="ghost" @click="sections.push(emptyPartnerSection())">+ partnersektion</button>
    </fieldset>
</template>

<script lang="ts" setup>
import {
    emptyPartnerItem,
    emptyPartnerSection,
    type PartnerSection,
} from "../../cms/types";
import ImageField from "./ImageField.vue";

defineProps<{ sections: PartnerSection[] }>();

function move<T>(arr: T[], i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    const moved = arr.splice(i, 1)[0];
    if (moved) arr.splice(j, 0, moved);
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
.partner-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    background: #fafafa;
}
.item-head {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
}
.spacer {
    flex: 1;
}
.row {
    display: flex;
    gap: 12px;
    align-items: flex-end;
    margin-bottom: 8px;
}
.field {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.field > span {
    font-size: 13px;
    font-weight: 600;
}
.grow {
    flex: 1;
}
.inline {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
}
.logo-row {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    padding: 8px 0;
    border-top: 1px dashed #e0e0e0;
}
.logo-fields {
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
}
.logo-actions {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
input,
select {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
}
select {
    width: auto;
}
button {
    font: inherit;
    padding: 8px 14px;
    border: none;
    border-radius: 6px;
    background: #7b9737;
    color: #fff;
    cursor: pointer;
}
button:disabled {
    opacity: 0.6;
    cursor: default;
}
button.ghost {
    background: #eee;
    color: #333;
    padding: 4px 10px;
}
button.link-btn {
    background: none;
    color: #b00;
    padding: 0 4px;
}
</style>
