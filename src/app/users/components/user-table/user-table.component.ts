<<<<<<< HEAD
import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'user-table',
  imports: [RouterLink],
=======
import { Component, input } from '@angular/core';

@Component({
  selector: 'user-table',
  imports: [],
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent {
  users = input.required<any>();
<<<<<<< HEAD
  deleted = output<string>();

  emitDeleted(id: string){
    this.deleted.emit(id);
  }
=======
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
}
