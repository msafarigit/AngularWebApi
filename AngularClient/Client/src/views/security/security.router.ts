import { Routes } from '@angular/router';
import { UserSearchComponent } from './user/userSearch.component';
import { UserInfoComponent } from './user/userInfo.component';

export const SecurityRoute : Routes = [
    { path: '', component: UserSearchComponent },
    { path: 'Add', component: UserInfoComponent }
]