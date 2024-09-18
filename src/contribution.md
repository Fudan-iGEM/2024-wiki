---
sidebar: auto
title: Contribution
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

## Medal Criteria

### Bronze

- We successfully completed the following Competition Deliverables: [Wiki](/), [Project Promotion Video](/promotion-video/), Presentation Video, Judging Form, and in-person at the Paris for Judging Session.
- We carefully describe what work our team members did and what external staff did for our project on [attributions.igem.org](https://attributions.igem.org?team=Fudan&year=2023) and embeded on [Attributions](/attributions/) page.
- We describe how and why we chose our iGEM project on our [Description](/description/) page.
- Here, We list our useful [contributions](/contribution/) for future iGEM teams.

### Silver

- We showcase our engineering achievements within a segment of our project by undergoing multiple iterations of the engineering design cycle, which can be found on our [Engineering](/engineering/) page.
- We elucidate how our efforts are deemed responsible and beneficial for the world on our [Human Practices](/human-practices/) page.

### Gold

According to the rules for 2023, we have decided to compete for three special awards: [New Composite Part](https://parts.igem.org/Part:BBa_K4765129), [Education](/education/), and [Software Tool](/software/).

- We have made a useful [new composite part BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) for stem-loop test, which is well documented on the registry. It was built on [Open V3 backbone](https://parts.igem.org/Part:BBa_K4765026), which could be [reused, remade, and redistributed](https://stanford.freegenes.org/products/open-plasmids#description) as often as one would like. It could be induced to boost protein expression, but we use its [leaky](https://parts.igem.org/Part:BBa_K4765120) property in BL21(DE3) bacteria. [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) provides a new possibility to systematically regulate protein expression level, beyond promoter regulation or RBS regulation ([our 2022 Team](https://2022.igem.wiki/fudan/parts#composite) has successfully produce &beta;-carotene by varing RBS strength according to metabolism).
- We hosted numerous meticulously designed [education](/education/#empower-igem-community) events and established a highly constructive two-way dialogue with the public. We hope to improve the general cognitive level of synthetic biology, encouraging more people to shape, contribute to, and participate in synthetic biology.
- We have developed [RAP, a new software tool](/software/) that possesses user-friendliness, excellent compatibility with existing synthetic biology standards, and seamless integration with external tools. The software has also undergone experimental validation and has shown its practicality in other projects.



## New Parts

### Biofilm Formation System

We have successfully engineered various membrane-display [parts](https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2023&group=Fudan) (antigen, nanobody or lectin) to facilitate inter-bacterial connections, thus forming self-assembling and editable biofilm. Typical reference parts are listed here.

| Part Name | Description | 
|----|----|
| [BBa_K4765101](https://parts.igem.org/Part:BBa_K4765101) |  Twister P1 + T7_RBS + intimin-Ag1 fusion + stem-loop |
| [BBa_K4765102](https://parts.igem.org/Part:BBa_K4765102) |  Twister P1 + T7_RBS + intimin-Nb1 fusion + stem-loop |
| [BBa_K4765103](https://parts.igem.org/Part:BBa_K4765103) |  Twister P1 + T7_RBS + intimin-Ag2 fusion + stem-loop |
| [BBa_K4765104](https://parts.igem.org/Part:BBa_K4765104) |  Twister P1 + T7_RBS + intimin-Nb2 fusion + stem-loop |
| [BBa_K4765105](https://parts.igem.org/Part:BBa_K4765105) |  Twister P1 + T7_RBS + intimin-Ag3 fusion + stem-loop |
| [BBa_K4765106](https://parts.igem.org/Part:BBa_K4765106) |  Twister P1 + T7_RBS + intimin-Nb3 fusion + stem-loop |
| [BBa_K4765109](https://parts.igem.org/Part:BBa_K4765109) |  Twister P1 + T7_RBS + intimin-MVN fusion + stem-loop |
| [BBa_K4765110](https://parts.igem.org/Part:BBa_K4765110) |  Twister P1 + T7_RBS + intimin-LCA fusion + stem-loop |

Programmable biofilm can play a crucial role in various fields, including wastewater treatment, biomaterials, and so on. The aforementioned parts contribute to the construction of multifunctional biofilm and are hoped to assist future teams in achieving their projects.

### Survival System

In [our project](/description), in order to enable bacteria to survive under the harsh conditions of Mars, including high levels of UV radiation, extreme dryness, and low temperatures, we have characterized the following sequences:

| Part Name | Description |
|----|----|
| [BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015) | AnAFP                                                        |
| [BBa_K4765016](https://parts.igem.org/Part:BBa_K4765016) | H.exemplaris mitochondrial single-stranded DNA binding protein (H. ex mtSSB) |
| [BBa_K4765018](https://parts.igem.org/Part:BBa_K4765018) | FEN1                                                         |
| [BBa_K4765019](https://parts.igem.org/Part:BBa_K4765019) | XRCC1                                                        |

These parts empower bacteria to withstand challenging environments, making them highly valuable for projects related to astrobiology or extreme environmental applications.

### Improved Ribozyme-Assisted Polycistronic co-expression System

The use of ribozymes can help us to simultanously express genes of interested, but cleavaged mRNA might be unstable or less usable. Therefore, we have incorporated a stem-loop structure at the 3' end of each coding sequence (CDS), before the ribozyme cleavage site.

| Part Name | Description |
|----|----|
| [BBa_K4765020](https://parts.igem.org/Part:BBa_K4765020) | Twister P1 ribozyme, from 10.1080/15476286.2022.2123640 |
| [BBa_K4765021](https://parts.igem.org/Part:BBa_K4765021) | stem-loop 1, from 10.1021/acssynbio.2c00416             |
| [BBa_K4765119](https://parts.igem.org/Part:BBa_K4765119) | ribozyme test: constitutive expression                  |
| [BBa_K4765120](https://parts.igem.org/Part:BBa_K4765120) | ribozyme test: T7 leaky expression                      |
| [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129) | stem-loop test                                          |
| [BBa_K4765130](https://parts.igem.org/Part:BBa_K4765130) | shuttle test                                            |

The expected benefit of the stem-loop structure is to enhance mRNA stability, thereby expanding the applicability of the ribozyme system, even for cyanobacteria. We hope other teams can incorporate such designs into their projects to effectively control gene expression.

For more details, you can visit our [Part Collection](/part-collection/) page.


## Alliance establishment and series of co-created picture books

This year, our dedicated efforts aimed to demystify synthetic biology and ignite a true enthusiasm for this field among all individuals. Through customized, engaging, and informative educational programs, we fostered **a productive two-way dialogue** with the public, enhancing the overall understanding of synthetic biology. This encouraged greater involvement and participation in shaping and contributing to this field, **setting a solid groundwork for future synthetic biology education**. For more details, please visit our [Education](/education/#empower-igem-community) page.

Leveraging the power of collaboration, we took the initiative to establish [the iGEM Alliance of the Yangtze River Delta](/education/#empower-igem-community), uniting with iGEM teams from ShanghaiTech University, Tongji University, Zhejiang University, Nanjing University, and Shanghai Jiao Tong University. The alliance represents a unified regional community dedicated to advancing synthetic biology and several teams in the alliance have collaboratively crafted **a series of educational picture books** in the last several months, which can be **sustainable materials for future teams to carry out educational activities**. With our collective endeavors, we hold a confident vision that the iGEM Alliance of the Yangtze River Delta will be constantly developed by the iGEM teams and will etch a profound and enduring mark on the landscape of synthetic biology in China and beyond in the future.

Please check the educational picture books made by us: [What is gene](https://static.igem.wiki/teams/4765/wiki/education/picture-book-what-is-gene-final.pdf) and [Gene editing](https://static.igem.wiki/teams/4765/wiki/education/picture-book-gene-editing.pdf).


## New multifunctional software tool: RAP

Further developing the software from Fudan iGEM [2021](https://2021.igem.org/Team:Fudan/Software) and [2022](https://2022.igem.wiki/fudan/software), we have addressed some shortcomings (based on feedbacks from our users) and have added new features, thus creating our new software tool, **RAP**.

RAP consists of three main components. Within the [KineticHub](/software/#kinetichub), using the data from the [BRENDA](https://www.brenda-enzymes.org/) database, we can calculate the optimal enzyme concentrations. With [Parthub 2](/software/#parthub-2), we can retrieve the required parts and download their sequences in GenBank format. Finally, with the help of [RAP Builder](/#rap-builder), we can design the corresponding RBS and stem-loop sequences by combining the results from **KineticHub** and the sequences from **Parthub 2**.

This software is designed to assist iGEMers and other researchers 1) to efficiently find part sequences, 2) to determine the optimal enzyme ratio for their system, and 3) to design expression cassette with appropriate RBS and stem-loop sequences, thus **boosting productivity in synthetic biology**.  It helps users through the DBTL (Design-Build-Test-Learn) cycle, while also contributing to the [continued growth of RAP](/engineering/#RAP).

For more details, please visit our [Software](/software/) page.
