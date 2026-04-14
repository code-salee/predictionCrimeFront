
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableColumn } from '../interface/table-column';
import { TableConfig } from '../interface/tale-config';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent } from '../ui/button/button.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-basic-table',
  imports: [CommonModule, ButtonComponent],
  providers: [DatePipe],
  templateUrl: './basic-table.component.html',
  styles: ``
})
export class BasicTableComponent implements OnChanges {
  
  private sanitizer = inject(DomSanitizer);
  private datePipe =  inject(DatePipe)  // ← ajouter


  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() config: TableConfig = {
    title: 'Table',
    showSearch: true,
    showFilter: true,
    pageSize: 5,
  };

  readonly icons = {
  edit: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  delete: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  view: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
};

getIcon(type: string): SafeHtml {
  const icon = this.icons[type as keyof typeof this.icons] ?? '';
  return this.sanitizer.bypassSecurityTrustHtml(icon);
}

  currentPage = 1;
  searchQuery = '';
  filteredData: any[] = [];
  paginatedData: any[] = [];

  get totalPages(): number {
    return Math.ceil(this.filteredData.length / (this.config.pageSize ?? 5));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] || changes['config']) {
      this.applyFilter();
    }
  }

  onSearch(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value.toLowerCase();
    this.currentPage = 1;
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredData = this.data.filter(row =>
      this.columns.some(col =>
        String(row[col.key] ?? '').toLowerCase().includes(this.searchQuery)
      )
    );
    this.updatePage();
  }

  updatePage(): void {
    const pageSize = this.config.pageSize ?? 5;
    const start = (this.currentPage - 1) * pageSize;
    this.paginatedData = this.filteredData.slice(start, start + pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.updatePage();
  }

  getCellValue(row: any, col: TableColumn): any {
    return row[col.key];
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  formatDate(value: any, format: string = 'dd/MM/yyyy HH:mm'): string {
    return this.datePipe.transform(value, format) ?? '';
  }

}

