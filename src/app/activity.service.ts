import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from './type';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  getActivity(ActivityId: string): Observable<Activity>{
    return this.httpClient.get<Activity>(API +"/"+ ActivityId);
  }

  getAcivities(): Observable<Activity[]>{
    return this.httpClient.get<Activity[]>(API);
  }
}
const API="http://localhost:3000/activities"