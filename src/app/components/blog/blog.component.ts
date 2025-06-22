import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentfulService } from '../../integration/services/contentful.service';
import { Observable } from 'rxjs';
import { Post } from '../../integration/classes/post';
import { FeaturedImage } from '../../integration/classes/featuredImage';
import { Meta, Title } from '@angular/platform-browser';
import { Author } from 'src/app/integration/classes/author';
import { MapUtils } from 'src/app/integration/services/mapUtils';
import { TruncatePipe } from 'src/app/integration/pipes/truncate.pipe';
import { NavBarActions } from 'src/app/integration/classes/navbar_actions';
declare var $: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private router = inject(Router);
  blogPosts$: Observable<any> | undefined;
   actions: NavBarActions[] = [
      {
        name: 'Home',
        alt: 'Go to home page',
        action: () => {
          this.router.navigate(['/home']);
        },
        isActive: false
      },
      {
        name: 'Posts',
        alt: 'Go to the post list',
        action: () => {
          this.router.navigate(['/blogs']);
        },
        isActive: true
      },
    ]

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService, private truncatePipe: TruncatePipe, private titleService: Title,
    private metaTagService: Meta, private mapUtils: MapUtils) {

  }

  post: Post = new Post('', '', new FeaturedImage(), '', '', new Author(), new Date(), false);
  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.contentfulService.getEntryByUrl(id)
          .subscribe(data => {
            let entry = data.items[0];
            this.post = this.mapUtils.mapPost(entry)
            console.log(this.post)
            this.updateMetaTags();
            $('#js-preloader').addClass('loaded');
          });
      }
    )
  }

  updateMetaTags() {
    const truncateParams = [180, '...'];
    this.titleService.setTitle(this.post.title);
    this.metaTagService.addTags([
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: this.post.author.name },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: this.post.updatedDate.toISOString(), scheme: 'DD-MM-YYYY' },
      { charset: 'UTF-8' }
    ]);

    this.metaTagService.updateTag(
      { name: 'description', content: 'Articulo filosófico - ' + this.post.title }
    );

    this.metaTagService.updateTag(
      { name: 'keywords', content: 'blog, filosofía,' + this.post.tags.join(', ') },
    );

    this.metaTagService.updateTag(
      { name: 'twitter:description', content: this.truncatePipe.transform(this.post.summary, truncateParams) },
    );
    this.metaTagService.updateTag(
      { name: 'twitter:title', content: this.post.title },
    );

    this.metaTagService.updateTag(
      { property: 'og:description', content: this.truncatePipe.transform(this.post.summary, truncateParams) },
    );
    this.metaTagService.updateTag(
      { property: 'og:title', content: this.post.title },
    );

  }

}
