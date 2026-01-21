<script setup lang="ts">
    import NavBar from '../components/NavBar.vue';
</script>
<template>
    <div class="bg-Primary col-span-1 w-full min-h-120 md:min-h-0 flex flex-col items-center justify-start">
        <div data-aos="fade-up">
            <div class="flex justify-center items-center min-h-80 pt-20 md:pt-0">
                <div class="rounded-full w-60 h-60 border-3 border-TextPrimary flex justify-center items-center">
                    <img class="rounded-full w-55 h-55" src="../../src/assets/profile.jpg" alt="">
                </div>
            </div>
            <h2 class="text-3xl text-Secoundary font-extrabold mb-4">Tanakhom Rattanasrisawat</h2>
            <p class="text-TextPrimary mb-6 font-extrabold">
                Font-End & Game Developer
            </p>
            <NavBar class="hidden md:flex"/>
        </div>
    </div>
</template>