import { loadCsv, GeEntity } from './common';

const fileName = 'datatable_job.csv';

export type Npc = GeEntity & {
  Gender: string,
  AGI: string,
  CHA: string,
  CON: string,
  DEX: string,
  INT: string,
  STR: string,
  JobDesc: string,
  JobSkill: string,
  JobSklName: string,
  Create: string,
  initLv: string,
  CharacterBuff: string,
  CharacterBuffLv: string,
  DefaultStance: string,
  VeteranStance: string,
  ExpertStance: string,
}

export function loadNpc(lang = 'eu'): Npc[] {
  return loadCsv<Npc>(lang, fileName, ['Name', 'JobDesc']);
}