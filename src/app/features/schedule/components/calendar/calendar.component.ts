import { Component, Input } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import momentPlugin from '@fullcalendar/moment';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  @Input('events') events: object[] = [{}];

  calendarOptions: CalendarOptions = {
    plugins: [momentPlugin, bootstrap5Plugin, interactionPlugin, dayGridPlugin, timeGridPlugin],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: '',
      center: '',
      right: ''
    },
    initialView: 'timeGridWeek',
    height: '90%',
    expandRows: true,
    slotMinTime: '10:00:00',
    slotMaxTime: '18:00:00',
    slotDuration: '01:00:00',
    // hiddenDays: [5],
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'lowercase'
    },
    dayHeaderFormat: 'D dddd',

    events: this.events
  };
}
