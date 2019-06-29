import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:61757/api/';
    }
    DataService.prototype.get = function (controllerName) {
        return this.http.get(this.baseUrl + controllerName);
    };
    DataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//To define a class as a service in Angular, use the @Injectable() decorator to provide the metadata that allows Angular to inject it into a component as a dependency.
//  Similarly, use the @Injectable() decorator to indicate that a component or other class (such as another service, a pipe, or an NgModule) has a dependency.
//Providing services: You must register at least one provider of any service you are going to use.
//  The provider can be part of the service's own metadata, making that service available everywhere, 
//  or you can register providers with specific modules or components.
//  You register providers in the metadata of the service(in the @Injectable() decorator), or in the @NgModule() or @Component() metadata
//1- When you provide the service at the root level, Angular creates a single, shared instance of Service and injects it into any class that asks for it.
//  Registering the provider in the @Injectable() metadata also allows Angular to optimize an app by removing the service from the compiled app if it isn't used.
//2- When you register a provider with a specific NgModule, the same instance of a service is available to all components in that NgModule.
//  To register at this level, use the providers property of the @NgModule() decorator,
/*  @NgModule({
        providers: [
            Service
        ],
        ...
    })
*/
//3- When you register a provider at the component level, you get a new instance of the service with each new instance of that component.
//  At the component level, register a service provider in the providers property of the @Component() metadata.
/*  @Component({
        selector: 'app-hero-list',
        templateUrl: './hero-list.component.html',
        providers: [HeroService]
    })
*/ 
//# sourceMappingURL=data.service.js.map