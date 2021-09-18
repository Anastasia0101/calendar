import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { startOfDay } from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  events: CalendarEvent[] = [
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
    },
    {
      start: startOfDay(new Date()),
      title: 'New test event',
    }
  ]

  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  setView(view: CalendarView): void {
    this.view = view;
  }

  dayClicked(date: any): void {
    console.log(date);
  }

  onEventClick(data: CalendarEvent): void {
    console.log(data.title);
  }
}
