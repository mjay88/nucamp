from random import randint

high_score = 0


def dice_game():
    global high_score
    while True:
        print("1) Roll Dice \n2) Leave Game")
        user_input = input("Enter your choice: ")
        if user_input == "1":
            dice_1 = randint(1, 6)
            print(f"You rolled a {dice_1}")
            dice_2 = randint(1, 6)
            print(f"You rolled a {dice_2}")
            if dice_1 + dice_2 > high_score:
                print("New High Score")
                high_score = dice_1 + dice_2
                print(f"Current high score is: {high_score}")
                continue
        elif user_input == "2":
            print("GoodBye!")
            high_score = 0
            exit()


dice_game()
