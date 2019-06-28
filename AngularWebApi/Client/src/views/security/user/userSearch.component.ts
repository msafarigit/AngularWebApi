import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { DataService } from 'src/service/data.service';
import { LoggerService } from 'src/service/logger.service';

@Component({
    templateUrl: "./userSearch.view.html"
})

export class UserSearchComponent implements OnInit {
    Logger: LoggerService = null;
    UserList: Array<UserModel> = new Array<UserModel>();

    constructor(private dataService: DataService, private logger: LoggerService) {
        this.Logger = logger;
        this.Logger.Log();

        var User = new UserModel();
        User.Name = "Hasan";
        User.Username = "HS";
        User.Password = "12345";
        this.UserList.push(User);

        User = new UserModel();
        User.Name = "Mohammad";
        User.Username = "MM";
        User.Password = "87647";
        this.UserList.push(User);
    }

    ngOnInit() {
    }

    Add() {
        //this.UserList.push(this.User);
        //this.User = new UserModel();
    }

    Select(user: UserModel) {
        console.log(user.Name);
    }
}