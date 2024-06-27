---
layout: home
---

# Modern PARADISEC

Modern PARADISEC is a demonstrator developed in 2019 to see how a modern interface might work on top
of the PARADISEC collection when the metadata is written out as Research Object Crates.

Modern PARADISEC uses an Oxford Common File Layout on the backend storage and the data is stored as
Research Object Crates.

## About

This demonstrator was funded by a small project grant from the ARDC in 2019. The demonstrator
comprises a few parts, including:

-   An exporter that reflected the MySQL database structure and wrote out the metadata from each tem
    as an RO-Crate. This code is not open so can't be linked to.
-   The demonstrator itself which is a VueJS SPA bundled into a docker container. For this
    demonstrator authentication was not required so there is no API. It works by also mounting the
    OCFL filesystem into the container in a known location, then, the URL path is transformed into
    the backend storage path per request.
-   [https://github.com/CoEDL/modpdsc](https://github.com/CoEDL/modpdsc)
-   The final component is the tooling to walk the OCFL filesystem and populate the elastic search
    index. [https://github.com/CoEDL/ocfl-tools](https://github.com/CoEDL/ocfl-tools)

<Image src="/modpdsc/modpdsc1.png" />
<Image src="/modpdsc/modpdsc2.png" />
<Image src="/modpdsc/modpdsc3.png" />
<Image src="/modpdsc/modpdsc4.png" />
<Image src="/modpdsc/modpdsc5.png" />
<Image src="/modpdsc/modpdsc6.png" />
<Image src="/modpdsc/modpdsc7.png" />
<Image src="/modpdsc/modpdsc8.png" />
<Image src="/modpdsc/modpdsc9.png" />
<Image src="/modpdsc/modpdsc10.png" />
<Image src="/modpdsc/modpdsc11.png" />
