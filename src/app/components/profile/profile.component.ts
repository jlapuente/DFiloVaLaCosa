import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../../integration/classes/author';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { AuthorService } from '../../integration/services/author.service';
import { MapUtils } from 'src/app/integration/services/mapUtils';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

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

}
