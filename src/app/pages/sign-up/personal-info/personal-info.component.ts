import { Component, OnInit } from '@angular/core';
import {SignUpFormService} from '../../../services/sign-up-form.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.sass']
})
export class PersonalInfoComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(public signUpFormService: SignUpFormService) {
    this.signUpForm = this.signUpFormService.signUpForm;
  }

  ngOnInit(): void {
  }

}
