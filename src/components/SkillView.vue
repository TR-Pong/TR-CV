<template>
    <Section :-page-id="PageId" :-page-name="PageName" :custom-class="CustomClass">
        <Skill v-for="item in SkillData" :-name="item.Name" :-icon="item.Icon" :-is-brand="item.isBrand" />
    </Section>
</template>

<script setup lang="ts">
    import Section from '../views/Section.vue';
    import Skill from './subcomponent/Skill.vue';
    defineProps(['PageId','PageName']);

    const CustomClass = ["w-full","justify-around"]

    const SkillData = [
        {
            Icon:"vuejs",
            Name: "Vue Js",
            isBrand: true,
        },
        {
            Icon:"js",
            Name: "Next Js",
            isBrand: true,
        },
        {
            Icon:"css3",
            Name: "SCSS",
            isBrand: true,
        },
        {
            Icon:"github",
            Name: "Github",
            isBrand: true,
        },
        {
            Icon:"unity",
            Name: "Unity",
            isBrand: true,
        },
        {
            Icon:"gamepad",
            Name: "Cocos Creator",
            isBrand: false,
        },
        {
            Icon:"react",
            Name: "React",
            isBrand: true,
        },
        {
            Icon:"apple",
            Name: "Xcode",
            isBrand: true,
        },
        {
            Icon:"android",
            Name: "Android Studio",
            isBrand: true,
        },
    ]
</script>

<style scoped>

</style>