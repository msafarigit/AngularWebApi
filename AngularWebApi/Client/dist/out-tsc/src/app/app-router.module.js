import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
//Components
import { BodiesComponent } from './body/bodies.component';
var routes = [
    { path: '', component: BodiesComponent },
    { path: 'default', component: BodiesComponent }
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRouterModule);
    return AppRouterModule;
}());
export { AppRouterModule };
//# sourceMappingURL=app-router.module.js.map