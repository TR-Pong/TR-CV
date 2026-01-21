<template>
    <Section :-page-id="PageId" :-page-name="PageName">
        <ExampleProject v-for="item in ExampleData" :pname="item.pname" :pimg="item.pimg" :pdesc="item.pdesc" :button="item.button" />
    </Section>
</template>

<script setup lang="ts">
    import Section from '../views/Section.vue';
    import ExampleProject from './subcomponent/ExampleProject.vue';
    defineProps(['PageId','PageName']);

    const ExampleData = [
        {
            pname: "Mini Zoo Merge",
            pimg: "../../src/assets/example1.png",
            pdesc: "A cute animals mobile game. drop same animal to merge and get score. make high score to no.1 in server",
            button: [
                {
                    picon: ['brands','android'],
                    bname: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.tigongame.minizoomerge&hl=th",
                },
                //  {
                //     picon: ['brands','apple'],
                //     bname: "App Store",
                //     url: "https://play.google.com/store/apps/details?id=com.tigongame.minizoomerge&hl=th",
                // }
            ]
        },
        {
            pname: "Poker Dices 3D",
            pimg: "../../src/assets/example2.png",
            pdesc: "Dice game play with your friend enjoy in party.",
            button: [
                {
                    picon: ['brands','android'],
                    bname: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.tigongame.pokerdices2&hl=th",
                }
            ]
        }
    ]
</script>

<style scoped>

</style>