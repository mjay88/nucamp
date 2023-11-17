def loading_bar(total):
    step = 3
    for amount_loaded in range(0, total + 1, step):
        if amount_loaded == round(total * 0.25 / step) * step:
            print(f"{amount_loaded} 1/4 of the way there")
        elif amount_loaded == round(total * 0.5 / step) * step:
            print(f"{amount_loaded} 1/2 of the way there")
        elif amount_loaded == round(total * 0.75 / step) * step:
            print(f"{amount_loaded} 3/4 of the way there")
        elif total % step == 0 and amount_loaded == round(total * 1 / step) * step:
            print(f"{amount_loaded} \nLoading Complete!")
        else:
            print(amount_loaded)
    if total % step != 0:
        print(f"{total} Loading Complete!!!")


# loading_bar(25)
# loading_bar(70)
# loading_bar(71)
# loading_bar(69)
# loading_bar(100)
loading_bar(106)


# print(71 % 70, "remainder")

# elif amount_loaded != 0 and (total % amount_loaded) < step:
#     print(f"{amount_loaded + (total % amount_loaded)} \nLoading Complete!")
# elif amount_loaded != 0 and (total % amount_loaded) <= 1:
#     print(f"{amount_loaded + (total % amount_loaded)} \nLoading Complete!")
