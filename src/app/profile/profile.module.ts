import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfileService } from './services/profile.service';
import { CreateProfileComponent } from './components/profile/create-profile/create-profile.component';
import { FormsModule } from '@angular/forms';
import { httpInterceptors } from '../shared/interceptors';
import { AddEduComponent } from './components/exp/add-edu/add-edu.component';
import { AddExpComponent } from './components/exp/add-exp/add-exp.component';

@NgModule({
  declarations: [CreateProfileComponent, AddEduComponent, AddExpComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ProfileRoutingModule],
  providers: [ProfileService, httpInterceptors],
})
export class ProfileModule {}
