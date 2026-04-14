import { CrimeModel } from '../../shared/models/crime.model';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableColumn } from '../../shared/components/interface/table-column';
import { TableConfig } from '../../shared/components/interface/tale-config';
import { BasicTableComponent } from '../../shared/components/tables/basic-table.component';
import { ButtonComponent } from '../../shared/components/ui/button/button.component';
import { Router } from '@angular/router';
import { AddCrimeComponent } from "./add-crime/add-crime.component";
import { SweetAlertService } from '../../shared/services/sweet-alert.service';
import { CrimeService } from '../../shared/services/crime.service';

@Component({
  selector: 'app-crime',
  imports: [CommonModule, BasicTableComponent, ButtonComponent, AddCrimeComponent],
  templateUrl: './crime.component.html',
  styleUrl: './crime.component.css',
  standalone: true,
})
export class CrimeComponent {

      private router = inject(Router);
      private sweetAlertService = inject(SweetAlertService);
      private  crimeService = inject(CrimeService);


  icons= {
       plus :  `<svg xmlns="http://www.w3.org/2000/svg" class = "icon-plus" width="20" height="20" viewBox="0 0 640 640"><path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM296 408L296 344L232 344C218.7 344 208 333.3 208 320C208 306.7 218.7 296 232 296L296 296L296 232C296 218.7 306.7 208 320 208C333.3 208 344 218.7 344 232L344 296L408 296C421.3 296 432 306.7 432 320C432 333.3 421.3 344 408 344L344 344L344 408C344 421.3 333.3 432 320 432C306.7 432 296 421.3 296 408z"/></svg>`,
  };

  crimeData: CrimeModel | null = null;
  actionMode: 'view' | 'edit' | 'add' = 'add';

    
    // parent.component.ts
  columns: TableColumn[] = [
    { key: 'id',     label: '#',  cssClass: 'font-medium text-gray-800 dark:text-white/90' },
    { key: 'type', label: 'Type', type: 'text' },
    { key: 'place',  label: 'Place',   type: 'text' },
    { key: 'victimsNo',       label: 'Victims No', type: 'number' },
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
  { id: 1,  type: 'Homicide',        place: 'Paris 18e',       victimsNo: 2,  date: new Date('2024-01-05T14:32:00Z') },
  { id: 2,  type: 'Braquage',        place: 'Lyon 3e',         victimsNo: 0,  date: new Date('2024-01-12T09:15:00Z') },
  { id: 3,  type: 'Agression',       place: 'Marseille 13e',   victimsNo: 1,  date: new Date('2024-02-03T22:47:00Z') },
  { id: 4,  type: 'Cambriolage',     place: 'Bordeaux Centre', victimsNo: 0,  date: new Date('2024-02-18T03:20:00Z') },
  { id: 5,  type: 'Enlèvement',      place: 'Toulouse Mirail', victimsNo: 1,  date: new Date('2024-03-07T16:55:00Z') },
  { id: 6,  type: 'Homicide',        place: 'Nice Ouest',      victimsNo: 3,  date: new Date('2024-03-21T11:30:00Z') },
  { id: 7,  type: 'Trafic de drogue',place: 'Strasbourg',      victimsNo: 0,  date: new Date('2024-04-09T19:10:00Z') },
  { id: 8,  type: 'Agression',       place: 'Nantes Centre',   victimsNo: 2,  date: new Date('2024-04-25T23:05:00Z') },
  { id: 9,  type: 'Fraude',          place: 'Lille Faubourg',  victimsNo: 5,  date: new Date('2024-05-14T08:40:00Z') },
  { id: 10, type: 'Braquage',        place: 'Montpellier Est', victimsNo: 1,  date: new Date('2024-05-30T13:25:00Z') },
  { id: 11, type: 'Cambriolage',     place: 'Rennes Centre',   victimsNo: 0,  date: new Date('2024-06-11T04:50:00Z') },
  { id: 12, type: 'Trafic d\'armes', place: 'Grenoble Sud',    victimsNo: 0,  date: new Date('2024-06-28T17:35:00Z') },
  { id: 13, type: 'Enlèvement',      place: 'Toulon Port',     victimsNo: 2,  date: new Date('2024-07-15T20:00:00Z') },
];

  isModalAddCrimeOpen = false;


  onView(row: any): void {
    console.log('View', row);
    this.crimeData = row;
    this.actionMode = 'view';
    this.openModal(this.actionMode, this.crimeData);
  }
  
  onEdit(row: any): void {
    console.log('Edit', row);
    this.crimeData = row;
    this.actionMode = 'edit';
    this.openModal(this.actionMode, this.crimeData);
  }
  
  onDelete(row: any): void {
    console.log('Delete', row);
    this.sweetAlertService.successwithConfirmation('Are you sure you want to delete this crime?');
  }
  
  goToAddCrime(): void {
    console.log('Add Crime');
    this.actionMode = 'add';
    this.router.navigate(['/crime/add']);
  }

  openModal(mode: 'view' | 'edit' | 'add', row: any = null) {
    this.isModalAddCrimeOpen = false;
    this.crimeData = null;

    setTimeout(() => {
      this.crimeData = row;
      this.actionMode = mode;
      this.isModalAddCrimeOpen = true;
    }, 
    0);
}

  openModalAddCrime(): void {
    this.openModal('add', null);
    console.log('Open Add Crime Modal', this.isModalAddCrimeOpen);
  }

   closeModalAddCrime(): void {
    this.isModalAddCrimeOpen = false;
    console.log('Close Add Crime Modal', this.isModalAddCrimeOpen);
  }
}
