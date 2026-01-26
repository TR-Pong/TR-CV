<template>
    <div class="Exp w-full" data-aos="zoom-in">
        <div class="my-1 w-full flex flex-wrap bg-white rounded-2xl min-w-90 py-5">
            <div class="px-6 py-0 md:py-2 text-left year min-w-50 w-full lg:w-auto flex flex-col justify-center items-center lg:items-start md:bg-Secoundary md:rounded-4xl md:ml-10 md:shadow-sm md:border-[0.01rem] md:border-TextPrimary">
                <div class="text-Primary text-2xl">{{ new Date(DateStart).getFullYear() }} - {{ DateEnd == ""? "Present" : new Date(DateEnd).getFullYear() }}</div>
                <div class="">{{ diff.years }} year {{ diff.months }} month</div>
            </div>
             <div class="px-6 py-3 w-full md:w-auto flex flex-col justify-center md:justify-start items-center md:items-start h-auto flex-wrap min-w-90">
                 <div class="flex flex-row justify-center md:justify-start items-center text-center md:text-left">
                    <fa :icon="['fas',FaIcon]" class="fa-2xl text-Primary px-4 py-5" />
                     <div class="shink-0 text-Primary Company text-2xl">
                        {{ CompName }}
                    </div>
                </div> 
                <div class="desclist text-left pl-5 md:pl-10">
                    <li v-for="desc in JobDesc" class="shink-0 py-1 Company_desc break-before-all">{{ desc }}</li>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed } from 'vue';

    const props = defineProps(['DateStart','DateEnd','CompName',"JobDesc","FaIcon"]);

    const diff = computed(() => diffYearMonth(props.DateStart, props.DateEnd))

    function diffYearMonth(startDateStr:string, endDateStr:string = "") {
        const start = new Date(startDateStr)
        const end = endDateStr != ""? new Date(endDateStr) : new Date(Date.now());
        let years = end.getFullYear() - start.getFullYear()
        let months = end.getMonth() - start.getMonth()
        
        if (end.getDate() < start.getDate()) {
            months -= 1
        }
        if (months < 0) {
            years -= 1
            months += 12
        }
        return { years, months }
    }
</script>

<style lang="scss" scoped>

</style>