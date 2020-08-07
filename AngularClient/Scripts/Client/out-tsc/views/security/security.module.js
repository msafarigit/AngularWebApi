import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SecurityRoute } from './security.router';
import { UserSearchComponent } from './user/userSearch.component';
import { UserInfoComponent } from './user/userInfo.component';
import { GridComponent } from 'src/component/grid/grid.component';
var SecurityModule = /** @class */ (function () {
    function SecurityModule() {
    }
    SecurityModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                UserSearchComponent,
                UserInfoComponent,
                GridComponent
            ],
            imports: [
                RouterModule.forChild(SecurityRoute),
                CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            providers: [],
            bootstrap: [UserSearchComponent]
        })
    ], SecurityModule);
    return SecurityModule;
}());
export { SecurityModule };
//Angular's own BrowserModule exports a couple of NgModules like this:
//  exports: [CommonModule, ApplicationModule]
//CommonModule ngmodule: Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.Re - exported by BrowserModule, 
//  which is included automatically in the root AppModule when you create a new app with the CLI new command.
//ApplicationModule ngmodule: Configures the root injector for an app with providers of @angular/core dependencies that ApplicationRef needs to bootstrap components.
//FormsModule ngmodule: Exports the required providers and directives for template - driven forms, making them available for import by NgModules that import this module.
//  such as: NgForm directive, NgModel directive, RequiredValidator directive
//  RequiredValidator: A directive that adds the required validator to any controls marked with the required attribute.The directive is provided with the NG_VALIDATORS multi - provider list.
//ReactiveFormsModule ngmodule: Exports the required infrastructure and directives for reactive forms, making them available for import by NgModules that import this module.
//  such as: FormBuilder provider, FormControlName directive, FormGroup directive: Binds an existing FormGroup to a DOM element.
//# sourceMappingURL=security.module.js.map