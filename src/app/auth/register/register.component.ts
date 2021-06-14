import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit { 
  loading: boolean | undefined;
  constructor(
    public api:ApiService,
    public router:Router,
    public Auth:AngularFireAuth
  ) { }

  ngOnInit(): void {
  }

  //form validation
  email = new FormControl('',[Validators.required,Validators.email]);
  password = new FormControl('',[Validators.minLength(6),Validators.required]);


  user:any = {};
  hide:boolean=true;

  
  register(user:any)
  {
    this.loading=true;
    this.Auth.createUserWithEmailAndPassword(user.email, user.password).then(result=>{
      this.loading=false;
      alert('Registrasi Berhasil');
      this.router.navigate(['/login']);
    }).catch(error=>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    })
    /*
    this.api.register(this.user.email, this.user.password).subscribe(result=>{
      this.loading=false;
      alert('Registrasi Berhasil');
      this.router.navigate(['/login']);
    },error=>{
      this.loading=false;
      alert('Tidak dapat mendaftar');
    })
    */
  }
}

