<template>
    <NuxtLink :to="props.to" target="_blank"
        ><slot v-if="slots._"></slot><span v-else>{{ props.to }}</span></NuxtLink
    >
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();

const props = defineProps({
    to: { type: String, required: true },
});
</script>
