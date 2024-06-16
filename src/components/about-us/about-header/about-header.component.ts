import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-header',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.scss',
})
export class AboutHeaderComponent {}
