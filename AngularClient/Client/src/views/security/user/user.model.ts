import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class UserModel {
    Name: string = "";
    UserName: string = "";
    Password: string = null;

    //validation
    formGroup: FormGroup = null;

    constructor() {
        var _builder = new FormBuilder();
        this.formGroup = _builder.group({});
    }
}






//NgForm directive: Creates a top-level FormGroup instance and binds it to a form to track aggregate form value and validation status.
//FormBuilder class: The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray. It reduces the amount of boilerplate needed to build complex forms.
//FormControl class: Tracks the value and validation status of an individual form control.