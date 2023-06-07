import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment.component';
import { HeroDetail3Component } from 'src/app/components/hero-detail3/hero-detail3.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentComponent
  },
  {
    path: 'hero-detail3',
    component: HeroDetail3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
