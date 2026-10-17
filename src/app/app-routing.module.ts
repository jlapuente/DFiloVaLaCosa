import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

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
    redirectTo: 'blogs/:id',
    pathMatch: 'full'
  },
  {
    path: 'blogs',
    loadChildren: () => import('./components/blog/blog-feature.module').then(module => module.BlogFeatureModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./components/profile/profile-feature.module').then(module => module.ProfileFeatureModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
