import path from 'path';
import fs from 'fs';

export const rootDir = '../wwwroot/resources';
export const dictIdRegex = /^<\$>(.*)<\/>$/;

export function loadCsv(lang: string, fileName: string) {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName),
        csv = fs.readFileSync(filePath, 'utf8'),
        contents = csv.split('\n').filter(line => line.length).map(line => line.split('\t'));

  console.log(`${contents.length - 1} lines was loaded from /${lang}/${fileName}`);

  return contents;
}