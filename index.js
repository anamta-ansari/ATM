import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 39830;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            let currBalance = myBalance - amountAns.amount;
            console.log("your remaining balance is :" + currBalance);
        }
        else if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
    else if (operationAns.operation === "fast cash") {
        let cashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "please select amount",
                type: "list",
                choices: ["2000", "4000", "8000", "10000"]
            }
        ]);
        if (cashAns.cash === "2000") {
            let firstOption = myBalance - 2000;
            console.log(`your remaining balance is${firstOption} `);
        }
        else if (cashAns.cash === "4000") {
            let secondOption = myBalance - 4000;
            console.log(`your remaining balance is${secondOption} `);
        }
        else if (cashAns.cash === "8000") {
            let thirdOption = myBalance - 8000;
            console.log(`your remaining balance is${thirdOption} `);
        }
        else if (cashAns.cash === "10000") {
            let fourthOption = myBalance - 8000;
            console.log(`your remaining balance is${fourthOption} `);
        }
    }
}
else {
    console.log("Incorrect pin number");
}
//add fast cash insufficient balance 
