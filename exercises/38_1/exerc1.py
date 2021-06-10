def verify_max_time_ok(collected_values):
    max_time = 0
    current_time = 0
    for value in collected_values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0

        # ele vai add à variável max_time e substitui pelo valor
        # de current_time quando uma ultrapassa a outra
        if current_time >= max_time:
            max_time = current_time
    return max_time
