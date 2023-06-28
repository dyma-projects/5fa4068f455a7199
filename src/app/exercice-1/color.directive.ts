import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  private;

  @HostListener('window:keydown', ['$event']) onKeydownHandler(
    $event: KeyboardEvent
  ) {
    switch ($event.key) {
      case 'ArrowUp':
        this.el.nativeElement.style.color = 'red';
        break;
      case 'ArrowRight':
        this.el.nativeElement.style.color = 'blue';
        break;
      case 'ArrowLeft':
        this.el.nativeElement.style.color = 'green';
        break;
      case 'ArrowDown':
        this.el.nativeElement.style.color = 'orange';
        break;
      default:
        console.log('Not managed key', $event.key);
    }
  }
  constructor(private el: ElementRef<HTMLParagraphElement>) {}
}
