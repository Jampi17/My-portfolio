import { copyFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const docsDir = resolve('docs');
const indexFile = resolve(docsDir, 'index.html');
const notFoundFile = resolve(docsDir, '404.html');
const noJekyllFile = resolve(docsDir, '.nojekyll');

async function preparePages() {
  await copyFile(indexFile, notFoundFile);
  await writeFile(noJekyllFile, '');
  console.log('GitHub Pages files prepared in docs/.');
}

preparePages().catch((error) => {
  console.error('Failed to prepare GitHub Pages files:', error);
  process.exit(1);
});
