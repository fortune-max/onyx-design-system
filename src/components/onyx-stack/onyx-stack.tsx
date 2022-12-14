import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SpacingLarge, SpacingSmall } from '../../design-tokens/js/variables.js';

/**
 * The `<onyx-stack>` component is a layout component providing horizontal and vertical
 * flow capabilities for all its children components and elements.
 * 
 * ### Example
 * ```html
 * <onyx-stack orientation="vertical" gap="small">
 *  <img src="test.png" />
 *  <button>Save</button>
 * </onyx-stack>
 * ```
 */
@Component({
  tag: 'onyx-stack',
  styleUrl: 'onyx-stack.css',
  shadow: false,
  scoped: true,
})
export class OnyxStack {
  /**
   * The `orientation` property sets the direction for the flow,
   * either vertical or horizontal.
   */
  @Prop({ reflect: true })
  orientation: Orientation  = 'vertical';

  /**
   * The `gap` property sets the spacing in between elements, and has no effect
   * in the leading or trailing element.
   */
  @Prop({ reflect: true })
  gap: 'large' | 'small' = 'small';

  stackStyle = css`
    gap: ${ this.gap === 'large' ? SpacingLarge.bottom : SpacingSmall.bottom}px;
    flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
  `;

  render() {
    return (
      <div class={this.stackStyle}>
        <slot></slot>
      </div>
    );
  }
}
