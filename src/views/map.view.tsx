import React from 'react';

import { Zone } from '../core/map';
import { Viewport } from '../shared/viewport';
import { Container } from '../shared/container';

export function ZoneList(props: { lang: string, routePath: string, data: Zone[] }) {
  return <Viewport lang={props.lang} routePath={props.routePath}>
    <main className="p-3 auto-scroll-y">
      <Container layout="vbox" className="table table-striped table-bordered table-hover mb-0">
        <Container layout="hbox" className="table-header">
          <div className="table-cell" style={{flex:1}}>Thumbnail</div>
          <div className="table-cell" style={{flex:1}}>Name</div>
          <div className="table-cell" style={{flex:1}}>Type</div>
          <div className="table-cell" style={{flex:1}}>Continent</div>
        </Container>
        <Container layout="vbox" className="table-body">
          {props.data.map((item, rowIndex) => {
            return <Container layout="hbox" key={rowIndex} className="table-row">
              <div className="table-cell text-center" style={{flex:1}}>
                <img className="img-thumbnail" src={`/resources/ui/mapillust/thumbnail/${item.Thumbnail}`} />
              </div>
              <div className="table-cell" style={{flex:1}}>
                {item.Name}
                <div>({item.EngName})</div>
              </div>
              <div className="table-cell" style={{flex:1}}>{item.Type}</div>
              <div className="table-cell" style={{flex:1}}>{item.Continent}</div>
            </Container>
          })}
        </Container>
      </Container>
    </main>
  </Viewport>
}