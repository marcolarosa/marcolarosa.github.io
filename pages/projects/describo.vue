<template>
    <stack>
        <card>
            <template #text>
                <div class="text-center text-3xl my-10">
                    <img
                        src="/describo/describo-logo.png"
                        class="inline h-40 object-contain rounded-xl"
                        style="background-color: #e2e8f0"
                    />
                </div>
                <linker class="text-center" to="https://describo.github.io"></linker>
            </template>
        </card>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    Describo is an ecosystem of tools, software components and services to create
                    and manage Research Object Crates.
                </template>
            </card>

            <card>
                <template #text>
                    <div class="flex flex-col place-content-center space-y-4">
                        <p>
                            Describo enables users to describe their data and create entity
                            collections using
                            <linker to="https://schema.org"></linker> classes and any other ontology
                            they need.
                        </p>
                        <p>
                            The Describo UI is totally customisable via
                            <linker to="https://describo.github.io/#/profile">profiles</linker>.
                            Profiles are JSON objects that describe what a user can do.
                        </p>
                        <p>Describo creates JSON Linked Data (JSON-LD).</p>
                    </div>
                </template>
            </card>
        </div>
        <card>
            <template #text>
                <p class="text-center">
                    I am the core developer and Technical Lead of the project.
                </p>
            </template>
        </card>
        <card>
            <template #text>
                <p class="text-2xl">Technology:</p>
                <ul class="list-disc">
                    <li>
                        The Describo component is written in VueJS and it can be embedded in other
                        VueJS environments (and react environments via the react plugin).
                    </li>
                    <li>
                        Describo Desktop is an ElectronJS application that contains a VueJS SPA and
                        embeds the Describo component for rendering and handling the RO Crate.
                    </li>
                    <li>Describo Web is also a VueJS that uses the Describo Component.</li>
                </ul>
            </template>
        </card>
        <card>
            <template #text>
                <div class="flex flex-col place-content-center">
                    The screenshot shows the Describo cross platform desktop application with full
                    file management capability, domain profile creation and much more.<br />
                    <linker to="https://describo.github.io/#/desktop"></linker>
                </div>
            </template>
            <template #image>
                <img src="/describo/describo2.png" />
            </template>
        </card>

        <!-- <card>
            <template #text>
                <div class="flex flex-col place-content-center space-y-4">
                    <div>
                        I was first engaged to work on Describo from January 2020 to May 2020. The
                        brief was to create a JSON-LD editor that would allow users to describe data
                        using schema.org. In this engagement I produced a Desktop application using
                        ElectronJS that effectively demonstrated the concept as a cross platform
                        application.
                    </div>
                    <div>
                        A key and innovative idea that I introduced and developed was the concept of
                        profiles.
                    </div>
                    <div>
                        Rather than a user needing to know what schema.org described, profile
                        authors (metadata experts) could create interface definitions for their
                        users that constrained their efforts whilst prompting them about what they
                        could / should / must do.
                    </div>
                    <div>
                        A second engagement followed at the end of that year (October 2020 -
                        December 2020) to produce a web based version. This engagement resulted in
                        the Describo Online product.
                    </div>
                    <div>
                        In 2021, Describo Online went on to be used as the metadata editor in the
                        EOSCMESH Project in the EU. It was also used in the Nyingarn Workspace as
                        the metadata editor.
                    </div>
                </div>
            </template>
        </card> -->

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    The web based version for basic metadata edits.<br />
                    <linker class="text-base" to="https://describo.github.io/#/web"></linker>
                </template>
                <template #image>
                    <img src="/describo/describo1.png" />
                </template>
            </card>

            <card>
                <template #text>
                    <p>
                        The embeddable VueJS component.
                        <linker to="https://describo.github.io/#/component"></linker>
                    </p>
                </template>
                <template #image>
                    <img class="text-base" src="/describo/describo3.png" />
                </template>
            </card>
        </div>
    </stack>
</template>

<script setup>
// import slideshow from "~/src/components/slideshow.vue";
import linker from "~/src/components/linker.vue";
import stack from "~/src/components/stack.vue";
import card from "~/src/components/Card.vue";
</script>
