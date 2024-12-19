import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBlogPost } from './blog-post.interface';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  blogPosts: IBlogPost[] = [
    {
      name: 'Angular Modularity Guide',
      description:
        'How to differentiate different type of angular modules and its Architecture guide ...',
      url: 'https://medium.com/@ram.dev/angular-modularity-guide-7cae69c69a5d',
      date: 'Jul 3, 2023',
    },
    {
      name: 'Closure in JavaScript',
      description:
        'A closure is a combination of a function bundled together (enclosed) with references to its surrounding state ...',
      url: 'https://yashjawade88.medium.com/closure-in-javascript-yjs-3dc1c3452ef9',
      date: 'Jan 17, 2021',
    },
    {
      name: 'Optimizing Data Flow in Angular Forms',
      description:
        'A streamlined approach for reducing code redundancy in large Angular forms and optimizing data flow patterns...',
      url: 'https://medium.com/@ram.dev/optimising-data-flow-and-reducing-code-redundancy-in-large-angular-form-streamlined-approach-1cf0e701bc48',
      date: 'Aug 15, 2023',
    },
  ];
}
