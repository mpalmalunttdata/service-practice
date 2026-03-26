import { Component, inject, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from './components/card/card';
import { take } from 'rxjs';
import { FilterComponent } from './components/filter/filter';
import { ActivitiesSignalsService } from '../../core/services/activities-signals/activities-signals-service';

@Component({
  selector: 'app-activities',
  imports: [CardComponent, FilterComponent],
  templateUrl: './activities.html',
  styleUrl: './activities.scss',
})
export class ActivitiesSignalsComponent {
  activitiesService = inject(ActivitiesSignalsService);
  filteredActivities = this.activitiesService.filteredActivities;
}
