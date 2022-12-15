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
          <onyx-stack orientation="horizontal">
            <div>
              <input type="checkbox" value={this.value} name={this.name} checked={checkboxGroupStore.checkboxGroups[this.name].selectedValues.includes(this.value)} />
              <div class="checkbox">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.8335 7.2249L9.58043 17.4779L4.1678 12.0653L4.87491 11.3582L9.58043 16.0637L19.1264 6.51779L19.8335 7.2249Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <slot />
          </onyx-stack>
        </label>
      </Host>
    );
  }
}
