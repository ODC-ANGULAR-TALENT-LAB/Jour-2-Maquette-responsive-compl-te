import { Component } from '@angular/core';
import { Main } from '../main/main';
import { Aside } from '../aside/aside';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [Main, Aside],
  templateUrl: './container.html',
  styleUrl: './container.scss',
})
export class Container {}
