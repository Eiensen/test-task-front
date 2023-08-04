import { Component } from '@angular/core';
import { Note } from 'src/app/models/note';
import { DialogService } from 'src/app/services/dialog.service';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  public notes: Note[];

  constructor(private service: NoteService, private dialogService: DialogService) {   
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
  
  public AddNote(): void{
    this.dialogService.isDialogShow = true;
  }

 
}
