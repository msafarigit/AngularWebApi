import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserModel } from './user.model';
import { DataService } from 'src/service/data.service';
import { LoggerService } from 'src/service/logger.service';
var UserSearchComponent = /** @class */ (function () {
    function UserSearchComponent(dataService, logger) {
        this.dataService = dataService;
        this.logger = logger;
        this.Logger = null;
        this.UserList = new Array();
        this.Logger = logger;
        this.Logger.Log();
        var User = new UserModel();
        User.Name = "Hasan";
        User.Username = "HS";
        User.Password = "12345";
        this.UserList.push(User);
        User = new UserModel();
        User.Name = "Mohammad";
        User.Username = "MM";
        User.Password = "87647";
        this.UserList.push(User);
    }
    UserSearchComponent.prototype.ngOnInit = function () {
    };
    UserSearchComponent.prototype.Add = function () {
        //this.UserList.push(this.User);
        //this.User = new UserModel();
    };
    UserSearchComponent.prototype.Select = function (user) {
        console.log(user.Name);
    };
    UserSearchComponent = tslib_1.__decorate([
        Component({
            templateUrl: "./userSearch.view.html"
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, LoggerService])
    ], UserSearchComponent);
    return UserSearchComponent;
}());
export { UserSearchComponent };
//# sourceMappingURL=userSearch.component.js.map