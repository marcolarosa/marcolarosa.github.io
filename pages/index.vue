<template>
    <div>
        <SlideShowComponent id="deck1" style="height: 500px" class="m-4">
            <section>slide 1</section>
            <section>slide 2</section>
        </SlideShowComponent>

        <SlideShowComponent id="deck2" style="height: 500px" class="m-4">
            <section>deck 1</section>
            <section>deck 2</section>
        </SlideShowComponent>
    </div>
</template>

<script setup>
import SlideShowComponent from "../src/components/slideshow.vue";
</script>
