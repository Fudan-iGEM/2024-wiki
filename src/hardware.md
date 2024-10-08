---
title: Hardware
author:
  name: Kexin Huang
  url: /fudan/team/#kexin-huang
headergif: https://static.igem.wiki/teams/5115/header/hardware-header.gif
---

<br><br>

Wastewater treatment and energy recovery are becoming global concerns with the increase of human activities and substantial consumption of fossil fuels. Even in [Antarctica](#figa), the largest untouched wilderness on our planet, wastewater treatment is urgently needed with the presence of 44 permanently manned research stations[^1].

<div style="text-align: center;" id="figa">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/antarctica.jpg" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 1: Human activities in Antarctica<br><small>(Image from https://pixabay.com/photos/ship-cruise-ice-expedition-7773072/)</small></span>
      <br><br>
    </div>
</div>

<br>

However, ordinary biological filtration devices are typically designed with rigid structures and sizes. This inflexibility leads to high costs and significant challenges in satisfying the vast and various demands of wastewater treatment in remote and off-grid areas, because of the lack of infrastructure, limited funding or difficulty in implementing and maintaining facilities. For example, transferring devices to Antarctica is not easy due to the constraints of remoteness, isolation, harsh weather and other local conditions. Therefore, most countries have chosen processes that use biofilms[^2].

In today's wastewater treatment industry, various [contemporary biofilm reactors](#figb) have been created. However, they still have some limitations. The fluidized bed biofilm reactor (FBBR), for instance, consumes substantial energy due to the frequent collisions of its biofilm-coated particles. And the membrane biofilm reactor (MBfR) is more susceptible to contamination, which can shorten their lifespan[^3].

<div style="text-align: center;" id="figb">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/heavy-metal-tolerance.png" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 2: Types of biofilm in a wastewater environment system</span>
      <br><br>
    </div>
</div>

<br>

We analyze all these limitations and come up with our own solution using carbon nanotubes (CNTs). CNTs possess unique physicochemical and morphological characteristics, excellent adsorption capabilities, and permeability, showing significant potential in various areas[^4]. We have designed an innovative fiber structure based on carbon nanotubes, which can not only carry and nourish our engineered bacteria but also be woven into any required shape and size according to actual needs. In practical application scenarios, we load the engineered bacteria onto our designed fibers and weave them into a form that perfectly matches the target device. With this fiber structure, implated with our engineered bacteria expressing [BBa_K5115067](https://parts.igem.org/Part:BBa_K5115067) and [BBa_K5115068](https://parts.igem.org/Part:BBa_K5115068), deployed in the wastewater treatment device, we can effectively achieve the recovery of nickel.

Compared to traditional filtration devices and biofilm reactors, our customized fiber boasts advantages. The reversibility of our fiber weaving process allows for recycling and reuse, effectively extending the product's lifespan and release the environmental burden. Futhermore, the fiber's construction is characterized by low energy consumption. Our customized fiber serves as a platform that bridges [our engineered bacteria](/fudan/part-collection) to practical applications and offers an efficient, environmentally friendly new strategy for wastewater treatment.

<br>

## Fiber Design

Our fiber uses carbon nanotubes as a skeleton and agarose gel are wrapped around the nanotubes. Subsequently, we assemble several carbon nanotubes into bundles through a spiral extrusion method, generating the carbon nanotube-agarose gel (aCNT) composite fiber, which provides a growth platform for [our engineered bacteria](/fudan/part-collection). We referenced the method for preparing graphene composite microwires by [Professor Hyung-Jun Koo](https://kooslab.seoultech.ac.kr/subList/20000000791)[^5] and the method for preparing high-performance fiber electrodes by [Professor Peng Huisheng](https://penglab.fudan.edu.cn) in our university[^6], and made adjustments so that our composite fibers have good performance while carrying bacteria. We actually adjusted the ratio of the two components in the solution to optimize the way agarose gel to encapsulate the carbon nanotubes, making it easier for bacteria to attach. [The aCNT composite fiber](#fig1) works as a carrier that allows the bacteria to perform normal life activities and engage in recovering nickel.

<div style="text-align: center;" id="fig1">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/hardware-1.jpg" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 3: Agarose–carbon nanotube (aCNT) composite fiber</span>
      <br><br>
    </div>
</div>

<br>

## Build

### Constructing aCNT Composite Fibers

#### [Laboratory Preparation](#fig2)

1. Heat a 2.0g suspension of multi-walled carbon nanotubes (MWNT) (3% by weight in water) to approximately 100 degrees Celsius. Stir continuously for 5 minutes.
2. Add 40mg/50ml of agarose to the solution and stir for 30 minutes while maintaining the temperature.
3. Transfer the hot liquid suspension containing MWNT and agarose into a 5 mL syringe equipped with a needle, and form hydrogel threads by extruding them through the needle with a 0.5 or 1 millimeter diameter hole.
4. Dry the hydrogel threads at room temperature for 12 hours to form aCNT composite fibers [^7].

<div style="text-align: center;" id="fig2">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/hardware-2.jpg" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 4: Production of aCNT composite fiber in laboratory environment</span>
      <br><br>
    </div>
</div>

<br>

#### Industrial Preparation

Use [the apparatus](#fig3) to conduct industrial preparation. The apparatus contains an agarose gel solution. Pass the multi-walled carbon nanotube through the apparatus while controlling the diameter of the inlets and outlets to control the diameter of the fibers. The size and shape are adjustable according to specific needs. Heat the carbon nanotube to approximately 100 degrees Celsius and cool it down quickly to solidify the agarose gel on the surface of the carbon nanotube.

<div style="text-align: center;" id="fig3">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/hardware-3.jpg" style="width: 50%">
    <div>
    	  <span style="color: gray">Figure 5: Production of aCNT composite fiber in industrial environment</span>
      <br><br>
    </div>
</div>

<br>

### Assembling the Fiber-Bacteria Mesh

Use a spinning machine to spiral our composite fibers into bundles and weave them into the desired size and shape.

Soak the woven fiber material in bacterial solution. Stand for 30 minutes to facilitate the adsorption of engineered bacteria onto the surface of fiber. The agarose gel provides nutrients, ensuring the survival of bacteria on the fibers for a period of time. Therefore, we successfully constructed [our fiber-bacteria mesh](#fig4).

<div style="text-align: center;" id="fig4">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/hardware-4.png" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 6: Assembly of the composite fiber-bacterial mesh<br><small>(Image from www.figdraw.com)</small></span>
      <br><br>
    </div>
</div>

<br>

### Multi-Application Scenarios

Our aCNT composite fibers can be used in multiple scenarios. In industrial environments, our complete composite fiber-engineered bacteria mesh can be placed inside the wastewater treatment device. Engineered bacteria on the fiber absorb and reduce nickel ions as the wastewater flows through the fiber mesh.

In natural water bodies, we can weave the fiber into nets similar to fishing nets. Once secured to the banks of rivers or wooden poles in the water, [the fiber nets can naturally hang into the water](#fig8) and achieve purification.

<div style="text-align: center;" id="fig8">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/river-with-fiber.jpg" style="width: 100%">
    <div>
    	  <span style="color: gray">Figure 7: aCNT composite fiber net in water bodies<br><small>(Image from https://pixabay.com/photos/torrent-river-forest-water-6583626/)</small></span>
      <br><br>
    </div>
</div>

<br>

## Primary Test

We purchased pure multi-walled carbon nanotubes (MWNT) from Shenzhen SuiHeng Technology. and prepared a 3% suspension. We then followed the protocol from the article to create the aCNT composite fiber. However, our initial product failed to obtain the desired toughness and exhibited a uneven texture and thickness. We suspected that the this outcome was due to insufficient stirring and inconsistent application of force during the extrusion process.

Therefore, we decided to stir the mixture with a upgraded Magnetic Stirrer (LKTC-B1-T) for a full hour and used a pump to apply a steady force during the extrusion process. These adjustments led to a more homogeneous texture in the fiber, but the issue of toughness persisted.

After literature review, we optimized the suspension ratio as suggested. After conducting a series of concentration gradient experiments, we selected the ratio of 0.5 g MWNT per 50 mL water. After heating for 5 minutes, add 500 mg agarose per 50 mL in the solution and keep stirring for 30 minutes, during which it transforms into a paste-like consistency. Finally, we successfully created some [thin, long black fibers](#fig9).

<div style="text-align: center;" id="fig9">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/result-a1.jpg" style="height:480px">
    <div>
    	  <span style="color: gray">Figure 8: Our primary aCNT fibers</span>
      <br><br>
    </div>
</div>

<br>

We then [put several composite fibers into our bacteria liquid culture](#fig10), placed them in a 37°C incubator for overnight culture. This experiment aims to verify the bacteria's tropism and adhesion to the fibers.

<div style="text-align: center;" id="fig10">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/resultb.jpg" style="height:480px">
    <div>
    	  <span style="color: gray">Figure 9: aCNT fibers soaked with bacteria liquid culture</span>
      <br><br>
    </div>
</div>

<br>

After that, we retrieved the soaked composite fibers. Wash them twice with LB medium thoroughly for a minute (to wash off any residual bacterial liquid). Subsequently, the composite fibers were placed on a clean LB plate and incubated at 37°C for 15 hours. We observed [bacterial growth around the area where the composite fibers were placed](#fig11), suggesting that bacteria could adhere to the fibers.

<div style="text-align: center;" id="fig11">
    <img src="https://static.igem.wiki/teams/5115/hardware-hkx/bacteria1.jpg" style="height:480px">
    <div>
    	  <span style="color: gray">Figure 10: Bacteria adhere to aCNT fibers<br><small>The spread of bacteria around the smily mouth is likely due to movement of the fiber end when placing it onto the plate</small>
          </span>
      <br><br>
    </div>
</div>

<br>

## Reflect and Learn

To refine our fiber design, we utilized the working paradigm of [Integrated Human Practices](/fudan/human-practices/#cycle-4-hardware). We consulted Dr. Han Hui from IES Environmental Protection Technology (Suzhou). After introducing our design, Dr. Han immediately recognized and praised the ingenuity of our approach, convinced by its potential for practical application, and [offered some suggestions](https://2024.igem.wiki/fudan/human-practices/#_6-4-feedback-from-cps-experts).

* She pointed out that in the realm of water treatment engineering, the appropriate consumable replacement cycle is key to industrial application considering the high operational demands of integrated equipment and the cost of consumables. Therefore, our materials need to maintain robust mechanical properties.
* Dr. Han suggested that we first conduct a series of gradient ratio experiments, measuring and comparing the mechanical strength and bacterial adsorption capabilities of aCNT fibers with different proportions of these two components.
* Furthermore, she proposed an alternative: replacing carbon nanotubes with sponge-like materials. This not only promises to preserve water absorption capabilities but also offers large pores conducive to bacterial growth and reduced costs.

Our dialogue with [Suzhou Yisibei](https://www.cps88.cn/) has been instrumental in enhancing our understanding of industrial application and has illuminated a more targeted approach for our hardware design endeavors.

<br>

Our hardware design serves as a carrier for synthetic biology applications. Carbon nanotube-agarose gel composite fibers hold promise for wastewater treatment technology. Traditional biological filtration devices often have fixed structures and single shapes, making it difficult to adapt to the diverse needs of wastewater treatment. In response to this disadvantage, we have designed aCNT composite fibers and test it in laboratory. Composite fibers that can be woven according to actual needs and can carry engineered bacteria, making biological recycling available. The device not only recovers nickel, but can also be easily applied to the recovery of other heavy metals and wastewater purification. Our aCNT composite fibers provide an efficient, environmentally friendly approach for wastewater treatment, as well as innovative solutions for the [sustainable](/fudan/sustainable) development of future bioenergy and green chemical industries.

----

[^1]: Yang, Z., Haizhen, Y., Minghong, C., Feng, W. (2009) Wastewater Treatment Control and Management in the Antarctica. *Technology of Water Treatment*. *35*(3), 1-44. [https://doi.org/10.16796/j.cnki.1000-3770.2009.03.001](https://doi.org/10.16796/j.cnki.1000-3770.2009.03.001)
[^2]: Connor, M. A. (2008). Wastewater treatment in Antarctica. *Polar Record*, *44*(2), 165–171. [https://doi.org/10.1017/S003224740700719X](https://doi.org/10.1017/S003224740700719X)
[^3]: Maurya, A., Kumar, R., & Raj, A. (2023). Biofilm-based technology for industrial wastewater treatment: current technology, applications and future perspectives. *World journal of microbiology & biotechnology*, *39*(5), 112. [https://doi.org/10.1007/s11274-023-03567-7](https://doi.org/10.1007/s11274-023-03567-7)
[^4]: Mishra, Y., Mishra, V., Chattaraj, A., Aljabali, A. A. A., El-Tanani, M., Farani, M. R., Huh, Y. S., Serrano-Aroca, Ã., & Tambuwala, M. M. (2023). Carbon nanotube-wastewater treatment nexus: Where are we heading to?. *Environmental research*, *238*(Pt 1), 117088. [https://doi.org/10.1016/j.envres.2023.117088](https://doi.org/10.1016/j.envres.2023.117088)
[^5]: Lu, C., Jiang, H., Cheng, X., He, J., Long, Y., Chang, Y., Gong, X., Zhang, K., Li, J., Zhu, Z., Wu, J., Wang, J., Zheng, Y., Shi, X., Ye, L., Liao, M., Sun, X., Wang, B., Chen, P., Wang, Y., … Peng, H. (2024). High-performance fibre battery with polymer gel electrolyte. *Nature*, *629*(8010), 86–91. [https://doi.org/10.1038/s41586-024-07343-x](https://doi.org/10.1038/s41586-024-07343-x)
[^6]: Koo, H. J., Kim, S. K., & Braun, P. V. (2014). Facile fabrication of graphene composite microwires via drying-induced size reduction of hydrogel filaments. *RSC advances*, *40*, 20927-20931. [https://doi.org/10.1039/C4RA01154F](https://doi.org/10.1039/C4RA01154F)
[^7]: Kim, S. K., Koo, H. J., Liu, J., & Braun, P. V. (2017). Flexible and Wearable Fiber Microsupercapacitors Based on Carbon Nanotube-Agarose Gel Composite Electrodes. *ACS applied materials & interfaces*, *9*(23), 19925–19933. [https://doi.org/10.1021/acsami.7b04753](https://doi.org/10.1021/acsami.7b04753)
