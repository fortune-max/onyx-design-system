# hs-tabs



<!-- Auto Generated Below -->


## Overview

The `<onyx-tabs />` component provides a convenient wrapper for tabbed navigation,
displaying a top nav with tab links that will toggle on or off each corresponding
tabbed view matching their index. Eg: clicking on the first tab will display the first
panel, and so on. The component supports pre-selecting a tab of your choice. If the index
does not match the elements allocated, the pre-selected tab will default to the first one.

### Example

```html
 <onyx-tabs>
   <onyx-tab-list>
     <onyx-tab>Tab 1</onyx-tab>
     <onyx-tab>Tab 2</onyx-tab>
   </onyx-tab-list>
   <onyx-tab-panels>
     <onyx-tab-panel>
       <onyx-header>Tab 1 content</onyx-header>
     </onyx-tab-panel>
     <onyx-tab-panel>
       <onyx-header>Tab 2 content</onyx-header>
     </onyx-tab-panel>
   </onyx-tab-panels>
 </onyx-tabs>
````

Annotating the top element as `<onyx-tabs selected-index="1">` would have displayed the second tab/panel by default.

## Properties

| Property        | Attribute        | Description                                                  | Type     | Default |
| --------------- | ---------------- | ------------------------------------------------------------ | -------- | ------- |
| `selectedIndex` | `selected-index` | Configures the tab/panels to select by default upon loading. | `number` | `0`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
