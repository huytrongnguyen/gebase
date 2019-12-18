import { DataTable, dataSource } from './common';
import { loadDictionary } from './dictionary';
import { loadMap } from './map';
import { loadNpc } from './npc';
import { loadStance } from './stance';

export async function prepareData() {
  ['eu', 'jp'].forEach(lang => {
    var dt = new DataTable();
    dataSource[lang] = dt;
    dt.dictionary = loadDictionary(lang);
    dt.zones = loadMap(lang);
    dt.npcs = loadNpc(lang);
    dt.stances = loadStance(lang);
  });
}

export { dataSource } from './common';
export { Zone } from './map';
export { Npc } from './npc';
export { Stance } from './stance';
