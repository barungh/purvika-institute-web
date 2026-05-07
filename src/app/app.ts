import { Component } from '@angular/core';
import { Header }      from './components/header/header';
import { Hero }        from './components/hero/hero';
import { Philosophy }  from './components/philosophy/philosophy';
import { CourseGrid }  from './components/course-grid/course-grid';
import { Footer }      from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Philosophy, CourseGrid, Footer],
  template: `
    <div class="noise-overlay"></div>
    <app-header></app-header>
    <main>
      <app-hero></app-hero>
      <app-philosophy></app-philosophy>
      <app-course-grid></app-course-grid>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class App {}
