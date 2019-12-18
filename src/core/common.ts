import path from 'path';
import fs from 'fs';

export const rootDir = '../wwwroot/resources';
export const dictIdRegex = /^<\$>(.*)<\/>$/;

export class DataTable {
  dictionary: any;
  zones: any[];
  npcs?: any[];
  stances: any[];
  items?: any[];
}

export class DataSource {
  eu: DataTable;
  jp: DataTable;
}

export const dataSource = new DataSource();

export type GeEntity = {
  ClassID: string,
  ClassName: string,
  Name: string,
  EngName: string,
}

export function loadCsv<T>(lang: string, fileName: string, replacedByDict: string[] = []) {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName),
        csv = fs.readFileSync(filePath, 'utf8'),
        contents = csv.split('\n').filter(line => line.length).map(line => line.split('\t')),
        fieldNames = contents[0];

  console.log(`${contents.length - 1} lines was loaded from /${lang}/${fileName}`);

  return contents.slice(1)
      .map(line => {
        return fieldNames.reduce((item, name, index) => {
          let value = line[index];
          if (replacedByDict.includes(name)) {
            const dictIdMatch = dictIdRegex.exec(value);
              if (dictIdMatch && dictIdMatch.length > 1) {
                value = dataSource[lang].dictionary[dictIdMatch[1]];
              }
          }
          item[name] = value;
          return item;
        }, {} as T);
      })
}