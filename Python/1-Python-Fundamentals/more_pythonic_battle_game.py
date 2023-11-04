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
