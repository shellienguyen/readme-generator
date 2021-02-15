// This function returns a license badge based on the license, return an empty string if there's no license
let renderLicenseBadge = ( license ) => { return `<img src="https://img.shields.io/badge/license-${license}-blue" alt="" />`;}

// This function returns the license link and returns an empty string if there's no link
function renderLicenseLink( license ) {
   switch ( license ) {
      case "Apache License 2.0":
         return "www.apache.org/licenses/";
         break;
      case "GNU GPLv3":
         return "www.gnu.org/licenses/gpl-3.0";
         break;
      case "MIT":
         return "www.mit.edu/~amini/LICENSE.md";
         break;
      case "ISC":
         return "www.isc.org/licenses/";
         break;
      case "Mozilla Public License 2.0":
         return "www.mozilla.org/en-US/MPL/2.0/";
         break;
      case "The Unlicense":
         return "choosealicense.com/licenses/unlicense/";
         break;
      default:
        return "";
        break;
  };
};

// This function returns the info where the license is covered under, returns an empty string if there's no license
function renderLicenseSection( license ) {
   switch ( license ) {
      case "Apache License 2.0":
         return "the Apache Software Foundation";
         break;
      case "GNU GPLv3":
         return "GNU General Public License";
         break;
      case "MIT":
         return "The MIT License";
         break;
      case "ISC":
         return "ISC Software Licenses";
         break;
      case "Mozilla Public License 2.0":
         return "Mozilla Public License";
         break;
      case "The Unlicense":
         return "The Unlicense released into the public domain";
         break;
      default:
        return "";
        break;
   };
};

// This function generates a markdown for README file using user's input
function generateMarkdown( readmeData ) {
   return `
# ${readmeData.projectTitle}

## Description: 
${readmeData.projectDesc}

## Table of Contents
1. **[Installation](#installation)**
2. **[Usage](#usage)**
3. **[License](#license)**
4. **[Contributing](#contributing)**
5. **[Tests](#tests)**
6. **[Questions](#questions)**

## Installation:
${readmeData.installInstr}

## Usage:
${readmeData.usageInfo}

## License:
Licensing information can be viewed at:
[${readmeData.licenseBadge}](https://${renderLicenseLink( readmeData.licenseBadge )})
<br>The license for this application is covered under ${renderLicenseSection( readmeData.licenseBadge )}.
${renderLicenseBadge( readmeData.licenseBadge )}

## Contributing:
${readmeData.contributingInstr}

## Tests:
${readmeData.testInstr}

## Questions:
The author may be reached via:
[Github](https://github.com/${readmeData.githubUsername})
[Email](mailto:${readmeData.email})
`;
};

// Export the generateMarkdown function to be called when the program writes to a file
module.exports = generateMarkdown;