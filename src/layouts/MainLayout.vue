<script setup lang="ts" >
import RMThemeButton from '@/components/common/RMThemeButton.vue';
import RMHeader from '@/components/common/RMHeader.vue';
import RMFooter from '@/components/common/RMFooter.vue';
</script>

<template>
  <r-m-theme-button />
  <r-m-header />
  <main class="container">
    <slot />
  </main>
  <r-m-footer />
</template>
