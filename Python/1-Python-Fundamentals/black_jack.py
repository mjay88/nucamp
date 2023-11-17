# Data Structure to hold the deck of cards
# cards = {
#     "1" : [art_work, 2], #2 of hearts
#     "2" : [art_work, 3], #3 of hearts
#     "3" : [art_work, 4], #4 of hearts
#     ...
# }

# Make a function that generates a number between 1 and 50, representing the 50 cards in a standard card deck minus the two jokers, this function will remove these cards from the dictionary to avoid duplicates.
# Assign the player there 2 cards by calling this function twice in a list.
# user_hand = [generate_card(), generate_card()]
# Assign the house there 2 cards by calling this function the same way
# house_hand = [generate_card(), generate_card()]

# Make a function that for game play:
# call the generate hand functions
# print the player hand
# user_hand[0][0] is the art work for the first card...
# print the house hand
# if the player has 21 they win
# if the house has 21 they win
# if the player has more than 21 they lose
# if the house has more than 21 they lose
# if the house has more than the player but less than 21 they player can choose another card
# repeat these conditionals in a loop until the player chooses to stop or they win or lose
