<template>
    <stack>
        <card>
            <template #text>
                <div class="text-center text-3xl my-10">Modern PARADISEC</div>
                <linker class="text-center" to="https://mod.paradisec.org.au/"></linker>
            </template>
        </card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    Modern PARADISEC is a demonstrator developed in 2019 to see how a modern
                    interface might work on top of the PARADISEC collection when the metadata is
                    written out as Research Object Crates.
                </template>
            </card>

            <card>
                <template #text>
                    <div class="flex flex-col place-content-center space-y-4">
                        <p>
                            Modern PARADISEC uses an Oxford Common File Layout on the backend
                            storage and the data is stored as Research Object Crates.
                        </p>
                    </div>
                </template>
            </card>
        </div>
        <card>
            <template #text>
                <div class="flex flex-col space-y-2">
                    <p>
                        This demonstrator was funded by a small project grant from the ARDC in 2019.
                        The demonstrator comprises a few parts, including:
                    </p>
                    <ul class="list-disc">
                        <li>
                            An exporter that reflected the MySQL database structure and wrote out
                            the metadata from each item as an RO-Crate. This code is not open so
                            can't be linked to.
                        </li>
                        <li>
                            The demonstrator itself which is a VueJS SPA bundled into a docker
                            container. For this demonstrator authentication was not required so
                            there is no API. It works by also mounting the OCFL filesystem into the
                            container in a known location, then, the URL path is transformed into
                            the backend storage path per request.
                            <ul>
                                <li>
                                    <linker to="https://github.com/CoEDL/modpdsc"></linker>
                                </li>
                            </ul>
                        </li>

                        <li>
                            The final component is the tooling to walk the OCFL filesystem and
                            populate the elastic search index.
                            <ul>
                                <li>
                                    <linker to="https://github.com/CoEDL/ocfl-tools"></linker>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </template>
        </card>
        <card>
            <template #text>
                The home page showing some statistics about the data store; information about the
                app; basic search and jump facilities (as this is a demonstrator) and a grid of
                recently updated content.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc1.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                A collection. In it we can see some of the metadata, the location, languages, and
                the items that it contains.</template
            >
            <template #image>
                <img src="/modpdsc/modpdsc2.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                An item. Again, we see some basic metadata and location information.</template
            >
            <template #image>
                <img src="/modpdsc/modpdsc3.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                Items contain data and navigating to the content tab shows us the conditions of
                access that must be accepted before the data is made available.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc4.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                The item image viewer. The viewer knows how to display images controls to navigate
                through the set of images in the item.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc5.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                The audio player. In this screenshot we see a time aligned transcription on the
                right hand side that allows a user to play a specific segment of the audio file or
                watch the transcription as the audio plays.
            </template>

            <template #image>
                <img src="/modpdsc/modpdsc6.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text
                >The video player. Again, a time aligned transcription is visible on the right that
                operates in the same manner as the audio transcription player.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc7.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                The video player but this time showing a transcription in another format. The
                transcription viewer supports 4 linguistic transcription formats.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc8.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text>The XML data file viewer. </template>
            <template #image>
                <img src="/modpdsc/modpdsc9.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text
                >Advanced search with controls for specifying what must match, what should match and
                what must not match.
            </template>
            <template #image>
                <img src="/modpdsc/modpdsc10.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
        <card>
            <template #text
                >Deep transcription search. A key innovation of this application is the ability to
                search the transcribed content and deep link into the segments so that the user can
                hear that segment from the search view. In this case, the search has found all
                segments with the phrase "pan pan pan" which the user can then listen to without
                leaving the search view. When they've found an item of interest, they can then
                navigate to it.</template
            >
            <template #image>
                <img src="/modpdsc/modpdsc11.png" class="bg-white p-1 object-contain" />
            </template>
        </card>
    </stack>
</template>

<script setup>
import linker from "~/src/components/linker.vue";
import stack from "~/src/components/stack.vue";
import card from "~/src/components/Card.vue";
</script>
