---
title: Design
author:
  name: Kevin Qi
  url: /fudan/team/#kevin-qi
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

## Inspiration

**What if our next home isn't on Earth?**

In [Arthur C. Clarke](https://en.wikipedia.org/wiki/Arthur_C._Clarke)'s visionary novel *The Songs of the Distant Earth*, he paints a future where humanity seeks refuge on a distant planet called Salazar to escape the Sun's impending supernova explosion.

In our current era, as Earth grapples with escalating ecological and demographic crises, the notion of **planetary colonization** rises not merely as the stuff of science fiction but also as a pressing, real-world imperative.

<div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/description/1.jpg" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 1: Planetary colonization</small></p>
    </div>
</div>

**Mars: A New Hope**

Among the array of celestial bodies in our cosmic neighborhood, Mars shines as the most promising candidate for human colonization. Its **Earth-like attributes** — a gravity merely one-third of Earth's, water deposits in the soil in the form of ice and hydrated minerals, and a relatively stable atmosphere mainly comprised of 96% carbon dioxide and 2% nitrogen[^1]—offer the foundational elements to sustain life. NASA's Curiosity rover has confirmed the Martian environment is replete with life-essential chemicals like carbon, nitrogen, and phosphates, each in a form conducive to biological reactions[^2].

 <div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/earth-like-attributes-of-mars.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 2: Earth-like attributes of Mars </small></p>
    </div>
</div>

**The Terraforming Imperative**

However, before Mars can welcome Earth's denizens, it must first undergo a profound transformation through the process of **terraforming** — essentially, reshaping a planet's surface to mimic Earth's hospitable conditions.

Unlike our home planet with fertile lands, the Martian surface is predominantly a barren landscape covered in basalt, dotted with silicate and sulfate rock[^3]. A sustainable ecosystem, then, must begin with the transformation of **Martian soil.**

 <div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/3.jpg" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 3: Barren landscape on the Martian surface</small></p>
    </div>
</div>

**Drawing Inspiration from Lichens**

Taking a leaf out of Earth's ecological playbook, we recognize that pioneer organisms—**lichens**—play a vital role in shaping the environment[^4]. Lichens, composed of symbiotic fungi and either chlorophyta or cyanobacteria, boast numerous features crucial for ecological succession:

1. **Physical Structure:** Millennia of evolutionary fine-tuning has endowed lichens with a certain physical structure to adapt to harsh conditions.

2. **Symbiotic Relationship:** Within lichens, photosynthetic green algae perform carbon fixation and nitrogen assimilation, while fungi excel in water and minerals absorption.

3. **Accelerate Soil Formation:** Lichens thrive on nearly inhospitable substrates, secreting organic acids and mucopolysaccharides that accelerate rock weathering and soil formation, thereby paving the way for future flora and fauna.

   <div style="text-align: center;" >
       <img src="https://static.igem.wiki/teams/4765/wiki/description/4biofilm.png" style='width:80%'>
       <br>
       <div>
       	<p><small style="color: gray">Figure 4: The structure and function of lichens. Within a certain physical structure, fungi absorb water and minerals, while photosynthetic green algae provide energy. The organic acids and polysaccharides secreted by lichens would accelerate rock weathering and soil formation.</small></p>
       </div>
   </div>

**Innovation**

Nevertheless, directly transplanting lichens to Mars is a complex endeavor, due to the stark differences in crust composition and atmospheric conditions between two planets. **This is where our iGEM project steps in.** Inspired by Earth's ecological architects, we aim to apply synthetic biology techniques to engineer a biofilm that could serve as a pioneer organism on Mars.

By applying the principles behind lichens' environmental engineering, we hope to lead the way in terraforming terrestrial planets, heralding not just a new chapter in ecological science but potentially, the future of humanity itself.



## B.HOME Project Overview

In an audacious effort to extend humanity's reach beyond our blue planet, our team has conceptualized a groundbreaking  approach to terraforming inspired by lichens' natural abilities. We have developed an ecological biofilm that mimics a symbiotic relationship between cyanobacteria and *Escherichia coli* (*E. coli*), and genetically equipped it to endure harsh Martian conditions. Our project, **Biofilm Harnessing for Offworld Mankind Establishment** (**B.HOME**), aspires to transmute Martian rocks into fertile soil, marking a bold stride toward a viable human habitat on terrestrial planets.

<div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/description/5.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 5: Our initiative <strong>B.HOME</strong> suggests a “plan B” for establishing human habitat and settlement beyond Earth's borders.</small></p>
    </div>
</div>



## Decoding the Problem

Before proceeding with our experimental design, we must carefully consider several potential hurdles:

### 1. Extreme Tolerance Abilities

Mars' hostile conditions require our biofilm to withstand intense UV radiation, drastically low temperatures, and desiccation.

<div style="text-align: center;">
    <p><small style="color: gray">Table 1: Comparative Environmental Factors on Earth and Mars</small></p>
</div> 

|                                          |         | **Earth**     | **Mars**                                     |
| ---------------------------------------- | ------- |:-------------:|:--------------------------------------------:|
| Intensity of UV Radiation(kJ/m^2^)[^5]   | UVC&nbsp;&&nbsp;B | 39            | 361                                |
|                                          | UVA     | 1126          | 1320                                         |
| Average Surface Temperature (Kelvin)[^6] |         | 288           | 213                                          |
| Water Reservoir (km³)[^7]                |         | 1.386 × 10^8^ | 5 × 10^6^ (virtually no surface liquid water) |

### 2. Nutrient Supply Channels

The lifeless Martian surface necessitates reliance on solar energy and atmospheric elements for self-sustenance. Our project centers around a symbiotic system where cyanobacteria provide essential nutrition through photosynthesis. We must tackle the inefficient secretion and utilization of organic nutrients (primarily sucrose) by cyanobacteria and *E. coli*, respectively.

### 3. Biofilm Formation

Biofilm demonstrates remarkable resilience against environmental stressors, emphasizing the importance of a well-structured biofilm matrix. Thus, establishing equilibrium in the spatial arrangement becomes critical to enhancing nutrient exchange.

### 4. Harnessing Dust Agglomeration & Rock Erosion

As the solar energy heats the Martian atmosphere, driving global airflow cycles and violent dust storms[^8], our biofilm has to exhibit exceptional adhesion and the capacity to aggregate the omnipresent Martian dust. Furthermore, the Martian regolith primarily comprises silicate and sulfate rock. The function of our biofilm hinges on its ability to secrete chemical weathering agents, which dissolve these rock components.

<div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/jzk/description-figure6.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 6: Multiple obstacles in our project design</small></p>
    </div>
</div>



## **Our Solution**

To address the challenges mentioned above, B.HOME presents a promising strategy involving four interdependent systems: **Survival, Symbiotic, Biofilm Formation,** and **Terraforming Systems**. Through these systems, we have constructed an ecological biofilm with extreme tolerance, autotrophic survival, physical structure, and rock weathering function.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/jzk/description-figure7.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 7: Four systems of B. HOME</small></p>
    </div>
</div>

### 1. Survival System

In the Survival System, we introduced the **Anti-UV Module**, **Anti-Freeze Module,** and **Anti-Desiccation Module** to arm our biofilm with the necessary adaptability against inhospitable conditions.

#### A) Anti-UV Module

We tested multiple proteins in *E. coli* to enhance its resistance to UV radiation, mitigating biomolecule damage induced by radiation.

1. **Upregulate DNA Repair or Binding:** Tardigrades are renowned for their radio tolerance. They upregulate DNA repair or binding proteins (Rv Dsup[^9][^10], [*Hypsibius exemplaris* mtSSB](https://parts.igem.org/Part:BBa_K4765016)) as protective measures to maintain DNA integrity. We also introduced DNA repair-related proteins [FEN1](https://parts.igem.org/Part:BBa_K4765018) and [XRCC1](https://parts.igem.org/Part:BBa_K4765019). The anti-UV capability of these proteins was tested in [Results](/results/).

2.   **Transfer UV Absorption:** Informed by insights from [LINKS iGEM 2022](https://2022.igem.wiki/links-china/description)[^11], we enriched *E.coli* with UV-absorbing[^12] substance, Mycosporine-like amino acids (MAAs), acting as a sunscreen for the biofilm.

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/anti-uv-module.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 8: The Anti-UV Module prevents biomolecule damage induced by radiation</small></p>
    </div>
</div>

#### B) Anti-Freeze Module

An anti-freeze protein [AnAFP](https://parts.igem.org/Part:BBa_K4765015), derived from *Ammopiptanthus nanus*, was introduced to *E. coli* to facilitate survival in sub-zero temperature. AnAFP features the ice crystal binding domain A, which adheres to ice surfaces and impedes the growth of ice crystals, enabling *E. coli* to survive in sub-zero temperature[^13].

<div style="text-align: center;">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/9anti-freeze-module.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 9: The Anti-Freeze Module enables <em>E. coli</em> to survive in sub-zero temperature</small></p>
    </div>
</div>

#### C) Anti-Desiccation Module

Taking inspiration from the remarkable resilience of tardigrades in extremely dry environments, we engineered *E. coli* to withstand desiccation by expressing two key proteins, [SAHS](https://parts.igem.org/Part:BBa_K2306003)[^14] [^15] (also known as Tardigrade Dessication Proteins, TDPs) and [mtSSB](https://parts.igem.org/Part:BBa_K4765016)[^16].

TDPs were identified for their role in tardigrade desiccation tolerance. TDPs undergo a transition into non-crystalline amorphous solids during desiccation, mirroring their protective attributes.

*H. ex* mtSSB binds single-stranded DNA to buffer against DNA damage under harsh conditions like desiccation[^16], heat and radiation.

 <div style="text-align: center;" id="fig-1">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/desiccation-module-new.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 10: The Anti-Desiccation Module equips <em>E. coli</em> with resistance to desiccation</small></p>
    </div>
</div>




### 2. Symbiotic System

We have established a symbiotic system in which cyanobacteria serve as carbon-fixing power cells, while genetically-equipped *E. coli* take on the roles of consumer and functional executor. Inspired by [ShanghaiTech iGEM 2022](https://2022.igem.wiki/shanghaitech-china/)[^17], we integrated the *CscB* gene into cyanobacteria to express the sucrose channel for **enhanced secretion**. Alongside this, we equipped *E. coli* with *SacC* gene to improve its sucrose **absorption and utilization**.

  <div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/description/11symbiotic-system.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 11: Co-culture of Cyanobacteria and  <em>E. coli</em>. Cyanobacteria serve as producers while <em>E.coli</em> serve as consumers and function executors.</small></p>
    </div>
</div>



### 3. Biofilm Formation System

Our biofilm formation system represents an innovative approach aimed at establishing a robust physical connection between cyanobacteria and *E. coli*, creating a stable symbiotic platform, and bolstering resilience against environmental stressors (see more in [Human Practice](/human-practices/#prof-changming-fang-how-to-build-a-good-symbiotic-system))[^18].  To achieve this, we introduced outer **membrane-anchored nanobody–antigen pairs**[^19][^20][^21] into *E. coli*, promoting spontaneous adhesion and enabling the creation of programmable assembly patterns within the living biofilm. Furthermore, our strategy involves incorporating autotrophic cyanobacteria within *E. coli* to optimize nutrition allocation. To facilitate this, we introduced a specific lectin, [LCA](https://parts.igem.org/Part:BBa_K4765009), onto the surface of *E. coli* to **mediate adhesion between the two strains**.

<div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/description/bacteria-lawn-new.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 12: The Biofilm Formation System. The surface displayed LCA mediates adhesion between <em>E. coli</em> and cyanobacteria. The nanobody-antigen pairs are introduced to construct a living bacteria lawn. </small></p>
    </div>
</div>




### 4. Terraforming System

Our Terraforming System equips our biofilm with **surface adhesion** and **rock weathering** abilities through the incorporation of **EPS Module** and **Oxalic Acid Module**.

#### A) EPS Module

Exopolysaccharide (EPS) is a key agent in soil stability, fertility, and defense against abiotic stressors. We integrated EPS to grant our biofilm robust adhesion to the Martian surface and survival capabilities by exerting the following functions[^22][^23]:

1. Enhancing **surface adhesion** through interactions among functional groups.
2. Foster **aggregation and stabilization** of dust particles on the Martian surface, contributing to improved soil stability and fertility.
3. **Defense** against abiotic stressors, such as drought, freezing temperature and UV, granting the ecological biofilm greater survival capabilities.

In this module, we refined the [XJTU iGEM 2020](https://2020.igem.org/Team:XJTU-China) strategy[^24], and optimized the expression of key enzymes, [*pgmA* and *galU*](https://parts.igem.org/Part:BBa_K4765121), in the EPS biosynthesis pathway to increase production. Ultimately, this enhancement contributed to an improved ability to adhere to the Martian surface.

<div style="text-align: center;" >
    <img src="https://static.igem.wiki/teams/4765/wiki/description/13eps-module.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 13: The EPS Module enhances surface adhesion capability to defend against violent storms </small></p>
    </div>
</div>


#### B) Oxalic Acid Module

Mimicking natural weathering, we selected oxalic acid to expedite mineral hydrolysis, adopting the [CAU iGEM 2022](https://2022.igem.wiki/cau-china/) approach[^25].

In terrestrial ecosystems, oxalic acid, secreted by pioneer plants like lichens, is believed to play a crucial role in the geochemical weathering process[^26]. This acid forms cation-organic complexes with mineral cations, inducing a transfer of electron density towards the mineral framework, thereby expediting mineral hydrolysis[^27].

<div style="text-align: center;" id="fig-1">
    <img src="https://static.igem.wiki/teams/4765/wiki/description/oxalic-acid-module.png" style='width:80%'>
    <br>
    <div>
    	<p><small style="color: gray">Figure 14: Gene circuit of the Oxalic Acid Module to produce </small></p>
    </div>
</div>



## **Summary of Modules**

- Our biofilm, meticulously designed through modular construction, showcases remarkable **extreme tolerance**, including resistance to UV radiation, freezing temperatures, and desiccation.
- It has achieved **autotrophic survival**, providing a foundation for sustainable ecosystems.
- Moreover, our biofilm establishes **a robust physical framework** that promotes material exchange and facilitates two-dimensional expansion, vital for terraforming efforts.
- Additionally, our biofilm has the capability to synthesize oxalic acid, which expedites the geological weathering of rocks, a key component of terraforming. It firmly adheres to the Martian terrain through EPS, enhancing its stability and functionality.

To introduce heterologous genes into *E. coli*, we strategically implemented a self-cleaving ribozyme (see more in [Software](/software/)), which proved highly effective in minimal cargo DNA insertion into chassis. This is pivotal in achieving all functionalities mentioned above. This venture brings us one step closer to realizing our grand vision: the creation of a second home for humanity on terrestrial planets, expanding our horizons beyond Earth's borders.



## Follow-up Tasks

### Challenges & Proposed Resolutions

1. **Water Source**: Our biofilm requires basic water for growth, and the prevalent ice on Mars could provide this. However, it would need to be melted and sprayed on our biofilm ― this calls for integrated heating and hydration devices.
2. **Reactive Compound Risk**: The intense UV and X-ray radiation on Mars turns ions into highly reactive compounds, including toxic perchlorate salts. An approach that reduces percholate[^28] within the biofilm could pave the way to a sustainable terrestrial ecosystem.
3. **Osmotic Pressure Barrier**: Lastly, our biofilm must endure excessive osmotic pressure, requiring it to accumulate osmotic solutes within the microbial cytoplasm.


### **Opportunities for Improvement**

We envision the following for our biofilm:

1. **Iron-Oxidizing Bacteria Integration**:

   Leveraging the abundant iron content in the Martian mantle[^29], an intriguing avenue is to incorporate iron-oxidizing bacteria for autotrophic survival as indicated by [Tokyo_Tech_2009](https://2009.igem.org/Team:Tokyo_Tech)[^30].

2. **Expansion to Other Organisms**:

   Our current choice of *E. coli* due to its amenability to genetic engineering. We build [BBa_K4765130](https://parts.igem.org/Part:BBa_K4765130) to test ribozyme
in cyanbacteria.
   Transposing these BioBricks into other soil-based microorganisms, such as *Bacillus spp.*, could contribute to diverse ecological functions within soil ecosystems from nutrient cycling to coferring stress tolerance to plants[^31]. It could ensure the preservation of soil safety for future colonizers.

3. **Adapting for Extraterrestrial Environments**:

   Fully understanding the potential conditions of life-bearing planets beyond Earth remains a formidable challenge. Therefore, we are using Mars solely as a theoretical experimental model, designed to provide insights and possibilities for refining our biofilm. As we continue to learn, the opportunity to refine and enrich our biofilm with new attributes will expand.


### **Terrestrial Benefits**

Our project's potential doesn't just float on Mars! It offers promising applications here on Earth (see more in [Implementation](/implementation/)):

1. **Addressing Environmental Problems**: Our biofilm could combat soil salinization and stabilize sand particles, enabling afforestation and ecological restoration.

2. **Creating Functional Materials**: Our membrane-anchored nanobody-antigen pairs within *E. coli* can serve as a novel platform for nanomaterial assembly, enabling the construction of functional materials with tailored binding properties.

3. **Regulating Synthetic Pathways**: Our self-cleaving ribozyme can manage the polycistronic co-expression system, which is common in synthetic metabolic pathways.

4. **More Potential Applications**: Biofilm has significant potential for commercial use—MAAs for UV-absorbing products, the anti-freeze protein for food preservation and biological sample cryopreservation, and the anti-desiccation protein for drought-resilient crops.




## **References**

[^1]: https://en.wikipedia.org/wiki/Composition_of_Mars
[^2]:Brückner, J., Dreibus, G., Gellert, R., Squyres, S. W., Wänke, H., Yen, A., & Zipfel, J. (2008). Mars Exploration Rovers: Chemical composition by the APXS. In J. Bell (Ed.), *The Martian Surface: Composition, Mineralogy and Physical Properties* (pp. 58–102). Cambridge University Press. https://doi.org/10.1017/CBO9780511536076.005
[^3]: Ehlmann, B. L., & Edwards, C. S. (2014). Mineralogy of the Martian Surface. *Annual Review of Earth and Planetary Sciences*, *42*(1), 291–315. https://doi.org/10.1146/annurev-earth-060313-055024
[^4]: Oksanen, I. (2006). Ecological and biotechnological aspects of lichens. *Applied Microbiology and Biotechnology*, *73*(4), 723–734. https://doi.org/10.1007/s00253-006-0611-3
[^5]: Cockell, C. (2000). The Ultraviolet Environment of Mars: Biological Implications Past, Present, and Future. *Icarus*, *146*(2), 343–359. https://doi.org/10.1006/icar.2000.6393
[^6]: McKay, C. P. (1999). Bringing life to Mars. *Scientific American Presents*, *10(1)*, 52-57.
[^7]: https://en.wikipedia.org/wiki/Water_distribution_on_Earth
[^8]: Smith, M. D. (2008). Spacecraft Observations of the Martian Atmosphere. *Annual Review of Earth and Planetary Sciences*, *36*(1), 191–219. https://doi.org/10.1146/annurev.earth.36.031207.124334
[^9]: Chavez, C., Cruz-Becerra, G., Fei, J., Kassavetis, G. A., & Kadonaga, J. T. (2019). The tardigrade damage suppressor protein binds to nucleosomes and protects DNA from hydroxyl radicals. eLife, 8, e47682. https://doi.org/10.7554/eLife.47682
[^10]: Clark-Hachtel CM,  Hibshman JD,  Buysscher TD,  Goldstein B (2023). Tardigrades dramatically upregulate DNA repair pathway genes in response to ionizing radiation (p. 2023.09.07.556677). *bioRxiv*. https://doi.org/10.1101/2023.09.07.556677
[^11]: https://2022.igem.wiki/links-china/description
[^12]: Gao, Q., & Garcia-Pichel, F. (2011). Microbial ultraviolet sunscreens. *Nature Reviews Microbiology*, *9*(11), Article 11. https://doi.org/10.1038/nrmicro2649
[^13]: Yu, H., Zheng, H., Liu, Y., Yang, Q., Li, W., Zhang, Y., & Fu, F. (2021). Antifreeze protein from Ammopiptanthus nanus functions in temperature-stress through domain A. *Scientific Reports*, *11*, 8458. https://doi.org/10.1038/s41598-021-88021-0
[^14]: Boothby, T. C., Tapia, H., Brozena, A. H., Piszkiewicz, S., Smith, A. E., Gio vannini, I., Rebecchi, L., Pielak, G. J., Koshland, D., & Goldstein, B. (2017). Tardigrades Use Intrinsically Disordered Proteins to Survive Desiccation. *Molecular Cell*, *65*(6), 975-984.e5. https://doi.org/10.1016/j.molcel.2017.02.018
[^15]: https://2017.igem.org/Team:TUDelft
[^16]: Hibshman, J. D., Clark-Hachtel, C. M., Bloom, K. S., & Goldstein, B. (2023). A bacterial expression cloning screen reveals tardigrade single-stranded DNA-binding proteins as potent desicco-protectants (p. 2023.08.21.554171). *bioRxiv*. https://doi.org/10.1101/2023.08.21.554171
[^17]: https://2022.igem.wiki/shanghaitech-china/
[^18]: Fedeson, D. T., & Ducat, D. C. (2017). Cyanobacterial Surface Display System Mediates Engineered Interspecies and Abiotic Binding. *ACS Synthetic Biology*, *6*(2), 367–374. https://doi.org/10.1021/acssynbio.6b00254
[^19]: Chen, B., Kang, W., Sun, J., Zhu, R., Yu, Y., Xia, A., Yu, M., Wang, M., Han, J., Chen, Y., Teng, L., Tian, Q., Yu, Y., Li, G., You, L., Liu, Z., & Dai, Z. (2022). Programmable living assembly of materials by bacterial adhesion. *Nature Chemical Biology*, *18*(3), Article 3. https://doi.org/10.1038/s41589-021-00934-z
[^20]: Glass, D. S., & Riedel-Kruse, I. H. (2018). A Synthetic Bacterial Cell-Cell Adhesion Toolbox for Programming Multicellular Morphologies and Patterns. *Cell*, *174*(3), 649-658.e16. https://doi.org/10.1016/j.cell.2018.06.041
[^21]: Kim, H., Skinner, D. J., Glass, D. S., Hamby, A. E., Stuart, B. A. R., Dunkel, J., & Riedel-Kruse, I. H. (2022). 4-bit adhesion logic enables universal multicellular interface patterning. Nature, 608(7922), 324–329. https://doi.org/10.1038/s41586-022-04944-2
[^22]: Costa, O. Y. A., Raaijmakers, J. M., & Kuramae, E. E. (2018). Microbial Extracellular Polymeric Substances: Ecological Function and Impact on Soil Aggregation. *Frontiers in Microbiology*, *9*. https://www.frontiersin.org/articles/10.3389/fmicb.2018.01636
[^23]: Limoli, D. H., Jones, C. J., & Wozniak, D. J. (2015). Bacterial Extracellular Polysaccharides in Biofilm Formation and Function. *Microbiology spectrum*, *3*(3), 10.1128/microbiolspec.MB-0011–2014. https://doi.org/10.1128/microbiolspec.MB-0011-2014
[^24]: https://2020.igem.org/Team:XJTU-China
[^25]: https://2022.igem.wiki/cau-china/
[^26]: Brunner, I., Plötze, M., Rieder, S., Zumsteg, A., Furrer, G., & Frey, B. (2011). Pioneering fungi from the Damma glacier forefield in the Swiss Alps can promote granite weathering: Pioneering fungi. *Geobiology*, *9*(3), 266–279. https://doi.org/10.1111/j.1472-4669.2011.00274.x
[^27]: Chen, J., Blume, H.-P., & Beyer, L. (2000). Weathering of rocks induced by lichen colonization—A review. *CATENA*, *39*(2), 121–146. https://doi.org/10.1016/S0341-8162(99)00085-5
[^28]: https://2018.igem.org/Team:Exeter/Description
[^29]: https://en.wikipedia.org/wiki/Composition_of_Mars
[^30]: https://2009.igem.org/Team:Tokyo_Tech
[^31]: Saxena, A. K., Kumar, M., Chakdar, H., Anuroopa, N., & Bagyaraj, D. J. (2020). Bacillus species in soil as a natural resource for plant health and nutrition. *Journal of Applied Microbiology*, *128*(6), 1583–1594. https://doi.org/10.1111/jam.14506
