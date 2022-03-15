import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validatorintemplateform',
  templateUrl: './validatorintemplateform.component.html',
  styleUrls: ['./validatorintemplateform.component.scss'],
})
export class ValidatorintemplateformComponent implements OnInit {
  contact = new Contact();

  constructor() {}

  ngOnInit(): void {}

  onSubmit(contactForm: any) {
    console.log(contactForm.value);
  }
}

export class Contact {
  firstname: string = '';
  lastname: string = '';
  gender: string = 'male';
  isToc: boolean = true;
  email: string = '';
}
