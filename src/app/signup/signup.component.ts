import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AppauthService } from "../auth/appauth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  formGroup: FormGroup;

  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;
  passwordFormGroup: FormGroup;
  uuid: any;
  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null {
    return this.formGroup.get("formArray");
  }

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AppauthService
  ) {}

  ngOnInit() {
    this.emailFormGroup = new FormGroup({
      username: new FormControl("", Validators.email),
    });
    this.passwordFormGroup = this._formBuilder.group({
      passwordCtrl: ["", Validators.required],
    });
    this.nameFormGroup = this._formBuilder.group({
      firstNameFormCtrl: ["", Validators.required],
      lastNameFormCtrl: ["", Validators.required],
      emailFormCtrl: ["", Validators.email],
      passwordCtrl: ["", Validators.required],
    });
  }
  emailStep() {
    if (this.emailFormGroup.valid) {
      console.log(this.emailFormGroup.value);
      this.authService.uuid(this.emailFormGroup.value).subscribe((value) => {
        const em = value.username;
        this.uuid = value.uuid;
        console.log(this.uuid);
        console.log(em);
      });
    }
  }
  passwordStep() {
    if (this.passwordFormGroup.valid) {
      console.log(this.passwordFormGroup.value);
      this.authService
        .password(this.passwordFormGroup.value)
        .subscribe((value) => {
          console.log(value.uuid);
        });
    }
  }
  registerStep() {
    if (this.nameFormGroup.valid) {
      this.authService
        .register(this.nameFormGroup.value)
        .subscribe((data) => console.log(data));
    }
  }
}
