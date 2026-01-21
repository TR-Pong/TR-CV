<script setup lang="ts">
// import { ref } from 'vue'
import welcome from '../components/welcome.vue';
import Education from '../components/Education.vue';
import ExpView from '../components/ExpView.vue';
import SkillView from '../components/SkillView.vue';
import ExampleProjectView from '../components/ExampleProjectView.vue';
</script>

<template>
  <div class="col-span-2 w-full pb-30">
    <welcome PageId="Home"/>
    <Education PageId="Education" PageName="Education"/>
    <ExpView PageId="Experience" PageName="Experience"/>
    <SkillView PageId="Skills" PageName="Skills"/>
    <ExampleProjectView PageId="Example" PageName="Example Project" />
  </div>
</template>

<style scoped>

</style>
