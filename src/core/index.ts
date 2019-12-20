import { dataSource, DataTable, Zone, Npc, Stance, Skill } from './ge.model';
import { loadDictionary } from './dictionary';
import { loadCsvAsync } from './datatable';

export async function prepareData() {
  await Promise.all(['eu', 'jp'].map(async lang => {
    var dt = new DataTable();
    dataSource[lang] = dt;
    dt.dictionary = loadDictionary(lang);
    dt.zones = await loadCsvAsync<Zone>(lang, 'datatable_map.csv', ['Name', 'Desc', 'Note']);
    dt.npcs = await loadCsvAsync<Npc>(lang, 'datatable_job.csv', ['Name', 'JobDesc']);
    dt.stances = await loadCsvAsync<Stance>(lang, 'datatable_stance.csv', [
      'Name', 'Desc', 'ToolTip',
      'SkillName1', 'SkillName2', 'SkillName3', 'SkillName4', 'SkillName5',
    ]);
    dt.skills = await loadCsvAsync<Skill>(lang, 'datatable_skill.csv', ['Name', 'Desc']);
    return lang;
  }));
}

export * from './ge.model';