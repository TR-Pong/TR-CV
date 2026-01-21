<template>
    <Section :-page-id="PageId" :-page-name="PageName">
        <Card v-for="item in erducationData" :name="item.name" :timestart="item.timestart" :timeend="item.timeend" :desc="item.desc"/>
    </Section>
</template>

<script setup lang="ts">
    import Section from '../views/Section.vue';
    import Card from './subcomponent/Card.vue';
    defineProps(['PageId','PageName']);

    const erducationData = [{
        name: "Chiang Rai Rajabhat University",
        timestart: "2013",
        timeend: "2017",
        desc: "Computer Science"
    },{
        name: "Maesai prasitsart School",
        timestart: "2010",
        timeend: "2013",
        desc: "English - Social Program"
    },]
</script>

<style lang="scss" scoped>

</style>