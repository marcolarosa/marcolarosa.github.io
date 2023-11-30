<template>
    <slideshow id="describo">
        <section>
            <p class="my-4">
                Describo is an ecosystem of tools, software components and services to create and
                manage Research Object Crates.
            </p>
            <p><linker to="https://describo.github.io"></linker></p>
        </section>
        <section>
            <p class="fragment semi-fade-out" data-fragment-index="1">
                Describo enables users to describe their data and create entity collections using
                <linker to="https://schema.org"></linker> classes and any other ontology they need.
            </p>
            <p class="fragment fade-up fade-in-then-semi-out" data-fragment-index="1">
                The Describo UI is totally customisable via
                <linker to="https://describo.github.io/#/profile">profiles</linker>. Profiles are
                JSON objects that describe what a user can do.
            </p>
            <p class="fragment fade-up fade-in-then-semi-out">
                Describo creates JSON Linked Data (JSON-LD).
            </p>
        </section>
        <section class="">
            <!-- <p>Describo Desktop</p> -->
            <img
                data-src="/describo/describo2.png"
                class="object-cover object-left-top shadow-md"
            />
        </section>
        <section>
            I was first engaged to work on Describo from January 2020 to May 2020. The brief was to
            create a JSON-LD editor that would allow users to describe data using schema.org.
        </section>
        <section>
            In this engagement I produced a Desktop application using ElectronJS that effectively
            demonstrated the concept as a cross platform application.
        </section>
        <section>
            <p>
                A key and innovative idea that I introduced and developed was the concept of
                profiles.
            </p>
            <p>
                Rather than a user needing to know what schema.org described, profile authors
                (metadata experts) could create interface definitions for their users that
                constrained their efforts whilst prompting them about what they could / should do.
            </p>
        </section>
        <section>At that time no other product existed with this capability.</section>
        <section>
            A second engagement followed at the end of that year (October 2020 - December 2020) to
            produce a web based version. This engagement resulted in the Describo Online product.
        </section>
        <section>
            In 2021, Describo Online went on to be used as the metadata editor in the EOSCMESH
            Project in the EU. It was also used in the Nyingarn Workspace as the metadata editor.
        </section>
        <section>
            Describo has since become the name for a
            <linker to="https://describo.github.io">Github Organisation</linker> that brings
            together the various components of the ecosystem.
        </section>
        <section>This includes:</section>
        <section>
            <p>The embeddable VueJS component.</p>
            <linker to="https://describo.github.io/#/component"></linker>
        </section>
        <section>
            <p>The web based version for basic metadata edits.</p>
            <linker to="https://describo.github.io/#/web"></linker>
        </section>
        <section>
            <p>
                The cross platform desktop application with full file management capability and
                coming soon, domain profile creation.
            </p>
            <linker to="https://describo.github.io/#/web"></linker>
        </section>
        <section>
            <p>I am the core developer and Technical Lead of the project.</p>
        </section>
    </slideshow>
</template>

<script setup>
import slideshow from "~/src/components/slideshow.vue";
import linker from "~/src/components/linker.vue";
</script>
