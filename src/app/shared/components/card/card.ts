import { Component, input, InputSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { activityTypeLabel, IActivity } from '../../models/activity.interface';

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
