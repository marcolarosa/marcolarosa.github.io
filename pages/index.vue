<template>
    <div class="flex flex-col">
        <div class="text-2xl w-full p-4 sticky top-0 bg-slate-100 xl:mb-10 border-b">
            <div class="text-slate-800 hover:text-blue-600">
                <!-- <NuxtLink to="/projects">Projects</NuxtLink> -->
            </div>
        </div>
        <span class="container mx-auto p-4">
            <div class="flex flex-col space-y-4 text-base md:text-xl">
                <div class="text-2xl md:text-4xl">Marco La Rosa, PhD</div>
                <div
                    class="flex flex-col space-y-2 md:space-y-4 text-lg md:text-3xl text-blue-600 py-4 md:py-10"
                >
                    <div>Full Stack Software Developer</div>
                    <div>Dev/Ops specialist</div>
                    <div>Scientist</div>
                </div>
                <p>
                    Throughout my career I have been relied upon to architect and create manageable
                    and performant systems ranging from High Performance Computing clusters to
                    analytical tools and web applications for linguistics researchers; from scale
                    out web infrastructures for archivists to the HuNI virtual laboratory from
                    NeCTAR; metadata description tools like Describo to workflow and repository
                    environments like the Nyingarn Platform.
                </p>
                <p>
                    I am skilled at developing secure by design infrastructure and services with
                    significant expertise preparing these systems to house PROTECTED data; as
                    certified by the Defence Signals Directorate.
                </p>
                <p>
                    Meticulous, analytical and highly adaptable, I am able to quickly develop
                    expertise in new fields and technologies. I take a holistic approach to my work
                    to ensure that a solution is developed using the best available technology for
                    that problem.
                </p>
                <p>
                    I work effectively individually or in a team as a leader, mentor and team
                    member.
                </p>
            </div>
            <div class="h-10"></div>
            <div class="columns-1 gap-2 md:columns-2 md:gap-2 xl:columns-3 xl:gap-2">
                <Feature
                    to="/projects/describo"
                    title="describo"
                    description="An ecosystem of tools, software components and services
to create and manage Research Object Crates. "
                >
                    <template #image>
                        <NuxtImg src="/describo/describo1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/olacvis"
                    title="OLAC Visualisation"
                    description="A visualisation of the language data at the Open Language Archives."
                >
                    <template #image>
                        <NuxtImg src="/olacvis/olacvis1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/nyingarn"
                    title="Nyingarn Platform"
                    description="Nyingarn makes manuscript sources of Australian Indigenous languages
available as searchable and reusable text documents
to support language revitalisation."
                >
                    <template #image>
                        <NuxtImg src="/nyingarn/workspace1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/50words"
                    title="50words.online"
                    description="A resource for schools and educational organisations
                    to learn 50 words in their local languages."
                >
                    <template #image>
                        <NuxtImg src="/50words/50words1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/modpdsc"
                    title="Modern PARADISEC"
                    description="Modern PARADISEC is a demonstrator showing what a interface based on RO-Crates could do."
                >
                    <template #image>
                        <NuxtImg src="/modpdsc/modpdsc1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/code"
                    title="Code Repositories"
                    description="Uncategorised open source codes"
                >
                    <template #image>
                        <NuxtImg src="/code/code1.png" />
                    </template>
                </Feature>

                <Feature
                    to="/projects/pi"
                    title="Raspberry Pi and Data Loader"
                    description="An application to load catalog data onto Raspberry Pi's for repatriation."
                >
                    <template #image>
                        <NuxtImg src="/pi/pi1.png" />
                    </template>
                </Feature>
            </div>
        </span>
    </div>
</template>

<script setup>
import Feature from "../src/components/Feature.vue";
</script>

<style></style>
