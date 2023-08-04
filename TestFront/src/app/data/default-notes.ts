import { Note } from "../models/note";

export class DefaultNotes{
    public notes: Note[];
    
      constructor(){
        this.notes =  [
            {id: 1, title: 'Заметка 1', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!'},
            {id: 2, title: 'Заметка 2', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!'},
            {id: 3, title: 'Заметка 3', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!'},
            {id: 4, title: 'Заметка 4', body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid odio laborum eius perspiciatis dolore minima placeat doloremque provident iure, dolorum at molestiae porro laudantium ipsum quibusdam accusantium itaque. Laborum, exercitationem!'}
          ]
      }
}