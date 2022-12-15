export default {
  title: 'Components/Box',
  
  argTypes: {
    display: {
      control: { type: 'radio' },
      options: ["flex", "grid", "none", "block", "inline-block", "inline-flex"],
      description: 'Specify Box container display',
      value: "flex"
    },
    alignItems: {
      control: { type: 'radio' },
      options: ["center", "flex-start", "flex-end", "stretch", "baseline"],
      description: 'Specify how items should be aligned in Box container',
    },
    alignContent: {
      control: { type: 'radio' },
      options: ["center", "flex-start", "flex-end", "space-around", "space-between", "stretch"],
      description: 'Specify how content should be aligned in Box container',
    },
    justifyContent: {
      control: { type: 'radio' },
      options: ["center", "flex-start", "flex-end", "space-around", "space-between", "space-evenly"],
      description: 'Specify how content should be justified in Box container',
    },
  }
};

const Template = (args) => `
  <onyx-box height="${args.height}" width="${args.width}" background-color="${args.backgroundColor}" margin="${args.margin}" padding="${args.padding}" border-radius="${args.borderRadius}" border="${args.border}" display="${args.display}" align-items="${args.alignItems}" align-content="${args.alignContent}" justify-content="${args.justifyContent}" gap="${args.gap}" as="${args.as}">
    ${args.content}
  </onyx-box>
`;

export const BoxStory = Template.bind({});
BoxStory.args = {
  height: '100px',
  width: '100px',
  backgroundColor: 'yellow',
  margin: '0px',
  padding: '5px',
  borderRadius: '5px',
  border: '2px solid black',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'center',
  justifyContent: 'center',
  gap: '10px',
  as: 'span',
  content: 'This is a 100px x 100px box element',
};