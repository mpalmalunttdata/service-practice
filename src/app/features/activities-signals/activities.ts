import { Component, inject } from '@angular/core';

import { ActivitiesSignalsService } from '../../core/services/activities-signals/activities-signals-service';
import { CardComponent } from '../../shared/components/card/card';
import { FilterComponent } from './components/filter/filter';

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
