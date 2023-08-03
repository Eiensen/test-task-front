import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Note } from '../models/note';
import { DefaultNotes } from '../data/default-notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private defaultData: DefaultNotes = new DefaultNotes();
  private notes: Note[];

  public notesChange$ = new Subject<Note[]>();  
  public activeNote$ = new Subject<Note>();

  
  constructor() { }

  public InitData(): void{
    this.notes = this.defaultData.notes;
    this.notesChange$.next(this.notes);
  }

  public GetNote(id: string): Note{
    return this.notes[+id];
  }

  public AddNewNote(note: Note): void{
    this.notes.push(note);
    this.notesChange$.next(this.notes);
    this.activeNote$.next(this.notes[this.notes.indexOf(note)]);
  }
}


