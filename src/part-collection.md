---
title: Part Collection
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif

author:
- name: Yi Shi
  url: /fudan/team/#yi-shi
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
---

<br><br>

Our favourite composite part is **mineral, F module([BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068))**.

## Nickel Enrichment System

Based on our experimental results, we have concluded that the final version of our Nickel Enrichment System, **mineral, nickle module([BBa_K5115068]([BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068)))**, will consist of ribozyme-connected **MTA, Metallothionein([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050))** , **Hpn,** **Histidine-rich metal-binding protein ([BBa_K1151001](https://parts.igem.org/Part:BBa_K1151001))**, **RcnR_C35L ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000))**, and **NixA-F1v([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086))**. 

This integrated system creates a robust platform not only for efficient nickel absorption but also for maintaining cellular health under heavy metal stress conditions, thereby increasing tolerance and facilitating sustainable nickel recovery from wastewater.

<div style="text-align: center;">
   <p>Table 1: Parts for Nickel Enrichment</p>
</div>

| Part Name                                                | Type      | Description             |
| -------------------------------------------------------- | --------- | ----------------------- |
| [BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068) | Composite | mineral,  nickle module |

### Nickel Absorption

Our system is engineered to optimize nickel ion recovery from industrial wastewater, leveraging a synergistic integration of various components. The **ribozyme connected nik ([BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082))** is the first component of our nickel absorption module. This ATP-binding cassette (ABC) transporter complex is essential for transporting nickel ions from the periplasm into the cytoplasm. NikABCDE comprises five proteins: **NikA ([BBa_K5115072](https://parts.igem.org/Part:BBa_K5115072))** functions as a periplasmic nickel-binding protein that captures nickel ions and facilitates their delivery to the membrane transport components. **NikB ([BBa_K5115073](https://parts.igem.org/Part:BBa_K5115073))** and **NikC ([BBa_K5115074](https://parts.igem.org/Part:BBa_K5115074))** are crucial membrane-spanning proteins that create a channel through which nickel ions can traverse the membrane, while **NikD ([BBa_K5115075](https://parts.igem.org/Part:BBa_K5115075))** and **NikE ([BBa_K5115076](https://parts.igem.org/Part:BBa_K5115076))**provide the requisite ATPase activity that powers this transport mechanism, ensuring an efficient influx of nickel ions essential for various metabolic processes.

In parallel, the **NixA ([BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071))**, a member of the NiCoT family, enhances our system's capacity for nickel absorption. This monomeric protein is specifically adapted for nickel transport. By employing modified FKBP, **F1v (FKBP with F36V mutation) ([BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085))**, we optimize NixA's dimerization with different assembly orders in **NixA-F1v([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086))** and **F1v-NixA([BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087))**, and the former significantly improving its transport efficiency.

To counteract the spontaneous nickel efflux of E. coli, we incorporate **RcnR_C35L ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000))**, a nickel-responsive transcriptional regulator, to optimize nickel uptake by modulating gene expression. RcnR is a tetrameric transcriptional repressor that responds to the binding of Ni(II) ions by releasing DNA, resulting in the expression of RcnA, which is responsible for nickel export from the cell. By inhibiting RcnA, RcnR ensures that intracellular nickel ion concentrations remain elevated, thereby enhancing the effectiveness of our nickel absorption system. 

The Nickel Enrichment System allows *E. coli* to achieve a high influx of nickel ions, vital for subsequent biochemical pathways and nickel-dependent enzymatic activities in our design.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/czy/prap-1-czy.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Mechanistic Overview of Nickel Uptake.
   <br>
  This diagram illustrates the interaction and functions of the nik operon, NixA transporter, RcnR regulator, and NixA-F1v in facilitating nickel ion absorption <em>E. coli</em></small></p>
</div>
</div>

<div style="text-align: center;">
   <p>Table 2: Parts for Nickel Absorption</p>
</div>

| Part Name                                                | Type      | Description                                                  |
| -------------------------------------------------------- | --------- | ------------------------------------------------------------ |
| [BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000) | Coding    | RcnR_C35L – nickel-responsive transcriptional regulator that modulates gene expression for nickel homeostasis. |
| [BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050) | Coding    | Metallothionein from *Pisum sativum* for heavy metal binding, protecting cells from nickel toxicity. |
| [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071) | Coding    | NixA – nickel transporter, enhanced dimerization via FKBP for improved transport efficiency. |
| [BBa_K5115072](https://parts.igem.org/Part:BBa_K5115072) | Coding    | NikA – periplasmic nickel-binding protein, essential for nickel ion capture and delivery to transport components. |
| [BBa_K5115073](https://parts.igem.org/Part:BBa_K5115073) | Coding    | NikB – integral membrane protein that forms part of the transport channel for nickel ions. |
| [BBa_K5115074](https://parts.igem.org/Part:BBa_K5115074) | Coding    | NikC – integral membrane protein facilitating the movement of nickel ions across the membrane. |
| [BBa_K5115075](https://parts.igem.org/Part:BBa_K5115075) | Coding    | NikD – ATPase that powers the transporter, essential for the active transport of nickel ions. |
| [BBa_K5115076](https://parts.igem.org/Part:BBa_K5115076) | Coding    | NikE – ATP-binding component crucial for the proper functioning and assembly of the NikABCDE operon. |
| [BBa_K5115077](https://parts.igem.org/Part:BBa_K5115077) | Composite | ribozyme+RBS+nikA+stem-loop                                  |
| [BBa_K5115078](https://parts.igem.org/Part:BBa_K5115078) | Composite | ribozyme+RBS+nikB+stem-loop                                  |
| [BBa_K5115079](https://parts.igem.org/Part:BBa_K5115079) | Composite | ribozyme+RBS+nikC+stem-loop                                  |
| [BBa_K5115080](https://parts.igem.org/Part:BBa_K5115080) | Composite | ribozyme+RBS+nikD+stem-loop                                  |
| [BBa_K5115081](https://parts.igem.org/Part:BBa_K5115081) | Composite | ribozyme+RBS+nikE+stem-loop                                  |
| [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082) | Composite | ribozyme  connected nik - Post-transcriptional regulation element for the nik operon. |
| [BBa_K5115085](https://parts.igem.org/Part:BBa_K5115085) | Coding    | F1v (FKBP with F36V mutation) -                              |
| [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086) | Composite | NixA-F1v -                                                   |
| [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087) | Composite | F1v-NixA -                                                   |

### Nickel Tolerance

To enhance nickel tolerance in our engineered *E. coli*, we integrate **Hpn,** **Histidine-rich metal-binding protein ([BBa_K1151001](https://parts.igem.org/Part:BBa_K1151001)) **and **MTA, Metallothionein([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050))** leveraging their unique properties to mitigate nickel toxicity while optimizing absorption.

**Histidine-rich metal-binding protein ([BBa_K1151001](https://parts.igem.org/Part:BBa_K1151001))** , is a crucial component of our nickel tolerance strategy. This protein, derived from *Helicobacter pylori*, is characterized by its high histidine content. Its structure allows it to exist in various multimeric forms in solution. The primary function of Hpn is to bind nickel ions, with the ability to sequester up to five Ni²⁺ ions per monomer in a pH-dependent manner (optimal at pH 7.4). This property is essential for maintaining nickel homeostasis within the bacterial cell, especially in environments with elevated metal concentrations. By binding and storing excess nickel, Hpn prevents harmful interactions between nickel ions and cellular machinery, thereby promoting the survival and functionality of *E. coli* in nickel-rich conditions.

Our improved construct, **Ribozyme + RBS + Hpn + stem-loop([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036))**, is designed to enhance the expression of Hpn within our ribozyme-assisted polycistronic co-expression system. This system ensures robust expression of Hpn, facilitating effective nickel detoxification.

In addition to Hpn, we incorporate **MTA, Metallothionein([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050))** , sourced from *Pisum sativum*. MTA is a cysteine-rich protein known for its high binding affinity for various heavy metals, including nickel. By sequestering excess nickel ions, MTA further reduces the potential cytotoxic effects associated with elevated nickel levels. This dual strategy, combining Hpn and MTA, enhances the overall nickel absorptivity of our engineered bacteria while simultaneously minimizing the harmful effects of nickel accumulation.

Together, the synergistic action of **Ribozyme + RBS + Hpn + stem-loop([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036))**, and **MTA, Metallothionein([BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050))** establishes a comprehensive tolerance mechanism. This integrated system not only supports the effective uptake of nickel ions but also ensures that *E. coli* can thrive in challenging environments characterized by fluctuating metal concentrations.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/czy/prap-1-czy.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 2: Mechanistic Overview of Nickel Tolerance.
   <br>
  This diagram illustrates the interaction and functions of the Hpn and MTA in facilitating nickel ion recovery and tolerance in <em>E. coli</em></small></p>
</div>
</div>

<div style="text-align: center;">
   <p>Table 3: Parts for Nickel Tolerance</p>
</div>

| Part Name                                                | Type   | Description                                                  |
| -------------------------------------------------------- | ------ | ------------------------------------------------------------ |
| [BBa_K5115050](https://parts.igem.org/Part:BBa_K5115050) | Coding | MTA, Metallothionein – cysteine-rich protein that binds excess nickel, reducing cytotoxicity and improving tolerance. |
| [BBa_K5115036](https://parts.igem.org/Part:BBa_K5115050) | Coding | Ribozyme + RBS + Hpn – histidine-rich protein that sequesters nickel ions, protecting cells from nickel toxicity. |

## Survival System

### Anti-phage

To ensure the viability of our engineered *E. coli* in semi-open environments, such as wastewater treatment facilities, we developed an Anti-phage Survival System utilizing **YejM(BBa_K5115070)**, a critical anti-adaptor protein. YejM plays a key role in regulating the synthesis of lipopolysaccharide (LPS), a major component of the *E. coli* outer membrane. By inhibiting the degradation of LpxC, an enzyme required for LPS biosynthesis, YejM ensures stable LPS levels, which in turn enhances the bacterial membrane's integrity. This stronger outer membrane serves as a protective barrier, reducing susceptibility to phage infection.

YejM competes with FtsH, a membrane-bound protease, for interaction with LapB, preventing FtsH from degrading LpxC. This mechanism indirectly elevates LPS production, fortifying the bacterial defense against environmental stressors, including phages.

To validate the anti-phage effectiveness of YejM, we introduced the YejM gene into *E. coli TG1* strains, which carry type IV pili required for infection by M13KO7 phages. We observed significantly fewer colonies in YejM-expressing strains on dual-antibiotic plates following phage exposure, indicating a marked reduction in phage infection. This suggests that increased LPS production creates a physical barrier, lowering the efficiency of phage binding and entry.

In conclusion, the system based on YejM provides a robust strategy to protect *E. coli* against phages in complex environments, ensuring the stable functionality of our MINERAL system for industrial applications.

<div style="text-align: center;">
   <p>Table 4: Parts for Anti-phage</p>
</div>

| Part Name                                                | Type   | Description                                                  |
| -------------------------------------------------------- | ------ | ------------------------------------------------------------ |
| [BBa_K5115070](https://parts.igem.org/Part:BBa_K5115070) | Coding | YejM – anti-adaptor protein that regulates LPS synthesis, indirectly improving *E. coli* survival and enhancing phage resistance. |

### Anti-freeze & Anti-UV

Our engineered *E. coli* strains, optimized for nickel absorption, require resilient survival mechanisms to flourish in demanding working conditions. The integration of Anti-freeze and Anti-UV modules is essential for various reasons. We extend our sincere gratitude to **[Fudan iGEM 2023](https://2023.igem.wiki/fudan/part-collection/#survival-system)** for providing the plasmids that enhance our strains' anti-freeze and anti-desiccation capabilities.

The Anti-freeze module includes the protein **AnAFP ([BBa_K4765015](https://parts.igem.org/Part:BBa_K4765015))**, which enhances resistance to freezing temperatures. Additionally, we have incorporated the *H. ex* mtSSB protein, derived from tardigrades. This protein provides anti-desiccation properties, ensuring robust survival in harsh conditions.

For Anti-desiccation, we utilize the protein **SAHS protein ([BBa_K2306003](https://parts.igem.org/Part:BBa_K2306003))**, which is essential for preventing cell damage in dry environments. This capability is critical for maintaining bacterial viability during periods of low moisture, which may occur in industrial processes.

Together, these modules enhance the *E. coli*'s resilience, allowing it to withstand extreme cold and desiccation, which are vital for successful colonization and operation in extraterrestrial and challenging terrestrial environments.

## Microparticle System

The Microparticle System aims to create a specialized microenvironment within *E. coli* for the effective reduction of bioaccumulated nickel ions into nickel microparticles. Central to this process is Ni/Fe hydrogenase, a key enzyme that facilitates the transition of nickel ions into metallic nanoparticles through a reversible catalytic reaction.

Based on our experimental results, we have concluded that the final version of our Microparticle System, will consist of the hydrogenase-related components essential for nickel reduction including **mineral, F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067))**, which includes the part **hox and hyp, with EP targeted hoxF([BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063))** and **cso, without csoS3([BBa_K5115065](https://parts.igem.org/Part:BBa_K5115065))**, while the alternative, **mineral, U module ([BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066))**has been set aside due to its lesser efficacy in our trials.

This integrated system provides a reliable framework for the effective reduction of nickel ions into less harmful forms, promoting not only efficient nickel recovery but also enhancing the resilience of our engineered *E. coli* strains in challenging environmental conditions.

<div style="text-align: center;">
   <p>Table5: Parts for Microparticle System</p>
</div>

| Part Name                                                | Type      | Description       |
| -------------------------------------------------------- | --------- | ----------------- |
| [BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066) | Composite | mineral, U module |
| [BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067) | Composite | mineral, F module |

### Hydrogenase-Mediated Nickel Ion Reduction

The hydrogenase component of our microparticle system plays a crucial role in the bioconversion of nickel ions into nickel microparticles. This system incorporates several key parts, including the **hox and hyp operon([BBa_K5115020](https://parts.igem.org/Part:BBa_K5115020))** to enhance functionality and efficiency.

The **hox operon** consists of multiple genes that work collaboratively to facilitate hydrogen production and nickel reduction. **hoxF ([BBa_K5115001](https://parts.igem.org/Part:BBa_K5115001))** encodes the core hydrogenase subunit, which catalyzes the conversion of protons and electrons into molecular hydrogen. This process is crucial for providing the reducing power needed for nickel ion reduction. The subunits **hoxU ([BBa_K5115003](https://parts.igem.org/Part:BBa_K5115003))**, **hoxY ([BBa_K5115004](https://parts.igem.org/Part:BBa_K5115004))**, **hoxH ([BBa_K5115005](https://parts.igem.org/Part:BBa_K5115005))**, **hoxW ([BBa_K5115006](https://parts.igem.org/Part:BBa_K5115006))**, and **hoxI ([BBa_K5115007](https://parts.igem.org/Part:BBa_K5115007))** contribute to the stability, electron transfer, and assembly of the hydrogenase complex, ensuring its optimal performance during nickel reduction.

The **hyp operon** plays a critical role in the maturation of hydrogenase, with **hypA ([BBa_K5115008](https://parts.igem.org/Part:BBa_K5115008))**, **hypB ([BBa_K5115009](https://parts.igem.org/Part:BBa_K5115009))**, and **hypF ([BBa_K5115010](https://parts.igem.org/Part:BBa_K5115010))** working together to facilitate the delivery of the necessary nickel cofactor to the enzyme. Specifically, hypA and **hypB** are involved in nickel binding and transport, ensuring that the hydrogenase subunits receive the required metal ions for optimal activity. HypF assists in the assembly of the hydrogenase complex by stabilizing its structure during maturation.

Through the synergistic integration of the hox and hyp operon, our system effectively enhances hydrogen production and enables the reduction of nickel ions into nanoparticles, thereby maximizing the efficiency of nickel recovery from industrial wastewater.

<div style="text-align: center;">
   <p>Table 6: Parts for Hydrogenase-Mediated Nickel Ion Reduction</p>
</div>

| Part Name                                                | Type      | Description                                   |
| -------------------------------------------------------- | --------- | --------------------------------------------- |
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
| [BBa_K5115051](https://parts.igem.org/Part:BBa_K5115051) | Composite | ribozyme connected  hox and hyp               |
| [BBa_K5115052](https://parts.igem.org/Part:BBa_K5115052) | Composite | ribozyme connected hox and hyp, without  hoxF |
| [BBa_K5115053](https://parts.igem.org/Part:BBa_K5115053) | Composite | ribozyme connected hox and hyp, without  hoxU |

### α-carboxysomes Compartmentalization

Our system incorporates a carboxysome module designed to enhance the efficiency of nickel fixation and support nickel ion reduction processes. The carboxysome-related components are essential for the formation of these specialized organelles within *E. coli*.

The **csoS1A ([BBa_K5115030](https://parts.igem.org/Part:BBa_K5115030))**, **csoS1B ([BBa_K5115031](https://parts.igem.org/Part:BBa_K5115031))**, **csoS1C ([BBa_K5115030](https://parts.igem.org/Part:BBa_K5115031))**, **csoS1D ([BBa_K5115032](https://parts.igem.org/Part:BBa_K5115032))**, **csoS2 ([BBa_K5115026](https://parts.igem.org/Part:BBa_K5115026))**, and **csoS3 ([BBa_K5115027](https://parts.igem.org/Part:BBa_K5115027))** proteins are integral to the structural integrity of carboxysomes. These proteins form the shell of the carboxysome, providing a protective environment for carbon fixation enzymes.

Specifically, **csoS1A**, **csoS1B**, and **csoS1C** contribute to the outer layer of the carboxysome, while **csoS2** and **csoS3** play roles in stabilizing the shell structure, ensuring that the carboxysome remains intact under various cellular conditions. The inclusion of **csoS4A ([BBa_K5115055](https://parts.igem.org/Part:BBa_K5115055))** and **csoS4B ([BBa_K5115028](https://parts.igem.org/Part:BBa_K5115028))** further enhances the structural assembly and functionality of the carboxysome, facilitating the encapsulation of carbon fixation enzymes like RuBisCO.

In our design, we omitted the **csoS3 ([BBa_K5115027](https://parts.igem.org/Part:BBa_K5115027))** gene, as previous studies have shown that it is not essential for carboxysome assembly or function. While it does enhance carboxysome stability, its absence does not significantly affect shell formation or carbon fixation. Therefore, we chose to streamline our plasmid design by excluding this component while retaining the key structural proteins needed for effective carboxysome formation.

The components of the carboxysome module in our system are derived from a plasmid reported in the literature, which contains the genetic sequences necessary for the assembly and function of carboxysomes in *E. coli*. The overall design not only supports nickel ion reduction but also promotes enhanced carbon capture, thereby contributing to a more sustainable bioprocess.

<div style="text-align: center;">
   <p>Table 7: Parts for α-carboxysomes Compartmentalization</p>
</div>

| Part Name                                                | Type   | Description        |
| -------------------------------------------------------- | ------ | ------------------ |
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

The Peptide Encapsulation (EP) module is designed to facilitate the effective encapsulation of enzymes within the carboxysome structure, enhancing the efficiency of biochemical reactions. **EP ([BBa_K5115002](https://parts.igem.org/Part:BBa_K5115002))**  serves as a linker that connects the target enzymes to the carboxysome, ensuring proper localization and functionality.

In our experimental design, EP is integrated into several composite parts, each serving a specific linking purpose. The part **hoxF fused with EP ([BBa_K5115058](https://parts.igem.org/Part:BBa_K5115058))** or **hoxU fused with EP ([BBa_K5115059](https://parts.igem.org/Part:BBa_K5115059))** combines the hoxF or hoxU gene, responsible for encoding a hydrogenase subunit, with EP, facilitating the targeted delivery of the hydrogenase into the carboxysome. 

The composite parts **ribozyme+RBS+hoxF-GS-EP+stem-loop ([BBa_K5115061](https://parts.igem.org/Part:BBa_K5115061))** and **ribozyme+RBS+hoxU-GS-EP+stem-loop ([BBa_K5115062](https://parts.igem.org/Part:BBa_K5115062))** both incorporate a ribozyme, ribosome binding site (RBS), and their respective hydrogenase genes (hoxF or hoxU) fused with EP and a stem-loop structure. This design ensures the efficient expression and encapsulation of the hydrogenase subunits within the carboxysome, promoting optimal enzyme functionality.

Additionally, the parts **hox and hyp, with EP targeted hoxF ([BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063))** and **hox and hyp, with EP targeted hoxU ([BBa_K5115064](https://parts.igem.org/Part:BBa_K5115064))** contain the hox and hyp genes, with EP specifically targeting hoxF and hoxU, respectively, for encapsulation. This design allows for the coordinated expression and delivery of both hydrogenase and helper proteins within the carboxysome, facilitating efficient encapsulation and function.

By utilizing the EP module, our system can enhance enzyme activity and stability within the carboxysome, promoting efficient nickel ion reduction and carbon fixation processes.

<div style="text-align: center;">
   <p>Table 8: Parts for Peptide Encapsulation</p>
</div>

| Part Name                                                | Type      | Description                        |
| -------------------------------------------------------- | --------- | ---------------------------------- |
| [BBa_K5115002](https://parts.igem.org/Part:BBa_K5115002) | Coding    | EP                                 |
| [BBa_K5115058](https://parts.igem.org/Part:BBa_K5115058) | Coding    | hoxF fused with EP                 |
| [BBa_K5115059](https://parts.igem.org/Part:BBa_K5115059) | Composite | hoxU fused with EP                 |
| [BBa_K5115061](https://parts.igem.org/Part:BBa_K5115061) | Composite | ribozyme+RBS+hoxF-GS-EP+stem-loop  |
| [BBa_K5115062](https://parts.igem.org/Part:BBa_K5115062) | Composite | ribozyme+RBS+hoxU-GS-EP+stem-loop  |
| [BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063) | Composite | hox and hyp, with EP targeted hoxF |
| [BBa_K5115064](https://parts.igem.org/Part:BBa_K5115064) | Composite | hox and hyp, with EP targeted hoxU |

In summary, the Microparticle System harnesses the collaborative power of hydrogenase enzymes, carboxysome compartments, and encapsulation peptides to drive an innovative approach for nickel reduction in *E. coli*. This integrated module not only advances the biotechnological potential of engineered microorganisms but also addresses environmental concerns related to nickel contamination by converting harmful ions into less toxic nanoparticles.

## Hydrogen supply System

To ensure an adequate supply of hydrogen for our engineered *E. coli* strains, we have established a symbiotic system that leverages cyanobacteria for hydrogen production. This approach is vital for providing the necessary hydrogen for hydrogenase-mediated nickel reduction. We are immensely grateful for the plasmids provided by Fudan iGEM 2023, including *CscB* ([BBa_K4115045](https://parts.igem.org/Part:BBa_K4115045)) and *SacC* ([BBa_K4115017](https://parts.igem.org/Part:BBa_K4115017)), provided by [ShanghaiTech-China iGEM 2023](https://2024.igem.wiki/shanghaitech-china/), which facilitate the integration of hydrogen production with our *E. coli* hydrogen utilization pathway.


## References
[^1]: 
[^]: 
