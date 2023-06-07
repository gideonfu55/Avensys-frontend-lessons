import { CanActivateFn } from '@angular/router';

export const guardoneGuard: CanActivateFn = (route, state) => {
  return true;

  // Can use conditions to activate (return false) or deactivate (return true)
};
