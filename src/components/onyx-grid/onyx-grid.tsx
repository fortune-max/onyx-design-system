import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'onyx-grid',
  styleUrl: 'onyx-grid.css',
  shadow: false,
  scoped: true,
})
export class OnyxGrid {

  @Prop({ reflect: true })
  columns = 12;

  render() {
    const columnWidth = 100 / this.columns;

    const gridStyle = css`
      > * {
        flex-basis: ${Math.floor(columnWidth)}%;
      }
    `;

    const gridBuffer = css`
      display: block;
      flex-grow: ${100 % this.columns + 1}; 
      flex-basis: ${(columnWidth) * (this.columns - (100 % this.columns))}%;
    `;

    return (
      <div class={`onyx-grid ${gridStyle}`}>
        <slot></slot>
        <span class={gridBuffer}></span>
      </div>
    );
  }

}
