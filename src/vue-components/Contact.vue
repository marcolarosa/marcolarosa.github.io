<template>
    <div class="flex flex-col space-y-2">
        <div class="flex items-center text-base md:text-lg">
            <FontAwesomeIcon :icon="faEnvelope"></FontAwesomeIcon>
            &nbsp;<a href="mailto:m@lr.id.au">m@lr.id.au</a>
        </div>
        <div class="flex items-center text-base md:text-lg">
            <FontAwesomeIcon :icon="faGithub"></FontAwesomeIcon>&nbsp;
            <Link link="https://github.com/marcolarosa"> https://github.com/marcolarosa</Link>
        </div>
        <div class="flex items-center text-base md:text-lg">
            <FontAwesomeIcon :icon="faLinkedin"></FontAwesomeIcon>&nbsp;
            <Link link="https://www.linkedin.com/in/marcolarosa/">
                https://www.linkedin.com/in/marcolarosa/</Link
            >
        </div>
    </div>
</template>

<script setup>
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
