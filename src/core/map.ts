import fs from 'fs';
import path from 'path';
import { PlainObject } from '@roxie/core';

import { rootDir } from './common';

const fileName = 'datatable_map.csv';

export class Zone {
  ClassID: string = '';
  BgName: string = '';
  Continent: string = '';
  others: PlainObject<string> = {};
}

export function loadMap(lang = 'eu'): Zone[] {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName),
        csv = fs.readFileSync(filePath, 'utf8'),
        contents = csv.split('\n').map(line => line.split('\t')),
        fieldNames = contents[0];

  console.log(`${contents.length - 1} lines was loaded from /${lang}/${fileName}`);
  console.log(`Schema: ${JSON.stringify(fieldNames)}`);

  return contents.slice(1).map(line => {
    const response = new Zone(),
          props = Object.getOwnPropertyNames(response);
    fieldNames.forEach((name, index) => {
      if (props.includes(name)) {
        response[name] = line[index];
      } else {
        response.others[name] = line[index];
      }
    })
    return response;
  });
}