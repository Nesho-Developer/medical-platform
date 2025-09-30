import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/pages/pages.component').then(
        (m) => m.PagesComponent,
      ),
    children: [
      {
        path: 'about-us',
        loadComponent: () =>
          import('../../features/pages/about-us/about-us.component').then(
            (m) => m.AboutUsComponent,
          ),
      },
      {
        path: 'blank-page',
        loadComponent: () =>
          import('../../features/pages/blank-page/blank-page.component').then(
            (m) => m.BlankPageComponent,
          ),
      },
      {
        path: 'invoices',
        loadComponent: () =>
          import('../../features/pages/invoices/invoices.component').then(
            (m) => m.InvoicesComponent,
          ),
        children: [
          {
            path: 'invoice-list',
            loadComponent: () =>
              import(
                '../../features/pages/invoices/invoice-list/invoice-list.component'
              ).then((m) => m.InvoiceListComponent),
          },
          {
            path: 'invoice-view',
            loadComponent: () =>
              import(
                '../../features/pages/invoices/invoice-view/invoice-view.component'
              ).then((m) => m.InvoiceViewComponent),
          },
        ],
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('../../features/pages/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent,
          ),
      },
      {
        path: 'call',
        loadComponent: () =>
          import('../../features/pages/call/call.component').then(
            (m) => m.CallComponent,
          ),
        children: [
          {
            path: 'voice-call',
            loadComponent: () =>
              import(
                '../../features/pages/call/voice-call/voice-call.component'
              ).then((m) => m.VoiceCallComponent),
          },
          {
            path: 'video-call',
            loadComponent: () =>
              import(
                '../../features/pages/call/video-call/video-call.component'
              ).then((m) => m.VideoCallComponent),
          },
        ],
      },
      {
        path: 'pricing',
        loadComponent: () =>
          import('../../features/pages/pricing/pricing.component').then(
            (m) => m.PricingComponent,
          ),
      },
      {
        path: 'faq',
        loadComponent: () =>
          import('../../features/pages/faq/faq.component').then(
            (m) => m.FaqComponent,
          ),
      },
      {
        path: 'maintenance',
        loadComponent: () =>
          import('../../features/pages/maintenance/maintenance.component').then(
            (m) => m.MaintenanceComponent,
          ),
      },
      {
        path: 'coming-soon',
        loadComponent: () =>
          import('../../features/pages/coming-soon/coming-soon.component').then(
            (m) => m.ComingSoonComponent,
          ),
      },
      {
        path: 'terms-condition',
        loadComponent: () =>
          import(
            '../../features/pages/terms-condition/terms-condition.component'
          ).then((m) => m.TermsConditionComponent),
      },
      {
        path: 'privacy-policy',
        loadComponent: () =>
          import(
            '../../features/pages/privacy-policy/privacy-policy.component'
          ).then((m) => m.PrivacyPolicyComponent),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('../../features/pages/components/components.component').then(
            (m) => m.ComponentsComponent,
          ),
      },
      {
        path: 'social-media',
        loadComponent: () =>
          import(
            '../../features/pages/social-media/social-media.component'
          ).then((m) => m.SocialMediaComponent),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('../../features/pages/signup/signup.component').then(
            (m) => m.SignupComponent,
          ),
      },
      {
        path: 'clinic',
        loadComponent: () =>
          import('../../features/pages/clinic/clinic.component').then(
            (m) => m.ClinicComponent,
          ),
      },
      {
        path: 'speciality',
        loadComponent: () =>
          import('../../features/pages/speciality/speciality.component').then(
            (m) => m.SpecialityComponent,
          ),
      },
      {
        path: 'hospitals',
        loadComponent: () =>
          import('../../features/pages/hospitals/hospitals.component').then(
            (m) => m.HospitalsComponent,
          ),
      },
      {
        path: 'booking',
        loadComponent: () =>
          import('../../features/pages/booking/booking.component').then(
            (m) => m.BookingComponent,
          ),
      },
    ],
  },
];
