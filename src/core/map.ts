import { PlainObject } from '@roxie/core';

import { dictIdRegex, loadCsv } from './common';

const fileName = 'datatable_map.csv',
      continentBlacklist = ['WorldCrossColonyWar'],
      zoneTypeBlacklist = ['MISSION', 'PARTYWAR'];

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
  const contents = loadCsv(lang, fileName),
        fieldNames = contents[0];

  return contents.slice(1)
      .map(line => {
        const item = new Zone(),
              props = Object.getOwnPropertyNames(item);

        fieldNames.forEach((name, index) => {
          const value = line[index];
          if (!props.includes(name)) {
            item.others[name] = value;
          } else {
            item[name] = value;
            if (['Name', 'Desc'].includes(name)) {
              const dictIdMatch = dictIdRegex.exec(value);
              if (dictIdMatch && dictIdMatch.length > 1) {
                item[name] = dictionary[dictIdMatch[1]];
              }
            }
          }
        })
        return item;
      })
      .filter(item => item.MinimapFile !== 'None'
          && item.Thumbnail !== 'None'
          && !continentBlacklist.includes(item.Continent)
          && !zoneTypeBlacklist.includes(item.Type));
}