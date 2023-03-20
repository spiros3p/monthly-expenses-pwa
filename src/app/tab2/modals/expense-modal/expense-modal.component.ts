import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ExpenseModel,
  ExpenseFormModel,
  Categories,
} from 'src/app/models/Expenses.model';
import { CustomFormValidators } from 'src/app/shared/validators/customValidators';
import { environment } from 'src/environments/environment';

const DEFAULT_SYMBOL = environment.currency;

@Component({
  selector: 'app-expense-modal',
  templateUrl: './expense-modal.component.html',
  styleUrls: ['./expense-modal.component.scss'],
})
export class ExpenseModalComponent implements OnInit {
  expenseForm = new FormGroup<ExpenseFormModel>({
    amount: new FormControl('', [Validators.required]),
    dayOfMonth: new FormControl('', [
      Validators.required,
      CustomFormValidators.validateDayOfMonthInteger,
      CustomFormValidators.validateDayOfMonthInteger,
    ]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl(''),
  });

  categories: string[] = Object.keys(Categories);
  symbol!: string;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.resolveSymbol();
  }

  resolveSymbol(){
    this.symbol = DEFAULT_SYMBOL;
  }

  onCategoryNewSelection($event: any) {
    this.expenseForm.get('category')!.patchValue($event);
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    if (!this.isValidForm()) {
      console.log('INVALID');
      this.printErrors();
      return
    }
    return this.modalCtrl.dismiss(this.expenseForm.value, 'confirm');
  }

  isValidForm() {
    return this.expenseForm.valid;
  }

  printErrors(){
    console.log(this.expenseForm.get('amount')?.errors)
    console.log(this.expenseForm.get('dayOfMonth')?.errors)
    console.log(this.expenseForm.get('category')?.errors)
    console.log(this.expenseForm.get('desctiption')?.errors)
  }


}
