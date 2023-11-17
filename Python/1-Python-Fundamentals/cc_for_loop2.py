list = ["*", "**", "***", "****"]

for x in range(0, 6):
    if x == 0 or x == 6:
        print(list[0])
    elif x == 1 or x == 5:
        print(list[1])
    elif x == 2 or x == 3:
        print(list[2])
    else:
        print(list[3])
