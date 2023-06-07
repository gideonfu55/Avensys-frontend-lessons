import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  // Variables:
  message = true;
  print1 = 'hello everyone';
  option = 'Batman';
  r = 'red';
  g = 'green';
  color = 'pink';
  class = 'a1 a2 a3 a4';
  sentence = 'this is a sentence for NgClass.';
  header = 'This is a h1 header.';
  val = 2;
  superpower = 'God mode';
  lowerCase = 'This was supposed to be in lowercase.';
  upperCase = 'THIS WAS SUPPOSED TO BE IN UPPERCASE.';
  date_current = Date.now();
  num_value = 10000000;
  num_value2 = 0.9;

  // Objects:
  contacts = [
    {
      firstName: 'Bruce',
      lastName: 'Wayne',
      id: '12345',
    },
    {
      firstName: 'Peter',
      lastName: 'Parker',
      id: '23456',
    },
    {
      firstName: 'Barry',
      lastName: 'Allen',
      id: '34567',
    },
    {
      firstName: 'Tony',
      lastName: 'Stark',
      id: '45678',
    },
  ];

  object1 = {
    value1: 'ships',
    value2: 'trains',
    value3: 'cars',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // Functions:
  hello() {
    alert('Hello everyone!');
  }

  provideNumbersSum(a: number, b: number, c: number) {
    alert(a + b + c);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provideString(firstName: any, lastName: any, adjective: any) {
    alert(`${firstName} ${lastName} is ${adjective}.`);
  }
}
