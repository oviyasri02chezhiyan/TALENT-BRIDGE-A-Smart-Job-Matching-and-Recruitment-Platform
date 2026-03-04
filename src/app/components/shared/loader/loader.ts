import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.css']
})
export class LoaderComponent {
  skeletons = [1, 2, 3];
}