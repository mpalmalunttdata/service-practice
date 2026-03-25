import { computed, Injectable, signal } from '@angular/core';
import { MOCK_ACTIVITIES } from '../../../shared/mocks/activities.mock';
import { IActivity, IActivityFilters } from '../../../shared/models/activity.interface';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesSignalsService {
  readonly #allActivities = signal<IActivity[]>(MOCK_ACTIVITIES);
  readonly activities = this.#allActivities.asReadonly();

  readonly #searchTerm = signal<IActivityFilters>({} as IActivityFilters);
  readonly searchTerm = this.#searchTerm.asReadonly();

  readonly filteredActivities = computed(() => {
    const f = this.#searchTerm();
    return this.#allActivities().filter(
      (a) =>
        this.matchesText(a, f.text ?? '') &&
        this.matchesPrice(a, f.price ?? null) &&
        this.matchesType(a, f.type ?? ''),
    );
  });

  setFilters(filters: IActivityFilters) {
    console.log(filters);
    this.#searchTerm.set({ ...filters });
    console.log(this.filteredActivities().length);
  }

  private normalize(s: string) {
    return s.trim().toLowerCase();
  }

  private matchesText(a: IActivity, f: string): boolean {
    const q = this.normalize(f ?? '');
    if (!q) return true;

    const title = this.normalize(a.title ?? '');
    const desc = this.normalize(a.description ?? '');
    return title.includes(q) || desc.includes(q);
  }

  private matchesPrice(a: IActivity, f: number | null): boolean {
    if (f == null) return true;
    // ajusta según tu modelo: a.price, a.cost, etc.
    return a.price <= f;
    // o si es “máximo”: return a.price &lt;= f;
  }

  private matchesDuration(a: IActivity, f: number | null): boolean {
    if (f == null) return true;
    return f >= a.duration;
  }

  private matchesType(a: IActivity, f: string): boolean {
    const q = this.normalize(f ?? '');
    if (!q) return true;

    const type = this.normalize(a.type ?? '');
    return type === q;
  }
}
