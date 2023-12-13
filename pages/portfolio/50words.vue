<template>
    <stack>
        <card>
            <template #text>
                <div class="text-center text-3xl my-10">50 Words Project</div>
                <linker class="text-center" to="https://50words.online"></linker>
            </template>
        </card>

        <card>
            <template #text>
                This project from the Research Unit for Indigenous Language aims to provide fifty
                words in Indigenous languages of Australia. The map is intended to be a useful
                resource for schools and educational organisations to learn 50 words in their local
                languages, and for the general public to discover the diversity of languages around
                Australia.
            </template>
        </card>

        <card>
            <template #text>
                <p class="text-2xl">Technology:</p>
                <div class="flex flex-col space-y-2">
                    <ul class="list-disc">
                        <li>
                            The application is a VueJS SPA with a Python data processing backend.
                        </li>
                        <li>
                            Project managers collect recordings of native speakers speaking the
                            words and upload the WAV files to the server along with an Excel
                            spreadsheet containing the metadata.
                        </li>

                        <li>
                            They then run a python script which creates an mp3 file for each wav
                            file and a set of JSON index files.
                        </li>
                        <li>
                            When the application loads, it loads the main index file which then has
                            links to the sub index files. In this way, the application itself can
                            run as an SPA without an API server. It also means the application
                            scales with the data rather than slowing down as number of languages
                            increases.
                        </li>
                        <li><linker to="https://github.com/coedl/50words.online"></linker></li>
                    </ul>
                </div>
            </template>
        </card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #image>
                    <img src="/50words/50words1.png" class="object-contain" />
                </template>
            </card>
            <card>
                <template #image>
                    <img src="/50words/50words2.png" class="object-contain" />
                </template>
            </card>
            <card>
                <template #image>
                    <img src="/50words/50words3.png" class="object-contain" />
                </template>
            </card>
            <card>
                <template #image>
                    <img src="/50words/50words4.png" class="object-contain" />
                </template>
            </card>
        </div>
    </stack>
</template>

<script setup>
import linker from "~/src/components/linker.vue";
import stack from "~/src/components/stack.vue";
import card from "~/src/components/Card.vue";
</script>
