import { Component, Host, h, Prop } from '@stencil/core';
import radioGroupStore from './onyx-radio-group.store';

/**
 * The single `<onyx-radio />` element must be used as a child node of a `<onyx-radio-group />` element.
 * Please refer to the documentation of the latter for further details.
 * 
 * ### Example
 * ```html
 * <onyx-radio-group name="my-input" selected-value="5">
 *   <onyx-radio name="my-input" value="1">Option 1</onyx-radio>
 *   <onyx-radio name="my-input" value="2">Option 2</onyx-radio>
 * </onyx-radio-group>
 * ```
 */
@Component({
  tag: 'onyx-radio',
  styleUrl: 'onyx-radio.css',
  shadow: false,
  scoped: true,
})
export class OnyxRadio {

  /**
   * The particular value of this radio input item.
   */
  @Prop({ reflect: true })
  value;

  /**
   * The unique name of the radio button group. Must match the `name`
   * attribute of its parent `<onyx-radio-group />`.
   */
  @Prop({ reflect: true })
  name;

  render() {
    return (
      <Host>
        <label>
          <onyx-stack orientation="horizontal">
            <input
              type="radio"
              value={this.value}
              name={this.name}
              checked={this.value === radioGroupStore.radioGroups[this.name].selectedValue}
            />
            <slot />
          </onyx-stack>
        </label>
      </Host>
    );
  }
}
