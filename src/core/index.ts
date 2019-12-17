import path from 'path';
import { PlainObject } from '@roxie/core';
import { readDirectory } from '@roxie/server';

import { rootDir, dictIdRegex } from './common';
import { loadDictionary } from './dictionary';
import { Zone, loadMap } from './map';
import { Npc, loadNpc } from './npc';

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

export async function prepareData() {
  ['eu', 'jp'].forEach(lang => {
    var dt = new DataTable();
    dataSource[lang] = dt;
    dt.dictionary = loadDictionary(lang);
    dt.zones = loadMap(lang, dt.dictionary);
    dt.npcs = loadNpc(lang, dt.dictionary);
  });
}