import { Component } from '@angular/core';
import { NoDataComponent } from '../../../../shared/components/no-data/no-data.component';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from '../../components/calendar/calendar.component';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [
    CommonModule,
    CalendarComponent,
    NoDataComponent
  ],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.scss'
})
export class SchedulePageComponent {
  events: object[] = [
    {
      classNames: ['event-purple'],
      title: 'Lecture 1',
      start: '2024-05-21T10:00:00',
      end: '2024-05-21T12:30:00',
      extendedProps: {
        department: 'Dept 1'
      },
      description: 'Lecture'
    },
    {
      classNames: ['event-green'],
      title: 'Lecture 2',
      start: '2024-05-22T14:30:00',
      end: '2024-05-22T17:30:00',
      extendedProps: {
        department: 'Dept 1'
      },
      description: 'Lecture'
    },
    {
      classNames: ['event-default'],
      title: 'Lecture 3',
      start: '2024-05-23T10:30:00',
      end: '2024-05-23T11:30:00',
      extendedProps: {
        department: 'Dept 1'
      },
      description: 'Lecture'
    },
    {
      classNames: ['event-orange'],
      title: 'Lecture 4',
      start: '2024-05-23T12:00:00',
      end: '2024-05-23T14:30:00',
      extendedProps: {
        department: 'Dept 1'
      },
      description: 'Lecture'
    },
    {
      classNames: ['event-blue'],
      title: 'Lecture 5',
      start: '2024-05-25T11:00:00',
      end: '2024-05-25T15:00:00',
      extendedProps: {
        department: 'Dept 1'
      },
      description: 'Lecture',
    },
  ]
}
