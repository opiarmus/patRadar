import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminComponent } from './components/admin/admin.component';
import { ViewerComponent } from './components/viewer/viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    ViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
