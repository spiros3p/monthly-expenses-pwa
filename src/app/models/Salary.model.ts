import { FormControl } from "@angular/forms";

export interface SalaryModel {
  id: string;
  amount: number;
  dayOfMonth?: number;
}

export interface SalaryFormModel {
  amount: FormControl<string | null>;
  dayOfMonth: FormControl<string | null>;
}
