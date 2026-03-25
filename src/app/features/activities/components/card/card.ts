import { Component, input, InputSignal } from '@angular/core';
import { IActivity, activityTypeLabel } from '../../../../shared/models/activity.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.scss',
  host: { class: 'card' },
})
export class CardComponent {
  activity: InputSignal<IActivity> = input.required<IActivity>();

  readonly activityTypeLabel = activityTypeLabel;
}
