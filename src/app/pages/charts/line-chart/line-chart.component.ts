
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentLineChartComponent } from '../../../shared/components/charts/line/component-line-chart.component';


@Component({
  selector: 'app-line-chart',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    PageBreadcrumbComponent,
    ComponentCardComponent,
    ComponentLineChartComponent
],
  templateUrl: './line-chart.component.html',
  styles: ``
})
export class LineChartComponent {

}
