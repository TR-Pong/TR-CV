<script setup lang="ts">
    const openNewTab = (url:string) => {
        window.open(url,'_blank');
    }

    defineProps(['PageId']);
</script>

<template>
    <div :id="PageId"  class="w-full h-auto flex flex-center justify-center flex-col pt-10 px-10 md:px-20" data-aos="fade-up">
    <h1 class="text-6xl text-Primary uppercase text-center md:text-left pb-10 md:pb-0 md:pt-20">Welcome</h1>
    <div class="flex flex-wrap text-lg md:grid-cols-2">
      <div class="flex items-center justify-left w-80 shrink-0 py-1 md:py-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 min-w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <span class="pl-2 min-w-30">Tanakhom.rattana@hotmail.com</span>
      </div>
      <div class="flex items-center justify-left w-45 shrink-0 py-1 md:py-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 min-w-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        <span class="pl-2 min-w-20">088-228328-4</span>
      </div>
    </div>
  
    <div>
      <p class="text-TextSecondary text-md mt-6 text-justify">
        <b>Front-End Developer</b> and <b>Game Developer</b> specializing in <b>Vue.js, React,</b> and <b>Unity</b>. Experienced in developing responsive web applications and interactive game experiences, with a strong focus on performance, usability.
      </p>
    </div>

    <p class="text-2xl pt-10 md:pt-10 text-left text-Primary uppercase">Social</p>
    <div class="pb-2 pt-3 text-left md:flex-col">
        <button 
            class="bg-TextPrimary hover:bg-TextSecoundary 
            text-white min-w-15 h-10 px-3 rounded-2xl 
            border-2 cursor-pointer text-2xl
            flex justify-center items-center"
            @click="openNewTab('https://www.linkedin.com/in/tanakhom-rattanasrasawat-5491b7149')"
        >
        <fa :icon="['brands','linkedin']" />
        <span class="text-white text-[1rem] px-2">LinkedIn</span>
        </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
b {
  color: var(--color-Primary);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
}
</style>