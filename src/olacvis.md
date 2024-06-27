---
layout: home
---

# Open Language Archives Data Visualisation

The Open Language Archives Community is an international partnership of institutions and individuals
who are creating a worldwide virtual library of language resources. Sometimes you get a project
that's just perfect. One where the task is challenging but you have full freedom to design a
creative solution. This is one of those. The brief: Produce a visualisation of the data at the OLAC
website.

## Technology

-   The site is a combination of a backend data harvester written in JS and VueJS SPA.
-   The harvester is run periodically (cron) and it starts by harvesting the area data files and
    then walking the links from there.
-   All of the data on that site is in HTML pages so the harvester uses XPATH to select the content
    it wants.
-   When it's done harvesting it creates a set of JSON index files that are then made available to
    the webserver. Check it out in the next card.
-   Then, mounting the repository into a known location of the webserver, the VueJS just loads what
    it needs as it needs it. And there's no API needed.
-   [https://github.com/CoEDL/olac-visualisation-v2](https://github.com/CoEDL/olac-visualisation-v2)

<Image src="/public/olacvis/olacvis1.png" />
<Image src="/public/olacvis/olacvis2.png" />
<Image src="/public/olacvis/olacvis3.png" />
<Image src="/public/olacvis/olacvis4.png" />
<Image src="/public/olacvis/olacvis5.png" />
<Image src="/public/olacvis/olacvis6.png" />
<Image src="/public/olacvis/olacvis7.png" />
<Image src="/public/olacvis/olacvis8.png" />
