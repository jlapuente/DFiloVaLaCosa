import { Pipe, PipeTransform } from '@angular/core';
// import marked from 'marked';
import * as marked from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);
    if (value && value.length > 0) {
      return marked.marked(value);
    }
    console.log(value);
    return value;
  }

}
