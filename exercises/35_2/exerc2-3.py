import random


with open("list.txt") as list_of_words:
    words = list_of_words.read().splitlines()
    # w3schools.com/python/ref_string_splitlines.asp
    # O splitlines()método divide uma string em uma lista.
    # A divisão é feita nas quebras de linha


word = random.choice(words)
scrambled_word = "".join(random.sample(word, len(word)))
# função já dada no exercício


for attempt in range(3):
    print(f"Tentativa {attempt + 1}")  # pq 'f' para iniciar a frase?
    hunch = input(f"Desembaralhando '{scrambled_word}' resulta em:")
    if hunch == word:
        print("Você venceu!")
        break
print(f"A resposta é {word}")

# código laís:
# https://github.com/lais-gurgel/Trybe-course/blob/exercises-trybe/
# 35_Python_WebDataScraping_Introduction/35_2/exercises/02_03_scrambled_word.py
