import { Component, h } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'onyx-tab-list',
  shadow: false,
})
export class OnyxTabList {
  render() {
    const tabListStyles = css`
      box-shadow: inset 0px -18px 0px -17px #ccc;
    `;

    return (
      <div class={tabListStyles}>
        <onyx-stack orientation="horizontal" gap="small">
          <slot />
        </onyx-stack>
      </div>
    );
  }
}
