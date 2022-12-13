import { Component, Host, h, Prop } from '@stencil/core';
import checkboxGroupStore from './onyx-checkbox-group.store';

/*
The `<onyx-checkbox-group />` Component is a wrapper for `<onyx-checkbox />` child components.
It can render children checkbox elements horizontally or vertically.
The wrapper needs to share a common attribute value `name` with all it's children.

### Example
```html
 * <onyx-checkbox-group name="my-input" selected-value="5">
 *   <onyx-checkbox name="my-input" value="1">Option 1</onyx-checkbox>
 *   <onyx-checkbox name="my-input" value="2">Option 2</onyx-checkbox>
 *   <onyx-checkbox name="my-input" value="3">Option 3</onyx-checkbox>
 *   <onyx-checkbox name="my-input" value="4">Option 4</onyx-checkbox>
 *   <onyx-checkbox name="my-input" value="5">Option 5</onyx-checkbox>
 * </onyx-checkbox-group>

*/

@Component({
  tag: 'onyx-checkbox-group',
  styleUrl: 'onyx-checkbox-group.css',
  shadow: false,
  scoped: true,
})
export class OnyxCheckboxGroup {
  /**
   * Determines if the check boxes will display stacked vertically or horizontally.
   * See {@link Orientation}
   */
  @Prop({ reflect: true })
  orientation: Orientation = 'vertical';

  /**
   * Default selected value, which will check the matching checkbox element(s).
   */
  @Prop({ reflect: true })
  selectedValues;

  /**
   * Unique name to group these options under. Child check boxes must
   * feature the same `name` attribute value.
   */
  @Prop({ reflect: true })
  name;

  componentWillLoad() {
    checkboxGroupStore.checkboxGroups[this.name] = {
      selectedValues: this.selectedValues,
    }
  }

  disconnectedCallback() {
    delete checkboxGroupStore.checkboxGroups[this.name];
  }

  render() {
    return (
      <Host>
        <hs-stack orientation={this.orientation}>
          <slot></slot>
        </hs-stack>
      </Host>
    );
  }

}
