import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Activity } from '../type';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.page.html',
  styleUrls: ['./activity-detail.page.scss'],
})
export class ActivityDetailPage implements OnInit {
   activityDetail: Observable<Activity>;
  constructor(activityService: ActivityService,
              activatedRoute: ActivatedRoute) { 
                const ActivityID: string = activatedRoute.snapshot.params["activityId"];
                this.activityDetail = activityService.getActivity(ActivityID);
              }

  ngOnInit() {
  }

}
