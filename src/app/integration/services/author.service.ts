import { Injectable } from '@angular/core';
import { createClient } from 'contentful';
import { environment } from 'src/app/environments/environment';
import { Constants } from '../constants';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  private client = createClient({
    space: environment.space,
    accessToken: Constants.CONTENTFUL_ACCESS_TOKEN
  })

  getLatestEntries() {
    const promise = this.client.getEntries(
      {
        "limit": 4,
        content_type: "author",
        "fields.visible": "true"
      });
    return from(promise);
  }

  getEntryById(id: string) {
    const promise = this.client.getEntries({
      content_type: "author",
      "fields.id": id,
    });
    return from(promise)
  }
}
