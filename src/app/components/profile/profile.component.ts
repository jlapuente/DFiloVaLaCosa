import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Author } from '../../integration/classes/author';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { AuthorService } from '../../integration/services/author.service';
import { ImageService } from '../../integration/services/image.service';
import { Options } from '@popperjs/core';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  author$: Observable<any> | undefined;
  author: Author = new Author('', '', '', '', new FeaturedImage('', '', ''), '', new Date(), []);
  constructor(private route: ActivatedRoute, private authorService: AuthorService, private imageService: ImageService) {
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
          entry.fields['name'] != null ? this.author.$name = String(entry.fields['name']) : this.author.$name = "";
          entry.fields['location'] != null ? this.author.$location = String(entry.fields['location']) : this.author.$location = "";
          entry.fields['profileImage'] != null ? this.author.$profileImage = this.imageService.createImage(entry.fields['profileImage']) : new FeaturedImage('', '', '',);
          entry.fields['id'] != null ? this.author.$id = String(entry.fields['id']) : this.author.$id = "";
          entry.fields['description'] != null ? this.author.$description = this._returnHtmlFromRichText(entry.fields['description']) : this.author.$description = "";
          entry.fields['birthdate'] != null ? this.author.$birthdate = new Date(String(entry.fields['birthdate'])) : this.author.$birthdate = new Date();
          entry.fields['pronouns'] != null ? this.author.$pronouns = String(entry.fields['pronouns']) : this.author.$pronouns = "";
          let socialMedia: any = entry.fields['socialMedia']
          this.author.$socialMedia.push(socialMedia);
          console.log(entry);
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
