---
title: Software
author:
  name: Hongcheng Chen
  url: /fudan/team/#hongcheng-chen
headergif: https://static.igem.wiki/teams/5115/header/software-header.gif
---

<br/><br/>

Try PartHub 3.0 [here](https://fudanigem2024.scm.azurewebsites.net/) (TBA) or follow the [installation pipeline](#tutorial) to deploy our software on your computer!


## Highlights

- Make good use of iGEM registry; able to conveniently import & export data with genbank & fasta format
-  使用已发表的和新的实验数据对软件进行了验证

- 提供了完整的API；可以方便地整合进snapgene的工作流程中
- 直观的webUI；完整的代码文档和教程

## Overview

Parts are at the core of synthetic biology, and over the years, Fudan's software has been dedicated to providing useful tools for parts management and analysis([Table 1](#table1)). Our initial efforts, [PartHub 1.0](https://2022.igem.wiki/fudan/software) and [PartHub 2.0](https://2023.igem.wiki/fudan/software), were well-received for their features in displaying parts' citation relationships and enhancing search functionality. However, a critical gap remained: the importance of **sequence information** for parts. While citation relationships and search functionalities are valuable, the sequence of a part is arguably the most essential piece of information. The sequence not only defines the functional properties of a part but also influences its compatibility and performance in host organisms.

Therefore,, we are excited to introduce **PartHub 3.0** this year, which addresses this gap by focusing on two critical aspects of parts: **burden estimation** and **similarity query**.

<div style="text-align: center;" id="table1">
          <span style="color: gray">Table 1: Comparison of PartHub 1.0-3.0</span>
</div>

|PartHub Version|Main Feature|Use case|
|:---:|:---:|:---:|
|1.0|Display Biobrick Citation Relationships|Researchers can quickly find the upstream and downstream citations of a specific part, helping them understand its performance and usage in different experiments.|
|2.0|Enhanced Search Functionality|Users can quickly find the parts they are interested in thanks to advanced search and recommendation algorithm.|
|3.0|Parts Burden Estimation and Similarity Query|Apart from the features above, researchers can also understand the burden of different parts and find parts similar to their target part.|

### Schematic Figure

软件架构图(TBA)

## User-friendliness

PartHub 3.0 is designed with a strong emphasis on user-friendliness, ensuring that researchers without computer science background can also easily navigate and utilize its advanced features. The frontend of our software is built using [Vue.js 3.0](https://vuejs.org/) and [Ant Design Vue 4.2.3](https://antdv.com/components/overview) to enhance the visual appeal and usability of the application. On the backend, we employ [Flask](https://flask.palletsprojects.com/en/3.0.x/) for efficient and scalable development. For data storage, we use [Neo4j 5.11](https://neo4j.com/), a powerful graph database that excels in managing large datasets with complex relationships. This combination of technologies ensures that PartHub 3.0 is not only robust but also intuitive and accessible.

Our software is compatible with the following browsers:

| <img src='https://static.igem.wiki/teams/5115/software/edge-logo.svg' style='height:2rem'>IE / Edge | <img src='https://static.igem.wiki/teams/5115/software/firefox-logo.svg' style='height:2rem'>Firefox | <img src='https://static.igem.wiki/teams/5115/software/chrome-logo.svg' style='height:2rem'>Chrome | <img src='https://static.igem.wiki/teams/5115/software/safari-logo.svg' style='height:2rem'>Safari | <img src='https://static.igem.wiki/teams/5115/software/opera-logo.svg' style='height:2rem'>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| IE9, IE10, IE11, Edge version≥116                            | version≥116                                                  | version≥116                                                  | version≥16.6                                                 | version≥101                                                  |

(TBA)

To facilitate integration with other tools and platforms, we have also created comprehensive and easy-to-use RESTful APIs for our software. The API documentation provides detailed information on all available endpoints, including request and response formats and example usage.

(pdf TBA)

To ensure the continuous improvement of PartHub 3.0, we have compiled a detailed [document](link TBA). We have also uploaded our source code on [Gitlab](https://gitlab.igem.org/2024/software-tools/fudan), and created a [Docker image](https://hub.docker.com/repository/docker/chc1234567890/fudanigem2024/general)

(pdf TBA)

## Tutorial

### 1. Installation

TBA

### 2. Burden Predictor

TBA

### 3. Similar Parts Searching

TBA

## Burden Predictor

### Introduction

As synthetic biology continues to advance, the parts being introduced into cells are becoming increasingly complex. However, introducing complex parts into cells can increase the metabolic burden, thereby slowing down the growth rate of the cells. Excessive burden can lead to significant selective pressure, causing engineered bacteria to mutate back to their wild-type forms more quickly. This can result in the engineered cells being out-competed by their less functional or non-functional mutants[^1]. Therefore, it is crucial to investigate why some parts impose a greater burden than others.

When cells express heterologous genes, they must utilize their own resources, such as ribosomes, tRNAs, and ATP. The limited availability of these resources for gene expression is one of the primary and most predictable sources of cellular burden. A recent study measured the burden of several parts from the iGEM registry and found that the depletion of gene expression resources was the main cause of the observed burden[^2]. However, 

### Implementation

#### Model Selection

用了 Weiβe et al., 2015 的模型和代码

为什么用 coarse-grained model，而不用 genome-scaled model 或者 AI？

性能好

#### Assumption

#### Promoter & RBS Strength Calculation

strongly related to the context of the sequence

所以最好在线计算

### Results

#### Experimental validation

1. select some representative parts from the 301 parts provided by Radde et al.[^2]

2. 我们自己做的parts

wiki 上放所有实验 parts 的 experimental_burden-simulated_burden 图

parts used table & experimental data 放到 static 上去，链接

#### Relationship between burden and promH, rbsH, and CDS (CAI), etc.

burden-w_i^c, burden-kbic/kuic, burden-promH&rbsH, burden&CAI,...

### Discussion

Flexible for further development

## Similarity

### Introduction

Sequences play a central role in synthetic biology, and any improvements or optimizations based on sequences can significantly enhance design and experimental efficiency. Similar parts are likely to have similar properties or biological functions. 

### Implementation

neo4j

visualization using Neovis.js

为什么没区分 basic 和 composite

去除了 reference & twins

为什么没有用kmer2vec

#### Sequence similarity

BLAST    bitscore identity e-value<1e-5

$$\text{SeqScore}_{i,j} = \max_{\text{id}(k)=(i,j)} (0.8 \times \frac{\text{BitScore}_k}{\max_l \text{BitScore}_l} + 0.2 \times \text{identity}_k)$$

#### Category similarity

共有的category数量

$c_{i,j}$ : array - the category labels both A and B have

$d_{i,j}$ : array - the level of category of $c_{i,j}$

$$\text{CatScore}_{i,j} = \sum_{k} B^{d_{i,j,k}}$$

where $B=1.5$

#### overall score

$$\text{OverallScore}_{i,j} = \min (\text{SeqScore}_{i,j} + \text{CatScore}_{i,j}, 100)$$

#### similarity comparison between database and uploaded file

### Example

以今年的parts为例

## DBTL Cycle

写几次code review里面的更改

## Reference

[^1]: [Rugbjerg, P., Myling-Petersen, N., Porse, A., Sarup-Lytzen, K., & Sommer, M. O. A. (2018). Diverse genetic error modes constrain large-scale bio-based production. *Nature Communications*, *9*(1), 787.](https://doi.org/10.1038/s41467-018-03232-w)

[^2]: [Radde, N. (2024). Measuring the burden of hundreds of BioBricks defines an evolutionary limit on constructability in synthetic biology. *Nature Communications*.](https://doi.org/10.1038/s41467-024-50639-9)

