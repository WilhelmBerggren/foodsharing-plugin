<template>
    <component :is="svgIcons[name]" v-if="svgIcons[name]" />
    <img v-else-if="pngIcons[name]" :src="pngIcons[name]" alt="" />
</template>

<script setup lang="ts">
import IconCalendar from "./IconCalendar.vue";
import IconApplePail from "./IconApplePail.vue";
import IconDeliveryBox from "./IconDeliveryBox.vue";
import type { Component } from "vue";
import type { IconName } from "../../cms/types";

defineProps<{ name: IconName }>();

// Inline SVG icons (used by the process steps).
const svgIcons: Partial<Record<IconName, Component>> = {
    calendar: IconCalendar,
    "apple-pail": IconApplePail,
    "delivery-box": IconDeliveryBox,
};

// Raster icons served from the repo (used by the benefits grid).
const ghIcon = (file: string) =>
    `https://github.com/WilhelmBerggren/foodsharing-plugin/blob/main/src/assets/icons/${file}?raw=true`;
const pngIcons: Partial<Record<IconName, string>> = {
    handshake: ghIcon("handshake_icon.png"),
    trash: ghIcon("trash_icon.png"),
    tree: ghIcon("tree_icon.png"),
    "thumbs-up": ghIcon("thumbs_up_icon.png"),
};
</script>
