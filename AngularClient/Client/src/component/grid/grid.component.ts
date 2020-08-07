import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'grid',
    templateUrl: "./grid.view.html"
})

export class GridComponent {
    //all of code behind

    columns: Array<Object> = new Array<Object>();
    dataSource: Array<Object> = new Array<Object>();

    @Input('columns')
    set setColumns(columns: Array<Object>) {
        this.columns = columns;
    }

    @Input('data-source')
    set setDataSource(dataSource: Array<Object>) {
        this.dataSource = dataSource;
    }

    @Output('select')
    selectEventEmitter: EventEmitter<Object> = new EventEmitter<Object>();

    select(row: Object) {
        this.selectEventEmitter.emit(row);
    }
}


//Write a component when you want to create a reusable set of DOM elements of UI with custom behaviour. 
//Write a directive when you want to write reusable behaviour to supplement existing DOM elements. 

//Output decorator: Decorator that marks a class field as an output property and supplies configuration metadata.
//  The DOM property bound to the output property is automatically updated during change detection. (output from component)

//Input decorator: Decorator that marks a class field as an input property and supplies configuration metadata.
//  The input property is bound to a DOM property in the template.During change detection, 
//  Angular automatically updates the data property with the DOM property's value. (input to component)

//EventEmitter class: Use in directives and components to emit custom events synchronously or asynchronously, 
//  and register handlers for those events by subscribing to an instance.