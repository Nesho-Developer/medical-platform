import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { DoctorsComponent } from './app/doctors/doctors.component';

bootstrapApplication(DoctorsComponent, appConfig).catch((err) => console.error(err));
