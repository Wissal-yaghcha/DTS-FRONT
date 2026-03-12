import { Routes } from '@angular/router';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
  { path: 'panier', component: PanierComponent },
  { path: '', redirectTo: 'panier', pathMatch: 'full' }
];