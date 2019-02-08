import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';
//Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodiesComponent } from './body/bodies.component';
import { FooterComponent } from './footer/footer.component';
//Service
import { DataService } from './data.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                BodiesComponent,
                HeaderComponent,
                FooterComponent
            ],
            imports: [
                BrowserModule,
                AppRouterModule
            ],
            providers: [
                DataService
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map