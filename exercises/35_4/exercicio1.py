def fizzBuzz(n):
    listOfN = []

    for n in range(1, n + 1):
        if n % 15 == 0:
            listOfN.append("FizzBuzz")
        elif n % 3 == 0:
            listOfN.append("Fizz")
        elif n % 5 == 0:
            listOfN.append("Buzz")
        else:
            listOfN.append(n)

    return listOfN
