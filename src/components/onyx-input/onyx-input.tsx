import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onyx-input',
  styleUrl: 'onyx-input.css',
  shadow: false,
  scoped: true,
})
export class OnyxInput {
  @Prop({ reflect: true }) placeholder: string;

  @Prop({ reflect: true }) value: string;

  @Prop({ reflect: true }) label: string;

  @Prop({ reflect: true }) readonly: boolean;

  @Prop({ reflect: true }) disabled: boolean;

  @Prop({ reflect: true }) hasError: boolean;

  @Prop({ reflect: true }) name: string;

  @Prop({ reflect: true }) hint: string;

  render() {
    return (
      <Host>
        <div class={'onyx-input ' + (this.hasError && 'error') || ''}>
          <label htmlFor={this.name}>{this.label}</label>
          <input id={this.name} type="text" placeholder={this.placeholder} readOnly={this.readonly} value={this.value} disabled={this.disabled} />
          {this.hint && <p class="hint">{this.hint}</p>}
        </div>
      </Host>
    );
  }
}
