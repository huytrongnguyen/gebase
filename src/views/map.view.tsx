import React from 'react';

import { Zone } from '../core/map';
import { Viewport } from '../shared/viewport';
import { Container } from '../shared/container';

export function ZoneList(props: { zones: Zone[] }) {
  const { zones } = props;
  console.log(`Load ${zones.length} zones`);
  return <Viewport>
    <main className="p-3 auto-scroll-y">
      <Container layout="vbox" className="table table-striped table-bordered table-hover mb-0">
        <Container layout="hbox" className="table-header">
        <div className="table-cell" style={{flex:1}}>Map</div>
          <div className="table-cell" style={{flex:1}}>Other</div>
        </Container>
        <Container layout="vbox" className="table-body">
          {zones.map((zone, rowIndex) => {
            const fieldNames = Object.getOwnPropertyNames(zone).filter(fieldName => fieldName !== 'others');
            return <Container layout="hbox" key={rowIndex} className="table-row">
              <div className="table-cell" style={{flex:1}}>
                {fieldNames.map(name => <article className="row">
                  <label className="col-4 text-right font-weight-bold">{name}</label>
                  <div className="col-8">{zone[name]}</div>
                </article>)}
              </div>
              <div className="table-cell" style={{flex:1}}><pre>{JSON.stringify(zone.others, null, 2)}</pre></div>
            </Container>
          })}
        </Container>
      </Container>
    </main>
  </Viewport>
}