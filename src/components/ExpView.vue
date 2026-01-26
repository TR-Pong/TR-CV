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
            icon: "city",
            desc: [
                "Developed high-quality e-learning websites for sales staff of a French luxury brand, aimed at enhancing product knowledge and sales effectiveness.",
                "Evaluated and planned website development strategically by analyzing client requirements and aligning with appropriate marketing objectives.",
                "Coordinated with clients from France to ensure all project deliverables met expectations and were executed accurately without errors."
            ]
            
        },
        {
            name: "Tigon Tech Co.,LTD",
            timestart: "2020-05-11",
            timeend: "2025-12-31",
            icon: "briefcase",
            desc: [
                "Developed and designed websites using Vue.js, focusing on performance, scalability, and user-centered experiences.",
                "Created games using Unity and Cocos Creator, with an emphasis on developing new features and improving overall gameplay experience.",
                "Researched and applied new technologies and techniques to enhance team productivity and deliver higher-quality creative outcomes.",
                "Mentored and supported junior team members, helping them build technical skills, confidence, and effectiveness in their roles."
            ]
        }
    ]
</script>

<style scoped>

</style>