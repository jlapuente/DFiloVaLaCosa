import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string): any {
    if (value && value.length > 0) {
      marked.setOptions({
        gfm: true,        // Habilita GitHub Flavored Markdown
        breaks: true      // Convierte saltos de línea en <br>
      });
      return marked(value);
    }
    return value;
  }
}
