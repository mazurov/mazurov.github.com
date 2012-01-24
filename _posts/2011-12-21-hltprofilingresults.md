---
layout: post
title: "HLT Profiling Results"
category: cern
---
<script type="text/javascript" src="/js/build/cputree.js"></script>

<script type="text/javascript">
var db_3lines_debug = ["Total", 925615.0, [["Hlt1DiMuonHighMass", 643973.0, [["Hlt1DiMuonHighMassFilterSequence", 632275.0, [["Hlt1DiMuonHighMassStreamer", 601963.0, [["FastVeloHlt", 105119.0, [], 11.359999999999999], ["MuonRec", 23073.0, [], 2.4900000000000002], ["Velo2CandidatesDiMuonHighMass", 6333.0, [], 0.68000000000000005]], 65.030000000000001], ["GECLooseUnit", 26345.0, [["createVeloLiteClusters", 16751.0, [], 1.8100000000000001], ["createITLiteClusters", 9594.0, [], 1.04]], 2.8500000000000001]], 68.310000000000002], ["Hlt1DiMuonHighMassL0DUFilterSequence", 11266.0, [["L0DUFromRaw", 11156.0, [], 1.21], ["Hlt1DiMuonHighMassL0DUFilter", 110.0, [], 0.01]], 1.22], ["Hlt1DiMuonHighMassPreScaler", 10.0, [], 0.0]], 69.569999999999993], ["Hlt1TrackAllL0", 206371.0, [["Hlt1TrackAllL0FilterSequence", 205900.0, [["Hlt1TrackAllL0Unit", 150129.0, [["Velo2CandidatesTrackAllL0", 8551.0, [], 0.92000000000000004]], 16.219999999999999], ["HltPV3D", 41928.0, [["FastVeloHlt", 29619.0, [], 3.2000000000000002], ["HltPVsPV3D", 12309.0, [], 1.3300000000000001]], 4.5300000000000002], ["GECLooseUnit", 11714.0, [["createVeloLiteClusters", 6001.0, [], 0.65000000000000002], ["createITLiteClusters", 5713.0, [], 0.62]], 1.27]], 22.239999999999998], ["Hlt1TrackAllL0L0DUFilterSequence", 20.0, [["Hlt1TrackAllL0L0DUFilter", 10.0, [], 0.0]], 0.0]], 22.300000000000001], ["Hlt1DiMuonLowMass", 71828.0, [["Hlt1DiMuonLowMassFilterSequence", 71241.0, [["HltPV3D", 55705.0, [["HltPVsPV3D", 55705.0, [], 6.0199999999999996]], 6.0199999999999996], ["Hlt1DiMuonLowMassStreamer", 13883.0, [["Velo2CandidatesDiMuonLowMass", 5702.0, [], 0.62]], 1.5]], 7.7000000000000002], ["Hlt1DiMuonLowMassL0DUFilterSequence", 30.0, [["Hlt1DiMuonLowMassL0DUFilter", 10.0, [], 0.0]], 0.0]], 7.7599999999999998], ["Other", 1116.0, [], 0.12]], 100.0];

var db_3lines=["Total", 220430.0, [["Hlt1DiMuonHighMass", 145680.0, [["Hlt1DiMuonHighMassFilterSequence", 135090.0, [["Hlt1DiMuonHighMassStreamer", 129250.0, [["FastVeloHlt", 32369.999999999996, [], 14.68], ["MuonRec", 6240.0, [], 2.8300000000000001], ["Velo2CandidatesDiMuonHighMass", 1580.0, [], 0.71999999999999997]], 58.640000000000001], ["GECLooseUnit", 3580.0, [["createITLiteClusters", 2510.0, [], 1.1399999999999999], ["createVeloLiteClusters", 1070.0, [], 0.48999999999999999]], 1.6200000000000001]], 61.280000000000001], ["Hlt1DiMuonHighMassL0DUFilterSequence", 10340.0, [["L0DUFromRaw", 10310.0, [], 4.6799999999999997], ["Hlt1DiMuonHighMassL0DUFilter", 30.0, [], 0.01]], 4.6900000000000004]], 66.090000000000003], ["Hlt1TrackAllL0", 59340.0, [["Hlt1TrackAllL0FilterSequence", 57310.0, [["Hlt1TrackAllL0Unit", 42290.0, [["Velo2CandidatesTrackAllL0", 640.0, [], 0.28999999999999998]], 19.190000000000001], ["HltPV3D", 11350.0, [["FastVeloHlt", 9370.0, [], 4.25], ["HltPVsPV3D", 1980.0, [], 0.90000000000000002]], 5.1500000000000004], ["GECLooseUnit", 2400.0, [["createVeloLiteClusters", 2330.0, [], 1.0600000000000001], ["createITLiteClusters", 70.0, [], 0.029999999999999999]], 1.0900000000000001]], 26.0]], 26.920000000000002], ["Hlt1DiMuonLowMass", 13570.0, [["Hlt1DiMuonLowMassFilterSequence", 12820.0, [["HltPV3D", 9620.0, [["HltPVsPV3D", 9620.0, [], 4.3600000000000003]], 4.3600000000000003], ["Hlt1DiMuonLowMassStreamer", 2500.0, [["Velo2CandidatesDiMuonLowMass", 1140.0, [], 0.52000000000000002]], 1.1299999999999999]], 5.8200000000000003]], 6.1600000000000001]], 100.0];

var db_hlt1trackalll0 = ["Total", 483791.0, [["Hlt1TrackAllL0FilterSequence", 470873.0, [["Hlt1TrackAllL0Unit", 230205.0, [["Velo2CandidatesTrackAllL0", 8314.0, [], 1.72]], 47.579999999999998], ["HltPV3D", 199266.0, [["FastVeloHlt", 136519.0, [], 28.219999999999999], ["HltPVsPV3D", 62747.0, [], 12.970000000000001]], 41.189999999999998], ["GECLooseUnit", 33685.0, [["createVeloLiteClusters", 20861.0, [], 4.3099999999999996], ["createITLiteClusters", 12824.0, [], 2.6499999999999999]], 6.96]], 97.329999999999998], ["Hlt1TrackAllL0L0DUFilterSequence", 11576.0, [["L0DUFromRaw", 11516.0, [], 2.3799999999999999], ["Hlt1TrackAllL0L0DUFilter", 60.0, [], 0.01]], 2.3900000000000001], ["Other", 651.0, [], 0.13]], 100.0];



var db_hlt1dimuonhighmass_debug = ["Total", 661848.0, [["Hlt1DiMuonHighMassFilterSequence", 650362.0, [["Hlt1DiMuonHighMassStreamer", 620920.0, [["FastVeloHlt", 108248.0, [], 16.359999999999999], ["MuonRec", 22132.0, [], 3.3399999999999999], ["Velo2CandidatesDiMuonHighMass", 6504.0, [], 0.97999999999999998]], 93.819999999999993], ["GECLooseUnit", 25692.0, [["createVeloLiteClusters", 15734.0, [], 2.3799999999999999], ["createITLiteClusters", 9958.0, [], 1.5]], 3.8799999999999999]], 98.260000000000005], ["Hlt1DiMuonHighMassL0DUFilterSequence", 10564.0, [["L0DUFromRaw", 10478.0, [], 1.5800000000000001], ["Hlt1DiMuonHighMassL0DUFilter", 86.0, [], 0.01]], 1.6000000000000001], ["Other", 511.0, [], 0.080000000000000002], ["Hlt1DiMuonHighMassPreScaler", 10.0, [], 0.0]], 100.0];

var db_hlt1dimuonhighmass = ["Total", 142850.0, [["Hlt1DiMuonHighMassFilterSequence", 132570.0, [["Hlt1DiMuonHighMassStreamer", 126640.0, [["FastVeloHlt", 30860.0, [], 21.600000000000001], ["MuonRec", 6180.0, [], 4.3300000000000001], ["Velo2CandidatesDiMuonHighMass", 1870.0, [], 1.3100000000000001]], 88.650000000000006], ["GECLooseUnit", 3690.0, [["createITLiteClusters", 2830.0, [], 1.98], ["createVeloLiteClusters", 860.0, [], 0.59999999999999998]], 2.5800000000000001]], 92.799999999999997], ["Hlt1DiMuonHighMassL0DUFilterSequence", 9940.0, [["L0DUFromRaw", 9860.0, [], 6.9000000000000004], ["Hlt1DiMuonHighMassL0DUFilter", 80.0, [], 0.059999999999999998]], 6.96]], 100.0];

var db_hlt1dimuonlowmass = ["Total", 814979.0, [["Hlt1DiMuonLowMassFilterSequence", 799602.0, [["Hlt1DiMuonLowMassStreamer", 528579.0, [["MuonRec", 27863.0, [], 3.4199999999999999], ["Velo2CandidatesDiMuonLowMass", 7662.0, [], 0.93999999999999995]], 64.859999999999999], ["HltPV3D", 216873.0, [["FastVeloHlt", 151668.0, [], 18.609999999999999], ["HltPVsPV3D", 65205.0, [], 8.0]], 26.609999999999999], ["GECLooseUnit", 46538.0, [["createVeloLiteClusters", 29726.0, [], 3.6499999999999999], ["createITLiteClusters", 16812.0, [], 2.0600000000000001]], 5.71]], 98.109999999999999], ["Hlt1DiMuonLowMassL0DUFilterSequence", 11815.0, [["L0DUFromRaw", 11815.0, [], 1.45]], 1.45], ["Other", 1327.0, [], 0.16]], 100.0];

google.load("visualization", "1", {packages:["corechart", "table"]});
google.setOnLoadCallback(function() { 
  cputree_draw_chart([],db_3lines, "lines3_div");
  cputree_draw_chart([],db_hlt1trackalll0, "l0_div");
  cputree_draw_chart([],db_hlt1dimuonhighmass, "dimuonhighmass_div");
  cputree_draw_chart([],db_hlt1dimuonlowmass, "dimuonlowmass_div");
  
  cputree_table(db_3lines, "lines3db_div");
  cputree_table(db_hlt1trackalll0, "l0db_div");
  cputree_table(db_hlt1dimuonhighmass, "dimuonhighmassdb_div");
  cputree_table(db_hlt1dimuonlowmass, "dimuonlowmassdb_div");
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

# Line Hlt1DiMuonLowMass
<div id="dimuonlowmass_div"></div>
<div id="dimuonlowmassdb_div"></div>

# Screenshots from Intel Amplifier

* [Common window][ampl_common]
* [In source code][ampl_source]

[ampl_common]: http://cl.ly/2E3T0c0R0h2k353A1o1a
[ampl_source]: http://cl.ly/2u030f2T2g3S2G2s2o1k
