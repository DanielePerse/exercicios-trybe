import json


with open("books-61ea59b31a424b2f6e51dbe47fb24511.json") as list_of_books:
    categories = []
    for row in list_of_books:
        bookCategory = json.loads(row)["categories"]
        if len(bookCategory) != 0 and len(bookCategory) == 1:
            categories.append(bookCategory)

    print(categories)
