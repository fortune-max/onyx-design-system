import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'onyx-box',
  shadow: false,
})
export class OnyxBox {

  /* Specifies the height of Box container */
  @Prop({reflect: true})
  height = "fit-content";

  /* Specifies the width of Box container */
  @Prop({reflect: true})
  width = "fit-content";

  /* Specifies the background colour of Box container */
  @Prop({reflect: true})
  backgroundColor = "none";

  /* Specifies the margin of Box container */
  @Prop({reflect: true})
  margin = "0px";

  /* Specifies the padding of Box container */
  @Prop({reflect: true})
  padding = "0px";

  /* Specifies the padding of Box container */
  @Prop({reflect: true})
  borderRadius = "0px";

  /* Specifies the border of Box container */
  @Prop({reflect: true})
  border = "0px solid black";

  /* Specify Box container display */
  @Prop({reflect: true})
  display: "flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex" = "flex";

  /* Specify container flow */
  @Prop({reflect: true})
  flexDirection: "row" | "column" = "column";

  /* Specify how items should be aligned in Box container */
  @Prop({reflect: true})
  alignItems: "center" | "flex-start" | "flex-end" | "stretch" | "baseline" = "center";

  /* Specify how content should be aligned in Box container */
  @Prop({reflect: true})
  alignContent: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "stretch" = "center";

  /* Specify how content should be justified in Box container */
  @Prop({reflect: true})
  justifyContent: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly" = "center";

  /* Specify the gap between components in Box container */
  @Prop({reflect: true})
  gap = "0px";

  /* Specify the html tag Box container should use */
  @Prop({reflect: true})
  as = "div";

  render() {
    const Tag = `${this.as}`;

    const boxStyle = css`
      width: ${this.width};
      height: ${this.height};
      margin: ${this.margin};
      padding: ${this.padding};
      border-radius: ${this.borderRadius};
      border: ${this.border};
      display: ${this.display};
      align-items: ${this.alignItems};
      align-content: ${this.alignContent};
      justify-content: ${this.justifyContent};
      background-color: ${this.backgroundColor};
      gap: ${this.gap};
      flex-direction: ${this.flexDirection};
      box-sizing: border-box;
    `;

    return (
      <Tag className={boxStyle}>
        <slot></slot>
      </Tag>
    );
  }

}
