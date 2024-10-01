---
title: Design
author:
  name: Kevin Qi
  url: /fudan/team/#kevin-qi
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

## Concept Design

Throughout the design process of MINERAL, we encountered multiple critical decisions that shaped our path forward. Here, we focus on answering three essential questions to clarify why we made specific choices in our approach.

### Why Nickel?
Nickel is just one of many heavy metals that harm the environment, so why prioritize it over others?

- **Rising Demand:** Nickel's market demand is rising rapidly due to trends in the electric vehicle market. It has a higher demand than other EV battery metals such as cobalt[^1].
- **Well-Studied Transport Proteins:** Understanding nickel transport mechanisms allows for better engineering of microbial systems.
- **Role in NiFe-Hydrogenases:** Nickel is essential for certain enzymes that are crucial for our project’s goals[^2].



### Why Bioaccumulation?
For the removal of heavy metals, there are three main biological interactions to consider: **bioaccumulation**, **biosorption**, and **bioprecipitation**. Here’s why we chose bioaccumulation:

- **Higher Metal Removal Efficiency:** Existing studies comparing nickel removal via engineered *E. coli* for bioaccumulation versus biosorption indicate that bioaccumulation offers greater efficiency for nickel uptake. This makes it a preferable approach for our goal of maximizing nickel recovery.
- **Stability in Harsh Environments:** Industrial wastewater is a complex and harsh environment with variable concentrations of multiple pollutants. Bioaccumulation offers better control over intracellular conditions compared to biosorption, where external environmental factors can impact binding efficiency. In our design, accumulating nickel within *E. coli* provides a stable, manageable environment for downstream processing.
- **Preventing Environmental Contamination:** Our final goal is to create nickel microparticles from bioaccumulated ions, and bioaccumulation helps ensure that these microparticles do not end up free in wastewater, where they could cause environmental harm. By keeping the nickel within the cells, we can better contain and recover it for subsequent use.



#### 3. Why Microparticles?

After bioaccumulating nickel ions, why not simply extract the nickel directly?

- **Safety and Containment:** Direct extraction of nickel ions could pose a risk of environmental contamination, especially if nickel is released unintentionally. By converting nickel ions into microparticles contained within a shell-like structure, we can ensure safety by isolating nickel until recovery.
- **Controlled Reduction Process:** By forming nickel microparticles through a controlled reduction process, we can enhance both the purity and the usability of the nickel, making it easier to reintegrate into industrial applications.





## System Design

We present the rationale for our system designs by focusing on four key goals, each of which addresses specific challenges posed by nickel recovery and microparticle generation.

### Maximize Nickel Uptake

Nickel uptake is the first crucial step in our bioremediation process, and efficient nickel accumulation sets the foundation for the entire project. We designed this system by leveraging both *E. coli*'s native capabilities and introducing enhancements to maximize influx while minimizing efflux.

#### Increase Influx

**NikABCDE Overexpression:** NikABCDE is a native nickel transporter in *E. coli*, making it an ideal candidate for overexpression to ensure compatibility and efficiency. By using the pRAP system to express this complex, we ensure balanced assembly of all subunits, enhancing nickel transport.

**NixA Introduction:** To supplement native uptake, we introduced NixA, a nickel transporter from a different origin. This not only increases overall capacity but also diversifies transport mechanisms, potentially improving uptake under various conditions. Dimerizing NixA through fusion proteins further enhances the transport efficiency by creating a more effective pathway for nickel entry.

#### Decrease Efflux

To retain accumulated nickel, we engineered *E. coli* to repress the nickel efflux system (RcnA). By mutating the regulatory protein RcnR to maintain repression even at high nickel concentrations, we ensure that the accumulated nickel remains within the cell.



### Increase Survival Rate
Survival of our engineered *E. coli* in industrial wastewater is critical, as only viable cells can effectively perform nickel uptake and reduction. We focused on enhancing tolerance to both toxic metals and environmental threats like bacteriophages.

#### Increase Heavy Metal Tolerance

Inspired by natural mechanisms of *Helicobacter pylori*’s histidine-rich proteins, we designed our *E. coli* to express Hpn and metallothioneins. These proteins help sequester nickel ions, reducing cytosolic toxicity and thereby improving cell survival in nickel-rich environments.

#### Increase Phage Resistance

To protect against bacteriophage infections, we enhanced the production of lipopolysaccharides (LPS) by overexpressing YejM. This strengthens the outer membrane of *E. coli*, making it harder for bacteriophages to attach and initiate infection, thereby improving overall cell resilience.



### Improve Microparticle Generation

Our ultimate goal is to produce safe, reusable nickel microparticles. Therefore, we designed systems to enhance the efficiency of microparticle formation while mitigating toxicity.

#### Increase Efficiency

By utilizing carboxysomes, we create a controlled environment for NiFe-hydrogenase and nickel reduction. This compartmentalization enhances the local concentrations of substrates, improving the catalytic efficiency of hydrogenase and the overall rate of microparticle formation.

#### Lower Toxicity

Reduced nickel still poses a toxicity risk. By containing nickel within carboxysomes, we prevent its interaction with other cellular components and reduce environmental risk in case of leakage, ensuring both safety and sustainability.




### Hydrogen Supply
#### Symbiotic System with Cyanobacteria

Cyanobacteria are known to be clean and sustainable producers of hydrogen gas. They provide a continuous source of hydrogen gas through photosynthesis, which is then used by *E. coli* for nickel reduction. This strategy not only supplies hydrogen in a renewable manner but also integrates our project into a broader ecological cycle, aligning with the overall theme of sustainability and resource recovery.

## Summary

Our design decisions are driven by the overarching goal of sustainable and safe nickel recovery from industrial wastewater. By focusing on maximizing nickel uptake, enhancing *E. coli* survival, generating reusable microparticles, and ensuring a continuous hydrogen supply, we aim to create an efficient and environmentally responsible solution for nickel recycling. Each system in our design addresses a specific challenge, with choices rooted in both practicality and sustainability, paving the way for future innovations in heavy metal bioremediation.

## Reference

[^1]:*Global Critical Minerals Outlook 2024 – Analysis*. (2024, May 17). IEA. https://www.iea.org/reports/global-critical-minerals-outlook-2024
[^2]:Tang, H., & Hall, M. B. (2017). Biomimetics of NiFe-Hydrogenase: Nickel- or Iron-Centered Proton Reduction Catalysis? *Journal of the American Chemical Society*, *139*(49), 18065–18070. [https://doi.org/10.1021/jacs.7b10425](https://doi.org/10.1021/jacs.7b10425)
[^3]:Diep, P., Leo Shen, H., Wiesner, J. A., Mykytczuk, N., Papangelakis, V., Yakunin, A. F., & Mahadevan, R. (2023). Engineered nickel bioaccumulation in Escherichia coli by NikABCDE transporter and metallothionein overexpression. *Engineering in Life Sciences*, *23*(7), 2200133. [https://doi.org/10.1002/elsc.202200133](https://doi.org/10.1002/elsc.202200133)
[^4]:Saffar, B., Yakhchali, B., & Arbabi, M. (2007). Development of a Bacterial Surface Display of Hexahistidine Peptide Using CS3 Pili for Bioaccumulation of Heavy Metals. *Current Microbiology*, *55*(4), 273–277. [https://doi.org/10.1007/s00284-005-0511-2](https://doi.org/10.1007/s00284-005-0511-2)

