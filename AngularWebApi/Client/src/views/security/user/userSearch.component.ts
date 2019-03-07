import { Component, OnInit } from '@angular/core';
import { UserModel } from './user.model';
import { DataService } from 'src/service/data.service';

@Component({
    templateUrl: "./userSearch.view.html"
})
export class UserSearchComponent implements OnInit {
    UserList: Array<UserModel> = new Array<UserModel>();

    constructor(private dataService : DataService) { }


    Add() {
        //this.UserList.push(this.User);
        //this.User = new UserModel();
    }

    ngOnInit() {        

    }
}