import { CreateComponent } from './pages/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './core/components/login/login.component';
import { ListComponent } from './pages/list/list.component';
import { AgentesComponent } from './pages/asistentes/agentes.component';
import { ChatComponent } from './shared/chat/chat.component';

const routes: Routes = [
  { path: 'anadir', component: CreateComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'agentes', component: AgentesComponent },
  { path: 'chat/:tipo', component: ChatComponent },
  { path: '', pathMatch:'full', redirectTo:'list'},
  { path: '**', pathMatch:'full', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
