import { Component } from '@angular/core';
import { ContentfulService } from '../integration/services/contentful.service';
import { Observable } from 'rxjs';
import { EmailService } from '../integration/services/email.service';
import { Mail } from '../integration/classes/mail';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { ViewportScroller } from '@angular/common';
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

  ngOnInit(): void {
    this.contentfulService.getLatestEntries().subscribe(data => {
      $('#js-preloader').addClass('loaded');
      this.posts = data.items;
      console.log(this.posts);
    });
    console.log(this.mail);

    // Menu Dropdown Toggle
    if ($('.menu-trigger').length) {
      console.log("hay menu trigger");
      $(".menu-trigger").on('click', function () {
        let elem = $(".menu-trigger");
        $(elem).toggleClass('active');
        $('.header-area .nav').slideToggle(200);
      });
    }

  }

  sendMail() {
    console.log(this.mail);
    $('#js-preloader').removeClass('loaded');
    this.mailService.sendEmail(this.mail).then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.mail = new Mail();
      $('#js-preloader').addClass('loaded');
    }, (error: any) => {
      console.log(error.text);
    });

  }

  scrollTo(id: string) {
    this.viewPortScroller.scrollToAnchor(id);
  }

}
