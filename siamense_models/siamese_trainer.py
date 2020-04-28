import torch
import torch.nn as nn
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
                 device,
                 weight_initializer=None):
        self.model = model
        self.train_iterator = train_iterator
        self.val_iterator = val_iterator
        self.optimizer = optimizer
        self.criterion = nn.MSELoss()
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
        epoch_loss = 0
        for batch in self.train_iterator:
            text_left = batch.text_left
            text_right = batch.text_right
            # text_left = [text_left_len, batch_size]
            # text_right = [text_right_len, batch_size]
            scores = batch.score # it returns a list
            scores = torch.FloatTensor(scores).to(self.device)
            # scores = [batch_size]
            predictions = self.model(text_left, text_right)
            # predictions = [batch_size]
            loss = self.criterion(predictions, scores)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(self.model.parameters(), clip)
            self.optimizer.step()
            epoch_loss += loss.item()
        return epoch_loss / len(self.train_iterator)

    def evaluate(self, iterator):
        self.model.eval()
        epoch_loss = 0
        for batch in iterator:
            text_left = batch.text_left
            text_right = batch.text_right
            # text_left = [text_left_len, batch_size]
            # text_right = [text_right_len, batch_size]
            scores = batch.score # it returns a list
            scores = torch.FloatTensor(scores).to(self.device)
            # score = [batch_size]
            predictions = self.model(text_left, text_right)
            # predictions = [batch_size]
            loss = self.criterion(predictions, scores)
            epoch_loss += loss.item()
        return epoch_loss / len(iterator)

    def epoch(self, n_epochs, clip, model_name='siamense.pt'):
        best_valid_loss = float('inf')
        for epoch in range(n_epochs):
            start_time = time.time()
            train_loss = self.train(clip)
            valid_loss = self.evaluate(self.val_iterator)
            epoch_mins, epoch_secs = _epoch_time(start_time)
            if valid_loss < best_valid_loss:
                best_valid_loss = valid_loss
                torch.save(self.model.state_dict(), model_name)
            print(f'Epoch: {epoch+1:02} | Time: {epoch_mins}m {epoch_secs}s')
            print(f'\tTrain MSE Loss: {train_loss:.3f}')
            print(f'\t Val. MSE Loss: {valid_loss:.3f}')

    def test(self, iterator, model_name=None):
        if model_name is not None:
            self.model.load_state_dict(torch.load(model_name))
        return self.evaluate(iterator)
