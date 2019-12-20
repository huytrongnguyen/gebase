export type GeModel = {
  ClassID: string,
  ClassName: string,
  Name: string,
  EngName: string,
}

export type Zone = GeModel & {
  Type: string,
  WorldMapName: string,
  Continent: string,
  MovableZone: string,
  Desc: string,
  MinimapFile: string,
  Thumbnail: string,
}

export type Npc = GeModel & {
  Gender: string,
  Size: string,
  Category: string,
  IconClass: string,
  Create: string,
  JobDesc: string,
  STR: string,
  AGI: string,
  CON: string,
  DEX: string,
  INT: string,
  CHA: string,
  initLv: string,
  CharacterBuff: string,
  CharacterBuffLv: string,
  JobSkill: string,
  JobSklName: string,
  HitOffset: string,
  Value: string,
  UniqueHit: string,
  DefaultStance: string,
  VeteranStance: string,
  ExpertStance: string,
  EqpEarSet: string,
  EqpNeckSet: string,
  EqpArmorSet: string,
  EqpWeaponSet: string,
  EqpBeltSet: string,
  EqpGloveSet: string,
  EqpBootsSet: string,
  EqpRingSet: string,
  EqpArtifactSet: string,
  EqpAchieveSet: string,
  EqpHeadSet: string,
  EqpFaceSet: string,
  EqpCostumeSet: string,
  EqpShoulderSet: string,
  EqpBreastSet: string,
  EqpBackSet: string,
  EqpAssistSet: string,
}

export type Stance = GeModel & {
  Desc: string,
  ToolTip: string,
  SkillID1: string,
}

export type Skill = GeModel & {}

export type Item = GeModel & {}

export class DataTable {
  dictionary: any;
  zones: Zone[];
  npcs?: Npc[];
  stances: Stance[];
  skills: Skill[];
  items?: Item[];
}

export class DataSource {
  eu: DataTable;
  jp: DataTable;
}

export const dataSource = new DataSource();