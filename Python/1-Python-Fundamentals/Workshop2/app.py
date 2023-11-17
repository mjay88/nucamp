import banking_pkg.account as account


def atm_menu(name):
    print("")
    print("          === Automated Teller Machine ===          ")
    print("User: " + name)
    print("------------------------------------------")
    print("| 1.    Balance     | 2.    Deposit      |")
    print("------------------------------------------")
    print("------------------------------------------")
    print("| 3.    Withdraw    | 4.    Logout       |")
    print("------------------------------------------")


print("          === Automated Teller Machine ===          ")
name = input("Enter name to register: ")
pin = input("Enter PIN: ")
balance = 0
print(f"Name: {name} \nBalance: {str(balance)}")

while True:
    print("          === Automated Teller Machine ===          ")
    print("Login")
    name_to_validate = input("Enter Name: ")
    pin_to_validate = input("Enter Pin: ")
    if name == name_to_validate and pin == pin_to_validate:
        print("Login Successful!")
        break
    else:
        print("Invalid Credentials")

while True:
    atm_menu(name)
    user_input = input("Choose an option: ")

    if user_input == "1":
        account.show_balance(balance)
    elif user_input == "2":
        balance = account.deposit(balance)
    elif user_input == "3":
        balance = account.withdraw(balance)
    elif user_input == "4":
        account.logout(name)
        break
