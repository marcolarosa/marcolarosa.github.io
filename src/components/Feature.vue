<template>
    <NuxtLink :to="props.to">
        <div class="relative group p-1 border border-slate-700 m-1">
            <div
                class="group-hover:opacity-25 group-hover:blur hover:ease-in duration-200 flex card-style"
            >
                <img :src="props.image" class="object-contain md:object-cover md:object-left-top" />
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
                <div class="text-2xl" v-if="props.url">
                    {{ props.url }}
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup>
import { computed } from "vue";
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
    url: {
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
@media only screen and (min-width: 768px) {
    .card-style {
        height: 600px;
        width: auto;
    }
}
</style>
