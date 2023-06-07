import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component {
  firstname = '';
  description = '';
  selectBox = '';
  checked = false;

  getForm(formValue: NgForm) {
    console.log(formValue.value);
  }

  resetForm(form: NgForm) {
    form.reset();
  }

  setValue(form: NgForm) {
    const details = {
      firstname: 'newName',
      description: 'write something',
      selectBox: 1,
      checked: true,
    }
    form.setValue(details)
  }
}
