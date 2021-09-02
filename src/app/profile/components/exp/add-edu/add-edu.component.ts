import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/profile/models/education';
import { Experience } from 'src/app/profile/models/experience';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-add-edu',
  templateUrl: './add-edu.component.html',
  styleUrls: ['./add-edu.component.css'],
})
export class AddEduComponent implements OnInit {
  edu: Education = {
    degree: '',
    school: '',
    fieldofstudy: '',
    from: '',
    to: '',
    marks: 0,
  };
  errors: any = {};

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {}
  eduSubmit() {
    this.profileService.addEdu(this.edu).subscribe(
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
