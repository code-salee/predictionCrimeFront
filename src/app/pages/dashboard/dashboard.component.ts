import { Component } from '@angular/core';
import { EcommerceMetricsComponent } from '../../shared/components/user-info-and-chart/ecommerce-metrics/ecommerce-metrics.component';
import { MonthlySalesChartComponent } from '../../shared/components/user-info-and-chart/monthly-sales-chart/monthly-sales-chart.component';
import { MonthlyTargetComponent } from '../../shared/components/user-info-and-chart/monthly-target/monthly-target.component';
import { StatisticsChartComponent } from '../../shared/components/user-info-and-chart/statics-chart/statics-chart.component';
import { DemographicCardComponent } from '../../shared/components/user-info-and-chart/demographic-card/demographic-card.component';
import { RecentOrdersComponent } from '../../shared/components/user-info-and-chart/recent-orders/recent-orders.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule,
    EcommerceMetricsComponent,
    MonthlySalesChartComponent,
    MonthlyTargetComponent,
    StatisticsChartComponent,
    DemographicCardComponent,
    RecentOrdersComponent,
  ],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {}
