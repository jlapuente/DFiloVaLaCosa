import { Component } from '@angular/core';
import { ContentfulService } from '../../integration/services/contentful.service';
import { EmailService } from '../../integration/services/email.service';
import { Mail } from '../../integration/classes/mail';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { ViewportScroller } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavBarActions } from 'src/app/integration/classes/navbar_actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  loading: boolean = false;
  menuActive: boolean = false;

  actions: NavBarActions[] = [
    {
      name: 'Home',
      alt: 'Go to home page',
      action: () => this.scrollTo("top"),
      isActive: true
    },
    {
      name: 'About',
      alt: 'Go to profile page',
      action: () => this.scrollTo("about"),
      isActive: false
    },
    {
      name: 'Blog',
      alt: 'Go to blog page',
      action: () => this.scrollTo("blog"),
      isActive: false
    },
    {
      name: 'Contact',
      alt: 'Go to contact page',
      action: () => this.scrollTo("contact"),
      isActive: false,
      class: 'main-red-button last-child',
      isLastItem: true
    }
  ];

  posts: any[] = [];
  mail: Mail = new Mail();

  nameFormControl: FormControl = new FormControl(this.mail.name, Validators.required);
  surNameFormControl: FormControl = new FormControl(this.mail.surName);
  messageFormControl: FormControl = new FormControl(this.mail.body, Validators.required);
  mailFormControl: FormControl = new FormControl(this.mail.email, [Validators.required, Validators.email]);

  mailForm: FormGroup = new FormGroup({
    nameFormControl: this.nameFormControl,
    surNameFormControl: this.surNameFormControl,
    messageFormControl: this.messageFormControl,
    mailFormControl: this.mailFormControl
  });

  constructor(
    private contentfulService: ContentfulService,
    private mailService: EmailService,
    private viewPortScroller: ViewportScroller
  ) { }

  ngOnInit(): void {
    this.contentfulService.getLatestEntries().subscribe(data => {
      this.loading = true;
      this.posts = data.items;
      console.log(this.posts);
    });
  }

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  sendMail() {
    this.loading = false;
    if (this.mailForm.valid) {
      this.mailService.sendEmail(this.mailForm.value).then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.mail = new Mail();
          this.mailForm.reset();
          this.loading = true;
        },
        (error: any) => console.log(error.text)
      );
    } else {
      console.log("Formulario inválido");
    }
  }

  checkMail(): boolean {
    return Object.values(this.mail).every(x => x === null || x === '');
  }

  scrollTo(id: string) {
    console.log(id);
    this.viewPortScroller.scrollToAnchor(id);
  }

}
