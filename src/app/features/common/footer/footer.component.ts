import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { routes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-footer',
    templateUrl:   './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [CommonModule,RouterLink],
})
export class FooterComponent {
  public routes = routes;
  base='';
  page='';
  constructor(
      private common: CommonService,
    ) {
      this.common.base.subscribe((res: string) => {
        this.base = res;
      });
      this.common.page.subscribe((res: string) => {
        this.page = res;
      });
    }
}
