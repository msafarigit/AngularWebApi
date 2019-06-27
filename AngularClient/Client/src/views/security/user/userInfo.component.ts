import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';

@Component({
    templateUrl: './userInfo.view.html'
})

export class UserInfoComponent implements OnInit {

    User: UserModel = new UserModel();

    constructor() { }

    ngOnInit() {
        // this.dataService.get('Home').subscribe(data => {
        //   console.log(data);
        // }, error => {
        //   console.error(error)
        // })
    }

    hasError(controlName: string, validatorType: string): boolean {
        return this.User.formGroup.controls[controlName].hasError(validatorType);
    }
}
