// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = ( license ) => { return `<img src="https://img.shields.io/badge/license-${license}-blue" alt="" />`;}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
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

// TODO: Create a function to generate markdown for README
function generateMarkdown( readmeData ) {
   return `
# ${readmeData.projectTitle}

## Table of Contents
1. **[Description](#description)**
2. **[Installation](#installation)**
3. **[Usage](#usage)**
4. **[Contributing](#contributing)**
5. **[Tests](#tests)**
6. **[License](#license)**
7. **[Questions](#questions)**

## Description: 
${readmeData.projectDesc}

## Installation:
${readmeData.installInstr}

## Usage:
${readmeData.usageInfo}

## Contributing:
${readmeData.contributingInstr}

## Tests:
${readmeData.testInstr}

## License:
Licensing information can be viewed at:
[${readmeData.licenseBadge}](https://${renderLicenseLink( readmeData.licenseBadge )})
<br>The license for this application is covered under ${renderLicenseSection( readmeData.licenseBadge )}.
${renderLicenseBadge( readmeData.licenseBadge )}

## Questions:
The author may be reached via:
[Github](https://github.com/${readmeData.githubUsername})
[Email](mailto:${readmeData.email})
`;
};

module.exports = generateMarkdown;