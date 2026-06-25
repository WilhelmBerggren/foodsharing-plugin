<template>
    <div class="admin">
        <!-- Login -->
        <div v-if="!authed" class="admin-login">
            <h1>Foodsharing CMS</h1>
            <p>Logga in för att redigera sidornas innehåll.</p>
            <form @submit.prevent="doLogin">
                <input
                    v-model="password"
                    type="password"
                    placeholder="Lösenord"
                    autocomplete="current-password"
                />
                <button type="submit" :disabled="loggingIn">
                    {{ loggingIn ? "Loggar in…" : "Logga in" }}
                </button>
            </form>
            <p v-if="loginError" class="err">{{ loginError }}</p>
        </div>

        <!-- Editor -->
        <div v-else class="admin-editor">
            <header class="admin-bar">
                <strong>Foodsharing CMS</strong>
                <select v-model="selectedSlug" @change="loadSelected">
                    <option disabled value="">Välj en sida…</option>
                    <option v-for="p in pages" :key="p.slug" :value="p.slug">
                        {{ p.title || p.slug }}
                    </option>
                </select>
                <span class="spacer" />
                <button class="ghost" type="button" @click="doLogout">Logga ut</button>
            </header>

            <div
                v-if="draft || doneraDraft || guideDraft || contactDraft"
                class="form"
            >
                <template v-if="draft">
                <label class="field">
                    <span>Sidtitel</span>
                    <input v-model="draft.title" type="text" />
                </label>

                <!-- Hero -->
                <fieldset>
                    <legend>
                        Hero
                        <label class="inline">
                            <input type="checkbox" :checked="!!draft.hero" @change="toggleHero" />
                            visa
                        </label>
                    </legend>
                    <template v-if="draft.hero">
                        <ImageField v-model="draft.hero.banner" label="Bakgrundsbild" />
                        <label class="field">
                            <span>Rubrikrader (en per rad)</span>
                            <textarea
                                :value="draft.hero.headingLines.join('\n')"
                                rows="2"
                                @input="draft.hero.headingLines = lines($event)"
                            />
                            <small class="hint">
                                Omge ord med *asterisker* för att framhäva dem
                                (t.ex. Mer *gemenskap*).
                            </small>
                        </label>
                        <label class="field">
                            <span>Underrubrik</span>
                            <input v-model="draft.hero.subtitle" type="text" />
                        </label>
                        <div class="buttons-editor">
                            <span class="field-label">Knappar</span>
                            <div v-for="(btn, i) in draft.hero.buttons" :key="i" class="btn-row">
                                <input v-model="btn.label" placeholder="Text" />
                                <select v-model="btn.style">
                                    <option value="primary">Grön</option>
                                    <option value="secondary">Mörk</option>
                                </select>
                                <input v-model="btn.href" placeholder="Länk (valfri)" />
                                <button type="button" class="link-btn" @click="draft.hero.buttons.splice(i, 1)">×</button>
                            </div>
                            <button type="button" class="ghost" @click="addButton">+ knapp</button>
                        </div>
                    </template>
                </fieldset>

                <!-- Sections -->
                <fieldset>
                    <legend>Innehållssektioner</legend>
                    <div v-for="(section, si) in draft.sections" :key="si" class="section-card">
                        <div class="section-head">
                            <strong>#{{ si + 1 }}</strong>
                            <span class="spacer" />
                            <button type="button" class="ghost" :disabled="si === 0" @click="move(si, -1)">↑</button>
                            <button type="button" class="ghost" :disabled="si === draft.sections.length - 1" @click="move(si, 1)">↓</button>
                            <button type="button" class="link-btn" @click="draft.sections.splice(si, 1)">Ta bort</button>
                        </div>
                        <label class="field">
                            <span>Titel</span>
                            <input v-model="section.title" type="text" />
                        </label>
                        <label class="field">
                            <span>Text (ett stycke per rad)</span>
                            <textarea
                                :value="section.text.join('\n')"
                                rows="4"
                                @input="section.text = lines($event)"
                            />
                        </label>
                        <div class="row">
                            <label class="inline">
                                Färg
                                <select v-model="section.variant">
                                    <option value="even">Vit</option>
                                    <option value="odd">Orange</option>
                                </select>
                            </label>
                            <label class="inline">
                                <input type="checkbox" v-model="section.hasButton" /> knapp
                            </label>
                            <input v-if="section.hasButton" v-model="section.buttonText" placeholder="Knapptext" />
                            <input v-if="section.hasButton" v-model="section.buttonHref" placeholder="Knapplänk (#/...)" />
                        </div>
                        <div class="row">
                            <ImageField v-model="section.bgImage" label="Bakgrundsbild" />
                            <ImageField v-model="section.bannerImg" label="Bannerbild" />
                        </div>
                    </div>
                    <button type="button" class="ghost" @click="addSection">+ sektion</button>
                </fieldset>

                <PartnerSectionsEditor :sections="draft.partnerSections" />

                <LinkSectionsEditor :sections="draft.linkSections" />

                <label class="inline">
                    <input type="checkbox" v-model="draft.showGroups" /> Visa grupp-sektionen
                </label>
                </template>

                <DoneraEditor v-else-if="doneraDraft" :page="doneraDraft" />

                <GuideEditor v-else-if="guideDraft" :page="guideDraft" />

                <ContactEditor
                    v-else-if="contactDraft"
                    :page="contactDraft"
                />

                <div class="actions">
                    <button type="button" :disabled="saving" @click="save">
                        {{ saving ? "Sparar…" : "Spara" }}
                    </button>
                    <span v-if="saveMsg" :class="saveOk ? 'ok' : 'err'">{{ saveMsg }}</span>
                </div>
            </div>
            <p v-else class="hint">Välj en sida ovan för att börja redigera.</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useQueryClient } from "@tanstack/vue-query";
import {
    fetchPage,
    fetchPages,
    getToken,
    login,
    logout,
    savePage,
} from "../../cms/client";
import {
    emptySection,
    type Page,
    type GenericPage,
    type DoneraPage,
    type GuidePage,
    type ContactPage,
} from "../../cms/types";
import ImageField from "./ImageField.vue";
import DoneraEditor from "./DoneraEditor.vue";
import GuideEditor from "./GuideEditor.vue";
import ContactEditor from "./ContactEditor.vue";
import PartnerSectionsEditor from "./PartnerSectionsEditor.vue";
import LinkSectionsEditor from "./LinkSectionsEditor.vue";

const queryClient = useQueryClient();

const authed = ref(!!getToken());
const password = ref("");
const loggingIn = ref(false);
const loginError = ref("");

const pages = ref<Page[]>([]);
const selectedSlug = ref("");
const draft = ref<GenericPage | null>(null);
const doneraDraft = ref<DoneraPage | null>(null);
const guideDraft = ref<GuidePage | null>(null);
const contactDraft = ref<ContactPage | null>(null);
const saving = ref(false);
const saveMsg = ref("");
const saveOk = ref(false);

onMounted(() => {
    if (authed.value) void loadPages();
});

async function doLogin() {
    loggingIn.value = true;
    loginError.value = "";
    const ok = await login(password.value);
    loggingIn.value = false;
    if (ok) {
        authed.value = true;
        password.value = "";
        await loadPages();
    } else {
        loginError.value = "Fel lösenord";
    }
}

function doLogout() {
    logout();
    authed.value = false;
    draft.value = null;
    doneraDraft.value = null;
    guideDraft.value = null;
    contactDraft.value = null;
    selectedSlug.value = "";
}

async function loadPages() {
    pages.value = await fetchPages();
}

async function loadSelected() {
    if (!selectedSlug.value) return;
    saveMsg.value = "";
    const page = await fetchPage(selectedSlug.value);
    const clone = JSON.parse(JSON.stringify(page)) as Page;
    draft.value = null;
    doneraDraft.value = null;
    guideDraft.value = null;
    contactDraft.value = null;
    if (clone.kind === "donera") {
        doneraDraft.value = clone;
    } else if (clone.kind === "guide") {
        guideDraft.value = clone;
    } else if (clone.kind === "contact") {
        contactDraft.value = clone;
    } else {
        draft.value = clone;
    }
}

function lines(e: Event): string[] {
    return (e.target as HTMLTextAreaElement).value.split("\n");
}

function toggleHero(e: Event) {
    if (!draft.value) return;
    if ((e.target as HTMLInputElement).checked) {
        draft.value.hero = { banner: "", headingLines: [], buttons: [] };
    } else {
        draft.value.hero = undefined;
    }
}

function addButton() {
    draft.value?.hero?.buttons.push({ label: "", style: "primary" });
}

function addSection() {
    draft.value?.sections.push(emptySection());
}

function move(i: number, dir: -1 | 1) {
    if (!draft.value) return;
    const arr = draft.value.sections;
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    const moved = arr.splice(i, 1)[0];
    if (moved) arr.splice(j, 0, moved);
}

async function save() {
    const current =
        doneraDraft.value ??
        guideDraft.value ??
        contactDraft.value ??
        draft.value;
    if (!current) return;
    saving.value = true;
    saveMsg.value = "";
    try {
        const saved = await savePage(current);
        // Refresh the public page cache so live pages pick up the change.
        await queryClient.invalidateQueries({ queryKey: ["cms-page"] });
        await loadPages();
        saveOk.value = true;
        saveMsg.value = `Sparat: ${saved.slug}`;
    } catch {
        saveOk.value = false;
        saveMsg.value = "Kunde inte spara";
    } finally {
        saving.value = false;
    }
}
</script>

<style scoped>
.admin {
    max-width: 760px;
    margin: 0 auto;
    padding: 24px 16px 64px;
    font-family: Arial, sans-serif;
    color: #222;
}
.admin-login {
    max-width: 320px;
    margin: 64px auto;
    text-align: center;
}
.admin-login form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}
.admin-bar {
    display: flex;
    align-items: center;
    gap: 12px;
    padding-bottom: 16px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 16px;
}
.spacer {
    flex: 1;
}
.form {
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
.inline {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
}
.row {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
}
.section-card {
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 12px;
    background: #fafafa;
}
.section-head {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
}
.btn-row {
    display: flex;
    gap: 6px;
    margin: 4px 0;
}
input,
textarea,
select {
    font: inherit;
    padding: 6px 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
}
input[type="checkbox"] {
    padding: 0;
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
.actions {
    display: flex;
    align-items: center;
    gap: 12px;
}
.ok {
    color: #2c7a2c;
}
.err {
    color: #b00;
}
.hint {
    color: #666;
}
</style>
