import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnInit {
  public note: Note;

  constructor() { }

  ngOnInit(): void {
    
  }

}
