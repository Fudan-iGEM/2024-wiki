---

title: Results
headergif: https://static.igem.wiki/teams/5115/header/results-header.gif

author:
- name: Xujie Tan
  url: /fudan/team/#xujie-tan
- name: Ruiwen Ma
  url: /fudan/team/#ruiwen-ma
- name: Yi Shi
  url: /fudan/team/#yi-shi
---

## TBA

<span>The graph shows the percentage of Ni²⁺ absorbed by<em>E. coli</em> expressing indicated modules (<em>E. coli</em><br><small>strain: BL21 DE3). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 100 mg/L. The single bacteria colony was picked and grow over night to reach optical density (OD₆₀₀) > 1. Prepare a sealed 25-mL LB culture in a 250-mL bottle, with: 100 µL overnight bacteria liquid culture, 25 µg/mL Kan, 1 mM methyl viologen dichloride, 100 mg/L NiCl<sub>2</sub>, bubbled with ~250 mL 5.6% hydrogen gas (slowly, with hand shaking, about 5 minutes). Culture for 30 hours, at 37°C with rotating speed 220 rpm. Four biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. Plain BL21 DE3 was used as control. None of the four bacteria with U module was able to grow during overnight culture if induced with 1 mM IPTG, only 1 F module grow. Additional 1 mM IPTG was added into the 25-mL culture of "F induced". ANOVA test shows that all constructs increase Ni²⁺ uptake significantly compared to the control. P value was calculated using Dunnett’s post test.</small></span>



## 1. Nickel Enrichment Module

In our [Nickel Enrichment Module](/fudan/description/#_1-nickel-enrichment-module), our goal is to maximize nickel bioaccumulation, and for this, we have designed two approaches: enhancing nickel uptake and improving nickel retention.

### Nickel Uptake: nikABCDE & NixA

To enable our *Escherichia coli* to efficiently absorb nickel ions, we focused on active nickel uptake, which involves a nickel transport protein known as nikABCDE([BBa_K4765129](https://parts.igem.org/Part:BBa_K4765129)) and NixA([BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071)). We also created a ribozyme-connected version for nikABCDE([BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082)) and dimerizable versions for NixA： NixA-F1v ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086)) and F1v-NixA ([BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087)).

To measure the nickel uptake efficiency of our modified *E. coli*, we analyzed the nickel concentration in the bacterial supernatant after [constructing a standard curve](/fudan/experiments/#ni2-concentration-measurement). A lower nickel concentration in the supernatant indicates greater absorption by *E. coli*, allowing us to calculate the percentage of nickel uptake during the culture process.

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/ni-results/30-mg-l-single-plasmid1.png" style='width:70%'>
    <div>
    	<span style="color: gray">Figure 1: Comparison of Ni²⁺ Uptake Efficiency by Different <em>E. coli</em> in 30 mg/L Ni²⁺<br>
            <small>The graph shows the percentage of Ni²⁺ absorbed by<em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 30 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 30 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Regarding <a href="https://parts.igem.org/Part:BBa_K5115086">NixA-F1v</a> and <a href="https://parts.igem.org/Part:BBa_K5115087">F1v-NixA</a>, AP20187 is a synthetic dimerizer that can be used to induce homodimerization of F1v domain. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. ANOVA test shows that all constructs increase Ni²⁺ uptake significantly compared to the control. Bacteria expressing NixA-F1v exhibit the highest Ni²⁺ uptake efficiency (p = 0.0052, Dunnett’s post-test).</small>
</span>
        <br><br>
    </div>
</div>

As shown in [Figure 1](#fig1), NixA generally outperforms nikABCDE. The ribozyme-connected version of nik demonstrates higher nickel uptake efficiency than the original nik operon. The dimerable versions of NixA exhibit varying nickel uptake efficiencies: F1v-NixA shows lower ability than NixA, while NixA-F1v surpasses NixA, making it the strongest nickel uptake part among those tested. This difference may be attributed to the distinct structures of these two dimerable versions of NixA.

To explain the difference between the nickel uptake capabilities of F1v-NixA and NixA-F1v, we used AlphaFold 3[^1] to predict their structures.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/ni-results/alphafold-fkbp.png" style="width:70%">
    <div>
        <span style="color:gray">Figure 2: AlphaFold 3 model of NixA, F1v-NixA, and NixA-F1v<br>Orientations of NixA, F1v-NixA, and NixA-F1v aligned. Plasma membrane is shown.</span>
        <br><br>
    </div>
</div>

According to the AlphaFold 3 models ([Figure 2](fig2)), the N-terminus of NixA is in the periplasm, while the C-terminus lies within the cytoplasm. Plasma membrane location marked based on existing study[^2]. F1v is on the periplasmic side when fused to the N-terminus of NixA and on the cytoplasmic side when fused to the C-terminus. The nickel uptake capability is higher when F1v is fused to the C-terminus (on the cytoplasmic side), possibly indicating a better dimerization effect.

We also conducted nickel absorption tests at different starting Ni²⁺ concentrations (20 mg/L and 50 mg/L), leading to the same result. 



### Nickel Retainment: RcnR

We found that wild-type *E. coli* expresses RcnA, especially at high Ni²⁺ concentrations, to efflux nickel as a protective mechanism. However, overexpressing a mutant RcnR<sup>C35L</sup> ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)) could limit the induction of rcnA, thereby preventing *E. coli* from effluxing nickel. 

We constructed the part RcnR C35L ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)), changing the Cys residue at position 35 to Leu. This modification prevents RcnR from detaching from DNA in response to high nickel levels, thus limiting RcnA induction and ensuring that absorbed nickel remains within our engineered *E. coli*.

We combined RcnR<sup>C35L</sup> with nikABCDE and NixA to create two constructs: RcnR<sup>C35L</sup> + nikABCDE and RcnR<sup>C35L</sup> + NixA.

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-rcnr-nik-nix1.png" style="width:70%">
    <div>
    	<span style="color: gray">Figure 3: Comparison of Ni²⁺ Uptake Efficiency, with and without RcnR<sup>C35L</sup><br>
<small>The graph shows the percentage of Ni²⁺ absorbed by<em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 20 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 20 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. RcnR<sup>C35L</sup> refers to a mutation in which cysteine (C) at position 35 in the RcnR protein was substituted with leucine (L). The results indicate that <em>E. coli</em> expressing RcnR<sup>C35L</sup> consistently has higher Ni²⁺ uptake efficiency compared to <em>E. coli</em> without RcnR<sup>C35L</sup> expression.</small>
</span>
        <br><br>
    </div>
</div>


After creating these constructs, we measured the efficiency of nickel uptake by the bacteria. As shown in [Figure 3](#fig3), RcnR<sup>C35L</sup> improved nickel absorption in *E. coli*, both with the nik-ribozyme and NixA. This result validates our design by inhibiting nickel efflux and effectively trapping Ni²⁺ within the cells.

For more details, please visit our nickel module - part number [BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068).



## 2. Survival Module

In our [survival module](/fudan/description/#_2-survival-module), our goal is to enable *E. coli* to withstand environmental survival pressures while effectively absorbing and reducing nickel. The challenges *E. coli* may face in practical applications include high concentrations of nickel ions and threats from phages. To address these issues, we have developed two technical strategies: enhancing heavy metal tolerance and providing anti-phage protection.

### Heavy Metal Tolerance: Hpn

Heavy metal ions are cytotoxic, so while we aim for *E. coli* to absorb nickel ions, we must also ensure its safe growth by achieving heavy metal tolerance. To accomplish this, we chose to express a nickel-binding protein, Hpn ([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036)), a histidine-rich cytoplasmic protein capable of storing Ni ions. By lowering cytosolic heavy metal concentrations, Hpn helps protect *E. coli* from the harmful effects of nickel ions.

<div style="text-align: center;" id="fig4">
    <img src="https://static.igem.wiki/teams/5115/ni-results/50-mg-l-hpn1.png" style='width:70%'>
    <div>
    	<span style="color: gray">Figure 4: Comparison of <em>E. coli</em> Growth curve with and without Hpn in 50 mg/L Ni²⁺<br>
            <small>The graph illustrates the effect of Ni²⁺ on the growth of <em>E. coli</em> expressing Hpn compared to <em>E. coli</em> without Hpn expression in a medium containing 50 mg/L Ni²⁺ (<em>E.coli</em> strain: BL21 DE3, induced with 1 mM IPTG). The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. <em>E. coli</em> growth was measured by OD₆₀₀, and the bacterial counts were calculated using a standard conversion, where OD₆₀₀ = 1 corresponds to 5.39 × 10⁸ cells. The results indicate that <em>E. coli</em> expressing Hpn has greater tolerance to Ni²⁺, exhibiting higher growth rates than <em>E. coli</em> without Hpn expression under the same conditions.
</small>
</span>
        <br><br>
    </div>
</div>


To evaluate the growth of our modified *E. coli* in a nickel-rich environment, we generated growth curves by measuring OD<sub>600</sub>. As shown in [Figure 4](fig4), *E. coli* expressing Hpn consistently outperformed the controls in a medium with a nickel concentration of 50 mg/L. This demonstrates that Hpn effectively protects *E. coli* in high-nickel environments. We also repeated the experiments at 20 mg/L and 100 mg/L nickel concentrations and obtained similar results. 



Our primary goal in expressing Hpn is to alleviate the survival pressure on *E. coli* in high nickel environments, allowing it to absorb nickel more efficiently. To assess this, we measured nickel uptake in *E. coli* with and without Hpn, enabling us to compare the differences in nickel absorption.

<div style="text-align: center;" id="fig5">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-hpn-af1.png" style="height:480px">
    <div>
    	<span style="color: gray">Figure 5: Comparison of Ni²⁺ Uptake Efficiency, with and without Hpn<br>
<small>The graph shows the percentage of Ni²⁺ absorbed by<em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 50 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 50 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Regarding <a href="https://parts.igem.org/Part:BBa_K5115086">NixA-F1v</a>, AP20187 is a synthetic dimerizer that can be used to induce homodimerization of F1v domain. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. The results indicate that <em>E. coli</em> expressing Hpn demonstrated higher Ni²⁺ uptake efficiency compared to <em>E. coli</em> without Hpn expression.</small>
</span>
        <br><br>
    </div>
</div>


As shown in [Figure 5](#fig5), the nickel absorption ability of the Hpn + NixA-F1v bacteria was significantly higher than that of NixA-F1v alone, achieving 43% nickel uptake. This indicates that Hpn effectively relieves the survival pressure on *E. coli* and enhances its nickel uptake capacity.



### Antiphage: YejM

Phages in the environment pose a significant threat to bacterial survival, and bacterial lipopolysaccharides(LPS) can act as a physical barrier to prevent phage infection. YejM ([BBa_K5115070](https://parts.igem.org/Part:BBa_K5115070)) inhibits LpxC degradation by binding to LapB, which blocks LapB from interacting with the FtsH protease. This prevents the breakdown of LpxC, the enzyme crucial for LPS synthesis, thereby promoting the production of LPS. 

We infected TG1 *E. coli* with kanamycin-resistant M13KO7 phage and plated a 200-fold dilution on kanamycin plates. This allowed us to assess the phage infection efficiency by counting the number of colonies.

<div style="text-align: center;" id="fig6">
    <img src="https://static.igem.wiki/teams/5115/txj/10-5.jpg" style='width:70%'>
    <div>
        <span style="color: gray">Figure 6: Colony count of <em>E. coli</em> with and without YejM after phage infection.⁺<br>
            <small>TG1 <em>E. coli</em> carrying <a href="https://parts.igem.org/Part:BBa_K4335002">Staygold</a> and YejM under the <a href="https://parts.igem.org/Part:BBa_J23107">J23107</a> promoter were infected with M13KO7 phage at different MOIs. Colonies were counted and calculated after incubating at 37°C for 16 hours. "*" indicates a p-value less than 0.01. Under any MOI condition, the colony count of TG1 <em>E. coli</em> carrying YejM was significantly lower than that of Staygold, indicating that YejM confers resistance to phage infection.
</small>
</span>
        <br><br>
    </div>
</div>

According to [Figure 6](fig6), it's clear that TG1-YejM significantly exhibits better growth than TG1-staygold. YejM enables *E. coli* to thrive in the presence of phages, demonstrating its effectiveness in providing antiphage ability.



## 3.Nickel Microparticle Module

Our [nickel microparticle module](/fudan/description/#_3-nickel-microparticle-module) is designed to efficiently absorb nickel ions and convert them into less toxic microparticles. The microparticles consist of hydrogenases, a carboxysome shell, and reduced nickel, with diameters around 50-80 nm. 

This module comprises two main composite parts: the U module ([BBa_K5115066](https://parts.igem.org/Part:BBa_K5115066)) and the F module ([BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067)). 

The F module includes [BBa_K5115063](https://parts.igem.org/Part:BBa_K5115063) (hox and hyp, with EP targeted to hoxF) and [BBa_K5115060](https://parts.igem.org/Part:BBa_K5115060) (ribozyme + RBS + cso without csoS3 + stem-loop). We expected this design to accumulate hydrogenase with the carboxysome, facilitating a stable environment for nickel reduction. 

The U module functions similarly to the F module, with the main difference being that, in the U module, the EP is combined with hoxU instead of hoxF. The hoxF subunit is essential for electron transport, while hoxU conducts electrons between hoxH and hoxF. This design allows us to compare the effectiveness of different EP subunit combinations.

### Nickel Uptake Ability: U module vs. F module

To determine which module better absorbs nickel and facilitates the reduction of nickel to produce microparticles, we measured the nickel absorption efficiency of the U module and F module.

<div style="text-align: center;" id="fig7">
    <img src="https://static.igem.wiki/teams/5115/ni-results/u-f-modules.png" style='width:70%'>
    <div>
    	<span style="color: gray">Figure 7: Comparison of Ni²⁺ Uptake Efficiency by Different <em>E. coli</em><br>
            <small>The graph shows the percentage of Ni²⁺ absorbed by<em>E. coli</em> expressing indicated modules (<em>E. coli</em> strain: BL21 DE3). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 100 mg/L. The single bacteria colony was picked and grown overnight to reach optical density (OD₆₀₀) > 1. Prepare a sealed 25-mL LB culture in a 250-mL bottle, with: 100 µL overnight bacteria liquid culture, 25 µg/mL Kan, 1 mM methyl viologen dichloride, 100 mg/L NiCl<sub>2</sub>, bubbled with ~250 mL 5.6% hydrogen gas (slowly, with hand-shaking, about 5 minutes). Culture for 30 hours, at 37°C with a rotating speed at 220 rpm. Four biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. Plain BL21 DE3 was used as control. None of the four bacteria with U module was able to grow during overnight culture if induced with 1 mM IPTG, only 1 F module grow. Additional 1 mM IPTG was added into the 25-mL culture of "F induced". ANOVA test shows that all constructs increase Ni²⁺ uptake significantly compared to the control (U module, p = 0.0045; F module, p &lt; 0.0001). P value was calculated using Dunnett’s post-test.</small>
</span>
        <br><br>
    </div>
</div>
According to [Figure 7](fig7), we conclude that the nickel absorption capacity of the F module is superior to that of the U module, especially after induction. Despite not having a nickel absorption part (like nik or NixA), the F module still achieves about 10% nickel absorption. This indicates that a significant amount of Ni<sup>2+</sup> in the cells is reduced by hydrogenase, resulting in a relatively low intracellular Ni<sup>2+</sup> concentration, which activates *E. coli* to actively absorb more nickel.



### Nickel Reduction: F Module

The F-module ([BBa K5115067](https://parts.igem.org/Part:BBa_K5115067)), composed of hydrogenase and carboxysome, reduces nickel ions into nickel microparticles using hydrogen as an electron donor. We cultured F-module *E. coli* in an LB medium containing 100 mg/L nickel ions under an atmosphere filled with 5% hydrogen.

To visualize nickel microparticles in F Module cells, we used osmium tetroxide and uranyl acetate for staining. Osmium tetroxide binds to lipid membranes, enhancing contrast in electron microscopy, while uranyl acetate binds to nucleic acids and proteins, improving the visibility of cellular structures. Nickel microparticles are visible due to their higher electron density. 

<div style="text-align: center;" id="fig7">
    <img src="https://static.igem.wiki/teams/5115/txj/transmission-electron-microscopy.png" style='width:95%'>
    <div>
    	<span style="color: gray">Figure 8. Transmission electron microscopy images of negative stained E. coli expressing MINERAL F module.<br>
        <small>Osmium tetroxide and uranyl acetate were used for the staining A-E. Scale bar shown on the image. (A) Overview of <em>E. coli</em> cells. (B) Sections of bacteria, filled with carboxysome-sized regions (CSR) surrounded by electron dense dots. In one cell, all visual CSR are circled by yellow dash lines. (C) The size of CSR are various, with two examples circled. (D,E) For cells with less electron dense dots, CSR are clear, with the cell in C fully packed with CSR and the cell in D sparsely packed. (F) No uranyl acetate staining. The image confirms that the electron dense dots throughout A-E are not salt crystals but actual metallic particles, which we believe are Ni particles. Three 80-nm square regions are enlarged, showing polyhedral outline of CSR, with Ni particles surrounded.
</small>
</span>
        <br><br>
    </div>
</div>


As shown in [Figure 7](fig7), the F Module exhibits strong nickel absorption capacity, and as observed in [Figure 8](fig8), the absorbed nickel was successfully converted into nickel microparticles, confirming our core concept.



## 4. Hydrogen Supply Module

Given that the production of hydrogen gas by cyanobacteria is well-established in the literature[^3], we did not consider it necessary to test hydrogen production in our study. Instead, we focused on examining the adhesion between E. coli and cyanobacteria to ensure a consistent and sufficient supply of hydrogen.

### Hydrogen Supplement: *E. coli*-cyanobacteria Adhesion

In February, under the guidance of the Fudan iGEM 2023 team members, we repeated last year's *E. coli* / *S. elongatus* co-culture experiment to ensure that *E. coli* could successfully utilize the hydrogen produced by *S. elongatus*. For more details, see BBa_K4765110.

To estimate the adhesion between *E. coli* and cyanobacteria, the optical density (OD600 and OD685) of the supernatant was measured at 0, 2, 6, and 24 hours after mixing the two organisms. A decrease in OD over time indicates that more cells have aggregated and settled out of the suspension, thus reflecting the adhesion efficiency between the two species.

<div style="display: flex; justify-content: space-between; align-items: center;">       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/e.jpg" style="width:80%; height: auto;">           
   </div>       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/s.png" style="width:80%; height: auto;">           
   </div>   
</div>
<div style="text-align: center; margin-top: 10px;">
    <span style="color: gray">Figure 9 & 10: Comparison of the percentage of bacteria remaining in the supernatant after 6 hours between aTc-induced (+) and uninduced (-) samples.</span><br>
       <small>
           The left panel shows the results for <em>E. coli</em> expressing intimin-LCA, while the right panel displays the results for <em>Synechococcus elongatus</em> with intimin-LCA. In both cases, the aTc-induced samples show a significant reduction in the bacteria remaining in the supernatant compared to the uninduced samples, indicating enhanced aggregation. (** indicates statistical significance less than 0.01).</small></span>
</div>
## Summary

In our Nickel Enrichment Module, we discovered that:

1. NixA-F1v is the strongest nickel uptake part, outperforming nik-operon, nik-ribozyme, NixA, and F1v-NixA. ([Figure 1](fig1))
2. RcnR<sup>C35L</sup> improves nickel absorption by inhibiting nickel efflux. ([Figure 3](fig3))

In our Survival Module, we found out that: 

1. Hpn effectively protects *E. coli* in high-nickel environments, therefore improving nickel uptake. ([Figure 4](fig4), [Figure 5](fig5))
2. YejM enables *E. coli* to thrive in the presence of phages. ([Figure 6](fig6))

In our Nickel Microparticle Module, we proved that:

1. The nickel absorption capacity of the F module is superior to that of the U module. ([Figure 7](fig7))
2. The absorbed nickel was successfully converted into nickel microparticles in the F module. ([Figure 8](fig8))

In our Hydrogen Supply Module, we made sure that:

1. The hydrogen supplement and adhesion between *E. coli* and cyanobacteria is possible.

These results are just examples of our wet lab achievements. Other accomplishments are available on our [Measurement](/fudan/measurement/), [Software](/fudan/software/), [Hardware](/fudan/hardware/), and [Safety](/fudan/safety/) pages.



## References

[^1]: Abramson, J., Adler, J., Dunger, J., Evans, R., Green, T., Pritzel, A., Ronneberger, O., Willmore, L., Ballard, A. J., Bambrick, J., Bodenstein, S. W., Evans, D. A., Hung, C.-C., O’Neill, M., Reiman, D., Tunyasuvunakool, K., Wu, Z., Žemgulytė, A., Arvaniti, E., … Jumper, J. M. (2024). Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature*, *630*(8016), 493–500. [https://doi.org/10.1038/s41586-024-07487-w](https://doi.org/10.1038/s41586-024-07487-w) 
[^2]: Hernandez, J. A., Micus, P. S., Sunga, S. A. L., Mazzei, L., Ciurli, S., & Meloni, G. (2024). Metal selectivity and translocation mechanism characterization in proteoliposomes of the transmembrane NiCoT transporter NixA from Helicobacter pylori. *Chemical Science*, *15*(2), 651–665. [https://doi.org/10.1039/D3SC05135H](https://doi.org/10.1039/D3SC05135H) 
[^3]: Dutta, D., De, D., Chaudhuri, S., & Bhattacharya, S. K. (2005). Hydrogen production by Cyanobacteria. Microbial Cell Factories, 4(1), 36. [https://doi.org/10.1186/1475-2859-4-36]( https://doi.org/10.1186/1475-2859-4-36)

