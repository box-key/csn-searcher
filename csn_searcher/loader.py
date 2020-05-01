import requests
from tqdm import tqdm
from time import sleep
import os


class DataLoader():
    """
    This class is used to download a pre-trained neural network model from url.
    It stores model name and the link to a model.
    """
    def __init__(self):
        # url where model is stored
        self.model_url = 'https://www.dropbox.com/s/z82x8xtofzwgae8/siamense-lstm.pt?dl=1'
        self.field_url = 'https://www.dropbox.com/s/99ogf071ncl47ut/TEXT.Field?dl=1'
        # output file name
        # model_path = os.path.join('csn_searcher', 'data', 'siamese-lstm.pt')
        self.model_path = 'siamese-lstm.pt'
        self.text_field_path = 'TEXT.Field'
        # chunk size for progress bar
        self.chunk_size = 2**20
        self._load()

    def _load(self):
        # load nn model
        # if a model exists skip this process
        if not os.path.exists(self.model_path):
            # get model
            r  = requests.get(self.model_url, stream=True)
            # output model
            with open(self.model_path, 'wb') as f:
                size = int(r.headers.get('content-length'))
                task = 'Download NN model'
                # print progress bar
                with tqdm(total=size, unit=' data', desc=task) as pbar:
                    for chunk in r.iter_content(chunk_size=self.chunk_size):
                        if chunk:
                            f.write(chunk)
                            f.flush()
                            pbar.update(len(chunk))
        # loads field object
        if not os.path.exists(self.text_field_path):
            print('Loading Field object...')
            r = requests.get(self.field_url)
            with open(self.text_field_path, 'wb') as f:
                for chunk in r.iter_content(chunk_size=self.chunk_size):
                    f.write(chunk)
