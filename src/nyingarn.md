---
layout: home
---

# Nyingarn Platform

The Nyingarn Platform consists of a Workspace and Repository to make manuscript sources of
Australian Indigenous Languages available as searchable and reusable text documents to support
language revitalisation.

## About

The workspace enables users to:

-   create items representing a manuscript or part of a manuscript;
-   upload images of each manuscript page for automated text extraction using AWS Textract;
-   supports multi file upload using the TUS upload protocol direct to S3;
-   upload pre created manuscript transcriptions as Text Encoding Initiative (TEI) documents or from
    DigiVol;
-   edit the transcriptions using a GUI TEI editor;
-   automate the processing of input images into thumbnails and web formats;
-   write detailed JSON-LD metadata using the embeddable describo editor.

The repository enables user to:

-   find content by searching by language, content and location;
-   view manuscript metadata;
-   view manuscript images.

## Technology

-   The Nyingarn Workspace and Repository applications are VueJS SPAs with a shared NodeJS/Fastify
    API backend.
-   Nyingarn uses the <Link link="https://describo.github.io">Describo VueJS Component</Link> as the
    metadata editor.
-   The API container is designed to be horizontally scalable by submitting processing jobs to a
    Rabbit Message Queue.
-   The Task runner container is also a NodeJS application that connects to the queue directly and
    processes jobs sequentially in a FIFO fashion. This container is also horizontally scalable.
-   [https://github.com/CoEDL/nyingarn-workspace](https://github.com/CoEDL/nyingarn-workspace)

<InfoPanel :border="false">
  <template #text>
    <div class="text-lg">
    <p> The platform consists of a number of docker containers that call out to AWS services where required.</p>
    <p>
        In the current deployment, the services all run on a single virtual machine. However,
        it can easily be transitioned to a cloud native application running under
        Kubernetes as load dictates.
    </p>
    </div>
  </template>
  <template #content>
    <Image src="/public/nyingarn/nyingarn-architecture.svg" class="w-full" />
  </template>
</InfoPanel>
<Image src="/public/nyingarn/workspace2.png" />
<Image src="/public/nyingarn/workspace1.png" />
<Image src="/public/nyingarn/workspace4.png" />
<Image src="/public/nyingarn/workspace3.png" />
<Image src="/public/nyingarn/workspace5.png" />
<Image src="/public/nyingarn/workspace6.png" />
<Image src="/public/nyingarn/workspace7.png" />
<Image src="/public/nyingarn/workspace8.png" />
<Image src="/public/nyingarn/repository2.png" />
<Image src="/public/nyingarn/repository3.png" />
<Image src="/public/nyingarn/repository4.png" />
<Image src="/public/nyingarn/repository5.png" />
