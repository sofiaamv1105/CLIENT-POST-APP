import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import Swal from 'sweetalert2'
=======
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router =inject(Router);
  fb = inject(FormBuilder);
  hasError = signal(false);
  type = 'password';
  icon = 'bi bi-eye';

<<<<<<< HEAD
  ngOnInit(){
    const rememberedEmail = localStorage.getItem('rememberedEmail');
    if(rememberedEmail){
      this.loginForm.patchValue({
        email: rememberedEmail,
        rememberMe: true,
      })
    }
  }

  showPassword(type:string){
    if(type === 'password'){
      this.type = 'text';
      this.icon = 'bi bi-eye-slash';
    }else{
      this.type = 'password';
      this.icon = 'bi bi-eye';    
    }
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    rememberMe : [false]
  });

  onSubmit(){
    let auth = false;
=======
  showPassword(type:string){
    if(type === 'password'){
      this.type = 'text';
      this.icon = 'bi bi-eye-slash';
    }else{
      this.type = 'password';
      this.icon = 'bi bi-eye';    
    }
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit(){
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
    if(this.loginForm.invalid){
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      }, 2000);
      return
    }
<<<<<<< HEAD
    const { email = '', password = '', rememberMe} = this.loginForm.value;

    if(rememberMe){
      localStorage.setItem('rememberedEmail', email!);
    }else{
      localStorage.removeItem('rememberedEmail');
    }

    console.log({email, password})

    this.authService.login(email!, password!).subscribe((isAuthenticated)=>{
      if(isAuthenticated){

        Swal.fire({
        position: "center",
        icon: "success",
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 1500
      });
=======
    const { email = '', password = ''} = this.loginForm.value;
    console.log({email, password})
    this.authService.login(email!, password!).subscribe((isAuthenticated)=>{
      if(isAuthenticated){
        alert('logueado');
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
        this.router.navigateByUrl('/dashboard');
        return;
      }
      this.hasError.set(true);
      setTimeout(()=>{
        this.hasError.set(false);
      }, 2000);
      return;
    });
<<<<<<< HEAD


  }
}
=======
  }
}
>>>>>>> 8f41906ea60ec3e0de66a0770b6d341a362a6cbc
