import path from 'path';
import { PlainObject } from '@roxie/core';
import { readDirectory } from '@roxie/server';

import { rootDir } from './common';
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
  mapillust: string[];
}

export const dataSource = new DataSource();

export async function prepareData() {
  ['eu', 'jp'].forEach(lang => {
    var dt = new DataTable();
    dataSource[lang] = dt;
    dt.dictionary = loadDictionary(lang);
    dt.zones = loadMap(lang, dt.dictionary);
  });
  dataSource.mapillust = readDirectory(path.resolve(__dirname, rootDir, 'ui/mapillust/thumbnail'));
}