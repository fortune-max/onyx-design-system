export default {
  title: 'Components/Textarea',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component
    readonly: {
      control: {
        type: 'boolean',
      },
      value: false,
      default: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      value: false,
      default: false,
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      value: false,
      default: false,
    },
  },
};

const Template = args => `
    <onyx-textarea 
      label="${args.label}" 
      placeholder="${args.placeholder}" 
      value="${args.value}" ${(args.readonly && 'readonly') || ''} ${(args.disabled && 'disabled') || ''} 
      ${(args.hasError && 'has-error') || ''}
      hint="${args.hint}"></onyx-textarea>`;

export const TextareaInputStory = Template.bind({});
TextareaInputStory.args = {
  label: 'Label',
  placeholder: 'Placeholder Text',
  hint: 'Hint Text.',
  readonly: false,
  disabled: false,
  hasError: false,
  value: '',
};
