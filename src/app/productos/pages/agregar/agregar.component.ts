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
    this.msgError = 'Maria Lara';
  }

  changeColor(): void {
    this.color = 'green';
  }
}
