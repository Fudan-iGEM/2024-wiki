---
title: Part Collection
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif

author:
- name: Yi Shi
  url: /fudan/team/#yi-shi
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
---

## mention useful 2023 modules, anti-freezing, anti-UV?

Our favourite part is [BBa_K4765129 (stem-loop test)](https://parts.igem.org/wiki/index.php?title=Part:BBa_K4765129).

## Ribozyme-Assisted Polycistronic co-expression

We've improved previously published **Ribozyme-Assisted Polycistronic co-expression (pRAP) system**[^1]. This improvement allows for the simultaneous expression of multiple proteins by inserting all B.HOME CDS sequences into [one](https://parts.igem.org/Part:BBa_K4765140). Our Software [RAP](/software/) could: 1) design synthetic stem-loops with different strengths to control avaiable mRNA; 2) leverages enzyme $k_{cat}$ values to design RBS with varying strengths, thereby controlling the initial translation rates. These fine-tuning enable the modulation of *Escherichia coli*'s metabolic flux, reducing metabolic stress.

A pRAP module consists of four components arranged from the 5' to the 3' end: a Twister ribozyme, RBS, CDS, and a stem-loop structure.

The Twister ribozyme, an RNA molecule capable of self-cleavage at specific sites[^2][^3], is strategically incorporated between coding CDSs within a polycistron. The chosen ribozyme efficiently cleaves the polycistronic mRNA transcript, transforming it into individual mono-cistrons. This process eliminates inter-cistron interactions, ensuring comparable translation initiation rates for each mono-cistron.

To protect the mono-cistron mRNA from degradation, a stem-loop structure is placed at the 3' end of the CDSs[^1].

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/czy/prap-1-czy.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Model for pRAP system.
   <br>
Twistwe-ribozyme, RBS, CDS, and stem-loop form a basic pRAP component.</small></p>
</div>
</div>

Subsequently, we developed an assessment setup to evaluate pRAP performance. This validation system comprises two genes, stayGold ([BBa_K4162001](https://parts.igem.org/Part:BBa_K4162001)) and mScarlet ([BBa_K4765022](https://parts.igem.org/Part:BBa_K4765022)). The green fluorescent protein stayGold is positioned at the upstream, while the red fluorescent protein mScarlet is positioned at the downstream. Subsequently, we examined the fluorescence intensity per OD~600~ and the ratio of red to green fluorescence of the bacteria. This not only allowed us to confirm that both genes can be expressed from the pRAP system. Furthermore, the fluorescence ratio provides additional insights into the efficiency of ribozyme cleavage, as well as the protection of mRNA from degradation by the stem-loop structure.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/1-pc.png"
style='width:100%'>
<br>
<div>
<p><small style="color: gray">Figure 2: Stem-loop test.
<br>
This module can be used to evaluate stem-loop efficiency.</small></p>
</div>
</div>
<div style="text-align: center;">
   <p>Table 1: Parts for pRAP system</p>
</div>

| Part Name                                                    | Type   | Description |
| ------------------------------------------------------------ | ------ | ----------- |
| [BBa_K4765020](https://parts.igem.org/Part:BBa_K4765020) | RNA    | Twister P1 ribozyme, from 10.1080/15476286.2022.2123640 |
| [BBa_K4765021](https://parts.igem.org/Part:BBa_K4765021) | RNA    | stem-loop, from 10.1021/acssynbio.2c00416               |
| [BBa_K4765022](https://parts.igem.org/Part:BBa_K4765022) | Coding | mScarlet                                                |
| [BBa_K4765119](https://parts.igem.org/Part:BBa_K4765119) | DNA    | ribozyme test: constitutive expression                  |
| [BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120) | DNA    | ribozyme test: T7 leaky expression                      |
| [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) | DNA    | stem-loop test                                          |
| [BBa_K4765130](https://parts.igem.org/Part:BBa_K4765130) | DNA    | shuttle test                                            |

We found the protein expression driven by T7 promoter **without adding IPTG** ([BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120)) in BL21(DE3) cells, is higher than driven by a constitutive promoter ([BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120)). Thus, we use T7 leaky setting for most of our funcitonal characterization.

Finally, we integrated CDS sequences from the [Survival System, Biofilm Formation System, and Terraforming System](/description/#our-solution) into pRAP, with help from RAP (more details on our [Software](/software/) page).


## Survival System

The environment on Mars is extremely harsh, which is why we need to equip the biofilm with robust survival capabilities. To achieve this, we have introduced three modules: **Anti-freeze**, **Anti-UV**, and **Anti-desiccation**.

To enhance the biofilm's resistance to freezing, we have chosen a protein called AnAFP ([BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015)). Following a recent publication, we have test a new protein called *H. ex* mtSSB, derived from tardigrades[^4]. In comparison to separately introduced the anti-desiccation protein SAHS ([BBa_K2306003](https://parts.igem.org/Part:BBa_K2306003)), it possesses both anti-desiccation and anti-UV capabilities, with significantly lower metabolic stress on *E. coli* compared to producing MAA ([BBa_K4765118](https://parts.igem.org/Part:BBa_K4765118)). 

Following another publication[^7], we also tested the anti-UV capability of Rv&nbsp;Dusp, FEN1, and XRCC1.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/2-pc.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 3: Survival system.
<br>
With specific genes inserted into pRAP system, this module confers bacteria the ability to survive harsh conditions.</small></p>
</div>
</div>
<div style="text-align: center;">
   <p>Table 2: Parts for survival system</p>
</div>

| Part Name                                                    | Type   | Description |
| ------------------------------------------------------------ | ------ | ----------- |
| [BBa_K4765010](https://parts.igem.org/Part:BBa_K4765010) | Coding | MysA codon optimized                                         |
| [BBa_K4765011](https://parts.igem.org/Part:BBa_K4765011) | Coding | MysB codon optimized                                         |
| [BBa_K4765012](https://parts.igem.org/Part:BBa_K4765012) | Coding | MysC codon optimized                                         |
| [BBa_K4765013](https://parts.igem.org/Part:BBa_K4765013) | Coding | MysD codon optimized                                         |
| [BBa_K4765014](https://parts.igem.org/Part:BBa_K4765014) | Coding | MysH codon optimized                                         |
| [BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015) | Coding | AnAFP                                                        |
| [BBa_K4765016](https://parts.igem.org/Part:BBa_K4765016) | Coding | H.exemplaris mitochondrial single-stranded DNA binding protein (H. ex mtSSB) |
| [BBa_K4765018](https://parts.igem.org/Part:BBa_K4765018) | Coding | FEN1                                                         |
| [BBa_K4765019](https://parts.igem.org/Part:BBa_K4765019) | Coding | XRCC1                                                        |
| [BBa_K4765111](https://parts.igem.org/Part:BBa_K4765111) | DNA    | Twister P1 + T7_RBS + AnAFP + stem-loop                      |
| [BBa_K4765112](https://parts.igem.org/Part:BBa_K4765112) | DNA    | Twister P1 + T7_RBS + SAHS 33020 + stem-loop                 |
| [BBa_K4765113](https://parts.igem.org/Part:BBa_K4765113) | DNA    | Twister P1 + T7_RBS + H. ex mtSSB + stem-loop                |
| [BBa_K4765117](https://parts.igem.org/Part:BBa_K4765117) | DNA    | ribozyme connected: H. ex mtSSB + SAHS 33020                 |
| [BBa_K4765118](https://parts.igem.org/Part:BBa_K4765118) | DNA    | ribozyme connected: MysABCDH                                 |
| [BBa_K4765126](https://parts.igem.org/Part:BBa_K4765126) | DNA    | ribozyme connected: H. ex mtSSB + SAHS 33020 + AnAFP         |
| [BBa_K4765127](https://parts.igem.org/Part:BBa_K4765127) | DNA    | ribozyme connected: H. ex mtSSB + AnAFP + SAHS 33020         |
| [BBa_K4765128](https://parts.igem.org/Part:BBa_K4765128) | DNA    | ribozyme connected: AnAFP + SAHS 33020 + H. ex mtSSB         |
| [BBa_K4765140](https://parts.igem.org/Part:BBa_K4765140) | DNA | B.HOME v1


## Symbiotic System

To ensure nutrient supply, we need to establish **a symbiotic system** that allows cyanobacteria to produce and secrete sugars, and then enable *E. coli* to efficiently utilize them. We are immensely grateful for the plasmids containing *CscB* ([BBa_K4115045](https://parts.igem.org/Part:BBa_K4115045)) and *SacC* ([BBa_K4115017](https://parts.igem.org/Part:BBa_K4115017)) provided by [ShanghaiTech-China iGEM 2023](https://2024.igem.wiki/shanghaitech-china/), which enable us to complete the circulation of nutrients for both cyanobacteria and *E. coli*.


## Biofilm Formation System

Drawing inspiration from **lichens**, our [B.Home](/description/#our-solution) project aims to establish biofilm involving cyanobacteria and *E. coli*.

We need to create physical connections between bacteria to form a self-assembling, robust, and scalable biofilm. For this purpose, we introduce connections between *E. coli* and *E. coli*, as well as between *E. coli* and cyanobacteria. For the former, we have adopted the **LAMBA** (Living Assembled Material by Bacteria Adhesion) approach, which has been reported as a cell-cell adhesion toolbox[^5] or a self-healing material with programmable physical structures[^6]. We have integrated it into the pRAP system. This approach produced two strains of *E. coli* to display antigens (Ag, [BBa_K4765006](https://parts.igem.org/Part:BBa_K4765006)) or nanobodies (Nb, [BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106)) on bacteria outer surface, allowing the antigen-expressing *E. coli* to bind to the antibody-expressing *E. coli*, forming a biofilm. We have chosen intimin ([BBa_K4765001](https://parts.igem.org/Part:BBa_K4765001)) as the surface-presenting protein because it offers superior presentation efficacy compared to INPNC ([BBa_K4765008](https://parts.igem.org/Part:BBa_K4765008)), another commonly used surface-presenting protein, and inserted a short spacer between intimin and Ag/Nb to avoid steric hindrance.

As for the connection between *E. coli* and cyanobacteria, we have selected *Synechococcus elongates* PCC7942 due to their ease of genetic modification. We intend to have *E. coli* display LCA ([BBa_K4765009](https://parts.igem.org/Part:BBa_K4765009)), a kind of lectin, on their membrane surface and establish a physical connection with the lipopolysaccharides on the surface of *S. elongates*. Again, we have chosen intimin as the surface-presenting protein for bacteria.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/3-pc.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 4: Biofilm Formation System
<br>
Bacteria form cell-cell adhesion through this module, thus forming biofilm.</small></p>
</div>
</div>
<div style="text-align: center;">
   <p>Table 3: Parts for biofilm formation system</p>
</div>

| Part Name                                                    | Type   | Description  |
| ------------------------------------------------------------ | ------ | ------------ |
| [BBa_K4765001](https://parts.igem.org/Part:BBa_K4765001) | Coding | intimin                                              |
| [BBa_K4765002](https://parts.igem.org/Part:BBa_K4765002) | Coding | Ag1, Akt3PH from 10.1016/j.cell.2018.06.041          |
| [BBa_K4765003](https://parts.igem.org/Part:BBa_K4765003) | Coding | Nb1, 3AKH13 from 10.1016/j.cell.2018.06.041          |
| [BBa_K4765004](https://parts.igem.org/Part:BBa_K4765004) | Coding | Ag2, EPEA from 10.1016/j.cell.2018.06.041            |
| [BBa_K4765005](https://parts.igem.org/Part:BBa_K4765005) | Coding | Nb2, antiEPEA from 10.1016/j.cell.2018.06.041        |
| [BBa_K4765006](https://parts.igem.org/Part:BBa_K4765006) | Coding | Ag3, P53TA from 10.1016/j.cell.2018.06.041           |
| [BBa_K4765007](https://parts.igem.org/Part:BBa_K4765007) | Coding | Nb3, R4P43 from 10.1016/j.cell.2018.06.041           |
| [BBa_K4765008](https://parts.igem.org/Part:BBa_K4765008) | Coding | INPNC                                                |
| [BBa_K4765009](https://parts.igem.org/Part:BBa_K4765009) | Coding | LCA                                                  |
| [BBa_K4765017](https://parts.igem.org/Part:BBa_K4765017) | DNA    | linker after INPNC                                   |
| [BBa_K4765101](https://parts.igem.org/Part:BBa_K4765101) | DNA    | Twister P1 + T7_RBS + intimin-Ag1 fusion + stem-loop |
| [BBa_K4765102](https://parts.igem.org/Part:BBa_K4765102) | DNA    | Twister P1 + T7_RBS + intimin-Nb1 fusion + stem-loop |
| [BBa_K4765103](https://parts.igem.org/Part:BBa_K4765103) | DNA    | Twister P1 + T7_RBS + intimin-Ag2 fusion + stem-loop |
| [BBa_K4765104](https://parts.igem.org/Part:BBa_K4765104) | DNA    | Twister P1 + T7_RBS + intimin-Nb2 fusion + stem-loop |
| [BBa_K4765105](https://parts.igem.org/Part:BBa_K4765105) | DNA    | Twister P1 + T7_RBS + intimin-Ag3 fusion + stem-loop |
| [BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106) | DNA    | Twister P1 + T7_RBS + intimin-Nb3 fusion + stem-loop |
| [BBa_K4765107](https://parts.igem.org/Part:BBa_K4765107) | DNA    | Twister P1 + T7_RBS + INPNC-Ag3 fusion + stem-loop   |
| [BBa_K4765108](https://parts.igem.org/Part:BBa_K4765108) | DNA    | Twister P1 + T7_RBS + INPNC-Nb3 fusion + stem-loop   |
| [BBa_K4765109](https://parts.igem.org/Part:BBa_K4765109) | DNA    | Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
| [BBa_K4765110](https://parts.igem.org/Part:BBa_K4765110) | DNA    | Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop |
| [BBa_K4765131](https://parts.igem.org/Part:BBa_K4765131) | DNA    | ribozyme connected: intimin-Nb1 + mScarlet           |
| [BBa_K4765132](https://parts.igem.org/Part:BBa_K4765132) | DNA    | ribozyme connected: intimin-Nb2 + mScarlet           |
| [BBa_K4765133](https://parts.igem.org/Part:BBa_K4765133) | DNA    | ribozyme connected: intimin-Nb3 + mScarlet           |



## Terraforming System

Our objective is to modify the biofilm to firmly attach to the surfaces of Martian rocks and facilitate the process of rock erosion. To achieve this, we have introduced the **oxalic acid module** and the **extracellular polysaccharide (EPS) module**.

As for the oxalic acid module, following multiple rounds of discussions with [CAU-China_2022](/collaborations/#with-cau-china-project-design), we have decided to adopt their composite part ([BBa_K4192120](https://parts.igem.org/Part:BBa_K4192120)) to produce oxalic acid.

Regarding the EPS module, inspired by [XJTU iGEM 2020](https://2020.igem.org/Team:XJTU-China), we have overexpressed the key enzymes, PgmA and GalU, both from *E. coli* involved in EPS synthesis, to increase the amount of EPS on bacteria. To facilitate EPS functional characterization, we have also incorporated these enzymes into the pRAP system ([BBa_K4765121](https://parts.igem.org/Part:BBa_K4765121)), connected with a red fluorescent protein.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/5-pc.png"
style='width:100%'>
<br>
<div>
<p><small style="color: gray">Figure 5: EPS module.
<br>
This module assists bacteria to attach to Martian rocks while facilitating rock weathering.</small></p>
</div>
</div>
<div style="text-align: center;">
   <p>Table 4: Parts for terraforming system</p>
</div>

| Part Name                                                    | Type | Description |
| ------------------------------------------------------------ | ---- | ----------- |
| [BBa_K4765121](https://parts.igem.org/Part:BBa_K4765121) | DNA  | ribozyme connected: galU + pgmA + mScarlet |
| [BBa_K4765122](https://parts.igem.org/Part:BBa_K4765122) | DNA  | ribozyme connected: pgmA + galU + mScarlet |


In summary, our Survival System, Biofilm Formation System and Terraforming System were all sucessfully built and test functionally, proving our concept of using synthetic biology to promote terraforming. Later, we functional characterized B.HOME v1 (intimin-MVN, mtSSB, AnAFP, SAHS, pgmA, galU, mScarlet), all modules in one bacteria and function as designed.


## References
[^1]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2022). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143. https://doi.org/10.1021/acssynbio.2c00416
[^2]: Eiler, D., Wang, J., & Steitz, T. A. (2014). Structural basis for the fast self-cleavage reaction catalyzed by the twister ribozyme. *Proceedings of the National Academy of Sciences*, *111*(36), 13028–13033. https://doi.org/10.1073/pnas.1414571111
[^3]: Chen, Y., Cheng, Y., & Lin, J. (2022). A scalable system for the fast production of RNA with homogeneous terminal ends. *RNA Biology, 19*:1, 1077-1084. https://doi.org/10.1080/15476286.2022.2123640
[^4]: Hibshman, J. D., Clark-Hachtel, C. M., Bloom, K. S., & Goldstein, B. (2023). A bacterial expression cloning screen reveals tardigrade single-stranded DNA-binding proteins as potent desicco-protectants. *bioRxiv*, 2023.08.21.554171. https://doi.org/10.1101/2023.08.21.554171
[^5]: Glass, D. S., & Riedel-Kruse, I. H. (2018). A Synthetic Bacterial Cell-Cell Adhesion Toolbox for Programming Multicellular Morphologies and Patterns. *Cell*, *174*(3), 649-658.e16. https://doi.org/10.1016/j.cell.2018.06.041
[^6]: Kim, H., Skinner, D. J., Glass, D. S., Hamby, A. E., Stuart, B. A. R., Dunkel, J., & Riedel-Kruse, I. H. (2022). 4-bit adhesion logic enables universal multicellular interface patterning. *Nature*, *608*(7922), 324–329. https://doi.org/10.1038/s41586-022-04944-2
[^7]: Clark-Hachtel CM, Hibshman JD, Buysscher TD, Goldstein B (2023). Tardigrades dramatically upregulate DNA repair pathway genes in response to ionizing radiation. *bioRxiv*, 2023.09.07.556677. https://doi.org/10.1101/2023.09.07.556677
