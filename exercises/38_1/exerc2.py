def shuffle(numbers, n):
    answer = []
    new_array_index = 0
    for index in range(n):
        # looping 1 - insira na posição 0, o item posição 0 (2)
        # looping 2 - insira na posição 2, o item posição 1 (6)
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1
        # looping 1 - insira na posição 1, o item posição 0 + 2 (4)
        # looping 2 - insira na posição 3, o item posição 1 + 2 (5)
        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1
    return answer

# https://www.w3schools.com/python/ref_list_insert.asp
# The insert() method inserts the specified value at the specified position.
# Exemplo 1: cartas = [2, 6, 4, 5] - cartas por parte = 2