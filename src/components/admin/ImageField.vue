<template>
    <div class="image-field">
        <label v-if="label" class="image-field-label">{{ label }}</label>
        <div class="image-field-row">
            <img v-if="preview" :src="preview" alt="" class="image-field-preview" />
            <div class="image-field-controls">
                <input type="file" accept="image/*" @change="onChange" :disabled="uploading" />
                <button v-if="modelValue" type="button" class="link-btn" @click="clear">
                    Ta bort bild
                </button>
                <span v-if="uploading" class="hint">Laddar upp…</span>
                <span v-if="error" class="err">{{ error }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { assetUrl, uploadImage } from "../../cms/client";

const props = defineProps<{ modelValue?: string; label?: string }>();
const emit = defineEmits<{ "update:modelValue": [value: string | undefined] }>();

const uploading = ref(false);
const error = ref("");

const preview = computed(() => assetUrl(props.modelValue));

async function onChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    uploading.value = true;
    error.value = "";
    try {
        const url = await uploadImage(file);
        emit("update:modelValue", url);
    } catch {
        error.value = "Uppladdning misslyckades";
    } finally {
        uploading.value = false;
        input.value = "";
    }
}

function clear() {
    emit("update:modelValue", undefined);
}
</script>

<style scoped>
.image-field {
    margin: 8px 0;
}
.image-field-label {
    display: block;
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 4px;
}
.image-field-row {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}
.image-field-preview {
    width: 96px;
    height: 64px;
    object-fit: cover;
    border-radius: 6px;
    border: 1px solid #ccc;
}
.image-field-controls {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
.link-btn {
    background: none;
    border: none;
    color: #b00;
    cursor: pointer;
    font-size: 12px;
    padding: 0;
    text-align: left;
}
.hint {
    font-size: 12px;
    color: #666;
}
.err {
    font-size: 12px;
    color: #b00;
}
</style>
