import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SecurityRoute } from './security.router';
import { UserSearchComponent } from './user/userSearch.component';
import { UserInfoComponent } from './user/userInfo.component';
var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserSearchComponent,
                UserInfoComponent
            ],
            imports: [
                RouterModule.forChild(SecurityRoute),
                CommonModule,
                FormsModule
            ],
            providers: [],
            bootstrap: [UserSearchComponent]
        })
    ], SecurityModule);
    return SecurityModule;
}());
export { SecurityModule };
//# sourceMappingURL=security.module.js.map