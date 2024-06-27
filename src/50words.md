---
layout: home
---

# 50 Words Project

This project from the Research Unit for Indigenous Language aims to provide fifty words in
Indigenous languages of Australia. The map is intended to be a useful resource for schools and
educational organisations to learn 50 words in their local languages, and for the general public to
discover the diversity of languages around Australia.

## Technology

The application is a VueJS SPA with a Python data processing backend. Project managers collect
recordings of native speakers speaking the words and upload the WAV files to the server along with
an Excel spreadsheet containing the metadata. They then run a python script which creates an mp3
file for each wav file and a set of JSON index files. When the application loads, it loads the main
index file which then has links to the sub index files. In this way, the application itself can run
as an SPA without an API server. It also means the application scales with the data rather than
slowing down as number of languages increases.

[https://github.com/coedl/50words.online](https://github.com/coedl/50words.online)

<Image src="/50words/50words1.png" />
<Image src="/50words/50words2.png" />
<Image src="/50words/50words3.png" />
<Image src="/50words/50words4.png" />
