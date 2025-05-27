import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  protected http = inject(HttpClient);
  protected apiUrl = environment.apiUrl;
<<<<<<< HEAD
}
=======
}
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
