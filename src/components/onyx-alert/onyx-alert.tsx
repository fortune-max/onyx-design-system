import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'onyx-alert',
  styleUrl: 'onyx-alert.css',
  shadow: true,
})
export class OnyxAlert {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
