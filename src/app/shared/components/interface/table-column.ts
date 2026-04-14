import { TableAction } from "./table-action";

export interface TableColumn {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date' | 'image' | 'badge' | 'currency' | 'custom' | 'button' | 'actions';
  currencySymbol?: string;
  cssClass?: string;
  buttonLabel?: string;
  buttonVariant?: 'primary' | 'outline' | 'danger' | 'warning';
  dateFormat?: string;
  actions?: TableAction[];
}