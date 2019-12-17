import React, { ReactElement } from 'react';
import { Roxie } from '@roxie/core';

import { Container } from './container';

export function Viewport(props: { lang?: string, routePath?: string, children?: ReactElement }) {
  const { lang = 'eu', routePath = '' } = props;
  return <Container layout="vbox" className="fullscreen">
    <header className="navbar navbar-expand-lg">
      <a href="/" className="navbar-brand">Granado Espada Fan Base</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <nav className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className={Roxie.classNames('nav-item', { active: routePath === 'characters'})}>
            <a href={`/${lang}/npcs`} className="nav-link">Characters</a>
          </li>
          <li className={Roxie.classNames('nav-item', { active: routePath === 'maps'})}>
            <a href={`/${lang}/maps`} className="nav-link">Maps</a>
          </li>
        </ul>
        <div className="form-inline">
          <div className="btn-group" role="group">
            <a href={`/eu/${routePath}`} className={Roxie.classNames('btn btn-default', { active: lang === 'eu'})}>EU</a>
            <a href={`/jp/${routePath}`} className={Roxie.classNames('btn btn-default', { active: lang === 'jp'})}>JP</a>
          </div>
        </div>
      </nav>
    </header>
    <Container layout="fit" className="fullscreen">
      {props.children}
    </Container>
  </Container>
}