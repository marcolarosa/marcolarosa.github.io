<template>
    <NuxtLink :to="props.to">
        <div class="relative group p-1 border border-slate-700 m-1">
            <div
                class="group-hover:opacity-25 group-hover:blur hover:ease-in duration-200 flex card-style"
            >
                <img :src="props.image" class="object-cover object-left-top" />
            </div>
            <div
                class="absolute w-full top-10 invisible group-hover:visible text-center py-10 text-slate-900"
            >
                <div class="text-3xl">
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
    image: {
        type: String,
    },
});
</script>

<style>
img {
    height: 100%;
    width: 100%;
}
.card-style {
    height: 600px;
    width: auto;
}
</style>
