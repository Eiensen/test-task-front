import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NoteBodyComponent } from './components/note-body/note-body.component';
import { RouterModule, Routes } from '@angular/router';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormsModule } from '@angular/forms';

const appRouts: Routes = [
  {path: ':id', component: NoteBodyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    NoteBodyComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouts),
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
