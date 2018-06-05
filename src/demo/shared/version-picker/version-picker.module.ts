import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { VersionPickerComponent } from './version-picker.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule,
		MatButtonModule,
		MatIconModule,
		MatMenuModule
	],
	declarations: [
		VersionPickerComponent
	],
	exports: [
		VersionPickerComponent
	]
})
export class VersionPickerModule { }
