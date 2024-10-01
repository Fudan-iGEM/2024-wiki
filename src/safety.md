---
title: Safety
author:
  name: Xujie Tan
  url: /fudan/team/#xujie-tan
headergif: https://static.igem.wiki/teams/5115/header/safety-header.gif
---



## Overview

The growing severity of heavy metal pollution and the inevitable depletion of mineral resources in the foreseeable future underscore the importance and urgency of resource recovery. Among the various solutions, bioremediation holds great promise, though it has not yet been fully developed. **Mineral** demonstrates strong potential in addressing this issue, and we aim to utilize *Escherichia coli* to convert heavy metal ions in water into usable micro-metal particles.

However, this project comes with significant challenges in terms of biosafety management. We recognize that, despite all precautions, our products and chassis microorganisms remain at risk of leaking into the environment. To address this, in addition to minimizing this risk as much as possible, **we have innovatively employed *Caenorhabditis elegans* as environmental indicator organisms to assess the potential environmental impact** of our project.



## Project Risk Control

### Application risk management

We incorporated environmental risk management into our considerations  from the project design stage. First, we addressed the issue of the biotoxicity of metal microparticles. After consulting with [Professor Wei Feng](/fudan/human-practices/#c3-3-discuss-with-professor-feng-wei) from the Department of Chemistry at Fudan University, we learned that our product, micro-nickel particles, has low chemical toxicity due to its small environmental concentration and inert chemical nature. The main concern lies in the size effect rather than chemical toxicity. Microparticles exhibit minimal biotoxicity when they are either too large or too small; however, when their size is less than 100nm, they could be absorbed into bodily fluids, leading to strong biotoxicity[^1]. To mitigate this, we introduced [carboxysomes](/fudan/description/#_3-nickel-microparticle-module) as reaction containers in the system, which confines the microparticles within it to reduce their biological toxicity, while simultaneously shrinking the reaction space to enhance the local reaction intensity.

Moreover, we are fully aware that any synthetic biology product should be carefully controlled, especially in open environments. During the [implementation](/fudan/implementation/) phase of the project, instead of releasing engineered bacteria directly into the environment, we designed a system where wastewater is directed into a buffer pool, thereby managing the associated risks. This design allows us to integrate our project into existing recovery systems within factories or wastewater treatment plants, utilizing established management practices to effectively prevent leaks.

Finally, we also considered the diverse needs of different application scenarios. Through our [hardware](/fudan/hardware/) design, we immobilized the engineered bacteria onto carbon fiber threads coated with agarose, effectively preventing the unwanted spread of the engineered bacteria in varied environments.

### Risk assessment

It must be acknowledged that as a project committed to addressing environmental pollution through synthetic biology, potential leakage—whether intentional or accidental—remains an issue that must be confronted. **Fudan iGEM 2024 believes that rather than obsessively trying to prevent any leakage, a more practical approach is to effectively assess and manage the risks that might arise from such events.**

*Caenorhabditis elegans* is a well-studied model organism, and as an environmental indicator, it offers several key advantages:

1. Its short life and reproduction cycles allow for the rapid collection of large amounts of data in environmental pollution assessments.
2. As a mature model organism, it has well-established experimental protocols and evaluation methods.
3. It demonstrates high sensitivity to a wide range of environmental pollutants, such as exhibiting significant reductions in growth, reproduction, and locomotion when exposed to heavy metals and organic compounds.
4. Its genetic structure and biochemical pathways are similar to those of higher organisms, making it more valuable for evaluating the overall impact of pollutants on higher levels of the ecosystem.
5. Being an invertebrate, its use avoids many ethical concerns associated with testing on higher organisms.

For these reasons, **many official organizations have adopted *C. elegans* as a standard model organism for detecting shallow freshwater and soil pollutants.** For example, [ASTM International’s E2172–01](https://www.astm.org/e2172-01r14.html) standard outlines the use of *C. elegans* in laboratory soil toxicity tests, and the International Organization for Standardization's [ISO10872 standard](https://www.iso.org/obp/ui/en/#iso:std:iso:10872:ed-2:v1:en) provides detailed guidelines on using *C. elegans* to evaluate chronic toxicity in environmental media. Similarly, many researchers have already begun employing these methods for environmental assessments[^2] More relevantly, the Organisation for Economic Co-operation and Development’s [ENV/JM/MONO(2015)16/PART7 standard](https://one.oecd.org/document/ENV/JM/MONO(2015)16/PART7/en/pdf) specifies the use of *C. elegans* to measure the environmental impact of silver nanoparticles. These established methods provide a solid foundation for our measurements.

Therefore, this year we utilized *Caenorhabditis elegans* as a model organism for environmental risk assessment, simulating the biological effects of the release of our chassis microorganisms and microparticle products into the environment. **We propose that this method could serve as a universal approach for biotoxicity testing, offering a valuable reference for other teams.**

<div style="display: flex; justify-content: space-between; align-items: center;">       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/safety-c.gif" style="width: 80%; height: auto;">     
   </div>       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/safety-f.gif" style="width: 80%; height: auto;">     
   </div> 
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/safety-u.gif" style="width: 80%; height: auto;">     
   </div>   
</div>
<div style="text-align: center; margin-top: 10px;">
   <span style="color: gray">Figure 1-3: Representative swimming images of <em>Caenorhabditis elegans</em> fed with <em>E.coli</em> strain OP50, <em>E.coli</em> introduced with the hydrogenase core component HoxF in a carboxysome, and <em>E.coli</em> introduced with the hydrogenase core component HoxU in a carboxysome (<em>E.coli</em> strain: BL21 DE3, induced with 1 mM IPTG, cultured at 37°C for 30 hours in 100 mg/L Ni2+ solution under 5% hydrogen catalysis). The images are displayed at six times the normal speed.</span>
</div>

By feeding nematodes with the standard *E. coli* strain OP50 and engineered bacteria [containing nickel microparticle products](https://2024.igem.wiki/fudan/results/) and comparing their locomotion behavior, we found no significant difference in movement between the control group fed OP50 and the experimental group. This indicates that our product is harmless to nematodes, making it environmentally and biologically friendly.

<div style="display: flex; justify-content: space-between; align-items: center;">       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/mm.jpg" style="width: 80%; height: auto;">           
   </div>       
   <div style="flex: 1; text-align: center;">           
      <img src="https://static.igem.wiki/teams/5115/txj/.png" style="width: 80%; height: auto;">           
   </div>   
</div>
<div style="text-align: center; margin-top: 10px;">
   <span style="color: gray">Figure 4 & 5: Comparison of the average distance moved per minute and the average turning angle per turn of <em>Caenorhabditis elegans</em>. The nematodes were fed with <em>E. coli</em> strain OP50, <em>E. coli</em> containing the hydrogenase core component HoxF in the carboxysome, and <em>E. coli</em> containing the hydrogenase core component HoxU in the carboxyl matrix (strain: BL21 DE3, induced with 1 mM IPTG, cultured in a 100 mg/L Ni2+ solution under 5% hydrogen catalysis at 37°C for 30 hours). Five L2-stage nematodes were picked for each plate and cultured at 20°C for 18 hours. For each dataset, at least three independent nematode images were collected, and more than 1 minute of movement was recorded using a Nikon D850 camera at 1080p 30fps, yielding at least 1900 data points, analyzed by ImageJ Plugins Animal Tracker.</span>
</div>



## Laboratory Safety

Our laboratory is constructed and maintained in accordance with BSL-II standards, complying with the relevant regulations of the [*Regulations on the Biosafety Management of Pathogenic Microorganism Laboratories of the People's Republic of China* (State Council Order No. 424)](https://www.gov.cn/gongbao/content/2005/content_63265.htm) and the [*National Standard of the People's Republic of China GB 19489-2008 General Requirements for Biosafety in Laboratories*](http://c.gb688.cn/bzgk/gb/showGb?type=online&hcno=EB3B94B543F6E4CD18C044DE6AB64CEC).

Each wet lab team member passed Fudan University's laboratory safety examination and obtained the [certification](https://static.igem.wiki/teams/5115/txj/2024.pdf) before entering the lab. To further ensure biosafety in the specific laboratory environment and operations, all wetlab members also underwent [safety training](https://wiki.actin.cn/images/f/fc/S_Laboratory-Safety-for-Researchers.pdf) for our experimental laboratory space and passed the [corresponding exam](https://wiki.actin.cn/Lab_practice_quiz).



## Risk Identification

### Future risk identification

Although our project is currently applied in relatively controlled environments, it has the potential to be developed for broader applications in the future, such as direct deployment in environmental wastewater treatment or use in mining. In such cases, appropriate modifications—such as the incorporation of carefully designed kill switches or other containment mechanisms—will be essential to prevent unintended spread and ensure safety.

### Dual risk identification

In the laboratory setting, our engineered bacteria exhibit a growth disadvantage compared to wild-type *E. coli*, suggesting they may face significant competitive pressure and potentially fade out in natural environments. However, their high tolerance to heavy metal conditions and resistance to bacteriophages could grant them a survival advantage in certain special environments. For instance, in densely populated and heavily polluted urban areas, our engineered bacteria could theoretically be maliciously exploited to carry pathogenic factors and released into these regions. Nonetheless, we believe that every project has both its bright and dark sides, and we should not abandon promising solutions due to potential risks.



## Conclusion

Through the measures and considerations mentioned above, we believe we have fully adhered to the spirit of iGEM's Biosafety and Biosecurity guidelines. We summarize our achievements as follows:

| Aspects                                                      | Answer                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Did the team make a contribution to biosafety and/or biosecurity? | Yes. Building upon traditional biosafety measures, we have developed innovative approaches that ensure the safety of the project itself and effectively assess and manage potential risks to personnel, the laboratory, and the environment in the event of accidental release. |
| Is their contribution well-characterized and/or well-validated? | Yes. The effectiveness of all the methods we employed has been thoroughly evaluated through experimentation, and their principles and procedures have been meticulously documented for future teams to reference. These methods are sufficiently simple and reproducible. |
| Did the team build upon existing knowledge, understanding, tools or approaches? | Yes. The safety measures we implemented are based on well-established practices that have been validated by previous research and/or are supported by widely accepted industry or standardized protocols, ensuring that the relevant knowledge and tools are highly accessible. |
| In addition to broader safety work, has the team managed any risks from their project appropriately? | Yes. We have carefully considered the potential safety issues arising from our project, including both those we have successfully addressed and those for which we have yet to find solutions. We have strengthened our ability to identify dual-use risks and have aligned our responses with relevant policies. Additionally, we engaged with stakeholders to identify any overlooked concerns. |
| Has the team addressed the use of synthetic biology in the real world? | Yes. We have thoroughly discussed the current and potential future applications of our project and considered the issues that might arise from its use in the real world. |

## Reference

[^1]:Miao, C., Jia, P., Luo, C., Pang, J., Xiao, L., Zhang, T., Duan, J., Li, Y., & Sun, Z. (2024). The size-dependent in vivo toxicity of amorphous silica nanoparticles: A systematic review. *Ecotoxicology and Environmental Safety*, *271*, 115910. https://doi.org/10.1016/j.ecoenv.2023.115910
[^2]: Queirós, L., Pereira, J. L., Gonçalves, F. J. M., Pacheco, M., Aschner, M., & Pereira, P. (2019). *Caenorhabditis elegans* as a tool for environmental risk assessment: Emerging and promising applications for a “nobelized worm”. *Critical Reviews in Toxicology*, *49*(5), 411–429. https://doi.org/10.1080/10408444.2019.1626801

