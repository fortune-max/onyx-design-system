import { Component, Element, h, Host, Method } from '@stencil/core';

@Component({
  tag: 'onyx-tab-panel',
  shadow: true,
})
export class OnyxTabPanel {
  initialSlotContent;

  @Element()
  el: HTMLElement;

  @Method()
  async toggleSelected(selected: boolean) {
    this.el.innerHTML = selected ? this.initialSlotContent : null;
  }

  componentWillLoad() {
    this.initialSlotContent = this.el.innerHTML;
    this.el.innerHTML = null;
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
