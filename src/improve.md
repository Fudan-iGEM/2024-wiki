---
title: Improved Parts
author:
  name: Yi Shi
  url: /fudan/team/#yi-shi
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

only improved part here

## Overview

B.HOME is built on the foundation of existing iGEM parts. With support from our [Parthub 2](/software/#parthub-2), we can quickly identify suitable parts from previous iGEM teams, use directly or modify according to the functionalities we aim to achieve. Please visit our [Software](/software/#overview) page for more details.

In this year's project, we focused on three major improvements:

- Enhance the ribozyme-assisted polycistronic co-expression (pRAP) system[^1] by introducing synthetic stem-loops.
- Improve the existing parts for biofilm formation by presenting the Ag-Nb pairs and lectin on the surface of *E. coli*, enabling binding between *E. coli-E. coli* and *E. coli*-cyanobacteria.
- Use multiple methods to characterize the adhesive capabilities of exopolysaccharides within [our EPS module](/description/#our-solution).

Furthermore, we made minor improvements to various other parts.

## Improve pRAP

Last year, we only used the [hammerhead ribozyme](https://parts.igem.org/Part:BBa_K4162005), which could cleave ploycistronic mRNA into several monocistronic mRNA, allowing for efficient expression of proteins for metabolic engineering. We also demonstrated [by changing RBS strength](https://2022.igem.wiki/fudan/parts#composite) we could control protein expression levels, ultimately successfully expressing enzymes related to synthetic &beta;-carotene production.

However, in this year's experiments, we observed degradation of monocistronic mRNA after ribozyme cleavage, as reported in the original pRAP paper[^1], affecting our functional characterization. Therefore, we added the stem-loop (liu2023) at the 3' end of the CDS to prevent mRNA degradation. We also design synthetic stem-loops using our software, with different strength, and experimental tested their anti-degradation capabilities. Please visit our Part **stem-loop test** [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) for more details..

Simultaneously, we also constructed various ribozymes into our Part **ribozyme test: leaky expression** [BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120).

## Improve Biofilm Formation

Taking inspiration from [GreatBay_SCIE iGEM 2022](https://2022.igem.wiki/greatbay-scie/parts) [BBa_K4275026 (Neae-Nb3)](https://parts.igem.org/Part:BBa_K4275026), we used the previous described antigen-nanobody (Ag-Nb) pairs[^2][^3] presented by intimin to facilitate the binding between *E. coli*. To build a programmable biofilm, We required Ag-Nb pairs with varying binding strengths, and we tested three different pairs. Subsequently, We successfully constructed a biofilm using the most effective pair, as described in [BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106).

We also explored lectin-mediated binding between cyanobacteria and *E. coli*. To find the appropriate surface display system, we compared [intimin](https://parts.igem.org/Part:BBa_K4275026) from [GreatBay_SCIE iGEM 2022](https://2022.igem.wiki/greatbay-scie/parts) with [INPNC](https://parts.igem.org/Part:BBa_K4195034) from [XMU iGEM 2022](https://2022.igem.wiki/xmu-china/), and chose the more effective one - intimin. We added LCA and MVN to the C-terminus of intimin, resulting in Part [BBa_K4765109 (Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop)](https://parts.igem.org/Part:BBa_K4765109) and Part [BBa_K4765110 (Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop)](https://parts.igem.org/Part:BBa_K4765110). *E. coli* expressing these parts demonstrated significant binding capabilities with *Microcystis aeruginosa* PCC7806 and *S. elongatus* PCC7942 respectively.

## Improve EPS Characterization

Both [XJTU iGEM 2020](https://2020.igem.org/Team:XJTU-China) and [2022](https://2022.igem.wiki/xjtu-china/) teams have overexpressed *galU* and *pgmA* to increase exopolysaccharide (EPS) production. We adopted their methods for EPS production while focusing on the adhesion capabilities.

We incorporated red fluorescent protein mScarlet after *galU* and *pgmA*, creating Part [BBa_K4765121 (ribozyme connected: galU + pgmA + mScarlet)](https://parts.igem.org/Part:BBa_K4765121). We found EPS expressing bacteria is "heavier", precipitate faster, likely due to more "sticky". Before forcely pepitting, these EPS expressing bacteria form cluster in liquid culture. Under a fluorescence microscope, by increasing the flow speed of culture media, we observed that *E. coli* with red fluorescence (simultaneously expressing *galU* and *pgmA*) were the very last ones being washed away, confirming superior adhesion capability.

## Other Improvements

In addition, we did the following:

- Codon-optimized the enzymes for synthesize MAA (from [BBa_K4765010](https://parts.igem.org/Part:BBa_K4765010) to [BBa_K4765011](https://parts.igem.org/Part:BBa_K4765011))
- Co-expressed the anti-desiccation protein SAHS&nbsp;33020 with *H. ex* mtSSB to test their anti-desiccation capabilities
- Analyzed factors affecting [SacC](https://parts.igem.org/Part:BBa_K4115017) functionality, and improve culture media for bacteria

## Improved Parts

| Original Part     | Original Description     | Improved Part   | Description     |
| ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| [BBa K4275026](https://parts.igem.org/Part:BBa_K4275026)      | Neae-Nb3                                                | [BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106) | Twister P1 + T7_RBS + intimin-Nb3 fusion + stem-loop |
|                                                              |                                                         | [BBa_K4765109](https://parts.igem.org/Part:BBa_K4765109) | Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
|                                                              |                                                         | [BBa_K4765110](https://parts.igem.org/Part:BBa_K4765110) | Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop |
| [BBa K4195034](https://parts.igem.org/Part:BBa_K4195034#Improved_parts) | INPNC-his                                               | [BBa_K4765108](https://parts.igem.org/Part:BBa_K4765108) | Twister P1 + T7_RBS + INPNC-Nb3 fusion + stem-loop   |
| [BBa K1378003](https://parts.igem.org/Part:BBa_K1378003)      | Microvirin (MVN) | [BBa_K4765109](https://parts.igem.org/Part:BBa_K4765109) | Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
| [BBa K4273004](https://parts.igem.org/Part:BBa_K4273004)      | NpR5600                                                 | [BBa_K4765010](https://parts.igem.org/Part:BBa_K4765010) | MysA codon optimized                                 |
| [BBa K4273005](https://parts.igem.org/Part:BBa_K4273005)      | NpR5599                                                 | [BBa_K4765011](https://parts.igem.org/Part:BBa_K4765011) | MysB codon optimized                                 |
| [BBa K4273008](https://parts.igem.org/Part:BBa_K4273008)      | Np5598                                                  | [BBa_K4765012](https://parts.igem.org/Part:BBa_K4765012) | MysC codon optimized                                 |
| [BBa K4273013](https://parts.igem.org/Part:BBa_K4273013)      | NlmysD                                                  | [BBa_K4765013](https://parts.igem.org/Part:BBa_K4765013) | MysD codon optimized                                 |
| [BBa K4273014](https://parts.igem.org/Part:BBa_K4273014)      | NlmysH                                                  | [BBa_K4765014](https://parts.igem.org/Part:BBa_K4765014) | MysH codon optimized                                 |
| [BBa K4162005](https://parts.igem.org/Part:BBa_K4162005)      | Hammerhead ribozyme                                     | [BBa_K4765119](https://parts.igem.org/Part:BBa_K4765119) | ribozyme test: constitutive expression               |
|                                                              |                                                         | [BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120) | ribozyme test: T7 leaky expression                   |
|                                                              |                                                         | [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) | stem-loop test                                       |
| [BBa K2306003](https://parts.igem.org/Part:BBa_K2306003)      | SAHS 33020                                              | [BBa_K4765126](https://parts.igem.org/Part:BBa_K4765126) | ribozyme connected: H. ex mtSSB + SAHS 33020 + AnAFP |
| [BBa K3331012](https://parts.igem.org/Part:BBa_K3331012)      | *E. coli* galU + *E. coli* pgmA                                 | [BBa_K4765121](https://parts.igem.org/Part:BBa_K4765121) | ribozyme connected: galU + pgmA + mScarlet           |
| [BBa K4115017](https://parts.igem.org/Part:BBa_K4115017)      | SacC   | ——    |


## References

[^1]: Liu Y, Wu Z, Wu D, Gao N, Lin J (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synth Biol*, *12*(1), 136-143. https://doi.org/10.1021/acssynbio.2c00416
[^2]: Glass DS, Riedel-Kruse IH (2018). A Synthetic Bacterial Cell-Cell Adhesion Toolbox for Programming Multicellular Morphologies and Patterns. *Cell*, *174*(3), 649-658.e16. https://doi.org/10.1016/j.cell.2018.06.041
[^3]: Kim H, Skinner DJ, Glass DS, Hamby AE, Stuart BAR, Dunkel J, Riedel-Kruse IH (2022 Aug). 4-bit adhesion logic enables universal multicellular interface patterning. *Nature*, *608*(7922): 324-329. https://doi.org/10.1038/s41586-022-04944-2
