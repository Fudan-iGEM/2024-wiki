---

title: Model
author:
- name: Zhenghan Chen
  url: /fudan/team/#zhenghan-chen
- name: Liyue Chen
  url: /fudan/team/#liyue-chen
headergif: https://static.igem.wiki/teams/5115/header/mode-example.gif

---

## Picture and Referances to be inserted！！！！

## Bacterial Growth-Diffusion model



Our concept is that our E. coli-based MINERAL system can be industrially applied for the treatment and recovery of Ni-containing wastewater. Although we have validated our conclusions through wet lab experiments, we currently lack the conditions for industrial-scale verification. Therefore, we aim to employ modeling approaches to assess the feasibility of future industrial applications.

Our software has validated the minimal impact of the components introduced into the MINERAL system from the perspective of original component design. In the treatment of Ni-containing wastewater (which has presumably undergone necessary upstream industrial processes to remove or mitigate other factors harmful to the engineered bacteria), the concentration of Ni<sup>2+</sup> ions will significantly affect bacterial growth, thereby influencing the efficiency of Ni absorption.

By integrating data from our wet lab experiments, we have combined the bacterial concentration (OD) with the concentration of Ni²⁺ in the extracellular supernatant. We aim to utilize these data to achieve two main goals: first, to establish the relationship between bacterial growth and Ni absorption capacity; second, to obtain relevant parameters that can be incorporated into spatial distribution models. This will allow us to estimate the required bacterial dosage for industrial applications and provide references for substrate provision.

The most straightforward approach is to use the Logistic Growth Model. We applied it to **E. coli** strains DH5α, HPN, and Nik, using data obtained from the Wet Lab. We measured the environmental Ni²⁺ ion concentration over time at different initial Ni²⁺ concentrations and recorded their growth curves using OD measurements.
$$
N(t) = \frac{K}{1 + \left(\frac{K - N_0}{N_0}\right)e^{-rt}}
$$
We used the Michaelis-Menten kinetic equation to simulate the adsorption of nickel ions by E. coli. The Michaelis-Menten kinetic equation was originally designed to simulate the binding between an enzyme and its substrate. And coincidentally, transmembrane transport often relies on specific transporters on the membrane. Promoting metal ions across the cell membrane by binding to the substrate, these transporters or enzymes play a similar role as catalysts in enzymatic reactions. In the transmembrane transport, when the concentration of nickel ion outside the membrane is low, the transport rate increases linearly. And as the concentration increases, the transporter gradually reaches saturation, and the transport rate tends to the maximum (**v<sub>max</sub>**). This dynamic behavior conforms to the characteristics of the Michaelis-Menten equation: 
$$
r_t = \frac{v_{max}[Ni^{2+}_{env}]}{K_m+[Ni^{2+}_{env}]}
$$
In which **Km** reflects the affinity of the transporter to mercury ion, and **v<sub>max</sub>** is the upper limit of the transport rate. Based on the above analysis results from the two aspects of property and rate change, we believe that Michaelis-Menten kinetic equation can be used to simulate the adsorption of nickel ions by E. coli. 

Through the collection of wet lab data, we fit the curve of Escherichia coli absorption rate - initial concentration of nickel ion: 

|  Parameter  |                        Meaning                         |
| :---------: | :----------------------------------------------------: |
|  $N_{(t)}$  |     OD value of bacterial growth (optical density)     |
|     $r$     |                      growth rate                       |
|     $K$     |                   carrying capacity                    |
| $V_{(max)}$ |                Maximum absorption rate                 |
|  $K_{(m)}$  |                half-saturation constant                |
|  $N_{(i)}$  | Extracellular nickel ion concentration （Environment） |
|     $N$     |              OD value of bacterial growth              |

By integrating the two equations above, we conclude that Ni acts as a survival pressure for E. coli, leading to the following equation:
$$
\frac{dNi}{dt} = -\frac{V_{\max} \cdot Ni \cdot N}{K_m + Ni}
$$
Then we get，
$$
\frac{dN}{dt} = rN \left(1 - \frac{N}{K}\right) - \frac{V_{\max} \cdot Ni \cdot N}{K_m + Ni}
$$
We used a modified method to model the data from the Wet Lab and obtained the following bacterial growth curve:





From the modeling above, we can observe that, on the one hand, nickel ion absorption poses a survival pressure on bacterial growth; on the other hand, as a model intended for industrial application, we need to account for the spatial distribution of bacteria. Therefore, we require an updated model that incorporates these relevant data. The model[^1], proposed by Daiki Kumakura and his team, aims to analyze the growth curve of microbial cultures. It takes into consideration bacterial growth, substrate consumption, metabolite production, and the impact of environmental factors on bacterial growth. However, in the ideal industrial environment we assume, where substrate availability is sufficient and metabolites are properly removed, the focus shifts to the response of bacterial growth to environmental pressure.
$$
\frac{dN}{dt} = \mu a_1 RNp \left( 1 - \frac{N}{K(M)} \right) - dN
$$

$$
K(M) = K_0 + (K - K_0)e^{-\beta M}
$$



Specifically, the environmental pressure from Ni primarily arises from its concentration.

| Parameter |                         **Meaning **                         |
| :-------: | :----------------------------------------------------------: |
|  $K(M)$   |                      carrying capacity                       |
|   $K_0$   |                  Minimum carrying capacity                   |
|    $K$    |                  Maximum carrying capacity,                  |
|    $M$    |                     Nickel concentration                     |
|    $f$    | Influence coefficient of nickel concentration on carrying capacity |



Specifically, nickel ions serve as a limiting factor for bacterial growth, as observed by the decrease in carrying capacity with increased environmental nickel ion concentration.



In fact, the total nickel concentration for safe discharge in industrial settings must be below 1.0 g/mL. While the current bacterial strains still fall short of achieving this precision, it is undeniable that our MINERAL strain demonstrates significant potential in efficiently accumulating nickel. We believe this remains a promising approach.

## NixA Protein Structure

NixA is a Ni²⁺-specific transporter protein found in *Helicobacter pylori*. However, our initial attempts to induce its expression in *E. coli* during wet lab experiments were unsuccessful. Additionally, as NixA is a membrane protein, there is skepticism about whether it can be successfully expressed and stably localized within the membrane of a gram-negative bacterium like *E. coli*, given the differences in membrane structures. To address this, we plan to use molecular structural approaches to elucidate the underlying mechanisms.









[^1]: Kumakura, D., Yamaguchi, R., Hara, A., & Nakaoka, S. (2023). Disentangling the growth curve of microbial culture. *Journal of Theoretical Biology*, *566*, 110631. https://doi.org/10.1016/j.jtbi.2023.110631