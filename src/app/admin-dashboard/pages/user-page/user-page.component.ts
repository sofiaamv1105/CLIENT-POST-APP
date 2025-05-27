<<<<<<< HEAD
import { Component, effect, inject, input, linkedSignal } from '@angular/core';
import { UserService } from '../../../users/services/user.service';
import { Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserDetailComponent } from "../user-detail/user-detail.component";

@Component({
  selector: 'app-user-page',
  imports: [UserDetailComponent],
=======
import { Component, inject } from '@angular/core';
import { UserTableComponent } from '../../../users/components/user-table/user-table.component';
import { rxResource } from '@angular/core/rxjs-interop';
import { UserService } from '../../../users/services/user.service';

@Component({
  selector: 'app-user-page',
  imports: [UserTableComponent],
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
<<<<<<< HEAD

  id = input.required<string>();
  userService = inject(UserService);
  router = inject(Router);

  userId = linkedSignal(this.id);

  userResource = rxResource({
    request: ()=>({id: this.userId()}),
    loader: ({request})=>{
      return this.userService.getUser(request.id);
    },
  });

  redirectEffect = effect(() =>{
    if(this.userResource.error()){
      this.router.navigate(['/dashboard/users']);
    }
  });
  

=======
  userservice = inject(UserService);

  userResource = rxResource({
    request: ()=> ({}),
    loader: () => {
      return this.userservice.getUsers();
    }
  })
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
}
