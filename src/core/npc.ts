import { PlainObject } from '@roxie/core';

import { loadCsv } from './common';

const fileName = 'datatable_npclist.csv';

export class Npc {
  ClassID = '';
  ClassName = '';
  Gender = '';
  // Name = '';
  // EngName = '';
  // Type = '';
  // WorldMapName = '';
  // Continent = '';
  // MovableZone = '';
  // Desc = '';
  // MinimapFile = '';
  // Thumbnail = '';
  others = {};
  Thumbnail = '';
}

export function loadNpc(lang = 'eu', dictionary: PlainObject<string>): Npc[] {
  const contents = loadCsv(lang, fileName),
        fieldNames = contents[0];

  return contents.slice(1)
      .map(line => {
        const item = new Npc(),
              props = Object.getOwnPropertyNames(item);

        fieldNames.forEach((name, index) => {
          const value = line[index];
          if (!props.includes(name)) {
            item.others[name] = value;
          } else {
            item[name] = value;
          }
        })

        item.Thumbnail = `${item.ClassName}_${item.Gender === 'Female' ? 'f' : 'm'}_barrack_off.bmp`;
        return item;
      });
}