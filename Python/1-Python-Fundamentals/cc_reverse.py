# slice notation
# start at the end of the string, step backwards through string by one. slice is non mutating

string = input("What is your name?")
reversed_string = string[::-1]
# print(reversed_string)


# iterate through string in reverse, concatenating each character to a new string
def reverse_string(string):
    reversed_string = ""
    for i in range(len(string) - 1, -1, -1):  # stop parameter is exclusive so -1
        reversed_string += string[i]

    return reversed_string


# print(reverse_string(string))


# reverse a string in place, (ie mutating algorithm)
# convert string to list for destructuring capabilities
# iterate through half of the list
# use destructuring to swap current index with the negative version of that index
# convert back to string
def reversed_string_in_place(string):
    string = list(string)
    # string_as_list = [char for char in string] list comprehension (alternative to list function)
    for i in range(0, round((len(string) * 0.5 / len(string)) * len(string))):
        [string[i], string[-1 - i]] = [string[-1 - i], string[i]]
    return "".join(string)


print(reversed_string_in_place(string))
