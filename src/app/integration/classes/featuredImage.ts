export class FeaturedImage {
  private title: string = '';
  private description: string = '';
  private image: string = '';



	constructor($title: string , $description: string , $image: string ) {
		this.title = $title;
		this.description = $description;
		this.image = $image;
	}

    /**
     * Getter $title
     * @return {string }
     */
	public get $title(): string  {
		return this.title;
	}

    /**
     * Getter $description
     * @return {string }
     */
	public get $description(): string  {
		return this.description;
	}

    /**
     * Getter $image
     * @return {string }
     */
	public get $image(): string  {
		return this.image;
	}

    /**
     * Setter $title
     * @param {string } value
     */
	public set $title(value: string ) {
		this.title = value;
	}

    /**
     * Setter $description
     * @param {string } value
     */
	public set $description(value: string ) {
		this.description = value;
	}

    /**
     * Setter $image
     * @param {string } value
     */
	public set $image(value: string ) {
		this.image = value;
	}

}