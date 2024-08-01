import { FeaturedImage } from "./featuredImage";
import { Post } from "./post";

export class Author {
  constructor(
    public name: string = '',
    public id: string = '',
    public pronouns: string = '',
    public description: string = '',
    public profileImage: FeaturedImage = new FeaturedImage('', '', ''),
    public location: string = '',
    public birthdate: Date = new Date(),
    public socialMedia: string[] = [],
    public entries: Post[] = []
  ) { }

  // Optional: Custom getters and setters if additional logic is needed
  getName(): string {
    return this.name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getId(): string {
    return this.id;
  }

  setId(value: string): void {
    this.id = value;
  }

  getPronouns(): string {
    return this.pronouns;
  }

  setPronouns(value: string): void {
    this.pronouns = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string): void {
    this.description = value;
  }

  getProfileImage(): FeaturedImage {
    return this.profileImage;
  }

  setProfileImage(value: FeaturedImage): void {
    this.profileImage = value;
  }

  getLocation(): string {
    return this.location;
  }

  setLocation(value: string): void {
    this.location = value;
  }

  getBirthdate(): Date {
    return this.birthdate;
  }

  setBirthdate(value: Date): void {
    this.birthdate = value;
  }

  getSocialMedia(): string[] {
    return this.socialMedia;
  }

  setSocialMedia(value: string[]): void {
    this.socialMedia = value;
  }
}
