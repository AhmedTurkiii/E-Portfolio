const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

// Create .nojekyll file in the out directory
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file');
} else {
  console.log('.nojekyll file already exists');
}

