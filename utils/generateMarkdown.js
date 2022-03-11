// TODO: Create a function that returns a license badge based on which license is passed in 
// If there is no license, return an empty string 
function renderLicenseBadge(license) {
  //  console.log('donde estas',licenses )
  if (license) {
    switch (license[0]) {
      //'Apache','Boost','BSD','GNU','MIT','Perl' 
      case 'Apache':
        return `## Apache 
  ### Apache 2.0 License 
  [![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0) 
  [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

      case "Boost":
        return `## Boost 
  ### Boost Software License 1.0 
  [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) 
  [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

      case "BSD":
        return `## BSD 
  ### BSD 3-Clause License 
  [![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause) 
  [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      case "GNU":
        return `### GNU GPL v3 
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 
  [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      case "MIT":
        return `### The MIT License 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      case "Perl":
        return `### The Perl License 
  [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0) 
  [![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`
      default:
        return ""
    }

  }

  else {
    return ''

  }
}

// TODO: Create a function that returns the license link 
// If there is no license, return an empty string 
function renderLicenseLink(license) {
  if (license) {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'

  }

  else {
    return ''

  }
}

//Function generates title 
function generateMarkdown(data) {
  return `# ${data}\n`;

  ;
}
//Function generates sections
function generatestructure(section) {
  return `## [${section.subtitle}](#table-of-contents)\n${section.body}\n`;
}

// genarates table of content through an array 
function generatetableofcontents(sections) {
  var text = '## Table-of-Contests\n'
  for (let i of sections) {
    text = text + `* [${i}](#${i})\n`
  }
  return text;
}


module.exports = { generateMarkdown, generatetableofcontents, generatestructure, renderLicenseBadge };