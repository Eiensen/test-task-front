import { Injectable } from '@angular/core';
import { NoteService } from './note-service.service';
import { NewNote } from '../models/newNote';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  public isDialogShow: boolean = false;

  constructor(private noteService: NoteService) { }

  public SubmitDialog(note: NewNote): void{
    var newId: number = this.noteService.GetAllNotes().length + 1;
    var createdNote: Note = {id: newId, title: note.title, body: note.textBody};

    this.noteService.AddNewNote(createdNote);
  }
}
