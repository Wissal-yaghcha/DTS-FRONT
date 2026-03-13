import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];