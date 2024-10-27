---
title: Presentation Video
headergif: https://static.igem.wiki/teams/5115/header/description-header.gif
author:
  name: All Members
  url: /fudan/team/#meet-our-members
---


## Abstract

MINERAL is committed to addres the growing problem of heavy metal pollution in the environment. Our engineered bacteria can selectively absorb nickel ion from water. Utilizing carboxysome-targeted hydronases, nickel ions are converted into microparticles within the bacteria. This innovative metal ion reduction strategy, which we developed and tested, can be readily adapted for other heavy metals. Our modular design is flexible, allowing for efficient recovery and environmental protection across a wider range of heavy metal pollution problems. Here, we present a detailed explanation of our project, including experimental methods, key results, and lessons learned.  Additionally, we developed our inclusive program to enhance the accessibility of synthetic biology for the autism community.


## Transcripts

### Introduction [kq](/fudan/team/#kevin-qi)

We are fortunate to live in a world where our shelters are supported by strong materials and our commutes are aided by vehicles. Nickel is a key component of the steel in buildings and the batteries in cars. However, as the demand of nickel rises beyond our production rates. The society as we know it may soon collapse. 

Of all the nickel production worldwide today, only 1% comes from secondary sources, that is, recycled. The consequence of this lack of recycling, on one hand, is the unsatisfied demand of nickel. And on the other hand, the continued discharge of nickel wastewater into the environment. Nickel, when discharged into rivers, lakes or oceans, are highly toxic to aquatic lives and may even possibly harm the health of us humans. Nickel production are sourced from primary and secondary supplies, and in simple terms, mining and recycling. According to the IEA[^1], mining requirements will outpace expected mining supplies from sooner than 2030. Current recycling methods are energy extensive and environmental unfriendly. Here, we present to you our project, MINERAL, Microparticle Integration for Nickel Extracttion and Resuable Applications, that offers a solution to both nickel pollution and increasing nickel demands in the near future.

### Nickel update and survial [mrw](/fudan/team/#ruiwen-ma)

Our design is divided into four modules: Nickel uptake, survival, nickel micro-factory, and hydrogen supply.

In our nickel uptake module, we introduce two kinds of nickel transporters: nik operon and NixA. Nik operon is one of the ATP-binding cassette transporters[^2]. We built a ribosome version of nik operon to promote its balanced expression[^3]. NixA is a member of the nickel-cobalt transporter family[^4]. We created two kinds of dimers to improve its transport efficiency[^5].

Our result shows that the ribosome-connected version of the nik operon significantly improves nickel uptake, and NixA-F1v outperforms all the variants.

To maintain high intracellular nickel levels, we engineered RcnR with a C35L mutation, preventing nickel-induced expression of the RcnA efflux pump[^6]. Our results confirm that the modified RcnR effectively inhibits nickel efflux.

In the survival module, we introduced Hpn, a histidine-rich cytoplasmic protein that binds nickel ions[^7]. It'll lower the toxicity caused by high nickel concentration. Hpn can enhance *E. coli*'s absorption capacity by relieving survival pressure.

The combination of the nickel uptake module and survival module results in a remarkable 43% increase in nickel uptake.

### Nickel microfactory [cly](/fudan/team/#liyue-chen)

Our nickel particle module is designed to convert nickel into less toxic microparticles. This microparticle consists of hydrogenases, a carboxysome shell, and reduced nickel. To create an efficient reduction reaction vessel, we linked hydrogenase with the carboxysome-targeting sequence.  We designed two parts to achieve this purpose, the U module and the F module. In F module, it is hoxF of hydrogenase which connected to carboxysome, while in U module it is hoxU.

To test the feasibility of this approach, we first fused stayGold with the EP sequence to validate the targeting[^8]. This is our fluorescence result. In the image A-C, the fluorescent dots are not focused without the expression of cso. In D, with all carboxysome components additionally expressed, stayGold fused with EP concentrated to the carboxysome. These results demonstrate that EP can successfully direct protein localization and supports the functional assembly of the carboxysome.

Our F-module-bacteria are successfully cultured under induced conditions, we thus chose it to do the next experiment.

F module convert nickel ion into particles, around carboxysome, as we designed. We sent our sample to the EM Core Facility for electron microscopy examination. The EM results are here. In A-E we can find that cells are filled with carboxysome-sized regions (CSR) surrounded by electron dense dots, and for cells with less electron dense dots, CSR are clearly visible. Staining with uranyl acetate (UA) may produce electron dense artifact. In F, without UA staining, we directly put sectioned sample on electron microscope, thus confirmed that the electron dense dots throughout A-E are not salt crystals but actual metallic particles, which we believe are Ni particles. On the right side, three 80-nm square regions are enlarged, showing polyhedral outline of CSR with Ni particles surrounded. We measureed CSR average diameter is 93.1 nm. The results show that the F module converts nickel ion into particles inside bacteria.

We wondered whether the absorption of nickel would be raised with the nickel reduction inside bacteria. We thus measured the nickel absorption efficiency of the two modules. Here is our result. Despite not having an engineered nickel uptakers, the F module still achieves about 10% nickel absorption. This indicates that a significant amount of nickel ions in the cells is reduced by hydrogenase, resulting in a relatively low intracellular nickel concentration, which activates *E. coli* to absorb more nickel from the environment.

### Software [chc](/fudan/team/#hongcheng-chen)

Throughout the project, we implemented a ribozyme-based design. However, this approach can place heavy expression pressure on the bacteria, a challenge that has been carefully considered in our software.

### Measurement [sy](/fudan/team/#yi-shi)

To collect data for our software tools, we developed this year's measurement, the Spot Assay. This assay, traditionally used in yeast genetics studies, was used to evaluate how plasmid transformations affect *E. coli* growth. 

It involves spotting dilutions of bacterial cultures onto agar plates with and without induction. After inclubation at 37 degree, the colony sizes on the plates reveal how different plasmids affect bacterial growth. Comparing to the time-consuming OD600 measurements of liquid cultures, the Spot Assay offers several advantages: minimal starting culture, rapid results within 24 hours, high sensitivity for detecting subtle growth differences, simultaneous testing of multiple plasmids or conditions, easy validation and calibration to ensure reliable results[^9].

To address leakage expression from the plasmids, we chose the *E. coli* strain BL21AI in our measurement. This strain requires both arabinose and IPTG for dual induction. Unfortunately, even with this BL21AI strain, we still see difference in bacteria grow without induction, as shown on the screen.

The controls of this baseline measurement is T7 promoter, T7 RBS driven, stayGold or mScarlet fluorescent protein. As you could see, 1 to 1000 or 1 to 10,000 dilution produces comparable results, while 1 to 100 dilution of the starting culture has obscure results. As recommended by experienced yeast geneticists, using an appropriate dilution is critical for this assay. Conclusions should be drawn from the same dilution, where bacterial growth does not completely cover any spot.

Next, we compare the growth between induced and uninduced spots of the same plasmids, presenting the results as a ratio. A ratio of 1 indicates no impact on overall growth, while a ratio greater than 1 suggests that plasmid expression is beneficial. In most cases, the ratios are less than 1, indicating that plasmid expression imposes a burden. As displayed on the screen. Dilutions of 1 to 1000 and 1 to 10000 yield comparable results regarding plasmid burden. As long as the colonies grown on the plate have not fully covered the entire spot area, that dilution could be used for quantification. 

To validate our software, we focused on comparing the relative *E. coli* growth between induced and uninduced spots. 

The Spot Assay is essential for acquiring these experimental values needed for our software. Unfortunately, the experimental values do not align well with the predicted values.

However, we believe that our measurement approach could be beneficial for many other projects, such as testing antibiotic resistance, optimizing synthetic circuit performance and advancing metabolic engineering. Data is collected through imaging, which could be easily repeated, if needed even performed at predetermined time intervals to monitor growth trends.

### Anti-phage &amp; Safety [txj](/fudan/team/#xujie-tan)

The challenges for MINERAL extend far beyond this. In nature, countless bacteriophages present a significant threat to bacterial survival. To counter this, we introduced the YejM protein into these bacteria[^10]. We're glad to see that this approach has proven highly effective — the YejM-modified *E. coli* has demonstrated exceptional success in resisting the M13KO7 phage， thereby increasing their environmental adaptability.

We believe that rather than expending excessive effort to prevent the release of synthetic biology products, it is more important to conduct a rational assessment and implement appropriate control measures. To evaluate the environmental impact of our project, we innovatively used C.elegans as a model organism to serve as an environmental hazard indicator. By feeding the worms our engineered bacteria, and assessing their movement speed and average turning angles, we suggest that even if released into the environment, our synthetic biology products would not cause severe toxic effects on organisms.

### Hardware [hkx](/fudan/team/#kexin-huang)

To implement our MINERAL program in reality, we have designed a delicate carrier for synthetic biology in our hardware part. It is an innovative fiber that features a carbon nanotube core encased in agarose, which can not only carry and nourish bacteria but also be woven into any required shape and size[^11]. We create the monofilament by blending carbon nanotube suspension with agarose, heating the mixture, and extruding it through a needle[^12]. The fiber is then soaked in a bacterial solution to form a fiber-bacteria mesh. With this fiber structure implated with our engineered bacteria, deployed in the wastewater treatment device, we can effectively achieve the recovery of nickel. Our fiber is suitable for both industrial scenarios and natural bodies. The composite fiber provide an efficient, environmentally friendly approach for wastewater treatment.

### Human Practices [szm](/fudan/team/#ziming-suo)

MINERAL is wonderful, and we also done a great job of Human Practices. We went to two factories in Jingmen and Suzhou to improve our project. We also engage with experts and teams around the world to explore the future of our project in different cultural contexts. Beyond the Human Practice, we further explored the possibility of commercialization.

#### Entrepreneurship [zkx](/fudan/team/#kexin-zheng)

Our product is a cleaner, designed to remove heavy metal ions from wastewater. When placed in the wastewater, our product effectively reduces the concentration of nickel ions and produce valuable products.

A new subscription service？Pay monthly，and we will extend your products' life while optimizing your strategy of usage, which saves a large amount of money.

After the wiki freeze, we continue the discussion on our company's subscription plan. We made several changes. First, even if a customer does not subscribe to our advanced service, we will still conduct safety inspections on their mail-in samples as part of our responsibility to society.

In our advanced service, we will culture local cyanobacteria and utilize sequencing information to engineer our bacteria to express specific lectins, thereby optimizing their adhesion without introducing another alien species. Also in our advanced services, we would provide bacteria with local optimized survival modules, with most suitable kill-switches. 

Implementing a subscription-based product will generate a continuous cash flow from the advanced service, which will support the company in executing long-term research plans and maintaining a leading position in the field.

### Education [szm](/fudan/team/#ziming-suo)

We also strive to promote more people into the world of science and synthetic biology.

We went to universities, middle schools and primary schools to educate different groups of people about synthetic biology.

In addition to extensive science popularization, more importantly, we also pay attention to the barriers between special populations and science.

### Inclusivity [mrw](/fudan/team/#ruiwen-ma),[txj](/fudan/team/#xujie-tan)

Not only do we focus on education of all ages, but we also believe that everyone should have the opportunity to receive education. This belief inspired our inclusivity project.

Through our research, we discovered that many individuals with Autism Spectrum Disorder (ASD) have unique talents in STEM. However, they face significant barriers in accessing synthetic biology and science education. This underrepresented community grapples with four major challenges: a lack of specialized educators, inadequate teaching methods, low public awareness, and financial strain on families.

To address these challenges, we developed STEAMed, an innovative educational model. Focusing on ASD individuals, we broaden their access to synthetic biology, genetics, and science more widely. We implemented tailored teaching methods and accessible approaches to capture ASD students' attention and engage them through art and hands-on activities.

Throughout our project, we engaged in meaningful dialogue with their parents, educators, and rehabilitation staff. Their feedback has been invaluable in shaping our curriculum. By listening to their experiences and values, we've been able to enhance our project and effectively tackle the barriers faced by the ASD community.

To raise public awareness, which is the biggest barrier the community faces, we promoted our efforts through media, multiple lectures, and charity events. During this iGEM season, over 30 team members and volunteers participated in our science outreach activities. We conducted 16 in-person events that reached 135 ASD patients and engaged more than 10 thousand audience members.

Our work is carefully documented, with all course materials, effect evaluations, and dialogue transcripts available on Wiki. We sincerely hope that future teams will continue the project with us, to foster an ever-growing circle of inclusion, reaching a wider public community. We firmly believe that by eliminating barriers between ASD and science, we can empower the underrepresented children to embrace a brighter future.

----

View our presentation video at [https://video.igem.org/w/4817e7e4-446b-4760-b866-2817794b02c9](https://video.igem.org/w/4817e7e4-446b-4760-b866-2817794b02c9).


[^1]: Global Critical Minerals Outlook 2024 – Analysis. IEA. 
[^2]: Dosanjh NS, et al. Curr Opin Chem Biol (2006). DOI: [10.1016/j.cbpa.2006.02.011](https://doi.org/10.1016/j.cbpa.2006.02.011)
[^3]: Liu Y, et al. ACS Synth Biol (2023). DOI: [10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^4]: Hernandez JA, et al. Chem Sci (2024). DOI: [10.1039/d3sc05135h](https://doi.org/10.1039/d3sc05135h)
[^5]: Clackson T, et al. Proc Natl Acad Sci U S A (1998). DOI: [10.1073/pnas.95.18.10437](https://doi.org/10.1073/pnas.95.18.10437)
[^6]: Higgins KA, et al. J Am Chem Soc (2012). DOI: [10.1021/ja300834b](https://doi.org/10.1021/ja300834b)
[^7]: Ge R, Watt RM, et al. Biochem J (2006). DOI: [10.1042/BJ20051160](https://doi.org/10.1042/BJ20051160)
[^8]: Li T, et al. Nat Commun (2020). DOI: [10.1038/s41467-020-19280-0](https://doi.org/10.1038/s41467-020-19280-0)
[^9]: Petropavlovskiy AA, et al. STAR Protoc (2020). DOI: [10.1016/j.xpro.2020.100182](https://doi.org/10.1016/j.xpro.2020.100182)
[^10]: Shu S, et al. Nat Commun (2022). DOI: [10.1038/s41467-022-32277-1](https://doi.org/10.1038/s41467-022-32277-1)
[^11]: Mishra Y, et al. Environ Res (2023). DOI: [10.1016/j.envres.2023.117088](https://doi.org/10.1016/j.envres.2023.117088)
[^12]: Kim SK, et al. ACS Appl Mater Interfaces (2017). DOI: [10.1021/acsami.7b04753](https://10.1021/acsami.7b04753)
