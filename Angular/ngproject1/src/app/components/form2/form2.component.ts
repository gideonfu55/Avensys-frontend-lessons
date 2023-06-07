/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  myForm!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.min(18)],

      users: this.formBuilder.array([
        this.createUserFormGroup()
      ])
    });
  }

  createUserFormGroup(): FormGroup {
    return this.formBuilder.group({
      name: '',
      email: '',
      age: ''
    })
  }

  // this.myForm = this.fb.group({
  //   'firstname': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),

  //   'description': new FormControl('', Validators.minLength(10)),

  //   'type': new FormControl(''),

  //   'users': new FormArray([
  //     'name': new FormControl(''),
  //     'marks': new FormControl(''),
  //     'branch': new FormControl(''),
  //   ])

  // })

  onSubmit() {
    if (this.myForm.valid) {
      // Perform form submission logic here
      console.log(this.myForm.value);
      // For getting form values based on types:
      // console.log(this.myForm.get('name')?.value)
    }
  }

  setValue() {
    const details = {
      name: 'Gideon Fu',
      email: 'gideonfuzl@gmail.com',
      age: 25,
    };
    this.myForm.patchValue(details);
  }

  updateValue() {
    this.myForm.valueChanges.subscribe(data => {
      this.data = data;
    })
  }

  onReset() {
    this.myForm.reset();
  }

  get usersArray() {
    return this.myForm.get('users') as FormArray;
  }

  addUser() {
    const userArr = this.usersArray
    const newUser = this.formBuilder.group({
      'name': '',
      'email': '',
      'age': ''
    })
    userArr.push(newUser)
  }
}
