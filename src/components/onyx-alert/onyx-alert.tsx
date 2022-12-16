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
          <div class={`content`}>
            <div class="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM11 16H13V18H11V16ZM12 6C12.5523 6 13 6.44772 13 7V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V7C11 6.44772 11.4477 6 12 6Z"
                  fill="black"
                />
              </svg>
            </div>
            <span>{this.content}</span>
          </div>
        </div>
      </Host>
    );
  }
}
