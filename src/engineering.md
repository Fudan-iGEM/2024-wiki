---
title: Engineering
headergif: https://static.igem.wiki/teams/5115/header/engineering-header.gif

author:
- name: Ruiwen Ma
  url: /fudan/team/#ruiwen-ma
- name: Kevin Qi
  url: /fudan/team/#kevin-qi
---

<br><br>Throughout our project, we encountered problems in [Parts](/fudan/parts/), [Measurement](/fudan/measurement/), [Software](/fudan/software/), [Hardware](/fudan/hardware/), [Human Practices](/fudan/human-practices/), [Inclusivity,](/fudan/inclusivity/) and [Entrepreneurship](/fudan/entrepreneurship/), we solved them following iterations of the DBTL cycle (Design, Build, Test, Learn). Below are the steps we went through to develop our nickel module - part number [BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068).

## Cycle 1

### Cycle 1 Design

To make our *Escherichia coli* efficiently absorb nickel ions, we need active [nickel uptake](/fudan/description/#_1-nickel-enrichment-module), which includes a nickel transport protein called nikABCDE[^1]. Because nikA is the rate-limiting enzyme, according to [our previous observations](https://parts.igem.org/Part:BBa_K4765129), we put it as the last one when we connect these CDS with the Ribozyme-Assisted Polycistronic expression system (pRAP)[^2].

As for the other nickel transport protein NixA ([BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071))[^3], we also made dimerizable versions ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086), [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087)), using a well-studied rapamycin-induced protein dimerization system [^5].

### Cycle 1 Build

We built on the work done previously [BBa_K2652006](https://parts.igem.org/Part:BBa_K2652006) and created four new parts to test our nickel uptake module. These include ribozyme-connected nik operon [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082), NixA [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071) (additional stop codon was added when testing its own), NixA-F1v [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086), and F1v-NixA [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087) (F1v is short for FKBP F36V mutant). 

### Cycle 1 Test

To evaluate how well our *E. coli* absorbs nickel, we measured the nickel concentration in the bacterial supernatant after [making the standard curve](/fudan/experiments/#ni2-concentration-measurement). A lower nickel concentration in the supernatant indicates that more nickel has been absorbed by *E. coli*. This method allows us to calculate the percentage of nickel that *E. coli* uptakes during culture. 

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/ni-results/30-mg-l-single-plasmid.png" style='width:70%'>
    <div>
    	<span style="color: gray">Figure 1: Comparison of Ni²⁺ Uptake Efficiency by Different <em>E. coli</em><br>
            <small>The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 30 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 30 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Regarding <a href="https://parts.igem.org/Part:BBa_K5115086">NixA-F1v</a> and <a href="https://parts.igem.org/Part:BBa_K5115087">F1v-NixA</a>, AP20187 is a synthetic dimerizer that can be used to induce homodimerization of F1v domain. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. ANOVA test shows that all constructs increase Ni²⁺ uptake significantly compared to the control. Bacteria expressing NixA-F1v exhibit the highest Ni²⁺ uptake efficiency (p = 0.0052, Dunnett’s post-test).</small>
</span>
        <br><br>
    </div>
</div>



As illustrated in [Figure 1](#fig1), NixA-F1v demonstrates the highest efficiencies for nickel uptake among these parts. We also conducted nickel absorption tests with various starting Ni²⁺ concentrations (20 mg/L and 50 mg/L). For details, please visit our [Results](/fudan/results/#) page.

### Cycle 1 Learn

NixA-F1v performs better than F1v-NixA, likely due to its fused F1v could reside better in the cytosol. We learn this by [using AlphaFold3](/fudan/results/#) to analyze its structure and identified factors contributing to its effective nickel uptake. However, NixA-F1v achieved 25% nickel absorption during the 5-hour culture, and we are not fully satisfied. We speculate this may be due to *E. coli* facing survival pressure in nickel-rich environments.


## Cycle 2

### Cycle 2 Design

We aim to reduce the survival pressure of *E. coli* by enhancing its tolerance, thereby improving its nickel absorption efficiency. We discovered the Hpn protein derived from *H. pylori*, which contains a 60-residue histidine that can bind to nickel ions and lower intracellular nickel ion levels[^6]. This protein forms multimers, exhibits changes in its &alpha;-helix and &beta;-fold secondary structure upon binding to nickel.

### Cycle 2 Build

We created the part ribozyme connected Hpn ([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036)), and connect this part with NixA-F1v ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086)) in pRAP[^2].

### Cycle 2 Test

We evaluated the nickel uptake efficiency of these *E. coli* in a medium with initial concentration of 50 mg/L of nickel. As shown in [Figure 2](#fig2), the nickel absorption ability of the Hpn + NixA-F1v bacteria was significantly higher than NixA-F1v alone.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-hpn-af.png" style="height:480px">
    <div>
    	<span style="color: gray">Figure 2: Comparison of Ni²⁺ Uptake Efficiency, with and without Hpn<br>
<small>The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 50 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 50 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. The results indicate that <em>E. coli</em> expressing Hpn demonstrated higher Ni²⁺ uptake efficiency compared to <em>E. coli</em> without Hpn expression.</small>
</span>
        <br><br>
    </div>
</div>


### Cycle 2 Learn

We confirmed that expressing Hpn does enhance *E. coli*'s tolerance to nickel, and improving overall nickel uptake efficiency, resulting in over 45% absorption with an initial nickel concentration of 50 mg/L.


## Cycle 3

### Cycle 3 Design

Could we improve further? We discovered that wild type *E. coli* expresses RcnA[^4], especially at high Ni<sup>2+</sup> concentration to efflux nickel as a protective mechanism. while it was not successful for us to knockout *rcnA* in *E. coli*, fortunately, over-expression a mutant RcnR (C35L) could limit the induction of rcnA[^7], avoid *E. coli*'s ability to efflux nickel. RcnR is a transcription factor, responds to nickel ions and increases *rcnA* expression. Its C35L mutant avoid its nickel sensing, thus no RcnA.

### Cycle 3 Build

We built the part RcnR C35L ([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)), with the Cys residue at position 35 changed to Leu. This alteration prevents RcnR releasing from DNA upon high nickel, thereby limiting RcnA's induction under high nickel concentrations. Ultimately, this ensures the absorbed nickel remains within our engineered *E. coli*.

### Cycle 3 Test

After making the constructs, we measured the efficiency of nickel uptake by bacteria. As shown in [Figure 3](#fig3), RcnR<sup>C35L</sup> improved nickel absorption in *E. coli*, both with nik-ribozyme and NixA. This result supports our design by inhibiting nickel efflux, effectively trapping Ni<sup>2+</sup> within the cells.

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-rcnr-nik-nix.png" style="width:70%">
    <div>
    	<span style="color: gray">Figure 3: Comparison of Ni²⁺ Uptake Efficiency, with and without RcnR<sup>C35L</sup><br>
<small>The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 20 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 20 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5. Culture for 5 hours, at 37°C with a rotating speed at 220 rpm. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. RcnR<sup>C35L</sup> refers to a mutation in which cysteine (C) at position 35 in the RcnR protein was substituted with leucine (L). The results indicate that <em>E. coli</em> expressing RcnR<sup>C35L</sup> consistently has higher Ni²⁺ uptake efficiency compared to <em>E. coli</em> without RcnR<sup>C35L</sup> expression.</small>
</span>
        <br><br>
    </div>
</div>


### Cycle 3 Learn

Through our design, build and tests, we found that:  

1. Among all the nickel transport proteins, our engineered dimerized NixA-F1v is the most effective.  
2. Expressing Hpn reduces the burden on *E. coli* by enhancing its tolerance to nickel, leading to improved nickel absorption.
3. RcnR<sup>C35L</sup> helps to retain absorbed nickel in *E. coli* by inhibiting its efflux.  

Next, we integrate these parts togeter and create our nickel module ([BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068)), which effectively increases nickel concentration in the cytosol, provides a suitable condition for our [hydrogenases](/fudan/description/#_3-nickel-microparticle-module). Please refer to our [Part Collection](/fudan/part-collection) page to see how it is used.

## Summary

These DBTL cycles are just one example of our project engineering processes. Other examples are available at our [Measurement](/fudan/measurement/), [Software](/fudan/software/), [Hardware](/fudan/hardware/), [Human Practices](/fudan/human-practices/), [Inclusivity](/fudan/inclusivity/) and [Entrepreneurship](/fudan/entrepreneurship/) pages.


## References

[^1]: Dosanjh, N. S., & Michel, S. L. (2006). Microbial nickel metalloregulation: NikRs for nickel ions. *Curr Opin Chem Biol*, *10*(2),123-130. [https://doi.org/10.1016/j.cbpa.2006.02.011](https://doi.org/10.1016/j.cbpa.2006.02.011)
[^2]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143.[https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^3]: Hernandez, J. A., Micus, P. S., Sunga, S. A. L., Mazzei, L., Ciurli, S., Meloni, G. (2024). Metal selectivity and translocation mechanism characterization in proteoliposomes of the transmembrane NiCoT transporter NixA from Helicobacter pylori. *Chem Sci*, *15*(2), 651-665. [https://doi.org/10.1039/d3sc05135h](https://doi.org/10.1039/d3sc05135h)
[^4]: Koch, D., Nies, D. H., & Grass, G.(2007). The RcnRA (YohLM) system of Escherichia coli: a connection between nickel, cobalt and iron homeostasis. *Biometals*, *20*(5), 759-771. [https://doi.org/10.1007/s10534-006-9039-6](https://doi.org/10.1007/s10534-006-9039-6) 
[^5]: Clackson, T., et al. (1998). Redesigning an FKBP-ligand interface to generate chemical dimerizers with novel specificity. *Proc Natl Acad Sci U S A*, *95*(18):10437-42. [https://doi.org/10.1073/pnas.95.18.10437](https://doi.org/10.1073/pnas.95.18.10437)
[^6]: Ge, R., Watt, R. M., Sun, X., Tanner, J. A., He, Q.-Y., Huang, J.-D., & Sun, H. (2006). Expression and characterization of a histidine-rich protein, Hpn: Potential for Ni2+ storage in Helicobacter pylori. *Biochemical Journal*, *393*(Pt 1), 285–293. [https://doi.org/10.1042/BJ20051160](https://doi.org/10.1042/BJ20051160)
[^7]: Higgins, K. A., Chivers, P. T., & Maroney, M. J. (2012). Role of the N-terminus in Determining Metal-Specific Responses in the E. coli Ni- and Co-Responsive Metalloregulator, RcnR. *Journal of the American Chemical Society*, *134*(16), 7081–7093. [https://doi.org/10.1021/ja300834b](https://doi.org/10.1021/ja300834b)
