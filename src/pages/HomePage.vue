<script setup lang="ts" >
import CharacterBanner from '@/components/characters/CharacterBanner.vue';
import LatestCharacters from '@/components/characters/LatestCharacters.vue';
import CurrentPost from '@/components/shared/CurrentPost.vue';
import AsidePost from '@/components/shared/AsidePost.vue';
</script>

<template>
    <character-banner />
    <latest-characters />
    <div class="row">
        <current-post />
        <aside-post />
    </div>
</template>