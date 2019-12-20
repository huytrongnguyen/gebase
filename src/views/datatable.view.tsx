import React, { PropsWithChildren } from 'react';

import { DataTable, GeModel, Zone, Npc, RNpc, Job, Stance, Skill, Item } from '../core';
import { Viewport, RowValue } from '../shared';

export function DataTableList(props: { lang: string, routePath: string, data: DataTable }) {
  const { lang, routePath, data } = props;
  return <Viewport lang={lang} routePath={routePath}>
    <main className="p-3 auto-scroll-y">
      <section className="container-fluid">
        <div className="card card-body mb-3">
          <div className="row">
            <ZoneValue data={data.zones} />
            <NpcValue data={data.npcs} />
            <RNpcValue data={data.rnpcs} />
            <JobValue data={data.jobs} />
            <StanceValue data={data.stances} />
            <SkillValue data={data.skills} />
            <ItemValue header="Weapon" data={data.weapons} />
            <ItemValue header="Armor" data={data.armors} />
          </div>
        </div>
        <div className="row">
          {Object.getOwnPropertyNames(data).filter(name => name !== 'dictionary').map(name => {
            return <article className="col-4" key={name}>
              <div className="card mb-3">
                <div className="card-header">{name} ({data[name].length} items)</div>
                <div className="card-body"><pre>{JSON.stringify(data[name][0], null, 2)}</pre></div>
              </div>
            </article>
          })}
        </div>
      </section>

    </main>
  </Viewport>
}

function DataTableValue(props: PropsWithChildren<{ header: string, data: GeModel }>) {
  const { data } = props;
  return <section className="col-4">
    <div className="card mb-3">
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        <RowValue label="ClassID" value={data.ClassID} />
        <RowValue label="ClassName" value={data.ClassName} />
        <RowValue label="Name" value={data.Name} />
        <RowValue label="EngName" value={data.EngName} />
        {props.children}
      </div>
    </div>
  </section>
}

function ZoneValue(props: { data: Zone[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        types = Object.keys(props.data.groupBy("Type")).join(','),
        continents = Object.keys(props.data.groupBy("Continent")).join(',');

  return <DataTableValue header="Zone" data={data}>
    <RowValue label="Type" value={data.Type} />
    <RowValue label="WorldMapName" value={data.WorldMapName} />
    <RowValue label="Continent" value={data.Continent} />
    <RowValue label="MovableZone" value={data.MovableZone} />
    <RowValue label="Desc" value={data.Desc} />
    <RowValue label="MinimapFile" value={data.MinimapFile} />
    <RowValue label="Thumbnail" value={data.Thumbnail} />
    <div className="mt-3">Type: {types}</div>
    <div className="mt-3">Continent: {continents}</div>
  </DataTableValue>
}

function NpcValue(props: { data: Npc[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)];

  return <DataTableValue header="NPC" data={data}>
    <RowValue label="Lv" value={data.Lv} />
    <RowValue label="HP" value={data.HP} />
    <RowValue label="MHP" value={data.MHP} />
  </DataTableValue>
}

function RNpcValue(props: { data: RNpc[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        genders = Object.keys(props.data.groupBy("Gender")).join(','),
        ranks = Object.keys(props.data.groupBy("Rank")).join(',');

  return <DataTableValue header="RNPC" data={data}>
    <RowValue label="Gender" value={data.Gender} />
    <RowValue label="Rank" value={data.Rank} />
    <div className="mt-3">Gender: {genders}</div>
    <div className="mt-3">Rank: {ranks}</div>
  </DataTableValue>
}

function JobValue(props: { data: Job[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        genders = Object.keys(props.data.groupBy("Gender")).join(','),
        categories = Object.keys(props.data.groupBy("Category")).join(','),
        creates = Object.keys(props.data.groupBy("Create")).join(',');

  return <DataTableValue header="Job" data={data}>
    <RowValue label="Gender" value={data.Gender} />
    <RowValue label="Category" value={data.Category} />
    <RowValue label="Class" value={data.IconClass} />
    <RowValue label="Create" value={data.Create} />
    <RowValue label="Desc" value={data.JobDesc} />
    <RowValue label="STR" value={data.STR} />
    <RowValue label="AGI" value={data.AGI} />
    <RowValue label="CON" value={data.CON} />
    <RowValue label="DEX" value={data.DEX} />
    <RowValue label="INT" value={data.INT} />
    <RowValue label="SEN" value={data.CHA} />
    <RowValue label="Initial Lv." value={data.initLv} />
    <RowValue label="Character Buff" value={`${data.CharacterBuff} Lv.${data.CharacterBuffLv}`} />
    <RowValue label="Job" value={`${data.JobSkill} ${data.JobSklName}`} />
    <RowValue label="Hit" value={data.HitOffset} />
    <RowValue label="Value" value={data.Value} />
    <RowValue label="Default Stance" value={data.DefaultStance} />
    <RowValue label="Veteran Stance" value={data.VeteranStance} />
    <RowValue label="Expert Stance" value={data.ExpertStance} />
    <RowValue label="Weapon" value={data.EqpWeaponSet} />
    <RowValue label="Armor" value={data.EqpArmorSet} />
    <RowValue label="Achieve" value={data.EqpAchieveSet} />
    <RowValue label="Gloves" value={data.EqpGloveSet} />
    <RowValue label="Boots" value={data.EqpBootsSet} />
    <RowValue label="Ring" value={data.EqpRingSet} />
    <RowValue label="Belt" value={data.EqpBeltSet} />
    <RowValue label="Necklace" value={data.EqpNeckSet} />
    <RowValue label="Earrings" value={data.EqpEarSet} />
    <RowValue label="Artifact" value={data.EqpArtifactSet} />
    <RowValue label="Costume" value={data.EqpCostumeSet} />
    <RowValue label="Back" value={data.EqpBackSet} />
    <RowValue label="Head" value={data.EqpHeadSet} />
    <RowValue label="Face" value={data.EqpFaceSet} />
    <RowValue label="Shoulder" value={data.EqpShoulderSet} />
    <RowValue label="Breast" value={data.EqpBreastSet} />
    <RowValue label="Assist" value={data.EqpAssistSet} />
    <div className="mt-3">Gender: {genders}</div>
    <div className="mt-3">Category: {categories}</div>
    <div className="mt-3">Create: {creates}</div>
  </DataTableValue>
}

function StanceValue(props: { data: Stance[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        type = Object.keys(props.data.groupBy("ClassType")).join(','),
        ai = Object.keys(props.data.groupBy("AI")).join(','),
        atktype = Object.keys(props.data.groupBy("AtkType")).join(','),
        deftype = Object.keys(props.data.groupBy("DefType")).join(',');

  return <DataTableValue header="Stance" data={data}>
    <RowValue label="ClassType" value={data.ClassType} />
    <RowValue label="AI" value={data.AI} />
    <RowValue label="Desc" value={data.Desc} />
    <RowValue label="ToolTip" value={data.ToolTip} />
    <RowValue label="ReqLv" value={data.ReqLv} />
    <RowValue label="ReqPromotionLv" value={data.ReqPromotionLv} />
    <RowValue label="AtkType" value={data.AtkType} />
    <RowValue label="DefType" value={data.DefType} />
    <RowValue label="MeleeDef" value={data.MeleeDef} />
    <RowValue label="ShootDef" value={data.ShootDef} />
    <RowValue label="MagicDef" value={data.MagicDef} />
    <RowValue label="DebuffDef" value={data.DebuffDef} />
    <RowValue label="FileName" value={data.FileName} />
    <div className="mt-3">Type: {type}</div>
    <div className="mt-3">AI: {ai}</div>
    <div className="mt-3">Atk Type: {atktype}</div>
    <div className="mt-3">Def Type: {deftype}</div>
  </DataTableValue>
}

function SkillValue(props: { data: Skill[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        type = Object.keys(props.data.groupBy("ClassType")).join(','),
        usetype = Object.keys(props.data.groupBy("UseType")).join(',');

  return <DataTableValue header="Skill" data={data}>
    <RowValue label="ClassType" value={data.ClassType} />
    <RowValue label="UseType" value={data.UseType} />
    <RowValue label="Desc" value={data.Desc} />
    <RowValue label="TargetDesc" value={data.TargetDesc} />
    <RowValue label="SpecDesc0" value={data.SpecDesc0} />
    <RowValue label="SklLv" value={data.SklLv} />
    <RowValue label="SpendSP" value={data.SpendSP} />
    <RowValue label="FileName" value={data.FileName} />
    <div className="mt-3">Type: {type}</div>
    <div className="mt-3">Use Type: {usetype}</div>
  </DataTableValue>
}

function ItemValue(props: { header: string, data: Item[] }) {
  const data = props.data[Math.floor(Math.random() * props.data.length)],
        type = Object.keys(props.data.groupBy("ItemType")).join(','),
        clazz = Object.keys(props.data.groupBy("ItemClass")).join(',');

  return <DataTableValue header={props.header} data={data}>
    <RowValue label="ItemType" value={data.ItemType} />
    <RowValue label="ItemClass" value={data.ItemClass} />
    <RowValue label="ItemName" value={data.ItemName} />
    <RowValue label="ItemLv" value={data.ItemLv} />
    <RowValue label="UseLv" value={data.UseLv} />
    <RowValue label="Tradable" value={data.Tradable} />
    <RowValue label="SellPrice" value={data.SellPrice} />
    <RowValue label="FesoSellPrice" value={data.FesoSellPrice} />
    <RowValue label="FesoPrice" value={data.FesoPrice} />
    <RowValue label="FileName" value={data.FileName} />
    <div className="mt-3">Type: {type}</div>
    <div className="mt-3">Class: {clazz}</div>
  </DataTableValue>
}