
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { UserMetaCardComponent } from '../../shared/components/user-profile/user-meta-card/user-meta-card.component';
import { UserInfoCardComponent } from '../../shared/components/user-profile/user-info-card/user-info-card.component';
import { UserAddressCardComponent } from '../../shared/components/user-profile/user-address-card/user-address-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    PageBreadcrumbComponent,
    UserMetaCardComponent,
    UserInfoCardComponent,
    UserAddressCardComponent
],
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {

}
