<template>
    <div>
        <div class="reveal" :id="props.id">
            <div class="slides">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/serif.css";
let Reveal, Markdown;
if (process.client) {
    Reveal = (await import("reveal.js/dist/reveal.esm.js")).default;
    Markdown = (await import("reveal.js/plugin/markdown/markdown.esm.js")).default;
}
import { onMounted, ref } from "vue";

const props = defineProps({
    id: { type: String, required: true },
});

onMounted(() => {
    const deck = new Reveal(document.querySelector(`#${props.id}`), {
        embedded: true,
        keyboardCondition: "focused", // only react to keys when focused
        plugins: [Markdown],
    });
    deck.initialize();
});
</script>
