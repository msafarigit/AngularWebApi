import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

export class UserModel {
    Name: string = "";
    Username: string = "";
    Password: string = null;

    //validation
    formGroup: FormGroup = null;

    constructor() {
        var _builder = new FormBuilder();
        this.formGroup = _builder.group({});

        this.formGroup.addControl("NameControl", new FormControl('', Validators.required));
        this.formGroup.addControl("UsernameControl", new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern("^[a-z|A-Z]{4,9}$")
        ])));

        var passVaildators = [];
        passVaildators.push(Validators.required, Validators.pattern("^[0-9]{4}$"));
        this.formGroup.addControl("PasswordControl", new FormControl('', Validators.compose(passVaildators)));
    }
}




//NgForm directive: Creates a top-level FormGroup instance and binds it to a form to track aggregate form value and validation status.
//FormBuilder class: The FormBuilder provides syntactic sugar that shortens creating instances of a FormControl, FormGroup, or FormArray. It reduces the amount of boilerplate needed to build complex forms.
//FormControl class: Tracks the value and validation status of an individual form control.
//Validators class: Provides a set of built -in validators that can be used by form controls.
//  A validator is a function that processes a FormControl or collection of controls and returns an error map or null. A null map means that validation has passed.

//formGroup state: .dirty, .pristine, .touched, .untouched, .valid, .invalid