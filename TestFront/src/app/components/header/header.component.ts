import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  private _title:string = 'Мои заметки';

  public get Title(): string {
    return this._title;
  }
  
}
