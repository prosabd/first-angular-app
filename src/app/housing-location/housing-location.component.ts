import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HousingLocation } from "../housing-location";

@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="housing-location">
      <img [src]="housingLocation.photo" [alt]="housingLocation.name" />
      <section class="housing-location-info">
        <h2>{{ housingLocation.name }}</h2>
        <p>{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      </section>
    </article>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
