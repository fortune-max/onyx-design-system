export default {
  title: 'Components/Callout',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component
    type: {
      control: {
        type: 'select',
      },
      options: ['default', 'success', 'warning', 'error'],
    },
  },
};

const Template = args => `
    <onyx-callout 
      type="${args.type}" 
      >
      This is an infromal callout, for more information click the callout action button
      </onyx-callout>`;

export const TextInputStory = Template.bind({});
TextInputStory.args = {
  type: 'default',
};
