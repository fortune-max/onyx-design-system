export default {
  title: 'Components/Tabs',
  // Learn more about how to set up controls at https://storybook.js.org/docs/web-components/essentials/controls#annotation
  argTypes: {
    selectedIndex: {
      options: [0, 1, 2, 3, 4],
      control: { type: 'select' },
      description: 'Tab selected by default',
    },
  },
};

const Template = args => `
  <onyx-tabs selected-index="${args.selectedIndex}">
    <onyx-tab-list>
      <onyx-tab>Episode 1</onyx-tab>
      <onyx-tab>Episode 2</onyx-tab>
      <onyx-tab>Episode 3</onyx-tab>
      <onyx-tab>Episode 4</onyx-tab>
      <onyx-tab>Episode 5</onyx-tab>
    </onyx-tab-list>
    <onyx-tab-panels>
      <onyx-tab-panel>
        <onyx-header level="2">Episode 1</onyx-header>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </onyx-tab-panel>
      <onyx-tab-panel>
        <onyx-header level="2">Episode 2</onyx-header>
        <p>Sed erat nulla, vulputate in turpis quis, dignissim vestibulum magna. Aliquam eleifend mauris id vulputate sollicitudin. </p>
      </onyx-tab-panel>
      <onyx-tab-panel>
        <onyx-header level="2">Episode 3</onyx-header>
        <p>Morbi gravida lobortis metus ac feugiat. Aliquam ut lacinia lacus. Morbi ullamcorper venenatis dui vel maximus. In malesuada tortor ligula</p>
      </onyx-tab-panel>
      <onyx-tab-panel>
        <onyx-header level="2">Episode 4</onyx-header>
        <p>Vivamus vestibulum nisl congue mattis pretium. Aenean lacinia nibh at pharetra blandit. </p>
      </onyx-tab-panel>
      <onyx-tab-panel>
        <onyx-header level="2">Episode 5</onyx-header>
        <p>Integer non est porta, malesuada neque quis, rutrum orci. Sed tempus metus sed nisi tempor, in condimentum tellus rutrum.</p>
      </onyx-tab-panel>
    </onyx-tab-panels>
  </onyx-tabs>
`;

export const TabsStories = Template.bind({});
TabsStories.args = {
  selectedIndex: 0,
};
