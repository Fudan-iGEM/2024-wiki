---
title: Engineering
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif

author:
- name: Ruiwen Ma
  url: /fudan/team/#ruiwen-ma
- name: Kevin Qi
  url: /fudan/team/#kevin-qi
---

## Surface Display for Bacteria

### Design

In our biofilm research, we employed a [biofilm formation system](/description/#our-solution), which displays antigen-nanobody pairs on the surface of *E.coli*. To achieve our objective efficiently, we needed to identify a suitable surface display system for antigen, nanobody or lectin. After [Registry](/software/) and literature search, we have identified two candidate proteins: INPNC and intimin. The former has been used by multiple teams in previous projects [BBa_K4195034](https://parts.igem.org/Part:BBa_K4195034), while the latter has been reported to show promising results in the literature[^1][^2]. Therefore, our plan is to compare the surface display efficiency of intimin and INPNC by evaluating their biofilm formation capability, after fusion with antigen or nanobody.

### Build

We constructed four parts, including intimin-Ag3 fusion ([BBa_K4765105](https://parts.igem.org/Part:BBa_K4765105)), intimin-Nb3 fusion ([BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106)), INPNC-Ag3 fusion ([BBa_K4765107](https://parts.igem.org/Part:BBa_K4765107)), and INPNC-Nb3 fusion ([BBa_K4765108](https://parts.igem.org/Part:BBa_K4765108)). When designing these parts, we utilized the ribozyme-assisted polycistronic co-expression (pRAP) system[^3], which promotes the stable expression of multiple coding sequences.

### Test

We compared the efficiency of the two surface display systems by mixing the *E.coli* pairs mentioned above. As Figure 1 indicates, when we select intimin as the display protein for both antigen and nanobody, the results are significantly better than other combinations.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/yzm/intimin-vs-inpnc.jpg" style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Bacteria Percentage Remaining in the Supernatant 3h after Mixation<br>The bacterial quantity in the supernatant is quantified by measuring the OD<sub>600</sub> (1 OD<sub>600</sub> corresponds to 10<sup>8</sup> bacterial particles).<br>In Figure 1, bacterial solutions of intimin-Ag3 and intimin-Nb3, INPNC-Nb3 and intimin-Ag3, INPNC-Ag3 and intimin-Nb3, as well as plain bacteria (control), were mixed in a 1:1 ratio (600μL per strain per tube, with 1.2mL for plain bacteria aggregation) and allowed to settle. Sampling was performed at 0, 3, and 6 hours by collecting 100μL aliquots from the upper 25% of each mixture (supernatant) in each tube. These samples were subsequently transferred to EP tubes and stored at 4℃ until the final sampling. Afterward, they were resuspended and transferred to a 96-well assay plate for OD<sub>600</sub> measurement. The percentage of bacteria remaining in the supernatant at 3 hours was determined by dividing the bacterial count at 3 hours (as determined by the OD<sub>600</sub> measurement) by the bacterial count at 0 hours.</small></p >
</div>
</div>


### Learn

As described above, we compare the surface display efficiency of intimin and INPNC. The optimal aggregation formation was observed when both antigen and nanobody were presented using intimin. Consequently, we predominantly employ intimin as the display fusion partner in our subsequent experiments.

This DBTL cycle is just one example of our wet lab engineering. Please refer to main pages of [our parts on the Registry](https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2023&group=Fudan).

## Developing our software: RAP

### Cycle 1: Design

During the initial design phase of the RAP, our emphasis lies on the RAP's purpose and its intended outputs. We engaged in consultations with team members of the [Fudan iGEM 2022](https://2022.igem.wiki/fudan/team/), and they presented two primary requisites to us:

1. Modeling the metabolic flux
2. Designing of synthetic ribosome binding site (RBS)

Following a background survey on metabolic optimization, we identified requirement for an enzyme kinetics database.

Since the output of the software should be DNA sequence ready for order, we considered to build an intuitive user interface. After research, we decided to develop a web UI based on [Vue.js](https://vuejs.org/). To streamline the development using existing open-sourced libraries, we have chosen Python as the backend programming language and MySQL as the database for enzyme dynamics.

### Cycle 1: Build

In order to facilitate debugging, maintenance and distribution of the software, we have opted to modularize the development with docker. Consequently, we have developed three modules necessary to implement our design: KineticHub, RAP Builder, Web UI.

- KineticHub aims at quantitative optimization according to metabolic flux
- RAP Builder designs synthetic RBS and output DNA sequence ready for order
- Web UI offers an intuitive user interface for world-wide users

We obtained data from the open-source version of BRENDA to build KineticHub with MySQL and provide RESTFul APIs with Flask. We utilize a thermodynamic model based on Gibbs free energy and Monte Carlo algorithm for RAP Builder to design synthetic RBS in Cycle 1. [RAP (v0.2.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.2.0-beta) was released in this phase.

### Cycle 1: Test

We conducted an efficiency test of the Monte Carlo algorithm implemented in RAP Builder, and the results are illustrated in [Figure 2](#fig-2).

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/czy/monte-carlo-efficiency.svg" style='width:60%'>
<br>
<div>
  <p><small style="color: gray">Figure 2: The Efficiency of RBS searching by Monte Carlo algorithm. The ddG means difference between dG target and current dG.</small></p>
</div>
</div>

RAP Builder's Monte Carlo algorithm has a good search efficiency and can get a suitable sequence in a range of up to 1,000 iterations.

### Cycle 1: Learn

We initiated RAP trials involving the team members participating experiments, along with previous [Fudan iGEM 2022](https://2022.igem.wiki/fudan/) team members, engaging in two-way dialogues with them. They were introduced to the workflow of RAP and instructed on how to use RAP. Simultaneously, they gave valuable suggestions for further enhancing the RAP system ([Figure 3](#fig-3)).

<div style="text-align: center;" id="fig-3">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/engine-1.jpg" style='width:60%'>
<br>
<div>
  <p><small style="color: gray">Figure 3: Discussion with previous iGEMer and wet lab member.</small></p>
</div>
</div>

Review: It was observed that the user requires to input coding sequences as the first step to construct. Because, last year we already have a [PartHub for Parts](https://2022.igem.wiki/fudan/software/) searching and seuqence fetching. Therefore, further enhancements to PartHub and its integration into the RAP workflow could potentially enhance RAP.

### Cycle 2: Design

For PartHub&nbsp;2, our emphasis was primarily on the following features:

1. Updating database with **2022 iGEM Registry of Standard Biological Parts**
2. Improving its user interaction interface
3. Developing a diversified recommendation algorithm utilizing graph algorithms

As in the previous [PartHub](https://2022.igem.wiki/fudan/software/), we continued to employ Neo4j as the graph database for the storage of Parts information. However, this year, we designed RESTful APIs, to expand its capabilities for flexible intergation. For the third feature, we employed a diversified recommendation algorithm using the [PageRank](https://en.wikipedia.org/wiki/PageRank) and [Louvain method](https://en.wikipedia.org/wiki/Louvain_method).

### Cycle 2: Build

We used the web crawler of PartHub to obtain Parts from 2022. [PageRank](https://en.wikipedia.org/wiki/PageRank) and [Louvain method](https://en.wikipedia.org/wiki/Louvain_method) was performed with [Neo4j Graph Data Science (GDS) library](https://neo4j.com/docs/graph-data-science/current/). [RAP (v0.3.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.3.0-beta) was released in this phase.

### Cycle 2: Test

We utilized PartHub&nbsp;2 to find existing parts matching our needs, which was the first step for all [the Parts we have developed this year](https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2023&group=Fudan). Details on our [Improve](/improve/) page.

### Cycle 2: Learn

We had internal discussion regarding the feasibility of using RAP. In addition, we collaborated with external users ([SCUT-China iGEM 2023](https://2024.igem.wiki/scut-china/other-teams6) and [Nanjing-China iGEM 2023](https://2024.igem.wiki/nanjing-china/)) on the user interface.

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/collaboration/scut-tiny.png" style='width:70%'>
<br>
<div>
  <p><small style="color: gray">Figure 4: Introduction to potential users in SCUT-China</small></p>
</div>
</div>

<div style="text-align: center;" id="fig-2">
<img src=" https://static.igem.wiki/teams/4765/wiki/hp/software2.png" style='width:70%'>
<br>
<div>
  <p><small style="color: gray">Figure 5: Introduction to potential users in Nanjing-China</small></p>
</div>
</div>

Review: During the discussion regarding the experimental validation of RAP, we proposed to change the stem-loop in the orignal pRAP[^3], to enable regulated expression level. During the discussion with [SCUT-China iGEM 2023](https://2024.igem.wiki/scut-china/), they suggested to create an annotation file for local storage of results.

### Cycle 3: Design

Similar to how the RBS design was implemented in DBTL Cycle 1, firstly, we developed a thermodynamic model for the design of the stem-loop. For more details, visit our [Software](/software/#assumption-4) page.

### Cycle 3: Build

We employed support vector regression to determine the relationship between stem-loop structures and protein expression. Additionally, when displaying the DNA sequences, an `annotation.csv` file will be provided to the user. [RAP (v0.4.0-beta)](https://gitlab.igem.org/2023/software-tools/fudan/-/tree/v0.4.0-beta) was released in this phase.

### Cycle 3: Test

We designed experiments to validate the synthetic stem-loop generated by the software and documented on [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129). For more information, please also refer to our [Software](/software/#assumption-4) page.

### Cycle 3: Learn

Following the previous DBTL cycles, we now believe that our [RAP](https://gitlab.igem.org/2023/software-tools/fudan/) is [the software tool](/software/) to expediate DNA sequence design for ribozyme-assistant polycistronic sytem. We hope it will boost productivity in synthetic biology research.

## References

[^1]: Glass DS, Riedel-Kruse IH (2018). A Synthetic Bacterial Cell-Cell Adhesion Toolbox for Programming Multicellular Morphologies and Patterns. *Cell*, *174*(3), 649-658.e16. https://doi.org/10.1016/j.cell.2018.06.041
[^2]: Kim H, Skinner DJ, Glass DS, Hamby AE, Stuart BAR, Dunkel J, Riedel-Kruse IH (2022 Aug). 4-bit adhesion logic enables universal multicellular interface patterning. *Nature*, *608*(7922): 324-329. https://doi.org/10.1038/s41586-022-04944-2
[^3]: Liu Y, Wu Z, Wu D, Gao N, Lin J (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synth Biol*, *12*(1), 136-143. https://doi.org/10.1021/acssynbio.2c00416
