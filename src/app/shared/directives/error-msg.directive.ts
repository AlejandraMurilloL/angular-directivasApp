import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  @Input() color = 'red';
  @Input() msg = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMsg();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['msg']) {
      const msg = changes['msg'].currentValue;
      this.htmlElement.nativeElement.innerText = msg;
    }

    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }
    
    console.log(changes);
  }  

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setMsg(): void {
    this.htmlElement.nativeElement.innerText = this.msg;
  }
}
