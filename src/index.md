---
layout: home
---

<div class="mt-16 text-2xl">Marco La Rosa, PhD</div>
<div class="text-lg">Full Stack Software Developer</div>
<div class="text-lg">Dev/Ops Specialist</div>
<div class="text-lg">Scientist</div>

<div class="flex flex-col space-y-4 mb-20">
  <p class="text-2xl">Throughout my career I have been relied upon to
  architect and create scalable, manageable and performant systems.</p>
  <p class="text-2xl">Meticulous,
  analytical and highly adaptable, I am able to quickly develop expertise in new fields
  and technologies. I take a holistic approach to my work in order to ensure that a
  solution is developed using the best available technology for that problem. </p>
  <p class="text-2xl">Following is a sample of my work over the last few years.</p>
</div>

<InfoPanel class="mt-5">
  <template #title><Link link="https://describo.github.io" target="_blank">Describo</Link></template>
  <template #text>
    <div class="text-lg">
      <p>Transform, Discover, Explore, Describe: Extract the information and value from your data.</p>
      <p>
        With Describo, you can describe your data; discover the narratives
        contained within it, and create rich descriptions from it. As you work,
        Describo creates a linked data index containing
        all of your efforts.
      </p>
      <p>Describo is built on AWS and provides tools for data description, transcription and entity recognition / markup,
        wdiscovery using
        <Link link="https://www.anthropic.com/" target="_blank">GenerativeAI from Anthropic.</Link></p>
      <p>I am the project lead and core developer.</p>
      <p>
        <Link link="https://describo.github.io" target="_blank">https://describo.github.io</Link>
      </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/describo/desktop4.webp" />
  </template>
</InfoPanel>

<InfoPanel class="mt-5">
  <template #title><Link link="/nyingarn" target="">Nyingarn Platform</Link></template>
  <template #text>
    <div class="text-lg">
      <p>Nyingarn makes manuscript sources of Australian Indigenous languages available as searchable and reusable
      text documents to support language revitalisation.</p>
      <p>I was the lead developer for the project responsible for the design and build of the workspace and repository.</p>
      <p>
        <Link link="https://workspace.nyingarn.net" target="_blank">https://workspace.nyingarn.net</Link>
      </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/nyingarn/workspace1.png" />
  </template>
</InfoPanel>

<InfoPanel class="mt-5">
  <template #title><Link link="/50words" target="">50words</Link></template>
  <template #text>
    <div class="text-lg">
      <p>A resource for schools and educational organisations to learn 50 words in their local language.</p>
      <p>
        <Link link="https://50words.online" target="_blank">https://50words.online</Link>
      </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/50words/50words1.png" />
  </template>
</InfoPanel>

<InfoPanel class="mt-5">
  <template #title><Link link="/modpdsc" target="">Modern PARADISEC</Link></template>
  <template #text>
    <div class="text-lg">
      <p>Modern PARADISEC is a demonstrator showing what a modern interface built on RO-Crates could do.</p>
      <p>
        <Link link="https://mod.paradisec.org.au/" target="_blank">https://mod.paradisec.org.au/</Link>
      </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/modpdsc/modpdsc1.png" />
  </template>
</InfoPanel>

<InfoPanel class="mt-5">
  <template #title><Link link="/olacvis" target="">Open Language Archives Data Visualisation</Link></template>
  <template #text>
    <div class="text-lg">
      <p>A visualisation of the data at the Open Language Archives.</p>
      <p>
        <Link link="https://language-archives.services/olacvis/" target="_blank">https://language-archives.services/olacvis/</Link>
      </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/olacvis/olacvis1.png" />
  </template>
</InfoPanel>

<script setup>
  import {
    faRoute,
    faDownload,
    faCode,
    faPersonChalkboard,
    faUsers,
    faStar,
    faBookOpenReader,
    faBook,
    faFileLines
  }  from "@fortawesome/free-solid-svg-icons";
  import TagLine from "./vue-components/TagLine.vue";
</script>
