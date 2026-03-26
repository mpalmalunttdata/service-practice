import { Component, inject, input, resource } from '@angular/core';
import { ActivitiesService } from '../../core/services/activities';
import { ActivitiesSignalsService } from '../../core/services/activities-signals/activities-signals-service';
import { IActivity } from '../../shared/models/activity.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-activity',
  imports: [],
  templateUrl: './activity.html',
  styleUrl: './activity.scss',
})
export class ActivityComponent {
  readonly id = input.required<string>();

  readonly activitiesSignalsService = inject(ActivitiesSignalsService);

  readonly activity = resource<IActivity | null, { id: string }>({
    params: () => ({ id: this.id() }),
    loader: ({ params }) =>
      firstValueFrom(this.activitiesSignalsService.getActivityById(params.id)),
    defaultValue: null,
  });
}
