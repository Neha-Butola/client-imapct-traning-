import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from 'src/app/profile/services/profile.service';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { DashboardActionComponent } from './components/dashboard-action/dashboard-action.component';
import { ExpDetailsComponent } from './components/display/exp-details/exp-details.component';
import { EduDetailsComponent } from './components/display/edu-details/edu-details.component';
import { httpInterceptors } from 'src/app/shared/interceptors';

@NgModule({
  declarations: [
    UserDashboardComponent,
    DashboardActionComponent,
    ExpDetailsComponent,
    EduDetailsComponent,
  ],
  imports: [CommonModule, HttpClientModule, UserDashboardRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class UserDashboardModule {}
