import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SecurityRoute } from './security.router';
import { UserSearchComponent } from './user/userSearch.component';
import { UserInfoComponent } from './user/userInfo.component';

@NgModule({
    declarations:[
        UserSearchComponent,
        UserInfoComponent
    ],
    imports:[
        RouterModule.forChild(SecurityRoute),
        CommonModule,
        FormsModule
    ],
    providers:[],
    bootstrap:[UserSearchComponent]
})

export class SecurityModule { }