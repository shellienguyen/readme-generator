// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = ( license ) => { return `<img src="https://img.shields.io/badge/license-${license}-blue" alt="" />`;}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink( license ) {
   switch ( license ) {
      case "Apache License 2.0":
         return `[Apache License 2.0](http://www.apache.org/licenses/)`;
         break;
      case "GNU GPLv3":
         return `[GNU GPLv3 license](https://www.gnu.org/licenses/gpl-3.0)`;
         break;
      case "MIT":
         return `[MIT license](https://www.mit.edu/~amini/LICENSE.md)`;
         break;
      case "ISC":
         return `[ISC license](https://www.isc.org/licenses/)`;
         break;
      case "Mozilla Public License 2.0":
         return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
         break;
      case "The Unlicense":
         return `[The Unlicense](https://choosealicense.com/licenses/unlicense/)`;
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
      ${renderLicenseBadge( readmeData.licenseBadge )}
      The license for this application is covered under ${renderLicenseSection(readmeData.licenseBadge)}.<br>
      Licensing information can be viewed here: ${renderLicenseLink(readmeData.licenseBadge)}


      ## Questions:
      The author may be reached via email and/or GitHub at:<br>
      [Github Contact](https://github.com/${readmeData.githubUsername})
      [Email Contact](${readmeData.email})
   `;
};

module.exports = generateMarkdown;