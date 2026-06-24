<template>
    <section class="groups-section">
        <h1>Grupper</h1>
        <div class="groups-section-content">
            <div
                class="group-item"
                v-for="group in groups"
                :key="group.id"
            >
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
interface Group {
    id: string;
    name: string;
    member_count: number;
    public_description: string;
    photo_urls: {
        thumbnail?: string;
    };
}

interface Props {
    groups: Group[];
}

defineProps<Props>();
</script>

<style scoped>
.groups-section {
    padding: 4rem 0;
    text-align: center;
    background-color: white;

    h1 {
        font-size: 2.5rem;
        margin-bottom: 2rem;
    }

    .groups-section-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        padding: 0 2rem;
    }

    .group-item a {
        text-decoration: none;
        color: inherit;
        display: block;
        border: 1px solid #eee;
        border-radius: 12px;
        padding: 1.5rem;
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .group-item a:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .group-item img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 1rem;
    }

    .group-image-placeholder {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #ddd;
        margin-bottom: 1rem;
    }

    .group-info {
        margin-bottom: 1rem;
    }

    .group-info h2 {
        font-size: 1.25rem;
        margin: 0;
    }

    .group-info span {
        font-size: 0.9rem;
        color: #666;
    }

    .group-item p {
        font-size: 0.95rem;
        line-height: 1.5;
    }
}
</style>
