import { Component, h } from '@stencil/core';

@Component({
  tag: 'onyx-grid-column',
  styleUrl: 'onyx-grid.css',
  shadow: false,
  scoped: false,
})
export class OnyxGridColumn {

  render() {
    return (
      <div class="onyx-grid-column">
        <slot></slot>
      </div>
    );
  }

}