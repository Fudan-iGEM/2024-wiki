---
title: Software
author:
  name: Hongcheng Chen
  url: /fudan/team/#hongcheng-chen
headergif: https://static.igem.wiki/teams/5115/header/software-header.gif
---

<br><br>

:::tip

Try PartHub 3.0 [here](http://47.97.85.37:5000/) or follow the [installation pipeline](#tutorial) to deploy our software on your own device!

:::


## Highlights

- Efficiently uses the iGEM Registry and supports relevant synthetic biology standards such as Genbank and FASTA format
- Validation against both published and new experimental data
- Flexible and adaptable design, can be easily tailored to a wide range of application scenarios
- Well-documented APIs; easy integration with Snapgene
- Intuitive web UI, comprehensive documentation, and detailed tutorial

## Overview

Parts are at the core of synthetic biology, and over the years, Fudan's software has been dedicated to providing useful tools for parts management and analysis ([Table 1](#table1)). Our initial efforts, [PartHub 1.0](https://2022.igem.wiki/fudan/software) and [PartHub 2.0](https://2023.igem.wiki/fudan/software), were well-received for their features in displaying parts' citation relationships and enhancing search functionality. However, a critical gap remained: the importance of **sequence information** for parts. While citation relationships and search functionalities are valuable, the sequence of a part is arguably the most essential piece of information. The sequence not only defines the functional properties of a part but also influences its compatibility and performance in host organisms.

Therefore, we are excited to introduce **PartHub 3.0** this year, which addresses this gap by focusing on two critical aspects of parts: **burden estimation** and **similarity query** ([Table 1](#table1)).

<div style="text-align: center;" id="table1">
          <span style="color: gray">Table 1: Comparison of PartHub 1.0-3.0</span>
</div>

|PartHub Version|Main Feature|Use case|
|:---:|:---:|:---:|
|1.0|Display Biobrick Citation Relationships|Researchers can quickly find the upstream and downstream citations of a specific part, helping them understand its performance and usage in different experiments.|
|2.0|Enhanced Search Functionality|Users can quickly find the parts they are interested in thanks to advanced search and recommendation algorithm.|
|3.0|Parts Burden Estimation and Similarity Query|Apart from the features above, researchers can also understand the burden of different parts and find parts similar to their target part.|

In our software, 

<div style="text-align: center;" id="figure-1">
<img src="https://static.igem.wiki/teams/5115/software/schematic2.png"
style='width:100%'>
<br>
<div>
<p><small style="color: gray">Figure 1. Schematic figure of PartHub 3.0.
</small></p>
</div>
</div>


## Features

PartHub 3.0 is designed with a strong emphasis on user-friendliness, ensuring that researchers without computer science background can also easily navigate and utilize its advanced features. The frontend of our software is built using [Vue.js 3.0](https://vuejs.org/) and [Ant Design Vue 4.2.3](https://antdv.com/components/overview) to enhance the visual appeal and usability of the application. On the backend, we employ [Flask](https://flask.palletsprojects.com/en/3.0.x/) for efficient and scalable development. For data storage, we use [Neo4j 5.11](https://neo4j.com/), a powerful graph database that excels in managing large datasets with complex relationships. This combination of technologies ensures that PartHub 3.0 is not only robust but also intuitive and accessible.

Our software is compatible with the following browsers:

| <img src='https://static.igem.wiki/teams/5115/software/edge-logo.svg' style='height:1.6rem'>Edge | <img src='https://static.igem.wiki/teams/5115/software/firefox-logo.svg' style='height:1.6rem'>Firefox | <img src='https://static.igem.wiki/teams/5115/software/chrome-logo.svg' style='height:1.6rem'>Chrome | <img src='https://static.igem.wiki/teams/5115/software/safari-logo.svg' style='height:1.6rem'>Safari | <img src='https://static.igem.wiki/teams/5115/software/opera-logo.svg' style='height:1.6rem'>Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| version≥116                                                  | version≥116                                                  | version≥116                                                  | version≥18                                                   | version≥100                                                  |

#### API

To facilitate integration with other tools and platforms, we have also created comprehensive and easy-to-use RESTful APIs for our software. The API documentation provides detailed information on all available endpoints, including request and response formats and example usage.

<PDF url="https://static.igem.wiki/teams/5115/software/software-apis1.pdf" page="1" width="100%" height='75vh' />

#### Document

To ensure the continuous improvement of PartHub 3.0, we have compiled a detailed [document](link TBA). We have also uploaded our source code on [Gitlab](https://gitlab.igem.org/2024/software-tools/fudan), and created a [Docker image](https://hub.docker.com/repository/docker/chc1234567890/fudanigem2024/general) for easier installation.

<!--<PDF url="https://" page="1" width="100%" height='75vh' />-->

## Tutorial

### 1. Installation

::: details Installation

You can directly visit our **live demo** at http://47.97.85.37:5000/.

#### Install with readily available docker image

Please install [docker](https://www.docker.com/) first, and create a file named `docker-compose.yml` with the following content in your working directory:

```yaml
services:
  flask:
    image: chc1234567890/fudanigem2024:1.0.0
    ports:
      - "5000:5000"
    restart: always
    depends_on:
      - parthub
    environment:
      - SERVER_URL=bolt://parthub:7687
      - SERVER_USER=neo4j
      - SERVER_PASSWORD=igem2024
  parthub:
    image: neo4j:5.11
    restart: always
    environment:
      - NEO4J_AUTH=neo4j/igem2024
      - NEO4J_PLUGINS=["graph-data-science"]
      - NEO4J_dbms_security_procedures_allowlist=gds.*
      - NEO4J_dbms_security_procedures_unrestricted=gds.*
    ports:
      - "7474:7474"
      - "7687:7687"
    deploy:
      resources:
        reservations:
          memory: 2G
```

Then, open the terminal (in Windows, cmd or powershell; in Linux and mac, bash), change the working directory to where `docker-compose.yaml` is and run the following command:

```bash
docker compose up -d
```

Once the deployment is complete, PartHub 3.0 will be running at [http://localhost:5000](http://localhost:5000/).

#### Install from source code on Gitlab

The software use [docker](https://www.docker.com/) and [node.js](https://nodejs.org/en) for deployment, so please install them first!

For Linux and mac platform, run the following commands in bash:

```bash
git clone https://gitlab.igem.org/2024/software-tools/fudan.git
cd fudan/webUI
npm install
cd ..
bash pack.sh
```

For Windows platform, run the following commands in cmd or powershell:

```bat
git clone https://gitlab.igem.org/2024/software-tools/fudan.git
cd fudan/webUI
npm install
cd ..
pack.bat
```

Once the deployment is complete, PartHub 3.0 will be running at [http://localhost:5000](http://localhost:5000/).

:::

### 2. Burden Predictor



:::tip

**Warning: ** Do not include Non-ASCII characters in the sequence file, or it may cause error!

:::

### 3. Similar Parts Searching

**TBA**

## Burden Predictor

### Introduction

As synthetic biology continues to advance, the parts being introduced into cells are becoming increasingly complex. However, introducing complex parts into cells can increase the metabolic burden, thereby slowing down the growth rate of the cells. Excessive burden can lead to significant selective pressure, causing engineered bacteria to mutate back to their wild-type forms more quickly, which can result in the engineered cells being out-competed by their less functional or non-functional mutants[^1]. Therefore, it is crucial to investigate why some parts impose a greater burden than others.

When cells express heterologous genes, they must utilize their own resources, such as ribosomes, tRNAs, and ATP. The limited availability of these resources is one of the primary and most predictable sources of cellular burden. A recent study measured the burden of 301 parts from iGEM registry and found that the depletion of gene expression resources was the main cause of the observed burden[^2]. However, there are currently no methods available to predict the burden of a part based on its sequence and structure.

To address these issues, we have developed **Burden Predictor** that takes into account the allocation of gene expression resources within the cell, using only the sequence and structure of the part as input.

### Implementation

#### Model Construction

The core of Burden Predictor is an improved version of the mechanistic model framework from Weiße et al. and Nikolados et al.[^3][^4] We did not choose genome-scale models or machine learning models because of their computational intensity and time consumption, as well as the scarcity of high-quality data.

Moreover, we selected *Escherichia coli* as our host organism for initial development and validation. However, the model is designed to be flexible and adaptable, allowing researchers to conveniently model the burden in other host organisms by simply changing the parameters of the model. This flexibility ensures that our software can be widely applied across different situations, making it a versatile tool for synthetic biology research.

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


To capture how cells allocate their resources across various types of proteins, we partitions the proteome into five components, including heterologous proteins (expressed by the parts introduced into the cell), ribosomes, metabolic enzymes, transporters, and housekeeping proteins. In our model, mRNA transcripts compete for free ribosomes and energy for translation, leading to a competitive environment where genes from the introduced parts must contend with native genes for cellular resources. This competition, coupled with the dilution of heterologous proteins due to the predicted growth rate, creates a two-way interaction between the parts and the cellular host. The burden of a part is defined as the reduction percentage of the growth rate of the host organism compared to the wild type.

To make our software more useful to synthetic biology, we have introduced the commonly used parameters of parts into our software, including plasmid copy number, promoter strength, RBS strength, and the length the coding sequence (CDS). In our software, plasmid copy number and promoter strengths is modeled as the maximal TX rate of a gene, RBS strengths the binding affinity and dissociation constant between transcripts and ribosomes, and CAI the maximum TL elongation rate. These features allow synthetic biologists to explore how different environmental and genetic conditions influence the behavior of gene circuits within the host cell.

We have also built a small library containing several commonly used basic parts, including promoters, RBS, and CDS. These parts have been experimentally validated for their promoter strength and RBS strength.

<PDF url="https://static.igem.wiki/teams/5115/software/software-basic-parts-lib.pdf" page="1" width="100%" height='75vh' />

For basic parts not included in our library, we employ the [Promoter Calculator](https://github.com/barricklab/promoter-calculator) and [RBS Calculator](https://github.com/hsalis/Ribosome-Binding-Site-Calculator-v1.0) to estimate the promoter strength and RBS strength based on their sequences, respectively[^5][^6]. These tools use advanced algorithms to predict the functional properties of sequences, ensuring that users can accurately assess the performance of new parts.

Users have several options to add new parts to the Burden Predictor:

1. **Input the Part's Sequence**: Manually enter the sequence of the part directly into the software.
2. **Upload the Sequence File**: Upload sequence files in Genbank or FASTA format.
3. **Search the iGEM Registry by PartHub**: Use PartHub to search the iGEM Registry for parts of interest and add them to the Burden Predictor.

For detailed instructions on how to use these features, please refer to our [tutorial](https://yanglab.westlake.edu.cn/chat/1839852143880699904#_2-burden-predictor).

#### Methods

::: details Modeling of TX rate, TL initiation rate and TL elongation rate

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

:::

Further details on the construction and parametrization of Burden Predictor can be found in our [document](#document).

### Results

#### Parameter fitting

To calibrate our models and ensure they accurately reflect the experimental data, we performed parameter fitting using the `curve_fit` function from the [SciPy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html) library. The data we used for this process is detailed in the [fitting data table](https://static.igem.wiki/teams/5115/software/fitting-data.pdf). Given the characteristics of this data, we manually set the parameter $\beta_n$ to constant. The remaining parameters, $\beta_{prom}$ and $\beta_{RBS}$, were fitted using `curve_fit`. The value of these parameters can be found in our [document](#document).

To validate the fitting, we plotted the experimental burden against the predicted burden and performed a linear regression analysis, which yielded an $R^2$ value of 0.7304, indicating a good fit between the experimental and predicted data ([Figure 5](#figure-5)).

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

We selected a set of parts that have been previously measured by experiments[^2], and performed predictions for these selected parts using our software and compared the predicted burden values with the experimental data. The results are summarized in [Figure 9](#figure-9), which plots the experimental burden against the predicted burden.

<div style="text-align: center;" id="figure-9">
<img src="https://static.igem.wiki/teams/5115/software/burden-against-published.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 9. Experimental burden of parts from [2] vs. Predicted burden calculated by Burden Predictor
</small></p>
</div>
</div>

我们自己做的parts **(TBA)**

The detailed information and data of the parts can be accessed [here]. **(TBA)**

## Similarity Estimator

### Introduction

Sequences are fundamental in synthetic biology, and any improvements or optimizations based on them can significantly enhance the design and experimental efficiency of biological constructs. Recognizing that similar parts are more likely to have similar biological characteristics and functions, we have developed the **Similarity Estimator**, a tool that can estimate the similarity of parts in the iGEM Registry.

This tool is seamlessly integrated into our previously developed [PartHub](https://2023.igem.wiki/fudan/software/#parthub-2), allowing users to visualize both the citation and similarity relationships between different parts. Similar to the Burden Predictor, the Similarity Estimator allows users to manually input sequences, upload sequence files in Genbank or FASTA format, or search for parts of interest within PartHub. Our software enables researchers to easily identify and analyze parts with similar biological properties, facilitating more efficient synthetic biology design and experimentation.

### Implementation

#### Sequence similarity

Initially, we explored estimating the similarity of parts using k-mer embeddings, a machine learning-based method for sequence similarity calculation. However, this approach tends to focus too much on global features and fails to capture local characteristics effectively. Therefore, we employ [**BLAST**](https://blast.ncbi.nlm.nih.gov/Blast.cgi) (Basic Local Alignment Search Tool), a well-established method for sequence alignment and similarity comparison, to align sequences and estimate similarity scores. The score is calculated based on its key indicator, the **bitscore**, which is a robust measure of the alignment's quality. The primary reason for this choice is that BLAST is a robust method for sequence alignment, and using the bitscore allows for a more precise and biologically meaningful comparison of sequences compared to k-mer embedding methods.

Our software begins by constructing a database of part sequences. When a query is received, the software aligns the sequence of the queried part against the database. To ensure high-quality alignments, the results are filtered by an E-value threshold of less than $10^{-5}$. The E-value is a statistical measure in BLAST that indicates the number of alignments expected to occur by chance. A lower E-value signifies a higher confidence in the alignment, indicating a stronger similarity between the query and the database sequences.

After filtering the alignments, our software scales the bitscore of each result by the maximum bitscore among all the results, ensuring that the similarity scores are comparable across different alignments.

The sequence similarity score, denoted as $\text{SeqScore}$ is then calculated by combining the scaled bitscore and the identity, each weighted differently. The identity represents the percentage of nucleotides that are identical between the query and the database sequence. The formula for the sequence similarity score between part i and part j is as follows:

$$\text{SeqScore}_{i,j} = \max\limits_{\text{id}(k)=(i,j)} (0.8 \times \frac{\text{BitScore}_k}{\max\limits_l \text{BitScore}_l} + 0.2 \times \text{identity}_k)$$

If two parts have multiple alignments, the software selects the maximum sequence similarity score among all the alignments. 

#### Category similarity

Our software also considers the [category labels from the iGEM Registry](https://parts.igem.org/Categories). This is achieved by calculating the number of shared categories and assigning a weight to each category based on its hierarchical level. This approach ensures that parts with similar functional annotations are given higher similarity scores.

The category similarity score, denoted as $\text{CatScore}$, is calculated using the following formula:

$$\text{CatScore} = \sum\limits_{i} B^{d_{i}}$$

where:

- $\{c_i\}$ is the array of category labels that both parts A and B share.
- $\{d_i\}$ is the array of hierarchical levels of the shared categories $c_i$.
- $B=1.5$ is a constant that determines the weight of each hierarchical level.

#### Overall similarity

The overall similarity score is calculated as follows:

$$\text{OverallScore} = \min (\text{SeqScore} + \text{CatScore}, 100)$$

#### Visualization

After calculating the similarity scores, our software will list the top similar parts of the queried part, and show the similarity relationships of the queried part along with the reference relationships built in [PartHub 2.0](https://2023.igem.wiki/fudan/software/#parthub-2).

The similarity relationships and reference relationships between parts are stored in a Neo4j database, a powerful graph database well-suited for handling complex relationships. For visualization, the software uses [Neovis.js](https://neo4j-contrib.github.io/neovis.js/), a JavaScript library that provides an interactive way to explore the graph data.

## DBTL Cycle

(the following will be transferred to Engineering page)

### First Round

#### Design

In the initial design phase, we focused on developing a method to calculate the burden of a certain part and the similarity between biological parts. We decided to use k-mer embeddings combined with K-Nearest Neighbors (KNN) to compute the similarity scores at first. The k-mer embeddings were chosen because they capture global features of the sequences, which we believed would provide a robust basis for similarity calculations. The goal was to create a tool that could predict the burden of parts based on their sequences and integrate this functionality into PartHub 2.0.

#### Build

During the build phase, we implemented the k-mer embeddings and KNN algorithm to calculate the similarity scores. We developed a basic WebUI framework to input sequences, upload files, and display the similarity results. The burden calculation module was also initiated, but it was not yet fully integrated into the WebUI. We focused on ensuring that the similarity calculation functioned correctly and that the results were displayed in a clear and understandable format.

#### Test

We conducted initial testing of the similarity calculation using a set of known parts and their sequences. The k-mer embeddings and KNN algorithm produced similarity scores, but the results were not as expected, because the global features captured by k-mer embeddings did not accurately reflect the biological similarity between parts, particularly in cases where functional annotations and specific sequence features were more important. The burden calculation module was also tested, but it was incomplete and did not provide reliable predictions.

#### Learn

From the initial testing, we learned that k-mer embeddings, while useful for capturing global sequence features, were not sufficient for accurately measuring the biological similarity between parts. Therefore, we decided to switch to using BLAST for similarity calculations, as it is better suited for aligning sequences and identifying local similarities, which are crucial for biological function. The corresponding commit on Gitlab can be accessed [here](https://gitlab.igem.org/2024/software-tools/fudan/-/commit/4238e76316cd369e80f846098d99e58f28e039b8).

### Second Round

#### Design

In the second round, we refocused our design efforts on using BLAST for similarity calculations. We also addressed the feedback from our advisor regarding the WebUI. The goal was to create a more intuitive and user-friendly interface that would facilitate the use of the similarity and burden prediction tools. We planned to integrate the similarity results more effectively into the search pipeline to provide a comprehensive view of part relationships.

#### Build

During the build phase, we implemented the BLAST algorithm to calculate the similarity scores. We also refined the WebUI by optimizing the layout and size of components, making the interface more intuitive. We added more descriptive text and annotations to help users understand the functions and features of the tool. The burden calculation module was fully integrated into the WebUI, allowing users to input sequences, upload files, and view burden predictions alongside similarity results.

#### Test

We conducted extensive testing of the updated similarity and burden prediction tools. The BLAST algorithm produced more accurate and biologically relevant similarity scores, reflecting the specific functional annotations and sequence features of the parts. The WebUI was tested by our team members ([Figure 10](#figure-10)) and advisors, who gave us valuable suggestions and provided [feedback](https://gitlab.igem.org/2024/software-tools/fudan/-/merge_requests/1) on the usability and intuitiveness of the interface. We made additional adjustments based on this feedback to further improve the user experience.

<div style="text-align: center;" id="figure-10">
<img src="https://static.igem.wiki/teams/5115/software/dbtl-discussion.jpg"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 10. Discussion with our team members on our software
</small></p>
</div>
</div>

#### Learn

From the second round of testing, we learned that the BLAST algorithm significantly improved the accuracy of the similarity calculations. We also [integrated](https://gitlab.igem.org/2024/software-tools/fudan/-/commit/21353ed9fc3d4f9df1c612e61bcfe73a435eecb9) the similarity results into the search pipeline, which enhanced the overall functionality of the tool. We have documented the improvements of our software in [Changelog](https://gitlab.igem.org/2024/software-tools/fudan/-/blob/main/CHANGELOG.md).



During the development of our software, we adhered to a structured Design-Build-Test-Learn (DBTL) cycle to ensure continuous improvement and alignment with user needs. We received valuable suggestions and feedback from our team members and advisors, which was crucial in refining our software. We followed the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) at all times, and maintained a [Changelog](https://gitlab.igem.org/2024/software-tools/fudan/-/blob/main/CHANGELOG.md) to keep track of our improvements. Please visit the [Engineering](https://2024.igem.wiki/fudan/engineering/) page for detailed information.

## Reference

[^1]: Rugbjerg, P., Myling-Petersen, N., Porse, A., Sarup-Lytzen, K., & Sommer, M. O. A. (2018). Diverse genetic error modes constrain large-scale bio-based production. *Nature Communications*, *9*(1), 787. https://doi.org/10.1038/s41467-018-03232-w

[^2]: Radde, N. (2024). Measuring the burden of hundreds of BioBricks defines an evolutionary limit on constructability in synthetic biology. *Nature Communications*. https://doi.org/10.1038/s41467-024-50639-9

[^3]: Weiße, A. Y., Oyarzún, D. A., Danos, V., & Swain, P. S. (2015). Mechanistic links between cellular trade-offs, gene expression, and growth. *Proceedings of the National Academy of Sciences*, *112*(9), E1038–E1047. https://doi.org/10.1073/pnas.1416533112
[^4]: Nikolados, E.-M., Weiße, A. Y., Ceroni, F., & Oyarzún, D. A. (2019). Growth Defects and Loss-of-Function in Synthetic Gene Circuits. *ACS Synthetic Biology*, *8*(6), 1231–1240. https://doi.org/10.1021/acssynbio.8b00531
[^5]: LaFleur, T. L., Hossain, A., & Salis, H. M. (2022). Automated model-predictive design of synthetic promoters to control transcriptional profiles in bacteria. *Nature Communications*, *13*(1), 5159. https://doi.org/10.1038/s41467-022-32829-5
[^6]: Tian, T., & Salis, H. M. (2015). A predictive biophysical model of translational coupling to coordinate and control protein expression in bacterial operons. *Nucleic Acids Research*, *43*(14), 7137–7151. https://doi.org/10.1093/nar/gkv635