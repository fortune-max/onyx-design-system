import { Component, Host, h, Prop } from '@stencil/core';
import checkboxGroupStore from './onyx-checkbox-group.store';

/**
 * The single `<onyx-checkbox />` element must be used as a child node of a `<onyx-checkbox-group />` element.
 * Please refer to the documentation of the latter for further details.
 * 
 * ### Example
 * ```html
 * <onyx-checkbox-group name="my-input" selected-values="[1, 2]">
 *   <onyx-checkbox name="my-input" value="1">Option 1</onyx-checkbox>
 *   <onyx-checkbox name="my-input" value="2">Option 2</onyx-checkbox>
 * </onyx-checkbox-group>
 * ```
 */
@Component({
  tag: 'onyx-checkbox',
  styleUrl: 'onyx-checkbox.css',
  shadow: false,
  scoped: true,
})
export class OnyxCheckbox {

  /**
   * The particular value of this checkbox item.
   */
  @Prop({ reflect: true })
  value;

  /**
   * The unique name of the checkbox group. Must match the `name`
   * attribute of its parent `<onyx-checkbox-group />`.
   */
  @Prop({ reflect: true })
  name;

  render() {
    return (
      <Host>
        <label>
          <hs-stack orientation="horizontal">
            <input
              type="checkbox"
              value={this.value}
              name={this.name}
              // checked={checkboxGroupStore.checkboxGroups[this.name].selectedValues.inlcudes(this.value)}
              checked={checkboxGroupStore.checkboxGroups[this.name].selectedValues.includes(this.value)}
            />
            <slot />
          </hs-stack>
        </label>
      </Host>
    );
  }
}
