
import { Component } from '@angular/core';
import { PageBreadcrumbComponent } from '../../../shared/components/common/page-breadcrumb/page-breadcrumb.component';
import { ComponentCardComponent } from '../../../shared/components/common/component-card/component-card.component';
import { ComponentBarChartComponent } from '../../../shared/components/charts/bar/component-bar-chart.component';

@Component({
  selector: 'app-bar-chart',
  imports: [
    ComponentCardComponent,
    PageBreadcrumbComponent,
    ComponentBarChartComponent
],
  templateUrl: './bar-chart.component.html',
  styles: ``
})
export class BarChartComponent {

}
