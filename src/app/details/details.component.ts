import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" [alt]="housingLocation?.name" />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
        <section class="listing-features">
          <h2 class="section-heading">About housing location</h2>
          <ul>
            <li *ngIf="housingLocation?.availableUnits">Units available: {{housingLocation?.availableUnits}}</li>
            <li *ngIf="housingLocation?.wifi">Wifi: {{housingLocation?.wifi}}</li>
            <li *ngIf="housingLocation?.laundry">Laundry: {{housingLocation?.laundry}}</li>
          </ul>
        </section>
        <section class="listing-apply">
          <br>
          <h4 class="section-heading">Apply to rent this housing location:</h4>
          <button class="primary">Apply</button>
        </section>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params[('id')]);
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }
}
