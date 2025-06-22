import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../../integration/classes/author';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { AuthorService } from '../../integration/services/author.service';
import { MapUtils } from 'src/app/integration/services/mapUtils';
import { NavBarActions } from 'src/app/integration/classes/navbar_actions';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  private router = inject(Router);
  actions: NavBarActions[] = [
    {
      name: 'Home',
      alt: 'Go to home page',
      action: () => {
        this.router.navigate(['/home']);
      },
      isActive: false
    },
    {
      name: 'Posts',
      alt: 'Go to the post list',
      action: () => {
        this.router.navigate(['/blogs']);
      },
      isActive: true
    },
  ]

  author$: Observable<any> | undefined;
  author: Author = new Author('', '', '', '', new FeaturedImage('', '', ''), '', new Date(), []);
  constructor(private route: ActivatedRoute, private authorService: AuthorService, private mapUtils: MapUtils) {
    console.log(route);
  }


  ngOnInit() {
    $('#js-preloader').addClass('loaded');
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.authorService.getEntryById(id).subscribe(data => {
          let entry = data.items[0];
          if(entry == undefined) return;
          this.author = this.mapUtils.mapProfile(entry);
          console.log(entry);
          $('#js-preloader').addClass('loaded');
        })
      })
  }

  getDisplayName(url: string): string {
    const decodedUrl = decodeURIComponent(url);

    if (decodedUrl.includes('twitter.com')) {
      const twitterUsername = decodedUrl.split('twitter.com/')[1];
      return `@${twitterUsername}`;
    } else if (decodedUrl.includes('linkedin.com/in/')) {
      const linkedinProfile = decodedUrl.split('linkedin.com/in/')[1];
      return linkedinProfile ? linkedinProfile.replace('/', '') : decodedUrl;
    } else if (decodedUrl.includes('instagram.com/')) {
      const instagramUsername = decodedUrl.split('instagram.com/')[1];
      return instagramUsername ? `@${instagramUsername.split('/')[0]}` : decodedUrl;
    }
    return decodedUrl;
  }

}
