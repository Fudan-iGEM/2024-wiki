---
title: Safety
author:
  name: Xujie Tan
  url: /fudan/team/#xujie-tan
headergif: https://static.igem.wiki/teams/5115/header/safety-header.gif
---

<br><br>

The growing severity of heavy metal pollution and the inevitable depletion of mineral resources in the foreseeable future underscore the importance and urgency of resource recovery. Among the various solutions, [bioremediation](https://competition.igem.org/participation/villages#h-list-of-villages) holds great promise, though it has not yet been fully explored. **MINERAL** demonstrates strong potential in addressing this issue, and we aim to utilize *Escherichia coli* to convert heavy metal ions in water into usable micro-metal particles.

However, this project comes with significant challenges in terms of biosafety management. We recognize that, despite all precautions, our products and chassis microorganisms remain at risk of leaking into the environment. To address this, in addition to minimizing this risk as much as possible, we have employed *Caenorhabditis elegans* as environmental indicator organisms to assess the potential environmental impact of our project.


## Project Risk Control

### Application risk management

We incorporated environmental risk management into our considerations from the project design stage. Firstly, we addressed the issue of the biotoxicity of metal microparticles. After consulting with [Professor Wei Feng](/fudan/human-practices/#c3-3-discuss-with-professor-feng-wei) from the Department of Chemistry at our university, we were gald to know that our product, micro-nickel particles, likely have low chemical toxicity due to its small environmental concentration and inert chemical nature. The main concern lies in the size effect rather than chemical toxicity. Microparticles exhibit minimal biotoxicity when they are either too large or too small. However, when their size is less than 100 nm, they could be absorbed into bodily fluids, leading to strong biotoxicity[^1]. To mitigate this, we introduced [carboxysomes](/fudan/description/#_3-nickel-microparticle-module) as reaction hubs in the system, which concentrates nickle particles to reduce their biological toxicity, while simultaneously increasing local enzyme concentrations to increase the reaction efficiency.

Moreover, we are fully aware that any product, especially synthetic biology product, should be carefully tested before releasing into open environments. Please refer to our [Implementation](/fudan/implementation/) page about how our project could be implementated. Please note that we have designed [Hardware](/fudan/hardware/), where we immobilized the engineered bacteria onto carbon fiber threads coated with agarose, effectively preventing the unwanted spread of the engineered bacteria into varied environment.

### Risk assessment

It must be acknowledged that as a project committed to addresse environmental problems through synthetic biology, potential leakage — whether intentional or accidental — remains an issue that must be confronted. We believe that rather than obsessively trying to prevent any leakage, a more practical approach is to effectively assess and manage the risks that might arise from such events.

*Caenorhabditis elegans* is a well-studied model organism, and widely used as an environmental indicator, it offers several key advantages:

1. Its short life and reproduction cycles allow for the rapid collection of large amounts of data in environmental pollution assessments.
2. As a model organism, it has well-established experimental protocols and animal behavior evaluation methods.
3. It has demonstrated high sensitivity to a wide range of environmental pollutants, such as exhibiting significant reductions in growth, reproduction, and locomotion when exposed to heavy metals and organic compounds[^2] .
4. Its genetic structure and biochemical pathways are similar to those of higher organisms, making it valuable for evaluating the overall impact of pollutants to the ecosystem.
5. Being an invertebrate, its usage avoids many ethical concerns associated with experimental testing.

For these reasons, many official organizations have adopted *C. elegans* as the standard model organism for detecting shallow freshwater and soil pollutants. For example, [ASTM International's E2172–01](https://www.astm.org/e2172-01r14.html) standard outlines the use of *C. elegans* in laboratory soil toxicity tests, and the International Organization for Standardization's [ISO10872 Standard](https://www.iso.org/obp/ui/en/#iso:std:iso:10872:ed-2:v1:en) provides detailed guidelines on using *C. elegans* to evaluate chronic toxicity in environmental media. Similarly, many researchers have already employed various methods for using worm in environmental assessments[^3]. More relevantly, the Organisation for Economic Co-operation and Development's [ENV/JM/MONO(2015)16/PART7 Standard](https://one.oecd.org/document/ENV/JM/MONO(2015)16/PART7/en/pdf) specifies the use of *C. elegans* to measure the environmental impact of silver nanoparticles. These established methods provide a solid foundation for our measurements.

This year we utilized *Caenorhabditis elegans* in assessing the outcome of releasing our engineered bacteria and bioaccumulated nickel microparticles into the environment. We believe our method could serve as a universal approach for biotoxicity testing, offering a valuable reference for other teams.

<div style="text-align: center;" id="fig1-3">
    <img src="https://static.igem.wiki/teams/5115/txj/safety-c.gif" style="width:80%; height: auto;"><br>
    <img src="https://static.igem.wiki/teams/5115/txj/safety-f.gif" style="width:80%; height: auto;"><br>
    <img src="https://static.igem.wiki/teams/5115/txj/safety-u.gif" style="width:80%; height: auto;"><br>
    <div>
        <span style="color: gray">Figure 1-3: Representative images of <em>Caenorhabditis elegans</em> swimming, fed with <em>E. coli</em> strain OP50, <em>E. coli</em> expressing <a href='https://parts.igem.org/Part:BBa_K5115067'>module F</a>, and <em>E. coli</em> expressing <a href='https://parts.igem.org/Part:BBa_K5115068'>module U</a>.<br>
         <small>For the later two, bacteria has been cultured at 37°C for 30 hours in 100 mg/L NiCl~2~ solution with bubbled hydrogen gas, assuming massive nickel microparticles formed inside bacteria. After 30-hour culture, bacteria were collected by 3000 rpm 10-min centrifugation, briefly washed with 2x YT media, plated directly onto the NGM plate, briefly dried before seeding worm. Dark brown balls in the fields are bacteria aggregates. These videos were captured using a household <a href='https://en.wikipedia.org/wiki/Digital_single-lens_reflex_camera'>DSLR</a> camera, and are displayed at 6x the real speed.</small>
         </span>
      <br><br>
    </div>
</div>

<br>

<div style="display: flex; justify-content: space-between; align-items: center;" id="fig45">
   <div style="flex: 1; text-align: center;">
      <img src="https://static.igem.wiki/teams/5115/txj/c-elegans2.jpg" style="width:95%; height: auto;">
   </div>
   <div style="flex: 1; text-align: center;">
      <img src="https://static.igem.wiki/teams/5115/txj/c-elegans1.png" style="width:95%; height: auto;">
   </div>
</div>
<div style="text-align: center; margin-top: 10px;">
   <span style="color: gray">Figure 4 & 5: Comparison of the average distance moved per minute and the average turning angle per turn of <em>Caenorhabditis elegans</em>, 18 hours after seeding.<br>
      <small>The nematodes were fed with <em>E. coli</em> strain OP50, <em>E. coli</em> expressing <a href='https://parts.igem.org/Part:BBa_K5115067'>module F</a>, and <em>E. coli</em> expressing <a href='https://parts.igem.org/Part:BBa_K5115068'>module U</a>. For the later two, bacteria has been cultured at 37°C for 30 hours in 100 mg/L NiCl~2~ solution with bubbled hydrogen gas, assuming massive nickel microparticles formed inside bacteria. After 30-hour culture, bacteria were collected by 3000 rpm 10-min centrifugation, briefly washed with 2x YT media, plated directly onto the NGM plate, briefly dried before seeding worm. Five L2-stage nematodes were picked for each plate and cultured at 20°C for 18 hours. For each dataset, images from at least three nematode were collected, and at least 1-minute worm movement was recorded at 1080p 30fps, yielding at least 1900 data points, analyzed by ImageJ Plugins Animal Tracker, and graphed in GraphPad Prism.</small></span>
</div>

By feeding nematodes with engineered bacteria [containing nickel microparticles](/fudan/results/#fig7), and comparing their locomotion behavior, we found no significant difference in worm motion between the control group and the experimental group. This indicates that our product is harmless to nematodes, likely to be environmentally and biologically friendly.


## Laboratory Safety

Our laboratory is setup and maintained in accordance with BSL-II standards, complying with the relevant regulations of the [*Regulations on the Biosafety Management of Pathogenic Microorganism Laboratories of the People's Republic of China* (State Council Order No. 424)](https://www.gov.cn/gongbao/content/2005/content_63265.htm) and the [*National Standard of the People's Republic of China GB 19489-2008 General Requirements for Biosafety in Laboratories*](http://c.gb688.cn/bzgk/gb/showGb?type=online&hcno=EB3B94B543F6E4CD18C044DE6AB64CEC).

Each wet lab team member passed our university's laboratory safety examination, and obtained the [certification](https://static.igem.wiki/teams/5115/txj/2024.pdf) before entering the lab. To further ensure biosafety and operation safety in our specific laboratory environment, all wet lab members also underwent [a safety training](https://wiki.actin.cn/images/f/fc/S_Laboratory-Safety-for-Researchers.pdf) and passed the [corresponding exam](https://wiki.actin.cn/Lab_practice_quiz).


## Risk Identification

### Future risk identification

Although our project is currently applied in a controlled environment, it has the potential to be developed for broader applications in the future, such as direct deployment in an environmental wastewater treatment device. Appropriate modifications, such as the incorporation of carefully designed and test kill switches or other containment mechanisms, will be essential to prevent unintended spread and ensure safety.

### Dual risk identification

In the laboratory setting, our engineered bacteria exhibit a growth disadvantage compared to wild-type *E. coli*, suggesting they face significant competitive pressure and potentially fade out in natural environments. However, their [high tolerance](/fudan/description/#_2-survival-module) to heavy metal conditions and resistance to bacteriophages could grant them a survival advantage in special environments. For instance, in densely populated and heavily polluted urban areas, our engineered bacteria could theoretically be maliciously exploited to carry pathogenic factors and released into these regions. Nonetheless, we believe that every project has its bright and dark sides, and we must not forsake promising solutions due to potential risks. Our commitment to a brighter future compels us to navigate challenges with optimism and resilience.


## Conclusion

Through the measures and considerations mentioned above, we have fully adhered to the spirit of [iGEM's Biosafety and Biosecurity](https://responsibility.igem.org/guidance/working-safely) guidelines. We summarize our practices as following:

| Aspects                                                      | Our Answers                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Did the team make a contribution to biosafety and/or biosecurity? | Yes. Building upon traditional biosafety measures, we have developed innovative approaches that ensure the safety of the project itself and effectively assess and manage potential risks to personnel, the laboratory, and the environment in the event of accidental release. |
| Is their contribution well-characterized and/or well-validated? | Yes. The effectiveness of all the methods we employed has been thoroughly evaluated through experimentation, and their principles and procedures have been meticulously documented for future teams to reference. These methods are sufficiently simple and reproducible. |
| Did the team build upon existing knowledge, understanding, tools or approaches? | Yes. The safety measures we implemented are based on well-established practices that have been validated by previous research and/or are supported by widely accepted industry or standardized protocols, ensuring that the relevant knowledge and tools are highly accessible. |
| In addition to broader safety work, has the team managed any risks from their project appropriately? | Yes. We have carefully considered the potential safety issues arising from our project, including both those we have successfully addressed and those for which we have yet to find solutions. We have strengthened our ability to identify dual-use risks and have aligned our responses with relevant policies. Additionally, we engaged with stakeholders to identify any overlooked concerns. |
| Has the team addressed the use of synthetic biology in the real world? | Yes. We have thoroughly discussed the current and potential future applications of our project and considered the issues that might arise from its use in the real world. |

----

[^1]:Miao, C., Jia, P., Luo, C., Pang, J., Xiao, L., Zhang, T., Duan, J., Li, Y., & Sun, Z. (2024). The size-dependent in vivo toxicity of amorphous silica nanoparticles: A systematic review. *Ecotoxicology and Environmental Safety*, *271*, 115910. https://doi.org/10.1016/j.ecoenv.2023.115910
[^2]:Leung, M. C. K., Williams, P. L., Benedetto, A., Au, C., Helmcke, K. J., Aschner, M., & Meyer, J. N. (2008). Caenorhabditis elegans: An Emerging Model in Biomedical and Environmental Toxicology. *Toxicological Sciences*, *106*(1), 5–28. https://doi.org/10.1093/toxsci/kfn121
[^3]: Queirós, L., Pereira, J. L., Gonçalves, F. J. M., Pacheco, M., Aschner, M., & Pereira, P. (2019). *Caenorhabditis elegans* as a tool for environmental risk assessment: Emerging and promising applications for a "nobelized worm". *Critical Reviews in Toxicology*, *49*(5), 411–429. https://doi.org/10.1080/10408444.2019.1626801

