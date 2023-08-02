import { Component, OnDestroy, OnInit } from '@angular/core';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnDestroy {
  public note: Note;
  public isShowNote: boolean = false;

  constructor(private noteService: NoteService) { 
    this.noteService.activeNote$.subscribe({
      next: (note) =>{
        if(note){
          this.note = note;
          this.isShowNote = true;
          console.log(note);          
        }       
      },
      error(err) {
        console.log(err);        
      }
    })
  }
  ngOnDestroy(): void {
    this.noteService.activeNote$.unsubscribe();
  }

}
