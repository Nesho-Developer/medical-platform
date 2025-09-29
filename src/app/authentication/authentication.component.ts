import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../shared/routes/routes';
import { SidebarService } from '../shared/sidebar/sidebar.service';
@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
    imports: [RouterModule]
})
export class AuthenticationComponent {
  public routes = routes;
  constructor(private sidebar:SidebarService){}
  ngOnInit(): void {
    this.sidebar.changeThemeColor('light-mode');
}
ngOnDestroy(): void {
  this.sidebar.changeThemeColor(localStorage.getItem('themeColor') || '');
}
}
