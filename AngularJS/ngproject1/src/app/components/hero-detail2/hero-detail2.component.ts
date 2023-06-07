import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-detail2',
  templateUrl: './hero-detail2.component.html',
  styleUrls: ['./hero-detail2.component.css'],
})
export class HeroDetail2Component {

  audi = '';
  benz = '';
  ducatti = '';

  constructor(private active: ActivatedRoute) {
    this.active.queryParams.subscribe(params => {
      this.audi = params['audi'];
      this.benz = params['benz'];
      this.ducatti = params['ducatti'];
    })
  }
}
