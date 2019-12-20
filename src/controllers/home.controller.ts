import { route, httpGet } from '@roxie/server';

import { view } from '../shared';
import { dataSource, Job } from '../core';
import { Index, DataTableList, ZoneList, NpcList, NpcDetail, StanceList } from '../views';

@route()
export class HomeController {
  @httpGet()
  index() {
    return view(Index);
  }

  @httpGet(':lang/datatable')
  findAll({ lang }) {
    return view(DataTableList, { lang, routePath: 'datatable', data: dataSource[lang] }, 'Data Table List');
  }

  @httpGet(':lang/maps')
  findAllZones({ lang }) {
    return view(ZoneList, { lang, routePath: 'maps', data: dataSource[lang].zones }, 'Maps');
  }

  @httpGet(':lang/npcs')
  findAllNpcs({ lang }) {
    return view(NpcList, { lang, routePath: 'npcs', data: dataSource[lang].npcs }, 'Characters');
  }

  @httpGet(':lang/npcs/:name')
  findNpcById({ lang, name }) {
    const data = (<Job[]>dataSource[lang].npcs).find((item) => item.ClassName === name) || {} as Job;
    return view(NpcDetail, { lang, routePath: `npcs/${name}`, data }, data.EngName);
  }

  @httpGet(':lang/stances')
  findAllStances({ lang }) {
    return view(StanceList, { lang, routePath: 'stances', data: dataSource[lang].stances }, 'Stance');
  }
}