import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from '../blog-list/blog-list.component';
import { BlogComponent } from './blog.component';
import { SharedModule } from '../../lib/shared.module';

const routes: Routes = [
  { path: '', component: BlogListComponent, title: 'Post publicados' },
  { path: ':id', component: BlogComponent, title: 'Post' }
];

@NgModule({
  declarations: [BlogComponent, BlogListComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogFeatureModule { }
