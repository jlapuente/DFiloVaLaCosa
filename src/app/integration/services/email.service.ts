import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Mail } from '../../integration/classes/mail'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }

  public sendEmail(mail: Mail) { 
    return emailjs.send(mail.SERVICE_ID, mail.TEMPLATE_ID, {
      from_name: mail.name + " " + mail.surName,
      to_name: "Javier Lapuente",
      from_email: mail.email,
      to_email: "javierlapuentegarcia.portfolio@gmail.com",
      message: mail.body,
    },
      mail.PUBLIC_KEY);
  }
}
