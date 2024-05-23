import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: '/schedule'
  },
  {
    path: 'schedule', pathMatch: 'full', loadComponent: () => import('./features/schedule/pages/schedule-page/schedule-page.component')
      .then(comp => comp.SchedulePageComponent)
  },
];

// export const routes: Routes = [
//   {
//     path: '', pathMatch: 'full', loadChildren: () => import('./layout/pages/layout-page/layout.routes')
//       .then(route => route.layoutRoutes)
//   },
// ];

// export const routes: Routes = [
//   {
//     path: '', pathMatch: 'full', loadComponent: () => import('./layout/pages/layout-page/layout-page.component')
//       .then(comp => comp.LayoutPageComponent)
//   },
// ];