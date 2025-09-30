
import { Component, inject } from '@angular/core';
import { CommonService } from '../../../shared/common/common.service';
import { routes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
    selector: 'app-footer',
    templateUrl:   './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    imports: [RouterLink],
})
export class FooterComponent {
  private common = inject(CommonService);

  public routes = routes;
  base='';
  page='';
  constructor() {
      this.common.base.subscribe((res: string) => {
        this.base = res;
      });
      this.common.page.subscribe((res: string) => {
        this.page = res;
      });
    }
}
