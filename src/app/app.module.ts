import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { MdToHtmlPipe } from './integration/pipes/md-to-html.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { TruncatePipe } from './integration/pipes/truncate.pipe';
import { SocialIconDirective } from './integration/directives/social-icon.directive';
import { NavbarComponent } from './lib/navbar/navbar.component';
import { PreloaderComponent } from './lib/preloader/preloader.component';
import { FooterComponent } from './lib/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
