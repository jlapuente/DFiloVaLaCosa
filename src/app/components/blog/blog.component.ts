import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from '../../integration/services/contentful.service';
import { Observable, from } from 'rxjs';
import { Options, documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS, Block } from '@contentful/rich-text-types';
import { Post } from '../../integration/classes/post';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { ImageService } from 'src/app/integration/services/image.service';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  blogPosts$: Observable<any> | undefined;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService, private imageService: ImageService, private titleService: Title,
    private metaTagService: Meta) {

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
            console.log(entry);
            console.log(entry.fields['content']);
            entry.fields['tittle'] != null ? this.post.$tittle = String(entry.fields['tittle']) : this.post.$tittle = "";
            entry.fields['urlHandler'] != null ? this.post.$urlHandler = String(entry.fields['urlHandler']) : this.post.$urlHandler = "";
            entry.fields['featuredImage'] != null ? this.post.$featuredImage = this.imageService.createImage(entry.fields['featuredImage']) : new FeaturedImage('', '', '',);
            entry.fields['summary'] != null ? this.post.$summary = String(entry.fields['summary']) : this.post.$summary = "";
            entry.fields['content'] != null ? this.post.$content = this._returnHtmlFromRichText(entry.fields['content']) : this.post.$content = "";
            entry.fields['author'] != null ? this.post.$author = String(entry.fields['author']) : this.post.$author = "";
            entry.fields['updatedDate'] != null ? this.post.$updatedDate = new Date(String(entry.fields['updatedDate'])) : this.post.$updatedDate = new Date();
            entry.fields['visible'] != null ? this.post.$visible = Boolean(String(entry.fields['visible'])) : this.post.$visible = false;

            this.updateMetaTags();
            $('#js-preloader').addClass('loaded');
          });
      }
    )
  }

  updateMetaTags() {
    this.titleService.setTitle(this.post.$tittle);
    this.metaTagService.addTags([
      { name: 'keywords', content: 'blog, filosofía,' + this.post.$tags.join(',') },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: this.post.$author },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: this.post.$updatedDate.toISOString(), scheme: 'DD-MM-YYYY' },
      { charset: 'UTF-8' }
    ]);
    this.metaTagService.updateTag(
      { name: 'description', content: 'Articulo filosófico - ' + this.post.$tittle }
    );
  }

  _returnHtmlFromRichText(richText: any): string {
    const options: Options = {
      renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: ({ data: { target: { fields } } }) =>
          `<p class='asset-container'>
          <img class='post-image' src="${fields.file.url}" alt="${fields.title}"
           height=${fields.file.details.image.height} width=${fields.file.details.image.width}/>
           <small class='subtext'>${fields.description}</small>
           </p>`,
        [BLOCKS.HEADING_1]: (node, next) => (`<h2 class='titulo'> ${next(node.content)} </h2>`),
        [BLOCKS.HEADING_2]: (node, next) => (`<h3> ${next(node.content)} </h3>`),
        [BLOCKS.HEADING_3]: (node, next) => (`<h4> ${next(node.content)} </h4>`),
        [BLOCKS.HEADING_4]: (node, next) => (`<h5> ${next(node.content)} </h5>`),
        [BLOCKS.HEADING_5]: (node, next) => (`<h6> ${next(node.content)} </h6>`),
        [BLOCKS.HEADING_6]: (node, next) => (`<h6> ${next(node.content)} </h6>`)
      }
    };

    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }

}
