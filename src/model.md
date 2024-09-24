---
title: Model
author:
  name: Zhenghan Chen
  url: /fudan/team/#zhenghan-chen
headergif: https://static.igem.wiki/teams/5115/header/mode-example.gif
---

## Introduction

Our biofilm structure is primarily formed by two different strains of *Escherichia coli* that express antigens and nanobodies, respectively. We hope that the *E. coli* biofilm can smoothly **unfold over time**, and we aim to **manipulate the shape and expanding (diffusion rate)** of the biofilm unfolding by adjusting parameters such as the **concentrations** of the two strains and their **binding strength**. Before conducting wet experiments, we mathematically validated our ideas.

## Model Design

In Alan Turing's research paper [^1], he proposed a model for simulating the generation of natural patterns in the natural world using **two interacting substances involved in diffusion**. This model is known as a **reaction-diffusion system**, which is essentially the **Turing morphogenesis system**. The specific form of interaction between the two elements in this system is not constrained, and in our design, we regard two strains of *E. coli* that express antigens and nanobodies respectively as interacting elements in the system with diffusive properties.

## Parameter

|      Parameter       |           Meaning           |
| :------------------: | :-------------------------: |
|      $U/V/A/B$       |        Concentration        |
|         $F$          |     Replenishment rate      |
|         $K$          |      Consumption rate       |
|         $D$          |    Diffusion coefficient    |
|         $l$          |       Diffusion rate        |
| $\overrightarrow{V}$ | Velocity distribution field |

## Assumption

1. The expression of antigens and nanobodies within *E. coli* is uniform.
2. The ample supply of nutrients.
3. The biofilm is unfolded in a two-dimensional plane, with no consideration for three-dimensional structure at present.
4. The consumption rate ($K$) and replenishment rate ($F$) are influenced by the strength of antigen-nanobody binding among *E. coli*.



## Model Establishment

Our model is primarily based on two existing models. 

The first one is proposed by Ercan M. Dede[^2], which defines a tensor called the diffusion coefficient related to the velocity vector distribution field. This coefficient is dependent on the direction and rate of diffusion and is used to describe the diffusion and reaction terms in the Turing morphogenesis system.
In this model the core expression is:
$$
\dfrac{\partial U}{\partial t}=\nabla·D_u\nabla{U}+R_u(U,V)
$$

$$
\dfrac{\partial V}{\partial t}=\nabla·D_v\nabla{V}+R_v(U,V)
$$

Here $R_u(U,V)$ and $R_v(U,V)$ represent the reaction terms, and $\nabla·D_u\nabla{U}$ and $\nabla·D_v\nabla{V}$ stand for the diffusion terms, while $D_u$ and $D_v$ are the diffusion coefficients mentioned above.

The second model is the Gray-Scott model[^3], which introduces a parameter called the diffusion rate, a scalar value related to the diffusion rate. This model is used to describe a specific chemical reaction. In the Gray-Scott model, the core expression is:
$$
\dfrac{\partial u}{\partial t}=l_u\nabla^2{u}-uv^2+F(1-u)
$$

$$
\dfrac{\partial v}{\partial t}=l_v\nabla^2{v}+uv^2-(F+k)v
$$

Where $l_u$ and $l_v$ are the previously mentioned diffusion rate, $F$ represents the supply rate, and $K$ denotes the consumption rate. The model describes the chemical reaction process as follows:
$$
U+2V\longrightarrow3V
$$

$$
V\longrightarrow P
$$

Where $P$ represents an inert substance. The conversion of $V$ into $P$ signifies the consumption of substance $V$, and the rate of this consumption is controlled by the parameter consumption rate $K$. Externally, substance $U$ is supplied to the system, and the rate of supply is governed by the parameter $F$[^4].

Taking into account the characteristics of the two mathematical models mentioned above, we propose the following mathematical model:
$$
\dfrac{\partial A}{\partial t}=\nabla·D_a\nabla{A}-AB^2+F(1-A)
$$

$$
\dfrac{\partial B}{\partial t}=\nabla·D_b\nabla{B}+AB^2-(F+K)B
$$

$$
D_a=l_a(\overrightarrow{V}\bigotimes\overrightarrow{V}+\delta_{ij})
$$

$$
D_b=l_b(\overrightarrow{V}\bigotimes\overrightarrow{V}+\delta_{ij})
$$

Where $A$ and $B$ represent the concentrations of two substances, $F$ is the supply rate, $K$ is the consumption rate, $D_a$ and $D_b$ are diffusion coefficients, $l_a$ and $l_b$ are diffusion rates, $\overrightarrow{V}$ is the velocity distribution field, $\bigotimes$ denotes the tensor product, and $\delta_{ij}$ is the unit matrix.

In our model, $A$ and $B$ represent the **concentrations of two types of *E. coli* expressing antigens and nanobodies**, respectively. $F$ and $K$ represent **the rates of *E. coli* division and the rate of connection formation between two cells** under certain antigen-nanobody binding strength conditions.

## Results

### Matlab simulation

In our model, the expansion process of the biofilm is shown in [Figure 1](#fig-1).

<div style="text-align: center;" id="fig-1">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/model-biofilm.gif"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 1: Biofilm expansion process.
<br>
This gif shows the dynamic process of biofilm expansion. Parameters are set as: la=0.5, lb=0.9, V=0, F=0.055, K=0.062, stoptime=7900.</small></p>
</div>
</div>

When keeping the other parameters constant, **altering the binding strength** of the antigen-nanobody interaction, specifically by changing $F$ and $K$, results in different bacterial membrane morphologies.

With a fixed value of $K = 0.062$ and varying the parameter $F$, it was observed that at lower values of $F$, the biofilm tends to form spotted patterns, whereas as $F$ increases, the membrane develops finer stripe-like patterns. However, if $F$ becomes excessively large, the rate of biofilm formation decreases ([Figure 2](#fig-2)).

 <div style="text-align: center;" id="fig-2">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/model-1.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 2: Observe how parameter F affects biofilm expansion.
<br>
Fix K at 0.062 and change F from 0.02 to 0.07.</small></p>
</div>
</div>


When $F$ is held constant at 0.055, it was observed that within a certain range, as the value of $K$ increases, the rate of biofilm formation decreases, while the patterns become finer ([Figure 3](#fig-3)).

<div style="text-align: center;" id="fig-3">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/model-2.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 3: Observe how parameter K affects biofilm expansion.
<br>
Fix F at 0.055 and change K from 0.0606 to 0.0636.
</small></p>
</div>
</div>


When we hold the other parameters constant and **vary the initial distribution concentration**, different biofilm morphologies are observed. As seen in [Figure 4](#fig-4), as the bacterial concentration gradually increases, the rate of biofilm formation accelerates. Furthermore, the shape of the biofilm patterns is influenced by the initial concentration distribution. If the initial concentration distribution exhibits high symmetry, the resulting biofilm exhibits a high degree of symmetry as well.

<div style="text-align: center;" id="fig-4">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/model-3.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 4: Observe how initial concentration affects biofilm expansion.
<br>
Different initial bacterial concentration distributions (start) and biofilm patterns at stoptime=10000 (end).</small></p>
</div>
</div>

### Brightfield images of bacterial lawn

In our [*E. coli - E. coli* Binding experiment](/results/#_3-biofilm-formation-system), we obtained brightfield images of biofilm formed by Ag/Nb *E. coli*, as depicted in the [Figure 5](#fig-5). This closely resembles the results generated by [our matlab code](#code-accessibility), confirming the validity of model predictions.

<div style="text-align: center;" id="fig-5">
<img src="https://static.igem.wiki/teams/4765/wiki/jzk/experiment-2.png"
style='width:70%'>
<br>
<div>
<p><small style="color: gray">Figure 5: Biofilm captured in wet lab experiment.</small></p>
</div>
</div>


## Conclusion

Through the aforementioned model, we have provided **preliminary evidence of the feasibility of biofilm expansion** and analyzed the **impact of bacterial concentration and the binding strength between antigens and nanobodies** on biofilm formation. Based on our analysis, we believe that when choosing the binding strength between antigen and nanobody, it is crucial to ensure that $F$ and $K$ values are moderate. This means that the rate of *E. coli* division and the formation of connections between cells should be moderate as well. This approach results in finer patterns while maintaining an adequate rate of biofilm formation.

Simultaneously, when selecting the bacterial concentration, opting for a higher concentration is advisable to ensure a faster rate of biofilm expansion. However, to achieve the desired patterns, attention must also be paid to the initial concentration distribution shape.

In conclusion, this model has provided us with **a qualitative understanding of biofilm properties** before conducting wet experiments, aiding us in the design and execution of experiments.

## Code Accessibility

MATLAB code that generates the pictures above is shown below, or you can download [this file](https://static.igem.wiki/teams/4765/wiki/jzk/fudan2023-model.pdf).

```matlab
%%
clear;clc;close all;
%% Step 2: Set the coefficient value and initial matrix

% The size of the grid
% width = 128;
width = 128*2;

% Initial condition
A = ones(width);
B = zeros(width);
%B(51 ,51) = 1;
%B(61 ,61) = 1;
B(51:60 ,51:70) = 1;
B(61:80 ,71:80) = 1;

% Time/Iterations
dt = .25;
stoptime = 10000;
t = 0;
nframes = 1;

% Diffusion rate
la = 0.5;
lb = 0.9;
% la =0.5;
% lb =la/2;

% Diagonal gradient matrix [0.1---0.7]
tmp=1:width;
D=transpose(tmp)*tmp;
D=0.1+D*(0.7-0.1)/(width^2);

% Convolutional kernel
K_L=[0,1,0;
     1,-4,1;
     0,1,0];

% Reaction term parameters
F=.055; 
K=.062; 


%% Main program

while t < stoptime
%     anew = A + (la*conv2(A,K_L,'same') - A.*B.^2 + F*(1-A))*dt;
%     bnew = B + (lb*conv2(B,K_L,'same') + A.*B.^2 - (K+F)*B)*dt;
    anew = A + (conv2(A,K_L,'same').*D - A.*B.^2 + F*(1-A))*dt;
    bnew = B + (conv2(B,K_L,'same').*D*0.5 + A.*B.^2 - (F+K)*B)*dt;

    A = anew;
    B = bnew;
    t = t+dt;
    nframes = nframes+1;
    %Plotting
    if mod(t,100)==0
        axes('Position',[0 0 1 1])
        axis off
        hi = image(B);
        hi.CDataMapping = 'scaled';
        pause(0.1)
    end
end
```

## References

[^1]: Turing, A. M. (1952). The chemical basis of morphogenesis.  *Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences*, *237*(641), 37–72. https://doi.org/10.1098/rstb.1952.0012
[^2]: Dede, E. M., Zhou, Y., & Nomura, T. (2020). Inverse design of microchannel fluid flow networks using Turing pattern dehomogenization. *Structural and Multidisciplinary Optimization*, *62*(4), 2203–2210. https://doi.org/10.1007/s00158-020-02580-w
[^3]:  *Reaction-Diffusion by the Gray-Scott Model: Pearson's Parameterization at MROB*. (n.d.). Retrieved October 9, 2023, from http://www.mrob.com/pub/comp/xmorphia/

[^4]: *Pearson's Classification (Extended) of Gray-Scott System Parameter Values at MROB*. (n.d.). Retrieved October 9, 2023, from http://www.mrob.com/pub/comp/xmorphia/pearson-classes.html
