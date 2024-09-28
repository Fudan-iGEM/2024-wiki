---
title: Description
author:
  name: Kevin Qi
  url: /fudan/team/#kevin-qi
headergif: https://static.igem.wiki/teams/5115/header/description-header.gif
---


## Another Lesson?

Humans often realize their mistakes only when the damage is irreparable, a lesson echoed throughout history. Our relentless overexploitation of natural resources has left scars on the environment, and the cycle of neglect persists. While metals like copper and aluminum are now commonly recycled, others, such as nickel, still lag far behind, following the very paths we've seen before.

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 1: Overexploitation of natural resources</span>
        <br><br>
    </div>
</div>




## Use and Misuse of Nickel

Nickel is an essential metal element that plays a crucial role in modern industries, particularly in the production of electric vehicle batteries and stainless steel, which are foundational to sectors like transportation and construction. In many ways, nickel powers and supports the modern society as we know it. 

However, nickel mining and extraction come at a significant **environmental cost**. The process of extracting nickel from ores typically involves large-scale mining operations, which release toxic by-products, including nickel-laden wastewater. This wastewater, when discharged into rivers, lakes, or oceans, can be **highly toxic** to aquatic ecosystems, disrupting biodiversity and threatening aquatic life[^1]. Yet, because global nickel reserves are currently perceived as abundant, there has been little urgency to prioritize recycling, despite its importance for sustainability and environmental protection.

While nickel reserves may seem sufficient today, this apparent abundance has created a **dangerous complacency**. Recycling remains overlooked, accelerating **resource depletion** and intensifying **environmental degradation**. Mining operations continue to devastate ecosystems, causing deforestation, soil erosion, and habitat loss, all while industrial emissions contribute further harm.

Meanwhile, the demand for nickel is growing at an **unsustainable rate**, outpacing production[^2]. This growing imbalance between supply and demand will eventually lead to resource shortages, though this is often ignored due to the immediate availability of nickel. As a result, the need for recycling nickel remains underestimated, despite its critical importance for future generations.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 2: Nickel in our modern world</span>
        <br><br>
    </div>
</div>




## Current Nickel Recycling

Nickel can be sourced from either mining or recycling. Today, nickel recycling mainly involves recovering it from end-of-life products, such as stainless steel and batteries. Conventional recycling methods typically rely on melting, refining, and purifying scrap metal. While these processes help recover some nickel, they are **energy-intensive**, costly, and **waste generating**[^3]. 

Despite the environmental damage caused by mining, it remains the more cost-effective option compared to recycling. As a result, there is little economic incentive to prioritize recycling. Currently, only **1%** of the global nickel supply comes from recycling [^4].

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/description/description-fig3.png" style='width:50%'>
    <div>
        <span style="color:gray">Figure 3: Current nickel recycling methods</span>
        <br><br>
    </div>
</div>







Unlike traditional recycling methods, biological approaches offer a more **energy-efficient**, **environmentally friendly**, and **element-specific** way for nickel recovery.





## Project Overview

Facing with the pressing issues of heavy metal pollution and resource depletion, our projects have focused on using synthetic biology to tackle nickel emissions and recycling.

We have developed a symbiotic system involving *E. coli* and cyanobacteria to **recover nickel** from industrial wastewater, transforming it into **harmless microparticles.** Our project, **Microparticle Integration for Nickel Extraction and Reusable Applications (MINERAL)**, not only addresses current nickel pollution but also aims to meet the increasing demand for sustainable nickel recovery in the near future.

<div style="text-align: center;" id="fig4">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 4: Overview of MINERAL</span>
        <br><br>
    </div>
</div>

## Our Problem

Before we can move forward with our project design, several key challenges must be addressed:

### 1. Nickel Levels are Regulated in *E. coli*

The natural nickel transport and regulation mechanisms in *Escherichia coli* limit its ability to take up large amounts of nickel. NikABCDE, the primary active nickel transporter in *E. coli*, facilitates most of the nickel ion influx[^5], while RcnA works in reverse, actively pumping excess nickel out of the cell[^6]. This balance makes *E. coli* inherently inefficient for bioaccumulating the necessary levels of nickel for our purposes. To overcome this limitation, we must use synthetic biology to engineer *E. coli* to enhance its nickel uptake capacity.

 

### 2. Multiple Threats to *E. coli* in Industrial Wastewater

Industrial wastewater presents a **toxic environment** for *E. coli* due to the presence of various heavy metals, including nickel. While nickel is our target metal, its increased uptake at higher concentrations can inhibit *E. coli* growth and even cause cell death [^7]. Other toxic metals in the environment can further threaten the survival of our engineered *E. coli*.

Additionally, bacteriophages—natural predators of bacteria—are common in wastewater[^8] and can infect and destroy *E. coli* before they can accumulate nickel, further complicating the bioremediation process[^9].

 

### 3. High Substrate and Enzyme Concentrations Needed for Microparticle Generation

The generation of nickel microparticles requires the enzyme Ni/Fe hydrogenase, which reversibly catalyzes hydrogen oxidation[^10]. For efficient microparticle formation, high cytosolic concentrations of hydrogenase, nickel, and hydrogen are necessary. However, achieving such concentrations within *E. coli* may interfere with its normal biological functions, complicating the production process.

 

### 4. Lack of a Stable Hydrogen Source in *E. coli*

To drive nickel microparticle formation, a steady supply of hydrogen gas is essential, as hydrogenase catalyzes the reaction in both directions. However, *E. coli* lacks a stable, continuous source of hydrogen, which limits the efficiency of this process. Addressing this challenge is crucial for our project’s success.



## Our Solution

We present four interrelated systems to target the problems identified in the previous section: **Nickel Uptake**, **Survival**, **Nickel Micro-factory**, and **Hydrogen Supply System**. These systems work together to enable efficient and low-impact nickel absorption, which is then processed into reusable nickel microparticles. 

 <div style="text-align: center;" id="fig5">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 5: Four systems of MINERAL</span>
        <br><br>
    </div>
</div>




### 1. Nickel Uptake System

**a)**    **Nickel Transport Proteins**

We introduce two sets of  nickel transport proteins to maximize the influx of nickel ions.

- **NikABCDE**: This ATP-binding cassette transporter,native to E. coli, transports nickel ions from the periplasm into the cytoplasm[^11]. We utilize the Ribozyme-Assisted Polycistronic expression system (pRAP) system to achieve a balanced expression and therefore proper assembly of this multi-subunit complex[^12].


- **NixA**: A monomeric protein belonging to the nickel-cobalt transporter (NiCoT) family[^13]. Dimerization of NixA can be facilitated by FKBP and zippers, which help to improve transport efficiency[^14].



**b)**    **Knockout of Nickel Efflux Proteins**

To prevent nickel ions from being pumped out of the cell, we knock out the **RcnA** protein, the primary nickel efflux transporter in *E. coli*, thereby maintaining high cytosolic nickel concentrations.

<div style="text-align: center;" id="fig6">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 6: Nickel uptake system</span>
        <br><br>
    </div>
</div>




### 2. Survival System

**a) Heavy Metal Tolerance**

Inspired by *Helicobacter pylori*’s natural defense against high cytosolic nickel concentrations[^15], we choose to express two types of nickel binding proteins that can **lower cytosolic heavy metal concentrations**. This protects *E. coli* from the detrimental effects caused by nickel ions and other heavy metals possibly present in industrial wastewater. 

- **Hpn (*H. pylori* nickel-binding)**: A histidine-rich cytoplasmic protein found in *H. pylori* capable of storing Ni ions[^16]. 
- **Metallothioneins**: Cystine-rich cytoplasmic proteins that bind to various heavy metals. Compared to Hpn, they bind to a wider range of heavy metals. We use the metallothionein from *Pisum sativum* (MTA) as it shows a higher affinity for nickel[^17].

Although both proteins serve to lower cytosolic nickel levels, their difference in amino acid composition help to reduce the overall burden on *E. coli.*



**b) Phage resistance**

The initial step of bacteriophage infection is its adsorption to host receptors, and bacteria has evolved various methods to defend against phages. Lipopolysaccharide (LPS) is a natural protective barrier, blocking phage adsorption[^18].

We overexpress YejM to upregulate the production of LPS, allowing the *E. coli* to possess higher resistance towards bacteriophages in the environment[^19].

<div style="text-align: center;" id="fig7">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 7: Survival system</span>
        <br><br>
    </div>
</div>




### 3. Nickel Micro-factory System

Ni/Fe hydrogenase is the key enzyme that transitions bioaccumulated nickel ions into nickel microparticles through a reversible catalytic reaction. 

We utilize **carboxysomes**, bacterial microcompartments (BMCs)[^20], to serve as a controlled environment for the generation of nickel microparticles. Carboxysomes allow for:

- **Compartmentalization**: This isolates enzymes and substrates, enhancing their local concentrations and improving catalytic efficiency.
- **Protection**: By isolating these reactions from the cytosol, we protect *E. coli* from high nickel concentrations and ensure the enzymatic activity of hydrogenase is     unaffected by other cellular processes.

<div style="text-align: center;" id="fig8">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 8: Nickel micro-factory system</span>
        <br><br>
    </div>
</div>




### 4. Hydrogen Supply System

Hydrogen gas is essential for powering our nickel microparticle production. To ensure a continuous supply of hydrogen, we adopt a [symbiotic system](https://2023.igem.wiki/fudan/results/#_2-symbiotic-system)), following the strategy used by iGEM Fudan 2023. In this setup, cyanobacteria act as hydrogen donors, providing a stable source of hydrogen gas to support nickel microparticle generation.

<div style="text-align: center;" id="fig9">
    <img src="https://static.igem.wiki/teams/5115/test/yagi.jpg" style='width:50%'>
    <div>
        <span style="color:gray">Figure 9: Hydrogen Supply System</span>
        <br><br>
    </div>
</div>



## Summary of Systems

In summary, our integrated approach combines efficient nickel bioaccumulation, enhanced *E. coli* survival, a specialized nickel micro-factory, and a stable hydrogen supply system. Together, these innovations ensure sustainable nickel recovery from industrial wastewater while minimizing environmental impact.

For more details on our project design, please visit our [Design][/fudan/design/] page.



## Prospect

In addition to nickel, other divalent metals—such as copper, zinc, and cobalt—can become future targets. With MINERAL’s highly modular design, adapting the system for new metals simply involves substituting the relevant transport and binding proteins in the bioaccumulation system, making it a versatile platform for metal recovery.

Moreover, the concept of bioaccumulating heavy metals and forming reserves could be applied in more visionary contexts, such as terraforming Mars. In a future scenario, engineered microorganisms like those in MINERAL could help sequester toxic metals or produce essential materials, aiding in the creation of a habitable environment on other planets.

## References

[^1]:Wang, Z., Yeung, K. W. Y., Zhou, G.-J., Yung, M. M. N., Schlekat, C. E., Garman, E. R., Gissi, F., Stauber, J. L., Middleton, E. T., Lin Wang, Y. Y., & Leung, K. M. Y. (2020). Acute and chronic toxicity of nickel on freshwater and marine tropical aquatic organisms. [*Ecotoxicology and Environmental Safety*, *206*, 111373.](https://doi.org/10.1016/j.ecoenv.2020.111373)
[^2]: Xu, C., Dai, Q., Gaines, L., Hu, M., Tukker, A., & Steubing, B. (2020). Future material demand for automotive lithium-based batteries. [*Communications Materials*, *1*(1), Article 1.](https://doi.org/10.1038/s43246-020-00095-x)
[^3]: Harper, G., Sommerville, R., Kendrick, E., Driscoll, L., Slater, P., Stolkin, R., Walton, A., Christensen, P., Heidrich, O., Lambert, S., Abbott, A., Ryder, K., Gaines, L., & Anderson, P. (2019). Recycling lithium-ion batteries from electric vehicles. [*Nature*, *575*(7781), Article 7781.](https://doi.org/10.1038/s41586-019-1682-5) ↩
[^4]:*Global Critical Minerals Outlook 2024 – Analysis*. (2024, May 17). IEA. [https://www.iea.org/reports/global-critical-minerals-outlook-2024](https://www.iea.org/reports/global-critical-minerals-outlook-2024)
[^5]: Navarro, C., Wu, L.-F., & Mandrand-Berthelot, M.-A. (1993). The nik operon of Escherichia coli encodes a periplasmic binding-protein-dependent transport system for nickel. [*Molecular Microbiology*, *9*(6), 1181–1191.](https://doi.org/10.1111/j.1365-2958.1993.tb01247.x)
[^6]: Rodrigue, A., Effantin, G., & Mandrand-Berthelot, M.-A. (2005). Identification of rcnA (yohM), a Nickel and Cobalt Resistance Gene in Escherichia coli. [*Journal of Bacteriology*, *187*(8), 2912–2916.](https://doi.org/10.1128/jb.187.8.2912-2916.2005)
[^7]: Wu, L., Yu, J., Sun, X., & Li, B. (2009). The effect of nickel(II) ions on the growth and bioaccumulation properties of Escherichia coli. [*Environmental Progress & Sustainable Energy*, *28*, 234–239.](https://doi.org/10.1002/ep.10325)
[^8]: Runa, V., Wenk, J., Bengtsson, S., Jones, B. V., & Lanham, A. B. (2021). Bacteriophages in Biological Wastewater Treatment Systems: Occurrence, Characterization, and Function. [*Frontiers in Microbiology*, *12*.](https://doi.org/10.3389/fmicb.2021.730071)
[^9]: Shapiro, O. H., Kushmaro, A., & Brenner, A. (2010). Bacteriophage predation regulates microbial abundance and diversity in a full-scale bioreactor treating industrial wastewater. [*The ISME Journal*, *4*(3), 327–336.](https://doi.org/10.1038/ismej.2009.118)
[^10]: Teramoto, H., Shimizu, T., Suda, M., & Inui, M. (2022). Hydrogen production based on the heterologous expression of NAD+-reducing NiFe-hydrogenase from *Cupriavidus necator* in different genetic backgrounds of *Escherichia coli* strains. [*International Journal of Hydrogen Energy*, *47*(52), 22010–22021.](https://doi.org/10.1016/j.ijhydene.2022.05.018)
[^11]: Dosanjh, N. S., & Michel, S. L. (2006). Microbial nickel metalloregulation: NikRs for nickel ions. [*Current Opinion in Chemical Biology*, *10*(2), 123–130.](https://doi.org/10.1016/j.cbpa.2006.02.011)
[^12]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. [*ACS Synthetic Biology*, *12*(1), 136–143.](https://doi.org/10.1021/acssynbio.2c00416)
[^13]: Hernandez, J. A., Micus, P. S., Sunga, S. A. L., Mazzei, L., Ciurli, S., & Meloni, G. (2024). Metal selectivity and translocation mechanism characterization in proteoliposomes of the transmembrane NiCoT transporter NixA from Helicobacter pylori. [*Chemical Science*, *15*(2), 651–665.](https://doi.org/10.1039/D3SC05135H)
[^14]: 缺文献
[^15]: Benoit, S. L., Miller, E. F., & Maier, R. J. (2013). Helicobacter pylori Stores Nickel To Aid Its Host Colonization. [*Infection and Immunity*, *81*(2), 580.](https://doi.org/10.1128/IAI.00858-12)
[^16]: Ge, R., Watt, R. M., Sun, X., Tanner, J. A., He, Q.-Y., Huang, J.-D., & Sun, H. (2006). Expression and characterization of a histidine-rich protein, Hpn: Potential for Ni2+ storage in Helicobacter pylori. [*Biochemical Journal*, *393*(Pt 1), 285–293.](https://doi.org/10.1042/BJ20051160)
[^17]: Diep, P., Mahadevan, R., & Yakunin, A. F. (2018). Heavy Metal Removal by Bioaccumulation Using Genetically Engineered Microorganisms. [*Frontiers in Bioengineering and Biotechnology*, *6*, 157.](https://doi.org/10.3389/fbioe.2018.00157)
[^18]: Labrie, S. J., Samson, J. E., & Moineau, S. (2010). Bacteriophage resistance mechanisms. [*Nature Reviews Microbiology*, *8*(5), 317–327.](https://doi.org/10.1038/nrmicro2315)
[^19]: Shu, S., & Mi, W. (2022). Regulatory mechanisms of lipopolysaccharide synthesis in *Escherichia coli*. [*Nature Communications*, *13*(1), 4576.](https://doi.org/10.1038/s41467-022-32277-1)
[^20]: Li, T., Jiang, Q., Huang, J., Aitchison, C. M., Huang, F., Yang, M., Dykes, G. F., He, H.-L., Wang, Q., Sprick, R. S., Cooper, A. I., & Liu, L.-N. (2020). Reprogramming bacterial protein organelles as a nanoreactor for hydrogen production. [*Nature Communications*, *11*(1), 5448.](https://doi.org/10.1038/s41467-020-19280-0)

