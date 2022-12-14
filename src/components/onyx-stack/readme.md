# onyx-stack



<!-- Auto Generated Below -->


## Overview

The `<onyx-stack>` component is a layout component providing horizontal and vertical
flow capabilities for all its children components and elements.

### Example
```html
<onyx-stack orientation="vertical" gap="small">
 <img src="test.png" />
 <button>Save</button>
</onyx-stack>
```

## Properties

| Property      | Attribute     | Description                                                                                                    | Type                                                                       | Default      |
| ------------- | ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| `gap`         | `gap`         | The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element. | `"large" \| "small"`                                                       | `'small'`    |
| `orientation` | `orientation` | The `orientation` property sets the direction for the flow, either vertical or horizontal.                     | `"horizontal" \| "horizontal-reverse" \| "vertical" \| "vertical-reverse"` | `'vertical'` |


## Dependencies

### Used by

 - [onyx-checkbox](../onyx-checkbox-group)
 - [onyx-checkbox-group](../onyx-checkbox-group)
 - [onyx-radio](../onyx-radio-group)
 - [onyx-radio-group](../onyx-radio-group)

### Graph
```mermaid
graph TD;
  onyx-checkbox --> onyx-stack
  onyx-checkbox-group --> onyx-stack
  onyx-radio --> onyx-stack
  onyx-radio-group --> onyx-stack
  style onyx-stack fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
