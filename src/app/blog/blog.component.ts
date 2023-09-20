import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../integration/services/contentful.service';
import { Observable, from } from 'rxjs';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Post } from '../integration/classes/post';
import { FeaturedImage } from '../integration/classes/featuredImage';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogPosts$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {

  }

  post: Post = new Post('', '', new FeaturedImage('', '', ''), '', '', '', new Date(), false);

  ngOnInit(): void {
    // this.contentfulService.test();
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.contentfulService.getEntryByUrl(id)
          .subscribe(data => {
            let entry = data.items[0];
            entry.fields['tittle'] != null ? this.post.$tittle = String(entry.fields['tittle']) : this.post.$tittle = "";
            entry.fields['urlHandler'] != null ? this.post.$urlHandler = String(entry.fields['urlHandler']) : this.post.$urlHandler = "";
            entry.fields['featuredImage'] != null ? this.post.$featuredImage = this.contentfulService.createImage(entry.fields['featuredImage']) : new FeaturedImage('', '', '');
            entry.fields['summary'] != null ? this.post.$summary = String(entry.fields['summary']) : this.post.$summary = "";
            entry.fields['content'] != null ? this.post.$content = this._returnHtmlFromRichText(entry.fields['content']) : this.post.$content = "";
            entry.fields['author'] != null ? this.post.$author = String(entry.fields['author']) : this.post.$author = "";
            entry.fields['updatedDate'] != null ? this.post.$updatedDate = new Date(String(entry.fields['updatedDate'])) : this.post.$updatedDate = new Date();
            entry.fields['visible'] != null ? this.post.$visible = Boolean(String(entry.fields['visible'])) : this.post.$visible = false;

            $('#js-preloader').addClass('loaded');
          });
      }
    )
  }


  _returnHtmlFromRichText(richText: any): string {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

}
