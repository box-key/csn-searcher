from .model_blueprint import SiameseModel
from .csn.article import ArticleList
from .covid_scholarly_network import CSNSearcher


# searcher = CSNSearcher(build_network=True)
searcher = CSNSearcher(build_network=False)
