import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';

@Pipe({
  name: 'mdToHtml'
})
export class MdToHtmlPipe implements PipeTransform {

  transform(value: string, inline: boolean = false): any {
    if (value && value.length > 0) {
      marked.setOptions({
        gfm: true,        // Habilita GitHub Flavored Markdown
        breaks: true      // Convierte saltos de línea en <br>
      });
      return inline
        ? marked.parseInline(value.replace(/\r?\n+/g, ' '))
        : marked(value);
    }
    return value;
  }
}
