import { Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/app-layout/app-layout.component';


export const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(c => c.DashboardComponent),
          title:
            'Angular Ecommerce Dashboard | TailAdmin - Angular Admin Dashboard Template', 
      },
      {
        path:'calendar',
        loadComponent: () => import('./pages/calender/calender.component').then(c => c.CalenderComponent)
      },
      {
        path:'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent),
        title:'Angular Profile Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'form-elements',
        loadComponent: () => import('./pages/forms/form-elements.component').then(c => c.FormComponent),
        title:'Angular Form Elements Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'basic-tables',
        loadComponent: () => import('./pages/tables/basic-tables/basic-tables.component').then(c => c.BasicTablesComponent),
        title:'Angular Basic Tables Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'blank',
        loadComponent: () => import('./pages/blank/blank.component').then(c => c.BlankComponent),
        title:'Angular Blank Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'line-chart',
        loadComponent: () => import('./pages/charts/line-chart/line-chart.component').then(c => c.LineChartComponent),
        title:'Angular Line Chart Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'bar-chart',
        loadComponent: () => import('./pages/charts/bar-chart/bar-chart.component').then(c => c.BarChartComponent),
        title:'Angular Bar Chart Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'avatars',
        loadComponent: () => import('./pages/ui-elements/avatar-element/avatar-element.component').then(c => c.AvatarElementComponent),
        title:'Angular Avatars Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'badge',
        loadComponent: () => import('./pages/ui-elements/badges/badges.component').then(c => c.BadgesComponent),
        title:'Angular Badges Dashboard | TailAdmin - Angular Admin Dashboard Template'
      },
      {
        path:'buttons',
        loadComponent: () => import('./pages/ui-elements/buttons/buttons.component').then(c => c.ButtonsComponent),
        title:'Angular Buttons Dashboard | TailAdmin - Angular Admin Dashboard Template'
      }
    ]
  },
  // auth pages
  {
    path:'signin',
    loadComponent: () => import('./pages/auth-pages/sign-in/sign-in.component').then(c => c.SignInComponent),
    title:'Angular Sign In Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
  {
    path:'signup',
    loadComponent: () => import('./pages/auth-pages/sign-up/sign-up.component').then(c => c.SignUpComponent),
    title:'Angular Sign Up Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
  // error pages
  {
    path:'**',
    loadComponent: () => import('./pages/other-page/not-found/not-found.component').then(c => c.NotFoundComponent),
    title:'Angular NotFound Dashboard | TailAdmin - Angular Admin Dashboard Template'
  },
];
