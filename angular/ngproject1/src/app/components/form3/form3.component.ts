/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      users: this.formBuilder.array([])
    })
  }

  get usersArray(): FormArray {
    return this.myForm.get('users') as FormArray;
  }

  createUserFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: '',
      email: '',
      age: '',
      eligibility: ''
    });
  }

  addUser() {
    const userFormGroup = this.createUserFormGroup();
    this.usersArray.push(userFormGroup);
  }

  removeElement(index: number) {
    this.usersArray.removeAt(index);
  }

  assign(i: number) {
    const arr = this.myForm.get('users') as FormArray;
    const values = arr.value
    if (values[i].age > 60) {
      values[i].eligibility = 'You are not eligible'
    } else {
      values[i].eligibility = 'You are eligible.'
    }
    this.usersArray.setValue(values)
  }

}
