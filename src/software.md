---
title: Software
author:
  name: Hongcheng Chen
  url: /fudan/team/#hongcheng-chen
headergif: https://static.igem.wiki/teams/5115/header/software-header.gif
---

<br><br>

::: tip

Try PartHub 3.0 [here](http://47.97.85.37:5000/) or follow the [installation tutorial](#tutorial) to deploy our software on your own device!

:::


## Highlights

- Efficiently uses the iGEM Registry and supports relevant synthetic biology standards such as Genbank and FASTA format
- Validation against both published and new experimental data
- Flexible and adaptable design, can be easily tailored to a wide range of application scenarios
- Well-documented APIs; easy integration with Snapgene
- Intuitive web UI and detailed tutorial

## Overview

Parts are at the core of synthetic biology, and over the years, Fudan's software has been dedicated to providing useful tools for parts management and analysis ([Table 1](#table1)). Our initial efforts, [PartHub 1.0](https://2022.igem.wiki/fudan/software) and [PartHub 2.0](https://2023.igem.wiki/fudan/software), were well-received for their features in displaying parts' citation relationships and enhancing search functionality. However, a critical gap remained: the importance of **sequence information** for parts. While citation relationships and search functionalities are valuable, the sequence of a part is arguably the most essential piece of information. The sequence not only defines the functional properties of a part but also influences its compatibility and performance in host organisms.

Therefore, we are excited to introduce **PartHub 3.0** this year, which addresses this gap by focusing on two critical aspects of parts: **burden prediction** and **similarity estimation** ([Table 1](#table1)).

<div style="text-align: center;" id="table1">
    <span style="color: gray">Table 1: Comparison of PartHub 1.0-3.0</span>
</div>

|PartHub Version|Main Feature|Use case|
|:---:|:---:|:---:|
|1.0|Display Citation Relationships of Parts|Researchers can quickly find the upstream and downstream citations of a specific part, helping them understand its performance and usage in different experiments.|
|2.0|Enhanced Search Functionality|Users can quickly find the parts they are interested in thanks to advanced search and recommendation algorithm.|
|3.0|Burden Prediction and Similarity Estimation|Apart from the features above, researchers can also understand the burden of different parts and find parts similar to the target part.|

As illustrated in [Figure 1](#figure-1), PartHub 3.0 consists of two main components: the [Burden Predictor](/fudan/software/#burden-predictor) and the [Similarity Estimator](/fudan/software/#similarity-estimator). The Burden Predictor can predict the metabolic burden of a composite part, which can be either a monocistron or a [pRAP system](/fudan/software/#introduction)-based polycistron. The Similarity Estimator allows users to search for specific parts within PartHub and identify similar parts.

<div style="text-align: center;" id="figure-1">
<img src="https://static.igem.wiki/teams/5115/software/schematic4.png" style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 1. Schematic figure of PartHub 3.0.
</small></p>
</div>
</div>

## Features

PartHub 3.0 is designed with a strong emphasis on user-friendliness, ensuring that researchers without computer science background can also easily navigate and utilize its advanced features. The frontend of our software is built using [Vue.js 3.4](https://vuejs.org/) and [Ant Design Vue 4.2.3](https://antdv.com/components/overview) to enhance the visual appeal and usability of the application. On the backend, we employ [Flask](https://flask.palletsprojects.com/en/3.0.x/) for efficient and scalable development. For data storage, we use [Neo4j 5.11](https://neo4j.com/), a powerful graph database that excels in managing large datasets with complex relationships. This combination of technologies ensures that PartHub 3.0 is not only robust but also intuitive and accessible.

Our software is compatible with the following browsers:

| <img src='https://static.igem.wiki/teams/5115/software/edge-logo.svg' style="height:1.6rem">Edge | <img src='https://static.igem.wiki/teams/5115/software/firefox-logo.svg' style="height:1.6rem">Firefox | <img src='https://static.igem.wiki/teams/5115/software/chrome-logo.svg' style="height:1.6rem">Chrome | <img src='https://static.igem.wiki/teams/5115/software/safari-logo.svg' style="height:1.6rem">Safari | <img src='https://static.igem.wiki/teams/5115/software/opera-logo.svg' style="height:1.6rem">Opera |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| version≥116                                                  | version≥116                                                  | version≥116                                                  | version≥18                                                   | version≥100                                                  |

#### API

To facilitate integration with other tools and platforms, we have also created comprehensive and easy-to-use RESTful APIs for our software. The API documentation provides detailed information on all available endpoints, including request and response formats and example usage.

<PDF url="https://static.igem.wiki/teams/5115/software/software-apis1.pdf" page="1" width="100%" height='75vh' />

#### Integration with Snapgene

Our software supports the commonly used synthetic biology standards, including GenBank and FASTA formats. It can directly use sequence files derived from [Snapgene](https://www.snapgene.com/) as input, thereby integrating seamlessly with the SnapGene pipeline.

<div style="text-align: center;" id="figure-2">
<img src="https://static.igem.wiki/teams/5115/software/snapgene.gif"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 2. Integration of PartHub 3.0 with the SnapGene Workflow.
</small></p>
</div>
</div>


#### Code availability

We have also uploaded our source code on [Gitlab](https://gitlab.igem.org/2024/software-tools/fudan), and created a [Docker image](https://hub.docker.com/repository/docker/chc1234567890/fudanigem2024/general) for easier installation.

## Tutorial

### 1. Installation



::: details How to install?

You can directly visit our **live demo** at http://47.97.85.37:5000/.

#### Install with readily available docker image

Please install [Docker](https://www.docker.com/) first, and create a file named `docker-compose.yml` with the following content in your working directory:

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

Then, open the terminal (in Windows, cmd or powershell; in Linux and mac, bash), change the working directory to where `docker-compose.yml` is, and run the following command:

```bash
docker compose up -d
```

Once the deployment is complete, PartHub 3.0 will be running at [http://localhost:5000](http://localhost:5000/).

#### Install from source code on Gitlab

The software use [Docker](https://www.docker.com/), [Git](https://git-scm.com), and [Node.js](https://nodejs.org/en) for deployment, so please install them first!

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

After opening the brower, you can see the home page of our software like in [Figure 3](#figure-3). You can click "Burden Predictor" at the top of the screen.

<div style="text-align: center;" id="figure-3">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-1.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 3. Home page of PartHub 3.0.
</small></p>
</div>
</div>

Then, you can select the basic parts from the basic parts library, then click "Add basic part", as shown in [Figure 4](#figure-4).

<div style="text-align: center;" id="figure-4">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-22.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 4. Select basic parts.
</small></p>
</div>
</div>

If the part you are interested is not in the library, you can manually input its sequence or upload its sequence file, or click "Search in PartHub" to discover it in PartHub, which is mentioned [below](#_3-similar-parts-searching).

<div style="text-align: center;" id="figure-4">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-33.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 4. Input or upload parts.
</small></p>
</div>
</div>

After selecting the parts, you can view them under the "Current parts" line. Next, set the copy number of the plasmid where the parts will be located. When you hover over the copy number input box, a tooltip listing common plasmid copy numbers will appear. This feature helps you accurately specify the copy number, ensuring optimal expression of the selected parts.

On the right side of the copy number input box, there is a switch that allows you to indicate whether the composite part should be considered as part of the pRAP system. If your part is polycistronic, please turn this switch on to ensure accurate prediction.

Once you have configured the settings, click the "Calculate" button to predict the burden, and the result will be displayed on the right side of the interface.

<div style="text-align: center;" id="figure-5">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-4.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 5. Burden calculation interface.
</small></p>
</div>
</div>

Warning:  Do not include Non-ASCII characters in the sequence file, or it may cause error!

### 3. Similar Parts Searching

To enter the similar parts searching page, please click "PartHub" at the top of the screen. Once there, you can input your search content in the input bar at the top and select the search type, which will navigate you to the "Search Results" page. Alternatively, you can choose the type of parts you want to query from the options below, and input the sequence or upload a sequence file, which will directly take you to the detailed information page for the part.

<div style="text-align: center;" id="figure-6">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-5.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 6. The similar parts searching page.
</small></p>
</div>
</div>

The "Search Results" page lists the parts that match your search query. To view detailed information about a specific part, click the orange title to navigate to the detailed information page.

If you wish to add a part to the [Burden Predictor](#_2-burden-predictor), click the "Add to Burden Predictor" button located below the part's information. Unfortunately, many parts in the iGEM registry do not adhere to the required format, and only those with a standardized format can be successfully imported into the Burden Predictor. We appreciate your understanding and encourage you to use parts with proper formatting for the best results.

<div style="text-align: center;" id="figure-7">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-7.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 7. The search results interface.
</small></p>
</div>
</div>

When you enter the detailed information page, the software automatically begins the process of finding similar parts to the queried part in PartHub. This process may take about one minute. Once the similarity calculation is complete, the interface will update as shown in [Figure 8](#figure-8).

On the left side of the page, a tree map displays the queried part along with parts that have reference, twin, or similarity relationships with it. In the tree map, purple nodes represent basic parts, and blue nodes represent composite parts. You can scroll in or out to adjust the size of the tree map or drag it to change its position for better visibility.

On the right side of the detailed information page, a list showcases the parts most similar to the queried part, including three types of similarity scores, which are detailed [below](#implementation-1). Due to performance considerations, we only display the top 100 similar parts, and in the tree map, we show the top 30 most similar parts.

<div style="text-align: center;" id="figure-8">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-8.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 8. Detailed information page with similar parts shown.
</small></p>
</div>
</div>

To view specific information about a part or relationship, click the "Part/Relationship info" tab in the top-right corner. You can also click on nodes or edges in the tree map to view detailed information about the parts or relationships. For example, in [Figure 9](#figure-9), the similarity information of the two parts is displayed after clicking on the edge indicated by the red arrow.

<div style="text-align: center;" id="figure-9">
<img src="https://static.igem.wiki/teams/5115/software/tutorial-9.png"
style="width:100%">
<br>
<div>
<p><small style="color: gray">Figure 9. The similarity information of two parts is shown after clicking on an edge in the treemap.
</small></p>
</div>
</div>

## Burden Predictor

### Introduction

As synthetic biology continues to advance, the parts being introduced into cells are becoming increasingly complex. However, introducing complex parts into cells can increase the metabolic burden, thereby slowing down the growth rate of the cells. Excessive burden can lead to significant selective pressure, causing engineered bacteria to mutate back to their wild-type forms more quickly, which can result in the engineered cells being out-competed by their less functional or non-functional mutants[^1]. Therefore, it is crucial to investigate why some parts impose a greater burden than others.

One of the primary reasons for this metabolic burden is the depletion of cellular resources such as ribosomes, tRNAs, and ATP, which are essential for gene expression. A recent study quantified the burden of 301 BioBrick plasmids and found that the depletion of gene expression resources was the main cause of the observed burden[^2]. Despite this understanding, there are currently no methods available to predict the burden of a genetic part based on its sequence and structure.

To address these issues, we have developed **Burden Predictor**, a tool that can predict the burden caused by gene expression of a certain part. It takes into account the allocation of gene expression resources within the cell, using only the sequence and structure of the part as input.

#### The pRAP system

Our team has been utilizing the pRAP (polycistronic Ribozyme-Activated) system for several years. This system addresses the issue of lower expression of downstream genes in polycistronic vectors by incorporating a ribozyme RNA sequence that conducts self-cleaving[^5]. This process converts the polycistronic mRNA transcript into individual monocistrons post-transcriptionally, ensuring that each gene is translated with comparable efficiency.

Initially designed for monocistronic parts, Burden Predictor has been extended to incorporate the prediction of the burden of parts using the pRAP system, thereby enhancing its usability and applicability in a broader range of genetic constructs.

### Implementation

#### Model Construction

The core of Burden Predictor is an improved version of the mechanistic model framework from Weiße et al. and Nikolados et al.[^3][^4] We did not choose genome-scale models or machine learning models because of their computational intensity and time consumption, as well as the scarcity of high-quality data.

Moreover, we selected *Escherichia coli* as our host organism for initial development and validation. However, the model is designed to be flexible and adaptable, allowing researchers to conveniently model the burden in other host organisms by simply changing the parameters of the model. This flexibility ensures that our software can be widely applied across different situations, making it a versatile tool for synthetic biology research.

As illustrated in [Figure 10](#figure-10), our model incorporates the basic gene expression processes including transcription (TX) and translation (TL). Transcription is simplified into a dumped process, while translation contains two stages - initiation, when the ribosome binds to the ribosome binding site (RBS) of the mRNA; and elongation, when the ribosome moves along the open reading frame and produces polypeptide chain.

<div style="text-align: center;" id="figure-10">
<img src="https://static.igem.wiki/teams/5115/software/model-schematic5.png"
style="width:80%">
<br>
<div>
<p><small style="color: gray">Figure 10. Schematic figure of Burden Predictor. TX, transcription; TL, translation.
</small></p>
</div>
</div>

To capture how cells allocate their resources across various types of proteins, we partitions the proteome into five components, including heterologous proteins (expressed by the parts introduced into the cell), ribosomes, metabolic enzymes, transporters, and housekeeping proteins. In our model, mRNA transcripts compete for free ribosomes and energy for translation, leading to a competitive environment where genes from the introduced parts must contend with native genes for cellular resources. This competition, coupled with the dilution of heterologous proteins due to the predicted growth rate, creates a two-way interaction between the parts and the cellular host. The burden of a part is defined as the reduction percentage of the growth rate of the host organism compared to the wild type.

To make our software more useful to synthetic biology, we have introduced the commonly used parameters of parts into our software, including plasmid copy number, promoter strength, RBS strength, and the length the coding sequence (CDS). In our software, plasmid copy number and promoter strengths is modeled as the maximal TX rate of a gene, RBS strengths the binding affinity and dissociation constant between transcripts and ribosomes, and CAI the maximum TL elongation rate. These features allow synthetic biologists to explore how different environmental and genetic conditions influence the behavior of gene circuits within the host cell.

We have also built a small library containing several commonly used basic parts, including promoters, RBS, and CDS. These parts have been experimentally validated for their promoter strength and RBS strength. To know more information about this library, please visit [this link](https://static.igem.wiki/teams/5115/software/software-basic-parts-lib.pdf).

Didn't find the parts you are interested in our library? You can easily add them to Burden Predictor by selecting one of the following methods below:

- **Input the Part's Sequence**: Manually enter the sequence of the part directly into the software.
- **Upload the Sequence File**: Upload sequence files from your device in Genbank or FASTA format.
- **Search the iGEM Registry by PartHub**: Use PartHub to search the iGEM Registry for parts of interest and add them to the Burden Predictor.

This flexible approach ensures you can incorporate any part you need for your research.

For detailed instructions on how to use these features, please refer to our [tutorial](#_2-burden-predictor).

For basic parts not included in our library, we employ the [Promoter Calculator](https://github.com/barricklab/promoter-calculator) and [RBS Calculator](https://github.com/hsalis/Ribosome-Binding-Site-Calculator-v1.0) to estimate the promoter strength and RBS strength based on their sequences, respectively[^6][^7]. These tools use advanced algorithms to predict the functional properties of sequences, ensuring that users can accurately assess the performance of new parts.

#### Methods

##### Variables

The core variables of our model is shown below.

<div style="text-align: center;" id="table2">
    <span style="color: gray">Table 2: Core variables of our model</span>
</div>

| Name  |                Definition                 |
| :---: | :---------------------------------------: |
| $s_i$ |           internalized nutrient           |
|  $a$  | total pool of energy molecules (e.g. ATP) |
| $p_r$ |                 ribosomes                 |
|$p_t$|transporters|
|$p_m$|metabolic enzymes|
|$p_q$|housekeeping proteins|
|$m_x$|free mRNAs, $x \in \{r,t,m,q\}$|
|$c_x$|ribosome-bound mRNAs|

##### Mechanistic model

The nutrient uptake and consumption are modeled by equations (1) to (3):

$$\dot{s_i} = v_{imp} - v_{cat} - \lambda s_i \tag{1}$$

$$v_{imp} = p_t \frac{v_t s}{K_t +s} \tag{2}$$

$$v_{cat} = p_m\frac{v_m s_i}{K_m+s_i} \tag{3}$$

Here, $v_{imp}$ represents the import rate of nutrients, and $v_{cat}$ represents the catalytic rate of metabolic enzymes, and $\lambda$ is the growth rate. All the intracellular molecules are assumed to be diluted at rate $\lambda$ because of cell growth.

The rate of energy molecule production and consumption is described by equation (4):

$$\dot{a}=n_sv_{cat}-\sum\limits_{x \in \{r,t,m,q\}} n_x v_x - \lambda a \tag{4}$$

Here, $n_s$ refers to the nutrient efficiency of the growth medium, $n_x$ the length of proteins in terms of amino acids, and $v_x$ is the TL rate. We assume that the TL process is the dominant source of energy consumption, and other energy-consuming processes are negligible[^8].

The synthesis and degradation of proteins and mRNAs are captured by equations (5) to (8):

$$\dot{m_x} = w_x - (\lambda + d_m) m_x + v_x - k_b p_r m_x + k_u c_x \tag{5}$$

$$\dot{c_x} = \lambda c_x - v_x + k_b p_r m_x - k_u c_x \tag{6}$$

$$\dot{p_x} = v_x - \lambda p_x,\; x \in \{t,m,q\} \tag{7}$$

$$\dot{p_r} = v_r - \lambda p_r + \sum\limits_{x \in \{r,t,m,q\}} (v_x - k_b p_r m_x + k_u c_x) \tag{8}$$

where $w_x$ represents the TX rate, $k_b$ and $k_u$ is the binding and unbinding rate of a ribosome and a mRNA, and $d_m$ is the degradation rate of mRNAs. Here, we assume that all the endogeneous proteins are not subject to active degradation.

The TX rate is represented by $w_x$ for ribosome, transporter, and metabolic enzyme mRNAs as the product of the maximum TX rate and a function of energy:

$$w_x = w_{x,\max} \frac{a}{\theta_x+a},\; x \in \{r,t,m\} \tag{9}$$

where $w_{x,\max}$ is the maximum TX rate, $\theta_x$ is a transcriptional threshold.

For housekeeping proteins, the TX rate is modeled under the assumption that housekeeping mRNA TX is under negative autoregulation in order to keep constant expression levels in the cell:

$$w_q = w_{q,\max} \frac{a}{\theta q + a} \cdot \frac{1}{1+(\frac{p_q}{K_q})^{h_q}} \tag{10}$$

Here, $K_q$ and $h_q$ are regulatory parameters for the negative autoregulation model.

The TL rate is modeled as follows:

$$v_x = c_x \frac{\gamma(a)}{n_x}\tag{11}$$

where $\gamma(a)$ is an energy-dependent function:

$$\gamma(a) = \frac{\gamma_{\max}a}{K_{\gamma} + a}\tag{12}$$

where $\gamma_{\max}$ is the maximum TL elongation rate, and $K_{\gamma}$ the energy required when the rate reaches half-maximum.

Weiße et al. pointed out that under the assumption of constant average cell mass, the growth rate $\lambda$ is defined by equation (13)[^3]:

$$\lambda = \frac{\gamma (a)}{M} \cdot \sum\limits_{x\in \{r,t,m,q\}} c_x \tag{13}$$

where $M$ is the constant cell mass.

##### Introducing heterologous part

As mentioned before, the parts introduced into the system should be either monocistronic or based on the pRAP system for polycistronic expression. For polycistronic parts using the pRAP system, we assume that the translation rate of each gene is proportional to the strength of its RBS.

The dynamics of the proteins, mRNAs, and ribosome-bound mRNAs for each gene in the parts are modeled by the following equations:

$$\dot{p_i^c} = v_i^c - (\lambda + d_p) p_i^c \tag{12}$$

$$\dot{m_i^c} = w_i^c - (\lambda + d_m)m_i^c + v_i^c - k_{b,i}^c p_r m_i^c + k_{u,i}^c c_i^c \tag{13}$$

$$\dot{c_i^c} = \lambda c_i^c + k_{b,i}^c p_r m_i^c - k_{u,i}^c c_x - v_i^c \tag{14}$$

Here, $d_p$ represents the degradation rate of the proteins expressed by the parts, and $p_i^c,m_i^c,c_i^c$ denote the concentrations of the i*i*-th gene's protein, mRNA, and ribosome-bound mRNA, respectively.

We model **TX rate** of the i-th heterologous gene as:

$$w_i^c = w_{i,\max}^c \frac{a}{\theta_x + a} \tag{15}$$

The maximum TX rate is determined by the copy number of the plasmid and the promoter strength:

$$w_{i,\max}^c = \frac{N}{\beta_{n}} \cdot \frac{H_{prom}}{\beta_{prom}}\tag{16}$$

where $N$ is the plasmid copy number, $H_{prom}$ is the promoter strength from our basic parts library, $\beta_n$ and $\beta_{prom}$ are scaling parameters.

**TL initiation rate** is modeled by the ratio of the binding rate constant $k_{b,i}^c$ to the unbinding rate constant $k_{u,i}^c$ :

$$\frac{k_{b,i}^c}{k_{u,i}^c} = \frac{H_{RBS}}{\beta_{RBS}}\tag{17}$$

where $H_{RBS}$ is the RBS strength from our basic parts library, and $\beta_{RBS}$ is the scaling parameter.

**TL elongation rate** is modeled as follows:

$$v_x = c_x \frac{\gamma(a)}{n_x}\tag{18}$$

where $c_x$ is the amount of ribosome-mRNA complex, $n_x$ the length of polypeptide chain, and $\gamma(a)$ is an energy-dependent function:

$$\gamma(a) = \frac{\gamma_{\max}a}{K_{\gamma} + a}\tag{19}$$

where $\gamma_{\max}$ is the maximum TL elongation rate, and $K_{\gamma}$ the energy required when the rate reaches half-maximum.

Finally, the burden $b$ of the introduced part is:

$$b=1-\frac{\lambda}{\lambda_0}\tag{20}$$

where $\lambda$ is the growth rate of host with the part introduced, and $\lambda_0$ is the growth rate of wild type (i.e. without any introduced parts).

##### Parameters

The parameters of our model are listed in [Table 3](#table3).

<div style="text-align: center;" id="table3">
    <span style="color: gray">Table 3: Core variables of our model</span>
</div>

| Parameter | Value | Source |
| :-------: | :---: | :---: |
| $n_s$ | $10^4$ |[3]|
| $M$ | $10^8$ |[3]|
| $\gamma_{\max}$ | 1260 |[3]|
| $v_t$ | 726 |[3]|
| $v_m$ | 5800 |[3]|
| $w_{r,\max}$ | 930 |[3]|
| $w_{q,\max}$ | 949 |[3]|
| $w_{m,\max},w_{t,\max}$ | 4.14 |[3]|
| $K_q$ | 152219 |[3]|
| $h_q$ | 4 |[3]|
| $\theta_q,\theta_t,\theta_m$ | 4.38 |[3]|
| $n_q,n_t,n_m$ | 300 |[3]|
| $\theta_r$ | 427 |[3]|
| $n_r$ | 7459 |[3]|
| $k_b$ | 0.0095 |[3]|
| $k_u$ | 1 |[3]|
| $K_{\gamma}$ | 7 |[3]|
| $K_t, K_m$ | 1000 |[3]|
| $d_m$ | 0.1 |[3]|
| $\beta_{prom}$ | 69.49 | [parameter fitting](#parameter-fitting) |
| $\beta_{RBS}$ | 50.31 | [parameter fitting](#parameter-fitting) |
| $\beta_{n}$ | 200 | Set manually |

### Results

#### Parameter fitting

To calibrate our models and ensure they accurately reflect the experimental data, we performed parameter fitting using the `curve_fit` function from the [SciPy](https://docs.scipy.org/doc/scipy/reference/generated/scipy.optimize.curve_fit.html) library. The data we used for this process is detailed in the [fitting data table](https://static.igem.wiki/teams/5115/software/fitting-data.pdf). Given the characteristics of this data, we manually set the parameter $\beta_n$ to constant. The remaining parameters, $\beta_{prom}$ and $\beta_{RBS}$, were fitted using `curve_fit`. The value of these parameters can be found in [Table 3](#table3).

To validate the fitting, we plotted the experimental burden against the predicted burden and performed a linear regression analysis, which yielded an $R^2$ value of 0.7304, indicating a good fit between the experimental and predicted data ([Figure 11](#figure-11)).

<div style="text-align: center;" id="figure-11">
<img src="https://static.igem.wiki/teams/5115/software/fitting.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 11. Fitting results of burden
</small></p>
</div>
</div>

<br>

#### Benchmarking of Promoter Calculator and RBS Calculator

To test the accuracy of the Promoter Calculator and the RBS Calculator, we conducted a benchmarking process for both of the calculators. This benchmarking involves converting the predicted data from these calculators to the same magnitude as the experimental data, ensuring direct comparability and integration into our software.

For the Promoter Calculator, we benchmarked its accuracy by converting the predicted promoter strength to the same magnitude of the experimental data. This conversion was achieved using the following equation:

$$H_{prom} = K \cdot v_{prom} + B$$

where $H_{prom}$ represents the converted promoter strength that matches the magnitude of the experimental data, and $v_{prom}$ is the promoter strength calculated by the Promoter Calculator. The constants $K$ and $B$ are determined through linear regression, and the fitting results are shown in [Figure 12](#figure-12).

<div style="text-align: center;" id="figure-12">
<img src="https://static.igem.wiki/teams/5115/software/promoter-benchmark1.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 12. Experimental promoter strength vs. promoter strength calculated by Promoter Calculator
</small></p>
</div>
</div>

Unlike the Promoter Calculator, the RBS Calculator calculates the total Gibbs free energy ( $\Delta G$ ) of the entire translation initiation process. Therefore, we benchmarked the accuracy of the RBS Calculator by converting the calculated $\Delta G$ to match the experimental data. This conversion was performed using the following equation:

$$H_{RBS}=K\cdot \exp (-B \cdot\Delta G)$$

where $H_{RBS}$ is the converted RBS strength that aligns with the magnitude of the experimental data, and $\Delta G$ is the Gibbs free energy calculated by the thermodynamic model of the RBS Calculator, and $K$ and $\beta$ are constants determined through least squares fitting, and the fitting results are shown in [Figure 13](#figure-13).

<div style="text-align: center;" id="figure-13">
<img src="https://static.igem.wiki/teams/5115/software/rbs-benchmark2.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 13. Experimental RBS strength vs. RBS strength calculated by RBS Calculator
</small></p>
</div>
</div>

The data used for benchmarking can be accessed [here](https://static.igem.wiki/teams/5115/software/benchmarking-data.pdf).

#### Validation against experimental data

We selected a set of parts that have been previously measured by experiments[^2], and performed predictions for these selected parts using our software and compared the predicted burden values with the experimental data. The results are summarized in [Figure 14](#figure-14), which plots the experimental burden against the predicted burden.

<div style="text-align: center;" id="figure-14">
<img src="https://static.igem.wiki/teams/5115/software/burden-against-published.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 14. Experimental burden of parts from [2] vs. Predicted burden calculated by Burden Predictor
</small></p>
</div>
</div>

We also investigated the burden of a series of parts in our [Measurement](/fudan/measurement/). All of these parts are expressed using the pRAP system.

<div style="text-align: center;" id="figure-15">
<img src="https://static.igem.wiki/teams/5115/software/burden-against-ours.png"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 15. Burden of parts from our experiment vs. Predicted burden calculated by Burden Predictor
</small></p>
</div>
</div>

The detailed information and data of the parts we used in this section can be accessed [here](https://static.igem.wiki/teams/5115/software/parts-expr-valid.pdf).

## Similarity Estimator

### Introduction

Sequences are fundamental in synthetic biology, and any improvements or optimizations based on them can significantly enhance the design and experimental efficiency of biological constructs. Recognizing that similar parts are more likely to have similar biological characteristics and functions, we have developed the **Similarity Estimator**, a tool that can estimate the similarity of parts in the iGEM Registry.

This tool is seamlessly integrated into our previously developed [PartHub 2.0](https://2023.igem.wiki/fudan/software/#parthub-2), allowing users to visualize both the citation and similarity relationships between different parts. Similar to the Burden Predictor, the Similarity Estimator allows users to manually input sequences, upload sequence files in Genbank or FASTA format, or search for parts of interest within PartHub. Our software enables researchers to easily identify and analyze parts with similar biological properties, facilitating more efficient synthetic biology design and experimentation.

### Implementation

#### Sequence similarity

Initially, we explored estimating the similarity of parts using k-mer embeddings, a machine learning-based method for sequence similarity calculation. However, this approach tends to focus too much on global features and fails to capture local characteristics effectively. Therefore, we employ [**BLAST**](https://blast.ncbi.nlm.nih.gov/Blast.cgi) (Basic Local Alignment Search Tool), a well-established method for sequence alignment and similarity comparison, to align sequences and estimate similarity scores. The score is calculated based on its key indicator, the **bitscore**, which is a robust measure of the alignment's quality. The primary reason for this choice is that BLAST is a robust method for sequence alignment, and using the bitscore allows for a more precise and biologically meaningful comparison of sequences compared to k-mer embedding methods.

Our software begins by constructing a database of part sequences. When a query is received, the software aligns the sequence of the queried part against the database. To ensure high-quality alignments, the results are filtered by an E-value threshold of less than $10^{-5}$. The E-value is a statistical measure in BLAST that indicates the number of alignments expected to occur by chance. A lower E-value signifies a higher confidence in the alignment, indicating a stronger similarity between the query and the database sequences.

After filtering the alignments, our software scales the bitscore of each result by the maximum bitscore among all the results, ensuring that the similarity scores are comparable across different alignments.

The sequence similarity score, denoted as $\text{SeqScore}$ is then calculated by combining the scaled bitscore and the identity, each weighted differently. The identity represents the percentage of nucleotides that are identical between the query and the database sequence. The formula for the sequence similarity score between part i and part j is as follows:

$$\text{SeqScore}_{i,j} = \max\limits_{\text{id}(k)=(i,j)} (0.7 \times \frac{\text{BitScore}_k}{\max\limits_l \text{BitScore}_l} + 0.3 \times \text{identity}_k) \tag{21}$$

If two parts have multiple alignments, the software selects the maximum sequence similarity score among all the alignments.

#### Category similarity

Our software also considers the [category](https://parts.igem.org/Categories) information from the iGEM Registry, where each part can have multiple classification labels, and each category includes several levels of subcategories.

To be specific, our software calculates the number of shared categories and assigning a weight to each category based on its hierarchical level. This approach ensures that parts with similar functional annotations are given higher similarity scores.

The category similarity score, denoted as $\text{CatScore}$, is calculated using the following formula:

$$\text{CatScore} = \sum\limits_{i} \sum\limits_{j=1}^{d_i} B^{j-1} \tag{22}$$

where:

- $\{c_i\}$ is the array of category labels that both parts A and B share.
- $\{d_i\}$ is the array of hierarchical levels of the shared categories $c_i$.
- $B=1.5$ is a constant that determines the weight of each hierarchical level.

##### Example calculation of category similarity score

Let's consider two parts, Part A and Part B, with the following category labels from the iGEM Registry:

- **Part A:**
  - `//cds/enzyme/DNApolymerase/`
  - `//plasmid/expression/T7/`
  - `//function/biosynthesis/`
- **Part B:**
  - `//cds/enzyme/DNApolymerase/`
  - `//plasmid/expression/T3/`
  - `//function/isoamplification/`

The shared categories between Part A and Part B are:

- `//cds/enzyme/DNApolymerase/` (Level 3)
- `//plasmid/expression/` (Level 2)

In this example, the hierarchical levels of the shared categories are 3 and 2, respectively.

Based on the information above, we have $B=1.5$ and $\{d_i\}=\{3,2\}$.

Using formula (22), the category similarity score is:

$$\text{CatScore} = B^0 + B^1 + B^2 + B^0 + B^1 = 10.875$$

#### Overall similarity

The overall similarity score is calculated by combining the sequence similarity score and the category similarity score:

$$\text{OverallScore} = \min (\text{SeqScore} + \text{CatScore}, 100)$$

This ensures that the overall score does not exceed 100, providing a balanced and interpretable measure of similarity between parts.

#### Visualization

After calculating the similarity scores, our software will list the top similar parts of the queried part, and show the similarity relationships of the queried part along with the reference relationships built in [PartHub 2.0](https://2023.igem.wiki/fudan/software/#parthub-2).

The similarity relationships and reference relationships between parts are stored in a Neo4j database, a powerful graph database well-suited for handling complex relationships. For visualization, the software uses [Neovis.js](https://neo4j-contrib.github.io/neovis.js/), a JavaScript library that provides an interactive way to explore the graph data.

For examples of visualization, please refer to [Figure 8](#figure-8).

#### Exclusion of reference relationships

When calculating the similarity between parts, our software **excludes parts that have reference or twin relationships** to avoid redundancy and ensure that the similarity scores are meaningful. Reference parts are often duplicates or highly similar to other parts, and twins are exact copies, which can skew the similarity scores.

Moreover, our software does not distinguish between basic parts and composite parts when calculating similarity. This is because both types of parts can have significant biological relevance, and distinguishing between them may neglect important similarities.

## DBTL Cycle

During the development of PartHub 3.0, we strictly followed the Design-Build-Test-Learn (DBTL) cycle to ensure continuous improvement and alignment with user needs. This iterative process allowed us to systematically refine our software, incorporating feedback and making improvements at each stage.

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

We conducted extensive testing of the updated similarity and burden prediction tools. The BLAST algorithm produced more accurate and biologically relevant similarity scores, reflecting the specific functional annotations and sequence features of the parts. The WebUI was tested by our team members ([Figure 16](#figure-16)) and advisors, who gave us valuable suggestions and provided [feedback](https://gitlab.igem.org/2024/software-tools/fudan/-/merge_requests/1) on the usability and intuitiveness of the interface. We made additional adjustments based on this feedback to further improve the user experience.

<div style="text-align: center;" id="figure-16">
<img src="https://static.igem.wiki/teams/5115/software/dbtl-discussion.jpg"
style='width:80%'>
<br>
<div>
<p><small style="color: gray">Figure 16. Discussion with our team members on our software
</small></p>
</div>
</div>

#### Learn

From the second round of testing, we learned that the BLAST algorithm significantly improved the accuracy of the similarity calculations. We also [integrated](https://gitlab.igem.org/2024/software-tools/fudan/-/commit/21353ed9fc3d4f9df1c612e61bcfe73a435eecb9) the similarity results into the search pipeline, which enhanced the overall functionality of the tool.

During the development of our software, we adhered to a structured Design-Build-Test-Learn (DBTL) cycle to ensure continuous improvement and alignment with user needs. We received valuable suggestions and feedback from our team members and advisors, which was crucial in refining our software, and kept our improvements in the [Changelog](https://gitlab.igem.org/2024/software-tools/fudan/-/blob/main/CHANGELOG.md).

## Reference

[^1]: Rugbjerg, P., Myling-Petersen, N., Porse, A., Sarup-Lytzen, K., & Sommer, M. O. A. (2018). Diverse genetic error modes constrain large-scale bio-based production. *Nature Communications*, *9*(1), 787. [https://doi.org/10.1038/s41467-018-03232-w](https://doi.org/10.1038/s41467-018-03232-w)
[^2]: Radde, N. (2024). Measuring the burden of hundreds of BioBricks defines an evolutionary limit on constructability in synthetic biology. *Nature Communications*. [https://doi.org/10.1038/s41467-024-50639-9](https://doi.org/10.1038/s41467-024-50639-9)
[^3]: Weiße, A. Y., Oyarzún, D. A., Danos, V., & Swain, P. S. (2015). Mechanistic links between cellular trade-offs, gene expression, and growth. *Proceedings of the National Academy of Sciences*, *112*(9), E1038–E1047. [https://doi.org/10.1073/pnas.1416533112](https://doi.org/10.1073/pnas.1416533112)
[^4]: Nikolados, E.-M., Weiße, A. Y., Ceroni, F., & Oyarzún, D. A. (2019). Growth Defects and Loss-of-Function in Synthetic Gene Circuits. *ACS Synthetic Biology*, *8*(6), 1231–1240. [https://doi.org/10.1021/acssynbio.8b00531](https://doi.org/10.1021/acssynbio.8b00531)
[^5]: Liu, Y., Wu, Z., Wu, D., Gao, N., & Lin, J. (2022). Reconstitution of Multi-Protein Complexes through Ribozyme-Assisted Polycistronic Co-Expression. *ACS Synthetic Biology*, *12*(1), 136–143. [https://doi.org/10.1021/acssynbio.2c00416](https://doi.org/10.1021/acssynbio.2c00416)
[^6]:  LaFleur, T. L., Hossain, A., & Salis, H. M. (2022). Automated model-predictive design of synthetic promoters to control transcriptional profiles in bacteria. *Nature Communications*, *13*(1), 5159. [https://doi.org/10.1038/s41467-022-32829-5](https://doi.org/10.1038/s41467-022-32829-5)
[^7]: Tian, T., & Salis, H. M. (2015). A predictive biophysical model of translational coupling to coordinate and control protein expression in bacterial operons. *Nucleic Acids Research*, *43*(14), 7137–7151. [https://doi.org/10.1093/nar/gkv635](https://doi.org/10.1093/nar/gkv635)
[^8]: Bremer, H., & Dennis, P. P. (2008). Modulation of Chemical Composition and Other Parameters of the Cell at Different Exponential Growth Rates. *EcoSal Plus*, *3*(1). [https://doi.org/10.1128/ecosal.5.2.3](https://doi.org/10.1128/ecosal.5.2.3)