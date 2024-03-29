import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ViewerComponent } from './pages/viewer/viewer.component';
import { TechnologyFormComponent } from './components/technology-form/technology-form.component';
import { TechnologyListComponent } from './components/technology-list/technology-list.component';
import { TechnologyDetailDialogComponent } from './components/technology-detail-dialog/technology-detail-dialog.component';
import { LocalDatePipe } from './shared/pipes/local-date.pipe';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TextAbbrPipe } from './shared/pipes/text-abbr.pipe';
import { TechnologyEditListComponent } from './components/technology-edit-list/technology-edit-list.component';
import { TechnologyEditComponent } from './components/technology-edit/technology-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AdminComponent,
    ViewerComponent,
    TechnologyFormComponent,
    TechnologyListComponent,
    TechnologyDetailDialogComponent,
    LocalDatePipe,
    SnackbarComponent,
    TextAbbrPipe,
    TechnologyEditListComponent,
    TechnologyEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
