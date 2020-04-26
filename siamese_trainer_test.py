import torch

import pytest


a = torch.tensor([1,2,3,4,5], dtype=torch.float)
b = torch.tensor([5,6,7,8,9], dtype=torch.float)

print(a)
print(b)

print(torch.norm(a-b, p=1))
print(torch.norm(a-b, p=2))
print(torch.dist(a, b, p=1))
print(torch.dist(a, b, p=2))
