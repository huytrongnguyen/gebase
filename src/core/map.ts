import fs from 'fs';
import path from 'path';
import { PlainObject } from '@roxie/core';

import { rootDir, dictIdRegex } from './common';

const fileName = 'datatable_map.csv';

export class Zone {
  ClassID = '';
  ClassName = '';
  Name = '';
  EngName = '';
  Type = '';
  WorldMapName = '';
  Continent = '';
  MovableZone = '';
  Desc = '';
  MinimapFile = '';
  Thumbnail = '';
  others = {};
}

export function loadMap(lang = 'eu', dictionary: PlainObject<string>): Zone[] {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName),
        csv = fs.readFileSync(filePath, 'utf8'),
        contents = csv.split('\n').filter(line => line.length).map(line => line.split('\t')),
        fieldNames = contents[0];

  console.log(`${contents.length - 1} lines was loaded from /${lang}/${fileName}`);

  return contents.slice(1)
      .map(line => {
        const response = new Zone(),
              props = Object.getOwnPropertyNames(response);

        fieldNames.forEach((name, index) => {
          const value = line[index];
          if (!props.includes(name)) {
            response.others[name] = value;
          } else {
            response[name] = value;
            if (['Name', 'Desc'].includes(name)) {
              const dictIdMatch = dictIdRegex.exec(value);
              if (dictIdMatch && dictIdMatch.length > 1) {
                response[name] = dictionary[dictIdMatch[1]];
              }
            }
          }
        })
        return response;
      })
      .filter(zone => zone.MinimapFile !== 'None' && zone.Thumbnail !== 'None');
}