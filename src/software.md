---
title: Software
author:
  name: Hongcheng Chen
  url: /fudan/team/#hongcheng-chen
headergif: https://static.igem.wiki/teams/5115/header/software-header.gif
---

<br><br>

Try PartHub 3.0 [here](https://fudanigem2024.scm.azurewebsites.net/) (TBA) or follow the [installation pipeline](#tutorial) to deploy our software on your computer!


## Highlights

- Efficiently uses the iGEM Registry and supports relevant synthetic biology standards like Genbank and FASTA format
- Validation against both published and new experimental data, with detailed documentation and user studies
- Well-documented APIs and programmatic access; easy integration with Snapgene
- Intuitive web UI, comprehensive documentation, and detailed tutorial

## Overview

Parts are at the core of synthetic biology, and over the years, Fudan's software has been dedicated to providing useful tools for parts management and analysis ([Table 1](#table1)). Our initial efforts, [PartHub 1.0](https://2022.igem.wiki/fudan/software) and [PartHub 2.0](https://2023.igem.wiki/fudan/software), were well-received for their features in displaying parts' citation relationships and enhancing search functionality. However, a critical gap remained: the importance of **sequence information** for parts. While citation relationships and search functionalities are valuable, the sequence of a part is arguably the most essential piece of information. The sequence not only defines the functional properties of a part but also influences its compatibility and performance in host organisms.

Therefore, we are excited to introduce **PartHub 3.0** this year, which addresses this gap by focusing on two critical aspects of parts: **burden estimation** and **similarity query**.

<div style="text-align: center;" id="table1">
          <span style="color: gray">Table 1: Comparison of PartHub 1.0-3.0</span>
</div>

|PartHub Version|Main Feature|Use case|
|:---:|:---:|:---:|
|1.0|Display Biobrick Citation Relationships|Researchers can quickly find the upstream and downstream citations of a specific part, helping them understand its performance and usage in different experiments.|
|2.0|Enhanced Search Functionality|Users can quickly find the parts they are interested in thanks to advanced search and recommendation algorithm.|
|3.0|Parts Burden Estimation and Similarity Query|Apart from the features above, researchers can also understand the burden of different parts and find parts similar to their target part.|

### Schematic Figure

<div style="text-align: center;" id="figure-1">
<img src="https://static.igem.wiki/teams/5115/software/schematic2.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 1. Schematic figure of PartHub 3.0.
</small></p>
</div>
</div>

## Features

PartHub 3.0 is designed with a strong emphasis on user-friendliness, ensuring that researchers without computer science background can also easily navigate and utilize its advanced features. The frontend of our software is built using [Vue.js 3.0](https://vuejs.org/) and [Ant Design Vue 4.2.3](https://antdv.com/components/overview) to enhance the visual appeal and usability of the application. On the backend, we employ [Flask](https://flask.palletsprojects.com/en/3.0.x/) for efficient and scalable development. For data storage, we use [Neo4j 5.11](https://neo4j.com/), a powerful graph database that excels in managing large datasets with complex relationships. This combination of technologies ensures that PartHub 3.0 is not only robust but also intuitive and accessible.

Our software is compatible with the following browsers:

| <img src='https://static.igem.wiki/teams/5115/software/edge-logo.svg' style='height:2rem'>Edge | <img src='https://static.igem.wiki/teams/5115/software/firefox-logo.svg' style='height:2rem'>Firefox | <img src='https://static.igem.wiki/teams/5115/software/chrome-logo.svg' style='height:2rem'>Chrome | <img src='https://static.igem.wiki/teams/5115/software/safari-logo.svg' style='height:2rem'>Safari | <img src='https://static.igem.wiki/teams/5115/software/opera-logo.svg' style='height:2rem'>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Edge version≥116                                             | version≥116                                                  | version≥116                                                  | version≥18                                                   | version≥100                                                  |

To facilitate integration with other tools and platforms, we have also created comprehensive and easy-to-use RESTful APIs for our software. The API documentation provides detailed information on all available endpoints, including request and response formats and example usage.

<PDF url="https://static.igem.wiki/teams/5115/software/software-apis.pdf" page="1" width="100%" height='75vw' />

To ensure the continuous improvement of PartHub 3.0, we have compiled a detailed [document](link TBA). We have also uploaded our source code on [Gitlab](https://gitlab.igem.org/2024/software-tools/fudan), and created a [Docker image](https://hub.docker.com/repository/docker/chc1234567890/fudanigem2024/general).

**(pdf TBA)**

## Tutorial

### 1. Installation

**TBA**

### 2. Burden Predictor

**TBA**

### 3. Similar Parts Searching

**TBA**

## Burden Predictor

### Introduction

As synthetic biology continues to advance, the parts being introduced into cells are becoming increasingly complex. However, introducing complex parts into cells can increase the metabolic burden, thereby slowing down the growth rate of the cells. Excessive burden can lead to significant selective pressure, causing engineered bacteria to mutate back to their wild-type forms more quickly, which can result in the engineered cells being out-competed by their less functional or non-functional mutants[^1]. Therefore, it is crucial to investigate why some parts impose a greater burden than others.

When cells express heterologous genes, they must utilize their own resources, such as ribosomes, tRNAs, and ATP. The limited availability of these resources for gene expression is one of the primary and most predictable sources of cellular burden. A recent study measured the burden of 301 parts from iGEM registry and found that the depletion of gene expression resources was the main cause of the observed burden[^2]. However, there are currently no methods available to predict the burden of a part based on its sequence and structure. Therefore, we have developed a model that takes into account the allocation of gene expression resources within the cell, using only the sequence and structure of the part as input.

### Implementation

#### Model Construction

The core of Burden Predictor is an improved version of the mechanistic model framework from Weiße et al.[^3] and Nikolados et al.[^4]. We did not choose genome-scale models or machine learning models because of their computational intensity and time consumption, as well as the scarcity of high-quality data.

As illustrated in [Figure 4](#figure-4), our model incorporates the basic gene expression processes including transcription (TX) and translation (TL). Transcription is simplified into a dumped process, while translation contains two stages - initiation, when the ribosome binds to the ribosome binding site (RBS) of the mRNA; and elongation, when the ribosome moves along the open reading frame and produces polypeptide chain.

<div style="text-align: center;" id="figure-4">
<img src="https://static.igem.wiki/teams/5115/software/model-schematic3.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 4. Schematic figure of Burden Predictor. TX, transcription; TL, translation.
</small></p>
</div>
</div>


To capture how cells allocate their resources across various types of proteins, we partitions the proteome into five components, including heterologous proteins (expressed by the parts introduced into the cell), ribosomes, metabolic enzymes, transporters, and housekeeping proteins. In our model, mRNA transcripts compete for free ribosomes and energy for translation, leading to a competitive environment where genes from the introduced parts must contend with native genes for cellular resources. This competition, coupled with the dilution of heterologous proteins due to the predicted growth rate, creates a two-way interaction between the parts and the cellular host.

To make our software more useful to synthetic biology, we have introduced the commonly used parameters of parts into our software, including plasmid copy number, promoter strength, RBS strength, and the length the coding sequence (CDS). In our software, plasmid copy number and promoter strengths is modeled as the maximal TX rate of a gene, RBS strengths the binding affinity and dissociation constant between transcripts and ribosomes, and CAI the maximum TL elongation rate. These features allow synthetic biologists to explore how different environmental and genetic conditions influence the behavior of gene circuits within the host cell.

We built a small library containing several commonly used basic parts (promoters, RBS, CDS) with experimentally validated promoter strength and RBS strength **(pdf TBA)**. For the basic parts not in the parts library, we employed [Promoter Calculator](https://github.com/barricklab/promoter-calculator) and [RBS calculator](https://github.com/hsalis/Ribosome-Binding-Site-Calculator-v1.0) to estimate the promoter strength and RBS strength based on their sequences, respectively[^5][^6].

#### Methods

In Burden Predictor, we model **TX rate** of the i-th heterologous gene as maximum TX rate multiplies a function of energy: 

$$w_i^c = w_{i,\max}^c \frac{a}{\theta_x + a}$$

where $w_{i,\max}^c$ is the maximum TX rate, $\theta_x$ is the transcriptional threshold, and $a$ is the amount of energy.

The maximum TX rate is determined by the copy number of the plasmid and the promoter strength:

$$w_{i,\max}^c = \frac{N}{\beta_{n}} \cdot \frac{H_{prom}}{\beta_{prom}}$$

where $N$ is the plasmid copy number, $H_{prom}$ is the promoter strength from our basic parts library, $\beta_n$ and $\beta_{prom}$ are scaling parameters.

**TL initiation rate** is modeled by the ratio of the binding rate constant $k_{b,i}^c$ to the unbinding rate constant $k_{u,i}^c$ :

$$\frac{k_{b,i}^c}{k_{u,i}^c} = \frac{H_{RBS}}{\beta_{RBS}}$$

where $H_{RBS}$ is the RBS strength from our basic parts library, and $\beta_{RBS}$ is the scaling parameter.

**TL elongation rate** is modeled as follows: 

$$v_x = c_x \frac{\gamma(a)}{n_x}$$

where $c_x$ is the amount of ribosome-mRNA complex, $n_x$ the length of polypeptide chain, and $\gamma(a)$ is an energy-dependent function:

$$\gamma(a) = \frac{\gamma_{\max}a}{K_{\gamma} + a}$$

where $\gamma_{\max}$ is the maximum TL elongation rate, and $K_{\gamma}$ the energy required when the rate reaches half-maximum.

Further details on the construction and parametrization of Burden Predictor can be found in the Methods section of the software documentation.

**(pdf TBA)**


w_rep for inducible promoter

Promoter & RBS Strength Calculation

### Results

#### Parameter fitting

Considering the characteristics of the [data](https://static.igem.wiki/teams/5115/software/fitting-data.pdf) we used, we manually set $\beta_{n}$ to 200 and fitted $\beta_{prom}$ and $\beta_{RBS}$ using the function`curve_fit` from [SciPy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html). The fitting result is shown in [Figure 5](#figure-5).

<div style="text-align: center;" id="figure-5">
<img src="https://static.igem.wiki/teams/5115/software/fitting.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 5. Fitting results of burden
</small></p>
</div>
</div>

#### Benchmarking of Promoter Calculator and RBS Calculator

To test the accuracy of the Promoter Calculator and the RBS Calculator, we conducted a benchmarking process for both of the calculators. This benchmarking involves converting the predicted data from these calculators to the same magnitude as the experimental data, ensuring direct comparability and integration into our software.

For the Promoter Calculator, we benchmarked its accuracy by converting the predicted promoter strength to the same magnitude of the experimental data. This conversion was achieved using the following equation:

$$H_{prom} = K \cdot v_{prom} + B$$

where $H_{prom}$ represents the converted promoter strength that matches the magnitude of the experimental data, and $v_{prom}$ is the promoter strength calculated by the Promoter Calculator. The constants $K$ and $B$ are determined through linear regression, and the fitting results are shown in [Figure 7](#figure-7).

<div style="text-align: center;" id="figure-7">
<img src="https://static.igem.wiki/teams/5115/software/promoter-benchmark1.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 7. The experimentally measured relative promoter strength vs. promoter strength calculated by Promoter Calculator
</small></p>
</div>
</div>



Unlike the Promoter Calculator, the RBS Calculator calculates the total Gibbs free energy ( $\Delta G$ ) of the entire translation initiation process. Therefore, we benchmarked the accuracy of the RBS Calculator by converting the calculated $\Delta G$ to match the experimental data. This conversion was performed using the following equation:

$$H_{RBS}=K\cdot \exp (-B \cdot\Delta G)$$

where $H_{RBS}$ is the converted RBS strength that aligns with the magnitude of the experimental data, and $\Delta G$ is the Gibbs free energy calculated by the thermodynamic model of the RBS Calculator, and $K$ and $\beta$ are constants determined through least squares fitting, and the fitting results are shown in [Figure 8](#figure-8).

<div style="text-align: center;" id="figure-8">
<img src="https://static.igem.wiki/teams/5115/software/rbs-benchmark1.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 8. The experimentally measured relative RBS strength vs. the Gibbs free energy calculated by RBS Calculator
</small></p>
</div>
</div>

The data used for benchmarking can be accessed [here](https://static.igem.wiki/teams/5115/software/benchmarking-data.pdf).

#### Validation against experimental data

1. we chose several parts that have been measured by experiments[^2].

2. 我们自己做的parts

wiki 上放所有实验 parts 的 experimental_burden-simulated_burden 图

parts used table & experimental data 放到 static 上去，链接

#### Relationship between burden and $H_{prom}$, $H_{RBS}$, and CDS length, etc.

##### Burden vs. H_prom

The burden of a promoter (H_prom) is a critical factor that influences the expression levels of downstream genes. We analyzed the relationship between the burden and the promoter strength (H_prom) to understand how promoter strength affects the metabolic burden. The resulting scatter plot and heatmap show the distribution of promoter burdens across various parts in the iGEM Registry. This analysis helps in identifying promoters that are less likely to cause significant metabolic burden, which is crucial for maintaining cell viability and efficient gene expression.

##### Burden vs. H_RBS

The ribosome binding site (RBS) is another key element that affects gene expression. We evaluated the relationship between the burden and the RBS strength (H_RBS) to determine its impact on the model's predictions. The scatter plot and heatmap of burden vs. H_RBS illustrate the distribution of RBS burdens and help in selecting RBS sequences that optimize protein production without imposing excessive metabolic load on the cell.

##### Burden vs. H_prom and H_RBS Heatmap

To gain a comprehensive understanding of the combined effects of promoters and RBSs, we created a heatmap that visualizes the burden of both elements together (H_prom and H_RBS). This heatmap provides insights into the synergistic or antagonistic effects of promoter and RBS combinations. By identifying optimal combinations, researchers can design constructs that achieve the desired expression levels with minimal metabolic burden.

##### Burden vs. CDS Length

The length of the coding sequence (CDS) can also influence the metabolic burden and expression efficiency. We analyzed the relationship between the burden and the length of the coding sequences (CDS_length). The resulting heatmap and scatter plot show how CDS length affects the metabolic burden. This analysis is particularly useful for designing constructs with long CDSs, ensuring that they do not overwhelm the cellular machinery.

### Discussion

Flexible for further development

## Similarity Estimator

### Introduction

Sequences are fundamental in synthetic biology, and any improvements or optimizations based on them can significantly enhance the design and experimental efficiency of biological constructs. Recognizing that similar parts are more likely to have similar biological characteristics and functions, we have developed the Similarity Estimator, a tool that can estimate the similarity of parts in the iGEM Registry. This tool is now integrated into our previously developed PartHub, leveraging both sequence and category information to provide a comprehensive similarity score. By identifying and utilizing parts with similar properties, researchers can streamline the process of designing and testing new biological constructs, thereby accelerating their research and development efforts.

### Implementation

Initially, we tried to estimate the similarity of parts by text embeddings based on k-mers. It is 一种新兴的基于机器学习的序列相似度计算方法. However, 这种方法不能过于注重全局，不能很好捕获局部特征，也不能……（请自行思考并添加）. Therefore, we employ BLAST (Basic Local Alignment Search Tool) to align sequences and calculates similarity based on one of its key indicator of sequence similarity - the bitscore. The primary reason for this choice is that BLAST is a robust method for sequence alignment, providing reliable bitscores that reflect the degree of sequence similarity. Additionally, using the bitscore allows for a more precise and biologically meaningful comparison of sequences compared to k-mer-based methods, which can be less sensitive to small but significant differences.

To further enhance the similarity assessment, the software also considers the category labels of parts from the iGEM Registry. This is achieved by calculating the number of shared categories and assigning a weight to each category based on its hierarchical level. This approach ensures that parts with similar functional annotations are given higher similarity scores.

The similarity relationships and reference relationships between parts are stored in a Neo4j database. Neo4j is a powerful graph database that is well-suited for handling complex relationships and providing efficient queries. This allows for quick and accurate retrieval of similarity information.

For visualization, the software uses Neovis.js, a JavaScript library that provides an intuitive and interactive way to explore the graph data. This visualization helps users to understand the relationships between parts and identify clusters of similar parts.

When calculating the similarity between parts, the software excludes reference and twin parts to avoid redundancy and ensure that the similarity scores are meaningful. Reference parts are often duplicates or highly similar to other parts, and twins are exact copies, which can skew the similarity scores.

The software does not distinguish between basic parts and composite parts when calculating similarity. This is because both types of parts can have significant biological relevance, and distinguishing between them may overlook important similarities. By treating all parts equally, the software provides a more comprehensive and inclusive similarity assessment.

#### Sequence similarity

BLAST    bitscore identity e-value<1e-5

$$\text{SeqScore}_{i,j} = \max\limits_{\text{id}(k)=(i,j)} (0.8 \times \frac{\text{BitScore}_k}{\max\limits_l \text{BitScore}_l} + 0.2 \times \text{identity}_k)$$

#### Category similarity

共有的category数量

$c_{i,j}$ : array - the category labels both A and B have

$d_{i,j}$ : array - the level of category of $c_{i,j}$

$$\text{CatScore}_{i,j} = \sum\limits_{k} B^{d_{i,j,k}}$$

where $B=1.5$

#### overall score

$$\text{OverallScore}_{i,j} = \min (\text{SeqScore}_{i,j} + \text{CatScore}_{i,j}, 100)$$

#### similarity comparison between database and uploaded file

### Example

以今年的parts为例

## DBTL Cycle

写几次code review里面的更改

## Reference

[^1]: Rugbjerg, P., Myling-Petersen, N., Porse, A., Sarup-Lytzen, K., & Sommer, M. O. A. (2018). Diverse genetic error modes constrain large-scale bio-based production. *Nature Communications*, *9*(1), 787. https://doi.org/10.1038/s41467-018-03232-w

[^2]: Radde, N. (2024). Measuring the burden of hundreds of BioBricks defines an evolutionary limit on constructability in synthetic biology. *Nature Communications*. https://doi.org/10.1038/s41467-024-50639-9

[^3]: Weiße, A. Y., Oyarzún, D. A., Danos, V., & Swain, P. S. (2015). Mechanistic links between cellular trade-offs, gene expression, and growth. *Proceedings of the National Academy of Sciences*, *112*(9), E1038–E1047. https://doi.org/10.1073/pnas.1416533112
[^4]: Nikolados, E.-M., Weiße, A. Y., Ceroni, F., & Oyarzún, D. A. (2019). Growth Defects and Loss-of-Function in Synthetic Gene Circuits. *ACS Synthetic Biology*, *8*(6), 1231–1240. https://doi.org/10.1021/acssynbio.8b00531
[^5]: LaFleur, T. L., Hossain, A., & Salis, H. M. (2022). Automated model-predictive design of synthetic promoters to control transcriptional profiles in bacteria. *Nature Communications*, *13*(1), 5159. https://doi.org/10.1038/s41467-022-32829-5
[^6]: Tian, T., & Salis, H. M. (2015). A predictive biophysical model of translational coupling to coordinate and control protein expression in bacterial operons. *Nucleic Acids Research*, *43*(14), 7137–7151. https://doi.org/10.1093/nar/gkv635