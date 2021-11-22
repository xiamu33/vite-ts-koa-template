const fs = require('fs');
const path = require('path');

/** 需要生成 `index.ts` 统一导出的目录 */
const pathList = ['src/toolkit', 'src/service'];
pathList.forEach(generateIndex);

function generateIndex(basePath) {
  if (!basePath || typeof basePath !== 'string') return;
  const fileList = fs.readdirSync(basePath);

  const fileNames = [];

  fileList.forEach(file => {
    if (file === 'index.ts') return;
    const filePath = path.join(basePath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      generateIndex(filePath);
      fileNames.push(file);
      return;
    }
    const reg = /(?<fileName>\w+).ts/;
    const matchRst = reg.exec(file);
    if (!matchRst) return;
    const { fileName } = matchRst.groups;
    fileNames.push(fileName);
  });

  let writeText = '';

  fileNames.forEach(fileName => {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    writeText += `export * from './${fileName}';\n`;
  });

  fs.writeFileSync(path.join(basePath, './index.ts'), writeText);
}
