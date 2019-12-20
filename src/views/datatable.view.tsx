import React, { PropsWithChildren } from 'react';

import { DataTable, GeModel, Zone, Npc, Stance, Skill } from '../core';
import { Viewport, RowValue } from '../shared';

export function DataTableList(props: { lang: string, routePath: string, data: DataTable }) {
  const { lang, routePath, data } = props;
  return <Viewport lang={lang} routePath={routePath}>
    <main className="p-3 auto-scroll-y">
      <section className="container-fluid">
        <div className="card card-body mb-3">
          <div className="row">
            <ZoneValue data={data.zones[Math.floor(Math.random() * data.zones.length)]} />
            <NpcValue data={data.npcs[Math.floor(Math.random() * data.npcs.length)]} />
            <StanceValue data={data.stances[Math.floor(Math.random() * data.stances.length)]} />
            <SkillValue data={data.skills[Math.floor(Math.random() * data.skills.length)]} />
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

function DataTableValue(props: PropsWithChildren<{ header: string, data: GeModel}>) {
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

function ZoneValue(props: { data: Zone}) {
  const { data } = props;
  return <DataTableValue header="Zone" data={data}>
    <RowValue label="Type" value={data.Type} />
    <RowValue label="WorldMapName" value={data.WorldMapName} />
    <RowValue label="Continent" value={data.Continent} />
    <RowValue label="MovableZone" value={data.MovableZone} />
    <RowValue label="Desc" value={data.Desc} />
    <RowValue label="MinimapFile" value={data.MinimapFile} />
    <RowValue label="Thumbnail" value={data.Thumbnail} />
  </DataTableValue>
}

function NpcValue(props: { data: Npc}) {
  const { data } = props;
  return <DataTableValue header="NPC" data={data}>
    <RowValue label="Gender" value={data.Gender} />
    <RowValue label="Size" value={data.Size} />
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
    <RowValue label="Job" value={data.JobSklName} />
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
  </DataTableValue>
}

function StanceValue(props: { data: Stance}) {
  const { data } = props;
  return <DataTableValue header="Stance" data={data}>
  </DataTableValue>
}

function SkillValue(props: { data: Skill}) {
  const { data } = props;
  return <DataTableValue header="Skill" data={data}>
  </DataTableValue>
}