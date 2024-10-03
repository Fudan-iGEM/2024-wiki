---
title: Improved Parts
author:
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
- name: Yi Shi
  url: /fudan/team/#yi-shi
headergif: https://static.igem.wiki/teams/5115/header/parts-header.gif
---

<br><br>

[MINERAL](/fudan/description/) consists of complex DNA sequences, including coding and non-coding fragments. Our improvements aim at balanced CDS expression, stable enzyme reaction environment and effective protein function.

In this year's project, we focused on three major improvements:

- Use EP-targeted protein subunits to express Ni/Fe hydrogenase in carboxysome microcompartment
- Engineer NixA by fusing it with FKBP F36V (F1v for short), and induce dimerization with the addition of AP20187 linker compound
- Use the ribozyme-assisted polycistronic co-expression (pRAP) system[^22] to assemble the [nickel module](https://parts.igem.org/Part:BBa_K5115068) and the [F module](https://parts.igem.org/Part:BBa_K5115067)


## Improved Enzyme Reaction Environment

We found carboxysome has been by [Bielefeld 2014](https://2014.igem.org/Team:Bielefeld-CeBiTec). However, they use the carboxysome only to fix CO<sub>2</sub>. We explored a new usage of carboxysome: assemble a microcompartment for designed reactions.

In the cytosol of *E. coli*, the pH and components are consistently changing. This could bring chaos to the enzymes. To improve the [Ni/Fe hydrogenase](https://parts.igem.org/Part:BBa_K5115020)'s functioning, we introduced the enzyme complex into the [carboxysome](https://parts.igem.org/Part:BBa_K5115065) microcompartment. We used the [Peptide Encapsulation fusion](https://parts.igem.org/Part:BBa_K5115002) (EP) to facilitate the effective targeting of enzymes to the carboxysome structure[^1]. The composite part [ribozyme+RBS+hoxF-GS-EP+stem-loop](https://parts.igem.org/Part:BBa_K5115061) and [ribozyme+RBS+hoxU-GS-EP+stem-loop](https://parts.igem.org/Part:BBa_K5115062) both have one hydrogenase subunit coding sequence (CDS) wrapped in pRAP[^22]. Briefly, [the Twister ribozyme sequences](https://parts.igem.org/Part:BBa_K4765020 ) is placed before each CDS, and the RNA of Twister ribozyme conduct self-cleaving of the polycistronic mRNA[^23]. To protect the cleaved mono-cistronic mRNA from degradation, a [stem-loop](https://2023.igem.wiki/fudan/part-collection/#ribozyme-assisted-polycistronic-co-expression)  structure ([BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129)) is placed at the 3' end of CDS[^22]. As for the ribosome binding sequence (RBS) after the ribozyme and before the CDS, we used [T7 RBS](https://parts.igem.org/Part:BBa_K4162006), from bacteriophage T7 gene 10[^25]. It is an intermediate strength RBS according to [our 2022 results](https://2022.igem.wiki/fudan/measurement#optimization), which allows us to change it to a weaker [J6 RBS](https://parts.igem.org/Part:BBa_J61100) or a stronger [B0 RBS](https://parts.igem.org/Part:BBa_B0030) if needed.

Compared to the part [BBa_K1465223](https://parts.igem.org/Part:BBa_K1465223) from Bielefeld 2014, our design ensures the efficient expression and encapsulation of the hydrogenase subunits to the carboxysome.

## Improved Protein Function

While searching nickel-ion channel proteins, we found [NixA](https://parts.igem.org/Part:BBa_K3126006) from [HBUT-China 2019](https://2019.igem.org/Team:HBUT-China). However, their part came from *Arabidopsis*, which belongs to Plantae instead of Bacteria. To get a sequence that can function better in *E. coli*, we did homologous sequence search and found [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071), originated from *Helicobacter pylori*.

To enhance NixA's ability of transporting nickel ions, we tried inducible dimerization. [F1v](https://parts.igem.org/Part:BBa_K5115085) is a FKBP mutant (F36V). We fuse F1v with NixA and add linker compound AP20187 to the culture medium. AP20187 induces self-association between F1v, creating a dimerized-NixA on the cell membrane[^2].

## Improved CDS Expression

In 2022, we introduced the ribozyme-assisted polycistronic expression system [pRAP](https://2022.igem.wiki/fudan/parts) to iGEM, which could cleave ploycistronic mRNA into several mono-cistronic mRNA, allowing for efficient expression of proteins for metabolic engineering. Last year, we extensively studied the stem-loop at the 3' end of the CDS in pRAP, and improved the tunability of the system.

This year, the pRAP system is widely adopted in our parts to improve many old parts. We found the [NikABCDE](https://parts.igem.org/Part:BBa_K2652006) from [HBUT-China 2019](https://2019.igem.org/Team:HBUT-China), which is a polycistronic sequence. We put each CDS of nik operon in pRAP, e.g. the part [ribozyme+RBS+nikA+stem-loop](https://parts.igem.org/Part:BBa_K5115077). Then we assemble these parts together to form [ribozyme connected nik](https://parts.igem.org/Part:BBa_K5115082). Compared with [NikABCDE](https://parts.igem.org/Part:BBa_K2652006), ribozyme-connected nik ([BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082)) demonstrates higher nickel uptake efficiency.

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/ni-results/30-mg-l-single-plasmid.png" style='width:70%'>
    <div>
      <span style="color: gray">Figure 1: Comparison of Ni²⁺ Uptake Efficiency by Different <em>E. coli</em>, in 30 mg/L Ni²⁺<br>
            <small>The graph shows the percentage of Ni²⁺ absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 30 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 30 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates.</small>
      </span>
        <br><br>
    </div>
</div>

The pRAP[^22] system can ensure a high efficient and balanced expression. This year, most CDS were first wrapped by pRAP, then assembled into designed configurations. Using step-wise assembly, we made [MINERAL](/fudan/description/) [nickel module](https://parts.igem.org/Part:BBa_K5115068) and [F module](https://parts.igem.org/Part:BBa_K5115067).

## Other Improvements

In addition, we did the following:

- Mutate RcnR ([BBa_K1758350](https://parts.igem.org/Part:BBa_K1758350)) to RcnR^C35L^ ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000))
- Mutate FKBP ([BBa_K2601008](https://parts.igem.org/Part:BBa_K2601008)) to F1v (FKBP with F36V mutation, [BBa_K5115085](https://parts.igem.org/Part:BBa_BBa_K5115085))

## Improved Parts

| Original Part     | Original Description     | Improved Part   | Description     |
| ------ | ------------- | ------------------ | --------------- |
| [BBa K4275026](https://parts.igem.org/Part:BBa_K4275026) | Nickel ion channel protein gene | [BBa_K5115077](https://parts.igem.org/Part:BBa_K5115077) | ribozyme+RBS+nikA+stem-loop |
|   |   | [BBa_K5115078](https://parts.igem.org/Part:BBa_K5115078) | ribozyme+RBS+nikB+stem-loop |
|   |   | [BBa_K5115079](https://parts.igem.org/Part:BBa_K5115079) | ribozyme+RBS+nikC+stem-loop |
|   |   | [BBa_K5115080](https://parts.igem.org/Part:BBa_K5115080) | ribozyme+RBS+nikD+stem-loop |
|   |   | [BBa_K5115081](https://parts.igem.org/Part:BBa_K5115081) | ribozyme+RBS+nikE+stem-loop |
|   |   | [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082) | ribozyme connected nik |
| [BBa_K1758350](https://parts.igem.org/Part:BBa_K1758350) | Nickel repressor | [BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000) | RcnR C35L                        |
| [BBa_K2601008](https://parts.igem.org/Part:BBa_K2601008) | FKBP-yEGFP       | [BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085) | F1v = FKBP F36V                             |
| [BBa K3126006]((https://parts.igem.org/Part:BBa_K3126006)) | nixA             | [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071) | NixA                              |
|  |   | [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086) | NixA-F1v |
|  |   | [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087) | F1v-NixA                           |


## References

[^1]: Li, T., Jiang, Q., Huang, J., Aitchison, C. M., Huang, F., Yang, M., Dykes, G. F., He, H.-L., Wang, Q., Sprick, R. S., Cooper, A. I., & Liu, L.-N. (2020). Reprogramming bacterial protein organelles as a nanoreactor for hydrogen production. *Nature Communications*, *11*(1), 5448. [https://doi.org/10.1038/s41467-020-19280-0](https://doi.org/10.1038/s41467-020-19280-0)
[^2]: Clackson, T., Yang, W., Rozamus, L. W., Hatada, M., Amara, J. F., Rollins, C. T., Stevenson, L. F., Magari, S. R., Wood, S. A., Courage, N. L., Lu, X., Cerasoli, F., Gilman, M., & Holt, D. A. (1998). Redesigning an FKBP–ligand interface to generate chemical dimerizers with novel specificity. *Proceedings of the National Academy of Sciences of the United States of America*, *95*(18), 10437–10442. [https://pubmed.gov/9724721/](https://pubmed.ncbi.nlm.nih.gov/9724721/)
[^22]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143.[https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^23]: Eiler, D., Wang, J., & Steitz, T. A. (2014). Structural basis for the fast self-cleavage reaction catalyzed by the twister ribozyme. *Proceedings of the National Academy of Sciences*, *111*(36), 13028–13033. [https://doi.org/10.1073/pnas.1414571111](https://doi.org/10.1073/pnas.1414571111)
[^25]: Olins, P. O., Devine, C. S., Rangwala, S. H., Kavka, K. S. (1988) The T7 phage gene 10 leader RNA, a ribosome-binding site that dramatically enhances the expression of foreign genes in *Escherichia coli*. *Gene*, *73*(1), 227-35. [https://doi.org/10.1016/0378-1119(88)90329-0](https://doi.org/10.1016/0378-1119(88)90329-0)
