import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../../integration/classes/author';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { AuthorService } from '../../integration/services/author.service';
import { ImageService } from '../../integration/services/image.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulService } from 'src/app/integration/services/contentful.service';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  author$: Observable<any> | undefined;
  author: Author = new Author('', '', '', '', new FeaturedImage('', '', ''), '', new Date(), []);
  constructor(private route: ActivatedRoute, private authorService: AuthorService, private contentfulService: ContentfulService, private imageService: ImageService) {
    console.log(route);
  }


  ngOnInit() {
    $('#js-preloader').addClass('loaded');
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.authorService.getEntryById(id).subscribe(data => {
          console.log(data)
          let entry = data.items[0];
          console.log(entry);
          if(entry == undefined) return;
          const assignValue = (field: any, defaultValue: any) => field != null ? field : defaultValue;

          this.author.name = String(assignValue(entry.fields['name'], ""));
          this.author.location = String(assignValue(entry.fields['location'], ""));
          this.author.profileImage = assignValue(this.imageService.createImage(entry.fields['profileImage']), new FeaturedImage('', '', '',));
          this.author.id = String(assignValue(entry.fields['id'], ""));
          this.author.description = assignValue(this._returnHtmlFromRichText(entry.fields['description']), "");
          this.author.birthdate = new Date(String(assignValue(entry.fields['birthdate'], new Date())));
          this.author.pronouns = String(assignValue(entry.fields['pronouns'], ""));

          let socialMedia: any = entry.fields['socialMedia']
          this.author.socialMedia.push(socialMedia);
          console.log(entry);

          let entries: any = this.contentfulService.getEntriesByAuthor(3, this.author.name);
          console.log(entries)
          $('#js-preloader').addClass('loaded');
        })
      })
  }

  _returnHtmlFromRichText(richText: any): string {

    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
