export default {
  title: 'Components/OnyxRadioGroup',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    orientation: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
      description: 'The radio group orientation',
    },
    selectedValue: {
      control: {
        type: 'number',
        min: 1,
        max: 5,
      },
      description: 'The preselected value item',
    },
  }
};

const Template = (args) => `
  <hs-header level="4">
    How long will you be staying with us?
  </hs-header>
  <onyx-radio-group name="stay-length" selected-value="${args.selectedValue}" orientation="${args.orientation}">
    <onyx-radio name="stay-length" value="1">One night</onyx-radio>
    <onyx-radio name="stay-length" value="2">Three nights</onyx-radio>
    <onyx-radio name="stay-length" value="3">One week</onyx-radio>
    <onyx-radio name="stay-length" value="4">Two weeks</onyx-radio>
    <onyx-radio name="stay-length" value="5">At least a month</onyx-radio>
  </onyx-radio-group>
`;

export const RadioGroupStory = Template.bind({});
RadioGroupStory.args = {
  orientation: 'vertical',
  selectedValue: '3',
};