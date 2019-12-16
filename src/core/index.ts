import { PlainObject } from '@roxie/core';

import { loadDictionary } from './dictionary';
import { Zone, loadMap } from './map';

export type Npc = {
  [key: string]: string,
}

export type Item = {
  [key: string]: string,
}

export class DataTable {
  dictionary: PlainObject<string>;
  zones: Zone[];
  npcs?: Npc[];
  items?: Item[];
}

export class DataSource {
  eu: DataTable;
  jp: DataTable;
}

export const dataSource = new DataSource();

export function prepareData() {
  ['eu', 'jp'].forEach(lang => {
    var dt = new DataTable();
    dt.dictionary = loadDictionary(lang);
    dt.zones = loadMap(lang);
    dataSource[lang] = dt;
  });
}