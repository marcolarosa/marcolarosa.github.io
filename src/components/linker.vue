<template>
    <NuxtLink :to="props.to" target="_blank" class="text-blue-700">
        <slot v-if="slots._"> {{ slots._ }}</slot>
        <span v-else>
            {{ props.to }}&nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
        </span>
    </NuxtLink>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();

const props = defineProps({
    to: { type: String, required: true },
});
</script>
