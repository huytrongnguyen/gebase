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
  NPCType: string,
  JobName: string,
  Lv: string,
  HP: string,
  MHP: string,
}

export type RNpc = GeModel & {
  Gender: string,
  Rank: string,
}

export type Job = GeModel & {
  Gender: string,
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
  ClassType: string,
  AI: string,
  Desc: string,
  ToolTip: string,
  ReqLv: string,
  ReqPromotionLv: string,
  AtkType: string,
  DefType: string,
  MeleeDef: string,
  ShootDef: string,
  MagicDef: string,
  DebuffDef: string,
  BLK: string,
  SkillID1: string,
  SkillID2: string,
  SkillID3: string,
  SkillID4: string,
  SkillID5: string,
  SkillName1: string,
  SkillName2: string,
  SkillName3: string,
  SkillName4: string,
  SkillName5: string,
  FileName: string,
}

export type Skill = GeModel & {
  ClassType: string,
  UseType: string,
  Desc: string,
  TargetDesc: string,
  SpecDesc0: string,
  Buff: string,
  BuffID: string,
  BuffType: string,
  DamageType: string,
  CastTime: string,
  DownTime: string,
  HitTime: string,
  Hits: string,
  SklATK: string,
  SklLv: string,
  SpendHP: string,
  SpendSP: string,
  FileName: string,
}

export type Item = GeModel & {
  ItemType: string,
  ItemClass: string,
  ItemName: string,
  ItemLv: string,
  UseLv: string,
  Tradable: string,
  FesoPrice: string,
  FesoSellPrice: string,
  SellPrice: string,
  AR: string,
  ATK: string,
  BaseATK: string,
  DEF: string,
  BaseDEF: string,
  FileName: string,
}

export class DataTable {
  dictionary: any;
  zones: Zone[];
  npcs: Npc[];
  rnpcs: RNpc[];
  jobs: Job[];
  stances: Stance[];
  skills: Skill[];
  items: Item[];
  weapons: Item[];
  armors: Item[];
}

export class DataSource {
  eu: DataTable;
  jp: DataTable;
}

export const dataSource = new DataSource();