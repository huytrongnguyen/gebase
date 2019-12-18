import { route, httpGet } from '@roxie/server';

import { view } from '../shared';
import { dataSource, Npc } from '../core';
import { Index, ZoneList, NpcList, NpcDetail, StanceList } from '../views';

@route()
export class HomeController {
  @httpGet()
  index() {
    return view(Index);
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
    const data = (<Npc[]>dataSource[lang].npcs).find((item) => item.ClassName === name) || {} as Npc;
    return view(NpcDetail, { lang, routePath: `npcs/${name}`, data }, data.EngName);
  }

  @httpGet(':lang/stances')
  findAllStances({ lang }) {
    return view(StanceList, { lang, routePath: 'stances', data: dataSource[lang].stances }, 'Stance');
  }
}