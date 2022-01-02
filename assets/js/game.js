//Player variables
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 money.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 money.")
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

//Enemy Variables
var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];

console.log(enemyInfo.name);
console.log(enemyInfo.length);
console.log(enemyInfo[0].name);

var fight = function(enemy) {
    console.log(enemy);

    while (playerInfo.health > 0 && enemy.health > 0) {
        //ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + ' has decided to skip this fight. Goodbye!');
                //subtract money from playerInfo.money for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }

        //generate random attack value based on player's attack power
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining!'
        );

        //check enemy's health
        if (enemy.health <= 0) {
            window.alert(enemy.name + ' has died!');

            //award player money for winning
            playerInfo.money = playerInfo.money + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemy.name + ' still has ' + enemy.health + ' health left.')
        }

        //Generate random attack value based on enemy's attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
        
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + ". " + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining!'
        );

        //check player's health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + ' has died!');
            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerInfo.name + ' still has ' + playerInfo.health + ' health remaining!');
        }
    }
};



//function to start a new game
var startGame = function() {

    //reset player stats
    playerInfo.reset();

    for(var i = 0; i < enemyInfo.length; i++) {
        //welcome message if player is still alive
        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators, Round " + (i + 1));

        //pick new enemy to fight based on place in array
            var pickedEnemyObj = enemyInfo[i]

        //reset enemy health between 40 and 60
            pickedEnemyObj.health = randomNumber(40, 60);

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);
        
        //if not last enemy (and alive), enter shop
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                //ask if want to shop
                var storeConfirm = window.confirm("The fight is over. Visit the store before the next round?");
                //if yes, shop
                if (storeConfirm) {
                shop();
                }
            }
        }
        else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    } 
    //play again?
    endGame();
};

//function to end the entire game
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player alive, win!
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + "!")
    }
    else { 
        window.alert("You've lost your robot in battle. :(")
    }

    //ask if want to play again?
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thanks for playing Robot Gladiators! Come back soon! :D");
    }
};

//DECLARE Shop function
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop?"
    );

    //use switch statement to carry out action
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store. Good luck!");

            //do nothing, function ends
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");

            //call shop() again to force player to pick a valid option
            shop()
            break;
    }
};

//function to generate a random numeric value based on parameters
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};




//////////CALL MAIN FUNCTION///////////

//use debugger to pause script and see what's happening
debugger;

//start the game when the page loads
startGame();