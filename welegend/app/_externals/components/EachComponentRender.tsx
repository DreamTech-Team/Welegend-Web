import React, { ReactNode } from 'react';

interface EachComponentRenderProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
}

export function EachComponentRender<T>({
  render,
  of,
}: EachComponentRenderProps<T>) {
  return (
    <>{React.Children.toArray(of.map((item, index) => render(item, index)))}</>
  );
}
