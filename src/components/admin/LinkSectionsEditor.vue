<template>
    <fieldset>
        <legend>Länksektioner ("Läs mer")</legend>

        <div v-for="(sec, si) in sections" :key="si" class="link-card">
            <div class="item-head">
                <strong>{{ sec.title || "Sektion" }} #{{ si + 1 }}</strong>
                <span class="spacer" />
                <button type="button" class="ghost" :disabled="si === 0" @click="move(sections, si, -1)">↑</button>
                <button type="button" class="ghost" :disabled="si === sections.length - 1" @click="move(sections, si, 1)">↓</button>
                <button type="button" class="link-btn" @click="sections.splice(si, 1)">Ta bort sektion</button>
            </div>

            <label class="field">
                <span>Rubrik</span>
                <input v-model="sec.title" type="text" placeholder="t.ex. Läs mer om...." />
            </label>

            <div v-for="(item, ii) in sec.items" :key="ii" class="item-row">
                <input v-model="item.label" placeholder="Etikett" />
                <input v-model="item.href" placeholder="Länk (#/...)" />
                <button type="button" class="ghost" :disabled="ii === 0" @click="move(sec.items, ii, -1)">↑</button>
                <button type="button" class="ghost" :disabled="ii === sec.items.length - 1" @click="move(sec.items, ii, 1)">↓</button>
                <button type="button" class="link-btn" @click="sec.items.splice(ii, 1)">×</button>
            </div>
            <button type="button" class="ghost" @click="sec.items.push(emptyLinkItem())">+ länk</button>
        </div>

        <button type="button" class="ghost" @click="sections.push(emptyLinkSection())">+ länksektion</button>
    </fieldset>
</template>

<script lang="ts" setup>
import {
    emptyLinkItem,
    emptyLinkSection,
    type LinkSection,
} from "../../cms/types";

defineProps<{ sections: LinkSection[] }>();

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
.link-card {
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
.field {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 8px;
}
.field > span {
    font-size: 13px;
    font-weight: 600;
}
.item-row {
    display: flex;
    gap: 6px;
    align-items: center;
    margin: 6px 0;
}
.item-row input:first-child {
    flex: 1;
}
input {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    flex: 1;
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
