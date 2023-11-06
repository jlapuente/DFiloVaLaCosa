import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../../integration/services/contentful.service';
import { Post } from '../../integration/classes/post';
declare var $: any;


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  page: number = 1;
  entries: any[] = [];
  ngOnInit(): void {

  }

  constructor(private _contentfulService: ContentfulService) {

  }

  getNextEntries() {
    this.loading(false);
    this._contentfulService.getTenEntries((this.page-1)*10).subscribe(data => {
      this.loading(true);
      this.entries = data.items;
      // console.log(this.entries);
    });
  }

  changePage(pageNumber: number) {
    this.page = pageNumber;
    this.getNextEntries();
  }

  loading(on: boolean) {
    on ? $('#js-preloader').addClass('loaded') : $('#js-preloader').removeClass('loaded');
  }
}
