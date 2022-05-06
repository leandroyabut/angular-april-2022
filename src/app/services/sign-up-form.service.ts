import { Injectable } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

interface RegistrationForm {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class SignUpFormService {

  signUpForm: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      email: new FormControl(""),
      username: new FormControl(""),
      password: new FormControl("")
    });

    this.signUpForm.addControl("confirmPassword", new FormControl("", [

    ]));
  }

  signUp() {
    const { confirmPassword, ...request} = this.signUpForm.value;
    console.log(request);
    this.httpClient.get<RegistrationForm>("http://localhost:8888/users/registration").subscribe(
      data => console.log(data.username, data.password)
    )
  }
}
