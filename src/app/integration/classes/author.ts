import { FeaturedImage } from "./featuredImage";

export class Author {
  private name: string = '';
  private id: string = '';
  private pronouns: string = '';
  private description: string = '';
  private profileImage: FeaturedImage = new FeaturedImage('', '', '');
  private location: string = '';
  private birthdate: Date = new Date();
  private socialMedia: any[] = [];


  constructor($name: string, $id: string, $pronouns: string, $description: string, $profileImage: FeaturedImage, $location: string, $birthdate: Date, $socialMedia: string[]) {
    this.name = $name;
    this.id = $id;
    this.pronouns = $pronouns;
    this.description = $description;
    this.profileImage = $profileImage;
    this.location = $location;
    this.birthdate = $birthdate;
    this.socialMedia = $socialMedia;
  }

  /**
   * Getter $name
   * @return {string }
   */
  public get $name(): string {
    return this.name;
  }

  /**
   * Getter $id
   * @return {string }
   */
  public get $id(): string {
    return this.id;
  }

  /**
   * Getter $pronouns
   * @return {string }
   */
  public get $pronouns(): string {
    return this.pronouns;
  }

  /**
   * Getter $description
   * @return {string }
   */
  public get $description(): string {
    return this.description;
  }

  /**
   * Getter $profileImage
   * @return {FeaturedImage }
   */
  public get $profileImage(): FeaturedImage {
    return this.profileImage;
  }

  /**
   * Getter $location
   * @return {string }
   */
  public get $location(): string {
    return this.location;
  }

  /**
   * Getter $birthdate
   * @return {Date }
   */
  public get $birthdate(): Date {
    return this.birthdate;
  }

  /**
   * Getter $socialMedia
   * @return {string[] }
   */
  public get $socialMedia(): string[] {
    return this.socialMedia;
  }

  /**
   * Setter $name
   * @param {string } value
   */
  public set $name(value: string) {
    this.name = value;
  }

  /**
   * Setter $id
   * @param {string } value
   */
  public set $id(value: string) {
    this.id = value;
  }

  /**
   * Setter $pronouns
   * @param {string } value
   */
  public set $pronouns(value: string) {
    this.pronouns = value;
  }

  /**
   * Setter $description
   * @param {string } value
   */
  public set $description(value: string) {
    this.description = value;
  }

  /**
   * Setter $profileImage
   * @param {FeaturedImage } value
   */
  public set $profileImage(value: FeaturedImage) {
    this.profileImage = value;
  }

  /**
   * Setter $location
   * @param {string } value
   */
  public set $location(value: string) {
    this.location = value;
  }

  /**
   * Setter $birthdate
   * @param {Date } value
   */
  public set $birthdate(value: Date) {
    this.birthdate = value;
  }

  /**
   * Setter $socialMedia
   * @param {string[] } value
   */
  public set $socialMedia(value: string[]) {
    this.socialMedia = value;
  }

}