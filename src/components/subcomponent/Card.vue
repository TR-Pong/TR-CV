<template>
   <div class="mx-1 bg-white shadow-xs rounded-lg my-1 shrink-0 w-full md:w-[calc(49%)] min-w-80" data-aos="fade-left">
        <div class="px-6 py-5">
            <div class="flex items-start mb-3">
                <fa :icon="['fas','graduation-cap']" class="fa-2xl text-Primary" />
                <div class="grow flex justify-start md:justify-between items-center">
                    <div class="w-full">
                        <h2 class="text-[1rem] md:text-[1.2rem] leading-snug font-extrabold text-Primary truncate mb-1 sm:mb-0">{{ name }}</h2>
                    </div>
                </div>
            </div>
            <div class="flex flex-nowrap items-start justify-start md:justify-center whitespace-normal text-[0.8rem]">
                <p class="px-1 md:px-3">{{timestart}} - {{timeend}}</p>
                <p class="px-1 md:px-3">-</p>
                <p class="px-1 md:px-3">{{ desc }}</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    const props = defineProps(['name','timestart','timeend','desc']);
</script>

<style lang="scss" scoped>

</style>