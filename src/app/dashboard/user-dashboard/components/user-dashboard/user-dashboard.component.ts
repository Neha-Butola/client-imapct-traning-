import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/profile/models/profile';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { Register } from 'src/app/user/model/register';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  userDetail: Register = JSON.parse(
    localStorage.getItem('userDetails') || '{}'
  );
  errors: any;
  profile: Profile = {
    handle: '',
    status: '',
    company: '',
    website: '',
    location: '',
    skills: [],
    gitusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(
      (res) => {
        console.log(JSON.stringify(res));
        this.profile = res;
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }
}
