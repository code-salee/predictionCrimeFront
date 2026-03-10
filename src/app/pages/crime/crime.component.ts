import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../../shared/components/interface/table-column';
import { TableConfig } from '../../shared/components/interface/tale-config';
import { BasicTableComponent } from '../../shared/components/tables/basic-table.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crime',
  imports: [CommonModule, BasicTableComponent, ButtonComponent, RouterOutlet],
  templateUrl: './crime.component.html',
  styleUrl: './crime.component.css',
  standalone: true,
})
export class CrimeComponent {

      private router = inject(Router);

  icons= {
       plus :  `<svg xmlns="http://www.w3.org/2000/svg" class = "icon-plus" width="20" height="20" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>`,
  };
    
    // parent.component.ts
  columns: TableColumn[] = [
    { key: 'id',     label: '#',  cssClass: 'font-medium text-gray-800 dark:text-white/90' },
    { key: 'type', label: 'Type', type: 'text' },
    { key: 'lieu',  label: 'Place',   type: 'text' },
    { key: 'nombre_victime',       label: 'Victims No', type: 'number' },
    { key: 'date',    label: 'Date',     type: 'date', dateFormat: 'medium', cssClass: 'text-success-600' },
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
    title: 'Crime List',
    showSearch: true,
    showFilter: true,
    pageSize: 10,
  };
  

  tableData = [
  { id: 1,  type: 'Homicide',        lieu: 'Paris 18e',       nombre_victime: 2,  date: new Date('2024-01-05T14:32:00Z') },
  { id: 2,  type: 'Braquage',        lieu: 'Lyon 3e',         nombre_victime: 0,  date: new Date('2024-01-12T09:15:00Z') },
  { id: 3,  type: 'Agression',       lieu: 'Marseille 13e',   nombre_victime: 1,  date: new Date('2024-02-03T22:47:00Z') },
  { id: 4,  type: 'Cambriolage',     lieu: 'Bordeaux Centre', nombre_victime: 0,  date: new Date('2024-02-18T03:20:00Z') },
  { id: 5,  type: 'Enlèvement',      lieu: 'Toulouse Mirail', nombre_victime: 1,  date: new Date('2024-03-07T16:55:00Z') },
  { id: 6,  type: 'Homicide',        lieu: 'Nice Ouest',      nombre_victime: 3,  date: new Date('2024-03-21T11:30:00Z') },
  { id: 7,  type: 'Trafic de drogue',lieu: 'Strasbourg',      nombre_victime: 0,  date: new Date('2024-04-09T19:10:00Z') },
  { id: 8,  type: 'Agression',       lieu: 'Nantes Centre',   nombre_victime: 2,  date: new Date('2024-04-25T23:05:00Z') },
  { id: 9,  type: 'Fraude',          lieu: 'Lille Faubourg',  nombre_victime: 5,  date: new Date('2024-05-14T08:40:00Z') },
  { id: 10, type: 'Braquage',        lieu: 'Montpellier Est', nombre_victime: 1,  date: new Date('2024-05-30T13:25:00Z') },
  { id: 11, type: 'Cambriolage',     lieu: 'Rennes Centre',   nombre_victime: 0,  date: new Date('2024-06-11T04:50:00Z') },
  { id: 12, type: 'Trafic d\'armes', lieu: 'Grenoble Sud',    nombre_victime: 0,  date: new Date('2024-06-28T17:35:00Z') },
  { id: 13, type: 'Enlèvement',      lieu: 'Toulon Port',     nombre_victime: 2,  date: new Date('2024-07-15T20:00:00Z') },
];

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
  
  goToAddCrime(): void {
    console.log('Add Crime');
    // ta logique ici
        this.router.navigate(['/crime/add']);
  }
}
