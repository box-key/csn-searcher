from setuptools import Extension, setup, find_packages


__version__ = "0.1.1"


with open("README.md", "r") as f:
    long_description = f.read()


setup(
    name="csn-searcher",
    version = __version__,
    author="Kei Nemoto",
    author_email="kei.nemoto28@gmail.com",
    description="Document search on COVID-19 articles based on section similarity.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/box-key/csn-searcher",
    keywords=[
        "natural language processing",
        "document similarity",
        "siamese lstm",
        "CORD19 challenge"
    ],
    packages=find_packages(),
    install_requires=[
        "tqdm>=4.31",
        "torch>=1.4",
        "torchtext==0.5",
        "spacy>=2.2",
        "dill>=0.3",
        "sortedcontainers>=2.1"
    ],
    classifiers=[
        "Programming Language :: Python :: 3 :: Only",
        "Programming Language :: Python :: 3.7",
        "License :: OSI Approved :: Apache Software License",
        "Operating System :: OS Independent",
        "Topic :: Scientific/Engineering :: Artificial Intelligence"
    ],
    license="Apache 2.0",
    entry_points={
        'console_scripts': [
            'csn-search = csn_searcher.cli:csn_search',
        ]
    },
    zip_safe=False
)
