import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialIconDirective } from '../integration/directives/social-icon.directive';
import { MdToHtmlPipe } from '../integration/pipes/md-to-html.pipe';
import { TruncatePipe } from '../integration/pipes/truncate.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostSkeletonComponent } from './post-skeleton/post-skeleton.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    FooterComponent,
    MdToHtmlPipe,
    NavbarComponent,
    PostCardComponent,
    PostSkeletonComponent,
    PreloaderComponent,
    SocialIconDirective,
    TruncatePipe
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    FooterComponent,
    MdToHtmlPipe,
    NavbarComponent,
    PostCardComponent,
    PostSkeletonComponent,
    PreloaderComponent,
    SocialIconDirective,
    TruncatePipe
  ],
  providers: [TruncatePipe]
})
export class SharedModule { }
