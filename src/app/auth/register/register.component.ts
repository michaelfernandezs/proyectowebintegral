import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
   registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    console.log('Datos del registro:', this.registerForm.value);
    // Aquí podrías hacer una petición POST a tu API
  }
 }
