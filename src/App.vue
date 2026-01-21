<script setup lang="ts">
import RightSide from './layers/RightSide.vue'
import LeftSide from './layers/LeftSide.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-1 xl:grid-cols-3 min-h-screen pb-30 md:pb-0">
    <LeftSide />
    <RightSide />
    <NavBar class="md:hidden flex justify-center mt-4 fixed bottom-0"/>
  </div>
</template>
