import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.scss'],
})
export class FormarrayComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive forms';
  skillsForm!: FormGroup;

  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.skillsForm = this.fb.group({
      name: [''],
      skills: this.fb.array([]),
    });
    console.log(this.skillsForm);
  }

  newSkill() {
    return this.fb.group({
      skill: [''],
      exp: '',
    });
  }

  addSkills() {
    this.skills.push(this.newSkill());
  }

  removeSkill(i: number) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    console.log(this.skillsForm.value);
  }
}

export class country {
  constructor(public id: string, public name: string) {}
}
