import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onyx-alert',
  styleUrl: 'onyx-alert.css',
  shadow: true,
})
export class OnyxAlert {
  @Prop({ reflect: true }) content: string;

  @Prop({ reflect: true }) type: 'neutral' | 'success' | 'error' | 'warning' = 'neutral';

  render() {
    return (
      <Host>
        <div class={`container ${this.type}`}>
          <div class={`content `}>
            <span>{this.content}</span>
          </div>
        </div>
      </Host>
    );
  }
}
