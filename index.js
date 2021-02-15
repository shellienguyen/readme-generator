// TODO: Include packages needed for this application
const inquirer = require( "inquirer" );
const fs = require( "fs" ); 
const Choice = require('inquirer/lib/objects/choice');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Get user input
const promptUser = ( data ) => {
   return inquirer.prompt([
      {
         type: "input",
         name: "projectTitle",
         message: "Welcome to the Readme Generator! Please enter the name of your project title:",
         validate: projectTitleInput => {
            if ( projectTitleInput && projectTitleInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Project title is required:");
               return false;
            };
         }
      },
      {
         type: "input",
         name: "projectDesc",
         message: "Please enter the project description:",
         validate: projectDescInput => {
            if ( projectDescInput && projectDescInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Project description is required:" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "installInstr",
         message: "Please enter project installation instructions:",
         validate: installInstrInput => {
            if ( installInstrInput && installInstrInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter project installation instructions:" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "usageInfo",
         message: "Please enter usage information:",
         validate: usageInfoInput => {
            if ( usageInfoInput && usageInfoInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter usage information:" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "contributingInstr",
         message: "Please enter contributing information:",
         validate: contributingInstrInput => {
            if ( contributingInstrInput && contributingInstrInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter contributing information:" );
               return false;
            };
         }
      },
      {
         type: "input",
         name: "testInstr",
         message: "Please enter test information:",
         validate: testInstrInput => {
            if ( testInstrInput && testInstrInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter test information:" );
               return false;
            };
         }
      },
      {
         type: "list",
         name: "licenseBadge",
         message: "Please choose a license from the list below for your project:",
         choices: [ "Apache License 2.0", "GNU GPLv3", "MIT", "ISC", "Mozilla Public License 2.0", "The Unlicense"]
      },
      {
         type: "input",
         name: "githubUsername",
         message: "Please enter your Github username:",
         validate: githubUsernameInput => {
            if ( githubUsernameInput && githubUsernameInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter your Github username:");
               return false;
            };
         }
      },
      {
         type: "input",
         name: "email",
         message: "Please enter your email address:",
         validate: emailInput => {
            if ( emailInput && emailInput.trim().length > 0 ) {
               return true;
            }
            else {
               console.log( "Please enter your email address:");
               return false;
            };
         }
      }
   ]);
};

// TODO: Create a function to write README file
const writeToFile = readmeData => {
   return new Promise(( resolve, reject ) => {
       fs.writeFile('./dist/README.md', readmeData, err => {
         // If there's an error, reject the Promise and send the error to the 
         // Promise's `.catch() ` method
         if ( err ) {
               reject( err );
            // Return ouf of the function here to make sure the Promise doesn't
            // accidentally execute the resolve() function as well
            return;
           };

         // If everything went well, resolve the Promise and send the succesful
         // data to the `.then()` method
         resolve({
               ok: true,
               message: 'File created! Your README.md file is located in the "dist" folder.' 
           });
       });
   });
};

// TODO: Create a function to initialize app
function init() {
   promptUser()
   .then( readmeData => {
       writeToFile( generateMarkdown( readmeData ));
   });
};

// Function call to initialize app
init();