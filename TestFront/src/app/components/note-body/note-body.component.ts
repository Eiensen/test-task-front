import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-note-body',
  templateUrl: './note-body.component.html',
  styleUrls: ['./note-body.component.css']
})
export class NoteBodyComponent implements OnDestroy {
  public note: Note;
  id: string;
  public isShowNote: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) { 
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
      switchMap(params => this.id = params.get('id'))).subscribe(data => console.log(data))  
  }

  ngOnDestroy(): void {
    this.noteService.activeNote$.unsubscribe();
  }

}
