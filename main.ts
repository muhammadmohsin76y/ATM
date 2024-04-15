#! /usr/bin/env node
// start code by import inquirer
import inquirer from "inquirer";

let myBalance = 59000; //Dollar

    let mypin = 6666;
    
    let pinAnswer = await inquirer.prompt(
        [
            {  name: "pin",
               message: "Enter your pin",
               type: "number",
            }  

    ]
);
      // 12345 === 6666 - false
      if (pinAnswer.pin === mypin) {
        console.log("Correct pin code!!!");
    
        let operationAns = await inquirer.prompt(
            [
                {
                    name: "operation",
                    message: "Select your option",
                    type: "list",
                    choices: ["fastcash", "withdraw", "check balance"]
                }
            ]
        );
        if (operationAns.operation === "fastcash") {
            let fastCashAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "Select your amount",
                        type: "list",
                        choices: ["1000", "2000", "5000", "10000"]
                    }
                ]
            );
            if (fastCashAns.amount === "1000") {
                myBalance = myBalance - 1000;
                console.log("Your balance is " + myBalance);
            } else if (fastCashAns.amount === "2000") {
                myBalance = myBalance - 2000;
                console.log("Your balance is " + myBalance);
            } else if (fastCashAns.amount === "5000") {
                myBalance = myBalance - 5000;
                console.log("Your balance is " + myBalance);
            } else if (fastCashAns.amount === "10000") {
                myBalance = myBalance - 10000;
                console.log("Your balance is " + myBalance);
            } else { 
                console.log("Invalid amount");
            } 
        } else if (operationAns.operation === "withdraw") { 
            let withdrawAns = await inquirer.prompt(
                [
                    {
                        name: "amount",
                        message: "Enter your amount",
                        type: "number",
                    }
                ]
            );
            if (withdrawAns.amount <= myBalance) {
                myBalance = myBalance - withdrawAns.amount;
                console.log("Your balance is " + myBalance);
            } else {
                console.log("Insufficient balance");
            }
        } else if (operationAns.operation === "check balance") { 
            console.log("Your balance is " + myBalance);
        } else { 
            console.log("Incorrect pin number");
        } 
        }
 




