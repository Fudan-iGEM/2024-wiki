---
title: Experiments
headergif: https://static.igem.wiki/teams/5115/header/measurement-header.gif

author:
- name: Kexin Huang
  url: /fudan/team/#kexin-huang
---


## Abbreviation List

Table 1: Abbreviation List

| Abbreviation | Full name                        |
| ------------ | -------------------------------- |
| TEM          | Transmission Electron Microscope |
| Ni^2+^       | divalent nickel ion              |
| ddH~2~O      | Double-Distilled Water           |
| *E. coli*    | *Escherichia coli*               |
| MOIs         | multiplicity of infections       |
| LB           | Luria-Bertani                    |
| OD           | Optical Density                  |
| PBS          | Phosphate Buffered Saline        |
| SDS          | Sodium Dodecyl Sulfate           |


## Ni^2+^ Concentration Measurement

### Prepare the Ni^2+^ Standard Curve

#### I. Principle

1. In an ammonium citrate-ammonia water medium, iodine acts as an oxidizing agent and promotes the reaction between nickel ions and dimethylglyoxime, which form a red wine-colored complex.
2. The formed complex has a maximum absorption at the wavelength of 530 nm, thus a spectrophotometer can be used to measure its absorbance.
3. By preparing the Ni^2+^ standard curve, the concentration of nickel in the sample can be quantitatively determined.


#### II. Reagents

* 500 g/L Tribasic ammonium citrate solution
* 0.05 mol/L Iodine solution
* 5 g/L Dimethylglyoxime
* 50 g/L Na~2~EDTA
* 10 mg/L Nickel standard stock solution: Weigh 0.20325 g nickel chloride hexahydrate (NiCl~2~·6H~2~O),  dissolve in 5 mL ddH~2~O.


#### III. Experimental Procedures

1. Prepare the following components in EP tubes (2 mL volumes, add from left to right):

| **Group No.** | **[NiCl~2~] mg/L** | **ddH~2~O / μL** | **Nickel Standard Stock / μL** | **Ammonium Citrate / μL** | **Iodine / μL** | **Dimethylglyoxime / μL** | **Na-EDTA / μL** |
| :------------ | :---------------------------- | :--------------- | :-------------------------------------- | :------------------------ | :-------------- | :------------------------ | :--------------- |
| 1             | 0                             | 1440             | 0                                       | 160                       | 80              | 160                       | 160              |
| 2             | 0.5                           | 1340             | 100                                     | 160                       | 80              | 160                       | 160              |
| 3             | 1                             | 1240             | 200                                     | 160                       | 80              | 160                       | 160              |
| 4             | 1.5                           | 1140             | 300                                     | 160                       | 80              | 160                       | 160              |
| 5             | 2                             | 1040             | 400                                     | 160                       | 80              | 160                       | 160              |
| 6             | 3                             | 840              | 600                                     | 160                       | 80              | 160                       | 160              |
| 7             | 4                             | 640              | 800                                     | 160                       | 80              | 160                       | 160              |

For each EP tube, shake well after adding reagents and set aside for 5 minutes. Shake before measuring each tube. Measure its absorbance at wavelength 530 nm. Use group 1 as a blank control, and plot the curve by subtracting the absorbance of group 1 from groups 2-7. Rinse the cuvette thoroughly with ddH~2~0 between measurments.

2. [Plot](#fig1) the absorbance and nickel ion concentration (blue dots). Use line regression to obtain the Formual 1.
3. Three sets of divalent nickel solutions with known concentrations are prepared to verify the accuracy of our standard curve. For the test group, prepare the following components in EP tubes (2 mL volumes, add from left to right):

| **Group No.** | **[NiCl~2~] mg/L** | **ddH~2~O** | **Nickel Standard Stock / μL** | **Ammonium Citrate / μL** | **Iodine / μL** | **Dimethylglyoxime / μL** | **Na-EDTA / μL** |
| :------------ | :---------------------------- | :---------- | :-------------------------------------- | :------------------------ | :-------------- | :------------------------ | :--------------- |
| 1             | 0                             | 1440        | 0                                       | 160                       | 80              | 160                       | 160              |
| 2             | 1.25                          | 1190        | 250                                     | 160                       | 80              | 160                       | 160              |
| 3             | 2.5                           | 940         | 500                                     | 160                       | 80              | 160                       | 160              |
| 4             | 3.5                           | 740         | 700                                     | 160                       | 80              | 160                       | 160              |


#### IV. Results

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/experiments/standardcurve.png" style="width:100%">
    <div>
    	  <span style="color: gray">Figure 1: Standard Curve of Abs~530~ and NiCl~2~ Concentration</span>
      <br><br>
    </div>
</div>

    Formual 1:  Abs = 0.04343*C + 0.7438 [R Square = 0.9984]


### Measurement of samples

1. Pellet the bacteria by 8000 rpm centrifugation for 5 minutes. Use the supernatants for measurements. Prepare the following components in EP tubes (2 mL volumes, add from left to right):

| **Group No.** | **Culture Medium Initial [NiCl~2~] mg/L** | **ddH~2~O** | **Bacterial Supernatant / μL** | **Ammonium Citrate / μL** | **Iodine / μL** | **Dimethylglyoxime / μL** | **Na-EDTA / μL** |
| :------------ | :----------------------------------------------- | :---------- | :----------------------------- | :------------------------ | :-------------- | :------------------------ | :--------------- |
| 1             | 20                                               | 1190        | 250                            | 160                       | 80              | 160                       | 160              |
| 2             | 30                                               | 1190        | 250                            | 160                       | 80              | 160                       | 160              |
| 3             | 50                                               | 1240        | 200                            | 160                       | 80              | 160                       | 160              |
| 4             | 100                                              | 1390        | 50                             | 160                       | 80              | 160                       | 160              |
| 5             | 150                                              | 1390        | 50                             | 160                       | 80              | 160                       | 160              |

For each EP tube, shake well after adding reagents and set aside for 5 minutes. Shake before measuring each tube and rinse the cuvette. Then measure its absorbance at wavelength 530 nm. Use the color-developing solution without NiCl~2~ as a blank control.


## Phage Resistance Assay

1. Cultivate the bacteria for approximately 4 hours to reach the logarithmic growth phase, adjusting the OD~600~ to 0.5.
2. Take 1 mL of bacterial culture and add phages to achieve MOIs of 0.5, 1, and 2 (*E. coli* concentration is estimated to be 1 x 10^8^ at OD~600~ = 1; and the phage concentration is 2 x 10^10^/mL, diluted from a 2 x 10^13^ stock).
3. Incubate at 37°C for 30 minutes while pre-warming the agar plates.
4. Take 150 µL of the bacteria/phage mixture and spread it onto the plate.
5. Incubate overnight at 37°C.

The phage carries Kan resistance. If the bacteria was infected by phage, colonies form on the Kan plate.


## Other experimental methods

* [TEM sample preparation](https://static.igem.wiki/teams/5115/test/bacteria-fix-stain-embed-tem.pdf) and imaging was carried by the EM Core Facility of [SKLGE](https://homo.fudan.edu.cn). 
* Fluorescence imaging of [BBa_K5115057](https://parts.igem.org/Part:BBa_K5115057) was carried out on a motorized spinning-disk confocal microscope at room temperature, with a 150x oil objective lens (NA 1.45). [Agarose pad](https://2022.igem.wiki/fudan/experiments#preparation-of-agarose-pad-for-microscopy) was prepared as described previously.
* Cyanobacteria-*E. coli* [Aggregation Assay](https://2023.igem.wiki/fudan/experiments/#cyanobacteria-e-coli-aggregation-assay) was carried out as described previously.
* [IPTG induction](https://2022.igem.wiki/fudan/experiments#iptg-induction-experiment) was carried out as described previously.
* [Plasmid miniprep](https://2022.igem.wiki/fudan/experiments#plasmid-miniprep) was conducted as described previously.
* [DNA agarose gel electrophoresis](https://2022.igem.wiki/fudan/experiments#agarose-gel-electrophoresis) was carried out as described previously.
* [Overlap extension PCR](https://2022.igem.wiki/fudan/experiments#overlap-extension-pcr-oe-pcr) was used to generate fusion proteins.
* [PCR](https://2021.igem.org/Team:Fudan/Experiments#pcr) was used to generate inserts and vectors for ligase-free cloning.
* [Restriction enzyme digestion](https://2021.igem.org/Team:Fudan/Experiments#restriction-enzyme-double-digestion) was used to generate fragments from ribozyme connected parts, specifically **PmeI** to generate inserts and **SwaI** for vectors.  
* Inserts and vectors were ligated using [ClonExpress reaction](https://2021.igem.org/Team:Fudan/Experiments#clonexpress-ligation-reaction).
* [Bacteria transformation](https://2023.igem.wiki/fudan/experiments/#plasmid-transformation) and [plating](https://2023.igem.wiki/fudan/experiments/#plating) were conducted as described previously.
* [Bacteria colony PCR](https://2022.igem.wiki/fudan/experiments#colony-pcr) with [the listed primers](/fudan/parts/) was used to screen plasmids before sending to Sanger sequencing.
* [Bacteria spot assay](/fudan/measurement/#key-characteristics-and-functionality) is detailed on our [Measurement](/fudan/measurement) page.
* Bacteria [cryopreservation](https://2022.igem.wiki/fudan/experiments#cell-cryopreservation) and [recovery](https://2022.igem.wiki/fudan/experiments#cell-recovery) were performed as described previously.
