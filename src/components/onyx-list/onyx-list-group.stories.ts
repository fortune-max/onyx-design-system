export default {
  title: 'Components/List',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    // This will create an `args.variant` binding for your component 
    as: {
      options: ['ol', 'ul'],
      control: { type: 'radio' },
      description: 'Determines if list items should be presented as an Ordered or Unordered List',
    },
  }
};

const Template = (args) => `
  <onyx-header level="4">
    We have the following services available
  </onyx-header>
  <onyx-list name="room" as=${args.as}>
    <onyx-list-item>Room Service</onyx-list-item>
    <onyx-list-item>Wake-up Call</onyx-list-item>
    <onyx-list-item>Laundry and Dry Cleaning</onyx-list-item>
    <onyx-list-item>Complimentary meal</onyx-list-item>
    <onyx-list-item>Car Rental</onyx-list-item>
  </onyx-list>
`;

export const ListStory = Template.bind({});
ListStory.args = {
  as: 'ol',
};