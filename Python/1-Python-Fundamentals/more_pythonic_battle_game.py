# create a choose character funcition that takes in a character object and returns a character based on user input
def choose_character(characters):
    print(
        "\n".join(f"{idx + 1}) {char['type']}" for idx, char in enumerate(characters))
    )
    print("5) Quit")
    choice = input("Choose your character: ")
    choice = choice.lower()
    if choice in ["1", "wizard"]:
        return characters[0]
    elif choice in ["2", "elf"]:
        return characters[1]
    elif choice in ["3", "human"]:
        return characters[2]
    elif choice in ["4", "orc"]:
        return characters[3]
    elif choice in ["5", "exit"]:
        print("You quit! Quitter! \n You are now exiting the game")
        exit()


# create a function where a character will battle a dragon, the dragon is an object and the character is an object
def battle_the_dragon(player, dragon):
    while True:
        dragon["hp"] = dragon["hp"] - player["damage"]
        print(
            f"The {player['type']} damaged the Dragon! \n The Dragon's hp is now: {str(dragon['hp'])}"
        )
        if dragon["hp"] <= 0:
            print("The Dragon has lost the battle")
            break
        player["hp"] = player["hp"] - dragon["damage"]
        print(
            f"The Dragon strikes back at the {player['type']} \n The {player['type']}'s hp is now: {player['hp']}"
        )
        if player["hp"] <= 0:
            print(f"The Dragon incinerated the {player['type']}")
            break


# create a function that will run the game


def game_play():
    characters = [
        {"type": "Wizard", "hp": 70, "damage": 150},
        {"type": "Elf", "hp": 100, "damage": 100},
        {"type": "Human", "hp": 150, "damage": 20},
        {"type": "Orc", "hp": 200, "damage": 120},
    ]
    dragon = {"type": "Dragon", "hp": 300, "damage": 50}
    while True:
        player = choose_character(characters)
        print(
            f"You have chosen {player['type']} \n Damage : {player['damage']} \n Hp : {player['hp']}"
        )
        player_copy = player.copy()
        dragon_copy = dragon.copy()
        battle_the_dragon(player_copy, dragon_copy)

        replay = input("Would you like to play again? Yes/y or No/n:  ")
        replay = replay.lower()
        if replay in ["no", "n"]:
            print("You are now exiting the game")
            break


game_play()

# naive version
# creating a mock battle game
# def gamePlay():
#     wizard = "Wizard"
#     wizard_hp = 70
#     wizard_damage = 150

#     elf = "Elf"
#     elf_hp = 100
#     elf_damage = 100

#     human = "Human"
#     human_hp = 150
#     human_damage = 20

#     orc = "Orc"
#     orc_hp = 200
#     orc_damage = 120

#     dragon_hp = 300
#     dragon_damage = 50

#     while True:
#         print(
#             "1) "
#             + wizard
#             + "\n2) "
#             + elf
#             + "\n3) "
#             + human
#             + "\n4) "
#             + orc
#             + "\n5) "
#             + "Exit"
#         )
#         user_choice = input("Choose your character: ")
#         user_choice = user_choice.lower()
#         if user_choice == "1" or user_choice == "wizard":
#             character = wizard
#             my_hp = wizard_hp
#             my_damage = wizard_damage
#             break
#         elif user_choice == "2" or user_choice == "elf":
#             character = elf
#             my_hp = elf_hp
#             my_damage = elf_damage
#             break
#         elif user_choice == "3" or user_choice == "human":
#             character = human
#             my_hp = human_hp
#             my_damage = human_damage
#             break
#         elif user_choice == "4" or user_choice == "orc":
#             character = orc
#             my_hp = orc_hp
#             my_damage = orc_damage
#             break
#         elif user_choice == "5" or user_choice == "exit":
#             print("Quitter!")
#             print("You are now exiting the game")
#             exit()
#         else:
#             print("Unknown Character")

#     print(
#         "You have chosen the character: "
#         + character
#         + "\nHealth: "
#         + str(my_hp)
#         + "\nDamage: "
#         + str(my_damage)
#     )

#     while True:
#         dragon_hp = dragon_hp - my_damage
#         print("The " + character + " damaged the Dragon!")
#         print("The Dragon's hitpoints are now: " + str(dragon_hp))
#         if dragon_hp <= 0:
#             print("The Dragon has lost the battle")
#             break
#         my_hp = my_hp - dragon_damage
#         print("The Dragon strikes back at the " + character)
#         print("The " + character + "'s hitpoints are now: " + str(my_hp))
#         if my_hp <= 0:
#             print("The " + character + " has lost the battle")
#             break

#     replay = input("Do you want to play again? (yes/no)")

#     replay = replay.lower()
#     if replay == "yes" or replay == "y":
#         gamePlay()
#     elif replay == "no" or replay == "n":
#         print("You are now exiting the game")
#         exit()


# gamePlay()
