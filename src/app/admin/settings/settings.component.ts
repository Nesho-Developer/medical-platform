import { Component } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
    imports: [CommonModule, RouterLink]
})
export class SettingsComponent {
  public routes = routes;
}
