import { FormControl } from "@angular/forms";

export interface ExpenseModel {
  id: string;
  amount: number;
  dayOfMonth: number;
  category: Categories;
  description: string;
}

export enum Categories {
  Bills = 'Bills',
  Food = 'Food'
}

export interface ExpenseFormModel {
  amount: FormControl<string | null>;
  dayOfMonth: FormControl<string | null>;
  category: FormControl<string | null>;
  description: FormControl<string | null>;
}