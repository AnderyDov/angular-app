import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [CommonModule, TranslocoPipe],
	template: `
		<div>{{ 'hello' | transloco }}</div>
		<div class="block" (click)="changeLanguage()">Change</div>
		<div>{{ activeLang == 'ru' ? 'RU' : 'EN' }}</div>
	`,
	styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
	activeLang!: string;

	constructor(private translocoService: TranslocoService) {
		translocoService.getActiveLang();
	}

	ngOnInit(): void {
		this.activeLang = this.translocoService.getActiveLang();
	}

	changeLanguage() {
		if (this.translocoService.getActiveLang() == 'ru') {
			this.translocoService.setActiveLang('en');
		} else {
			this.translocoService.setActiveLang('ru');
		}
		this.activeLang = this.translocoService.getActiveLang();
	}
}
