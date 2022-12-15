export default {
  title: 'Components/Alert',
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
    <onyx-alert 
      content="${args.content}" 
      type="${args.type}"></onyx-alert>`;

export const AlertStory = Template.bind({});
AlertStory.args = {
  content: 'Change a few things up and try again.',
  type: 'neutral',
};
