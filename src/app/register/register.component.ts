import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AppauthService} from '../auth/appauth.service';
import {LoginService} from '../login/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private appauthService: AppauthService,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.appauthService.register(this.registerForm.value).subscribe( res => {
        alert('User Registered successfully!!');
      this.router.navigate(['/login']);
    },
      (error)=> {
        this.errorMessage = "This username is already in use. Please try another one,or log in.";
        this.loading = false;
      } );

  }

}
