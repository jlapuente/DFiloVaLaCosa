import { Injectable } from '@angular/core';
import { FeaturedImage } from '../classes/featuredImage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  createImage(image: any): FeaturedImage {
    let featuredImage: FeaturedImage = new FeaturedImage(image.fields.title, image.fields.description, image.fields.file.url);
    return featuredImage;
  }
}
