import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  msgError: string = 'Alejandra Murillo';
  color: string = 'red';

  form: FormGroup = this.fb.group({
    nombre: ['', Validators.required ]
  });

  constructor(private fb: FormBuilder) { }

  tieneError(campo: string): boolean {
    return this.form.get(campo)?.invalid || false;
  }

  changeMsg(): void {
    this.msgError = Math.random().toString();
  }

  changeColor(): void {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
