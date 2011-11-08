---
layout: layout
title: CastorFs  filesystem
---
* Created in spring&nbsp;2009
* At [CERN][]</a><
* I create  program which can mount <a href="http://castor.web.cern.ch/castor/">Castor</a> as a POSIX&nbsp;filesystem

## Description
[CASTOR][] provides a powerful and rich interface for managing files and pools of
files backed by tape-storage. The API is modelled very closely on that of a POSIX filesystem,
where part of the actual I/O part is handled by the rfio library. While the API is very close
to POSIX it is still separated, which unfortunately makes it impossible to use standard tools
and scripts straight away. This is particularly inconvenient when applications are written in
languages other than C/C++ such as is frequently the case in web-apps. Here up to now the
only the recourse was to use command-line utilities and parse their output, which is clearly a
kludge. We have implemented a complete POSIX filesystem to access <a href="http://castor.web.cern.ch/castor/">Castor</a> using <a href="http://fuse.sourceforge.net/">FUSE</a>
(Filesystem in Userspace) and have successfully tested and used this on SLC4 and SLC5 (both
in 32 and 64 bit). We call it <a href="http://github.com/mazurov/castorfs">CastorFS</a>. In this paper we will present its architecture and
implementation, with emphasis on performance and caching&nbsp;aspects.

## Links
* <a href="http://github.com/mazurov/castorfs">Github&nbsp;repository</a></li>
* <a href="http://picasaweb.google.com/Alexander.Mazurov/Prague2009#5321176214170319746">My Poster at CHEP&nbsp;2009</a></li>

[CERN]: http://cern.ch
[CASTOR]: http://castor.web.cern.ch/castor/