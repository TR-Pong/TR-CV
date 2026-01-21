<template>
    <div class="Exp w-full" data-aos="zoom-in">
        <div class="my-2 w-full min-w-fit flex flex-wrap bg-white shadow-sm rounded-2xl p-10 items-center justify-center">
            <div class="w-80 shadow-xl rounded-2xl overflow-hidden"><img :src="pimg" alt="" srcset="" class="shadow-2xl"></div>
            <div class="customwidth min-w-90 flex flex-col justify-start items-center shrink p-10">
                <span class="text-Primary min-w-full pt-5 text-3xl">{{ pname }}</span>
                <span class="min-w-full py-2 text-[0.8rem]">{{ pdesc }}</span>
                <div class="w-full flex justify-evenly pt-10">
                    <button type="button" v-for="value in button" v-on:click="openNewTab(value.url)" class=" bg-TextPrimary p-2 mt-5 rounded border-Primary border-2 hover:bg-TextSecoundary cursor-pointer">
                        <fa :icon="value.picon"/> {{ value.bname }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps(['pname','pimg','pdesc','button'])

    const openNewTab = (url:string) => {
        window.open(url,'_blank');
    }
</script>

<style lang="scss">
.customwidth{
    width: calc(100% - calc(var(--spacing) * 80));
}
</style>