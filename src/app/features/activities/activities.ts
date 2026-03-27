import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { take } from 'rxjs';
import { ActivitiesService } from '../../core/services/activities';
import { CardComponent } from '../../shared/components/card/card';
import { FilterComponent } from './components/filter/filter';

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
