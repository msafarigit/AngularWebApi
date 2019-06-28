import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
var GridComponent = /** @class */ (function () {
    function GridComponent() {
        //all of code behind
        this.columns = new Array();
        this.dataSource = new Array();
        this.selectEventEmitter = new EventEmitter();
    }
    Object.defineProperty(GridComponent.prototype, "setColumns", {
        set: function (columns) {
            this.columns = columns;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridComponent.prototype, "setDataSource", {
        set: function (dataSource) {
            this.dataSource = dataSource;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.select = function (row) {
        this.selectEventEmitter.emit(row);
    };
    tslib_1.__decorate([
        Input('columns'),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], GridComponent.prototype, "setColumns", null);
    tslib_1.__decorate([
        Input('data-source'),
        tslib_1.__metadata("design:type", Array),
        tslib_1.__metadata("design:paramtypes", [Array])
    ], GridComponent.prototype, "setDataSource", null);
    tslib_1.__decorate([
        Output('select'),
        tslib_1.__metadata("design:type", EventEmitter)
    ], GridComponent.prototype, "selectEventEmitter", void 0);
    GridComponent = tslib_1.__decorate([
        Component({
            selector: 'grid',
            templateUrl: "./grid.view.html"
        })
    ], GridComponent);
    return GridComponent;
}());
export { GridComponent };
//Write a component when you want to create a reusable set of DOM elements of UI with custom behaviour. 
//Write a directive when you want to write reusable behaviour to supplement existing DOM elements. 
//Output decorator: Decorator that marks a class field as an output property and supplies configuration metadata.
//  The DOM property bound to the output property is automatically updated during change detection. (output from component)
//Input decorator: Decorator that marks a class field as an input property and supplies configuration metadata.
//  The input property is bound to a DOM property in the template.During change detection, 
//  Angular automatically updates the data property with the DOM property's value. (input to component)
//EventEmitter class: Use in directives and components to emit custom events synchronously or asynchronously, 
//  and register handlers for those events by subscribing to an instance.
//# sourceMappingURL=grid.component.js.map