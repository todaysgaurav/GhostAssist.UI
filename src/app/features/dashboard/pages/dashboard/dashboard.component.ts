import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.scss']
})

export class DashboardComponent {

  stats = [
    {
      title: 'Resume Score',
      value: '92%',
      icon: 'description'
    },
    {
      title: 'Interviews',
      value: '28',
      icon: 'groups'
    },
    {
      title: 'Skills',
      value: '17',
      icon: 'insights'
    },
    {
      title: 'Credits',
      value: '124',
      icon: 'payments'
    }
  ];

}