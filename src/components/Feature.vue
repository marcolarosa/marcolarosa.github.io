<template>
    <NuxtLink :to="props.to">
        <div class="relative group py-2">
            <div class="flex flex-col p-4 border-2 border-slate-400 bg-slate-100 rounded">
                <span class="group-hover:opacity-50 group-hover:blur-sm hover:ease-in duration-200">
                    <div class="">
                        <slot name="image"></slot>
                    </div>
                </span>
            </div>
            <div
                class="absolute w-full top-10 invisible group-hover:visible text-center bg-slate-100 py-10"
            >
                <div class="text-3xl text-slate-800">
                    {{ props.title }}
                </div>
                <div class="p-4 text-lg">
                    {{ props.description }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    description: {
        type: String,
    },
});
</script>
