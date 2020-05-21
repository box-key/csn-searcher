COVID19 Scholarly-article Network (CSN) Searcher
------------------------------------------------
<a href='https://devpost.com/software/documentnet' style="text-align:center;">
  <img src='image/lumiata_covid19_hackathon.png' width="600" height="400">
</a>

Description
-----------
CSN searcher leverages Siamese RNN architecture proposed by [Mueller and Thyagarajan (2016)](https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/download/12195/12023) to provide document search for COVID-19 articles based on section-level similarity. You can provide the section you would like to explore more, and our tool finds research articles contain similar section. The network is built based on dataset generously provided by AI2 on Kaggle (link below).

* [How to run](#how-to-run)
* [Dataset: COVID-19 Open Research Dataset Challenge (CORD-19)](https://www.kaggle.com/allen-institute-for-ai/CORD-19-research-challenge)
* [Command-line tool](#command-line-tool)

Requirements
------------
* Python 3.7 +

How to run
-----------

1. Open your python virtual environment.
2. Run the following command to install our package.
```bash
pip install -i https://test.pypi.org/simple/ csn-searcher==0.1.1
```
> Note: If you see an error message saying you need torchtext==0.5, please run the following:
```bash
pip install torchtext==0.5
```
3. Run the following command to install data (sorry, this takes a while).
```bash
csn-search
```
> It downloads the following data:
 > - Siamese LSTM model (340MB)
 > - CSN (680MB)
 > - Vocabulary (71KB)
4. Create a .txt file with some input. For example, [this website (The New  England Journal of Medicine)](https://www.nejm.org/coronavirus) lists some articles related to COVID-19.
Copy some section in an article and store it in a txt file, e.g. `input.txt`.
5. Run the following command to query the most similar articles in the CSN.
```bash
csn-search \
  --input-path input.txt \
  --num-search 5
```

Installation
------------
CSN searcher requires Python 3.7+. Please run the following code to install:

```bash
pip install -i https://test.pypi.org/simple/ csn-searcher==0.1.1
```

Command-line tool
-----------------

### User Guide
CSN search enables you to explore COVID-19 articles based on the section you'd want to know more. We provide command line interface so far. All you need to do is to store a section of research article in .txt format, open your terminal and specify the number of search results (3 by default) and path to the txt file!

### Usage
The following code shows an example usage. It prints out the title of articles and the title of sections most similar to your input.

```bash
csn-search \
  --input-path data/input.txt \
  --num-search 2

Start searching...


+++++++++++++ Search Results +++++++++++++


  ------------ No. 1 ------------

  Similarity score - 0.5761

  Article title - ... errors in the icu dj melia ...

  Section title - ... transplantation may be associated ...


  ------------ No. 2 ------------

  Similarity score - 0.5739

  Article title - ... biliary ...

  Section title - ... pathophysiologic rationale ...

+++++++++++++++++++++++++++++++++++++++++++++++++

```
