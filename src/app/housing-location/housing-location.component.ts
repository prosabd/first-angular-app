import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="housing-location">
      <img [src]="housingLocation.photo" [alt]="housingLocation.name" />
      <section class="housing-location-info">
        <h2>{{ housingLocation.name }}</h2>
        <p>{{ housingLocation.city }}, {{ housingLocation.state }}</p>
        <a class="primary" [routerLink]="['/details', housingLocation.id]">Learn More</a>
      </section>
    </article>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
