---
title: Measurement
author:
  name: Yi Shi
  url: /fudan/team/#yi-shi
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

## Introduction

In our [MINERAL](/description/) project, we are working towards improving *Escherichia coli*'s ability to absorb nickel ions from water and convert them into safer nickel nanoparticles using hydrogenase enzymes. This involves introducing a variety of genetic modules into *E. coli* through plasmid transformation, each responsible for functions like nickel uptake, tolerance, and the assembly of our "microfactory."

However, these plasmids can impose varying metabolic demands on the host bacteria, making it essential to evaluate their impact on *E. coli*'s growth and overall fitness. To achieve controlled expression and minimize leakage that could hinder cell growth, we employ both arabinose and IPTG for induction in our *E. coli* strain. This dual induction strategy allows for optimal conditions for expressing our target proteins.However, different plasmids can impose varying metabolic burdens on the host cells, making it essential to assess their impact on *E. coli*'s growth and overall fitness.

Rather than relying solely on traditional growth curves, which can be time-consuming, we’ve chosen to implement "spot assays." This method provides a quicker and more efficient way to assess bacterial growth under stress, giving us valuable insights into how different plasmid constructs influence bacterial performance in nickel-rich environments.The data generated from these assays will also support the development of our [Software](/fudan/software/), which is designed to assess the metabolic pressure exerted by plasmids on *E. coli*, helping us validate our findings and optimize our engineering efforts.

## Method overview

### Key Characteristics and Functionality

The spot assay, traditionally used in yeast research, is a widely adopted technique for assessing cell growth and viability under various stress conditions. This method is particularly valuable for comparing how different genetic modifications, such as plasmid transformations, affect microbial growth in a controlled and high-throughput manner[^1]. In our  [MINERAL](/description/) project, where *E. coli* is engineered to absorb and convert nickel ions, the spot assay serves as an essential tool to evaluate how these transformations impact bacterial fitness.

#### Applicability and Advantages

In a spot assay, dilutions of bacterial culture are spotted onto agar plates and incubated for colony formation[^2]. The number and size of colonies reveal how different plasmid constructs influence *E. coli* growth in varying nickel concentrations.

This method offers several advantages: it requires minimal materials, provides rapid results (with evaluations possible within 12 hours), and allows for high-throughput testing of multiple strains or plasmids simultaneously. The assay’s sensitivity makes it ideal for detecting subtle growth differences, enabling efficient assessment of plasmid-induced metabolic changes[^3]. By utilizing spot assays, we can systematically identify optimal plasmid combinations that enhance *E. coli*’s performance in nickel-rich environments while minimizing metabolic burdens.

## Protocol

**Step 1: Preparation of Bacterial Culture**

- Control group

1. Inoculate a single colony of *E. coli* BL21(AI) containing the plasmid of interest in 3 mL of LB broth supplemented with the appropriate antibiotic.
2. Shake at 220 rpm for 5 hours at 37°C.

- Experimental group

1. Inoculate a single colony of *E. coli* BL21(AI) containing the plasmid in 3 mL of LB broth with the corresponding antibiotic. 
2. Adding IPTG to a final concentration of 1 mM and arabinose to 0.2% during the incubation. 
3. Shake at 220 rpm for 5 hours at 37°C.

**Step 2: Normalization**

1. After growth, measure the optical density (OD<sub>600</sub>) of all samples using a spectrophotometer.
2. Normalize the cultures to an OD<sub>600</sub> of 0.6 by diluting them in LB broth.

**Step 3: Dilution Series**

1. Transfer 20 µL of the normalized culture to row A of a 96-well plate. 
2. Fill the wells in rows A-E with 180 µL of LB broth using a multichannel pipette.
3. Conduct a 1:10 serial dilution by transferring 20 µL of culture from each well in row A to the corresponding well in row B. Mix well and repeat this process down to row E.

**Step 4: Spotting and Incubation**

1. Sterilize the spotter by submerging it in 70% ethanol and briefly flaming it after each transfer. Ensure the spotter has cooled down adequately after flaming before making the next transfer.
2. Immediately transfer equal volumes (typically 5 µL) of diluted culture from each well using a 48-prong spotter(frogger)  onto dry agar plates containing selective media.
3. Incubate the agar plates at 37°C for 12 hours.

**Step 5: Observation and Analysis**

1. Capture high-quality images of the spotting assay plates post-incubation with consistent lighting and focus.
2. Choose an appropriate dilution (typically 1:10,000) that shows clear growth differences among samples for quantification.
3. Open the processed image in ImageJ and use the circular selection tool to outline the smallest spot in the chosen dilution, excluding the background.
4. Measure the gray value in five different plate locations (corners and center) using the circular selection, then click “Analyze” and “Measure” to obtain the mean values.
5. Using the same circular selection, measure the gray value of each colony in the chosen dilution and record these values in an Excel spreadsheet.
6. Subtract the mean background gray value from each of the gray values of the spots measured.
7. Repeat this process for all plates. The resulting values will reflect the growth levels of each biological replicate, including the control.
8. Calculate the mean and standard deviation of the relative growth values obtained from the previous step for three or more replicates.
9. Plot the mean relative growth values with error bars (± standard deviation) on a bar graph to illustrate the impact of the plasmid on the stress experienced by the strains.

**Special Tips**

To ensure reproducibility for other iGEM teams, pay special attention to the spotter's use: when transferring samples, confirm that each prong captures an equal-sized droplet, and use a steady, vertical motion to maintain uniformity. Additionally, make sure that all samples are normalized to the same initial  OD<sub>600</sub> to ensure accurate comparisons across experiments. Finally, when selecting areas for measurement in ImageJ, be mindful of the size of the selection; it should encompass the entire spot while excluding background to avoid skewing the gray value readings.


## Results

To validate our methodology, we utilized a structured approach to investigate the impact of various plasmids on bacterial growth. We focused on the plasmids listed below, which serve as the foundation for our experiments.

<div style="text-align: center;">
   <p><small style="color: gray">Table 1: Plasmid Information
    <br>
A detailed table outlining the plasmid No., Parts ID, descriptions and resistance, which provides a clear overview of the plasmids employed in our study.</small></p>
</div>

| No.  | Parts ID     | description                                           | resistance |
| ---- | :----------- | ----------------------------------------------------- | ---------- |
| #0   | BBa_K4162001 | StayGold                                              | Amp        |
| #1   | BBa_K4162001 | StayGold = (n2)oxStayGold(c4)v2.0                     | Kan        |
| #2   | BBa_K4162009 | ribozyme + B0_RBS + crtE                              | Kan        |
| #3   | BBa_K4162010 | ribozyme + T7_RBS + crtE                              | Kan        |
| #4   | BBa_K4162011 | ribozyme + J6_RBS + crtE                              | Kan        |
| #5   | BBa_K4162012 | ribozyme + B0_RBS + crtB                              | Kan        |
| #6   | BBa_K4162013 | ribozyme + T7_RBS + crtB                              | Kan        |
| #7   | BBa_K4162014 | ribozyme + J6_RBS + crtB                              | Kan        |
| #8   | BBa_K4162016 | ribozyme + T7_RBS + crtI                              | Kan        |
| #9   | BBa_K4162019 | ribozyme + T7_RBS + crtY                              | Kan        |
| #10  | BBa_K4162022 | ribozyme + T7_RBS + BCMO                              | Amp        |
| #11  | BBa_K4162023 | ribozyme + T7_RBS + ybbO                              | Amp        |
| #12  | BBa_K4162101 | ribozyme+RBS+CDS module: crtIY                        | Kan        |
| #13  | BBa_K4162103 | ribozyme+RBS+CDS module: crtBE                        | Kan        |
| #14  | BBa_K4162106 | ribozyme+RBS+CDS module: crtIB                        | Kan        |
| #15  | BBa_K4162107 | ribozyme+RBS+CDS module: crtEY                        | Kan        |
| #16  | BBa_K4162108 | ribozyme+RBS+CDS module: crtEBI                       | Kan        |
| #17  | BBa_K4162112 | ribozyme+RBS+CDS module: crtIYB                       | Kan        |
| #18  | BBa_K4162021 | ribozyme+RBS+CDS module: crtIYEB                      | Kan        |
| #19  | BBa_K4765022 | mScarlet                                              | Kan        |
| #20  | BBa_K4765111 | Twister P1 + T7_RBS + AnAFP + stem-loop               | Kan        |
| #21  | BBa_K4765112 | Twister P1 + T7_RBS + SAHS 33020 +  stem-loop         | Kan        |
| #22  | BBa_K4765113 | Twister P1 + T7_RBS + H. ex mtSSB +  stem-loop        | Amp        |
| #23  | BBa_K4765117 | ribozyme connected: H. ex mtSSB + SAHS  33020         | Kan        |
| #24  | BBa_K4765126 | ribozyme connected: H. ex mtSSB + SAHS  33020 + AnAFP | Amp        |
| #25  | BBa_K4765022 | mScarlet                                              | Kan        |

Next, we illustrate the colony growth patterns observed in both control and experimental groups following serial dilutions, showcasing the differences in colony morphology and density that emerged from each treatment condition. These images highlight how each plasmid influenced bacterial proliferation, providing a clear visual representation of the experimental outcomes.

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/5115/measurement-sy/2024-09-27-01-02-14.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Spot Assay Results of Colonies at 12 hours of incubation at 37°C.
    <br>
This figure illustrates the colony growth patterns observed in both the control and experimental groups following serial dilutions. Odd-numbered rows represent the control group, while even-numbered rows show the experimental group. From left to right, the columns correspond to the initial culture(A), dilutions of 1:10(B), 1:100(C), 1:1,000(D), and 1:10,000(E).</small></p>
</div>
</div>

As the dilutions progress, a noticeable decrease in colony density is observed, with the experimental group displaying different growth characteristics compared to the control group, indicating the impact of plasmid expression on bacterial proliferation.

Subsequently, after measuring the gray value of each group of colonies using [ImageJ](https://imagej.nih.gov/ij/), we quantitatively compare the growth rates of different plasmid-expressing strains, normalized to the best-performing strain shown in [Figure 2](#fig-2).

<div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/zsl/anafp-survival-curve1.png"
style='width:70%'>
<br>
<div>
  <p><small style="color: gray">Figure 2: Relative Growth of <em> E. coli</em> Under Different Plasmid Conditions 
   <br>
This bar graph compares the growth rates of bacterial strains expressing various plasmids. The growth is normalized to the strain with the highest performance (100% growth rate). The bars indicate the percentage decline in growth rate for each strain, with experimental measurements juxtaposed against computational predictions, offering insights into plasmid performance.</small></p>
</div>
</div>

## Previous inspiring Methodologies in iGEM

In previous iGEM projects, several methods have provided valuable insights that inspire our approach, highlighting related concepts that informed our experimental design.

One such application involved assessing [the inhibition of bacteriophage Lambda by dCas12a using a bacteriophage spot assay](https://2019.igem.org/Team:Wageningen_UR/Results/Phage_Repression). While their spot assay provided valuable insights, it had limitations in quantification and visual clarity, which could obscure subtle differences in growth. Inspired by these observations, we developed our approach to enhance quantification and improve the visual representation of results, allowing for a more nuanced analysis of plasmid expression effects on bacterial strains.

Another relevant study examined [the effect of glucanase expression on cell wall integrity](https://2019.igem.org/Team:Tartu_TUIT/Results) by testing cultures under hypo-osmotic stress and in the presence of DMSO. However, their method lacked precision, as the absence of a spotter led to uneven colony distributions, making it difficult to achieve consistent areas for analysis. This limitation resulted in qualitative rather than quantitative comparisons, highlighting the need for improved measurement techniques.

The [ETH Zurich spot-plaque assay protocol](https://static.igem.org/mediawiki/2019/8/8d/T--ETH_Zurich--spot-plaque-assay-protocol.pdf) outlines a systematic approach for assessing bacteriophage activity against bacterial cultures. While the protocol provides a foundational approach, it could benefit from more detailed documentation to enhance reproducibility. Furthermore, ensuring a standardized initial OD<sub>600</sub> is essential for reliable comparisons, and this has inspired us to refine our methodology for improved consistency in our experiments. 

These prior studies have guided our improvements in methodology, particularly in quantifying the effects of plasmid expression on bacterial strains. By adopting advanced imaging techniques and utilizing ImageJ for precise quantification, we aim to overcome limitations observed in previous projects, such as inefficiencies in enzyme activity and measurement variability. Our approach not only builds upon these foundational concepts but also enhances them, ensuring a more robust investigation into the effects of our engineered constructs.

## Summary

This measurement approach is designed to be easily repeated by other iGEM teams, with a **well-documented** protocol that outlines each step clearly. Our team utilized this methodology to assess the growth stress effects of various plasmids introduced into *E. coli*, providing essential data to inform [Software](/fudan/software/) development aimed at optimizing microbial performance.

Importantly, our method can be **broadly applied across various research projects**, including those investigating plasmid impacts on metabolic pathways, gene expression levels, and stress responses in different environmental conditions. It is particularly useful for projects focused on antibiotic resistance, enzyme activity assays, synthetic circuit efficiency, and metabolic engineering. By integrating appropriate controls to validate the measurement process and calibrate units, we ensured the reliability of our results, promoting a standardized approach that can enhance experimental rigor in diverse synthetic biology applications.

## References

[^1]: Petropavlovskiy, A. A., Tauro, M. G., Lajoie, P., & Duennwald, M. L. (2020). A Quantitative Imaging-Based Protocol for Yeast Growth and Survival on Agar Plates. *STAR protocols*, *1*(3), 100182. https://doi.org/10.1016/j.xpro.2020.100182

[^2]: Sahu, S. R., Utkalaja, B. G., Patel, S. K., & Acharya, N. (2023). Spot Assay and Colony Forming Unit (CFU) Analyses-based sensitivity test for *Candida albicans* and *Saccharomyces cerevisiae*. *Bio-protocol*, *13*(21), e4872. https://doi.org/10.21769/BioProtoc.4872
[^3]: Petropavlovskiy, A. A., Tauro, M. G., Lajoie, P., & Duennwald, M. L. (2020). A Quantitative Imaging-Based Protocol for Yeast Growth and Survival on Agar Plates. *STAR protocols*, *1*(3), 100182. https://doi.org/10.1016/j.xpro.2020.100182
