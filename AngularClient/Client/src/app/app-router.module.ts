import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { KlassesComponent } from './klasses/klasses.component';

const routes: Routes = [
  { path: '', component: KlassesComponent },
  { path: 'klasses', component: KlassesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule {}
