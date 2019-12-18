import { loadCsv, GeEntity } from './common';

const fileName = 'datatable_skill.csv';

export type Skill = GeEntity & {
}

export function loadSkill(lang = 'eu'): Skill[] {
  const replacedByDict = [];
  return loadCsv<Skill>(lang, fileName, replacedByDict);
}