import { Component, Input, SimpleChanges } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent {
// @Input() loading = false;

//   load(loaderOn: boolean) {
//     console.log(loaderOn)
//     loaderOn ? $('#js-preloader').addClass('loaded') : $('#js-preloader').removeClass('loaded');
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log("Cambia el valor")
//     console.log(changes)
//     if (changes['loading']) {
//       this.load(changes['loading'].currentValue);
//     }
//   }
}
