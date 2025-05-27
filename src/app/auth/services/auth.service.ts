import { Injectable, signal } from '@angular/core';
import { BaseHttpService } from '../../shared/services/base-http.service';
import { catchError, map, Observable, of } from 'rxjs';
<<<<<<< HEAD
import {rxResource} from '@angular/core/rxjs-interop';
=======
import { rxResource } from '@angular/core/rxjs-interop';
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc

type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class AuthService extends BaseHttpService{
=======
export class AuthService extends BaseHttpService {
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc

  private _authStatus = signal<AuthStatus>('checking');
  private _user = signal<any>(null);
  private _token = signal<String | null>(localStorage.getItem('token'));

  checkStatusResource = rxResource({
<<<<<<< HEAD
    loader: ()=> this.checkStatus(),
  })

  authStatus = computed(()=>{
    if(this._authStatus() === 'checking') return 'checking';
    if(this._user()) return 'authenticated';
=======
    loader: () => this.checkStatus(),
  });

  authStatus() {
    if (this._authStatus() === 'checking') return 'checking';
    if (this._user()) return 'authenticated';
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
    return 'not-authenticated';
  }

<<<<<<< HEAD
  user = computed(()=> this._user());
  token = computed(()=> this._token());
  isAdmin = computed(()=> this._user()?.Role?.name.includes('admin') ?? false);
=======
  user() {
    return this._user();
  }

  token() {
    return this._token();
  }

  isAdmin() {
    return this._user()?.Role?.name.includes('admin') ?? false;
  }
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc

  login(email: string, password: string):Observable<boolean>{
    return this.http
<<<<<<< HEAD
    .post<any>(`${this.apiUrl}/auth/login`,{email, password})
    .pipe(
    map((resp)=> this.handleAuthSuccess(resp)),
    catchError((error:any) => this.handleAuthError(error))
  );

}

  register(data: any):Observable<boolean>{
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data).pipe(
      map((resp)=> this.handleAuthSuccess(resp)),
=======
      .post<any>(`${this.apiUrl}/auth/login`, { email, password })
      .pipe(
        map((resp) => this.handleAuthSuccess(resp)),
        catchError((error: any) => this.handleAuthError(error))
      );
  }

  register(data: any): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/auth/register`, data).pipe(
      map((resp) => this.handleAuthSuccess(resp)),
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
      catchError((error: any) => this.handleAuthError(error))
    );
  }

<<<<<<< HEAD
  checkStatus():Observable<boolean>{
    const token = localStorage.getItem('token');
    if(!token){
=======
  checkStatus(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
      this.logout();
      return of(false);
    }
    return this.http.get<any>(`${this.apiUrl}/auth/check-status`).pipe(
<<<<<<< HEAD
      map((resp)=> this.handleAuthSuccess(resp)),
      catchError((error:any)=> this.handleAuthError(error))
    );
  }


  logout():void{
=======
      map((resp) => this.handleAuthSuccess(resp)),
      catchError((error: any) => this.handleAuthError(error))
    );
  }

  logout(): void {
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
    this._user.set('');
    this._token.set('');
    this._authStatus.set('not-authenticated');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

<<<<<<< HEAD
  private handleAuthSuccess(resp:any){
        this._user.set(resp.data.user);
        this._token.set(resp.data.token);
        this._authStatus.set('authenticated');
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('user', JSON.stringify(resp.data.user));
        return true;
  }

  private handleAuthError(error:any){
    this.logout();
    return of(false);
  }
}
=======
  private handleAuthSuccess(resp: any) {
    this._user.set(resp.data.user);
    this._token.set(resp.data.token);
    this._authStatus.set('authenticated');
    localStorage.setItem('token', resp.data.token);
    localStorage.setItem('user', JSON.stringify(resp.data.user));
    return true;
  }

  private handleAuthError(error: any) {
    this.logout();
    return of(false);
  }
}
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
