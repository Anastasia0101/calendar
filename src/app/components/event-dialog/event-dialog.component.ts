import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent {

  dialogForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CalendarEvent,
    private formBuilder: FormBuilder
  ) {
    this.dialogForm = this.formBuilder.group({
      title: ''
    });
  }

  createEvent(): void {
    const title = this.dialogForm.value.title;
    this.dialogRef.close(title);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
