import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';

const layout = fs.readFileSync('./dist/wwwroot/layout.html', 'utf8');

export function view(Comp: (props?: any) => JSX.Element, model?: any, title?: string) {
  return layout.replace('@Title', `${title ? `${title} - ` : ''}GE Fan Base`).replace('@RenderBody()', renderToString(<Comp {...model} />));
}