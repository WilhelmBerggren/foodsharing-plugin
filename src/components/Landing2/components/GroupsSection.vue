<template>
    <section class="groups-section">
        <h1>Grupper</h1>
        <div class="groups-section-content">
            <div class="group-item" v-for="group in groupsData" :key="group.id">
                <a :href="`#/group/${group.id}`">
                    <img
                        v-if="group.photo_urls.thumbnail"
                        :src="group.photo_urls.thumbnail"
                        alt="Group avatar"
                    />
                    <div class="group-image-placeholder" v-else></div>
                    <div class="group-info">
                        <h2>{{ group.name }}</h2>
                        <span>{{ group.member_count }} Members</span>
                    </div>
                    <p>{{ group.public_description }}</p>
                </a>
            </div>
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
    h1 {
        font-family: Georgia;
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 150%;
        letter-spacing: -1.9%;
        padding-top: 32px;
        padding-left: 32px;
    }
    .groups-section-content {
        display: flex;
        flex-direction: row;
        gap: 32px;
        overflow-y: scroll;
        height: 460px;
        width: 100%;
        padding: 32px;

        .group-item {
            display: flex;
            flex-direction: column;
            flex-shrink: 0;
            gap: 0;
            width: 272px;
            height: 268px;
            background-color: white;
            border: 1px solid black;
            border-radius: 12px;
            overflow: clip;
            a {
                img,
                .group-image-placeholder {
                    width: 100%;
                    height: 80px;
                    background-color: white;
                    object-fit: contain;
                }

                .group-info {
                    background-color: #121212;
                    padding-bottom: 16px;

                    h2 {
                        font-family: Roboto;
                        font-weight: 500;
                        font-style: Medium;
                        font-size: 20px;
                        line-height: 32px;
                        letter-spacing: 0.25px;
                        vertical-align: middle;
                        color: white;
                        margin: 0;
                        margin-left: 16px;
                        text-overflow: ellipsis;
                        height: 22px;
                        width: 100%;
                    }

                    span {
                        font-family: Roboto;
                        font-weight: 500;
                        font-style: Medium;
                        font-size: 14px;
                        line-height: 22px;
                        letter-spacing: 0.1px;
                        vertical-align: middle;
                        color: white;
                        text-overflow: ellipsis;
                        margin: 16px;
                    }
                }

                p {
                    margin: 16px;
                    font-family: Roboto;
                    font-weight: 400;
                    font-style: Regular;
                    font-size: 14px;
                    line-height: 21px;
                    letter-spacing: 0px;
                    vertical-align: middle;
                    text-overflow: ellipsis;
                }
            }
        }
    }
}
</style>
