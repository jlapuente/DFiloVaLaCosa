import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  // },
  {
    path: '',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    title: 'Philosophy Blog'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
