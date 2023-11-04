# creating a mock battle game
def gamePlay():
    wizard = "Wizard"
    wizard_hp = 70
    wizard_damage = 150

    elf = "Elf"
    elf_hp = 100
    elf_damage = 100

    human = "Human"
    human_hp = 150
    human_damage = 20

    orc = "Orc"
    orc_hp = 200
    orc_damage = 120

    dragon_hp = 300
    dragon_damage = 50

    while True:
        print(
            "1) "
            + wizard
            + "\n2) "
            + elf
            + "\n3) "
            + human
            + "\n4) "
            + orc
            + "\n5) "
            + "Exit"
        )
        user_choice = input("Choose your character: ")
        user_choice = user_choice.lower()
        if user_choice == "1" or user_choice == "wizard":
            character = wizard
            my_hp = wizard_hp
            my_damage = wizard_damage
            break
        elif user_choice == "2" or user_choice == "elf":
            character = elf
            my_hp = elf_hp
            my_damage = elf_damage
            break
        elif user_choice == "3" or user_choice == "human":
            character = human
            my_hp = human_hp
            my_damage = human_damage
            break
        elif user_choice == "4" or user_choice == "orc":
            character = orc
            my_hp = orc_hp
            my_damage = orc_damage
            break
        elif user_choice == "5" or user_choice == "exit":
            print("Quitter!")
            print("You are now exiting the game")
            exit()
        else:
            print("Unknown Character")

    print(
        "You have chosen the character: "
        + character
        + "\nHealth: "
        + str(my_hp)
        + "\nDamage: "
        + str(my_damage)
    )

    while True:
        dragon_hp = dragon_hp - my_damage
        print("The " + character + " damaged the Dragon!")
        print("The Dragon's hitpoints are now: " + str(dragon_hp))
        if dragon_hp <= 0:
            print("The Dragon has lost the battle")
            break
        my_hp = my_hp - dragon_damage
        print("The Dragon strikes back at the " + character)
        print("The " + character + "'s hitpoints are now: " + str(my_hp))
        if my_hp <= 0:
            print("The " + character + " has lost the battle")
            break

    replay = input("Do you want to play again? (yes/no)")

    replay = replay.lower()
    if replay == "yes" or replay == "y":
        gamePlay()
    elif replay == "no" or replay == "n":
        print("You are now exiting the game")
        exit()


gamePlay()
