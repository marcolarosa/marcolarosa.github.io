<template>
    <stack>
        <card>
            <template #text>
                <div class="text-center text-3xl my-10">
                    Nyingarn Platform
                    <img
                        src="/nyingarn/nyingarn-logo.png"
                        class="inline w-32 object-contain p-4 rounded-xl"
                        style="background-color: #4a6163"
                    />
                </div>
                <div class="flex flex-col space-y-2 w-full place-content-center">
                    <linker class="text-center" to="https://workspace.nyingarn.net"></linker>
                    <linker class="text-center" to="https://repository.nyingarn.net"></linker>
                </div>
            </template>
        </card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    The Nyingarn Platform consists of a Workspace and Repository to make manuscript
                    sources of Australian Indigenous Languages available as searchable and reusable
                    text documents to support language revitalisation.
                </template>
            </card>

            <card>
                <template #text>
                    <div class="flex flex-col place-content-center space-y-4">
                        <p>
                            The
                            <linker to="https://workspace.nyingarn.net">workspace</linker> enables
                            users to:
                        </p>
                        <ul class="list-disc">
                            <li>create items representing a manuscript or part of a manuscript;</li>
                            <li>
                                upload images of each manuscript page for automated text extraction
                                using AWS Textract;
                            </li>
                            <li>
                                supports multi file upload using the TUS upload protocol direct to
                                S3;
                            </li>
                            <li>
                                upload pre created manuscript transcriptions as Text Encoding
                                Initiative (TEI) documents or from DigiVol;
                            </li>
                            <li>edit the transcriptions using a GUI TEI editor;</li>
                            <li>
                                automate the processing of input images into thumbnails and web
                                formats;
                            </li>
                            <li>
                                write detailed JSON-LD metadata using the embeddable describo
                                editor.
                            </li>
                        </ul>
                        <p>
                            The
                            <linker to="https://repository.nyingarn.net">repository</linker> enables
                            user to:
                        </p>
                        <ul class="list-disc">
                            <li>find content by searching by language, content and location;</li>
                            <li>view manuscript metadata;</li>
                            <li>view manuscript images.</li>
                        </ul>
                    </div>
                </template>
            </card>
        </div>

        <card>
            <template #text>
                <p class="text-center">
                    I designed the workspace and repository and was the lead developer for the
                    project. Working with me was
                    <linker to="https://www.linkedin.com/in/conal-tuohy-168ba59/">
                        Conal Tuohy
                    </linker>
                    who developed the core XML processing capability.
                </p>
            </template>
        </card>

        <card>
            <template #text>
                <p class="text-2xl">Technology:</p>
                <ul class="list-disc">
                    <li>
                        The Nyingarn Workspace and Repository applications are VueJS SPAs with a
                        shared NodeJS/Fastify API backend.
                    </li>
                    <li>
                        The API container is designed to be horizontally scalable by submitting
                        processing jobs to a Rabbit Message Queue.
                    </li>
                    <li>
                        The Task runner container is also a NodeJS application that connects to the
                        queue directly and processes jobs sequentially in a FIFO fashion. This
                        container is also horizontally scalable.
                    </li>
                    <li><linker to="https://github.com/CoEDL/nyingarn-workspace"></linker></li>
                </ul>
            </template>
        </card>

        <card>
            <template #text>
                <div class="flex flex-col space-y-2">
                    <p>
                        The platform consists of a number of docker containers that call out to AWS
                        services where required.
                    </p>
                    <p>
                        In the current deployment, the services all run on a single virtual machine.
                        However, it can easily be transitioned to a cloud native application running
                        under Kubernetes as load dictates.
                    </p>
                </div>
            </template>
            <template #image>
                <img src="/nyingarn/nyingarn-architecture.svg" class="object-contain" />
            </template>
        </card>

        <card>
            <template #text>Nyingarn Platform Workspace</template>
        </card>
        <card>
            <template #text>
                The Login screen. Users can log in using the Australian Access Federation (AAF),
                Google or just by getting a one time password to their email address (in all cases,
                provided that they are permitted users of the application).
            </template>
            <template #image>
                <img src="/nyingarn/workspace2.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                The user dashboard. In it we can see the items and collections the user can access
                along with, in this case, the administrator controls the user has access to.
            </template>
            <template #image>
                <img src="/nyingarn/workspace4.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                Item view showing a manuscript with two pages. We can see the thumbnail of the page
                and status indicators for whether the thumbnail has been generated; webformats
                created; OCR completed and TEI exists.
            </template>
            <template #image>
                <img src="/nyingarn/workspace3.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text
                >Page view showing the image on the left (with full zoom and pan controls) and the
                TEI transcription editor on the right.
            </template>
            <template #image>
                <img src="/nyingarn/workspace5.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text> The metadata tab with the embedded Describo component.</template>
            <template #image>
                <img src="/nyingarn/workspace6.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                The data upload tab. Powered by:
                <linker to="https://uppy.io/"></linker> <linker to="https://tus.io/"></linker>
            </template>
            <template #image>
                <img src="/nyingarn/workspace7.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text> The publish tab.</template>
            <template #image>
                <img src="/nyingarn/workspace8.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text> The item administration view with user access controls.</template>
            <template #image>
                <img src="/nyingarn/workspace9.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>Nyingarn Platform Repository</template>
        </card>
        <card>
            <template #text
                >The repository landing page. Users can discover content by navigating around the
                map; searching by language; and searching by manuscript content. Or a combination of
                all three.
            </template>
            <template #image>
                <img src="/nyingarn/repository2.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                A manuscript view. The metadata is shown at the top and the pages in a grid view at
                the bottom.
            </template>
            <template #image>
                <img src="/nyingarn/repository3.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text>
                A manuscript page with the image on the left (zoom and pan controls) and the
                transcription on the right.
            </template>
            <template #image>
                <img src="/nyingarn/repository4.png" class="object-contain" />
            </template>
        </card>
        <card>
            <template #text
                >The detailed item metadata displayed by the Describo component in readonly mode.
            </template>
            <template #image>
                <img src="/nyingarn/repository5.png" class="object-contain" />
            </template>
        </card>
    </stack>
</template>

<script setup>
import linker from "~/src/components/linker.vue";
import stack from "~/src/components/stack.vue";
import card from "~/src/components/Card.vue";
</script>
