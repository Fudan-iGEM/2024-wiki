---
title: Measurement
author:
  name: Yi Shi
  url: /fudan/team/#yi-shi
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif
---

## Introduction

In our [MINERAL](/fudan/description/) project, we are working towards improving *Escherichia coli*'s ability to absorb nickel ions from wastewater and convert them into biosafe [nickel particles](/fudan/description/#_3-nickel-microparticle-module) using hydrogenase enzymes. This involves introducing a variety of genetic modules into *E. coli* using plasmid transformation. Different DNA modules are responsible for functions like nickel uptake, nickel tolerance, and concentrated nickel reduction in bacteria cytosol.

These genetic modules would impose varying metabolic demands on the host bacteria, making it essential to evaluate their impact on *E. coli*'s overall fitness, if we want our engineered bacteria to work healthly.

Rather than relying solely on bacteria growth curves from OD<sub>600</sub> measurement, which can be time-consuming, we’ve adapted Spot Assay from yeast genetics studies. This method provides an efficient approach to assess bacterial growth over a large number of samples, giving us valuable insights into how different plasmids influence bacterial growth. [The data](https://static.igem.wiki/teams/5115/measurement-sy/spot-assay-data.csv) generated from these spots also support the development of our [Software](/fudan/software/), which is designed to predict the metabolic pressure exerted by plasmids on *E. coli*, helping us optimizing our engineering efforts.

<div style="text-align: center;" id="fig-00">
    <img src="https://static.igem.wiki/teams/5115/measurement-sy/spot-essay.png" style='width:90%'>
    <div>
        <span style="color:gray">Figure 1: Baseline Growth of <em>E. coli</em> in Spot Assay.<br>
          <small>
            Indicated plasmids (listed in <a href="#tab1">Table 1</a>) were used to transform bacteria BL21AI. Single colony was picked from the transformants, and grow in liquid LB with 25 μg/ml Kan, until OD<sub>600</sub> reach 0.6. Normalized liquid bacteria culture was used for Spot Assay, with a serial dilutions as indicated. Various growth condition suggests different plasmid burdens, likely due to the leaky expression.</small>
        </span>
        <br><br>
    </div>
   <br><br>
</div>

To achieve well controlled expression and minimize leakage that could hinder bacteria growth, we chose *E. coli* strain BL21AI, which is an *E. coli* B/r strain and does not contain the *lon* protease. It is also deficient in the outer membrane protease, OmpT. The lacking both reduces degradation of heterologous proteins expressed in this strain, suitable for testing plasmid burden. The strain BL21AI carries a chromosomal insertion of a cassette containing the T7 RNA polymerase[^4] gene in the *araB* locus[^5], allowing expression of T7 RNAP to be regulated by the araBAD promoter. To test a plasmid's burden, we induced with both 0.2% L-arabinose and 1 mM IPTG. This induction strategy allows for optimal conditions for expressing our target proteins, thus testing plasmid burden. However, some plasmids still leaks in BL21AI, causing visible growth defect without induction (Figure 1).


## Spot Assay Overview

### Key Characteristics and Functionality

The Spot Assay, traditionally used in yeast genetics research, is a widely adopted technique for assessing cell growth and viability under experimental conditions. This method is particularly valuable for comparing how different genetic modifications, such as plasmid transformations, genetic deleteions or mutations, affect microbial growth in a controlled and high-throughput manner[^1]. In our project, where *E. coli* is engineered to absorb and convert nickel ions, the Spot Assay serves as an essential tool to evaluate how these transformations impact bacterial fitness.

#### Applicability and Advantages

In a Spot Assay, dilutions of bacterial culture are spotted onto agar plates, without or with inductants, and incubated for colony formation[^2]. The number and size of colonies reveal how different plasmids influence *E. coli* growth.

This method offers several advantages:
* it requires minimal materials, provides rapid results (with evaluations possible within 24 hours)
* it allows for simultaneously testing of multiple plasmids or a same plasmids into multiple strains
* it is very sensitive, making it ideal for detecting subtle growth differences, enabling efficient assessment of plasmid-induced metabolic changes[^3]
* it is internally control, as the same starting culture being plot onto different plates with different conditions

To be specific, our measurement process is designed with rigorous internal controls, ensuring consistency across all experimental conditions. We use the same starting culture for each plate, plotting it onto different plates with varying conditions, including negative controls without induction and positive controls with well-characterized plasmids to validate the accuracy of our results. This approach allows for direct comparison of growth patterns under distinct environmental influences while maintaining a controlled baseline. These controls ensure precise calibration, reliable interpretation, and reproducibility of our findings. By utilizing Spot Assays, we can systematically assess the metabolic burden imposed by different plasmid combinations on *E. coli*, ensuring that the introduced plasmids do not compromise overall cellular performance under varying conditions.

## Spot Assay Protocol

### Step 1: Start a bacterial culture

Inoculate a single colony of *E. coli* BL21(AI) containing the plasmid of interest in 3 mL of LB broth supplemented with the appropriate antibiotic. Shake at 220 rpm, 37°C overnight. To compare clonal variation, multiple colonies could be started from the same plate.

### Step 2: Normalize the liquid cultures

After growth, measure the optical density (OD<sub>600</sub>) of all samples using a spectrophotometer. Normalize the cultures to an OD<sub>600</sub> of 0.6 by diluting with antibiotic containing fresh LB broth.

Do not put the culture into 4 degree. Do not over grow. Ideally, collecting all samples before OD<sub>600</sub> of 0.8.

### Step 3: Series Dilution

1. Transfer 20 µL of the normalized culture to row A of a 96-well plate
2. Fill the wells in rows A-E with 180 µL of LB broth using a multichannel pipette
3. Conduct a 1:10 serial dilution by transferring 20 µL of culture from each well in row A to the corresponding well in row B. Mix well and repeat this process down to row E, results a series dilution to 1:10<sup>5</sup>.

### Step 4: Spotting and Incubation

1. Sterilize the spotter by submerging it in ethanol and briefly flaming it after each transfer. Ensure the spotter has cooled down adequately after flaming before making the next spot.
2. Immediately transfer equal volumes (typically 5 µL) of diluted culture from each well using a 48-prong spotter(frogger) onto prewarmed dry agar plates containing selective media, in [our case](/fudan/software/) without or with 0.2% L-arabinose and 1 mM IPTG. Dry plates absorb liquid quickly, which is critical to form spots with clear outlines. Do not use plates with any visible liquid on the spotting surface.
3. Incubate the agar plates at 37°C for 12 hours. Various length of incubation could be chosen, e.g. when studying growth trend.

### Step 5: Imaging and Analysis

1. Capture high-quality images of the plates post-incubation with consistent lighting and focus. The plates could be put back to 37°C for extended incubation followed with imaging, if needed.
2. By observing the spot growth of an appropriate dilution (typically 1:10<sup>3</sup>), clear growth difference indicates that plasmid burden on bacteria is quite different.
3. For quantification, open the gray images in [ImageJ](https://imagej.net/ij/) and use the circular selection tool to outline the smallest spot, not colony within the spotted area, in the chosen dilution, excluding the background. Do not use a dilution most spots are fully covered by bacteria. It would be very helpful to store the selection into ImageJ's [ROI Manager](https://imagej.net/ij/docs/menus/analyze.html) window.
4. Measure the gray value in five different plate locations (corners and center) using the circular selection, then click “Analyze” and “Measure” to obtain the mean values, using their mean as the background value.
5. Using the same circular selection, measure the gray value of each spot in the chosen dilution and record these values in an Excel spreadsheet.
6. Subtract the mean background value from each of the gray values of the spots measured.
7. Repeat this process for all plates. The resulting values will reflect the growth levels of each biological replicate, including the control. In our case, spots on not-induced plates are baseline for each plasmid, and we use baseline of plasmids just expressing fluorescent proteins [(#0, #1, #19, #25)](#tab1) as our control.
8. Calculate the mean and standard deviation of the relative growth values obtained from the previous step for three or more replicates. These mean values could be used further to cacluate plasmid burden (induced divided by non-induced), etc.

**Special Tips on Spotting**

To ensure reproducibility by others, please pay special attention to the spotter's use:
* When transferring samples, confirm that each prong captures an equal-sized bacteria liquid droplet, and use a steady, vertical motion when move
* Make sure that all samples are normalized to the same initial  OD<sub>600</sub> to ensure accurate comparisons across conditions
* Finally, when selecting areas for measurement in ImageJ, be mindful of the size of the selection; it should encompass the entire spot while excluding background to avoid skewing the gray value readings.


## Data for our Software

To generate data for our [Software](/fudan/software/), we utilized a structured approach to investigate the impact of various plasmids on bacterial growth. We chose the plasmids listed below.

<div style="text-align: center;">
   <p id="tab1"><span>Table 1: Parts for the plasmid burden investigation</span></p>
</div>

| No.  | Parts    | Part Name     | Resistance |
| ---- | :------- | ------------- |----------- |
| #0   | BBa_K4162001 | stayGold; <em>#0 and #1 in two differnt plasmid backbones</em> | Amp |
| #1   | BBa_K4162001 | stayGold = (n2)oxStayGold(c4)v2.0                     | Kan |
| #2   | BBa_K4162009 | ribozyme + B0_RBS + crtE                              | Kan |
| #3   | BBa_K4162010 | ribozyme + T7_RBS + crtE                              | Kan |
| #4   | BBa_K4162011 | ribozyme + J6_RBS + crtE                              | Kan |
| #5   | BBa_K4162012 | ribozyme + B0_RBS + crtB                              | Kan |
| #6   | BBa_K4162013 | ribozyme + T7_RBS + crtB                              | Kan |
| #7   | BBa_K4162014 | ribozyme + J6_RBS + crtB                              | Kan |
| #8   | BBa_K4162016 | ribozyme + T7_RBS + crtI                              | Kan |
| #9   | BBa_K4162019 | ribozyme + T7_RBS + crtY                              | Kan |
| #10  | BBa_K4162022 | ribozyme + T7_RBS + BCMO                              | Amp |
| #11  | BBa_K4162023 | ribozyme + T7_RBS + ybbO                              | Amp |
| #12  | BBa_K4162101 | ribozyme+RBS+CDS module: crtIY                        | Kan |
| #13  | BBa_K4162103 | ribozyme+RBS+CDS module: crtBE                        | Kan |
| #14  | BBa_K4162106 | ribozyme+RBS+CDS module: crtIB                        | Kan |
| #15  | BBa_K4162107 | ribozyme+RBS+CDS module: crtEY                        | Kan |
| #16  | BBa_K4162108 | ribozyme+RBS+CDS module: crtEBI    | Kan |
| #17  | BBa_K4162112 | ribozyme+RBS+CDS module: crtIYB                       | Kan |
| #18  | BBa_K4162021 | ribozyme+RBS+CDS module: crtIYEB                      | Amp |
| #19  | BBa_K4765022 | mScarlet                                              | Kan |
| #20  | BBa_K4765111 | Twister P1 + T7_RBS + AnAFP + stem-loop               | Kan |
| #21  | BBa_K4765112 | Twister P1 + T7_RBS + SAHS 33020 +  stem-loop         | Kan |
| #22  | BBa_K4765113 | Twister P1 + T7_RBS + H. ex mtSSB +  stem-loop        | Amp |
| #23  | BBa_K4765117 | ribozyme connected: H. ex mtSSB + SAHS  33020         | Kan |
| #24  | BBa_K4765126 | ribozyme connected: H. ex mtSSB + SAHS  33020 + AnAFP | Amp |
| #25  | BBa_K4765022 | mScarlet; <em>an intended duplicated of #19</em> | Kan |
| #26  | BBa_K5115037 | TDP+AnAFP | Kan |

After [bacteria transformation](/fudan/experiments/#other-experimental-methods), we grow liquid culture and made series dilutions in 96-well plates. Next, we spot the same dilution onto two plates, one only contains antibotics, the other contains antibotics, 0.2% L-arabinose and 1 mM IPTG.

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/measurement-sy/spot-assay-figure.png" style="width:80%; height: auto;">
    <div>
        <span style="color: gray">Figure 2: Images of spots from one experiment, the control on the left and the dual-induced on the right.<br>
          <small>These figure illustrates the growth patterns of bacteria spots, following serial dilutions. From left to right, the columns correspond to the initial culture, dilutions of 1:10, 1:100, 1:10<sup>3</sup>, 1:10<sup>4</sup>, and 1:10<sup>5</sup>. #16 and #16-2 were grew from two colonies on the same plate. We transformed plasmid number #19 on another day generating a second plate labeled as #25. Both #16 #16-2 and #19 #25 are biological replicates with slight difference. The edges of the plates can serve as a reference for image quality.</small>
         </span>
      <br><br>
    </div>
</div>

As the dilutions progress, a noticeable decrease in bacteria density is visiable, with the experimental group (dual-induced) displaying different growth characteristics compared to the control group, indicating the impact of plasmid expression on bacterial proliferation (plasmid burden for short).

Subsequently, after measuring the gray value of each group of colonies using [ImageJ](https://imagej.nih.gov/ij/), we quantitatively compare the growth rates of different plasmid-expressing strains, normalized to the best-performing strain shown in [Figure 2](#fig2).

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/measurement-sy/bacteria-growth.png" style="width:80%; height: auto;">
    <div>
      <span style="color: gray">Figure 3: Quantification of the spots shown in <a href='#fig3'>Figure 2</a>.<br>
         <small>This bar graph compares the growth rates of bacterial strains expressing various plasmids. The Relative <em>E. coli</em> growth was calculated by comparing the experimental group (dual-induced) to the control group and the average values of stayGold (plasmid number #1) and mScarlet (plasmid number #19) fluorescence proteins as a baseline, represented by different colors in the graph. Plasmid number #25 is the same plasmid as #19, but did another bacteria transformation on another day generating a second plate labeled as #25. We also picked two colonies from the same plate (number #16), and labeled the second as #16-2.</small>
         </span>
      <br><br>
    </div>
</div>

<br>


## Previous Inspiring Methodologies in iGEM

In previous iGEM projects, several methods have provided valuable insights that inspire our approach, highlighting related concepts that informed our experimental design.

[Wageningen UR 2019](https://2019.igem.org/Team:Wageningen_UR) team assessed the inhibition of bacteriophage Lambda by dCas12a using a bacteriophage Spot Assay (their Figure 7). While their Spot Assay provided valuable insights, it had limitations in image clarity and lacking quantification, which could obscure subtle differences in growth. Inspired by their observations, we emphazed our approach on quantification and visual clarity of assay results, allowing for a more nuanced analysis of plasmid burden.

[Tartu TUIT 2019](https://2019.igem.org/Team:Tartu_TUIT/Results) team examined the effect of glucanase expression on cell wall integrity by testing cultures under hypo-osmotic stress and in the presence of DMSO. However, their method lacked precision, as the absence of [a metal spotter](https://biokimicroki.com/replica-plating-in-microbiology-animal-biotechnology/) led to uneven colony distributions, making it difficult to achieve consistent areas for analysis. This limitation resulted in qualitative rather than quantitative comparisons.

[ETH Zurich 2019](https://static.igem.org/mediawiki/2019/8/8d/T--ETH_Zurich--spot-plaque-assay-protocol.pdf) provided a [spot-plaque assay protocol](https://static.igem.org/mediawiki/2019/8/8d/T--ETH_Zurich--spot-plaque-assay-protocol.pdf), which outlines a systematic approach for assessing bacteriophage activity against bacterial cultures. While the protocol includes basic steps, it could benefit from detailed documentation to facilitate reproducibility. Furthermore, our experience suggests to ensure a standardized initial OD<sub>600</sub> is essential for reliable comparisons, which was missing in their protocol.

These prior studies have guided our improvements in methodology, particularly in quantification.

## Summary

The measurement approach described above should be easily repeated by others. We have clearly outlines each step, with special tips. We utilized this methodology to assess the growth stress on *E. coli* after introducing various plasmids, providing essential data to inform [Software](/fudan/software/) development aimed at optimizing genetic engieering.

The Spot Assay could be broadly applied across various research projects, including those investigating stress responses in different environmental conditions, antibiotic resistance, synthetic circuit efficiency, and metabolic engineering. By integrating appropriate controls to validate the measurement process and calibrate units, we ensured the reliability and reproducibility of our results.


## References

[^1]: Petropavlovskiy, A. A., Tauro, M. G., Lajoie, P., & Duennwald, M. L. (2020). A Quantitative Imaging-Based Protocol for Yeast Growth and Survival on Agar Plates. *STAR protocols*, *1*(3), 100182. https://doi.org/10.1016/j.xpro.2020.100182
[^2]: Sahu, S. R., Utkalaja, B. G., Patel, S. K., & Acharya, N. (2023). Spot Assay and Colony Forming Unit (CFU) Analyses-based sensitivity test for *Candida albicans* and *Saccharomyces cerevisiae*. *Bio-protocol*, *13*(21), e4872. https://doi.org/10.21769/BioProtoc.4872
[^3]: Petropavlovskiy, A. A., Tauro, M. G., Lajoie, P., & Duennwald, M. L. (2020). A Quantitative Imaging-Based Protocol for Yeast Growth and Survival on Agar Plates. *STAR protocols*, *1*(3), 100182. https://doi.org/10.1016/j.xpro.2020.100182
[^4]: Studier, F. W., and Moffatt, B. A. (1986). Use of Bacteriophage T7 RNA Polymerase to Direct Selective High-Level Expression of Cloned Genes. *J. Mol. Biol*. *189*, 113-130. [https://doi.org/10.1016/0022-2836(86)90385-2](https://doi.org/10.1016/0022-2836(86)90385-2)
[^5]: Ogden, S., Haggerty, D., Stoner, C. M., Kolodrubetz, D., and Schleif, R. (1980). The Escherichia coli L-Arabinose Operon: Binding Sites of the Regulatory Proteins and a Mechanism of Positive and Negative Regulation. *Proc. Natl. Acad. Sci. USA*, *77*, 3346-3350. [https://doi.org/10.1073/pnas.77.6.3346](https://doi.org/10.1073/pnas.77.6.3346)
