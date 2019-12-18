import { loadCsv, GeEntity } from './common';

const fileName = 'datatable_map.csv',
      continentBlacklist = ['WorldCrossColonyWar'],
      zoneTypeBlacklist = ['MISSION', 'PARTYWAR'];

export type Zone = GeEntity & {
  Type: string,
  WorldMapName: string,
  Continent: string,
  MovableZone: string,
  Desc: string,
  MinimapFile: string,
  Thumbnail: string,
}

export function loadMap(lang = 'eu'): Zone[] {
  return loadCsv<Zone>(lang, fileName, ['Name', 'Desc'])
      .filter(item => item.MinimapFile !== 'None'
                      && item.Thumbnail !== 'None'
                      && !continentBlacklist.includes(item.Continent)
                      && !zoneTypeBlacklist.includes(item.Type));
}