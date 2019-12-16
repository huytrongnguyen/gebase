import React, { HTMLAttributes, ReactElement } from 'react';
import { Roxie } from '@roxie/core';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  layout?: string,
  north?: ReactElement,
  south?: ReactElement,
  west?: ReactElement,
  east?: ReactElement,
  center?: ReactElement,
}

const layoutClass = {
  '': '',
  'hbox': 'd-flex flex-row',
  'vbox': 'd-flex flex-column',
  'column': 'd-flex flex-row column-layout',
  'fit': 'flex-fill fit-layout',
}

export function Container(props: ContainerProps) {
  const { layout = '', north, south, west, east, center, children, className, ...others } = props;

  if (layout === 'border') {
    return <section className={Roxie.classNames('d-flex flex-column fullscreen', className)} {...others}>
      {north}
      <div className="d-flex flex-row flex-fill fullscreen">
        {west}
        <div className="flex-fill fit-layout fullscreen">{center || children}</div>
        {east}
      </div>
      {south}
    </section>
  }

  return <section className={Roxie.classNames(layoutClass[layout], props.className)} {...others}>
    {props.children}
  </section>
}