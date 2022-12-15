export default {
  title: 'Components/Alert',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component
    type: {
      control: {
        type: 'select',
      },
      options: ['default'],
    },
  },
};

const Template = args => `
    <onyx-input 
      label="${args.label}" 
      placeholder="${args.placeholder}" 
      value="${args.value}" ${(args.readonly && 'readonly') || ''} ${(args.disabled && 'disabled') || ''} 
      ${(args.hasError && 'has-error') || ''}
      hint="${args.hint}" />`;

export const TextInputStory = Template.bind({});
TextInputStory.args = {
  label: 'Username',
  placeholder: 'Please type your username',
  hint: 'Please make sure to enter a correct username.',
  readonly: false,
  disabled: false,
  hasError: false,
  value: '',
};
