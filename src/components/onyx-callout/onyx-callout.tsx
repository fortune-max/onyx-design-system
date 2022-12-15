import { Component, Host, h, Prop } from '@stencil/core';

type ActionType = 'default' | 'success' | 'error' | 'warning';

export interface Action {
  title: string;
  type: ActionType;
}

@Component({
  tag: 'onyx-callout',
  styleUrl: 'onyx-callout.css',
  shadow: false,
  scoped: true,
})
export class OnyxCallout {
  @Prop({ reflect: true }) header: string;

  @Prop({ reflect: true }) action: Action;

  render() {
    return (
      <Host>
        <div class="content">
          <h4>Test</h4>
          <slot></slot>
        </div>
        <div class="action">
          <onyx-button>Action</onyx-button>
        </div>
      </Host>
    );
  }
}
