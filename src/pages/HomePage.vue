<script setup lang="ts" >
import BannerCharacter from '@/components/characters/BannerCharacter.vue';
import LatestCharacters from '@/components/characters/LatestCharacters.vue';
import CurrentPost from '@/components/characters/CurrentPost.vue';
import AsidePost from '@/components/characters/AsidePost.vue';
</script>

<template>
    <banner-character />
    <latest-characters />
    <div class="row g-5">
        <current-post />
        <aside-post />
    </div>
</template>