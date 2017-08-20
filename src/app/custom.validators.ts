import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

export class CustomValidators {
  static projectIsValid(control: FormControl): { [s: string]: boolean } {
    // Check if control has a value
    if (control.value != null) {
      // Convert value to a string and convert to lowercase
      const val = (<string>control.value).toLowerCase();
      // Return true if object is not valid, null if it is valid
      if (val === 'test') {
        return { 'nameIsForbidden': true };
      } else {
        return (null);
      }
    }
  }

  static projectIsValidAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          // Check if control has a value
          if (control.value != null) {
            // Convert value to a string and convert to lowercase
            const val = (<string>control.value).toLowerCase();
            // Return true if object is not valid, null if it is valid
            if (val === 'test') {
              resolve({ 'nameIsForbidden': true });
            } else {
              resolve(null);
            }
          }
        }
          , 1500);
      });
    return promise;
  }
}
