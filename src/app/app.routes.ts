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
            'Prediction Crime | Dashboard', 
      },
      {
        path:'crime',
        loadComponent: () => import('./pages/crime/crime.component').then(c => c.CrimeComponent),
        title:'Prediction Crime | Crime'
      },
      {
        path:'crime/add',
        loadComponent: () => import('./pages/crime/add-crime/add-crime.component').then(c => c.AddCrimeComponent),
        title:'Prediction Crime | Add Crime'
      },
      {
        path:'calendar',
        loadComponent: () => import('./pages/calender/calender.component').then(c => c.CalenderComponent)
      },
      {
        path:'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(c => c.ProfileComponent),
        title:'Prediction Crime | Profile'
      },
      {
        path:'form-elements',
        loadComponent: () => import('./pages/forms/form-elements.component').then(c => c.FormComponent),
        title:'Prediction Crime | Form Elements'
      },
      {
        path:'basic-tables',
        loadComponent: () => import('./pages/tables/tables.component').then(c => c.BasicTablesComponent),
        title:'Prediction Crime | Basic Tables'
      },
      {
        path:'blank',
        loadComponent: () => import('./pages/blank/blank.component').then(c => c.BlankComponent),
        title:'Prediction Crime | Blank Page'
      },
      {
        path:'line-chart',
        loadComponent: () => import('./pages/charts/line-chart/line-chart.component').then(c => c.LineChartComponent),
        title:'Prediction Crime | Line Chart'
      },
      {
        path:'bar-chart',
        loadComponent: () => import('./pages/charts/bar-chart/bar-chart.component').then(c => c.BarChartComponent),
        title:'Prediction Crime | Bar Chart'
      },
      {
        path:'avatars',
        loadComponent: () => import('./pages/ui-elements/avatar-element/avatar-element.component').then(c => c.AvatarElementComponent),
        title:'Prediction Crime | Avatars'
      },
      {
        path:'badge',
        loadComponent: () => import('./pages/ui-elements/badges/badges.component').then(c => c.BadgesComponent),
        title:'Prediction Crime | Badges'
      },
      {
        path:'buttons',
        loadComponent: () => import('./pages/ui-elements/buttons/buttons.component').then(c => c.ButtonsComponent),
        title:'Prediction Crime | Buttons'
      }
    ]
  },
  // auth pages
  {
    path:'signin',
    loadComponent: () => import('./pages/auth-pages/sign-in/sign-in.component').then(c => c.SignInComponent),
    title:'Prediction Crime | Sign In'
  },
  {
    path:'signup',
    loadComponent: () => import('./pages/auth-pages/sign-up/sign-up.component').then(c => c.SignUpComponent),
    title:'Prediction Crime | Sign Up'
  },
  // error pages
  {
    path:'**',
    loadComponent: () => import('./pages/other-page/not-found/not-found.component').then(c => c.NotFoundComponent),
    title:'Prediction Crime | Not Found'
  },
];
