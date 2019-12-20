import { dataSource, DataTable, Zone, Npc, RNpc, Job, Stance, Skill, Item } from './ge.model';
import { loadDictionary } from './dictionary';
import { loadCsvAsync } from './datatable';

export async function prepareData() {
  const itemFieldReplacedByDict = ['ItemClass', 'ItemName'];
  await Promise.all(['eu', 'jp'].map(async lang => {
    const dt = new DataTable();
    dataSource[lang] = dt;
    dt.dictionary = loadDictionary(lang);
    dt.zones = await loadCsvAsync<Zone>(lang, 'datatable_map.csv', ['Name', 'Desc', 'Note']);
    dt.npcs = await loadCsvAsync<Npc>(lang, 'datatable_npc.csv', ['Name', 'JobName']);
    dt.rnpcs = await loadCsvAsync<RNpc>(lang, 'datatable_npclist.csv');
    dt.jobs = await loadCsvAsync<Job>(lang, 'datatable_job.csv', ['Name', 'JobDesc']);
    dt.stances = await loadCsvAsync<Stance>(lang, 'datatable_stance.csv', [
      'Name', 'Desc', 'ToolTip',
      'SkillName1', 'SkillName2', 'SkillName3', 'SkillName4', 'SkillName5',
    ]);
    dt.skills = await loadCsvAsync<Skill>(lang, 'datatable_skill.csv', ['Name', 'Desc', 'TargetDesc', 'SpecDesc0']);
    dt.weapons = await loadCsvAsync<Item>(lang, 'datatable_item_weapon.csv', itemFieldReplacedByDict);
    dt.armors = await loadCsvAsync<Item>(lang, 'datatable_item_armor.csv', itemFieldReplacedByDict);
    return lang;
  }));
}

export * from './ge.model';