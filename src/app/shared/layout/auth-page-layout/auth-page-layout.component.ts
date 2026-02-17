import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeToggleTwoComponent } from '../../components/common/theme-toggle-two/theme-toggle-two.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-page-layout',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    ThemeToggleTwoComponent,
  ],
  templateUrl: './auth-page-layout.component.html',
})
export class AuthPageLayoutComponent {

}
