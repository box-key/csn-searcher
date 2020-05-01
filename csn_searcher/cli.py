import argparse

from csn_searcher import searcher


def _parse_arguments(docs):
    parser = argparse.ArgumentParser(description=docs)
    parser.add_argument(
        "--input-path",
        required=True,
        help="path to input text file for document searcher"
    )
    parser.add_argument(
        "--num-search",
        default=3,
        help="number of search results to show"
    )
    return parser.parse_args()


def csn_search():
    parser = _parse_arguments("+++++ Welcome to Covid Scholarly article Network! +++++")
    search_input = _load_text(parser.input_path)
    # begin searching
    print('Start searching...')
    kbest_results = searcher.search_kbest(search_input, int(parser.num_search))
    print('\n\n+++++++++++++ Search Results +++++++++++++\n\n')
    for rank, hypothesis in enumerate(kbest_results):
        print('------------ No.', rank+1, '------------\n')
        print(' Similarity score -', round(hypothesis[0], 4), '\n')
        print(' Article title -', hypothesis[1], '\n')
        print(' Section title -', hypothesis[2], '\n\n')
    print('+++++++++++++++++++++++++++++++++++++++++++++++++')


def _load_text(input_path):
    with open(input_path, 'rt', encoding='utf-8') as f:
        data = f.read().strip()
    return data
