import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewNote } from 'src/app/models/newNote';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent{

  public title: string;
  public text: string;

  constructor(private service: DialogService) { }

  public Submit(form: NgForm): void{
    if(!form.valid)
      return

    var newNote: NewNote = {title: this.title, textBody: this.text};

    this.service.SubmitDialog(newNote); 
    this.service.isDialogShow = false;
  }

  public Close(): void{
    this.service.isDialogShow = false;
  }

}
