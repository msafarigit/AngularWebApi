import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
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
    }
    UserSearchComponent.prototype.Add = function () {
        //this.UserList.push(this.User);
        //this.User = new UserModel();
    };
    UserSearchComponent.prototype.ngOnInit = function () {
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