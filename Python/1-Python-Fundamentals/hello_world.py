# print("Hello World!")
# Turn this line into a comment

# cities = ["Seattle", "Tacoma", "Bellevue"]

# a = 1
# print(type(a))

# b = 2.0
# print(type(b))

# c = "Hello World!"
# print(type(c))

# d = a + b
# print(d)


#   Students  |  Grades  |  Letters
# ------------|----------|----------
#   George    |  46      |  F
#   Michell   |  80      |  B
#   Josh      |  12      |  F
#   Chloe     |  68      |  D
#   Stanley   |  99      |  A
#   Annie     |  100     |  A+


# def gradeChecker(grade=None):
#     if grade is None:
#         print("You didn't enter anything")
#     elif not isinstance(grade, int):
#         print("You didn't enter a valid grade")
#     elif grade == 100:
#         print("A+")
#     elif grade >= 90:
#         print("A")
#     elif grade >= 80:
#         print("B")
#     elif grade >= 70:
#         print("C")
#     elif grade >= 60:
#         print("D")
#     elif grade < 60:
#         print("F")


# gradeChecker(100)  # Should print A+
# gradeChecker(90)  # Should print A
# gradeChecker(80)  # Should print B
# gradeChecker(70)  # Should print C
# gradeChecker(60)  # Should print D
# gradeChecker(50)  # Should print F
# gradeChecker()  # Should print "You didn't enter anything"
# gradeChecker("Pass")  # Should print "You didn't enter a valid grade"


# def priceChecker(price):
#     if price < 5:
#         print("Price is too low!")
#     elif price >= 5 and price <= 9:
#         print("Price is almost there!")
#     elif price == 10:
#         print("Price is exactly that!")
#     else:
#         print("Price is too high!")


# priceChecker(3)  # Should print "Price is too low!"
# priceChecker(5)  # Should print "Price is almost there!"
# priceChecker(10)  # Should print "Price is exactly that!"
# priceChecker(15)  # Should print "Price is too high!"


# x = 0

# while x != 10:
#     x = x + 1

#     if x < 5:
#         print(x)
#     elif x == 6:
#         print(x)
#         continue
#     elif x >= 5 and x <= 8:
#         print(
#             "x is bigger then or equal to 5, and less then or equal to 8, but not 6. It is:",
#             x,
#         )
#     else:
#         print("x is bigger than 8. It is:", x)

x = 3
print(x)
while True:
    x = x - 1
    if x == 1:
        continue
    elif x == 0:
        print("END")
        break
    else:
        print(x)

x = 1 + (0 * 10) * 3 / 8**1
print(x)
