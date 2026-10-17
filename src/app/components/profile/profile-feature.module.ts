import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../lib/shared.module';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  { path: ':id', component: ProfileComponent, title: 'Perfil del autor' }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)]
})
export class ProfileFeatureModule { }
