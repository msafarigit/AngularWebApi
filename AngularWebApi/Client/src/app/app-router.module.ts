import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { BodiesComponent } from './body/bodies.component';

const routes: Routes = [
  { path: '', component: BodiesComponent },
  { path: 'default', component: BodiesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule {}
