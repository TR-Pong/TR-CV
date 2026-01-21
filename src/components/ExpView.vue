<template>
    <Section :-page-id="PageId" :-page-name="PageName">
        <Exp v-for="item in ExpData" :-comp-name="item.name" :-date-start="item.timestart" :-date-end="item.timeend" :-job-desc="item.desc" :-fa-icon="item.icon" />
    </Section>
</template>

<script setup lang="ts">
    import Section from '../views/Section.vue';
    import Exp from './subcomponent/Exp.vue';
    defineProps(['PageId','PageName']);

    const ExpData =[
        {
            name: "Outsourcify Co.,LTD",
            timestart: "2018-03-01",
            timeend: "2020-05-01",
            desc: "Develop website e-learning about luxury brand",
            icon: "city"
        },
        {
            name: "Tigon Tech Co.,LTD",
            timestart: "2020-05-11",
            timeend: "2025-12-31",
            desc: "Develop web and game",
            icon: "briefcase"
        }
    ]
</script>

<style scoped>

</style>