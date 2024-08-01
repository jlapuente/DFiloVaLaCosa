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
import { Author } from 'src/app/integration/classes/author';
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

  post: Post = new Post('', '', new FeaturedImage(), '', '', new Author(), new Date(), false);

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.contentfulService.getEntryByUrl(id)
          .subscribe(data => {
            let entry = data.items[0];
            console.log(entry);
            entry.fields['tittle'] != null ? this.post.title = String(entry.fields['tittle']) : this.post.title = "";
            entry.fields['urlHandler'] != null ? this.post.urlHandler = String(entry.fields['urlHandler']) : this.post.urlHandler = "";
            entry.fields['featuredImage'] != null ? this.post.featuredImage = this.imageService.createImage(entry.fields['featuredImage']) : new FeaturedImage();
            entry.fields['summary'] != null ? this.post.summary = String(entry.fields['summary']) : this.post.summary = "";
            entry.fields['content'] != null ? this.post.content = this._returnHtmlFromRichText(entry.fields['content']) : this.post.content = "";
            entry.fields['authorReference'] != null ? this.post.author = this.createAuthor(entry.fields['authorReference']) : new Author();
            entry.fields['updatedDate'] != null ? this.post.updatedDate = new Date(String(entry.fields['updatedDate'])) : this.post.updatedDate = new Date();
            entry.fields['visible'] != null ? this.post.visible = Boolean(String(entry.fields['visible'])) : this.post.visible = false;
            if (entry.fields['tags']) {
              let tags: any = entry.fields['tags'];
              this.post.tags = tags;
            }
            console.log(this.post)
            this.updateMetaTags();
            $('#js-preloader').addClass('loaded');
          });
      }
    )
  }

  updateMetaTags() {
    this.titleService.setTitle(this.post.title);
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: this.post.author.name },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: this.post.updatedDate.toISOString(), scheme: 'DD-MM-YYYY' },
      { charset: 'UTF-8' }
    ]);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Articulo filosófico - ' + this.post.title }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: 'blog, filosofía,' + this.post.tags.join(', ') },
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

  createAuthor(entry: any): Author {
    console.log(entry);
    let field = entry.fields;
    let author: Author = new Author(field.name, field.id, field.pronouns, field.description, this.imageService.createImage(field.profileImage), field.location, field.birthdate, field.socialMedia);
    console.log(author);
    return author

  }

}
