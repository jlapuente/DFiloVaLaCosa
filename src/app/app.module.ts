import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialIconDirective } from './integration/directives/social-icon.directive';
import { MdToHtmlPipe } from './integration/pipes/md-to-html.pipe';
import { TruncatePipe } from './integration/pipes/truncate.pipe';
import { FooterComponent } from './lib/footer/footer.component';
import { NavbarComponent } from './lib/navbar/navbar.component';
import { PreloaderComponent } from './lib/preloader/preloader.component';
import { PostCardComponent } from './lib/post-card/post-card.component';
import { PostSkeletonComponent } from './lib/post-skeleton/post-skeleton.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    BlogListComponent,
    MdToHtmlPipe,
    TruncatePipe,
    ProfileComponent,
    SocialIconDirective,
    NavbarComponent,
    PreloaderComponent,
    FooterComponent,
    PostCardComponent,
    PostSkeletonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
