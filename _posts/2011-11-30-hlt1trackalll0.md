---
layout: post
title: "HLT Profiling &mdash; Hlt1TrackAllL0"
category: cern
---

HltConf().AdditionalHlt1Lines = \[ "Hlt1TrackAllL0"\]

## CPU usage pie chart
### From timing auditor (50000 events)
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0Ag1zWDlANxEodGxGZ1VrY0thZUxWOXFJMVBfT2RURGc&transpose=0&headers=1&range=A1%3AB7&gid=0&pub=1","options":{"vAxes":[{"viewWindowMode":"pretty","viewWindow":{}},{"viewWindowMode":"pretty","viewWindow":{}}],"colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#651067","#329262","#5574A6","#3B3EAC","#B77322","#16D620","#B91383","#F4359E","#9C5935","#A9C413","#2A778D","#668D1C","#BEA413","#0C5922","#743411"],"hasLabelsColumn":true,"hAxis":{"maxAlternations":1},"width":640,"height":400},"state":{},"chartType":"PieChart","chartName":"Chart 1"} </script>

### From sampling (10000 events)
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0Ag1zWDlANxEodEljX2dwcDBycUNYZHJrVm4xQ21vemc&transpose=0&headers=0&range=A3%3AB8&gid=0&pub=1","options":{"vAxes":[{"viewWindowMode":"pretty","viewWindow":{}},{"viewWindowMode":"pretty","viewWindow":{}}],"title":"Hlt1TrackAllL0 line (sampling results)","backgroundColor":"#FFFFFF","legend":"right","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#651067","#329262","#5574A6","#3B3EAC","#B77322","#16D620","#B91383","#F4359E","#9C5935","#A9C413","#2A778D","#668D1C","#BEA413","#0C5922","#743411"],"is3D":false,"hasLabelsColumn":true,"hAxis":{"maxAlternations":1},"width":640,"height":400},"state":{},"view":"{\"columns\":[0,1]}","chartType":"PieChart","chartName":"Chart 1"} </script>

<img src="http://f.cl.ly/items/3y2T1Q3r372u302m0u2b/Selection_005.png"/>

## Hlt1TrackAllL0Unit sequence

**Hlt1TrackAllL0Unit** sequence. Reports can be regenerated from Intel Amplifier
results (olwork27.cern.ch:/data/amazurov/Amplifier/MooreRunSingleLine/r006hs)

### By module
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0Ag1zWDlANxEodEtUQVRzWFdCUmxlQ1Q0NER2b0hia3c&transpose=0&headers=0&range=A2%3AB22&gid=1&pub=1","options":{"vAxes":[{"viewWindowMode":"pretty","viewWindow":{}},{"viewWindowMode":"pretty","viewWindow":{}}],"title":"Hlt1TrackAllL0Unit CPU (by module)","backgroundColor":"#FFFFFF","legend":"right","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#651067","#329262","#5574A6","#3B3EAC","#B77322","#16D620","#B91383","#F4359E","#9C5935","#A9C413","#2A778D","#668D1C","#BEA413","#0C5922","#743411"],"is3D":false,"hasLabelsColumn":true,"hAxis":{"maxAlternations":1},"width":640,"height":400},"state":{},"chartType":"PieChart","chartName":"Chart 1"} </script>

### By class
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0Ag1zWDlANxEodDloMWR6TjNXZ24tYzZnMWVIRDB2cVE&transpose=0&headers=1&range=A1%3AB34&gid=0&pub=1","options":{"vAxes":[{"viewWindowMode":"pretty","viewWindow":{}},{"viewWindowMode":"pretty","viewWindow":{}}],"title":"Hlt1TrackAllL0Unit CPU (by class)","backgroundColor":"#FFFFFF","legend":"right","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#651067","#329262","#5574A6","#3B3EAC","#B77322","#16D620","#B91383","#F4359E","#9C5935","#A9C413","#2A778D","#668D1C","#BEA413","#0C5922","#743411"],"is3D":false,"hasLabelsColumn":true,"hAxis":{"maxAlternations":1},"width":640,"height":400},"state":{},"chartType":"PieChart","chartName":"Chart 1"} </script>

### By function
<script type="text/javascript" src="//ajax.googleapis.com/ajax/static/modules/gviz/1.0/chart.js"> {"dataSourceUrl":"//docs.google.com/spreadsheet/tq?key=0Ag1zWDlANxEodDFzOHg5R2RGQlFIOHp2SHM5dTZPYWc&transpose=0&headers=0&range=A2%3AB11&gid=1&pub=1","options":{"vAxes":[{"viewWindowMode":"pretty","viewWindow":{}},{"viewWindowMode":"pretty","viewWindow":{}}],"title":"Hlt1TrackAllL0Unit CPU","height":400,"backgroundColor":"#FFFFFF","colors":["#3366CC","#DC3912","#FF9900","#109618","#990099","#0099C6","#DD4477","#66AA00","#B82E2E","#316395","#994499","#22AA99","#AAAA11","#6633CC","#E67300","#8B0707","#651067","#329262","#5574A6","#3B3EAC","#B77322","#16D620","#B91383","#F4359E","#9C5935","#A9C413","#2A778D","#668D1C","#BEA413","#0C5922","#743411"],"legend":"right","width":640,"is3D":false,"hAxis":{"maxAlternations":1},"hasLabelsColumn":true},"state":{},"chartType":"PieChart","chartName":"Chart 1"} </script>