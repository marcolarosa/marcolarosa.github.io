<template>
    <div class="flex flex-col md:flex-row md:space-x-2 p-8 bg-slate-200 rounded">
        <div
            class="flex flex-col place-content-center"
            :class="{
                'w-full': !slots.image,
                'w-full md:w-2/5 xl:w-2/6': slots.image,
            }"
        >
            <slot name="text"></slot>
        </div>
        <div class="flex place-content-centerw-2/3 lg:w-3/5 xl:w-4/6" v-if="slots.image">
            <slot name="image"></slot>
        </div>
    </div>
</template>

<script setup>
import { useSlots } from "vue";
const slots = useSlots();

const props = defineProps({
    image: { type: String },
});
</script>
