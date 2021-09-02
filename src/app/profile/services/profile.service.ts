import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';
import { Experience } from '../models/experience';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  api = 'api/profile';
  constructor(private httpClient: HttpClient) {}
  getProfile(): Observable<any> {
    return this.httpClient.get(this.api);
  }

  createProfile(profileData: Profile): Observable<any> {
    return this.httpClient.post(this.api, profileData);
  }

  addExp(experienceData: Experience): Observable<any> {
    return this.httpClient.post(this.api + '/experience', experienceData);
  }
  addEdu(educationData: Education): Observable<any> {
    return this.httpClient.post(this.api + '/education', educationData);
  }
}
