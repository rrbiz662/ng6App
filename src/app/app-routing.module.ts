import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: 'users/:userid', component: UserComponent},
  {path: 'users', component: UsersComponent},
  {path: 'posts', component: PostsComponent},
  {path: '', redirectTo: '/users', pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
