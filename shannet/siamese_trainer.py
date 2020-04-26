import torch
import time
import math


def _epoch_time(start_time):
    total = time.time() - start_time
    return int(total/60), int(total%60)


def _default_init_weights(model):
    for name, param in model.named_parameters():
        torch.nn.init.normal_(param.data, mean=0, std=0.01)


class SiameseTrainer():

    def __init__(self,
                 model,
                 train_iterator,
                 val_iterator,
                 optimizer,
                 criterion,
                 device,
                 weight_initializer=None):
        self.model = model
        self.train_iterator = train_iterator
        self.val_iterator = val_iterator
        self.optimizer = optimizer
        self.criterion = criterion
        self.weight_initializer = weight_initializer
        self.init_model()
        self.device = device

    def init_model(self):
        if self.weight_initializer is None:
            self.model.apply(_default_init_weights)
        else:
            self.model.apply(self.weight_initializer)

    def train(self, clip):
        self.model.train()

    def epoch()
