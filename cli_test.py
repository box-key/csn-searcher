from cli import csn_search
from csn_searcher import searcher

print('Start searching...')
kbest_results = searcher.search_kbest("The origin of the virus and how to produce vaccines.", 5)
print('\n\n---------- Search Results ----------\n\n')
for rank, hypothesis in enumerate(kbest_results):
    print('---------- No.', rank+1, '----------\n')
    print('Similarity score -', hypothesis[0], '\n')
    print('Article title -', hypothesis[1], '\n')
    print('Section title -', hypothesis[2], '\n\n')
