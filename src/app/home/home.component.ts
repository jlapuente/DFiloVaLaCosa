import { Component } from '@angular/core';
import { ContentfulService } from '../integration/services/contentful.service';
import { Observable } from 'rxjs';
import { EmailService } from '../integration/services/email.service';
import { Mail } from '../integration/classes/mail';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { ViewportScroller } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private contentfulService: ContentfulService, private mailService: EmailService, private viewPortScroller: ViewportScroller) { }

  // blogPosts$ : Observable<any> | undefined;
  posts: any[] = [];
  mail: Mail = new Mail();
  nameFormControl: FormControl = new FormControl(this.mail.name, Validators.required);
  surNameFormControl: FormControl = new FormControl(this.mail.surName);
  messageFormControl: FormControl = new FormControl(this.mail.body, Validators.required);
  mailFormControl: FormControl = new FormControl(this.mail.email, [Validators.required, Validators.email]);
  mailForm: FormGroup = new FormGroup(
    {
      nameFormControl: this.nameFormControl,
      surNameFormControl: this.surNameFormControl,
      messageFormControl: this.messageFormControl,
      mailFormControl: this.mailFormControl
    });

  ngOnInit(): void {
    this.contentfulService.getLatestEntries().subscribe(data => {
      this.loading(true);
      this.posts = data.items;
      console.log(this.posts);
    });

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      $(".menu-trigger").on('click', function () {
        let elem = $(".menu-trigger");
        $(elem).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }

  }
  sendMail() {
    this.loading(false);
    if (this.mailForm.valid) {
      console.log(this.mailForm.value);
      this.mailService.sendEmail(this.mailForm.value).then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.mail = new Mail();
        this.loading(true);
      }, (error: any) => {
        console.log(error.text);
      });
    } else {
      console.log("error")
    }
  }

  scrollTo(id: string) {
    this.viewPortScroller.scrollToAnchor(id);
  }

  loading(on: boolean) {
    on ? $('#js-preloader').addClass('loaded') : $('#js-preloader').removeClass('loaded');
  }

  checkMail(): boolean {
    console.log(Object.values(this.mail).every(x => x === null || x === ''));
    return Object.values(this.mail).every(x => x === null || x === '');
  }

}
