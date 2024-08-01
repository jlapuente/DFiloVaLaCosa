import { Author } from "./author";
import { FeaturedImage } from "./featuredImage";

export class Post {
    constructor(
        public title: string = '',
        public urlHandler: string = '',
        public featuredImage: FeaturedImage = new FeaturedImage('', '', ''),
        public summary: string = '',
        public content: string = '',
        public author: Author = new Author('', '', '', '', new FeaturedImage('', '', ''), '', new Date(), []),
        public updatedDate: Date = new Date(),
        public visible: boolean = true,
        public tags: string[] = []
    ) { }

    // Optional: Custom getters and setters if additional logic is needed
    getTitle(): string {
        return this.title;
    }

    setTitle(value: string): void {
        this.title = value;
    }

    getUrlHandler(): string {
        return this.urlHandler;
    }

    setUrlHandler(value: string): void {
        this.urlHandler = value;
    }

    getFeaturedImage(): FeaturedImage {
        return this.featuredImage;
    }

    setFeaturedImage(value: FeaturedImage): void {
        this.featuredImage = value;
    }

    getSummary(): string {
        return this.summary;
    }

    setSummary(value: string): void {
        this.summary = value;
    }

    getContent(): string {
        return this.content;
    }

    setContent(value: string): void {
        this.content = value;
    }

    getAuthor(): Author {
        return this.author;
    }

    setAuthor(value: Author): void {
        this.author = value;
    }

    getUpdatedDate(): Date {
        return this.updatedDate;
    }

    setUpdatedDate(value: Date): void {
        this.updatedDate = value;
    }

    getVisible(): boolean {
        return this.visible;
    }

    setVisible(value: boolean): void {
        this.visible = value;
    }

    getTags(): string[] {
        return this.tags;
    }

    setTags(value: string[]): void {
        this.tags = value;
    }
}
