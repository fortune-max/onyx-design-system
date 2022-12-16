import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'onyx-tab-panels',
  shadow: true,
})
export class OnyxTabPanels {
  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
