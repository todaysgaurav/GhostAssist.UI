import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterModule,
    MatListModule,
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

  menu = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    },
    {
      title: 'Resume Optimizer',
      icon: 'description',
      route: '/resume'
    },
    {
      title: 'Interview Prep',
      icon: 'school',
      route: '/prep'
    },
    {
      title: 'Skill Gap',
      icon: 'insights',
      route: '/skills'
    },
    {
      title: 'Live Interview',
      icon: 'mic',
      route: '/live'
    },
    {
      title: 'Reports',
      icon: 'bar_chart',
      route: '/reports'
    },
    {
      title: 'Billing',
      icon: 'payments',
      route: '/billing'
    }
  ];
}