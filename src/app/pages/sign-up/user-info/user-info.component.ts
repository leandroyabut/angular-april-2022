import { Component, OnInit } from '@angular/core';
import {SignUpFormService} from '../../../services/sign-up-form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public signUpFormService: SignUpFormService) {
    this.signUpForm = this.signUpFormService.signUpForm;
  }

  ngOnInit(): void {}

}
