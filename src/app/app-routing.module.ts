import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./pages/admin/admin.component";
import { ViewerComponent } from "./pages/viewer/viewer.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'viewer', component: ViewerComponent },
  { path: 'viewer/:id', component: ViewerComponent },
  { path: '', redirectTo: '/viewer', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
