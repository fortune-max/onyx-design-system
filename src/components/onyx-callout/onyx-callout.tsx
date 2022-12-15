import { Component, Host, h, Prop } from '@stencil/core';

type ActionType = 'neutral' | 'success' | 'error' | 'warning';

export interface Action {
  title: string;
  type?: ActionType;
  onClick?: () => void;
}

@Component({
  tag: 'onyx-callout',
  styleUrl: 'onyx-callout.css',
  shadow: false,
  scoped: true,
})
export class OnyxCallout {
  @Prop({ reflect: true }) header: string;

  @Prop({ reflect: true }) type: 'neutral' | 'success' | 'error' | 'warning' = 'neutral';

  @Prop() actionType: string;

  @Prop() actionTitle: string = 'default';

  render() {
    return (
      <Host>
        <div class={`container ${this.type}`}>
          <div class={`content `}>
            <h4>{this.header}</h4>

            <slot></slot>
          </div>
          <div class="action">
            <onyx-button variant={this.type}>{this.actionTitle}</onyx-button>
          </div>
        </div>
      </Host>
    );
  }
}
