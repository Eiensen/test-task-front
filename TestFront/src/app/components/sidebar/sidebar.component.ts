import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  public notes: Note[];
  private noteId: number;

  constructor(private service: NoteService) {   
    service.notesChange$.subscribe({
      next: (notes) => {
        if (notes) this.notes = notes;
      },
      error(err) {
        console.log(err);
      },
    });

    service.InitData();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  

  

  addNote(): void{
    var id: number = this.notes.length;

    const note: Note = {id: ++id, title: 'SS', body: 'asasag', isActive: false};
    this.service.AddNewNote(note);
  }

 
}
