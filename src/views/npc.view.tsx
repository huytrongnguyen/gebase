import React from 'react';

import { Npc } from '../core/npc';
import { Viewport } from '../shared/viewport';
import { Container } from '../shared/container';

export function NpcList(props: { lang: string, routePath: string, data: Npc[] }) {
  return <Viewport lang={props.lang} routePath={props.routePath}>
    <main className="p-3 auto-scroll-y">
      <Container layout="vbox" className="table table-striped table-bordered table-hover mb-0">
        <Container layout="hbox" className="table-header">
          <div className="table-cell" style={{flex:1}}>Portrait</div>
          <div className="table-cell" style={{flex:1}}>Others</div>
        </Container>
        <Container layout="vbox" className="table-body">
          {props.data.map((item, rowIndex) => {
            return <Container layout="hbox" key={rowIndex} className="table-row">
              <div className="table-cell text-center" style={{flex:1}}>
                <img className="img-thumbnail" src={`/resources/ui/BarrackPortrait/${item.Thumbnail}`} />
              </div>
              <div className="table-cell text-wrap text-break" style={{flex:1}}>
                <div><pre>{JSON.stringify(item.others, null, 2)}</pre></div>
              </div>
            </Container>
          })}
        </Container>
      </Container>
    </main>
  </Viewport>
}