import { HomeComponent } from './views/home/home.component';
export var AppRoute = [
    { path: '', component: HomeComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'UserSearch', loadChildren: './views/security/security.module#SecurityModule' }
];
//# sourceMappingURL=app.router.js.map