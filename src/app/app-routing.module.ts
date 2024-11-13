import { CreateComponent } from './pages/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';

const routes: Routes = [
  { path: 'anadir', component: CreateComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch:'full', redirectTo:'list'},
  { path: '**', pathMatch:'full', redirectTo:'anadir'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
