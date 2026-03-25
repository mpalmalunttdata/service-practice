import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from './components/card/card';
import { take } from 'rxjs';
import { FilterComponent } from './components/filter/filter';
import { ActivitiesService } from '../../core/services/activities';

@Component({
  selector: 'app-activities',
  imports: [AsyncPipe, CardComponent, FilterComponent],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class ActivitiesComponent implements OnInit {
  activitiesService = inject(ActivitiesService);
  filteredActivities$ = this.activitiesService.filteredActivities$;

  ngOnInit(): void {
    this.activitiesService.loadActivities().pipe(take(1)).subscribe();
  }
}
