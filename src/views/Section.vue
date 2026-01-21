<template>
    <div :id="PageId" class="w-full h-auto flex flex-center justify-center flex-col pt-10 px-10 md:px-20">
        <div class="text-2xl text-left text-Primary uppercase pb-5">{{ PageName }}</div>
        <div class="flex flex-wrap flex-row" :class="customClass">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps(['PageId','PageName','customClass']);
</script>

<style scoped>

</style>