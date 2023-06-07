/* eslint-disable @typescript-eslint/no-unused-vars */
import { CanDeactivateFn } from '@angular/router';
import { ProductComponent } from 'src/app/components/product/product.component';

export const guardthreeGuard: CanDeactivateFn<ProductComponent> = (component: ProductComponent, currentRoute, currentState, nextState) => {
  // return false; // doesn't allow user to navigate away from the product component.

  if (component.isAllowed == true) {
    return true;
  } else {
    return false;
  }

};
