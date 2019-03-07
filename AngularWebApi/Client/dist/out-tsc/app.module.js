import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoute } from './app.router';
import { AppComponent } from './views/main/app.component';
import { HomeComponent } from './views/home/home.component';
import { DataService } from './service/data.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent
            ],
            imports: [
                RouterModule.forRoot(AppRoute),
                BrowserModule,
                FormsModule,
                HttpClientModule
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
/*
Add declarable classes—components, directives, and pipes—to a declarations list.
The root application module, AppModule, of almost every browser application should import BrowserModule from @angular/platform-browser.
BrowserModule provides services that are essential to launch and run a browser app
*/ 
//# sourceMappingURL=app.module.js.map