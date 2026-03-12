import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component'; // <--- VERIFIE CETTE LIGNE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SidebarComponent // <--- C'EST CETTE LIGNE QUI MANQUE SUREMENT
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DTS-FRONT-V1';
}