def even_count(n):
    result = 0
    for num in range(n + 1):
        if num % 2 == 0 and num != 0:
            result += 1
    return result
