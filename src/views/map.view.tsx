import React from 'react';

import { Zone } from '../core/map';
import { Viewport } from '../shared/viewport';
import { Container } from '../shared/container';

export function ZoneList(props: { lang: string, routePath: string, zones: Zone[] }) {
  return <Viewport lang={props.lang} routePath={props.routePath}>
    <main className="p-3 auto-scroll-y">
      <Container layout="vbox" className="table table-striped table-bordered table-hover mb-0">
        <Container layout="hbox" className="table-header">
          <div className="table-cell" style={{width:200}}>Thumbnail</div>
          <div className="table-cell" style={{width:200}}>Name</div>
          <div className="table-cell" style={{width:150}}>Type</div>
          <div className="table-cell" style={{flex:1}}>Other</div>
        </Container>
        <Container layout="vbox" className="table-body">
          {props.zones.map((zone, rowIndex) => {
            const fieldNames = ['WorldMapName', 'Continent', 'MovableZone', 'Desc'];
            return <Container layout="hbox" key={rowIndex} className="table-row">
              <div className="table-cell text-center" style={{width:200}}>
                <img className="img-thumbnail" src={`/resources/ui/mapillust/thumbnail/${zone.Thumbnail}`} />
              </div>
              <div className="table-cell" style={{width:200}}>
                {zone.Name}
                <div>({zone.EngName})</div>
              </div>
              <div className="table-cell" style={{width:150}}>{zone.Type}</div>
              <div className="table-cell text-wrap text-break" style={{flex:1}}>
                {fieldNames.map(name => <article className="row" key={name}>
                  <label className="col-4 text-right font-weight-bold">{name}</label>
                  <div className="col-8 text-wrap text-break">{zone[name]}</div>
                </article>)}
                <div><pre>{JSON.stringify(zone.others, null, 2)}</pre></div>
              </div>
            </Container>
          })}
        </Container>
      </Container>
    </main>
  </Viewport>
}