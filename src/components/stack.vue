<template>
    <div class="h-screen w-screen bg-slate-100">
        <div class="fixed top-0 left-0 z-10 p-4 bg-slate-100 w-full">
            <NuxtLink to="/"><i class="fa-solid fa-house"></i></NuxtLink>
        </div>

        <div class="flex flex-col space-y-2 p-4 text-xl relative top-12">
            <slot></slot>
        </div>
    </div>
</template>

<script setup></script>
