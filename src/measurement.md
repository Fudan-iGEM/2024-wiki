---
title: Measurement
author:
  name: Yi Shi
  url: /fudan/team/#yi-shi
headergif: https://static.igem.wiki/teams/5115/header/measurement-test.gif
---

## Introduction

In our [B.HOME project](/description/), we aim to construct a multifunctional biofilm to achieve the terraforming goals on Mars. This requires ensuring that the chassis can perform a variety of tasks. Once we successfully build relevant [Parts](/parts/), we need to **conduct functional experiments** to ascertain their effectiveness. For instance, in the design of the biofilm's survival system, we must ensure it possesses various functions such as anti-freeze, anti-desiccation, and anti-UV. We need to compare how well the chassis can survive under these harsh conditions after the introduction of certain Part, which is typically quantified through the number of bacteria.

Considering that we have multiple modules needed to validate, to streamline the validation process and reduce the wet lab workload, we have opted for the [Colony-Forming Unit (CFU)](/experiments/#cfu-counting) assay. This enable us to demonstrate the functionality of parts in a simple, direct, and repeatable manner.

## Method overview

There are various methods for quantifying colonies, broadly categorized into direct and indirect counting.

In **direct counting**, we can employ a counting chamber, such as the Petroff-Hausser counting chamber, which calculates the number of microorganisms in a sample based on the chamber's volume and the sample's dilution ratio before counting[^1]. However, this method requires that the microbial population must be relatively large and evenly distributed. Instruments like flow cytometers can also be used for direct counting, but they are costly and involve complex operations. More importantly, direct counting commonly faces a limitation: **it cannot distinguish between live and dead bacteria**[^2].

In our functional experiments, excluding dead bacteria during counting is of utmost importance. Therefore, we lean towards **indirect counting** methods. When using this approach to quantify colonies, it typically involves diluting the processed sample, plating it onto agar plates, counting colonies after a specific incubation period, and then calculating the original number of live bacteria in the sample based on the dilution factor[^3]. Similarly, researchers determine bacteriophage concentration by counting the number of phage plaques[^4].

In [2018 iGEM interlab study](https://2018.igem.org/Measurement/InterLab) resulted publication[^5], the key procedures involved in CFU assay are described as following:

**Step 1: Starting Sample Preparation**

- Measure the OD~600~ of cell cultures, diluting them within the linear detection range.
- Dilute overnight cultures to OD~600~ = 0.1 in 1 mL of LB + Antibiotics media for each culture.

**Step 2: Series Dilution**

- Perform serial dilutions for each culture. Modify the number of dilution rounds required based on experience.
- Label each tube accordingly, and vortex tubes for 5-10 seconds.
- Plate 100 μL of each dilution on LB + antibiotics plates, incubate them at 37°C overnight, and count colonies after 18-20 hours.

**Step 3: CFU/mL Calculation**

- Count colonies on plates with fewer than 300 colonies.
- Multiply the colony count by the dilution factor on each plate to calculate CFU per mL.

Based on our experimental conditions, we have made slight modifications to the protocol above.

## Protocol

1. Dilute overnight cultures to OD~600~=1.0 with sterile culture media or PBS.

2. Conduct the dilution procedure as follows:

   <div style="text-align: center;">
      <p><small style="color: gray">Table 1: Dilution procedure for CFU counting</small></p>
   </div>

| Dilution ratio          | Solution proportions                                         |
| ----------------------- | ------------------------------------------------------------ |
| The First Diluted Tube  | 100 μL Experimental Groups Bacterial Solution (10^8^/mL) + 9.9 mL Sterile Water |
| The second Diluted Tube | 100 μL First Diluted Solution + 9.9 mL Sterile Water           |
| The third Diluted Tube  | 1.0 mL Second Diluted Solution + 9.0 mL Sterile Water          |
| Final Dilution ratio    | 1 : 100,000                                                  |


3. Dilute the bacterial solution sample (100 μL) to 1:100,000 and take 100 μL from the third diluted tube to perform plate culturing.

4. After incubating at 37°C for 16 hours, count the colonies on the agar plate by using the open-source software [ImageJ](https://imagej.nih.gov/ij/).

5. Calculate the CFU count (CFU/ml) for each sample as follows:

$$
CFU=N·10^6
$$

		where $N$ refers to the number of colonies on the agar plate.

Based on our pilot experiences and reports in the literature[^6], several aspects require special attention. Otherwise, inaccurate counting may occur. If cell clusters are not disrupted, are not evenly dispersed, which can result in an underestimation of population size, so remember to vortex after dilution. What's more, avoid using hot agar or misusing antibiotics.


## Results

To validate our protocol, we decided to use this approach to verify whether the expression of the AnAFP [(BBa K4765015)](https://parts.igem.org/Part:BBa_K4765015) protein in *E. coli* exhibits anti-freeze properties. For procedures related to AnAFP, please refer to our [Experiments](/experiments/) page. After collecting samples subjected to freezing treatment for 0, 24, 48, 72, and 96 hours, we followed the steps outlined above to obtain the agar plates depicted in [Figure 1](#fig-1).

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/measurement-2.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Colonies at 0, 24, 48, 72, and 96 hours of cold treatment at 0°C.
    <br>
From left to right is a time gradient of freezing treatment, while from up to down are the groups that were transformed with AnAFP and the control group.</small></p>
</div>
</div>


Subsequently, after counting the number of colonies using [ImageJ](https://imagej.nih.gov/ij/), we calculated the ratio of the colony count to the colony count in the 0-hour control group. This ratio represents the bacterial survival portion, which was used to generate the survival rate curve shown in [Figure 2](#fig-2).

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/anafp-survival-curve1.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 2: Survival curves under cold treatment at 0°C.
   <br>
In the initial 48 hours, there was no significant difference in the survival rates between the experimental and control groups. However, after 48 hours, the survival rate of the experimental group was significantly higher than that of the control group.</small></p>
</div>
</div>

## Summary

Through CFU experiments, we have convincingly demonstrated that the expression of AnAFP in *E. coli* can effectively confer anti-freeze properties. The CFU method exhibits excellent **repeatability**, as evidenced by minimal errors among multiple experimental groups, and has shown remarkable performance in other functional experiments as well, as detailed on our [Results](/results/) page.

In summary, CFU assay is a **concise, effective, and highly reproducible** quantitative experimental technique that merits broader utilization.



## References

[^1]: Absher, M. (1973). Hemocytometer Counting. In *Tissue Culture* (pp. 395–397). Elsevier. https://doi.org/10.1016/B978-0-12-427150-0.50098-X

[^2]: Avens, J. S., & Miller, B. F. (1970). Quantifying Bacteria on Poultry Carcass Skin. *Poultry Science*, *49*(5), 1309–1315. https://doi.org/10.3382/ps.0491309
[^3]: Putman, M., Burton, R., & Nahm, M. H. (2005). Simplified method to automatically count bacterial colony forming unit. *Journal of Immunological Methods*, *302*(1–2), 99–102. https://doi.org/10.1016/j.jim.2005.05.003
[^4]: Dulbecco, R. (1952). Production of Plaques in Monolayer Tissue Cultures by Single Particles of an Animal Virus. *Proceedings of the National Academy of Sciences*, *38*(8), 747–752. https://doi.org/10.1073/pnas.38.8.747
[^5]: Beal, J., Farny, N. G., Haddock-Angelli, T., Selvarajah, V., Baldwin, G. S., Buckley-Taylor, R., Gershater, M., Kiga, D., Marken, J., Sanchania, V., Sison, A., Workman, C. T., iGEM Interlab Study Contributors, Aachen, Pehlivan, M., Roige, B. B., Aalto-Helsinki, Aarnio, T., Kivisto, S., … Zhou, J. (2020). Robust estimation of bacterial cell count from optical density. Communications Biology, 3(1), 512. https://doi.org/10.1038/s42003-020-01127-5
[^6]: Willey, J. M., Sherwood, L. M., & Woolverton, C. J. (2019). *Prescott's Microbiology*. McGraw-Hill Education.
