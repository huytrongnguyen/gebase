import React from 'react';

import { Container } from './container';

export function Viewport(props: any) {
  return <Container layout="vbox" className="fullscreen">
    <header className="navbar navbar-expand-lg">
      <a href="/" className="navbar-brand">Granado Espada Fan Base</a>
    </header>
    <Container layout="fit" className="fullscreen">
      {props.children}
    </Container>
  </Container>
}