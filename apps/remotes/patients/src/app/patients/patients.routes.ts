import { Routes } from '@angular/router';

export const patientsRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../patients/patients.component').then((m) => m.PatientsComponent),
    children: [
      {
        path: 'booking',
        loadComponent: () =>
          import('../patients/booking/booking.component').then(
            (m) => m.BookingComponent,
          ),
        children: [
          {
            path: 'booking2',
            loadComponent: () =>
              import('../patients/booking/booking2/booking2.component').then(
                (m) => m.Booking2Component,
              ),
          },
          {
            path: 'booking1',
            loadComponent: () =>
              import('../patients/booking/booking1/booking1.component').then(
                (m) => m.Booking1Component,
              ),
          },
          {
            path: 'booking-success',
            loadComponent: () =>
              import(
                '../patients/booking/booking-success/booking-success.component'
              ).then((m) => m.BookingSuccessComponent),
          },
          {
            path: 'booking-success-one',
            loadComponent: () =>
              import(
                '../patients/booking/booking-success-one/booking-success-one.component'
              ).then((m) => m.BookingSuccessOneComponent),
          },
          {
            path: 'booking-success-one',
            loadComponent: () =>
              import(
                '../patients/booking/booking-success-one/booking-success-one.component'
              ).then((m) => m.BookingSuccessOneComponent),
          },
          {
            path: 'booking-popup',
            loadComponent: () =>
              import(
                '../patients/booking/booking-popup/booking-popup.component'
              ).then((m) => m.BookingPopupComponent),
          },
        ],
      },
      {
        path: 'doctors',
        loadComponent: () =>
          import('../patients/doctors/doctors.component').then(
            (m) => m.DoctorsComponent,
          ),
        children: [
          {
            path: 'map-grid',
            loadComponent: () =>
              import('../patients/doctors/map-grid/map-grid.component').then(
                (m) => m.MapGridComponent,
              ),
          },
          {
            path: 'map-list',
            loadComponent: () =>
              import('../patients/doctors/map-list/map-list.component').then(
                (m) => m.MapListComponent,
              ),
          },
          {
            path: 'map-list-availability',
            loadComponent: () =>
              import(
                '../patients/doctors/map-list-availability/map-list-availability.component'
              ).then((m) => m.MapListAvailabilityComponent),
          },
        ],
      },
      {
        path: 'search-doctor',
        loadComponent: () =>
          import('../patients/search-doctor/search-doctor.component').then(
            (m) => m.SearchDoctorComponent,
          ),
        children: [
          {
            path: 'search1',
            loadComponent: () =>
              import(
                '../patients/search-doctor/search1/search1.component'
              ).then((m) => m.Search1Component),
          },
          {
            path: 'search2',
            loadComponent: () =>
              import(
                '../patients/search-doctor/search2/search2.component'
              ).then((m) => m.Search2Component),
          },
          {
            path: 'doctor-grid',
            loadComponent: () =>
              import(
                '../patients/search-doctor/doctor-grid/doctor-grid.component'
              ).then((m) => m.DoctorGridComponent),
          },
        ],
      },
      {
        path: 'doctor-profile',
        loadComponent: () =>
          import('../patients/doctor-profile/doctor-profile.component').then(
            (m) => m.DoctorProfileComponent,
          ),
        children: [
          {
            path: 'doctor-profile1',
            loadComponent: () =>
              import(
                '../patients/doctor-profile/doctor-profile1/doctor-profile1.component'
              ).then((m) => m.DoctorProfile1Component),
          },
          {
            path: 'doctor-profile2',
            loadComponent: () =>
              import(
                '../patients/doctor-profile/doctor-profile2/doctor-profile2.component'
              ).then((m) => m.DoctorProfile2Component),
          },
        ],
      },
      {
        path: 'checkout',
        loadComponent: () =>
          import('../patients/checkout/checkout.component').then(
            (m) => m.CheckoutComponent,
          ),
      },
      {
        path: 'patient-dashboard',
        loadComponent: () =>
          import(
            '../patients/patient-dashboard/patient-dashboard.component'
          ).then((m) => m.PatientDashboardComponent),
      },
      {
        path: 'favourites',
        loadComponent: () =>
          import('../patients/favourites/favourites.component').then(
            (m) => m.FavouritesComponent,
          ),
      },
      {
        path: 'chat',
        loadComponent: () =>
          import('../patients/chat/chat.component').then(
            (m) => m.ChatComponent,
          ),
      },
      {
        path: 'profile-settings',
        loadComponent: () =>
          import(
            '../patients/profile-settings/profile-settings.component'
          ).then((m) => m.ProfileSettingsComponent),
      },
      {
        path: 'change-password',
        loadComponent: () =>
          import('../patients/change-password/change-password.component').then(
            (m) => m.ChangePasswordComponent,
          ),
      },
      {
        path: 'booking-success',
        loadComponent: () =>
          import(
            '../patients/booking/booking-success/booking-success.component'
          ).then((m) => m.BookingSuccessComponent),
      },
      {
        path: 'consultation',
        loadComponent: () =>
          import('../patients/consultation/consultation.component').then(
            (m) => m.ConsultationComponent,
          ),
      },
      {
        path: 'dependent',
        loadComponent: () =>
          import('../patients/dependent/dependent.component').then(
            (m) => m.DependentComponent,
          ),
      },
      {
        path: 'payment',
        loadComponent: () =>
          import('../patients/payment/payment.component').then(
            (m) => m.PaymentComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../patients/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
        children: [
          {
            path: 'patient-register-step1',
            loadComponent: () =>
              import(
                '../patients/register/patient-register-step1/patient-register-step1.component'
              ).then((m) => m.PatientRegisterStep1Component),
          },
          {
            path: 'patient-register-step2',
            loadComponent: () =>
              import(
                '../patients/register/patient-register-step2/patient-register-step2.component'
              ).then((m) => m.PatientRegisterStep2Component),
          },
          {
            path: 'patient-register-step3',
            loadComponent: () =>
              import(
                '../patients/register/patient-register-step3/patient-register-step3.component'
              ).then((m) => m.PatientRegisterStep3Component),
          },
          {
            path: 'patient-register-step4',
            loadComponent: () =>
              import(
                '../patients/register/patient-register-step4/patient-register-step4.component'
              ).then((m) => m.PatientRegisterStep4Component),
          },
          {
            path: 'patient-register-step5',
            loadComponent: () =>
              import(
                '../patients/register/patient-register-step5/patient-register-step5.component'
              ).then((m) => m.PatientRegisterStep5Component),
          },
        ],
      },
      {
        path: 'medical-records',
        loadComponent: () =>
          import('../patients/medical-records/medical-records.component').then(
            (m) => m.MedicalRecordsComponent,
          ),
      },
      {
        path: 'medical-details',
        loadComponent: () =>
          import('../patients/medical-details/medical-details.component').then(
            (m) => m.MedicalDetailsComponent,
          ),
      },
      {
        path: 'patient-accounts',
        loadComponent: () =>
          import(
            '../patients/patient-accounts/patient-accounts.component'
          ).then((m) => m.PatientAccountsComponent),
      },
      {
        path: 'appointments',
        loadComponent: () =>
          import('../patients/appointments/appointments.component').then(
            (m) => m.AppointmentsComponent,
          ),
        children: [
          {
            path: 'patient-cancelled-appointment',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-cancelled-appointment/patient-cancelled-appointment.component'
              ).then((m) => m.PatientCancelledAppointmentComponent),
          },
          {
            path: 'patient-completed-appointment',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-completed-appointment/patient-completed-appointment.component'
              ).then((m) => m.PatientCompletedAppointmentComponent),
          },
          {
            path: 'patient-upcoming-appointment',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-upcoming-appointment/patient-upcoming-appointment.component'
              ).then((m) => m.PatientUpcomingAppointmentComponent),
          },
          {
            path: 'patient-appointments',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-appointments/patient-appointments.component'
              ).then((m) => m.PatientAppointmentsComponent),
          },
          {
            path: 'patient-appointment-details',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-appoinment-details/patient-appoinment-details.component'
              ).then((m) => m.PatientAppoinmentDetailsComponent),
          },
          {
            path: 'patient-appointment-grid',
            loadComponent: () =>
              import(
                '../patients/appointments/patient-appointment-grid/patient-appointment-grid.component'
              ).then((m) => m.PatientAppointmentGridComponent),
          },
        ],
      },

      {
        path: 'patient-invoice',
        loadComponent: () =>
          import('../patients/patient-invoice/patient-invoice.component').then(
            (m) => m.PatientInvoiceComponent,
          ),
      },
      {
        path: 'doctor-profile',
        loadComponent: () =>
          import('../patients/doctor-profile/doctor-profile.component').then(
            (m) => m.DoctorProfileComponent,
          ),
      },
      {
        path: 'two-factor-authentication',
        loadComponent: () =>
          import(
            '../patients/two-factor-authentication/two-factor-authentication.component'
          ).then((m) => m.TwoFactorAuthenticationComponent),
      },
      {
        path: 'delete-account',
        loadComponent: () =>
          import('../patients/delete-account/delete-account.component').then(
            (m) => m.DeleteAccountComponent,
          ),
      },
    ],
  },
];
