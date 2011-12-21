---
layout: post
title: "HLT Profiling Results"
category: cern
---
<script type="text/javascript" src="/js/build/cputree.js"></script>

<script type="text/javascript">
var db_3lines = ["Total", 925615.0, [["Hlt1DiMuonHighMass", 643973.0, [["Hlt1DiMuonHighMassFilterSequence", 632275.0, [["Hlt1DiMuonHighMassStreamer", 601963.0, [["FastVeloHlt", 105119.0, []], ["MuonRec", 23073.0, []], ["Velo2CandidatesDiMuonHighMass", 6333.0, []]]], ["GECLooseUnit", 26345.0, [["createVeloLiteClusters", 16751.0, []], ["createITLiteClusters", 9594.0, []]]]]], ["Hlt1DiMuonHighMassL0DUFilterSequence", 11266.0, [["L0DUFromRaw", 11156.0, []], ["Hlt1DiMuonHighMassL0DUFilter", 110.0, []]]], ["Hlt1DiMuonHighMassPreScaler", 10.0, []]]], ["Hlt1TrackAllL0", 206371.0, [["Hlt1TrackAllL0FilterSequence", 205900.0, [["Hlt1TrackAllL0Unit", 150129.0, [["Velo2CandidatesTrackAllL0", 8551.0, []]]], ["HltPV3D", 41928.0, [["FastVeloHlt", 29619.0, []], ["HltPVsPV3D", 12309.0, []]]], ["GECLooseUnit", 11714.0, [["createVeloLiteClusters", 6001.0, []], ["createITLiteClusters", 5713.0, []]]]]], ["Hlt1TrackAllL0L0DUFilterSequence", 20.0, [["Hlt1TrackAllL0L0DUFilter", 10.0, []]]]]], ["Hlt1DiMuonLowMass", 71828.0, [["Hlt1DiMuonLowMassFilterSequence", 71241.0, [["HltPV3D", 55705.0, [["HltPVsPV3D", 55705.0, []]]], ["Hlt1DiMuonLowMassStreamer", 13883.0, [["Velo2CandidatesDiMuonLowMass", 5702.0, []]]]]], ["Hlt1DiMuonLowMassL0DUFilterSequence", 30.0, [["Hlt1DiMuonLowMassL0DUFilter", 10.0, []]]]]], ["Other", 1116.0, []]]];

var db_hlt1trackalll0 = ["Total", 483791.0, [["Hlt1TrackAllL0FilterSequence", 470873.0, [["Hlt1TrackAllL0Unit", 230205.0, [["Velo2CandidatesTrackAllL0", 8314.0, []]]], ["HltPV3D", 199266.0, [["FastVeloHlt", 136519.0, []], ["HltPVsPV3D", 62747.0, []]]], ["GECLooseUnit", 33685.0, [["createVeloLiteClusters", 20861.0, []], ["createITLiteClusters", 12824.0, []]]]]], ["Hlt1TrackAllL0L0DUFilterSequence", 11576.0, [["L0DUFromRaw", 11516.0, []], ["Hlt1TrackAllL0L0DUFilter", 60.0, []]]], ["Other", 651.0, []]]];

var db_hlt1dimuonhighmass = ["Total", 661848.0, [["Hlt1DiMuonHighMassFilterSequence", 650362.0, [["Hlt1DiMuonHighMassStreamer", 620920.0, [["FastVeloHlt", 108248.0, []], ["MuonRec", 22132.0, []], ["Velo2CandidatesDiMuonHighMass", 6504.0, []]]], ["GECLooseUnit", 25692.0, [["createVeloLiteClusters", 15734.0, []], ["createITLiteClusters", 9958.0, []]]]]], ["Hlt1DiMuonHighMassL0DUFilterSequence", 10564.0, [["L0DUFromRaw", 10478.0, []], ["Hlt1DiMuonHighMassL0DUFilter", 86.0, []]]], ["Other", 511.0, []], ["Hlt1DiMuonHighMassPreScaler", 10.0, []]]];

google.load("visualization", "1", {packages:["corechart", "table"]});
google.setOnLoadCallback(function() { 
  cputree_draw_chart([],db_3lines, "lines3_div");
  cputree_draw_chart([],db_hlt1trackalll0, "l0_div");
  cputree_draw_chart([],db_hlt1dimuonhighmass, "dimuonhighmass_div");
  
  cputree_table(db_3lines, "lines3db_div");
  cputree_table(db_hlt1trackalll0, "l0db_div");
  cputree_table(db_hlt1trackalll0, "dimuonhighmassdb_div");
});

</script>

* Profiling based on **IntelProfiler** Auditor (**NOT** on **Gaudi Timer**). 
  Moore was run on 10000 events.
* Every pie chart is clickable.
* For every algorithm I can provide CPU consumption by function
  (Intel Amplifier Tool is needed)

# 3 lines

<div id="lines3_div"></div>
<div id="lines3db_div"></div>

# Line Hlt1TrackAllL0

<div id="l0_div"></div>
<div id="l0db_div"></div>

# Line Hlt1DiMuonHighMass

<div id="dimuonhighmass_div"></div>
<div id="dimuonhighmassdb_div"></div>
