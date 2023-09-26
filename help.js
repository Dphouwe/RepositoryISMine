const fs = require('fs');
const path = require('path');

// Check for command-line argument
const keyword = process.argv[2];

if (!keyword) {
  console.log('Usage: node package-search.js <keyword>');
  process.exit(1);
}

// Read the package.json file
const packageJsonPath = path.join(process.cwd(), 'package.json');

fs.readFile(packageJsonPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading package.json:', err);
    process.exit(1);
  }

  try {
    const packageData = JSON.parse(data);
    if (packageData[keyword]) {
      console.log(packageData[keyword]);
    } else {
      console.log(`Keyword "${keyword}" not found in package.json.`);
    }
  } catch (jsonParseError) {
    console.error('Error parsing package.json:', jsonParseError);
    process.exit(1);
  }
});