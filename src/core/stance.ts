import { loadCsv, GeEntity } from './common';

const fileName = 'datatable_stance.csv';

export type Stance = GeEntity & {
  Desc: string,
  ToolTip: string,
  SkillID1: string,
}

export function loadStance(lang = 'eu'): Stance[] {
  const replacedByDict = [
    'Name', 'Desc', 'ToolTip',
    'SkillName1', 'SkillName2', 'SkillName3', 'SkillName4', 'SkillName5',
  ];
  return loadCsv<Stance>(lang, fileName, replacedByDict)
      .filter(item => item.SkillID1 !== '0');
}