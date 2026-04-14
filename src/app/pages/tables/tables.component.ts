import { Component } from '@angular/core';
import { ComponentCardComponent } from '../../shared/components/common/component-card/component-card.component';
import { PageBreadcrumbComponent } from '../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableColumn } from '../../shared/components/interface/table-column';
import { TableConfig } from '../../shared/components/interface/tale-config';
import { BasicTableTwoComponent } from '../../shared/components/tables/basic-tables/basic-table-two/basic-table-two.component';
import { BasicTableThreeComponent } from '../../shared/components/tables/basic-tables/basic-table-three/basic-table-three.component';
import { BasicTableFiveComponent } from '../../shared/components/tables/basic-tables/basic-table-five/basic-table-five.component';
import { BasicTableFourComponent } from '../../shared/components/tables/basic-tables/basic-table-four/basic-table-four.component';
import { BasicTableComponent } from '../../shared/components/tables/basic-table.component';

@Component({
  selector: 'app-tables',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    ComponentCardComponent,
    PageBreadcrumbComponent,
    BasicTableTwoComponent,
    BasicTableThreeComponent,
    BasicTableFourComponent,
    BasicTableFiveComponent,
    BasicTableComponent
  ],
  templateUrl: './tables.component.html',
  styles: ``
})
export class BasicTablesComponent {

  // parent.component.ts
columns: TableColumn[] = [
  { key: 'name',     label: 'Products',  cssClass: 'font-medium text-gray-800 dark:text-white/90' },
  { key: 'category', label: 'Category' },
  { key: 'country',  label: 'Country',   type: 'image' },
  { key: 'cr',       label: 'CR' },
  { key: 'value',    label: 'Value',     type: 'currency', cssClass: 'text-success-600' },
  {
    key: 'action',
    label: 'Actions',
    type: 'actions',
    actions: [
      {
        type: 'view',
        label: 'View',
        action: (row) => this.onView(row),
      },
      {
        type: 'edit',
        label: 'Edit',
        action: (row) => this.onEdit(row),
      },
      {
        type: 'delete',
        label: 'Delete',
        action: (row) => this.onDelete(row),
      },
    ],
  },
];

tableConfig: TableConfig = {
  title: 'Recent Orders',
  showSearch: true,
  showFilter: true,
  pageSize: 5,
};

  tableData = [
    {
      id: 1,
      name: 'TailGrids',
      category: 'UI Kits',
      country: '/images/country/country-01.svg',
      cr: 'Dashboard',
      value: '12,499',
    },
    {
      id: 2,
      name: 'GrayGrids',
      category: 'Templates',
      country: '/images/country/country-02.svg',
      cr: 'Dashboard',
      value: '5498',
    },
    {
      id: 3,
      name: 'Uideck',
      category: 'Templates',
      country: '/images/country/country-03.svg',
      cr: 'Dashboard',
      value: '4621',
    },
    {
      id: 4,
      name: 'FormBold',
      category: 'SaaS',
      country: '/images/country/country-04.svg',
      cr: 'Dashboard',
      value: '13843',
    },
    {
      id: 5,
      name: 'NextAdmin',
      category: 'Templates',
      country: '/images/country/country-05.svg',
      cr: 'Dashboard',
      value: '7523',
    },
    {
      id: 6,
      name: 'Form Builder',
      category: 'Templates',
      country: '/images/country/country-06.svg',
      cr: 'Dashboard',
      value: '1,377',
    },
    {
      id: 7,
      name: 'AyroUI',
      category: 'Templates',
      country: '/images/country/country-07.svg',
      cr: 'Dashboard',
      value: '599,00',
    },
  ];

  // basic-tables.component.ts

onView(row: any): void {
  console.log('View', row);
  // ta logique ici
}

onEdit(row: any): void {
  console.log('Edit', row);
  // ta logique ici
}

onDelete(row: any): void {
  console.log('Delete', row);
  // ta logique ici
}
}
