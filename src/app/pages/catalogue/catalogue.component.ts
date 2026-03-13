import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {
  // Gestion de l'affichage : 'list' pour le tableau, 'form' pour l'ajout manuel
  viewMode: 'list' | 'form' = 'list';
  
  // Gestion de la popup d'importation
  showImportModal: boolean = false;

  // Données de test pour le tableau
  terminaux = [
    { sap: 'SAP-001', nom: 'Samsung Galaxy S24 Ultra', type: 'Smartphone', ht: 8500, ttc: 10200, promo: 'Aucune' },
    { sap: 'SAP-002', nom: 'Apple iPhone 15 Pro Max', type: 'Smartphone', ht: 12000, ttc: 14400, promo: 'Aucune' },
    { sap: 'SAP-003', nom: 'Xiaomi 14 Ultra', type: 'Smartphone', ht: 5500, ttc: 6600, promo: '200 MAD' },
    { sap: 'SAP-004', nom: 'Huawei MatePad Pro', type: 'Tablette', ht: 4200, ttc: 5040, promo: '10%' }
  ];

  // Fonctions de navigation
  setMode(mode: 'list' | 'form') {
    this.viewMode = mode;
  }

  toggleImportModal() {
    this.showImportModal = !this.showImportModal;
  }
}