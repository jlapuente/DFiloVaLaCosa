export class FeaturedImage {
    constructor(
        public title: string = '',
        public description: string = '',
        public image: string = ''
    ) { }

    // Optional: Custom getters and setters if additional logic is needed
    getTitle(): string {
        return this.title;
    }

    setTitle(value: string): void {
        this.title = value;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(value: string): void {
        this.description = value;
    }

    getImage(): string {
        return this.image;
    }

    setImage(value: string): void {
        this.image = value;
    }
}
