---
title: Improved Parts
author:
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
- name: Yi Shi
  url: /fudan/team/#yi-shi
  
headergif: https://static.igem.wiki/teams/5115/header/parts-header.gif
---



## Overview

MINERAL consists of multiple and complicated coding sequences. Our improvements aim at more balanced cds expression, more stable enzyme environment and more effective protein function.

In this year's project, we focused on three major improvements:

- Use EP-targeted protein subunits to express Ni-Fe hydrogenase in carboxysome microcompartment.
- Dimerize NixA by linking it with optimized F1v in liquid with the addition of AP20187.
- Introduce the ribozyme-assisted polycistronic co-expression (pRAP) system to the [**nickel module**](https://parts.igem.org/Part:BBa_K5115068) and the [**mineral F module**](https://parts.igem.org/Part:BBa_K5115067).

Furthermore, we made minor improvements to various other parts.

## Improve Enzyme Environment

We found carboxysome use in [ **Bielefeld iGEM 2014**](https://2014.igem.org/Team:Bielefeld-CeBiTec). However, they use the carboxysome only to fix CO<sub>2</sub>. We explored this new usage of carboxysome: working as a microcompartment.

In the cytoplasm of *E.coli*, the pH and components are consistently changing. This could bring chaos to the normal functions of the enzymes. To improve the [**Ni-Fe hydrogenase**](https://parts.igem.org/Part:BBa_K5115020)'s functioning, we decided to introduce the enzyme into the [**carboxysome**](https://parts.igem.org/Part:BBa_K5115065) microcompartment. To meet this demand, we used the [**Peptide Encapsulation module**](https://parts.igem.org/Part:BBa_K5115002)(EP) to facilitate the effective encapsulation of enzymes within the carboxysome structure.[^1] The composite part [**ribozyme+RBS+hoxF-GS-EP+stem-loop**](https://parts.igem.org/Part:BBa_K5115061) and [**ribozyme+RBS+hoxU-GS-EP+stem-loop**](https://parts.igem.org/Part:BBa_K5115062) both incorporate a ribozyme, ribosome binding site (RBS), and their respective hydrogenase genes (hoxF or hoxU) fused with EP and a stem-loop structure. The addition of pRAP will help to express the carboxysome more efficiently, compared with the part [**BBa_K1465223**](https://parts.igem.org/Part:BBa_K1465223) from Bielefeld iGEM 2014. This design ensures the efficient expression and encapsulation of the hydrogenase subunits within the carboxysome.

## Improve Protein Function

While looking for a nickel-ion channel protein, we found [**NixA**](https://parts.igem.org/Part:BBa_K3126006) from  [**HBUT-China iGEM 2019**](https://2019.igem.org/Team:HBUT-China). However, this part came from *Arabidopsis*, which belongs to Plantae instead of Bacteria. To get a sequence that can function better in *E.coli*, we found out [**OUR NixA protein**](https://parts.igem.org/Part:BBa_K5115071) which originated from *Helicobacter pylori*.

To enhance NixA's ability of transporting nickel ions, we choose to get it dimerized. [**F1v**](https://parts.igem.org/Part:BBa_K5115085) is FKBP with F36V mutation, which is a signal transducer. We bind F1v with NixA and add AP20187 to the cell culture fluid. The AP20187 can induces self-association of NixA, creating a dimerized-NixA on the cell membrane.[^2] Actually, we optimize NixA's dimerization with different assembly orders in **[NixA-F1v](https://parts.igem.org/Part:BBa_K5115086)** and **[F1v-NixA](https://parts.igem.org/Part:BBa_K5115087)**, and the former significantly improved its transport efficiency, which we finally use in the [**nickel module**](https://parts.igem.org/Part:BBa_K5115068).

## Improve Cds Expression

In 2022, we introduced the ribozyme-assisted polycistronic co-expression system [**pRAP**](https://2022.igem.wiki/fudan/parts) into iGEM, which could cleave ploycistronic mRNA into several monocistronic mRNA, allowing for efficient expression of proteins for metabolic engineering. Last year, we added the stem-loop at the 3' end of the CDS to prevent mRNA degradation, improving the perfoermance of this system.

This year, the mature pRAP system is widely adopted in our parts to improve many old parts. We found the [**NikABCDE**](https://parts.igem.org/Part:BBa_K2652006) from [**HBUT-China iGEM 2019**](https://2019.igem.org/Team:HBUT-China), which is a polycistronic sequence. We put each subunits of this part in a basic pRAP organ, [**ribozyme+RBS+nikA+stem-loop**](https://parts.igem.org/Part:BBa_K5115077) for example, and then we bind these organs together to form the final system: [**ribozyme  connected nik**](https://parts.igem.org/Part:BBa_K5115082). Compared with NikABCDE, our expression system can ensure a high efficient output. Other parts are edited in the same way, all of them exhibiting in the [**nickel module**](https://parts.igem.org/Part:BBa_K5115068) and the [**mineral F module**](https://parts.igem.org/Part:BBa_K5115067).

## Other Improvements

In addition, we did the following:

- Codon-optimized the RcnR to RcnR_C35L (from [BBa_K1758350](https://parts.igem.org/Part:BBa_K1758350) to [BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000))
- Codon-optimized the FKBP to F1v(from [BBa_K2601008](https://parts.igem.org/Part:BBa_K2601008) to [BBa_K5115085](https://parts.igem.org/Part:BBa_BBa_K5115085))
- Co-expressed the carboxysome linker EP with staygold to test EP's encapsulation ability.

## Improved Parts

| Original Part     | Original Description     | Improved Part   | Description     |
| ------------------------------------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------- |
| [BBa K4275026](https://parts.igem.org/Part:BBa_K4275026)      | Nickel ion channel protein gene     | [BBa_K5115077](https://parts.igem.org/Part:BBa_K5115077) | ribozyme+RBS+nikA+stem-loop |
|                                                              |                                                         | [BBa_K5115078](https://parts.igem.org/Part:BBa_K5115078) | ribozyme+RBS+nikB+stem-loop                          |
|                                                            |                                            | [BBa_K5115079](https://parts.igem.org/Part:BBa_K5115079) | ribozyme+RBS+nikC+stem-loop                          |
|  |                                                | [BBa_K5115080](https://parts.igem.org/Part:BBa_K5115080) | ribozyme+RBS+nikD+stem-loop |
|       |  | [BBa_K5115081](https://parts.igem.org/Part:BBa_K5115081) | ribozyme+RBS+nikE+stem-loop |
|                                                              |                                                         | [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082) | ribozyme connected nik |
| [BBa_K1758350](https://parts.igem.org/Part:BBa_K1758350) | Nickel repressor                             | [BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000) | RcnR_C35L                        |
| [BBa_K2601008](https://parts.igem.org/Part:BBa_K2601008) | FKBP-yEGFP                                   | [BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085) | F1v                              |
| [BBa K3126006]((https://parts.igem.org/Part:BBa_K3126006)) | nixA                                          | [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071) | NixA                              |
|       |                                      | [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086) | NixA-F1v |
|  |                                                         | [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087) | F1v-NixA                           |


## References

[^1]: Li, T., Jiang, Q., Huang, J., Aitchison, C. M., Huang, F., Yang, M., Dykes, G. F., He, H.-L., Wang, Q., Sprick, R. S., Cooper, A. I., & Liu, L.-N. (2020). Reprogramming bacterial protein organelles as a nanoreactor for hydrogen production. *Nature Communications*, *11*(1), 5448. https://doi.org/10.1038/s41467-020-19280-0
[^2]: Clackson, T., Yang, W., Rozamus, L. W., Hatada, M., Amara, J. F., Rollins, C. T., Stevenson, L. F., Magari, S. R., Wood, S. A., Courage, N. L., Lu, X., Cerasoli, F., Gilman, M., & Holt, D. A. (1998). Redesigning an FKBP–ligand interface to generate chemical dimerizers with novel specificity. *Proceedings of the National Academy of Sciences of the United States of America*, *95*(18), 10437–10442. https://pubmed.ncbi.nlm.nih.gov/9724721/
