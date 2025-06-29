import { Injectable } from '@angular/core';
import { FeaturedImage } from '../classes/featuredImage';
import { Entry, EntryCollection, EntrySkeletonType } from 'contentful';
import { Post } from '../classes/post';
import { ImageService } from './image.service';
import { Author } from '../classes/author';
import { Options, documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { ContentfulService } from './contentful.service';
@Injectable({
  providedIn: 'root'
})
export class MapUtils {
  constructor(private imageService: ImageService, private contentfulService: ContentfulService) { }


  private getFieldValue<T>(field: T | undefined, defaultValue: T): string {
    let value = String(field);
    return value ?? defaultValue;
  }
  private getBooleanValue<T>(field: T | undefined, defaultValue: T): boolean {
    let value = Boolean(field);
    return value ?? defaultValue;
  }
  private getDateValue<T>(field: T): Date {
    let value = new Date(String(field));
    return value ?? new Date();
  }

  mapPost(entry: Entry<EntrySkeletonType, undefined, string>) : Post {
    let post: Post = new Post();
    post.title = this.getFieldValue(entry.fields['tittle'], '');
    post.urlHandler = this.getFieldValue(entry.fields['urlHandler'], '');
    post.featuredImage = entry.fields['featuredImage'] ? this.imageService.createImage(entry.fields['featuredImage']) : new FeaturedImage();
    post.summary = this.getFieldValue(entry.fields['summary'], '');
    post.content = entry.fields['content'] ? this._returnPostHtmlFromRichText(entry.fields['content']) : '';
    post.author = entry.fields['authorReference'] ? this.createAuthor(entry.fields['authorReference']) : new Author();
    post.updatedDate = this.getDateValue(entry.fields['updatedDate']);
    post.visible = this.getBooleanValue(entry.fields['visible'], false);

    if (entry.fields['tags']) {
      let tags: any = entry.fields['tags'];
      post.tags = tags;
    }
    return post;
  }

  mapPostPreview(entry: Entry<EntrySkeletonType, undefined, string>): Post {
    let post: Post = new Post();
    post.title = this.getFieldValue(entry.fields['tittle'], '');
    post.urlHandler = this.getFieldValue(entry.fields['urlHandler'], '');
    post.featuredImage = entry.fields['featuredImage'] ? this.imageService.createImage(entry.fields['featuredImage']) : new FeaturedImage();
    post.summary = this.getFieldValue(entry.fields['summary'], '');
    post.author = entry.fields['authorReference'] ? this.createReducedAuthor(entry.fields['authorReference']) : new Author();
    post.updatedDate = this.getDateValue(entry.fields['updatedDate']);
    if (entry.fields['tags']) {
      let tags: any = entry.fields['tags'];
      post.tags = tags;
    }
    return post;
  }

  mapProfile(entry: Entry<EntrySkeletonType, undefined, string>) {
    let author: Author = new Author();
    author.name = this.getFieldValue(entry.fields['name'], "");
    author.location = this.getFieldValue(entry.fields['location'], "");
    author.profileImage = entry.fields['profileImage'] ? this.imageService.createImage(entry.fields['profileImage']) : new FeaturedImage();
    author.id = this.getFieldValue(entry.fields['id'], "");
    author.description = entry.fields['description'] ? this._returnDescriptionFromRichText(entry.fields['description']) :  "";
    author.birthdate = this.getDateValue(entry.fields['birthday']);
    author.pronouns = this.getFieldValue(entry.fields['pronouns'], "");

    let socialMedia: any = entry.fields['socialMedia']
    author.socialMedia = socialMedia;

    this.contentfulService.getEntriesByAuthor(2, author.id).subscribe(entries => {
      entries.items.forEach(entryElement => {
        author.entries.push(this.mapPostPreview(entryElement))
      });
      console.log(entries)
    });

    return author;
  }

  private _returnDescriptionFromRichText(richText: any): string {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }

  mapAuthorEntries(entries: EntryCollection<EntrySkeletonType, undefined, string>, author: Author) : Author{
    entries.items.forEach(entryElement => {
      author.entries.push(this.mapPostPreview(entryElement))
    });
    return author;
  }

  _returnPostHtmlFromRichText(richText: any): string {
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
        [BLOCKS.HEADING_6]: (node, next) => (`<h6> ${next(node.content)} </h6>`),
        [BLOCKS.PARAGRAPH]: (node, next) => {
          const content = next(node.content).trim();
          if (!content || content === '') {
            return '<p><br></p>';  // Si está vacío, inserta un <br> o un párrafo vacío
          }
          return `<p>${content}</p>`;
        },
      }
    };

    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText, options);
  }

  createAuthor(entry: any): Author {
    let field = entry.fields;
    return new Author(field.name, field.id, field.pronouns, field.description, this.imageService.createImage(field.profileImage), field.location, field.birthdate, field.socialMedia);
  }
  createReducedAuthor(entry: any): Author {
    let field = entry.fields;

    return new Author(this.getReducedName(field.name), field.id);
  }

  getReducedName(name: string) {
  if (typeof name !== "string") return "";

  const words = name.trim().split(/\s+/);
  const firstName = words[0] || "";
  const surname = words[1] || "";

  return `${firstName} ${surname}`.trim();
  }
}
