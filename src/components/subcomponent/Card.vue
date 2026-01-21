<template>
   <div class="mx-1 bg-white shadow-lg rounded-lg my-1 shrink-0 w-full md:w-[calc(49%)] min-w-90" data-aos="fade-left">
        <div class="px-6 py-5">
            <div class="flex items-start">
                <fa :icon="['fas','graduation-cap']" class="fa-2xl text-Primary px-4" />
                <div class="grow truncate">
                    <div class="w-full sm:flex justify-between items-center mb-3">
                        <h2 class="text-[1.2rem] leading-snug font-extrabold text-Primary truncate mb-1 sm:mb-0">{{ name }}</h2>
                    </div>
                </div>
            </div>
            <div class="flex flex-nowrap items-start justify-center whitespace-normal text-[0.8rem]">
                <p class="px-3">{{timestart}} - {{timeend}}</p>
                <p class="px-3">-</p>
                <p class="px-3">{{ desc }}</p>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">
    const props = defineProps(['name','timestart','timeend','desc']);
</script>

<style lang="scss" scoped>

</style>