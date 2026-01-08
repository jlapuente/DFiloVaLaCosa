export class Mail {
  constructor(
    public name: string = '',
    public surName: string = '',
    public email: string = '',
    public body: string = ''
  ) { }

  isEmpty(): boolean {
    return [this.name, this.surName, this.email, this.body].every(x => !x);
  }
}