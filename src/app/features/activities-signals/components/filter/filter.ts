import { Component, inject, OnInit } from '@angular/core';
import { ActivitiesService } from '../../../../core/services/activities';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map } from 'rxjs';
import { ACTIVITIES } from '../../../../shared/models/activity.interface';
import { ActivitiesSignalsService } from '../../../../core/services/activities-signals/activities-signals-service';

@Component({
  selector: 'app-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.scss',
})
export class FilterComponent implements OnInit {
  activitiesService = inject(ActivitiesSignalsService);

  options = Object.entries(ACTIVITIES).map(([key, value]) => ({ key: key.toLowerCase(), value }));

  fb = inject(FormBuilder);
  form: FormGroup;

  constructor() {
    this.form = this.fb.group({
      text: [''],
      price: [null],
      duration: [null],
      type: [''],
    });
  }

  ngOnInit() {
    this.form.valueChanges
      .pipe(
        debounceTime(300),
        map((v) => ({
          text: (v.text ?? '').trim(),
          price: v.price == null ? null : Number(v.price),
          duration: v.duration == null ? null : Number(v.duration),
          type: (v.type ?? '').trim(),
        })),
        distinctUntilChanged(
          (a, b) =>
            a.text === b.text &&
            a.price === b.price &&
            a.duration === b.duration &&
            a.type === b.type,
        ),
      )
      .subscribe((filters) => {
        // this.activitiesService.setSearchTerm(filters);
        this.activitiesService.setFilters(filters);
      });
  }
}
