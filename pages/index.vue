<template>
    <div class="flex flex-col">
        <span class="container mx-auto p-4">
            <div class="flex flex-col space-y-4 text-base md:text-xl">
                <div class="text-2xl md:text-4xl">Marco La Rosa, PhD</div>
                <div
                    class="flex flex-col space-y-2 md:space-y-4 text-lg md:text-3xl text-slate-700 py-4 md:py-4"
                >
                    <div>Full Stack Software Developer</div>
                    <div>Dev/Ops specialist</div>
                    <div>Scientist</div>
                </div>
                <p>
                    Throughout my career I have been relied upon to architect and create scalable,
                    manageable and performant systems. Meticulous, analytical and highly adaptable,
                    I am able to quickly develop expertise in new fields and technologies. I take a
                    holistic approach to my work to ensure that a solution is developed using the
                    best available technology for that problem.
                </p>
                <!-- <p>
                    Throughout my career I have been relied upon to architect and create manageable
                    and performant systems ranging from High Performance Computing clusters to
                    analytical tools and web applications for linguistics researchers; from scale
                    out web infrastructures for archivists to the HuNI virtual laboratory from
                    NeCTAR; metadata description tools like Describo to workflow and repository
                    environments like the Nyingarn Platform.
                </p> -->
                <!-- <p>
                    I am skilled at developing secure by design infrastructure and services with
                    significant expertise preparing these systems to house PROTECTED data; as
                    certified by the Defence Signals Directorate.
                </p> -->
                <!-- <p>
                    Meticulous, analytical and highly adaptable, I am able to quickly develop
                    expertise in new fields and technologies. I take a holistic approach to my work
                    to ensure that a solution is developed using the best available technology for
                    that problem.
                </p> -->
                <!-- <p>
                    I work effectively individually or in a team as a leader, mentor and team
                    member.
                </p> -->
            </div>
            <div class="text-3xl my-10 text-center">Portfolio</div>
            <div class="flex flex-col space-y-1">
                <Feature
                    to="/portfolio/describo"
                    title="Describo"
                    description="An ecosystem of tools, software components and services
to create and manage Research Object Crates. "
                    url="https://describo.github.io"
                    image="/describo/describo1.png"
                >
                </Feature>

                <Feature
                    to="/portfolio/nyingarn"
                    title="Nyingarn Platform"
                    description="Nyingarn makes manuscript sources of Australian Indigenous languages
available as searchable and reusable text documents
to support language revitalisation."
                    image="/nyingarn/workspace1.png"
                >
                </Feature>

                <Feature
                    to="/portfolio/50words"
                    title="50words.online"
                    description="A resource for schools and educational organisations
                    to learn 50 words in their local languages."
                    image="/50words/50words1.png"
                >
                </Feature>

                <Feature
                    to="/portfolio/modpdsc"
                    title="Modern PARADISEC"
                    description="Modern PARADISEC is a demonstrator showing what a interface based on RO-Crates could do."
                    image="/modpdsc/modpdsc1.png"
                >
                </Feature>
                <div class="flex flex-col space-y-1 md:flex-row md:space-y-0">
                    <Feature
                        to="/projects/olacvis"
                        title="OLAC Visualisation"
                        description="A visualisation of the language data at the Open Language Archives."
                        image="/olacvis/olacvis1.png"
                    >
                    </Feature>

                    <Feature
                        to="/portfolio/pi"
                        title="Raspberry Pi and Data Loader"
                        description="An application to load catalog data onto Raspberry Pi's for repatriation."
                        image="/pi/pi1.png"
                    >
                    </Feature>
                </div>

                <Feature
                    to="/portfolio/code"
                    title="Code Repositories"
                    description="Uncategorised open source codes"
                    image="/code/code1.png"
                >
                </Feature>
            </div>
        </span>
    </div>
</template>

<script setup>
import Feature from "../src/components/Feature.vue";
import "@fortawesome/fontawesome-free/js/all";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoReplaceSvg = "nest";
</script>

<style></style>
