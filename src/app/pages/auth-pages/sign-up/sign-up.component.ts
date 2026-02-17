import { Component } from '@angular/core';
import { SignupFormComponent } from '../../../shared/components/auth/signup-form/signup-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthPageLayoutComponent } from '../../../shared/layout/auth-page-layout/auth-page-layout.component';

@Component({
  selector: 'app-sign-up',
  standalone: true, 
  imports: [
    CommonModule,
    RouterModule,
    SignupFormComponent,
    AuthPageLayoutComponent
],
  templateUrl: './sign-up.component.html',
  styles: ``
})
export class SignUpComponent {

}
