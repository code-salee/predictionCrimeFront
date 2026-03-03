
import { Component, inject } from '@angular/core';
// import { LabelComponent } from '../../form/label/label.component';
// import { CheckboxComponent } from '../../form/input/checkbox.component';
// import { ButtonComponent } from '../../ui/button/button.component';
// import { InputFieldComponent } from '../../form/input/input-field.component';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin-form',
  imports: [
    // LabelComponent,
    // CheckboxComponent,
    // ButtonComponent,
    // InputFieldComponent,
    CommonModule,          
    RouterModule,
    ReactiveFormsModule
],
  standalone: true,
  templateUrl: './signin-form.component.html',
  styleUrl: './signin-form.component.css',

})
export class SigninFormComponent {

    private router = inject(Router);

  showPassword = false;
  isChecked = false;

  userData = {
    username: "momosylla",
    password: "passer",
    rememberMe: false
  };

  userForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rememberMe: new FormControl(false)
  });

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSignIn() {
    console.log('Login info:', this.userForm.value);
    if (this.userForm.invalid) {
    this.userForm.markAllAsTouched(); // 👈 IMPORTANT
    return;
  }
  if (this.userForm.get('username')?.value === this.userData.username && this.userForm.get('password')?.value === this.userData.password) {
    console.log('Login successful!');
    this.router.navigate(['/']);
  } else {
    console.log('Invalid login credentials');
  }
  }
}
