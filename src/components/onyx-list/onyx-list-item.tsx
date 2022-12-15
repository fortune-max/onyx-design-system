import { Component, h } from '@stencil/core';

@Component({
  tag: 'onyx-list-item',
  styleUrl: 'onyx-list-item.css',
  shadow: false,
})
export class OnyxListItem {

  render() {
    return (
      <li role="listitem">
        <slot></slot>
      </li>
    );
  }

}
