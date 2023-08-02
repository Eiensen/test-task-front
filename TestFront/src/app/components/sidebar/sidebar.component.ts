import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public notes: Note[];
  public activeNote: Note;

  constructor(private service: NoteService) {
    service.InitData();

    service.notes$.subscribe({
      next: (notes) => {
        if (notes) this.notes = notes;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  noteActivate(note: Note): void {
    this.activeNote = note;
    this.unactiveAll();
    var index = this.notes.indexOf(note);
    this.notes[index].isActive = true;
    this.service.activeNote$.next(note);
  }

  addNote(): void{
    
  }

  private unactiveAll(): void {
    this.notes.forEach((n) => (n.isActive = false));
  }
}
