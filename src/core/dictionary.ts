import fs from 'fs';
import path from 'path';
import iconv from 'iconv-lite';
import xmlParser from 'xml2json';

import { rootDir } from './common';

const fileName = 'dictionary_local.xml';

export type DictionaryRawData = {
  Dictionary: {
    Text: { ClassID: string, Text: string }[]
  }
}

export function loadDictionary(lang = 'eu'): any {
  const filePath = path.resolve(__dirname, rootDir, lang, fileName);
  let contents: DictionaryRawData;
  if (lang === 'jp') {
    const file = fs.readFileSync(filePath);
    const xml = iconv.decode(Buffer.from(file), 'shift_jis');
    contents = JSON.parse(xmlParser.toJson(xml));
  } else {
    const xml = fs.readFileSync(filePath, 'utf8');
    contents = JSON.parse(xmlParser.toJson(xml));
  }

  console.log(`${contents.Dictionary.Text.length} lines was loaded from /${lang}/${fileName}`);

  return contents.Dictionary.Text.reduce((response, current) => {
    response[current.ClassID] = current.Text;
    return response;
  }, {} as any);
}