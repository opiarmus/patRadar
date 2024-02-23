import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { ViewerComponent } from "./components/viewer/viewer.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'viewer', component: ViewerComponent },
  // { path: 'tech/:id', component: TechnologyComponent },
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
