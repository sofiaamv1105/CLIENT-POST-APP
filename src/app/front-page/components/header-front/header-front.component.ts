import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'header-front',
  imports: [ RouterLink],
  templateUrl: './header-front.component.html',
  styleUrl: './header-front.component.css'
})
export class HeaderFrontComponent {
  authService = inject(AuthService);
<<<<<<< HEAD

=======
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
}
