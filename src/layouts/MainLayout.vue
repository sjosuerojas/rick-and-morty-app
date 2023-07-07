<script setup lang="ts" >
import RMHeader from '@/components/common/RMHeader.vue';
import RMCarosel from '@/components/common/RMCarosel.vue';
import RMFooter from '@/components/common/RMFooter.vue';
</script>

<template>
  <r-m-header />
  <main>
    <r-m-carosel />
    <div class="container marketing">
      <slot />
    </div>
    <r-m-footer />
  </main>
</template>
