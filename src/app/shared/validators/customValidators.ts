import { AbstractControl, FormGroup, Validators } from '@angular/forms';

export class CustomFormValidators {
  static validateDayOfMonthRange(control: AbstractControl) {
    if (control.value >= 1 && control.value <= 31) {
      return null;
    }
    return { outOfRange: true };
  }

  static validateDayOfMonthInteger(control: AbstractControl) {
    if (Number.isInteger(control.value)) {
      return null;
    }
    return { nonInteger: true };
  }

  static validations = {
    amount: [
      { type: 'required', message: 'Value is required' },
      { type: 'pattern', message: 'Must be a number' },
    ],
    dayOfMonth: [
      { type: 'required', message: 'Value is required' },
      { type: 'pattern', message: 'Must be a number' },
      { type: 'nonInteger', message: 'Value must be an integer' },
      { type: 'outOfRange', message: 'Value must be between 1 and 31' },
    ],
    category: [{ type: 'required', message: 'Value is required' }],
  };
}
