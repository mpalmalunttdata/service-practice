import { inject, Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  combineLatest,
  finalize,
  map,
  Observable,
  of,
  tap,
  throwError,
} from 'rxjs';
import { IActivity, IActivityFilters } from '../../shared/models/activity.interface';
import { HttpClient } from '@angular/common/http';
import { MOCK_ACTIVITIES } from '../../shared/mocks/activities.mock';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  http = inject(HttpClient);

  private _activities$ = new BehaviorSubject<IActivity[]>([]);
  readonly activities$ = this._activities$.asObservable();

  private readonly _loading$ = new BehaviorSubject<boolean>(false);
  readonly loading$ = this._loading$.asObservable();

  private readonly _error$ = new BehaviorSubject<string | null>(null);
  readonly error$ = this._error$.asObservable();

  private readonly _searchTerm$ = new BehaviorSubject<IActivityFilters>({
    text: '',
    price: null,
    duration: null,
    type: '',
  });
  readonly searchTerm$ = this._searchTerm$.asObservable();

  readonly filteredActivities$ = combineLatest([this._activities$, this.searchTerm$]).pipe(
    map(([activities, f]) => {
      return activities.filter(
        (a) =>
          this.matchesText(a, f) &&
          this.matchesPrice(a, f) &&
          this.matchesDuration(a, f) &&
          this.matchesType(a, f),
      );
    }),
  );

  loadActivities(): Observable<IActivity[]> {
    this._loading$.next(true);
    this._error$.next(null);

    return of(MOCK_ACTIVITIES).pipe(
      tap((activities) => this._activities$.next(activities)),
      catchError((err) => {
        this._error$.next('No se pudieron cargar las actividades');
        return throwError(() => err);
      }),
      finalize(() => this._loading$.next(false)),
    );
  }

  setSearchTerm(filter: IActivityFilters) {
    this._searchTerm$.next(filter);
  }

  private normalize(s: string) {
    return s.trim().toLowerCase();
  }

  private matchesText(a: IActivity, f: IActivityFilters): boolean {
    const q = this.normalize(f.text ?? '');
    if (!q) return true;

    const title = this.normalize(a.title ?? '');
    const desc = this.normalize(a.description ?? '');
    return title.includes(q) || desc.includes(q);
  }

  private matchesPrice(a: IActivity, f: IActivityFilters): boolean {
    if (f.price == null) return true;
    // ajusta según tu modelo: a.price, a.cost, etc.
    return a.price <= f.price;
    // o si es “máximo”: return a.price &lt;= f.price;
  }

  private matchesDuration(a: IActivity, f: IActivityFilters): boolean {
    if (f.duration == null) return true;
    return f.duration >= a.duration;
  }

  private matchesType(a: IActivity, f: IActivityFilters): boolean {
    const q = this.normalize(f.type ?? '');
    if (!q) return true;

    const type = this.normalize(a.type ?? '');
    return type === q;
  }
}
