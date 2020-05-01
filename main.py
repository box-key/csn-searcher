import dill

from csn_searcher.csn.article import ArticleList, ArticleLookUp

biorxiv = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\biorxiv_medrxiv\\biorxiv_medrxiv'
comm = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\comm_use_subset\\comm_use_subset'
noncomm = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\noncomm_use_subset\\noncomm_use_subset'
pmc = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\pmc_custom_license\\pmc_custom_license'

paths = [biorxiv, comm, noncomm, pmc]

# lookup = ArticleLookUp()
# lookup.update(paths)
# lookup.save('Article.Lookup')


# with open("Article.Lookup","rb")as f:
#      list=dill.load(f)
#
# for k, v in list.itoa.items():
#     print(k, v)
#

list = ArticleList()
list.add_articles(biorxiv)
list.add_articles(comm)
list.add_articles(noncomm)
list.add_articles(pmc)
list.save('Article.List')
print('Finished saving')

# with open("Article.List","rb")as f:
#      list=dill.load(f)
#
# for k, v in list.items():
#     print(v)

# path = 'C:\\Users\\under\\Datasets\\CORD-19-research-challenge\\2020-03-13\\test'
# list = ArticleList()
# list.add_articles(path, lookup)
# for k, v in list.items():
#     for s in v:
#         print(s.article_id)
#         print(lookup.id2article(s.article_id))
