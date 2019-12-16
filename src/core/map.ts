import fs from 'fs';
import path from 'path';
import { PlainObject } from '@roxie/core';

import { rootDir } from './common';

const fileName = 'datatable_map.csv';

export class Zone {
  ClassID = '';
  ClassName = '';
  Name = '';
  BgName = '';
  EngName = '';
  Type = '';
  Desc = '';
  WorldMapName = '';
  Continent = '';
  MovableZone = '';
  Note = '';
  others = {};
}

export function loadMap(lang = 'eu', dictionary: PlainObject<string>): Zone[] {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName),
        csv = fs.readFileSync(filePath, 'utf8'),
        contents = csv.split('\n').map(line => line.split('\t')),
        fieldNames = contents[0];

  console.log(`${contents.length - 1} lines was loaded from /${lang}/${fileName}`);
  console.log(`Schema: ${JSON.stringify(fieldNames)}`);

  return contents.slice(1).map(line => {
    const response = new Zone(),
          props = Object.getOwnPropertyNames(response),
          dictIdRegex = /^<\$>(.*)<\/>$/;
    fieldNames.forEach((name, index) => {
      if (!props.includes(name)) {
        response.others[name] = line[index];
      } else {
        const value = line[index];
        if (['Name', 'Desc', 'Note'].includes(name)) {
          const dictIdMatch = dictIdRegex.exec(value);
          if (dictIdMatch && dictIdMatch.length > 1) {
            response[name] = dictionary[dictIdMatch[1]];
          } else {
            response[name] = value;
          }
        } else {
          response[name] = value;
        }
      }
    })
    return response;
  });
}