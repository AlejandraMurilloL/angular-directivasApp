import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string = 'red';
  private _msg: string = 'Este campo es requerido';

  @Input() set color(valor: string) {
    this._color = valor;
    this.setColor();
  };

  @Input() set msg(valor: string) {
    this._msg = valor;
    this.setMsg();
  } 

  htmlElement: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMsg();
    this.setCssClass();  }

  ngOnChanges(changes: SimpleChanges): void {    
    // if (changes['msg']) {
    //   const msg = changes['msg'].currentValue;
    //   this.htmlElement.nativeElement.innerText = msg;
    // }

    // if (changes['color']) {
    //   const color = changes['color'].currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }
    
    // console.log(changes);
  }  

  setCssClass(): void { 
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMsg(): void {
    this.htmlElement.nativeElement.innerText = this._msg;
  }
}
