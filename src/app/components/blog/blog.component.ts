import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NavBarActions } from 'src/app/integration/classes/navbar_actions';
import { TruncatePipe } from 'src/app/integration/pipes/truncate.pipe';
import { MapUtils } from 'src/app/integration/services/mapUtils';
import { Post } from '../../integration/classes/post';
import { ContentfulService } from '../../integration/services/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

  private router = inject(Router);

  post: Post | null = null;

  actions: NavBarActions[] = [
    {
      name: 'Home',
      alt: 'Go to home page',
      action: () => this.router.navigate(['/home']),
      isActive: false
    },
    {
      name: 'Posts',
      alt: 'Go to the post list',
      action: () => this.router.navigate(['/blogs']),
      isActive: true
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private contentfulService: ContentfulService,
    private truncatePipe: TruncatePipe,
    private titleService: Title,
    private metaTagService: Meta,
    private mapUtils: MapUtils
  ) { }

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params =>
          this.contentfulService.getEntryByUrl(params['id'])
        )
      )
      .subscribe(data => {
        const entry = data.items[0];
        this.post = this.mapUtils.mapPost(entry);
        this.updateMetaTags();
      });
  }

  private updateMetaTags(): void {
    if (!this.post) return;

    const truncateParams = [180, '...'];

    this.titleService.setTitle(this.post.title);

    this.metaTagService.updateTag({
      name: 'description',
      content: 'Articulo filosófico - ' + this.post.title
    });

    this.metaTagService.updateTag({
      name: 'keywords',
      content: 'blog, filosofía, ' + this.post.tags.join(', ')
    });

    this.metaTagService.updateTag({
      name: 'author',
      content: this.post.author.name
    });

    this.metaTagService.updateTag({
      property: 'og:title',
      content: this.post.title
    });

    this.metaTagService.updateTag({
      property: 'og:description',
      content: this.truncatePipe.transform(this.post.summary, truncateParams)
    });

    this.metaTagService.updateTag({
      name: 'twitter:title',
      content: this.post.title
    });

    this.metaTagService.updateTag({
      name: 'twitter:description',
      content: this.truncatePipe.transform(this.post.summary, truncateParams)
    });
  }
}
