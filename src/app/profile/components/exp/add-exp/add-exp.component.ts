import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/profile/models/experience';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-exp',
  templateUrl: './add-exp.component.html',
  styleUrls: ['./add-exp.component.css'],
})
export class AddExpComponent implements OnInit {
  exp: Experience = {
    title: '',
    company: '',
    location: '',
    from: '',
    to: '',
    current: '',
    description: '',
  };
  errors: any = {};

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {}
  expSubmit() {
    this.profileService.addExp(this.exp).subscribe(
      (res) => {
        this.router.navigate(['/dashboard/user']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        this.errors = err.error;
      }
    );
  }
}
