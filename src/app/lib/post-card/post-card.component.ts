import { Component, Input } from '@angular/core';
import { Post } from 'src/app/integration/classes/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {

  @Input() post!: Post;
  @Input() showReadMore: boolean = false;
  @Input() truncateLength: number = 360;

}
