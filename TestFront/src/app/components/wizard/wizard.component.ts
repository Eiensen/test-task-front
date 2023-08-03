import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Note } from 'src/app/models/note';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  id: number | undefined;
  
  constructor(private service: NoteService) { }

  ngOnInit(): void {
    
  }

  // noteActivate(note: Note): void {
  //   this.activeNote = note;
  //   this.unactiveAll();
  //   var index = this.notes.indexOf(note);
  //   this.notes[index].isActive = true;
  //   this.service.activeNote$.next(note);
  // }

  // private unactiveAll(): void {
  //   this.notes.forEach((n) => (n.isActive = false));
  // }

}
