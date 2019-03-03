import { HomeComponent } from './views/home/home.component';
import { Routes } from '@angular/router';

export const AppRoute : Routes = [
    { path:'', component: HomeComponent },
    { path:'Home', component: HomeComponent },
    { path: 'UserSearch', loadChildren: './views/security/security.module#SecurityModule' }

]

