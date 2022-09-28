import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['',[Validators.required,Validators.email]],
    })
  }

  public login(){
    // this._router.navigate([''])
    console.log(this.loginForm);
    console.log(this.loginForm.value);
}
}
