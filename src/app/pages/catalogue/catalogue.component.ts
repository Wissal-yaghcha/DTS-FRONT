import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  // Liste de données pour remplir le tableau
  terminaux = [
    { sap: 'SAP-001', nom: 'Samsung Galaxy S24 Ultra', type: 'Smartphone', ht: 8500, ttc: 10200, promo: 'Aucune' },
    { sap: 'SAP-002', nom: 'Apple iPhone 15 Pro Max', type: 'Smartphone', ht: 12000, ttc: 14400, promo: 'Aucune' },
    { sap: 'SAP-003', nom: 'Xiaomi 14 Ultra', type: 'Smartphone', ht: 5500, ttc: 6600, promo: '200 MAD' },
    { sap: 'SAP-004', nom: 'Huawei MatePad Pro', type: 'Tablette', ht: 4200, ttc: 5040, promo: '10%' }
  ];
}