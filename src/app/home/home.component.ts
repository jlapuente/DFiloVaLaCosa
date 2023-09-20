import { Component } from '@angular/core';
import { ContentfulService } from '../integration/services/contentful.service';
import { Observable } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private contentfulService: ContentfulService) { }

  // blogPosts$ : Observable<any> | undefined;
  posts: any[] = [];

  ngOnInit(): void {
    this.contentfulService.getLatestEntries().subscribe(data => {
      $('#js-preloader').addClass('loaded');
      console.log(data);
      this.posts = data.items;
      console.log(this.posts);
    });
  }

}
