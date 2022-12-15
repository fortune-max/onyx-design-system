/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HsGrid {
        "columns": number;
    }
    interface HsGridColumn {
    }
    interface HsTab {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex": number;
    }
    interface OnyxAlert {
        "content": string;
        "type": 'neutral' | 'success' | 'error' | 'warning';
    }
    interface OnyxBox {
        "alignContent": "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "stretch";
        "alignItems": "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
        "as": string;
        "backgroundColor": string;
        "border": string;
        "borderRadius": string;
        "display": "flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex";
        "gap": string;
        "height": string;
        "justifyContent": "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly";
        "margin": string;
        "padding": string;
        "width": string;
    }
    interface OnyxButton {
        "size": string;
        "variant": "neutral" | "success" | "error" | "warning" | "disabled";
    }
    interface OnyxCallout {
        "actionTitle": string;
        "actionType": string;
        "header": string;
        "type": 'neutral' | 'success' | 'error' | 'warning';
    }
    interface OnyxCheckbox {
        /**
          * The unique name of the checkbox group. Must match the `name` attribute of its parent `<onyx-checkbox-group />`.
         */
        "name": any;
        /**
          * The particular value of this checkbox item.
         */
        "value": any;
    }
    interface OnyxCheckboxGroup {
        /**
          * Unique name to group these options under. Child check boxes must feature the same `name` attribute value.
         */
        "name": any;
        /**
          * Determines if the check boxes will display stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation": Orientation;
        /**
          * Default selected value, which will check the matching checkbox element(s).
         */
        "selectedValues": any;
    }
    interface OnyxHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It mus take a number from `1` to `6`.
         */
        "level": number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign": 'left' | 'right' | 'center';
    }
    interface OnyxInput {
        "disabled": boolean;
        "hasError": boolean;
        "hint": string;
        "label": string;
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "value": string;
    }
    interface OnyxList {
        "as": "ol" | "ul";
    }
    interface OnyxListItem {
    }
    interface OnyxRadio {
        /**
          * The unique name of the radio button group. Must match the `name` attribute of its parent `<onyx-radio-group />`.
         */
        "name": any;
        /**
          * The particular value of this radio input item.
         */
        "value": any;
    }
    interface OnyxRadioGroup {
        /**
          * Unique name to group these options under. Child radio inputs must feature the same `name` attribute value.
         */
        "name": any;
        /**
          * Based in the `Orientation` ambient type, will display the radio group stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation": Orientation;
        /**
          * Default value, which will preselect the matching radio element.
         */
        "selectedValue": any;
    }
    interface OnyxStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap": 'large' | 'small';
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation": Orientation;
    }
}
export interface HsTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLHsTabElement;
}
export interface OnyxButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOnyxButtonElement;
}
declare global {
    interface HTMLHsGridElement extends Components.HsGrid, HTMLStencilElement {
    }
    var HTMLHsGridElement: {
        prototype: HTMLHsGridElement;
        new (): HTMLHsGridElement;
    };
    interface HTMLHsGridColumnElement extends Components.HsGridColumn, HTMLStencilElement {
    }
    var HTMLHsGridColumnElement: {
        prototype: HTMLHsGridColumnElement;
        new (): HTMLHsGridColumnElement;
    };
    interface HTMLHsTabElement extends Components.HsTab, HTMLStencilElement {
    }
    var HTMLHsTabElement: {
        prototype: HTMLHsTabElement;
        new (): HTMLHsTabElement;
    };
    interface HTMLHsTabListElement extends Components.HsTabList, HTMLStencilElement {
    }
    var HTMLHsTabListElement: {
        prototype: HTMLHsTabListElement;
        new (): HTMLHsTabListElement;
    };
    interface HTMLHsTabPanelElement extends Components.HsTabPanel, HTMLStencilElement {
    }
    var HTMLHsTabPanelElement: {
        prototype: HTMLHsTabPanelElement;
        new (): HTMLHsTabPanelElement;
    };
    interface HTMLHsTabPanelsElement extends Components.HsTabPanels, HTMLStencilElement {
    }
    var HTMLHsTabPanelsElement: {
        prototype: HTMLHsTabPanelsElement;
        new (): HTMLHsTabPanelsElement;
    };
    interface HTMLHsTabsElement extends Components.HsTabs, HTMLStencilElement {
    }
    var HTMLHsTabsElement: {
        prototype: HTMLHsTabsElement;
        new (): HTMLHsTabsElement;
    };
    interface HTMLOnyxAlertElement extends Components.OnyxAlert, HTMLStencilElement {
    }
    var HTMLOnyxAlertElement: {
        prototype: HTMLOnyxAlertElement;
        new (): HTMLOnyxAlertElement;
    };
    interface HTMLOnyxBoxElement extends Components.OnyxBox, HTMLStencilElement {
    }
    var HTMLOnyxBoxElement: {
        prototype: HTMLOnyxBoxElement;
        new (): HTMLOnyxBoxElement;
    };
    interface HTMLOnyxButtonElement extends Components.OnyxButton, HTMLStencilElement {
    }
    var HTMLOnyxButtonElement: {
        prototype: HTMLOnyxButtonElement;
        new (): HTMLOnyxButtonElement;
    };
    interface HTMLOnyxCalloutElement extends Components.OnyxCallout, HTMLStencilElement {
    }
    var HTMLOnyxCalloutElement: {
        prototype: HTMLOnyxCalloutElement;
        new (): HTMLOnyxCalloutElement;
    };
    interface HTMLOnyxCheckboxElement extends Components.OnyxCheckbox, HTMLStencilElement {
    }
    var HTMLOnyxCheckboxElement: {
        prototype: HTMLOnyxCheckboxElement;
        new (): HTMLOnyxCheckboxElement;
    };
    interface HTMLOnyxCheckboxGroupElement extends Components.OnyxCheckboxGroup, HTMLStencilElement {
    }
    var HTMLOnyxCheckboxGroupElement: {
        prototype: HTMLOnyxCheckboxGroupElement;
        new (): HTMLOnyxCheckboxGroupElement;
    };
    interface HTMLOnyxHeaderElement extends Components.OnyxHeader, HTMLStencilElement {
    }
    var HTMLOnyxHeaderElement: {
        prototype: HTMLOnyxHeaderElement;
        new (): HTMLOnyxHeaderElement;
    };
    interface HTMLOnyxInputElement extends Components.OnyxInput, HTMLStencilElement {
    }
    var HTMLOnyxInputElement: {
        prototype: HTMLOnyxInputElement;
        new (): HTMLOnyxInputElement;
    };
    interface HTMLOnyxListElement extends Components.OnyxList, HTMLStencilElement {
    }
    var HTMLOnyxListElement: {
        prototype: HTMLOnyxListElement;
        new (): HTMLOnyxListElement;
    };
    interface HTMLOnyxListItemElement extends Components.OnyxListItem, HTMLStencilElement {
    }
    var HTMLOnyxListItemElement: {
        prototype: HTMLOnyxListItemElement;
        new (): HTMLOnyxListItemElement;
    };
    interface HTMLOnyxRadioElement extends Components.OnyxRadio, HTMLStencilElement {
    }
    var HTMLOnyxRadioElement: {
        prototype: HTMLOnyxRadioElement;
        new (): HTMLOnyxRadioElement;
    };
    interface HTMLOnyxRadioGroupElement extends Components.OnyxRadioGroup, HTMLStencilElement {
    }
    var HTMLOnyxRadioGroupElement: {
        prototype: HTMLOnyxRadioGroupElement;
        new (): HTMLOnyxRadioGroupElement;
    };
    interface HTMLOnyxStackElement extends Components.OnyxStack, HTMLStencilElement {
    }
    var HTMLOnyxStackElement: {
        prototype: HTMLOnyxStackElement;
        new (): HTMLOnyxStackElement;
    };
    interface HTMLElementTagNameMap {
        "hs-grid": HTMLHsGridElement;
        "hs-grid-column": HTMLHsGridColumnElement;
        "hs-tab": HTMLHsTabElement;
        "hs-tab-list": HTMLHsTabListElement;
        "hs-tab-panel": HTMLHsTabPanelElement;
        "hs-tab-panels": HTMLHsTabPanelsElement;
        "hs-tabs": HTMLHsTabsElement;
        "onyx-alert": HTMLOnyxAlertElement;
        "onyx-box": HTMLOnyxBoxElement;
        "onyx-button": HTMLOnyxButtonElement;
        "onyx-callout": HTMLOnyxCalloutElement;
        "onyx-checkbox": HTMLOnyxCheckboxElement;
        "onyx-checkbox-group": HTMLOnyxCheckboxGroupElement;
        "onyx-header": HTMLOnyxHeaderElement;
        "onyx-input": HTMLOnyxInputElement;
        "onyx-list": HTMLOnyxListElement;
        "onyx-list-item": HTMLOnyxListItemElement;
        "onyx-radio": HTMLOnyxRadioElement;
        "onyx-radio-group": HTMLOnyxRadioGroupElement;
        "onyx-stack": HTMLOnyxStackElement;
    }
}
declare namespace LocalJSX {
    interface HsGrid {
        "columns"?: number;
    }
    interface HsGridColumn {
    }
    interface HsTab {
        "onTabClick"?: (event: HsTabCustomEvent<any>) => void;
    }
    interface HsTabList {
    }
    interface HsTabPanel {
    }
    interface HsTabPanels {
    }
    interface HsTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex"?: number;
    }
    interface OnyxAlert {
        "content"?: string;
        "type"?: 'neutral' | 'success' | 'error' | 'warning';
    }
    interface OnyxBox {
        "alignContent"?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "stretch";
        "alignItems"?: "center" | "flex-start" | "flex-end" | "stretch" | "baseline";
        "as"?: string;
        "backgroundColor"?: string;
        "border"?: string;
        "borderRadius"?: string;
        "display"?: "flex" | "grid" | "none" | "block" | "inline-block" | "inline-flex";
        "gap"?: string;
        "height"?: string;
        "justifyContent"?: "center" | "flex-start" | "flex-end" | "space-around" | "space-between" | "space-evenly";
        "margin"?: string;
        "padding"?: string;
        "width"?: string;
    }
    interface OnyxButton {
        "onClicked"?: (event: OnyxButtonCustomEvent<any>) => void;
        "size"?: string;
        "variant"?: "neutral" | "success" | "error" | "warning" | "disabled";
    }
    interface OnyxCallout {
        "actionTitle"?: string;
        "actionType"?: string;
        "header"?: string;
        "type"?: 'neutral' | 'success' | 'error' | 'warning';
    }
    interface OnyxCheckbox {
        /**
          * The unique name of the checkbox group. Must match the `name` attribute of its parent `<onyx-checkbox-group />`.
         */
        "name"?: any;
        /**
          * The particular value of this checkbox item.
         */
        "value"?: any;
    }
    interface OnyxCheckboxGroup {
        /**
          * Unique name to group these options under. Child check boxes must feature the same `name` attribute value.
         */
        "name"?: any;
        /**
          * Determines if the check boxes will display stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation"?: Orientation;
        /**
          * Default selected value, which will check the matching checkbox element(s).
         */
        "selectedValues"?: any;
    }
    interface OnyxHeader {
        /**
          * The `level` property allows users to indicate what header hierarchy this element is. It mus take a number from `1` to `6`.
         */
        "level"?: number;
        /**
          * Provides support for implementing horizontal alignment to the text contained in the header.
         */
        "textAlign"?: 'left' | 'right' | 'center';
    }
    interface OnyxInput {
        "disabled"?: boolean;
        "hasError"?: boolean;
        "hint"?: string;
        "label"?: string;
        "name"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: string;
    }
    interface OnyxList {
        "as"?: "ol" | "ul";
    }
    interface OnyxListItem {
    }
    interface OnyxRadio {
        /**
          * The unique name of the radio button group. Must match the `name` attribute of its parent `<onyx-radio-group />`.
         */
        "name"?: any;
        /**
          * The particular value of this radio input item.
         */
        "value"?: any;
    }
    interface OnyxRadioGroup {
        /**
          * Unique name to group these options under. Child radio inputs must feature the same `name` attribute value.
         */
        "name"?: any;
        /**
          * Based in the `Orientation` ambient type, will display the radio group stacked vertically or horizontally. See {@link Orientation}
         */
        "orientation"?: Orientation;
        /**
          * Default value, which will preselect the matching radio element.
         */
        "selectedValue"?: any;
    }
    interface OnyxStack {
        /**
          * The `gap` property sets the spacing in between elements, and has no effect in the leading or trailing element.
         */
        "gap"?: 'large' | 'small';
        /**
          * The `orientation` property sets the direction for the flow, either vertical or horizontal.
         */
        "orientation"?: Orientation;
    }
    interface IntrinsicElements {
        "hs-grid": HsGrid;
        "hs-grid-column": HsGridColumn;
        "hs-tab": HsTab;
        "hs-tab-list": HsTabList;
        "hs-tab-panel": HsTabPanel;
        "hs-tab-panels": HsTabPanels;
        "hs-tabs": HsTabs;
        "onyx-alert": OnyxAlert;
        "onyx-box": OnyxBox;
        "onyx-button": OnyxButton;
        "onyx-callout": OnyxCallout;
        "onyx-checkbox": OnyxCheckbox;
        "onyx-checkbox-group": OnyxCheckboxGroup;
        "onyx-header": OnyxHeader;
        "onyx-input": OnyxInput;
        "onyx-list": OnyxList;
        "onyx-list-item": OnyxListItem;
        "onyx-radio": OnyxRadio;
        "onyx-radio-group": OnyxRadioGroup;
        "onyx-stack": OnyxStack;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "hs-grid": LocalJSX.HsGrid & JSXBase.HTMLAttributes<HTMLHsGridElement>;
            "hs-grid-column": LocalJSX.HsGridColumn & JSXBase.HTMLAttributes<HTMLHsGridColumnElement>;
            "hs-tab": LocalJSX.HsTab & JSXBase.HTMLAttributes<HTMLHsTabElement>;
            "hs-tab-list": LocalJSX.HsTabList & JSXBase.HTMLAttributes<HTMLHsTabListElement>;
            "hs-tab-panel": LocalJSX.HsTabPanel & JSXBase.HTMLAttributes<HTMLHsTabPanelElement>;
            "hs-tab-panels": LocalJSX.HsTabPanels & JSXBase.HTMLAttributes<HTMLHsTabPanelsElement>;
            "hs-tabs": LocalJSX.HsTabs & JSXBase.HTMLAttributes<HTMLHsTabsElement>;
            "onyx-alert": LocalJSX.OnyxAlert & JSXBase.HTMLAttributes<HTMLOnyxAlertElement>;
            "onyx-box": LocalJSX.OnyxBox & JSXBase.HTMLAttributes<HTMLOnyxBoxElement>;
            "onyx-button": LocalJSX.OnyxButton & JSXBase.HTMLAttributes<HTMLOnyxButtonElement>;
            "onyx-callout": LocalJSX.OnyxCallout & JSXBase.HTMLAttributes<HTMLOnyxCalloutElement>;
            "onyx-checkbox": LocalJSX.OnyxCheckbox & JSXBase.HTMLAttributes<HTMLOnyxCheckboxElement>;
            "onyx-checkbox-group": LocalJSX.OnyxCheckboxGroup & JSXBase.HTMLAttributes<HTMLOnyxCheckboxGroupElement>;
            "onyx-header": LocalJSX.OnyxHeader & JSXBase.HTMLAttributes<HTMLOnyxHeaderElement>;
            "onyx-input": LocalJSX.OnyxInput & JSXBase.HTMLAttributes<HTMLOnyxInputElement>;
            "onyx-list": LocalJSX.OnyxList & JSXBase.HTMLAttributes<HTMLOnyxListElement>;
            "onyx-list-item": LocalJSX.OnyxListItem & JSXBase.HTMLAttributes<HTMLOnyxListItemElement>;
            "onyx-radio": LocalJSX.OnyxRadio & JSXBase.HTMLAttributes<HTMLOnyxRadioElement>;
            "onyx-radio-group": LocalJSX.OnyxRadioGroup & JSXBase.HTMLAttributes<HTMLOnyxRadioGroupElement>;
            "onyx-stack": LocalJSX.OnyxStack & JSXBase.HTMLAttributes<HTMLOnyxStackElement>;
        }
    }
}
