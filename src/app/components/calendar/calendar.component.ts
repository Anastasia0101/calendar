import { Component, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { startOfDay } from 'date-fns';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';

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
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;

  constructor(public dialog: MatDialog) { }

  setView(view: CalendarView): void {
    this.view = view;
  }

  openDialogCreateEvent(date: Date): void {
    const dialogRef = this.dialog.open(EventDialogComponent, {
      width: '400px',
      data: { start: date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) return;
      this.events.push({start: date, title: result});
    });
  }
}
