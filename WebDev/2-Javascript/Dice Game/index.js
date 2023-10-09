function rollDice(){
    let goldCoins = 0;
    for(let i = 0; i < 10; i++){
        const roll = Math.floor(Math.random() * 6 + 1);
        alert(roll);
        if(roll === 1){
            alert(`You rolled a ${roll}, Game over no more rolls!`);
            break;
        } else if(roll < 5){
            continue;
        } else if(roll === 5){
            goldCoins += 5;
            alert(`Congratulations, you win ${roll} gold coins`);
        } else if(roll === 6){
            goldCoins += 6;
            alert(`Congratulations, you win ${roll} gold coins`);
        }
    }
    alert(`You have ${goldCoins} gold coins!`)
}