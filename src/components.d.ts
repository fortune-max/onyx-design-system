/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface OnyxAlert {
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
        "flexDirection": "row" | "column";
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
    interface OnyxGrid {
        "columns": number;
    }
    interface OnyxGridColumn {
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
    interface OnyxTab {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface OnyxTabList {
    }
    interface OnyxTabPanel {
        "toggleSelected": (selected: boolean) => Promise<void>;
    }
    interface OnyxTabPanels {
    }
    interface OnyxTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex": number;
    }
    interface OnyxTextarea {
        "disabled": boolean;
        "hasError": boolean;
        "hint": string;
        "label": string;
        "maxChars": number;
        "name": string;
        "placeholder": string;
        "readonly": boolean;
        "value": string;
    }
}
export interface OnyxButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOnyxButtonElement;
}
export interface OnyxTabCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLOnyxTabElement;
}
declare global {
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
    interface HTMLOnyxGridElement extends Components.OnyxGrid, HTMLStencilElement {
    }
    var HTMLOnyxGridElement: {
        prototype: HTMLOnyxGridElement;
        new (): HTMLOnyxGridElement;
    };
    interface HTMLOnyxGridColumnElement extends Components.OnyxGridColumn, HTMLStencilElement {
    }
    var HTMLOnyxGridColumnElement: {
        prototype: HTMLOnyxGridColumnElement;
        new (): HTMLOnyxGridColumnElement;
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
    interface HTMLOnyxTabElement extends Components.OnyxTab, HTMLStencilElement {
    }
    var HTMLOnyxTabElement: {
        prototype: HTMLOnyxTabElement;
        new (): HTMLOnyxTabElement;
    };
    interface HTMLOnyxTabListElement extends Components.OnyxTabList, HTMLStencilElement {
    }
    var HTMLOnyxTabListElement: {
        prototype: HTMLOnyxTabListElement;
        new (): HTMLOnyxTabListElement;
    };
    interface HTMLOnyxTabPanelElement extends Components.OnyxTabPanel, HTMLStencilElement {
    }
    var HTMLOnyxTabPanelElement: {
        prototype: HTMLOnyxTabPanelElement;
        new (): HTMLOnyxTabPanelElement;
    };
    interface HTMLOnyxTabPanelsElement extends Components.OnyxTabPanels, HTMLStencilElement {
    }
    var HTMLOnyxTabPanelsElement: {
        prototype: HTMLOnyxTabPanelsElement;
        new (): HTMLOnyxTabPanelsElement;
    };
    interface HTMLOnyxTabsElement extends Components.OnyxTabs, HTMLStencilElement {
    }
    var HTMLOnyxTabsElement: {
        prototype: HTMLOnyxTabsElement;
        new (): HTMLOnyxTabsElement;
    };
    interface HTMLOnyxTextareaElement extends Components.OnyxTextarea, HTMLStencilElement {
    }
    var HTMLOnyxTextareaElement: {
        prototype: HTMLOnyxTextareaElement;
        new (): HTMLOnyxTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "onyx-alert": HTMLOnyxAlertElement;
        "onyx-box": HTMLOnyxBoxElement;
        "onyx-button": HTMLOnyxButtonElement;
        "onyx-callout": HTMLOnyxCalloutElement;
        "onyx-checkbox": HTMLOnyxCheckboxElement;
        "onyx-checkbox-group": HTMLOnyxCheckboxGroupElement;
        "onyx-grid": HTMLOnyxGridElement;
        "onyx-grid-column": HTMLOnyxGridColumnElement;
        "onyx-header": HTMLOnyxHeaderElement;
        "onyx-input": HTMLOnyxInputElement;
        "onyx-list": HTMLOnyxListElement;
        "onyx-list-item": HTMLOnyxListItemElement;
        "onyx-radio": HTMLOnyxRadioElement;
        "onyx-radio-group": HTMLOnyxRadioGroupElement;
        "onyx-stack": HTMLOnyxStackElement;
        "onyx-tab": HTMLOnyxTabElement;
        "onyx-tab-list": HTMLOnyxTabListElement;
        "onyx-tab-panel": HTMLOnyxTabPanelElement;
        "onyx-tab-panels": HTMLOnyxTabPanelsElement;
        "onyx-tabs": HTMLOnyxTabsElement;
        "onyx-textarea": HTMLOnyxTextareaElement;
    }
}
declare namespace LocalJSX {
    interface OnyxAlert {
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
        "flexDirection"?: "row" | "column";
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
    interface OnyxGrid {
        "columns"?: number;
    }
    interface OnyxGridColumn {
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
    interface OnyxTab {
        "onTabClick"?: (event: OnyxTabCustomEvent<any>) => void;
    }
    interface OnyxTabList {
    }
    interface OnyxTabPanel {
    }
    interface OnyxTabPanels {
    }
    interface OnyxTabs {
        /**
          * Configures the tab/panels to select by default upon loading.
         */
        "selectedIndex"?: number;
    }
    interface OnyxTextarea {
        "disabled"?: boolean;
        "hasError"?: boolean;
        "hint"?: string;
        "label"?: string;
        "maxChars"?: number;
        "name"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: string;
    }
    interface IntrinsicElements {
        "onyx-alert": OnyxAlert;
        "onyx-box": OnyxBox;
        "onyx-button": OnyxButton;
        "onyx-callout": OnyxCallout;
        "onyx-checkbox": OnyxCheckbox;
        "onyx-checkbox-group": OnyxCheckboxGroup;
        "onyx-grid": OnyxGrid;
        "onyx-grid-column": OnyxGridColumn;
        "onyx-header": OnyxHeader;
        "onyx-input": OnyxInput;
        "onyx-list": OnyxList;
        "onyx-list-item": OnyxListItem;
        "onyx-radio": OnyxRadio;
        "onyx-radio-group": OnyxRadioGroup;
        "onyx-stack": OnyxStack;
        "onyx-tab": OnyxTab;
        "onyx-tab-list": OnyxTabList;
        "onyx-tab-panel": OnyxTabPanel;
        "onyx-tab-panels": OnyxTabPanels;
        "onyx-tabs": OnyxTabs;
        "onyx-textarea": OnyxTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "onyx-alert": LocalJSX.OnyxAlert & JSXBase.HTMLAttributes<HTMLOnyxAlertElement>;
            "onyx-box": LocalJSX.OnyxBox & JSXBase.HTMLAttributes<HTMLOnyxBoxElement>;
            "onyx-button": LocalJSX.OnyxButton & JSXBase.HTMLAttributes<HTMLOnyxButtonElement>;
            "onyx-callout": LocalJSX.OnyxCallout & JSXBase.HTMLAttributes<HTMLOnyxCalloutElement>;
            "onyx-checkbox": LocalJSX.OnyxCheckbox & JSXBase.HTMLAttributes<HTMLOnyxCheckboxElement>;
            "onyx-checkbox-group": LocalJSX.OnyxCheckboxGroup & JSXBase.HTMLAttributes<HTMLOnyxCheckboxGroupElement>;
            "onyx-grid": LocalJSX.OnyxGrid & JSXBase.HTMLAttributes<HTMLOnyxGridElement>;
            "onyx-grid-column": LocalJSX.OnyxGridColumn & JSXBase.HTMLAttributes<HTMLOnyxGridColumnElement>;
            "onyx-header": LocalJSX.OnyxHeader & JSXBase.HTMLAttributes<HTMLOnyxHeaderElement>;
            "onyx-input": LocalJSX.OnyxInput & JSXBase.HTMLAttributes<HTMLOnyxInputElement>;
            "onyx-list": LocalJSX.OnyxList & JSXBase.HTMLAttributes<HTMLOnyxListElement>;
            "onyx-list-item": LocalJSX.OnyxListItem & JSXBase.HTMLAttributes<HTMLOnyxListItemElement>;
            "onyx-radio": LocalJSX.OnyxRadio & JSXBase.HTMLAttributes<HTMLOnyxRadioElement>;
            "onyx-radio-group": LocalJSX.OnyxRadioGroup & JSXBase.HTMLAttributes<HTMLOnyxRadioGroupElement>;
            "onyx-stack": LocalJSX.OnyxStack & JSXBase.HTMLAttributes<HTMLOnyxStackElement>;
            "onyx-tab": LocalJSX.OnyxTab & JSXBase.HTMLAttributes<HTMLOnyxTabElement>;
            "onyx-tab-list": LocalJSX.OnyxTabList & JSXBase.HTMLAttributes<HTMLOnyxTabListElement>;
            "onyx-tab-panel": LocalJSX.OnyxTabPanel & JSXBase.HTMLAttributes<HTMLOnyxTabPanelElement>;
            "onyx-tab-panels": LocalJSX.OnyxTabPanels & JSXBase.HTMLAttributes<HTMLOnyxTabPanelsElement>;
            "onyx-tabs": LocalJSX.OnyxTabs & JSXBase.HTMLAttributes<HTMLOnyxTabsElement>;
            "onyx-textarea": LocalJSX.OnyxTextarea & JSXBase.HTMLAttributes<HTMLOnyxTextareaElement>;
        }
    }
}
