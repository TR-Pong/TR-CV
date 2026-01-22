<template>
    <div class="bg-white rounded border-BorderOffwhite shadow-md w-full md:w-auto min-w-90 md:min-w-[calc(40%)] flex-1 py-5 m-2" data-aos="zoom-in-left">
        <div class="flex flex-row justify-center md:justify-start md:px-5 items-center text-[1.2rem] uppercase text-Primary">
            <fa :icon="[IsBrand?'brands':'fas',Icon]" /> <span class="px-2">- {{ Name }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps(['Icon','Name','IsBrand'])
</script>

<style scoped>

</style>