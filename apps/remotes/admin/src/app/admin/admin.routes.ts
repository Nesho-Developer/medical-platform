import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../admin/authentication/authentication.component').then(
            (m) => m.AuthenticationComponent,
          ),
        children: [
          {
            path: '',
            redirectTo: 'admin-login',
            pathMatch: 'full',
          },
          {
            path: 'admin-login',
            loadComponent: () =>
              import('../admin/authentication/login/login.component').then(
                (m) => m.LoginComponent,
              ),
          },
          {
            path: 'admin-forgot-password',
            loadComponent: () =>
              import(
                '../admin/authentication/forgot-password/forgot-password.component'
              ).then((m) => m.ForgotPasswordComponent),
          },
          {
            path: 'admin-register',
            loadComponent: () =>
              import(
                '../admin/authentication/register/register.component'
              ).then((m) => m.RegisterComponent),
          },
          {
            path: 'lock-screen',
            loadComponent: () =>
              import(
                '../admin/authentication/lock-screen/lock-screen.component'
              ).then((m) => m.LockScreenComponent),
          },
        ],
      },
      {
        path: 'appointment-list',
        loadComponent: () =>
          import('../admin/appointment-list/appointment-list.component').then(
            (m) => m.AppointmentListComponent,
          ),
      },
      {
        path: 'blank-page',
        loadComponent: () =>
          import('../admin/blank-page/blank-page.component').then(
            (m) => m.BlankPageComponent,
          ),
      },
      {
        path: 'components',
        loadComponent: () =>
          import('../admin/ui-interface/components/components.component').then(
            (m) => m.ComponentsComponent,
          ),
      },

      {
        path: 'doctor-list',
        loadComponent: () =>
          import('../admin/doctor-list/doctor-list.component').then(
            (m) => m.DoctorListComponent,
          ),
      },

      {
        path: 'invoice',
        loadComponent: () =>
          import('../admin/invoice/invoice.component').then(
            (m) => m.InvoiceComponent,
          ),
      },

      {
        path: 'patient-list',
        loadComponent: () =>
          import('../admin/patient-list/patient-list.component').then(
            (m) => m.PatientListComponent,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../admin/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },

      {
        path: 'reviews',
        loadComponent: () =>
          import('../admin/reviews/reviews.component').then(
            (m) => m.ReviewsComponent,
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../admin/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
      },
      {
        path: 'specialities',
        loadComponent: () =>
          import('../admin/specialities/specialities.component').then(
            (m) => m.SpecialitiesComponent,
          ),
      },

      {
        path: 'transactions-list',
        loadComponent: () =>
          import('../admin/transactions-list/transactions-list.component').then(
            (m) => m.TransactionsListComponent,
          ),
      },
      {
        path: 'forms',
        loadComponent: () =>
          import('../admin/ui-interface/forms/forms.component').then(
            (m) => m.FormsComponent,
          ),
        children: [
          {
            path: 'form-basic-inputs',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-basic-inputs/form-basic-inputs.component'
              ).then((m) => m.FormBasicInputsComponent),
          },
          {
            path: 'form-horizontal',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-horizontal/form-horizontal.component'
              ).then((m) => m.FormHorizontalComponent),
          },
          {
            path: 'form-input-groups',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-input-groups/form-input-groups.component'
              ).then((m) => m.FormInputGroupsComponent),
          },
          {
            path: 'form-mask',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-mask/form-mask.component'
              ).then((m) => m.FormMaskComponent),
          },
          {
            path: 'form-validation',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-validation/form-validation.component'
              ).then((m) => m.FormValidationComponent),
          },
          {
            path: 'form-vertical',
            loadComponent: () =>
              import(
                '../admin/ui-interface/forms/form-vertical/form-vertical.component'
              ).then((m) => m.FormVerticalComponent),
          },
        ],
      },
      {
        path: 'errors',
        loadComponent: () =>
          import('../admin/errors/errors.component').then(
            (m) => m.ErrorsComponent,
          ),
        children: [
          {
            path: 'error404',
            loadComponent: () =>
              import('../admin/errors/error404/error404.component').then(
                (m) => m.Error404Component,
              ),
          },
          {
            path: 'error500',
            loadComponent: () =>
              import('../admin/errors/error500/error500.component').then(
                (m) => m.Error500Component,
              ),
          },
        ],
      },
      {
        path: 'tables',
        loadComponent: () =>
          import('../admin/ui-interface/tables/tables.component').then(
            (m) => m.TablesComponent,
          ),
        children: [
          {
            path: 'data-tables',
            loadComponent: () =>
              import(
                '../admin/ui-interface/tables/data-tables/data-tables.component'
              ).then((m) => m.DataTablesComponent),
          },
          {
            path: 'tables-basic',
            loadComponent: () =>
              import(
                '../admin/ui-interface/tables/tables-basic/tables-basic.component'
              ).then((m) => m.TablesBasicComponent),
          },
        ],
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../admin/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
        children: [
          {
            path: 'invoice-report',
            loadComponent: () =>
              import(
                '../admin/reports/invoice-report/invoice-report.component'
              ).then((m) => m.InvoiceReportComponent),
          },
        ],
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../admin/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
    ],
  },
];
