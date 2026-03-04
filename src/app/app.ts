import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/core/navbar/navbar';
import { Footer } from './components/core/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css' // Style name correct-ah kudu mapla
})
export class AppComponent {
  title = 'TalentBridge';
}