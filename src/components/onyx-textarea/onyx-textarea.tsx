import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onyx-textarea',
  styleUrl: 'onyx-textarea.css',
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

  @Prop({ reflect: true })
  maxChars: number = 50;

  charsCount: number = 0;

  componentDidMount() {
    document.querySelector('textarea').addEventListener('change', (evt: any) => {
      console.log(evt.target.value);
      this.charsCount = evt.target.value.length;
    });
  }

  render() {
    return (
      <Host>
        <div class={'onyx-input ' + (this.hasError && 'error') || ''} style={{ width: '300px' }}>
          <label htmlFor={this.name}>{this.label}</label>
          <textarea id={this.name} placeholder={this.placeholder} readOnly={this.readonly} value={this.value} disabled={this.disabled}></textarea>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>{this.hint && <p class="hint">{this.hint}</p>}</div>
            {/* <p class="hint">
              {this.charsCount}/{this.maxChars}
            </p> */}
          </div>
        </div>
      </Host>
    );
  }
}
