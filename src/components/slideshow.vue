<template>
    <div class="h-screen w-screen bg-slate-100">
        <div class="fixed top-0 left-0 z-10 p-4">
            <NuxtLink to="/"><i class="fa-solid fa-house"></i></NuxtLink>
        </div>
        <div class="reveal" :id="props.id">
            <div class="slides">
                <slot class="flex flex-col justify-center items-center"></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/simple.css";
import "./revealjs-override-styles.css";
let Reveal, Markdown;
if (process.client) {
    Reveal = (await import("reveal.js/dist/reveal.esm.js")).default;
    Markdown = (await import("reveal.js/plugin/markdown/markdown.esm.js")).default;
}
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
    id: { type: String, required: true },
});
let deck;

onMounted(() => {
    deck = new Reveal(document.querySelector(`#${props.id}`), {
        keyboardCondition: "focused", // only react to keys when focused
        plugins: [Markdown],
        // view: "scroll",
        // scrollProgress: true,
    });
    deck.initialize();
});

onBeforeUnmount(() => {
    deck.destroy();
});
</script>
