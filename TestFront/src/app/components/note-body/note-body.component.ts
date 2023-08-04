import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnDestroy, OnInit {
  public note: Note;
  public isShowNote: boolean = false;

  constructor(private route: ActivatedRoute, private noteService: NoteService) { 
    this.noteService.activeNote$.subscribe({
      next: (note) =>{
        if(note){
          this.note = note;
          this.isShowNote = true;  
        }       
      },
      error(err) {
        console.log(err);        
      }
    })
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => params.getAll('id'))).subscribe(data => {
        this.noteService.SetActiveNote(+data);
      })  
  }

  ngOnDestroy(): void {
    this.noteService.activeNote$.unsubscribe();
  }

}
