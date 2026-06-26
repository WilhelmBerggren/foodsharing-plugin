<template>
    <section class="groups-section">
        <h1>Grupper</h1>
        <div class="groups-section-content">
            <a
                class="group-item"
                v-for="group in groupsData"
                :key="group.id"
                :href="`#/group/${group.id}`"
            >
                <img
                    v-if="group.photo_urls.thumbnail"
                    :src="group.photo_urls.thumbnail"
                    alt=""
                    class="group-image"
                />
                <div class="group-image-placeholder" v-else></div>
                <div class="group-info">
                    <h2>{{ group.name }}</h2>
                    <span>{{ group.member_count }} Members</span>
                </div>
                <p>{{ group.public_description }}</p>
            </a>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface Group {
    id: string;
    name: string;
    member_count: number;
    public_description: string;
    photo_urls: {
        thumbnail?: string;
    };
}

const groupsData = ref<Group[]>([]);

const fetchGroupData = async () => {
    try {
        const response = await fetch(
            "/api/bootstrap?fields=groups%2Cplaces%2Cgeoip",
        );
        const data = await response.json();
        groupsData.value = [...data.groups].sort(
            (a, b) => b.member_count - a.member_count,
        );
    } catch (e) {
        console.error("Failed to fetch group data:", e);
    }
};

onMounted(fetchGroupData);
</script>

<style scoped>
.groups-section {
    background-color: #b37a1b;
    text-align: left;
    padding: 16px 0 56px;
}

.groups-section > h1 {
    font-family: Georgia, serif;
    font-weight: 400;
    font-size: 28px;
    line-height: 150%;
    margin: 0;
    padding: 32px 32px 8px;
    color: #1a1a1a;
}

.groups-section-content {
    display: flex;
    flex-direction: row;
    gap: 24px;
    overflow-x: auto;
    padding: 24px 32px;
}

.group-item {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    width: 300px;
    background-color: white;
    border: 1px solid #121212;
    border-radius: 12px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
}

.group-image,
.group-image-placeholder {
    width: 100%;
    height: 132px;
    object-fit: cover;
    display: block;
}

.group-image-placeholder {
    background: linear-gradient(135deg, #cdbb95, #b9a071);
}

.group-info {
    background-color: #121212;
    padding: 12px 16px;
}

.group-info h2 {
    font-family: Roboto, Arial, sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.3;
    color: white;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.group-info span {
    display: block;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 13px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 2px;
}

.group-item p {
    margin: 0;
    padding: 16px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    color: #333;
    /* Keep cards even by clamping the description to three lines. */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
