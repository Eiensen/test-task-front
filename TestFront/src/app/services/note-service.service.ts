import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  
  public activeNote$ = new Subject<Note>();
  
  constructor() { }
}
