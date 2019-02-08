import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRouterModule } from './app-router.module';

//Component
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodiesComponent } from './body/bodies.component';
import { FooterComponent } from './footer/footer.component';

//Service
import { DataService } from './data.service'

@NgModule({
  declarations: [
    AppComponent,
    BodiesComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
