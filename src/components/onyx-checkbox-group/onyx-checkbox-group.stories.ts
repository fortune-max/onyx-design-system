export default {
  title: 'Components/CheckboxGroup',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      description: 'The checkbox group orientation',
    },
    selectedValues: {
      control: {
        type: 'object',
      },
      description: 'The preselected items values',
    },
  }
};

const Template = (args) => `
  <onyx-header level="4">
    Which services would you like to be included in your room booking?
  </onyx-header>
  <onyx-checkbox-group name="room" selected-values="${args.selectedValues}" orientation="${args.orientation}">
    <onyx-checkbox name="room" value="1">Room Service</onyx-checkbox>
    <onyx-checkbox name="room" value="2">Wake-up Call</onyx-checkbox>
    <onyx-checkbox name="room" value="3">Laundry and Dry Cleaning</onyx-checkbox>
    <onyx-checkbox name="room" value="4">Complimentary meal</onyx-checkbox>
    <onyx-checkbox name="room" value="5">Car Rental</onyx-checkbox>
  </onyx-checkbox-group>
`;

export const CheckboxGroupStory = Template.bind({});
CheckboxGroupStory.args = {
  orientation: 'vertical',
  selectedValues: ['1'],
};