import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '@nts/shared';
import { SidebarService } from '@nts/shared';
@Component({
    selector: 'app-authentication',
    templateUrl: './authentication.component.html',
    styleUrls: ['./authentication.component.scss'],
    imports: [RouterModule]
})
export class AuthenticationComponent {
  private sidebar = inject(SidebarService);

  public routes = routes;
  ngOnInit(): void {
    this.sidebar.changeThemeColor('light-mode');
}
ngOnDestroy(): void {
  this.sidebar.changeThemeColor(localStorage.getItem('themeColor') || '');
}
}
