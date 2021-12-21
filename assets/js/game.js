var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// log multiple values
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;


//create function
var fight = function() {
    window.alert("Welcome to Robot Gladiators!")

var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if (promptFight === "fight" || promptFight === "FIGHT") {


    //PLAYER ATTACKS    
        enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    )
    
    //ENEMY ATTACKS
    playerHealth = playerHealth - enemyAttack;

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has been annihilated!")
    } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
    }

    //PLAYER ATTACKS
    console.log(enemyName = " attacked " + playerName + "! " + playerName + " now has " + playerHealth + " health remaining.")
    if (playerHealth <= 0) {
        window.alert(playerName + " has been annihilated!");
    } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
} else if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        //subtract money for skip
        playerMoney = playerMoney - 2;
    }
    //if no, ask question by running fight() again
    else {
        fight();
    }
    window.alert(playerName + " has chosen to skip the fight! You now have " + playerMoney + " monies left!");
} else {
    window.alert("Please enter a valid option! 'FIGHT'/'fight' or 'SKIP'/'skip'")
};

//     // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
//     playerHealth = playerHealth - enemyAttack;
//     // Log a resulting message to the console so we know that it worked.
//     console.log(
//         enemyName + " attacked " + playerName + " . " + playerName + "now has " + enemyHealth + " health remaining!"
//     )
};
//excute function
fight();