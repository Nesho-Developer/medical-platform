import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/doctors/doctors.component').then(
        (m) => m.DoctorsComponent,
      ),
    children: [
      {
        path: 'accounts',
        loadComponent: () =>
          import('../../features/doctors/accounts/accounts.component').then(
            (m) => m.AccountsComponent,
          ),
      },
      {
        path: 'add-billing',
        loadComponent: () =>
          import(
            '../../features/doctors/add-billing/add-billing.component'
          ).then((m) => m.AddBillingComponent),
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import(
            '../../features/doctors/appointments/appointments.component'
          ).then((m) => m.AppointmentsComponent),
        children: [
          {
            path: 'appointment-list',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/appointment-list/appointment-list.component'
              ).then((m) => m.AppointmentListComponent),
          },
          {
            path: 'doctor-cancelled-appointment',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-cancelled-appointment/doctor-cancelled-appointment.component'
              ).then((m) => m.DoctorCancelledAppointmentComponent),
          },
          {
            path: 'doctor-cancelled-appointment2',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-cancelled-appointment2/doctor-cancelled-appointment2.component'
              ).then((m) => m.DoctorCancelledAppointment2Component),
          },
          {
            path: 'doctor-completed-appointment',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-completed-appointment/doctor-completed-appointment.component'
              ).then((m) => m.DoctorCompletedAppointmentComponent),
          },
          {
            path: 'doctor-appointments-grid',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-appointments-grid/doctor-appointments-grid.component'
              ).then((m) => m.DoctorAppointmentsGridComponent),
          },
          {
            path: 'doctor-appointment-start',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-appointment-start/doctor-appointment-start.component'
              ).then((m) => m.DoctorAppointmentStartComponent),
          },
          {
            path: 'doctor-upcoming-appointment-details',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-upcoming-appointment-details/doctor-upcoming-appointment-details.component'
              ).then((m) => m.DoctorUpcomingAppointmentDetailsComponent),
          },
          {
            path: 'doctor-appointment-details',
            loadComponent: () =>
              import(
                '../../features/doctors/appointments/doctor-appointment-details/doctor-appointment-details.component'
              ).then((m) => m.DoctorAppointmentDetailsComponent),
          },
        ],
      },
      {
        path: 'available-timings',
        loadComponent: () =>
          import(
            '../../features/doctors/available-timings/available-timings.component'
          ).then((m) => m.AvailableTimingsComponent),
      },
      {
        path: 'add-prescription',
        loadComponent: () =>
          import(
            '../../features/doctors/add-prescription/add-prescription.component'
          ).then((m) => m.AddPrescriptionComponent),
      },
      {
        path: 'edit-prescription',
        loadComponent: () =>
          import(
            '../../features/doctors/edit-prescription/edit-prescription.component'
          ).then((m) => m.EditPrescriptionComponent),
      },
      {
        path: 'doctor-dashboard',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-dashboard/doctor-dashboard.component'
          ).then((m) => m.DoctorDashboardComponent),
      },
      {
        path: 'my-patients',
        loadComponent: () =>
          import(
            '../../features/doctors/my-patients/my-patients.component'
          ).then((m) => m.MyPatientsComponent),
      },
      {
        path: 'patient-profile',
        loadComponent: () =>
          import(
            '../../features/doctors/patient-profile/patient-profile.component'
          ).then((m) => m.PatientProfileComponent),
      },
      {
        path: 'chat-doctor',
        loadComponent: () =>
          import(
            '../../features/doctors/chat-doctor/chat-doctor.component'
          ).then((m) => m.ChatDoctorComponent),
      },

      {
        path: 'reviews',
        loadComponent: () =>
          import('../../features/doctors/reviews/reviews.component').then(
            (m) => m.ReviewsComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../../features/doctors/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
        children: [
          {
            path: 'doctor-register',
            loadComponent: () =>
              import(
                '../../features/doctors/register/doctor-register/doctor-register.component'
              ).then((m) => m.DoctorRegisterComponent),
          },
          {
            path: 'doctor-register-step1',
            loadComponent: () =>
              import(
                '../../features/doctors/register/doctor-register-step1/doctor-register-step1.component'
              ).then((m) => m.DoctorRegisterStep1Component),
          },
          {
            path: 'doctor-register-step2',
            loadComponent: () =>
              import(
                '../../features/doctors/register/doctor-register-step2/doctor-register-step2.component'
              ).then((m) => m.DoctorRegisterStep2Component),
          },
          {
            path: 'doctor-register-step3',
            loadComponent: () =>
              import(
                '../../features/doctors/register/doctor-register-step3/doctor-register-step3.component'
              ).then((m) => m.DoctorRegisterStep3Component),
          },
        ],
      },

      {
        path: 'blog',
        loadComponent: () =>
          import('../../features/doctors/blog/blog.component').then(
            (m) => m.BlogComponent,
          ),
        children: [
          {
            path: 'doctor-blog',
            loadComponent: () =>
              import('../../features/doctors/blog/blog.component').then(
                (m) => m.BlogComponent,
              ),
          },
          {
            path: 'doctor-add-blog',
            loadComponent: () =>
              import('../../features/doctors/blog/blog.component').then(
                (m) => m.BlogComponent,
              ),
          },
          {
            path: 'edit-blog',
            loadComponent: () =>
              import('../../features/doctors/blog/blog.component').then(
                (m) => m.BlogComponent,
              ),
          },
          {
            path: 'doctor-pending-blog',
            loadComponent: () =>
              import('../../features/doctors/blog/blog.component').then(
                (m) => m.BlogComponent,
              ),
          },
        ],
      },
      {
        path: 'doctor-change-password',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-change-password/doctor-change-password.component'
          ).then((m) => m.DoctorChangePasswordComponent),
      },
      {
        path: 'doctor-search-grid',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-search-grid/doctor-search-grid.component'
          ).then((m) => m.DoctorSearchGridComponent),
      },
      {
        path: 'edit-billing',
        loadComponent: () =>
          import(
            '../../features/doctors/edit-billing/edit-billing.component'
          ).then((m) => m.EditBillingComponent),
      },
      {
        path: 'available-timings',
        loadComponent: () =>
          import(
            '../../features/doctors/schedule-timings/schedule-timings.component'
          ).then((m) => m.ScheduleTimingsComponent),
      },
      {
        path: 'patient-details',
        loadComponent: () =>
          import(
            '../../features/doctors/patient-details/patient-details.component'
          ).then((m) => m.PatientDetailsComponent),
      },
      {
        path: 'doctor-payment',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-payment/doctor-payment.component'
          ).then((m) => m.DoctorPaymentComponent),
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import(
            '../../features/doctors/appointments/appointments.component'
          ).then((m) => m.AppointmentsComponent),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../../features/doctors/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
        children: [
          {
            path: 'doctor-profile-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-profile-settings/doctor-profile-settings.component'
              ).then((m) => m.DoctorProfileSettingsComponent),
          },
          {
            path: 'doctor-insurance-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-insurance-settings/doctor-insurance-settings.component'
              ).then((m) => m.DoctorInsuranceSettingsComponent),
          },
          {
            path: 'doctor-business-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-business-settings/doctor-business-settings.component'
              ).then((m) => m.DoctorBusinessSettingsComponent),
          },
          {
            path: 'doctor-clinics-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-clinics-settings/doctor-clinics-settings.component'
              ).then((m) => m.DoctorClinicsSettingsComponent),
          },
          {
            path: 'doctor-education-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-education-settings/doctor-education-settings.component'
              ).then((m) => m.DoctorEducationSettingsComponent),
          },
          {
            path: 'doctor-experience-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-experience-settings/doctor-experience-settings.component'
              ).then((m) => m.DoctorExperienceSettingsComponent),
          },
          {
            path: 'doctor-awards-settings',
            loadComponent: () =>
              import(
                '../../features/doctors/settings/doctor-awards-settings/doctor-awards-settings.component'
              ).then((m) => m.DoctorAwardsSettingsComponent),
          },
        ],
      },
      {
        path: 'doctor-request',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-request/doctor-request.component'
          ).then((m) => m.DoctorRequestComponent),
      },
      {
        path: 'doctor-specialities',
        loadComponent: () =>
          import(
            '../../features/doctors/doctor-specialities/doctor-specialities.component'
          ).then((m) => m.DoctorSpecialitiesComponent),
      },
      {
        path: 'invoices',
        loadComponent: () =>
          import('../../features/doctors/invoices/invoices.component').then(
            (m) => m.InvoicesComponent,
          ),
      },
    ],
  },
];
