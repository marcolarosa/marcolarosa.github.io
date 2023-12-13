<template>
    <stack>
        <card>
            <template #text>
                <div class="text-center text-3xl my-10">
                    Open Language Archives Community - Visualisation
                </div>
                <linker
                    class="text-center"
                    to="https://language-archives.services/olacvis/"
                ></linker>
            </template>
        </card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    <div>
                        The
                        <linker to="http://www.language-archives.org/">
                            Open Language Archives Community
                        </linker>
                        is an international partnership of institutions and individuals who are
                        creating a worldwide virtual library of language resources.
                    </div>
                </template>
            </card>
            <card>
                <template #text>
                    <div>
                        Sometimes you get a project that's just perfect. One where the task is
                        challenging but you have full freedom to design a creative solution. This is
                        one of those.
                    </div>
                    <div class="my-4">
                        The brief: Produce a visualisation of the data at the OLAC website.
                    </div>
                </template>
            </card>
        </div>

        <card>
            <template #text>
                <p class="text-2xl">Technology:</p>
                <ul class="list-disc">
                    <li>
                        The site is a combination of a backend data harvester written in JS and
                        VueJS SPA.
                    </li>
                    <li>
                        The harvester is run periodically (cron) and it starts by harvesting the
                        area data files and then walking the links from there.
                    </li>
                    <li>
                        All of the data on that site is in HTML pages so the harvester uses XPATH to
                        select the content it wants.
                    </li>
                    <li>
                        When it's done harvesting it creates a set of JSON index files that are then
                        made available to the webserver. Check it out in the next card.
                    </li>
                    <li>
                        Then, mounting the repository into a known location of the webserver, the
                        VueJS just loads what it needs as it needs it. And there's no API needed.
                    </li>
                    <li>
                        <linker to="https://github.com/CoEDL/olac-visualisation-v2"></linker>
                    </li>
                </ul>
            </template>
        </card>
        <card>
            <template #text>
                <div>
                    This is what the repository looks like. It's just data files that can be served
                    via HTTP.
                </div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis8.png" class="object-contain" />
            </template>
        </card>

        <card>
            <template #text>
                <div>
                    The app landing page showing the 7454 documented languages. From the here the
                    use can browse around to look for a language or use the controls to jump to a
                    location or directly to a language.
                </div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis1.png" class="object-contain" />
            </template>
        </card>

        <card>
            <template #text>
                <div>Shades of Orange...</div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis2.png" class="object-contain" />
            </template>
        </card>

        <card>
            <template #text>
                <div>Shades of Blue...</div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis3.png" class="object-contain" />
            </template>
        </card>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <card>
                <template #text>
                    <div>Zooming in to a given country.</div>
                </template>
                <template #image>
                    <img src="/olacvis/olacvis4.png" class="object-contain" />
                </template>
            </card>

            <card>
                <template #text>
                    <div>Zoomed into Australia.</div>
                </template>
                <template #image>
                    <img src="/olacvis/olacvis5.png" class="object-contain" />
                </template>
            </card>
        </div>

        <card>
            <template #text>
                <div>The languages of Australia. Eastern Arrente has 362 resources.</div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis6.png" class="object-contain" />
            </template>
        </card>

        <card>
            <template #text>
                <div>
                    Navigating to the Eastern Arrente page we can see all the known resources for
                    the language, categorised by their type (Primary Texts, Lexical resources, ...).
                    Selecting a resource dynamically fetches the HTML page from the website, parses
                    it and extracts the link to the original resource that the OLAC page describes
                    so the user can easily get back to the OLAC page or the page it's about.
                </div>
            </template>
            <template #image>
                <img src="/olacvis/olacvis7.png" class="object-contain" />
            </template>
        </card>
    </stack>
</template>

<script setup>
import linker from "~/src/components/linker.vue";
import stack from "~/src/components/stack.vue";
import card from "~/src/components/Card.vue";
</script>
