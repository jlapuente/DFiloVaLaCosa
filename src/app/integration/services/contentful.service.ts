import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  private client = createClient({
    space: environment.space,
    accessToken: Constants.CONTENTFUL_ACCESS_TOKEN
  })

  getAllEntries() {
    const promise = this.client.getEntries();
    return from(promise);
  }
  getLatestEntries() {
    const promise = this.client.getEntries(
      {
        "limit": 4,
        content_type: "blogPost",
        "fields.visible": "true",
        "fields.deleted": "false"
      });
    return from(promise);
  }

  getTenEntries(entriesToSkip: number) {
    const promise = this.client.getEntries({
      "skip": entriesToSkip,
      "limit": 2,
      // "order": "sys.createdAt"
    })
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntry(id);
    return from(promise)
  }

  getEntryByUrl(url: string) {
    const promise = this.client.getEntries({
      content_type: "blogPost",
      "fields.urlHandler": url,
      "fields.deleted": "false"
    });
    return from(promise)
  }

  test() {
    this.client.getEntries({
      content_type: "blogPost",
      "fields.authorReference.fields.id": "javier-lapuente",
      "fields.visible": "true"
    }).then(data => console.log(data));
  }

  getEntriesByAuthor(limit: number, author: string) {
    const promise = this.client.getEntries(
      {
        "limit": limit,
        content_type: "blogPost",
        "fields.authorReference.sys.contentType.sys.id": "author",
        "fields.authorReference.fields.id": author,
        "fields.visible": "true",
        "fields.deleted": "false"
      });
    return from(promise);
  }

}
