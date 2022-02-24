// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `### license ${license}`

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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return ` ## license \n This project is under ${license} please look at file[LICENSE.md](LICENSE.md) for more details`
}

// TODO: Create a function to generate markdown for README



//Function generates title
function generateMarkdown(data) {
  return `# ${data.title}

`;
}
//Function generates 
function generatestructure(section) {
  return ' ## [${section}](#table-of-contents)'
}

// genarates table of content through an array
function generatetableofcontents(sections) {
  var text = '##Table-of-Contests\n'
  for (let i of sections) {
    text = text + `*[${i}](#${i})\n`
  }
  return text;
}


module.exports = generateMarkdown;


