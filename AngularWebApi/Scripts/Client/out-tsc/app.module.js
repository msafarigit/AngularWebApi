import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoute } from './app.router';
import { AppComponent } from './views/main/app.component';
import { HomeComponent } from './views/home/home.component';
import { LoggerService, DbLoggerService, FileLoggerService } from './service/logger.service';
//http get for have all logger
var providers = [
    { provide: LoggerService, useClass: DbLoggerService },
    { provide: "1", useClass: FileLoggerService } //Conditional DI, Lookup injector.get()
];
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
            providers: providers,
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//Decorators are proposed for a future version of JavaScript, but the Angular team really wanted to use them,
//  and they have been included in TypeScript.
//Decorators are functions that are invoked with a prefixed @symbol, 
//  and immediately followed by a class, parameter, method or property.
//  The decorator function is supplied information about the class, parameter or method,
//  and the decorator function returns something in its place, or manipulates its target in some way.
//  Typically the "something" a decorator returns is the same thing that was passed in, but it has been augmented in some way.
//An NgModule is a class marked by the @NgModule decorator. @NgModule takes a metadata object that describes how to compile a component's template and
//how to create an injector at runtime.It identifies the module 's own components, directives, and pipes, making some of them public,
//through the exports property, so that external components can use them. @NgModule can also add service providers to the application dependency injectors.
//NgModules are classes decorated with @NgModule. The @NgModule decorator’s imports array tells Angular what other NgModules the current module needs.
//An NgModule describes how the application parts fit together. Every application has at least one Angular module, the root module that you bootstrap to launch the application. By convention, it is usually called AppModule.
//The @NgModule decorator identifies AppModule as an NgModule class. @NgModule takes a metadata object that tells Angular how to compile and launch the application.
//  declarations: this application's lone component.
//  imports: import BrowserModule to have browser specific services such as DOM rendering, sanitization, and location.
//  providers: the service providers.
//  bootstrap: the root component that Angular creates and inserts into the index.html host web page.
//Add declarable classes—components, directives, and pipes—to a declarations list.
//The root application module, AppModule, of almost every browser application should import BrowserModule from @angular/platform-browser.
//BrowserModule provides services that are essential to launch and run a browser app
//FormsModule: Exports the required providers and directives for template-driven forms, making them available for import by NgModules that import this module.
//# sourceMappingURL=app.module.js.map