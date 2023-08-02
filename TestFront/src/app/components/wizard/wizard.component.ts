import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NoteService } from 'src/app/services/note-service.service';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  private subscription: Subscription;

  constructor(private activateRoute: ActivatedRoute, private service: NoteService) {
    this.subscription = activateRoute.params.subscribe({
      next: (params) => 
      console.log
      (
        service.notes$.pipe(
          map(notes => notes.find(note => note.id == params['id']) ))
      )
    });
   }

  ngOnInit(): void {
  }

}
