import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import {
  debounce,
  debounceTime,
  distinct,
  distinctUntilChanged,
  first,
  take,
} from 'rxjs';
import { SalaryFormModel, SalaryModel } from 'src/app/models/Salary.model';
import { SalaryDataService } from 'src/app/services/salary/salary-data.service';
import { CustomFormValidators } from 'src/app/shared/validators/customValidators';
import { environment } from 'src/environments/environment';

const DEFAULT_SYMBOL = environment.currency;

@Component({
  selector: 'app-salary-modal',
  templateUrl: './salary-modal.component.html',
  styleUrls: ['./salary-modal.component.scss'],
})
export class SalaryModalComponent {
  salaryForm = new FormGroup<SalaryFormModel>({
    amount: new FormControl('', [Validators.required]),
    dayOfMonth: new FormControl(''),
  });

  salaryData!: SalaryModel;
  symbol!: string;

  constructor(
    private modalCtrl: ModalController,
    private salaryDataService: SalaryDataService
  ) {}

  ngOnInit(): void {
    this.loadData();
    this.resolveSymbol();
    this.subscribeToDayOfMonthFormFieldChanges();
  }

  loadData() {
    this.salaryDataService.getData().subscribe((salary) => {
      if (!(JSON.stringify(salary) === '{}' || salary === null)) {
        this.salaryData = salary as SalaryModel;
        this.initForm();
      }
    });
  }

  initForm() {
    this.salaryForm.get('amount')?.patchValue(this.salaryData.amount as any)
    this.salaryForm.get('dayOfMonth')?.patchValue(this.salaryData.dayOfMonth as any)
  }

  subscribeToDayOfMonthFormFieldChanges() {
    this.salaryForm
      .get('dayOfMonth')
      ?.valueChanges.pipe(debounceTime(100), distinctUntilChanged())
      .subscribe((value) => {
        if (!!value) {
          this.salaryForm
            .get('dayOfMonth')
            ?.setValidators([
              CustomFormValidators.validateDayOfMonthRange,
              CustomFormValidators.validateDayOfMonthInteger,
            ]);
        } else {
          this.salaryForm.get('dayOfMonth')?.setValidators([]);
          this.salaryForm.get('dayOfMonth')?.updateValueAndValidity();
        }
      });
  }

  resolveSymbol() {
    this.symbol = DEFAULT_SYMBOL;
  }

  isValidForm() {
    return this.salaryForm.valid;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (!this.isValidForm()) {
      console.log('INVALID');
      return;
    }
    return this.modalCtrl.dismiss(this.salaryForm.value, 'confirm');
  }
}
