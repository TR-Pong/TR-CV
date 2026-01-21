<script setup lang="ts">
    function scrollTo(id:string) {
        const el = document.getElementById(id)
        if (!el) return
        
        const headerOffset = 0
        const elementPosition = el.getBoundingClientRect().top
        const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        })
    }
</script>
<template>
    <nav class="bg-Primary min-w-90 md:w-full flex items-center justify-center px-4">
        <ul class="py-4">
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full md:hidden">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('app')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Back to Top
                </button>
            </li>
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('Home')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Welcome
                </button>
            </li>
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('Education')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Education
                </button>
            </li>
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('Experience')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Experience
                </button>
            </li>
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('Skills')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Skills
                </button>
            </li>
            <li class="inline-flex px-0 md:space-x-2 w-auto md:w-full">
                <button class="text-[0.8rem] md:text-[1.2rem] inline-flex justify-start items-center cursor-pointer w-full" @click="scrollTo('Example')">
                    <fa class="px-1 md:px-3" :icon="['fas', 'angles-right']" />
                    Example Projecrt
                </button>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    li{
        padding:  calc(var(--spacing) * 3);
        font-size: calc(var(--spacing) * 5);
        text-transform: uppercase;
        button{
            color: var(--color-Secoundary);
            font-weight: var(--font-weight-bold);
            &:hover{
                color: var(--color-TextPrimary);
                font-weight: var(--font-weight-bold);
            }
            &.active{
                color: var(--color-TextPrimary) !important;
            }
        }
    }
</style>