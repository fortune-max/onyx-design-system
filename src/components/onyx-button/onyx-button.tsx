import { Component, h, Prop, Event } from '@stencil/core';

@Component({
  tag: 'onyx-button',
  styleUrl: 'onyx-button.css',
  shadow: false
})
export class OnyxButton {

  @Prop()
  variant: "neutral" | "success" | "error" | "warning" | "disabled" = "neutral";

  @Prop()
  size = "medium";

  @Event({})
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button class={`${this.variant} ${this.size}`} onClick={(e) => this.clickHandler(e)}>
        <slot></slot>
      </button>
    );
  }

}
