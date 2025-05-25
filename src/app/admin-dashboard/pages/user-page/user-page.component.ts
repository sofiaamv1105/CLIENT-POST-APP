import { Component, inject } from '@angular/core';
import { UserTableComponent } from '../../../users/components/user-table/user-table.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserService } from '../../../users/services/user.service';

@Component({
  selector: 'app-user-page',
  imports: [UserTableComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  userservice = inject(UserService);

  userResource = rxResource({
    request: ()=> ({}),
    loader: () => {
      return this.userservice.getUsers();
    }
  })
}
