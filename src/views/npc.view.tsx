import React from 'react';
import { Roxie } from '@roxie/core';

import { Npc } from '../core';
import { Viewport } from '../shared';

export function NpcList(props: { lang: string, routePath: string, data: Npc[] }) {
  return <Viewport lang={props.lang} routePath={props.routePath}>
    <main className="p-3 auto-scroll-y">
      <section className="container-fluid">
        <div className="row border-left border-top">
          {props.data.map(item => {
            const fileName = `${item.ClassName}_${item.Gender === 'Male' ? 'm' : 'f'}_barrack_off.bmp`;
            return <article className="col-12 col-md-3 text-center p-3 border-right border-bottom">
              <a href={`/${props.lang}/npcs/${item.ClassName}`}>
                <img className="img-thumbnail" src={`/resources/ui/BarrackPortrait/${fileName}`} />
                <div>{item.Name}</div>
                <div>({item.EngName})</div>
              </a>
            </article>
          })}
        </div>
      </section>
    </main>
  </Viewport>
}

const stats = ['STR', 'AGI', 'CON', 'DEX', 'INT', 'CHA'];

export function NpcDetail(props: { lang: string, routePath: string, data: Npc }) {
  const { lang, routePath, data } = props,
        fileName = `${data.ClassName}_${data.Gender === 'Male' ? 'm' : 'f'}_barrack_off.bmp`;
  return <Viewport lang={lang} routePath={routePath}>
    <main className="p-3 auto-scroll-y">
      <section className="card mb-3">
        <div className="card-header">{data.Name} ({data.EngName})</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <article className="row col-12 justify-content-center mb-3">
                <img className="img-thumbnail" src={`/resources/ui/BarrackPortrait/${fileName}`} />
              </article>
              <article className="row col-12 text-center mb-3">{data.JobDesc}</article>
              <article className="row">
                <label className="col-6 text-right font-weight-bold">Job Skill</label>
                <div className="col-6">{data.JobSklName}</div>
              </article>
              <article className="row">
                <label className="col-6 text-right font-weight-bold">Initial Level</label>
                <div className="col-6">{data.initLv}</div>
              </article>
              <article className="row">
                <label className="col-6 text-right font-weight-bold">Character Buff</label>
                <div className="col-6">{data.CharacterBuff} Lv. {data.CharacterBuffLv}</div>
              </article>
            </div>
            <div className="col-6">
              {stats.map(stat => <article className="row" key={stat}>
                <label className="col-6 text-right font-weight-bold">{stat}</label>
                <div className="col-6">{data[stat]}</div>
              </article>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  </Viewport>
}