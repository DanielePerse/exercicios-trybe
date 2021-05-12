from exercicio1 import fizzBuzz


def test_list_return_buzz():
    assert fizzBuzz(5)[-1] == "Buzz"


def test_list_return_list():
    assert fizzBuzz(5) == [1, 2, "Fizz", 4, "Buzz"]


def test_list_return_fizz():
    assert fizzBuzz(3)[-1] == "Fizz"


def test_list_return_fizzBuzz():
    assert fizzBuzz(15)[-1] == "FizzBuzz"
