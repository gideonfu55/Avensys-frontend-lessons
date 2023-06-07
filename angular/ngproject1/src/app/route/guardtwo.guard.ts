import { CanActivateChildFn } from '@angular/router';

export const guardtwoGuard: CanActivateChildFn = (childRoute, state) => {
  return true;
};
