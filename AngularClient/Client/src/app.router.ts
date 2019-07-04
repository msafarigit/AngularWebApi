import { HomeComponent } from './views/home/home.component';
import { Routes } from '@angular/router';

export const AppRoute : Routes = [
    { path:'', component: HomeComponent },
    { path:'Home', component: HomeComponent },
    { path: 'UserSearch', loadChildren: './views/security/security.module#SecurityModule' }

]

/*
 Router:
  Router.events provides events as observables.
  You can use the filter() operator from RxJS to look for events of interest, 
  and subscribe to them in order to make decisions based on the sequence of events in the navigation process. Here's an example:

Router events sample:

import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-routable',
  templateUrl: './routable.component.html',
  styleUrls: ['./routable.component.css']
})

export class Routable1Component implements OnInit {

  navStart: Observable<NavigationStart>;

  constructor(private router: Router) {

    // Create a new Observable that publishes only the NavigationStart event
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;

  }

  ngOnInit() {
    this.navStart.subscribe(evt => console.log('Navigation Started!'));
  }
}
*/

/*
 The ActivatedRoute is an injected router service that makes use of observables to get information about a route path and parameters. 
 For example, ActivateRoute.url contains an observable that reports the route path or paths. Here's an example:

ActivatedRoute sample:

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routable',
  templateUrl: './routable.component.html',
  styleUrls: ['./routable.component.css']
})

export class Routable2Component implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.url.subscribe(url => console.log('The URL changed to: ' + url));
  }
}

*/