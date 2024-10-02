---
title: Part Collection
headergif: https://static.igem.wiki/teams/5115/header/parts-header.gif

author:
- name: Yi Shi
  url: /fudan/team/#yi-shi
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
---

<br><br>

Our favourite composite part is [MINERAL](/fudan/description/) F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067)).

## Nickel Enrichment Module

Based on our experimental [results](/fudan/results/), we have finalized [MINERAL](/fudan/description/) nickel module ([BBa_K5115068]([BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068))), which consist of ribozyme-connected Metallothionein (MTA, [BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050)), Histidine-rich metal-binding protein [(Hpn)](https://parts.igem.org/Part:BBa_K1151001), RcnR^C35L^ ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)), and NixA-F1v ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086)). 

This integrated module enables bacteria not only for efficient nickel ion absorption, but also for maintaining cellular health under heavy metal stress conditions, thereby increasing nickel tolerance and facilitating sustainable nickel recovery from wastewater.


### Nickel Absorption

Our module is engineered to optimize nickel ion update from industrial wastewater, leveraging a synergistic integration of various components. The ribozyme connected nikABCDE ([BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082)) is our first made nickel absorption plasmid. This ATP-binding cassette (ABC) transporter complex is essential for transporting nickel ions from the *E. coli* periplasm into the cytoplasm. NikABCDE comprises five proteins: NikA ([BBa_K5115072](https://parts.igem.org/Part:BBa_K5115072)) functions as a periplasmic nickel-binding protein that captures nickel ions and facilitates their delivery to the membrane transport components. NikB ([BBa_K5115073](https://parts.igem.org/Part:BBa_K5115073)) and NikC ([BBa_K5115074](https://parts.igem.org/Part:BBa_K5115074)) are crucial membrane-spanning proteins that create a channel through which nickel ions can traverse the membrane, while NikD ([BBa_K5115075](https://parts.igem.org/Part:BBa_K5115075)) and NikE ([BBa_K5115076](https://parts.igem.org/Part:BBa_K5115076)) provide the requisite ATPase activity that powers this transport machanie, ensuring an efficient influx of nickel ions essential for various metabolic processes. Because nikA is the rate-limiting step, according to [our previous observations](https://parts.igem.org/Part:BBa_K4765129), we put it as the last one when we connect these CDS with the Ribozyme-Assisted Polycistronic expression system (pRAP)[^2].

In parallel, NixA ([BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071)), a member of the NiCoT family, was made also for nickel absorption. This monomeric protein is specifically adapted for nickel transport. By employing a modified FKBP, F1v (FKBP with F36V mutation) ([BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085)), we optimize NixA's dimerization with two different assembly orders, as NixA-F1v ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086)) and F1v-NixA ([BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087)), and the former significantly improving its transport efficiency.

To counteract the spontaneous nickel efflux of *E. coli*, we overexpress RcnR^C35L^ ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)), a nickel-responsive transcriptional regulator mutant, to optimize nickel uptake by limiting *rcnA* expression. RcnR is a tetrameric transcriptional repressor that responds to the binding of Ni(II) ions by releasing DNA, resulting in the expression of RcnA, which is responsible for nickel export from the cell. By limiting RcnA, RcnR^C35L^ ensures that intracellular nickel ion concentrations remain elevated. 

Our Nickel Absorption module allows *E. coli* to achieve a high influx of nickel ions, vital for subsequent biochemical pathways and nickel-dependent enzymatic activities in our design.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/5115/@@@@" style="width:70%">
<div>
   <span style="color:gray">Figure 1: Overview of Nickel Uptake Mechanisms.<br><small>
     This diagram illustrates the interaction and functions of the nik operon, NixA transporter, RcnR regulator, and NixA-F1v in facilitating nickel ion absorption <em>E. coli</em></small>
   </span><br><br>
</div>
</div>

<div style="text-align: center;">
   <p>Table 1: Parts for Nickel Absorption</p>
</div>

| Part Name        | Type   | Description    |
| ---------------- | ------ | ---------------|
| [BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000) | Coding    | RcnR_C35L – nickel-responsive transcriptional regulator that modulates gene expression for nickel homeostasis. |
| [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071) | Coding    | NixA – nickel transporter, enhanced dimerization via FKBP for improved transport efficiency. |
| [BBa_K5115072](https://parts.igem.org/Part:BBa_K5115072) | Coding    | nikA – periplasmic nickel-binding protein, essential for nickel ion capture and delivery to transport components. |
| [BBa_K5115073](https://parts.igem.org/Part:BBa_K5115073) | Coding    | nikB – integral membrane protein that forms part of the transport channel for nickel ions. |
| [BBa_K5115074](https://parts.igem.org/Part:BBa_K5115074) | Coding    | nikC – integral membrane protein facilitating the movement of nickel ions across the membrane. |
| [BBa_K5115075](https://parts.igem.org/Part:BBa_K5115075) | Coding    | nikD – ATPase that powers the transporter, essential for the active transport of nickel ions. |
| [BBa_K5115076](https://parts.igem.org/Part:BBa_K5115076) | Coding    | nikE – ATP-binding component crucial for the proper functioning and assembly of the NikABCDE operon. |
| [BBa_K5115077](https://parts.igem.org/Part:BBa_K5115077) | Composite | ribozyme+RBS+nikA+stem-loop                                  |
| [BBa_K5115078](https://parts.igem.org/Part:BBa_K5115078) | Composite | ribozyme+RBS+nikB+stem-loop                                  |
| [BBa_K5115079](https://parts.igem.org/Part:BBa_K5115079) | Composite | ribozyme+RBS+nikC+stem-loop                                  |
| [BBa_K5115080](https://parts.igem.org/Part:BBa_K5115080) | Composite | ribozyme+RBS+nikD+stem-loop                                  |
| [BBa_K5115081](https://parts.igem.org/Part:BBa_K5115081) | Composite | ribozyme+RBS+nikE+stem-loop                                  |
| [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082) | Composite | ribozyme connected nik - Post-transcriptional regulated expression of the nik operon. |
| [BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085) | Coding    | F1v (FKBP with F36V mutation)                               |
| [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086) | Composite | NixA-F1v                                                    |
| [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087) | Composite | F1v-NixA                                                    |

### Nickel Tolerance

To enhance nickel tolerance of our engineered *E. coli*, we integrate Hpn ([BBa_K1151001](https://parts.igem.org/Part:BBa_K1151001)) and MTA ([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050)) with NixA-F1v leveraging their unique properties to mitigate nickel toxicity while optimizing absorption.

Histidine-rich metal-binding protein ([BBa_K1151001](https://parts.igem.org/Part:BBa_K1151001)), is a crucial component for bacterial nickel tolerance. This protein, derived from *Helicobacter pylori*, is characterized by its high histidine content. Its structure allows it to exist in various multimeric forms in solution. The primary function of Hpn is to bind nickel ions, with the ability to sequester up to five Ni²⁺ ions per monomer in a pH-dependent manner (optimal at pH 7.4). This property is essential for maintaining nickel homeostasis within the bacterial cell, especially in environments with elevated metal concentrations. By binding and storing excess nickel, Hpn prevents harmful interactions between nickel ions and cellular machinery, thereby promoting the survival and functionality of *E. coli* in nickel-rich conditions.

Our improved construct, ribozyme + RBS + Hpn + stem-loop ([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036)), is designed to enhance the expression of Hpn when combing with other modules in one plasmid. Twister ribozyme quickly self-cleaves and generates mono-cistrons from one transcribed mRNA, ensuring robust expression of each integrated part, in the case of Hpn, facilitating effective nickel detoxification.

In addition to Hpn, we incorporate metallothionein (MTA, [BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050)) from *Pisum sativum*. MTA is a cysteine-rich protein known for its high binding affinity for various heavy metals, including nickel. By sequestering excess nickel ions, MTA further reduces the potential cytotoxic effects associated with elevated nickel levels. Combining Hpn and MTA, enhances the overall nickel storage capability of our engineered bacteria while simultaneously minimizing the harmful effects of nickel accumulation.

Together, the synergistic action of ribozyme-connected Hpn ([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036)) and MTA ([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050)) establishes a comprehensive nickel tolerance mechanism, which not only supports the effective uptake of nickel ions but also ensures that *E. coli* can thrive in challenging environments characterized by fluctuating metal concentrations.

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/5115/@@@@" style="width:70%">
<div>
   <span style="color:gray">Figure 2: Overview of Nickel Tolerance Mechanisms.<br><small>
     This diagram illustrates the interaction and functions of the Hpn and MTA in facilitating nickel ion recovery and tolerance in <em>E. coli</em></small>
   </span><br><br>
</div>
</div>

<div style="text-align: center;">
   <p>Table 2: Parts for Nickel Tolerance</p>
</div>

| Part Name        | Type   | Description    |
| ---------------- | ------ | ---------------|
| [BBa_K5115036](https://parts.igem.org/Part:BBa_K5115050) | Composite | Ribozyme + RBS + Hpn + stem-loop – histidine-rich protein that sequesters nickel ions, protecting cells from nickel toxicity. |
| [BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050) | Coding  | MTA, metallothionein from *Pisum sativum* for heavy metal binding, protecting cells from nickel toxicity. |


## Survival Modules

### Anti-phage

To ensure the viability of our engineered *E. coli* in semi-open environments, such as wastewater treatment facilities, we developed an anti-phage survival module utilizing YejM ([BBa_K5115070](https://parts.igem.org/Part:BBa_K5115070)). YejM plays a key role in regulating the synthesis of lipopolysaccharide (LPS), a major component of the *E. coli* outer membrane. By inhibiting the degradation of LpxC, an enzyme required for LPS biosynthesis, YejM maintains stable LPS level, which in turn enhances bacterial membrane's integrity. A strong outer membrane serves as a protective barrier, reducing susceptibility to phage infection. Mechanistically, YejM competes with FtsH, a membrane-bound protease, preventing FtsH from degrading LpxC.

To validate the anti-phage effect of YejM, we expressed YejM in *E. coli* TG1 strain, which carry type IV pili required for infection by M13KO7 phages. After exposuring to phages (carrying Kan resistence), on dual-antibiotic (Amp+Kan) LB plates, we observed significantly fewer colonies from YejM-expressing bactera (carrying Amp resistence), indicating a marked reduction in phage infection. As we designed, increased LPS level loweres the efficiency of phage binding and entry, ensuring the functionality of our [MINERAL](/fudan/description/) modules for industrial applications.

<div style="text-align: center;">
   <p>Table 3: Parts for Survival</p>
</div>

| Part Name        | Type   | Description    |
| ---------------- | ------ | ---------------|
| [BBa_K5115070](https://parts.igem.org/Part:BBa_K5115070) | Coding | YejM – anti-adaptor protein that regulates LPS synthesis, indirectly improving *E. coli* survival and enhancing phage resistance. |
| [BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015) | Coding | AnAFP, from [Fudan 2023](https://2023.igem.wiki/fudan/part-collection/#survival-system) |
| [BBa_K4765016](https://parts.igem.org/Part:BBa_K4765016) | Coding | *H. ex* mtSSB, from [Fudan 2023](https://2023.igem.wiki/fudan/part-collection/#survival-system) |
| [BBa_K4765126](https://parts.igem.org/Part:BBa_K4765126) | Composite | ribozyme connected: *H. ex* mtSSB + SAHS 33020 + AnAFP, from [Fudan 2023](https://2023.igem.wiki/fudan/part-collection/#survival-system) |

### Anti-freeze & Anti-Desiccation

Our engineered *E. coli* bacteria, optimized for nickel absorption, require resilient survival mechanisms to flourish in demanding working conditions. The integration of anti-freeze module provides additional benefit. We extend our sincere gratitude to [Fudan 2023](https://2023.igem.wiki/fudan/part-collection/#survival-system) for providing the plasmids that enhance our strains' anti-freeze and anti-desiccation capabilities.

The Anti-freeze module includes the protein AnAFP ([BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015)), which enhances resistance to freezing temperatures. Additionally, they have incorporated the *H. ex* mtSSB protein, derived from tardigrades. This protein provides anti-desiccation properties, ensuring robust survival in harsh conditions.

For Anti-desiccation, we utilize the protein SAHS protein (TDP, [BBa_K2306003](https://parts.igem.org/Part:BBa_K2306003)), which is essential for preventing cell damage in dry environments. This capability is critical for maintaining bacterial viability during periods of low moisture, which may occur in industrial processes.

Together, these modules enhance the *E. coli*'s resilience, allowing it to withstand extreme conditions.

## Microparticle Module

The microparticle module aims to create a specialized microenvironment within *E. coli* for the effective reduction of bioaccumulated nickel ions into nickel microparticles. Central to this process is Ni/Fe hydrogenase, a key enzyme that facilitates the transition of nickel ions into metallic particles through a catalytic reaction.

Based on our experimental results, we have selected our favorite module for nickel reduction and particle formation - [MINERAL](/fudan/description/) F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067)), which includes ribozyme-connected hox and hyp (with EP targeted hoxF, [BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063)) and cso (without csoS3, [BBa_K5115065](https://parts.igem.org/Part:BBa_K5115065)). While the alternative, U module ([BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066)) has also been test experimentally.

This integrated module provides a reliable framework for effective reduction of nickel ions into [less harmful](/fudan/safety/#fig45) forms, promoting not only efficient nickel recovery but also surprisingly nickel uptake ability of our engineered *E. coli*.

<div style="text-align: center;">
   <p>Table 4: Parts for Microparticle System</p>
</div>

| Part Name           | Type      | Description       |
| ------------------- | --------- | ----------------- |
| [BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066) | Composite | mineral, U module |
| [BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067) | Composite | mineral, F module |

### Hydrogenase-Mediated Nickel Ion Reduction

The hox and hyp operon ([BBa_K5115020](https://parts.igem.org/Part:BBa_K5115020)) components play crucial roles in the bioconversion of nickel ions into nickel microparticles.

The hox operon consists of multiple genes that work collaboratively to facilitate hydrogen production and nickel reduction. The subunit hoxF ([BBa_K5115001](https://parts.igem.org/Part:BBa_K5115001)) encodes the core hydrogenase subunit, which catalyzes the conversion of protons and electrons into molecular hydrogen. This process is crucial for providing the reducing power needed for nickel ion reduction. The subunits hoxU ([BBa_K5115003](https://parts.igem.org/Part:BBa_K5115003)), hoxY ([BBa_K5115004](https://parts.igem.org/Part:BBa_K5115004)), hoxH ([BBa_K5115005](https://parts.igem.org/Part:BBa_K5115005)), hoxW ([BBa_K5115006](https://parts.igem.org/Part:BBa_K5115006)), and hoxI ([BBa_K5115007](https://parts.igem.org/Part:BBa_K5115007)) contribute to the structure and electron transfer of the hydrogenase complex, ensuring its optimal performance during nickel reduction.

The hyp operon plays a critical role in the maturation of hydrogenase, with hypA ([BBa_K5115008](https://parts.igem.org/Part:BBa_K5115008)), hypB ([BBa_K5115009](https://parts.igem.org/Part:BBa_K5115009)), and hypF ([BBa_K5115010](https://parts.igem.org/Part:BBa_K5115010)) working together to facilitate the delivery of necessary cofactors to the enzyme complex. Specifically, hypA and hypB are involved in nickel binding and transport, ensuring that the hydrogenase subunits receive the required metal ions for optimal activity. HypF assists in the assembly of the hydrogenase complex by stabilizing its structure during maturation.

Through the synergistic integration of the hox and hyp operon, our module effectively enables the reduction of nickel ions into nickel particles, thereby maximizing the efficiency of nickel recovery from industrial wastewater.

<div style="text-align: center;">
   <p>Table 5: Parts for Hydrogenase-Mediated Nickel Ion Reduction</p>
</div>

| Part Name      | Type      | Description      |
| -------------- | --------- | ---------------- |
| [BBa_K5115001](https://parts.igem.org/Part:BBa_K5115001) | Coding    | hoxF                                          |
| [BBa_K5115003](https://parts.igem.org/Part:BBa_K5115003) | Coding    | hoxU                                          |
| [BBa_K5115004](https://parts.igem.org/Part:BBa_K5115004) | Coding    | hoxY                                          |
| [BBa_K5115005](https://parts.igem.org/Part:BBa_K5115005) | Coding    | hoxH                                          |
| [BBa_K5115006](https://parts.igem.org/Part:BBa_K5115006) | Coding    | hoxW                                          |
| [BBa_K5115007](https://parts.igem.org/Part:BBa_K5115007) | Coding    | hoxI                                          |
| [BBa_K5115008](https://parts.igem.org/Part:BBa_K5115008) | Coding    | hypA                                          |
| [BBa_K5115009](https://parts.igem.org/Part:BBa_K5115009) | Coding    | hypB                                          |
| [BBa_K5115010](https://parts.igem.org/Part:BBa_K5115010) | Coding    | hypF                                          |
| [BBa_K5115011](https://parts.igem.org/Part:BBa_K5115011) | Composite | ribozyme+RBS+hoxF+stem-loop                   |
| [BBa_K5115012](https://parts.igem.org/Part:BBa_K5115012) | Composite | ribozyme+RBS+hoxU+stem-loop                   |
| [BBa_K5115013](https://parts.igem.org/Part:BBa_K5115013) | Composite | ribozyme+RBS+hoxY+stem-loop                   |
| [BBa_K5115014](https://parts.igem.org/Part:BBa_K5115014) | Composite | ribozyme+RBS+hoxH+stem-loop                   |
| [BBa_K5115015](https://parts.igem.org/Part:BBa_K5115015) | Composite | ribozyme+RBS+hoxW+stem-loop                   |
| [BBa_K5115016](https://parts.igem.org/Part:BBa_K5115016) | Composite | ribozyme+RBS+hoxI+stem-loop                   |
| [BBa_K5115017](https://parts.igem.org/Part:BBa_K5115017) | Composite | ribozyme+RBS+hypA+stem-loop                   |
| [BBa_K5115018](https://parts.igem.org/Part:BBa_K5115018) | Composite | ribozyme+RBS+hypB+stem-loop                   |
| [BBa_K5115018](https://parts.igem.org/Part:BBa_K5115018) | Composite | ribozyme+RBS+hypB+stem-loop                   |
| [BBa_K5115019](https://parts.igem.org/Part:BBa_K5115019) | Composite | ribozyme+RBS+hypF+stem-loop                   |
| [BBa_K5115020](https://parts.igem.org/Part:BBa_K5115020) | DNA       | hox and hyp operon                            |
| [BBa_K5115021](https://parts.igem.org/Part:BBa_K5115021) | DNA       | linker1 for hox and hyp                       |
| [BBa_K5115022](https://parts.igem.org/Part:BBa_K5115022) | DNA       | linker2 for hox and hyp                       |
| [BBa_K5115023](https://parts.igem.org/Part:BBa_K5115023) | DNA       | linker3 for hox and hyp                       |
| [BBa_K5115024](https://parts.igem.org/Part:BBa_K5115024) | DNA       | linker4 for hox and hyp                       |
| [BBa_K5115025](https://parts.igem.org/Part:BBa_K5115025) | DNA       | linker5 for hox and hyp                       |
| [BBa_K5115051](https://parts.igem.org/Part:BBa_K5115051) | Composite | ribozyme connected hox and hyp               |
| [BBa_K5115052](https://parts.igem.org/Part:BBa_K5115052) | Composite | ribozyme connected hox and hyp, without hoxF |
| [BBa_K5115053](https://parts.igem.org/Part:BBa_K5115053) | Composite | ribozyme connected hox and hyp, without hoxU |

### &alpha;-carboxysomes Compartmentalization

We incorporate a carboxysome module to enhance the efficiency of nickel fixation and support nickel ion reduction processes. The carboxysome-related parts are essential for the formation of this specialized compartments.

The csoS1A ([BBa_K5115030](https://parts.igem.org/Part:BBa_K5115030)), csoS1B ([BBa_K5115031](https://parts.igem.org/Part:BBa_K5115031)), csoS1C ([BBa_K5115030](https://parts.igem.org/Part:BBa_K5115031)), csoS1D ([BBa_K5115032](https://parts.igem.org/Part:BBa_K5115032)), csoS2 ([BBa_K5115026](https://parts.igem.org/Part:BBa_K5115026)), and csoS3 ([BBa_K5115027](https://parts.igem.org/Part:BBa_K5115027)) proteins are integral to the structural integrity of carboxysomes. These proteins form the shell of the carboxysome, providing a stable platform for enzymes.

Specifically, csoS1A, csoS1B, and csoS1C contribute to the outer layer of the carboxysome, while csoS2 and csoS3 play roles in stabilizing the shell structure, ensuring that the carboxysome remains intact under various cellular conditions. The inclusion of csoS4A ([BBa_K5115055](https://parts.igem.org/Part:BBa_K5115055)) and csoS4B ([BBa_K5115028](https://parts.igem.org/Part:BBa_K5115028)) further enhances the structural assembly and functionality of the carboxysome, facilitating the encapsulation of carbon fixation enzymes like RuBisCO in cyanobacteria.

In our design, we omitted the *csoS3* ([BBa_K5115027](https://parts.igem.org/Part:BBa_K5115027)) gene, as previous studies have shown that it is not essential for carboxysome assembly or function. While it does enhance carboxysome stability, its absence does not significantly affect shell formation. To reduce the final plasmid size, we chose to excluding this component while retaining the other structural proteins needed for effective carboxysome formation.

The components of the carboxysome module are derived from [a plasmid reported in the literature](https://addgene.org/140856), which contains the genetic sequences necessary for the assembly and function of carboxysomes in *E. coli*. We removed the csoS3 and wrapped its sequence with pRAP[^2].

<div style="text-align: center;">
   <p>Table 6: Parts for α-carboxysomes Compartmentalization</p>
</div>

| Part Name        | Type   | Description    |
| ---------------- | ------ | ---------------|
| [BBa_K5115026](https://parts.igem.org/Part:BBa_K5115026) | Coding | csoS2              |
| [BBa_K5115027](https://parts.igem.org/Part:BBa_K5115027) | Coding | csoS3              |
| [BBa_K5115028](https://parts.igem.org/Part:BBa_K5115028) | Coding | csoS4B             |
| [BBa_K5115029](https://parts.igem.org/Part:BBa_K5115029) | Coding | csoS1C             |
| [BBa_K5115030](https://parts.igem.org/Part:BBa_K5115030) | Coding | csoS1A             |
| [BBa_K5115031](https://parts.igem.org/Part:BBa_K5115031) | Coding | csoS1B             |
| [BBa_K5115032](https://parts.igem.org/Part:BBa_K5115032) | Coding | csoS1D             |
| [BBa_K5115034](https://parts.igem.org/Part:BBa_K5115034) | DNA    | csoS operon        |
| [BBa_K5115044](https://parts.igem.org/Part:BBa_K5115044) | DNA    | linker1            |
| [BBa_K5115045](https://parts.igem.org/Part:BBa_K5115045) | DNA    | linker2            |
| [BBa_K5115046](https://parts.igem.org/Part:BBa_K5115046) | DNA    | linker3            |
| [BBa_K5115047](https://parts.igem.org/Part:BBa_K5115047) | DNA    | linker4            |
| [BBa_K5115048](https://parts.igem.org/Part:BBa_K5115048) | DNA    | linker5            |
| [BBa_K5115049](https://parts.igem.org/Part:BBa_K5115049) | DNA    | linker6            |
| [BBa_K5115055](https://parts.igem.org/Part:BBa_K5115055) | Coding | csoS4A             |
| [BBa_K5115065](https://parts.igem.org/Part:BBa_K5115065) | DNA    | cso, without csoS3 |

### Peptide Encapsulation

The Peptide Encapsulation (EP) module is designed to facilitate the effective encapsulation of enzymes to the carboxysome structure, enhancing the efficiency of biochemical reactions. EP ([BBa_K5115002](https://parts.igem.org/Part:BBa_K5115002))  serves as a linker that connects the target enzymes to the carboxysome, ensuring proper localization. We test its targeting efficienty with stayGold fused with EP ([BBa_K5115057](https://parts.igem.org/Part:BBa_K5115057)).

In our design, EP is integrated into several composite parts: the part hoxF fused with EP ([BBa_K5115058](https://parts.igem.org/Part:BBa_K5115058), and its ribozyme-connected version [BBa_K5115061](https://parts.igem.org/Part:BBa_K5115061)) or hoxU fused with EP ([BBa_K5115059](https://parts.igem.org/Part:BBa_K5115059), and its ribozyme-connected version [BBa_K5115062](https://parts.igem.org/Part:BBa_K5115062)) combines the hoxF or hoxU coding sequence, responsible for encoding a hydrogenase subunit, inframe with EP, facilitating the targeted delivery of the hydrogenase into the carboxysome. 

Additionally, the parts hox and hyp with EP targeted hoxF ([BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063)) and hox and hyp with EP targeted hoxU ([BBa_K5115064](https://parts.igem.org/Part:BBa_K5115064)) contain the hox and hyp genes, with EP specifically targeting hoxF and hoxU, respectively, for encapsulation. This design allows for the coordinated expression and delivery of both hydrogenase and helper proteins to the carboxysome shell, promoting efficient nickel ion reduction processes.

<div style="text-align: center;">
   <p>Table 7: Parts for Peptide Encapsulation</p>
</div>

| Part Name        | Type   | Description    |
| ---------------- | ------ | ---------------|
| [BBa_K5115002](https://parts.igem.org/Part:BBa_K5115002) | Coding    | EP                                 |
| [BBa_K5115057](https://parts.igem.org/Part:BBa_K5115057) | Composite | stayGold fused with EP |
| [BBa_K5115058](https://parts.igem.org/Part:BBa_K5115058) | Coding    | hoxF fused with EP                 |
| [BBa_K5115059](https://parts.igem.org/Part:BBa_K5115059) | Composite | hoxU fused with EP                 |
| [BBa_K5115061](https://parts.igem.org/Part:BBa_K5115061) | Composite | ribozyme+RBS+hoxF-GS-EP+stem-loop  |
| [BBa_K5115062](https://parts.igem.org/Part:BBa_K5115062) | Composite | ribozyme+RBS+hoxU-GS-EP+stem-loop  |
| [BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063) | Composite | hox and hyp, with EP targeted hoxF |
| [BBa_K5115064](https://parts.igem.org/Part:BBa_K5115064) | Composite | hox and hyp, with EP targeted hoxU |

In summary, the microparticle module harnesses the collaborative power of hydrogenase enzymes, carboxysome compartments, and encapsulation peptides to drive an innovative approach for nickel reduction in *E. coli*. This integrated module not only advances the biotechnological potential of engineered microorganisms but also addresses environmental concerns related to nickel contamination by converting harmful ions into less toxic particles.

## Hydrogen Supply

To ensure an adequate supply of hydrogen for our engineered *E. coli* bacteria, we have employed a symbiotic system that leverages cyanobacteria for hydrogen production. This approach is vital for providing the necessary hydrogen for hydrogenase-mediated nickel reduction. We are immensely grateful for the plasmids provided by [Fudan 2023](https://2023.igem.wiki/fudan/results/#_2-symbiotic-system), as well as *CscB* ([BBa_K4115045](https://parts.igem.org/Part:BBa_K4115045)) and *SacC* ([BBa_K4115017](https://parts.igem.org/Part:BBa_K4115017)) provided by [ShanghaiTech-China 2022](https://2024.igem.wiki/shanghaitech-china/).

Please note that when we test our microparticle U module ([BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066)) or F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067)), for [TEM](/fudan/experiments/#other-experimental-methods) clarity, we bubbled 5.6% H~2~ gas into the bacteria culture, rather using cyanobacteria coculture.

----
For research articles inspired our parts design, please visit our [Description](/fudan/description/) page.

[^2]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143.[https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)