import { Component } from '@angular/core';
import { LoggerService } from 'src/service/logger.service';

@Component({
    templateUrl: "./home.view.html"
})

export class HomeComponent {
    Logger: LoggerService = null;

    constructor(private logger: LoggerService) {
        this.Logger = logger;
        this.Logger.Log();
    }
}