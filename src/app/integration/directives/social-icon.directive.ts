import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appSocialIcon]'
})
export class SocialIconDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    const href = nativeElement.getAttribute('href') || '';

    const iconElement = this.renderer.createElement('i');
    this.renderer.addClass(iconElement, 'fa');
    this.renderer.addClass(iconElement, 'me-2'); // Añade la clase Bootstrap para margen derecho

    if (href.includes('twitter.com')) {
      this.renderer.addClass(iconElement, 'fa-twitter');
    } else if (href.includes('linkedin.com/in/')) {
      this.renderer.addClass(iconElement, 'fa-linkedin');
    } else if (href.includes('instagram.com/')) {
      this.renderer.addClass(iconElement, 'fa-instagram');
    } else {
      this.renderer.addClass(iconElement, 'fa-globe');
    }

    // Insertar el icono antes del enlace
    this.renderer.insertBefore(nativeElement.parentNode, iconElement, nativeElement);
  }
}
