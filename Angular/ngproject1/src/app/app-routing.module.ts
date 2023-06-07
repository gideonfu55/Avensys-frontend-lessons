/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroDetail2Component } from './components/hero-detail2/hero-detail2.component';
import { HeroDetail3Component } from './components/hero-detail3/hero-detail3.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ErrorComponent } from './components/error/error.component';
import { guardoneGuard } from './route/guardone/guardone.guard';
import { guardtwoGuard } from './route/guardtwo.guard';
import { guardthreeGuard } from './route/guardthree/guardthree.guard';
import { Form1Component } from './components/form1/form1.component';
import { Form2Component } from './components/form2/form2.component';
import { Form3Component } from './components/form3/form3.component';

const routes: Routes = [
  {
    path: 'main',
    component: AppComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
    canDeactivate: [guardthreeGuard],
  },
  {
    path: 'product/:productId/discount/:discount',
    component: ProductComponent,
  },
  {
    path: 'form1',
    component: Form1Component,
  },
  {
    path: 'form2',
    component: Form2Component,
  },
  {
    path: 'form3',
    component: Form3Component,
  },
  {
    //Lazy loading:
    path: 'payment',
    loadChildren: () =>
      import('../app/modules/payment/payment.module').then(
        (m) => m.PaymentModule
      ),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
  // {
  //   path: 'home',
  //   redirectTo: "main"
  // },
  // {
  //   path: 'best',
  //   redirectTo: "main/hero-detail"
  // },
  // {
  //   path: 'main',
  //   children: [
  //     {
  //       path: 'hero-detail',
  //       component: HeroDetailComponent,
  //       // outlet: 'channel1',
  //     },
  //     {
  //       path: 'hero-detail3',
  //       component: HeroDetail3Component,
  //       canActivate: [guardoneGuard],
  //       // outlet: 'channel3',
  //     },
  //   ],
  // },

  // For using canActivateChildren and canActivate together:
  // {
  //   path: 'product',
  //   canActivate: [guardoneGuard],
  //   children: [
  //     {
  //       path: '',
  //       component: ProductComponent,
  //     },
  //     {
  //       path: '',
  //       canActivateChild: [guardtwoGuard],
  //       children: [
  //         {path: 'hero-detail', component: HeroDetailComponent},
  //         {path: 'hero-detail2', component: HeroDetail2Component}
  //       ]
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
