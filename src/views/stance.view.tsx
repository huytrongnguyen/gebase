import React from 'react';

import { Stance } from '../core';
import { Viewport } from '../shared';

export function StanceList(props: { lang: string, routePath: string, data: Stance[] }) {
  return <Viewport lang={props.lang} routePath={props.routePath}>
    <main className="p-3 auto-scroll-y">
      {props.data.map(item => {
        return <section className="card mb-3">
          <div className="card-header">{item.Name} ({item.EngName})</div>
          <div className="card-body">
            <article className="row col-12 text-center mb-3">{item.Desc}</article>
            <article className="row col-12 text-center mb-3">{item.ToolTip}</article>
          </div>
        </section>
      })}
    </main>
  </Viewport>
}