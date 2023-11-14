import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/home',
  // },
  {
    path: '',
    component: HomeComponent,
    title: 'De Filo Va La Cosa'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'De Filo Va La Cosa'
  },
  {
    path: 'blog/:id',
    component: BlogComponent,
    title: 'Post'
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    title: 'Perfil del autor'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
