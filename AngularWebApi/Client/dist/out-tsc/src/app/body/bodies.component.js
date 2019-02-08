import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
var BodiesComponent = /** @class */ (function () {
    function BodiesComponent(dataService) {
        this.dataService = dataService;
    }
    BodiesComponent.prototype.ngOnInit = function () {
        this.dataService.get('Values').subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.error(error);
        });
    };
    BodiesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bodies',
            templateUrl: './bodies.component.html',
            styleUrls: ['./bodies.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], BodiesComponent);
    return BodiesComponent;
}());
export { BodiesComponent };
//# sourceMappingURL=bodies.component.js.map