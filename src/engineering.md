---
title: Engineering
headergif: https://static.igem.wiki/teams/5115/header/engineering-header.gif

author:
- name: Ruiwen Ma
  url: /fudan/team/#ruiwen-ma
- name: Kevin Qi
  url: /fudan/team/#kevin-qi
---

## Nickel Uptake

### Cycle 1 Design

To make our Escherichia coli efficiently absorb nickel ions, we employed a [nickel uptake system](/description/#_1-nickel-uptake-system), which includes a nickel transport protein called **nikABCDE**[^1], with the Ribozyme-Assisted Polycistronic expression system (pRAP)[^2] to ensure balanced expression. We also made use of Dimerization of **NixA** can be facilitated by FKBP and zippers, which help to improve transport efficiency[^3].

### Cycle 1 Build

We built on the work done with the nik operon part [BBa_K2652006](https://parts.igem.org/Part:BBa_K2652006) and created four new parts to improve the nickel uptake system. These include **the ribozyme-connected nik operon** [BBa_K5115082](https://parts.igem.org/Part:BBa_K5115082), **NixA** [BBa_K5115071](https://parts.igem.org/Part:BBa_K5115071), **NixA-F1v** [BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086), and **F1v-NixA** [BBa_K5115087](https://parts.igem.org/Part:BBa_K5115087). 

### Cycle 1 Test

To evaluate how well our *E. coli* absorbs nickel, we measured the nickel concentration in the bacterial supernatant (see [Experiment](fudan/experiments/#ni2-measurement)). A lower nickel concentration in the supernatant indicates that more nickel has been absorbed by the *E. coli*. This method allows us to calculate the percentage of nickel that *E. coli* uptakes in the culture medium. 

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/ni-results/30-mg-l-single-plasmid.png" style='width:100%'>
    <div>
    	<span style="color: gray">Figure 1: Comparison of Ni²⁺ Uptake Efficiency by Different <em>E. coli</em> in 30 mg/L Ni²⁺ 
The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 30 mg/L Ni²⁺ (<em>E.coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 30 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5, and equal volumes of the suspension were added to each tube (T, 37°C; SR, 220 rpm). Regarding NixA-F1v and F1v-NixA, AP20187 is a synthetic dimerizer that can be used to induce homodimerization of FV domain containing fusion proteins. Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. ANOVA test shows that all constructs increase Ni²⁺ uptake significantly compared to the control. Among the constructs, NixA-F1v exhibits the highest Ni²⁺ uptake efficiency, higher than the control (P = 0.0052, Dunnett’s post test).
</span>
        <br><br>
    </div>
</div>

As illustrated in [Figure 1](fig1), NixA-F1v demonstrates the highest efficiencies for nickel uptake among these parts. We also conducted nickel absorption tests at various concentrations; For details, see [results](/fudan/results/).<@@二级link to be added>

### Cycle 1 Learn

NixA-F1v exhibits high nickel absorption efficiency, likely due to its protein structure. We used AlphaFold3 to analyze its structure and identified factors contributing to its effective nickel uptake. For details, see [results](/fudan/results/).<@@二级link to be added> However,NixA-F1v achieved only 25% nickel absorption, and we are not fully satisfied with this outcome. We believe this may be due to *E. coli* facing survival pressure in nickel-rich environments, which could limit its ability to absorb nickel.



### Cycle 2 Design

We aim to reduce the survival pressure of *E. coli* by enhancing its tolerance, thereby improving its nickel absorption efficiency. We discovered the Hpn protein derived from *H. pylori*, which contains a 60-residue histidine that can bind to nickel ions and lower intracellular nickel ion levels. This protein, which forms multimers in solution, exhibits changes in its A-helix and β-fold secondary structure upon binding to nickel.[^5]

### Cycle 2 Build 

We created the part **ribozyme connected Hpn** ([BBa_K5115036](https://parts.igem.org/Part:BBa_K5115036)). By combining this part with **NixA-F1v** ([BBa_K5115086](https://parts.igem.org/Part:BBa_K5115086)), we developed a double plasmid *E. coli* system.

### Cycle 2 Test

We evaluated the nickel uptake efficiency by *E. coli* in a medium containing 50 mg/L of nickel. As shown in [Figure 2](fig2), the nickel absorption ability of the **Hpn + NixA-F1v** strain was significantly higher than that of the NixA-F1v strain alone.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-hpn-af.png" style='width:100%'>
    <div>
    	<span style="color: gray">Figure 2: Comparison of Ni²⁺ Uptake Efficiency by <em>E. coli</em> with and without Hpn
The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 50 mg/L Ni²⁺ (<em>E. coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 50 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5, and equal volumes of the suspension were added to each tube (T, 37°C; SR, 220 rpm). Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. The results indicate that E. coli expressing Hpn demonstrated higher Ni²⁺ uptake efficiency compared to E. coli without Hpn expression.
</span>
        <br><br>
    </div>
</div>

### Cycle 2 Learn

We confirmed that Hpn does enhance *E. coli*'s tolerance to nickel, reducing survival pressure and improving nickel uptake efficiency, resulting in 45% absorption at a nickel concentration of 50 mg/L.



### Cycle 3 Design

We also discovered that wild type *E. coli* expresses RcnA[^4], especially at high Ni<sup>2+</sup> concentration to efflux nickel and ensure cell safety. With the introduction of Hpn, this function becomes less necessary. Fortunately, the high expression of RcnR can inhibit the induction of rcnA by metal cations, allowing us to retain nickel ions within the *E.coli*. RcnR responds to nickel ions by decreasing its affinity for DNA.

### Cycle 3 Build

We built the part **RcnR_C35L**([BBa_K5115000](https://parts.igem.org/Part:BBa_K5115000)), specifically changing the Cys residue at position 35 to Leu. This alteration prevents RcnR from decreasing its affinity for DNA, thereby inhibiting RcnA's response to high nickel concentrations. Ultimately, this ensures that the absorbed nickel remains within our *E.coli*.

### Cycle 3 Test

Again, we measured the efficiency of *E. coli* nickel uptake. As shown in [Figure 3](fig3), RcnR<sup>C35L</sup> improved nickel absorption in *E. coli*, both with nik-ribozyme and NixA. We speculate that we successfully inhibited nickel efflux by RcnR<sup>C35L</sup>, effectively trapping Ni<sup>2+</sup> within the cells.

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/ni-results/double-plasmids-rcnr-nik-nix.png" style='width:100%'>
    <div>
    	<span style="color: gray">Figure 3: Comparison of Ni²⁺ Uptake Efficiency by <em>E. coli</em> with and without RcnR<sup>C35L</sup>
The graph shows the percentage of Ni²⁺ concentration absorbed by <em>E. coli</em> expressing different constructs after 5 hours of growth in a medium containing 20 mg/L Ni²⁺ (<em>E.coli</em> strain: BL21 DE3, induced with 1 mM IPTG). Ni²⁺ uptake was calculated based on the difference between initial and final concentrations in the supernatant, divided by 20 mg/L. The optical density (OD₆₀₀) of the initial bacterial suspension was adjusted to 0.5, and equal volumes of the suspension were added to each tube (T, 37°C; SR, 220 rpm). Three biological replicates were performed for each condition, and error bars represent the standard errors of the means (SEM) of these replicates. RcnR<sup>C35L</sup> refers to a mutation in which cysteine (C) at position 35 in the RcnR protein was substituted with leucine (L). The results indicate that <em>E. col</em> expressing RcnR<sup>C35L</sup> consistently demonstrated higher Ni²⁺ uptake efficiency compared to <em>E. coli</em> without RcnR<sup>C35L</sup> expression.
</span>
        <br><br>
    </div>
</div>

### Cycle 3 Learn

Through our design and tests, we found that:  
1. Among all the nickel-transport-protein parts, **NixA-F1v** is the most effective.  
2. **Hpn** reduces the survival burden on *E. coli* by enhancing its tolerance to nickel, improving absorption efficiency.  
3. **RcnR<sup>C35L</sup>** helps retain absorbed nickel in *E. coli* by inhibiting its efflux.  

Next, we plan to integrate these parts to create **a nickel module** ([BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068)), which will provide a solid foundation for our subsequent systems, such as the Nickel Microparticle System.

These DBTL cycles are just some examples of our wet lab engineering. Please refer to the main pages of [our parts on the Registry](https://parts.igem.org/cgi/partsdb/pgroup.cgi?pgroup=iGEM2024&group=Fudan) for more details.



## References

[^1]: Dosanjh, N. S., & Michel, S. L. (2006).Microbial nickel metalloregulation: NikRs for nickel ions. *Curr Opin Chem Biol*, *10*(2),123-130. [https://doi.org/10.1016/j.cbpa.2006.02.011](https://doi.org/10.1016/j.cbpa.2006.02.011)
[^2]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2023). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143.[https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^3]: Metal selectivity and translocation mechanism characterization in proteoliposomes of the transmembrane NiCoT transporter NixA from Helicobacter pylori. *Chem Sci*, *15*(2), 651-665. [https://doi.org/10.1039/d3sc05135h](https://doi.org/10.1039/d3sc05135h)

[^4]: Koch, D., Nies, D. H., & Grass, G.(2007). The RcnRA (YohLM) system of Escherichia coli: a connection between nickel, cobalt and iron homeostasis. *Biometals*, *20*(5), 759-771. [https://doi.org/10.1007/s10534-006-9039-6](https://doi.org/10.1007/s10534-006-9039-6) 


