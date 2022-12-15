import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'onyx-list',
  styleUrl: 'onyx-list.css',
  shadow: false,
})
export class OnyxList {

  /* This sets whether the list should be rendered as an OrderedList or UnorderedList */
  @Prop({ reflect: true })
  as: "ol" | "ul" = "ol";

  render() {
    /* Create the html tag to be used based on selected as Prop*/
    const Tag = this.as;

    return (
      <Host>
        <Tag role="list">
          <slot></slot>
        </Tag>
      </Host>
    );
  }

}
