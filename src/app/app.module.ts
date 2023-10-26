import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';
import { MdToHtmlPipe } from './integration/pipes/md-to-html.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogListComponent,
    MdToHtmlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
