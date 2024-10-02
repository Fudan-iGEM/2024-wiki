---
title: Design
author:
  name: Kevin Qi
  url: /fudan/team/#kevin-qi
headergif: https://static.igem.wiki/teams/5115/header/design-header-new.gif
---

## Concept Design

Throughout the design process of MINERAL, we encountered multiple critical decisions that shaped our path forward. Here, we focus on answering three essential questions to clarify why we made specific choices in our approach.

### Why Nickel?

Nickel is just one of many heavy metals that harm the environment, so why prioritize it over others?

- **Rising Demand:** Nickel's market demand is rising rapidly due to trends in the electric vehicle market. It has a higher demand than other EV battery metals such as cobalt[^1].
- **Well-Studied Transport Proteins:** Understanding nickel transport mechanisms allows for better engineering of microbial systems.
- **Well-Studied NiFe-Hydrogenases:** Enzymes capable to reduce nickel ion to nickel has been documented[^2], which is crucial for our project.


### Why Bioaccumulation?

For the removal of heavy metals, there are three main biological interactions to consider: bioaccumulation, biosorption, and bioprecipitation. Here’s why we chose bioaccumulation:

- **Higher Metal Removal Efficiency:** Existing studies comparing nickel removal via engineered *E. coli* for bioaccumulation versus biosorption indicate that bioaccumulation offers greater efficiency for nickel uptake[^5] [^6]. This makes it a preferable approach for our goal of maximizing nickel recovery.
- **Stability in Harsh Environments:** Industrial wastewater is a complex and harsh environment with variable concentrations of multiple pollutants. Bioaccumulation offers better control over intracellular conditions compared to biosorption, where external environmental factors can impact binding efficiency. In our design, accumulating nickel within *E. coli* provides a stable, manageable environment for downstream processing.
- **Preventing Environmental Contamination:** Our final goal is to create nickel microparticles from bioaccumulated ions, and bioaccumulation helps ensure that these microparticles do not end up free in wastewater, where they could cause environmental harm. By keeping the nickel within the cells, we can better contain and recover it for subsequent use.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/design/design-fig2.png" style="width:100%">
    <div>
        <span style="color:gray">Figure 2: Bioaccumulation, biosorption, and bioprecipitation<br>Bioaccumulation: Metal ions are imported and stored within the cell.<br>Biosorption: Metal ions adhere to the cell surface.<br>Bioprecipitation: Metal ions are converted to insoluble forms outside the cell</span>
        <br><br>
    </div>
</div>

<br>

#### 3. Why Microparticles?

After bioaccumulating nickel ions, why not simply extract the nickel directly?

- **Safety and Containment:** Direct extraction of nickel ions could pose a risk of environmental contamination, especially if nickel is released unintentionally. By converting nickel ions into nickel particles concentrated around a shell-like structure, forming microparticles, we can ensure safety by isolating nickel until recovery.
- **Controlled Reduction Process:** By forming nickel microparticles through a controlled reduction process, we can enhance both the purity and the usability of the nickel, making it easier to reintegrate into industrial applications.


## Modular Design

We present the rationale for our design by focusing on four key goals, each of which addresses specific challenges posed by nickel recovery and microparticle generation.

### Maximize Nickel Uptake

Nickel uptake is the first crucial step in our [bioremediation](https://competition.igem.org/participation/villages#h-list-of-villages) process, and efficient nickel accumulation sets the foundation for the entire project. We designed this system by leveraging both *E. coli*'s native capabilities and introducing enhancements using synthetic biology to maximize influx while minimizing efflux.

#### Increase Influx

**NikABCDE Overexpression:** NikABCDE is a native nickel transporter in *E. coli*, making it an ideal candidate for overexpression to ensure compatibility and efficiency. By using the [pRAP](https://2022.igem.wiki/fudan/parts) system to overexpress this complex, we ensure balanced assembly of all subunits, enhancing nickel transport.

**NixA Introduction:** To supplement native uptake, we introduced NixA, a nickel transporter from *Helicobacter pylori*. This increases overall capacity by diversifying transport mechanisms, potentially improving uptake under various conditions. [Dimerizing](https://parts.igem.org/Part:BBa_K5115085) NixA through fusion proteins further enhances the transport efficiency by creating a more effective pathway for nickel entry.

#### Decrease Efflux

To retain accumulated nickel, we engineered *E. coli* to repress the nickel efflux system (RcnA). By mutating the regulatory protein RcnR to maintain repression even at high nickel concentrations[^7], we ensure that the accumulated nickel remains within the cell.

### Increase Survival Rate

Survival of our engineered *E. coli* in industrial wastewater is critical, as only viable cells can effectively perform nickel uptake and reduction. Extended from our [2023 efforts](https://2023.igem.wiki/fudan/results/#_1-survival-system), we focused on enhancing tolerance to both toxic metals and environmental threats like bacteriophages.

#### Increase Heavy Metal Tolerance

Inspired by natural mechanisms of *Helicobacter pylori*’s histidine-rich proteins, we designed our *E. coli* to express Hpn and metallothioneins. These proteins help sequestering nickel ions, reducing cytosolic toxicity and thereby improving cell survival in nickel-rich environments.

#### Increase Phage Resistance

To protect against widely existing environmental bacteriophage infections, we enhanced the production of lipopolysaccharides by overexpressing [YejM](https://parts.igem.org/Part:BBa_K5115070). This strengthens the outer membrane of *E. coli*, making it harder for bacteriophages to attach or initiate infection, thereby improving overall cell resilience.

### Improve Microparticle Generation

Our ultimate goal is to produce safe, reusable nickel microparticles. Therefore, we designed parts to enhance the efficiency of microparticle formation while mitigating toxicity.

By utilizing carboxysomes, we create a concentrated environment for Ni/Fe hydrogenase and nickel reduction. This compartmentalization enhances the local concentrations of enzymes, improving the catalytic efficiency of hydrogenase and the overall rate of microparticle formation.


### Hydrogen Supply

#### Symbiotic System with Cyanobacteria

Cyanobacteria are known to be clean and sustainable producers of hydrogen gas. They provide a continuous source of hydrogen gas through photosynthesis, which is then used by *E. coli* for nickel reduction. This strategy not only supplies hydrogen in a renewable manner but also integrates our project into a broader ecological cycle, aligning with the overall theme of sustainability and resource recovery. In 2023, we have successfully demonstrated the cyanobacteria-*E. coli* symbiotic interaction by measuring [co-culture](https://2023.igem.wiki/fudan/results/#_2-symbiotic-system) growth curve, [fluoresence imaging](https://2023.igem.wiki/fudan/results/#_3-biofilm-formation-system), and [aggregation](https://2023.igem.wiki/fudan/results/#_3-biofilm-formation-system) assays.


## Summary

Our design decisions are driven by the overarching goal of [sustainable](/fudan/sustainable/) and [safe](/fudan/safety) nickel recovery from industrial wastewater. By focusing on maximizing nickel uptake, enhancing *E. coli* survival, generating reusable microparticles, and ensuring a continuous hydrogen supply, we aim to create an efficient and environmentally responsible solution for nickel recycling, with possibility of [commercialization](/fudan/entrepreneurship/). Each module in our design addresses a specific challenge, with choices rooted in both practicality and [sustainability](https://sdgs.un.org/goals), paving the way for future innovations in heavy metal bioremediation.


## Reference

[^1]:*Global Critical Minerals Outlook 2024 – Analysis*. (2024, May 17). IEA. https://www.iea.org/reports/global-critical-minerals-outlook-2024
[^2]:Tang, H., & Hall, M. B. (2017). Biomimetics of NiFe-Hydrogenase: Nickel- or Iron-Centered Proton Reduction Catalysis? *Journal of the American Chemical Society*, *139*(49), 18065–18070. [https://doi.org/10.1021/jacs.7b10425](https://doi.org/10.1021/jacs.7b10425)
[^3]:Diep, P., Leo Shen, H., Wiesner, J. A., Mykytczuk, N., Papangelakis, V., Yakunin, A. F., & Mahadevan, R. (2023). Engineered nickel bioaccumulation in Escherichia coli by NikABCDE transporter and metallothionein overexpression. *Engineering in Life Sciences*, *23*(7), 2200133. [https://doi.org/10.1002/elsc.202200133](https://doi.org/10.1002/elsc.202200133)
[^4]:Saffar, B., Yakhchali, B., & Arbabi, M. (2007). Development of a Bacterial Surface Display of Hexahistidine Peptide Using CS3 Pili for Bioaccumulation of Heavy Metals. *Current Microbiology*, *55*(4), 273–277. [https://doi.org/10.1007/s00284-005-0511-2](https://doi.org/10.1007/s00284-005-0511-2)
[^5]: Saffar, B., Yakhchali, B., & Arbabi, M. (2007). Development of a Bacterial Surface Display of Hexahistidine Peptide Using CS3 Pili for Bioaccumulation of Heavy Metals. *Current Microbiology*, *55*(4), 273–277. [https://doi.org/10.1007/s00284-005-0511-2](https://doi.org/10.1007/s00284-005-0511-2)
[^6]: Diep, P., Leo Shen, H., Wiesner, J. A., Mykytczuk, N., Papangelakis, V., Yakunin, A. F., & Mahadevan, R. (2023). Engineered nickel bioaccumulation in Escherichia coli by NikABCDE transporter and metallothionein overexpression. *Engineering in Life Sciences*, *23*(7), 2200133. [https://doi.org/10.1002/elsc.202200133](https://doi.org/10.1002/elsc.202200133)
[^7]: Higgins, K. A., Chivers, P. T., & Maroney, M. J. (2012). Role of the N-terminus in Determining Metal-Specific Responses in the E. coli Ni- and Co-Responsive Metalloregulator, RcnR. *Journal of the American Chemical Society*, *134*(16), 7081–7093. [https://doi.org/10.1021/ja300834b](https://doi.org/10.1021/ja300834b)
