import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from './custom.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses = [
      {text: 'Please select a value', value: ''},
      {text: 'Stable', value: 'Stable'},
      {text: 'Critical', value: 'Critical'},
      {text: 'Finished', value: 'Finished'}];
  projectform: FormGroup;

  ngOnInit() {
    this.projectform = new FormGroup({
      'projectname': new FormControl(null, [Validators.required], CustomValidators.projectIsValidAsync.bind(this)),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'status': new FormControl('')
    });
  }

  onSubmit() {
    console.log(`Project Name: ${this.projectform.controls['projectname'].value}`);
    console.log(`Project Name: ${this.projectform.controls['email'].value}`);
    console.log(`Project Name: ${this.projectform.controls['status'].value}`);
  }

  // Validation moved to custom.validators.ts
  // Validation functions return a JavaScript object key is a string, value is a boolean
  // projectIsValid(control: FormControl): { [s: string]: boolean } {
  //   // Check if control has a value
  //   if (control.value != null) {
  //     // Convert value to a string and convert to lowercase
  //     const val = (<string>control.value).toLowerCase();
  //     // Return true if object is not valid, null if it is valid
  //     if (val === 'test') {
  //       return { 'nameIsForbidden': true };
  //     } else {
  //       return (null);
  //     }
  //   }
  // }

  // projectIsValidAsync(control: FormControl): Promise<any> | Observable<any> {
  //   const promise = new Promise(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         // Check if control has a value
  //         if (control.value != null) {
  //           // Convert value to a string and convert to lowercase
  //           const val = (<string>control.value).toLowerCase();
  //           // Return true if object is not valid, null if it is valid
  //           if (val === 'test') {
  //             resolve({ 'nameIsForbidden': true });
  //           } else {
  //             resolve(null);
  //           }
  //         }
  //       }
  //         , 1500);
  //     });
  //   return promise;
  // }
}
