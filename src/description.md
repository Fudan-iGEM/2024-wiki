---
title: Description
author:
  name: Kevin Qi
  url: /fudan/team/#kevin-qi
headergif: https://static.igem.wiki/teams/5115/header/description-header-new.gif
---


## Another Lesson?

Humans often realize their mistakes only when the damage is irreparable, a lesson echoed throughout history. Our relentless overexploitation of natural resources has left scars on the environment, and the cycle of neglect persists. While metals like copper and aluminum are now commonly recycled, others, such as nickel, still lag far behind, following the very paths we've seen before.

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/description/description-fig1.png" style="width:100%">
    <div>
        <span style="color:gray">Figure 1: Overexploitation of natural resources</span>
        <br><br>
    </div>
</div>

<br>

## Use and Misuse of Nickel

Nickel is an essential metal element that plays a crucial role in modern industries, particularly in the production of electric vehicle batteries and stainless steel, which are foundational to sectors like transportation and construction. In many ways, nickel powers and supports the modern society as we know it. 

However, nickel mining and extraction come at a significant environmental cost. The process of extracting nickel from ores typically involves large-scale mining operations, which release toxic by-products, including nickel-laden wastewater. This wastewater, when discharged into rivers, lakes, or oceans, can be highly toxic to aquatic ecosystems, disrupting biodiversity and threatening aquatic life[^1]. Yet, because global nickel reserves are currently perceived as abundant, there has been little urgency to prioritize recycling, despite its importance for sustainability and environmental protection.

While nickel reserves may seem sufficient today, this apparent abundance has created a dangerous complacency. Recycling remains overlooked, accelerating resource depletion and intensifying environmental degradation. Mining operations continue to devastate ecosystems, causing deforestation, soil erosion, and habitat loss, all while industrial emissions contribute further harm.

Meanwhile, the demand for nickel is growing at an unsustainable rate, outpacing production[^2]. This growing imbalance between supply and demand will eventually lead to resource shortages, though this is often ignored due to the immediate availability of nickel. As a result, the need for recycling nickel remains underestimated, despite its critical importance for future generations.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
    <div>
        <span style="color:gray">Figure 2: Nickel in our modern world</span>
        <br><br>
    </div>
</div>

<br>

## Current Nickel Recycling Methods

Nickel can be sourced from either mining or recycling. Today, nickel recycling mainly involves recovering it from end-of-life products, such as stainless steel and batteries. Conventional recycling methods typically rely on melting, refining, and purifying scrap metal. While these processes help recover some nickel, they are energy-intensive, costly, and waste generating[^3]. 

Despite the environmental damage caused by mining, it remains the more cost-effective option compared to recycling. As a result, there is little economic incentive to prioritize recycling. Currently, only &nbsp;1%&nbsp; of the global nickel supply comes from recycling[^4].

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/description/description-fig3.png" style="width:100%">
</div>


Unlike traditional recycling methods, biological approaches offer a more energy-efficient, environmentally friendly, and element-specific way for nickel recovery.


## Project Overview

Facing with the pressing issues of heavy metal pollution and resource depletion, our projects have focused on using synthetic biology to tackle nickel emissions and recycling.

We have developed a symbiotic system involving *E. coli* and cyanobacteria to recover nickel ionsfrom industrial wastewater, reduce them to its neutral state, and transform them into harmless microparticles.

Our project, **Microparticle Integration for Nickel Extraction and Reusable Applications (MINERAL)**, not only addresses current nickel pollution but also aims to meet the increasing demand for sustainable nickel recovery in the near future.

<div style="text-align: center;" id="fig4">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
    <div>
        <span style="color:gray">Figure 4: Overview of MINERAL</span>
        <br><br>
    </div>
</div>

<br>

## Our Problems

Before we can move forward with our project design, several key challenges must be addressed:

### 1. Nickel Levels are Regulated in *E. coli*

The natural nickel transport and regulation mechanisms in *Escherichia coli* limit its ability to take up large amounts of nickel. [NikABCDE](https://parts.igem.org/Part:BBa_K5115082), the primary active nickel transporter in *E. coli*, facilitates most of the nickel ion influx[^5], while RcnA works in reverse, actively pumping excess nickel out of the cell[^6]. [RcnR](https://parts.igem.org/Part:BBa_K5115000), a transcription factor, upregulates the expression of RcnA in the presence of nickel[^7]. This balance makes *E. coli* inherently inefficient for bioaccumulating the necessary levels of nickel for our purposes. To overcome this limitation, we must use synthetic biology to engineer *E. coli* to enhance its nickel uptake capacity.


### 2. Multiple Threats to *E. coli* in Industrial Wastewater

Industrial wastewater presents a **toxic environment** for *E. coli* due to the presence of various heavy metals, including nickel. While nickel is our target metal, its increased uptake at higher concentrations can inhibit *E. coli* growth and even cause cell death[^8]. Other toxic metals in the environment can further threaten the survival of our engineered *E. coli*.

Additionally, bacteriophages - natural predators of bacteria — are abundant in wastewater[^9] and can infect and destroy *E. coli* before they can accumulate nickel, further complicating the bioremediation process[^10].


### 3. High Enzyme Concentrations Needed for Nickel Reduction

The reduction of nickel requires the enzyme Ni/Fe hydrogenase, which reversibly catalyzes hydrogen oxidation[^11]. For efficient nickel reduction, high cytosolic concentrations of hydrogenase, nickel, and hydrogen are all needed. However, achieving such concentrations within *E. coli* may interfere with its normal biological functions (expression [burden](/fudan/software/#burden-predictor)), complicating the production process.
 

### 4. Lack of a Stable Hydrogen Source in *E. coli*

To drive nickel reduction, a steady supply of hydrogen gas is essential, as hydrogenase catalyzes the reaction in both directions. However, *E. coli* lacks a stable, continuous source of hydrogen, which limits the efficiency of this process. 

Addressing these four challenges is crucial for our project’s success.


## Our Solutions

We present four interrelated modules to tackle the problems identified in the previous section: Nickel Enrichment, Survival, Nickel Microparticle, and Hydrogen Supply Module. These systems work together to enable efficient and low-impact nickel absorption, then processed into reusable nickel microparticles. 

 <div style="text-align: center;" id="fig5">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
    <div>
        <span style="color:gray">Figure 5: Four modules of MINERAL</span>
        <br><br>
    </div>
</div>

<br>

### 1. Nickel Enrichment Module

#### a) Nickel Transport Proteins

We introduce two sets of nickel transport proteins to maximize the influx of nickel ions.

- **NikABCDE**: This ATP-binding cassette transporter, native to *E. coli*, transports nickel ions from the periplasm into the cytoplasm[^12]. We utilize the Ribozyme-Assisted Polycistronic expression system (pRAP) from [2022](https://2022.igem.wiki/fudan/parts), to achieve a balanced expression and therefore proper assembly of this multi-subunit complex[^13]. Briefly about pRAP: by inserting [the Twister ribozyme sequences](https://parts.igem.org/Part:BBa_K4765020 ) before each coding sequnece (CDS), the RNA of Twister ribozyme conduct self-cleaving of the polycistronic mRNA[^23]. To protect the cleaved mono-cistronic mRNA from degradation, a stem-loop structure is placed at the 3' end of CDS [^13]. In 2023, we extensively tested various [stem-loops](https://2023.igem.wiki/fudan/part-collection/#ribozyme-assisted-polycistronic-co-expression) using [BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129). For parts we made this year, this strong protective stem-loop sequence was used. As for the ribosome binding sequence (RBS) after the ribozyme and before the CDS, we used [T7 RBS](https://parts.igem.org/Part:BBa_K4162006), from bacteriophage T7 gene 10[^25]. It is an intermediate strength RBS according to [our 2022 results](https://2022.igem.wiki/fudan/measurement#optimization), which allows us to change it to a weaker [J6 RBS](https://parts.igem.org/Part:BBa_J61100) or a stronger [B0 RBS](https://parts.igem.org/Part:BBa_B0030) if needed, enabling flexible protein expression levels between various ribozyme connected parts.
- **NixA**: A monomeric protein belonging to the nickel-cobalt transporter (NiCoT) family[^14]. To increase transport efficiency, dimerization can be accomplished with NixA-FKBP fusion proteins and linker compound[^15].


#### b) Prevent Nickel Efflux

To prevent nickel ions from being pumped out of the cell, we point-mutate RcnR at its Cys35 residue so that it remains in a repressing state despite rising concentrations of nickel. As the expression of RcnA is repressed, the efflux of nickel ion is lowered, thereby maintaining high cytosolic nickel concentrations.

<div style="text-align: center;" id="fig6">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
</div>

<br>

### 2. Survival Modules

#### a) Heavy Metal Tolerance

Inspired by *Helicobacter pylori*’s natural defense against high cytosolic nickel concentrations[^16], we choose to express two types of nickel binding proteins that can lower cytosolic heavy metal concentrations. This protects *E. coli* from the detrimental effects caused by nickel ions and other heavy metals possibly present in industrial wastewater. 

- **Hpn (*H. pylori* nickel-binding)**: A histidine-rich cytoplasmic protein found in *H. pylori* capable of storing Ni ions[^17]. 
- **Metallothioneins**: Cystine-rich cytoplasmic proteins that bind to various heavy metals. Compared to Hpn, they bind to a wider range of heavy metals. We use the metallothionein from *Pisum sativum* (MTA) as it shows a higher affinity for nickel[^18].

Although both proteins serve to increase bacteria tolerance to cytosolic nickel levels, their difference in amino acid composition help to reduce the overall burden on *E. coli*.


#### b) Phage resistance

The initial step of bacteriophage infection is its adsorption to host receptors, and bacteria has evolved various methods to defend against phages. Lipopolysaccharide (LPS) is a natural protective barrier, blocking phage adsorption[^19].

We overexpress YejM to upregulate the production of LPS, blocking recognition sites on the surface of bacteria, allowing the *E. coli* to possess higher resistance towards bacteriophages in the environment[^20].

<div style="text-align: center;" id="fig7">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
</div>

<br>

#### c) Anti-Freeze and Anti-UV

The [Anti-Freeze](https://2023.igem.wiki/fudan/results/#anti-freeze-module) and [Anti-UV](https://2023.igem.wiki/fudan/results/#_1-survival-system) modules developed in [2023](https://2023.igem.wiki/fudan/results/) are both useful to increase bacteria's ability to survive in the wastewater environment, which could be employed if needed.


### 3. Nickel Microparticle Module

Our microparticle is composed of hydrogenases, a carboxysome shell, and reduced nickel around the shell, with a diameter around 50-80 nm. When a bacteria is overexpressing our microparticle module, e.g. [BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067), its cytosol fills with carboxysome shell and reduced nickel, and a large microparticle formed, with a diameter over 500 nm.

Ni/Fe hydrogenase (produced from [BBa_K5115020](https://parts.igem.org/Part:BBa_K5115020) *hox* and *hyp* operon) is the key component to generate our nickel microparticle. The hydrogenase reduces nickel ions to its neutral state through a coupled reversible catalytic reaction. However, the reduced nickel itself still possess a certain degree of toxicity, which may still threaten the growth of our *E. coli* and, in case of accidental leakage, other aquatic organisms [^21].

We utilize **carboxysomes**, which are bacterial microcompartments[^22], to serve as a concentration hub for the processing of nickel ions. Carboxysomes concentrate enzymes, enhancing their local concentrations and improving catalytic efficiency, which may also isolate these enzymatic reactions from other cellular processes. We test our carboxysome targeting using [BBa_K5115057](https://parts.igem.org/Part:BBa_K5115057), and targeted either HoxF ([BBa_K5115058](https://parts.igem.org/Part:BBa_K5115058)) or HoxU ([BBa_K5115059](https://parts.igem.org/Part:BBa_K5115059)) to the carboxysome shell.

<div style="text-align: center;" id="fig8">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
</div>

<br>

### 4. Hydrogen Supply *via* cyanobacteria-*E. coli* interaction

Hydrogen gas is essential for powering our nickel microparticle production. To ensure a continuous supply of hydrogen, we adopt a [symbiotic module](https://2023.igem.wiki/fudan/results/#_2-symbiotic-system), developed in 2023. In this setup, cyanobacteria act as hydrogen donors, providing a stable source of hydrogen gas to support nickel microparticle generation.

When we test our microparticle U module ([BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066)) or F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067)), which contains all CDS for assembling carboxysome shell and targeted hydrogenase, we bubbled 5.6% H~2~ gas into the bacteria culture, rather using cyanobacteria coculture to ease the electron microscopy examination.

<div style="text-align: center;" id="fig9">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style="width:100%">
</div>

In summary, our integrated approach combines efficient nickel bioaccumulation, enhanced *E. coli* survival, specialized nickel microparticle and a stable hydrogen supply from symbiotic cyanobacteria. Together, MINERAL ensure sustainable nickel recovery from industrial wastewater while minimizing environmental impact. For more details on our project design, please visit our [Design](/fudan/design) page.

As our project name suggests, the the quest of our nickel microparticles does not end here. Please visit our [Implementation](/fudan/implementation/) page for our plans on future applications.


## References

[^1]:Wang, Z., Yeung, K. W. Y., Zhou, G.-J., Yung, M. M. N., Schlekat, C. E., Garman, E. R., Gissi, F., Stauber, J. L., Middleton, E. T., Lin Wang, Y. Y., & Leung, K. M. Y. (2020). Acute and chronic toxicity of nickel on freshwater and marine tropical aquatic organisms. *Ecotoxicology and Environmental Safety*, *206*, 111373. [https://doi.org/10.1016/j.ecoenv.2020.111373](https://doi.org/10.1016/j.ecoenv.2020.111373)
[^2]: Xu, C., Dai, Q., Gaines, L., Hu, M., Tukker, A., & Steubing, B. (2020). Future material demand for automotive lithium-based batteries. *Communications Materials*, *1*(1), Article 1. [https://doi.org/10.1038/s43246-020-00095-x](https://doi.org/10.1038/s43246-020-00095-x)
[^3]: Harper, G., Sommerville, R., Kendrick, E., Driscoll, L., Slater, P., Stolkin, R., Walton, A., Christensen, P., Heidrich, O., Lambert, S., Abbott, A., Ryder, K., Gaines, L., & Anderson, P. (2019). Recycling lithium-ion batteries from electric vehicles. *Nature*, *575*(7781), Article 7781. [https://doi.org/10.1038/s41586-019-1682-5](https://doi.org/10.1038/s41586-019-1682-5) ↩
[^4]:*Global Critical Minerals Outlook 2024 – Analysis*. (2024, May 17). IEA. https://www.iea.org/reports/global-critical-minerals-outlook-2024
[^5]: Navarro, C., Wu, L.-F., & Mandrand-Berthelot, M.-A. (1993). The nik operon of Escherichia coli encodes a periplasmic binding-protein-dependent transport system for nickel. *Molecular Microbiology*, *9*(6), 1181–1191. [https://doi.org/10.1111/j.1365-2958.1993.tb01247.x](https://doi.org/10.1111/j.1365-2958.1993.tb01247.x)
[^6]: Rodrigue, A., Effantin, G., & Mandrand-Berthelot, M.-A. (2005). Identification of rcnA (yohM), a Nickel and Cobalt Resistance Gene in Escherichia coli. *Journal of Bacteriology*, *187*(8), 2912–2916. [https://doi.org/10.1128/jb.187.8.2912-2916.2005](https://doi.org/10.1128/jb.187.8.2912-2916.2005)
[^7]: Higgins, K. A., Chivers, P. T., & Maroney, M. J. (2012). Role of the N-terminus in Determining Metal-Specific Responses in the E. coli Ni- and Co-Responsive Metalloregulator, RcnR. *Journal of the American Chemical Society*, *134*(16), 7081–7093. [https://doi.org/10.1021/ja300834b](https://doi.org/10.1021/ja300834b)
[^8]: Wu, L., Yu, J., Sun, X., & Li, B. (2009). The effect of nickel(II) ions on the growth and bioaccumulation properties of Escherichia coli. *Environmental Progress & Sustainable Energy*, *28*, 234–239. [https://doi.org/10.1002/ep.10325](https://doi.org/10.1002/ep.10325)
[^9]: Runa, V., Wenk, J., Bengtsson, S., Jones, B. V., & Lanham, A. B. (2021). Bacteriophages in Biological Wastewater Treatment Systems: Occurrence, Characterization, and Function. *Frontiers in Microbiology*, *12*. [https://doi.org/10.3389/fmicb.2021.730071](https://doi.org/10.3389/fmicb.2021.730071)
[^10]: Shapiro, O. H., Kushmaro, A., & Brenner, A. (2010). Bacteriophage predation regulates microbial abundance and diversity in a full-scale bioreactor treating industrial wastewater. *The ISME Journal*, *4*(3), 327–336. [https://doi.org/10.1038/ismej.2009.118](https://doi.org/10.1038/ismej.2009.118)
[^11]: Teramoto, H., Shimizu, T., Suda, M., & Inui, M. (2022). Hydrogen production based on the heterologous expression of NAD+-reducing NiFe-hydrogenase from *Cupriavidus necator* in different genetic backgrounds of *Escherichia coli* strains. *International Journal of Hydrogen Energy*, *47*(52), 22010–22021. [https://doi.org/10.1016/j.ijhydene.2022.05.018](https://doi.org/10.1016/j.ijhydene.2022.05.018)
[^12]: Dosanjh, N. S., & Michel, S. L. (2006). Microbial nickel metalloregulation: NikRs for nickel ions. *Current Opinion in Chemical Biology*, *10*(2), 123–130. [https://doi.org/10.1016/j.cbpa.2006.02.011](https://doi.org/10.1016/j.cbpa.2006.02.011)
[^13]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143. [https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^14]: Hernandez, J. A., Micus, P. S., Sunga, S. A. L., Mazzei, L., Ciurli, S., & Meloni, G. (2024). Metal selectivity and translocation mechanism characterization in proteoliposomes of the transmembrane NiCoT transporter NixA from Helicobacter pylori. *Chemical Science*, *15*(2), 651–665. [https://doi.org/10.1039/D3SC05135H](https://doi.org/10.1039/D3SC05135H)
[^15]: Clackson, T., Yang, W., Rozamus, L. W., Hatada, M., Amara, J. F., Rollins, C. T., Stevenson, L. F., Magari, S. R., Wood, S. A., Courage, N. L., Lu, X., Cerasoli, F., Gilman, M., & Holt, D. A. (1998). Redesigning an FKBP–ligand interface to generate chemical dimerizers with novel specificity. *Proceedings of the National Academy of Sciences*, *95*(18), 10437–10442. [https://doi.org/10.1073/pnas.95.18.10437](https://doi.org/10.1073/pnas.95.18.10437)
[^16]: Benoit, S. L., Miller, E. F., & Maier, R. J. (2013). Helicobacter pylori Stores Nickel To Aid Its Host Colonization. *Infection and Immunity*, *81*(2), 580. [https://doi.org/10.1128/IAI.00858-12](https://doi.org/10.1128/IAI.00858-12)
[^17]: Ge, R., Watt, R. M., Sun, X., Tanner, J. A., He, Q.-Y., Huang, J.-D., & Sun, H. (2006). Expression and characterization of a histidine-rich protein, Hpn: Potential for Ni2+ storage in Helicobacter pylori. *Biochemical Journal*, *393*(Pt 1), 285–293. [https://doi.org/10.1042/BJ20051160](https://doi.org/10.1042/BJ20051160)
[^18]: Diep, P., Mahadevan, R., & Yakunin, A. F. (2018). Heavy Metal Removal by Bioaccumulation Using Genetically Engineered Microorganisms. *Frontiers in Bioengineering and Biotechnology*, *6*, 157. [https://doi.org/10.3389/fbioe.2018.00157](https://doi.org/10.3389/fbioe.2018.00157)
[^19]: Labrie, S. J., Samson, J. E., & Moineau, S. (2010). Bacteriophage resistance mechanisms. *Nature Reviews Microbiology*, *8*(5), 317–327. [https://doi.org/10.1038/nrmicro2315](https://doi.org/10.1038/nrmicro2315)
[^20]: Shu, S., & Mi, W. (2022). Regulatory mechanisms of lipopolysaccharide synthesis in Escherichia coli. *Nature Communications*, *13*(1), 4576. [https://doi.org/10.1038/s41467-022-32277-1](https://doi.org/10.1038/s41467-022-32277-1)
[^21]: Miao, C., Jia, P., Luo, C., Pang, J., Xiao, L., Zhang, T., Duan, J., Li, Y., & Sun, Z. (2024). The size-dependent in vivo toxicity of amorphous silica nanoparticles: A systematic review. *Ecotoxicology and Environmental Safety*, *271*, 115910. [https://doi.org/10.1016/j.ecoenv.2023.115910](https://doi.org/10.1016/j.ecoenv.2023.115910)
[^22]: Li, T., Jiang, Q., Huang, J., Aitchison, C. M., Huang, F., Yang, M., Dykes, G. F., He, H.-L., Wang, Q., Sprick, R. S., Cooper, A. I., & Liu, L.-N. (2020). Reprogramming bacterial protein organelles as a nanoreactor for hydrogen production. *Nature Communications*, *11*(1), 5448. [https://doi.org/10.1038/s41467-020-19280-0](https://doi.org/10.1038/s41467-020-19280-0)
[^23]: Eiler, D., Wang, J., & Steitz, T. A. (2014). Structural basis for the fast self-cleavage reaction catalyzed by the twister ribozyme. *Proceedings of the National Academy of Sciences*, *111*(36), 13028–13033. [https://doi.org/10.1073/pnas.1414571111](https://doi.org/10.1073/pnas.1414571111)
[^25]: Olins, P. O., Devine, C. S., Rangwala, S. H., Kavka, K. S. (1988) The T7 phage gene 10 leader RNA, a ribosome-binding site that dramatically enhances the expression of foreign genes in *Escherichia coli*. *Gene*, *73*(1), 227-35. [https://doi.org/10.1016/0378-1119(88)90329-0](https://doi.org/10.1016/0378-1119(88)90329-0)
