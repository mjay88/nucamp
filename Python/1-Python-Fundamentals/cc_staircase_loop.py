def stairs_printer(stairs_length):
    stars = ""
    for i in range(0, stairs_length, 1):
        for _ in range(0, i, 1):
            stars += "*"
        print(stars)


stairs_printer(5)

# outer loop first iteration i = 0
# inner loop never runs because range is set to 0, which is i
# outer loop second iteration i = 1
# inner loop runs once j = 0
# stars = *
# outer loop third iteration i = 2
# inner loop first iteration j = 0
# inner loop second iteration j = 1
# stars = ***
# outer loop fourth iteration i = 3
# inner loop first iteration j = 0
# inner loop second iteration j = 1
# inner loop third iteration j = 2
# stars = ******
# outer loop fifth iteration i = 4
# inner loop first iteration j = 0
# inner loop second iteration j = 1
# inner loop third iteration j = 2
# inner loop fourth iteration j = 3
# stars = **********
# i = 5, outer loop exits
