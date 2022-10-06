const inquirer = require("inquirer");


function createTeam(){
    inquirer.prompt([{
        type: "list",
        message: "What type of employee would you be add to your team?",
        name: "addTeamRole",
        choices: ["Manager", "Engineer", "Intern"]
    }]).then(function (userInput){
        switch(userInput.addTeamRole) {
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                break;
            
            default:
                htmlBuilder();
        }
    })
    
}