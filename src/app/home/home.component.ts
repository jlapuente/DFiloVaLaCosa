import { Component } from '@angular/core';
import { ContentfulService } from '../integration/services/contentful.service';
import { Observable } from 'rxjs';
import { EmailService } from '../integration/services/email.service';
import { Mail } from '../integration/classes/mail';
import { EmailJSResponseStatus } from '@emailjs/browser';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private contentfulService: ContentfulService, private mailService: EmailService) { }

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

}
