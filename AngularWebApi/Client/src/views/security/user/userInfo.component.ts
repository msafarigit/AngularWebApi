import { Component, OnInit, Injector } from '@angular/core';
import { UserModel } from './user.model';
import { LoggerService } from 'src/service/logger.service';

@Component({
    templateUrl: './userInfo.view.html'
})

export class UserInfoComponent implements OnInit {
    Logger: LoggerService = null;
    User: UserModel = new UserModel();

    constructor(injector: Injector) {
        this.Logger = injector.get("1");
        this.Logger.Log();
    }

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
