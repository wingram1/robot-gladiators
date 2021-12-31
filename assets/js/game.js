//Player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//Enemy Variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);

var fight = function(enemyName) {
    while (playerHealth > 0 && enemyHealth > 0) {
        //ask player if they'd like to fight or run
        var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter FIGHT or SKIP to choose.');

        //if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + ' has decided to skip this fight. Goodbye!');
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        //remove enemy's health by subtracting playerAttack
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining!'
        );

        //check enemy's health
        if (enemyHealth <= 0) {
            window.alert(enemyName + ' has died!');

            //award player money for winning
            playerMoney = playerMoney + 20;

            //leave while() loop since enemy is dead
            break;
        } else {
            window.alert(enemyName + ' still has ' + enemyHealth + ' health left.')
        }

        // remove player's health by subtracting enemyAttack
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + ' attacked ' + playerName + ". " + playerName + ' now has ' + playerHealth + ' health remaining!'
        );

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + ' has died!');
            //leave while() loop if player is dead
            break;
        } else {
            window.alert(playerName + ' still has ' + playerHealth + ' health remaining!');
        }
    }
};



//function to start a new game
var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        //welcome message if player is still alive
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators, Round " + (i + 1));

        //pick new enemy to fight based on place in array
            var pickedEnemyName = enemyNames[i]

        //reset enemy health
            enemyHealth = 50;

        //use debugger to pause script and see what's happening
        // debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        
        //if not last enemy (and alive), enter shop
            if (playerHealth > 0 && i < enemyNames.length - 1) {
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
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + "!")
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
        window.alert("Thanks for playing Robot Gladiators! Come back soon! :D")
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
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 money.");

                //increase health and decrease money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } 
            else {
                window.alert("You don't have enough money!");
            }

            break;
        case "UPGRADE":
        case "upgrade":
            if (playerMoney >= 7)
            {
                window.alert("Upgrading player's attack by 6 for 7 money");

                //increase atack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            }
            else{
                window.alert("You don't have enough money!");
            }

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






//////////CALL MAIN FUNCTION///////////
//start the game when the page loads
startGame();