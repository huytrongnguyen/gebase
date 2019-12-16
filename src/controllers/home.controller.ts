import { route, httpGet } from '@roxie/server';

import { dataSource } from '../core';
import { view } from '../shared';
import { Index } from '../views/home.view';
import { ZoneList } from '../views/map.view';

@route()
export class HomeController {
  @httpGet()
  index() {
    return view(Index);
  }

  @httpGet(':lang/maps')
  findAllZones({ lang }) {
    return view(ZoneList, { zones: dataSource[lang].zones }, 'Maps');
  }
}