def students_in_instant(inputs, outputs, query_number):
    answer = 0
    size = len(input)
    for index in range(size):
        if inputs[index] < query_number < outputs[size]:
            answer += 1
    return answer


# ou de uma maneira mais pythonica
def students_in_instant(inputs, outputs, query_number):
    answer = 0
    for input, output in zip(inputs, outputs):
        if input < query_number < output:
            answer += 1
    return answer
