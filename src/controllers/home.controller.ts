import { route, httpGet } from '@roxie/server';

import { dataSource } from '../core';
import { view } from '../shared';
import { Index } from '../views/home.view';
import { ZoneList } from '../views/map.view';
import { NpcList } from '../views/npc.view';

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
  findAllCharacters({ lang }) {
    return view(NpcList, { lang, routePath: 'npcs', data: dataSource[lang].npcs }, 'Characters');
  }
}