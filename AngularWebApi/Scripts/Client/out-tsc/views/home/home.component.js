import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoggerService } from 'src/service/logger.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(logger) {
        this.logger = logger;
        this.Logger = null;
        this.Logger = logger;
        this.Logger.Log();
    }
    HomeComponent = tslib_1.__decorate([
        Component({
            templateUrl: "./home.view.html"
        }),
        tslib_1.__metadata("design:paramtypes", [LoggerService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map