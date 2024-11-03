import { Component } from '@angular/core';

interface INav {
  name: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  navList: INav[] = [
    {
      name: 'Home',
      icon: 'house-fill',
      link: 'home'
    },{
      name: 'Profile',
      icon: 'person-bounding-box',
      link: 'profile'
    },{
      name: 'Blogs',
      icon: 'text-paragraph',
      link: 'blogs'
    }
  ];
}
