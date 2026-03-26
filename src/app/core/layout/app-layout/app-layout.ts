import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { Footer } from '../components/footer/footer';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app-layout.html',
  styleUrl: './app-layout.scss',
  host: { class: 'layout__container' },
})
export class AppLayout {}
