<template>
    <div class="donera-editor">
        <!-- Hero -->
        <fieldset>
            <legend>Hero</legend>
            <label class="field">
                <span>Titel</span>
                <input v-model="page.hero.title" type="text" />
            </label>
            <label class="field">
                <span>Underrubrik</span>
                <input v-model="page.hero.subtitle" type="text" />
            </label>
        </fieldset>

        <!-- Intro + steps -->
        <fieldset>
            <legend>För regelbundna donationer</legend>
            <label class="field">
                <span>Rubrik</span>
                <input v-model="page.intro.title" type="text" />
            </label>
            <label class="field">
                <span>Stycken (ett per rad)</span>
                <textarea
                    :value="page.intro.paragraphs.join('\n')"
                    rows="4"
                    @input="page.intro.paragraphs = lines($event)"
                />
            </label>
            <label class="field">
                <span>Inledning till stegen</span>
                <input v-model="page.intro.lead" type="text" />
            </label>

            <span class="field-label">Steg</span>
            <div v-for="(step, i) in page.steps" :key="i" class="item-card">
                <div class="item-head">
                    <strong>#{{ i + 1 }}</strong>
                    <span class="spacer" />
                    <button type="button" class="ghost" :disabled="i === 0" @click="move(page.steps, i, -1)">↑</button>
                    <button type="button" class="ghost" :disabled="i === page.steps.length - 1" @click="move(page.steps, i, 1)">↓</button>
                    <button type="button" class="link-btn" @click="page.steps.splice(i, 1)">Ta bort</button>
                </div>
                <label class="inline">
                    Ikon
                    <select v-model="step.icon">
                        <option v-for="opt in ICON_OPTIONS" :key="opt.name" :value="opt.name">
                            {{ opt.label }}
                        </option>
                    </select>
                </label>
                <textarea v-model="step.text" rows="2" placeholder="Text" />
            </div>
            <button type="button" class="ghost" @click="page.steps.push(emptyIconItem())">+ steg</button>
        </fieldset>

        <!-- Benefits -->
        <fieldset>
            <legend>Några fördelar</legend>
            <label class="field">
                <span>Rubrik</span>
                <input v-model="page.benefitsTitle" type="text" />
            </label>
            <div v-for="(b, i) in page.benefits" :key="i" class="item-card">
                <div class="item-head">
                    <strong>#{{ i + 1 }}</strong>
                    <span class="spacer" />
                    <button type="button" class="ghost" :disabled="i === 0" @click="move(page.benefits, i, -1)">↑</button>
                    <button type="button" class="ghost" :disabled="i === page.benefits.length - 1" @click="move(page.benefits, i, 1)">↓</button>
                    <button type="button" class="link-btn" @click="page.benefits.splice(i, 1)">Ta bort</button>
                </div>
                <label class="inline">
                    Ikon
                    <select v-model="b.icon">
                        <option v-for="opt in ICON_OPTIONS" :key="opt.name" :value="opt.name">
                            {{ opt.label }}
                        </option>
                    </select>
                </label>
                <textarea v-model="b.text" rows="2" placeholder="Text" />
            </div>
            <button type="button" class="ghost" @click="page.benefits.push(emptyIconItem())">+ fördel</button>
        </fieldset>

        <!-- CTA blocks -->
        <fieldset>
            <legend>För tillfälliga donationer</legend>
            <CtaFields :cta="page.temporary" />
        </fieldset>
        <fieldset>
            <legend>Hör av dig!</legend>
            <CtaFields :cta="page.contact" />
        </fieldset>
    </div>
</template>

<script lang="ts" setup>
import { ICON_OPTIONS, emptyIconItem, type DoneraPage, type IconItem } from "../../cms/types";
import CtaFields from "./CtaFields.vue";

// The page object is reactive; mutating its fields/arrays here updates the
// parent's draft directly (it's the same object reference).
defineProps<{ page: DoneraPage }>();

function lines(e: Event): string[] {
    return (e.target as HTMLTextAreaElement).value.split("\n");
}

function move(arr: IconItem[], i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    const moved = arr.splice(i, 1)[0];
    if (moved) arr.splice(j, 0, moved);
}
</script>

<style scoped>
.donera-editor {
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
.field > span,
.field-label {
    font-size: 13px;
    font-weight: 600;
}
.field-label {
    display: block;
    margin: 12px 0 6px;
}
.inline {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    margin-bottom: 6px;
}
.item-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    background: #fafafa;
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.item-head {
    display: flex;
    align-items: center;
    gap: 6px;
}
.spacer {
    flex: 1;
}
input,
textarea,
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
