import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserModel } from './user.model';
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.User = new UserModel();
    }
    UserInfoComponent.prototype.ngOnInit = function () {
        // this.dataService.get('Home').subscribe(data => {
        //   console.log(data);
        // }, error => {
        //   console.error(error)
        // })
    };
    UserInfoComponent.prototype.hasError = function (controlName, validatorType) {
        return this.User.formGroup.controls[controlName].hasError(validatorType);
    };
    UserInfoComponent = tslib_1.__decorate([
        Component({
            templateUrl: './userInfo.view.html'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserInfoComponent);
    return UserInfoComponent;
}());
export { UserInfoComponent };
//# sourceMappingURL=userInfo.component.js.map