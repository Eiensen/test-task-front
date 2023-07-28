import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from 'src/app/models/note';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public notes: Note[];
  public activeNote: Note;
  public activeNote$ = new Subject<Note>();
  
  constructor() {
    this.notes = [
      {title: 'Заметка 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!', isActive: false},
      {title: 'Заметка 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!', isActive: false},
      {title: 'Заметка 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!', isActive: false},
      {title: 'Заметка 4', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!', isActive: false}
    ]
   }

  ngOnInit(): void {
  }

  noteActivate(note: Note): void {
    this.activeNote = note;
    this.unactivaAll();
    var index = this.notes.indexOf(note);
    this.notes[index].isActive = true;
    this.activeNote$.next(note);
  }

  private unactivaAll(): void{
    this.notes.forEach(n => n.isActive = false);
  }
}
