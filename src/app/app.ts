import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayout } from './core/layout/app-layout/app-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [AppLayout],
})
export class App {
  protected readonly title = signal('service-practice');
}
