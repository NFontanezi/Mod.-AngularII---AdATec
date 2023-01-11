import { ListComponent } from './users/components/list/list.component';
import { NotFoundComponent } from './users/components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { CreateUsersComponent } from './users/components/create-users/create-users.component';

const routes: Routes = [

  { path: 'users',
  component: UsersComponent,
  children:[
    {
      path: 'create',
      component: CreateUsersComponent,
    },
    {
      path: '',
      component: ListComponent
    }
  ]},


  { path: 'create-users',
  component: CreateUsersComponent},

  { path: '',
   redirectTo: 'users',
    pathMatch: 'full'},
  { path: '**', component: NotFoundComponent},
   //redireciona para outra rota, por default na raiz vai para users, add patchmatch

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
