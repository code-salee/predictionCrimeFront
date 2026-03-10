export interface TableAction {
  type: 'edit' | 'delete' | 'view' | 'custom';
  label?: string;
  icon?: string; // SVG custom si besoin
  action: (row: any) => void;
}