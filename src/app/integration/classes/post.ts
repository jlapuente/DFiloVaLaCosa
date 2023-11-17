import { FeaturedImage } from "./featuredImage";

export class Post {
    private tittle: string = '';
    private urlHandler: string = '';
    private featuredImage: FeaturedImage = new FeaturedImage('', '', '');
    private summary: string = '';
    private content: string = '';
    private author: string = '';
    private updatedDate: Date = new Date()
    private visible: boolean = true;
    private tags: string[] = [];


    constructor($tittle: string, $urlHandler: string, $featuredImage: FeaturedImage, $summary: string, $content: string, $author: string, $updatedDate: Date, $visible: boolean) {
        this.tittle = $tittle;
        this.urlHandler = $urlHandler;
        this.featuredImage = $featuredImage;
        this.summary = $summary;
        this.content = $content;
        this.author = $author;
        this.updatedDate = $updatedDate;
        this.visible = $visible;
    }

    /**
     * Getter $tittle
     * @return {string }
     */
    public get $tittle(): string {
        return this.tittle;
    }

    /**
     * Getter $urlHandler
     * @return {string }
     */
    public get $urlHandler(): string {
        return this.urlHandler;
    }

    /**
     * Getter $featuredImage
     * @return {string }
     */
    public get $featuredImage(): FeaturedImage {
        return this.featuredImage;
    }

    /**
     * Getter $summary
     * @return {string }
     */
    public get $summary(): string {
        return this.summary;
    }

    /**
     * Getter $content
     * @return {string }
     */
    public get $content(): string {
        return this.content;
    }

    /**
     * Getter $author
     * @return {string }
     */
    public get $author(): string {
        return this.author;
    }

    /**
     * Getter $updatedDate
     * @return {Date }
     */
    public get $updatedDate(): Date {
        return this.updatedDate;
    }

    /**
     * Getter $visible
     * @return {boolean }
     */
    public get $visible(): boolean {
        return this.visible;
    }

    /**
     * Setter $tittle
     * @param {string } value
     */
    public set $tittle(value: string) {
        this.tittle = value;
    }

    /**
     * Setter $urlHandler
     * @param {string } value
     */
    public set $urlHandler(value: string) {
        this.urlHandler = value;
    }

    /**
     * Setter $featuredImage
     * @param {string } value
     */
    public set $featuredImage(value: FeaturedImage) {
        this.featuredImage = value;
    }

    /**
     * Setter $summary
     * @param {string } value
     */
    public set $summary(value: string) {
        this.summary = value;
    }

    /**
     * Setter $content
     * @param {string } value
     */
    public set $content(value: string) {
        this.content = value;
    }

    /**
     * Setter $author
     * @param {string } value
     */
    public set $author(value: string) {
        this.author = value;
    }

    /**
     * Setter $updatedDate
     * @param {Date } value
     */
    public set $updatedDate(value: Date) {
        this.updatedDate = value;
    }

    /**
     * Setter $visible
     * @param {boolean } value
     */
    public set $visible(value: boolean) {
        this.visible = value;
    }

    /**
     * Getter $tags
     * @return {string[] }
     */
	public get $tags(): string[]  {
		return this.tags;
	}

    /**
     * Setter $tags
     * @param {string[] } value
     */
	public set $tags(value: string[] ) {
		this.tags = value;
	}


}