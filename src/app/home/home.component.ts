import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, HousingLocationComponent],
	template: `
		<div class="block" (click)="func()">Hello world</div>
		<div>{{ lang ? 'RU' : 'EN' }}</div>
	`,
	styleUrl: './home.component.css',
})
export class HomeComponent {
	constructor() {}

	lang = true;

	func() {
		this.lang = !this.lang;
	}
}
