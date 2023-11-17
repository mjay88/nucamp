def show_balance(balance):
    print(f"Current Balance: ${balance:.2f}")


def deposit(balance):
    deposit_amount = input("Enter amount to deposit: ")
    deposit_as_float = float(deposit_amount)
    print(f"You deposited ${deposit_as_float:.2f}")
    show_balance(balance + deposit_as_float)
    return balance + deposit_as_float


def withdraw(balance):
    withdraw_amount = input("Enter amount to withdraw: ")
    withdraw_as_float = float(withdraw_amount)
    print(f"You withdrew {withdraw_as_float:.2f}")
    show_balance(balance - withdraw_as_float)
    return balance - withdraw_as_float


def logout(name):
    print(f"Goodbye {name}!")
