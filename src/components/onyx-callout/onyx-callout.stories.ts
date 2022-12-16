export default {
  title: 'Components/Callout',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component
    type: {
      control: {
        type: 'select',
      },
      options: ['neutral', 'success', 'warning', 'error'],
    },
  },
};

const Template = args => `
    <onyx-callout 
      type="${args.type}" 
      header="${args.header}"
      action-title="${args.actionTitle}"
      >
        ${args.content}
      </onyx-callout>`;

export const CalloutStory = Template.bind({});
CalloutStory.args = {
  type: 'neutral',
  header: 'Informal Callout',
  content: 'This is an informal callout, for more information click the callout action button',
  actionTitle: 'Action',
};
