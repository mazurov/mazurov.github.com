---
layout: post
title: Projects
---
## Gaudi Intel Profiler

### Description
[Gaudi][gaudi] CPU profiling auditor. Based on [Intel® VTune™ Amplifier XE ][amplifier].

* 2011&mdash;2012, [CERN][]
* Languages: C++, python

### Links
* [Source code repository and documentation][githubprofiler]
* [Example][githubprofilerexample]
* [Results of profiling High Level Trigger's lines.][profilerresults]
* [A perfomance of tcmalloc's functions in comarison with the "new" operator.][tcmalloc]


[githubprofiler]: http://goo.gl/xhtTi
[githubprofilerexample]: http://goo.gl/cLV13


[amplifier]: http://software.intel.com/en-us/articles/intel-vtune-amplifier-xe/
[gaudi]: http://proj-gaudi.web.cern.ch/proj-gaudi/
[profilerresults]: /cern/hltprofilingresults/
[tcmalloc]: /cern/tcmalloc


## CastorFS

I create  program which can mount <a href="http://castor.web.cern.ch/castor/">Castor</a> as a POSIX&nbsp;filesystem

* Spring&nbsp;2009, [CERN][]
* Languages: C

### Description
[CASTOR][] provides a powerful and rich interface for managing files and pools of
files backed by tape-storage. The API is modelled very closely on that of a POSIX filesystem,
where part of the actual I/O part is handled by the rfio library. While the API is very close
to POSIX it is still separated, which unfortunately makes it impossible to use standard tools
and scripts straight away. This is particularly inconvenient when applications are written in
languages other than C/C++ such as is frequently the case in web-apps. Here up to now the
only the recourse was to use command-line utilities and parse their output, which is clearly a
kludge. We have implemented a complete POSIX filesystem to access [CASTOR][]] using [FUSE][]
(Filesystem in Userspace) and have successfully tested and used this on SLC4 and SLC5 (both
in 32 and 64 bit). We call it [CastorFS][]. In this paper we will present its architecture and
implementation, with emphasis on performance and caching&nbsp;aspects.

### Links
* [Github&nbsp;repository][CastorFS]
* [Poster at CHEP&nbsp;2009][Poster]

## Backend for "Bank VTB24" web site
* Created in April&nbsp;2007

### Links
* [Information about site (in&nbsp;russian)][al_ru]
* [Information about site (in&nbsp;english)][al_en]

[CERN]: http://cern.ch
[CASTOR]: http://castor.web.cern.ch/castor/

[FUSE]: http://fuse.sourceforge.net/
[CastorFS]: http://github.com/mazurov/castorfs
[poster]: http://picasaweb.google.com/Alexander.Mazurov/Prague2009#5321176214170319746
[al_ru]: http://www.artlebedev.ru/everything/vneshtorgbank/24/
[al_en]: http://www.artlebedev.com/everything/vneshtorgbank/24/