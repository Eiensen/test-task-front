import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Note } from '../models/note';
import { DefaultNotes } from '../data/default-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private defaultData: DefaultNotes = new DefaultNotes();
  public notes$: Observable<Note[]>;
  public activeNote$ = new Subject<Note>();
  
  constructor() { }

  public InitData(): void{
    this.notes$ = of(this.defaultData.notes);
  }

  public AddNewNote(note: Note): void{
    this.notes$.pipe(tap(notes => notes.push(note)));
  }
}


