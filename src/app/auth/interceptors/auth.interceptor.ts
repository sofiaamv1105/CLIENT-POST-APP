import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();

  let headers = req.headers;

  headers = headers.set('Authorization', `Bearer ${token}`);
  headers = headers.set('x-api-key', environment.apiKey);

  const newReq = req.clone({
    headers,
  });
  
  return next(newReq);
};
