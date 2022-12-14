import { Component, Host, h, Prop } from '@stencil/core';
import radioGroupStore from './onyx-radio-group.store';

/**
 * The `<onyx-radio-group />` component is a wrapper for `<onyx-radio />` child components
 * and can be rendered on either horizontal or vertical layouts. The component needs to
 * be annotated with a `name` attribute that has to be replicated in all its children.
 * 
 * ### Example
 * ```html
 * <onyx-radio-group name="my-input" selected-value="5">
 *   <onyx-radio name="my-input" value="1">Option 1</onyx-radio>
 *   <onyx-radio name="my-input" value="2">Option 2</onyx-radio>
 *   <onyx-radio name="my-input" value="3">Option 3</onyx-radio>
 *   <onyx-radio name="my-input" value="4">Option 4</onyx-radio>
 *   <onyx-radio name="my-input" value="5">Option 5</onyx-radio>
 * </onyx-radio-group>
 * ```
 */
@Component({
  tag: 'onyx-radio-group',
  styleUrl: 'onyx-radio-group.css',
  shadow: false,
  scoped: true,
})
export class OnyxRadioGroup {
  /**
   * Based in the `Orientation` ambient type, will display the radio group
   * stacked vertically or horizontally.
   * See {@link Orientation}
   */
  @Prop({ reflect: true })
  orientation: Orientation = 'vertical';

  /**
   * Default value, which will preselect the matching radio element.
   */
  @Prop({ reflect: true })
  selectedValue = null;

  /**
   * Unique name to group these options under. Child radio inputs must
   * feature the same `name` attribute value.
   */
  @Prop({ reflect: true })
  name;

  componentWillLoad() {
    radioGroupStore.radioGroups[this.name] = {
      selectedValue: this.selectedValue,
    }
  }

  disconnectedCallback() {
    delete radioGroupStore.radioGroups[this.name];
  }

  render() {
    return (
      <Host>
        <onyx-stack orientation={this.orientation}>
          <slot></slot>
        </onyx-stack>
      </Host>
    );
  }
}
