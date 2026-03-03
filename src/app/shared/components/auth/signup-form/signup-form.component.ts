
import { ChangeDetectionStrategy, Component, forwardRef, inject, Input } from '@angular/core';
import { LabelComponent } from '../../form/label/label.component';
import { CheckboxComponent } from '../../form/input/checkbox.component';
import { InputFieldComponent } from '../../form/input/input-field.component';
import { MultiSelectComponent } from '../../form/multi-select/multi-select.component';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { FileInputComponent } from '../../form/input/file-input.component';


@Component({
  selector: 'app-signup-form',
  imports: [
    LabelComponent,
    FileInputComponent,
    InputFieldComponent,
    MultiSelectComponent,
    RouterModule,
    ReactiveFormsModule
],
  standalone: true,
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {

      private router = inject(Router);

  showPassword = false;
  isChecked = false;

  roles = [
  { text: 'Admin', value: 'ADMIN' },
  { text: 'User', value: 'USER' },
  { text: 'System', value: 'SYSTEM' }
];

ngOnInit() {
}

onRolesChange(values: any[]) {
  console.log('Selected:', values);
}




registerForm = new FormGroup({
  firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
  username: new FormControl('', [Validators.required, Validators.minLength(6)]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  confirmPassword: new FormControl('',[Validators.required, Validators.minLength(6)]),
  avatar: new FormControl('', Validators.required),
  roles: new FormControl([], Validators.required),
  termsAndConditions: new FormControl('', Validators.required)
}, { validators: this.passwordMatchValidator });

  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;

        if (!pass || !confirm) return null;

    return pass === confirm ? null : { passwordMismatch: true };

  }

  onSignUp() {
    console.log('Register form:', this.registerForm.value);
    if (this.registerForm.invalid) {
    this.registerForm.markAllAsTouched(); 
    return;
  }
  if (this.registerForm.valid) {
    console.log('Register successful!');
    this.router.navigate(['/signin']);
  } else {
    console.log('Invalid login credentials');
  }
}
}
