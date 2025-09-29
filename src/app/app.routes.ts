import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  //Features Routes//
  { path: '', loadComponent: () => import('./features/features.component').then((m) => m.FeaturesComponent),
    children: [
      { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
        children: [
          {
            path: 'index',
            loadComponent: () => import('./features/home/general-home/general-home.component').then((m) => m.GeneralHomeComponent),
          },
          {
            path: 'home1',
              loadComponent: () => import('./features/home/home1/home1.component').then((m) => m.Home1Component),
          },
          {
            path: 'home2',
            loadComponent: () => import('./features/home/home2/home2.component').then((m) => m.Home2Component),
          },
          {
            path: 'home3',
            loadComponent: () => import('./features/home/home3/home3.component').then((m) => m.Home3Component),
          },
          {
            path: 'home4',
            loadComponent: () => import('./features/home/home4/home4.component').then((m) => m.Home4Component),
          },
          {
            path: 'home5',
            loadComponent: () => import('./features/home/home5/home5.component').then((m) => m.Home5Component),
          },
          {
            path: 'home6',
            loadComponent: () => import('./features/home/home6/home6.component').then((m) => m.Home6Component),
          },
          {
            path: 'home7',
            loadComponent: () => import('./features/home/home7/home7.component').then((m) => m.Home7Component),
          },
          {
            path: 'home8',
            loadComponent: () => import('./features/home/home8/home8.component').then((m) => m.Home8Component),
          },
          {
            path: 'home9',
            loadComponent: () => import('./features/home/home9/home9.component').then((m) => m.Home9Component),
          },
          {
            path: 'home10',
            loadComponent: () => import('./features/home/home10/home10.component').then((m) => m.Home10Component),
          },
          {
            path: 'home11',
            loadComponent: () => import('./features/home/home11/home11.component').then((m) => m.Home11Component),
          },
          {
            path: 'home12',
            loadComponent: () => import('./features/home/home12/home12.component').then((m) => m.Home12Component),
          },
          {
            path: 'home13',
            loadComponent: () => import('./features/home/home13/home13.component').then((m) => m.Home13Component),
          },
          {
            path: 'home14',
            loadComponent: () => import('./features/home/home14/home14.component').then((m) => m.Home14Component),
          },
          
        ]
      },
      { path: 'doctors', loadComponent: () => import('./features/doctors/doctors.component').then((m) => m.DoctorsComponent),
        children: [
          {
            path: 'accounts',
            loadComponent: () => import('./features/doctors/accounts/accounts.component').then((m) => m.AccountsComponent),
          },
          {
            path: 'add-billing',
            loadComponent: () => import('./features/doctors/add-billing/add-billing.component').then((m) => m.AddBillingComponent),
          },
          {
            path: 'appointments',
            loadComponent: () => import('./features/doctors/appointments/appointments.component').then((m) => m.AppointmentsComponent),
            children: [
              {
                path: 'appointment-list',
                loadComponent: () => import('./features/doctors/appointments/appointment-list/appointment-list.component').then((m) => m.AppointmentListComponent),
              },
              {
                path: 'doctor-cancelled-appointment',
                loadComponent: () => import('./features/doctors/appointments/doctor-cancelled-appointment/doctor-cancelled-appointment.component').then((m) => m.DoctorCancelledAppointmentComponent),
              },
              {
                path: 'doctor-cancelled-appointment2',
                loadComponent: () => import('./features/doctors/appointments/doctor-cancelled-appointment2/doctor-cancelled-appointment2.component').then((m) => m.DoctorCancelledAppointment2Component),
              },
              {
                path: 'doctor-completed-appointment',
                loadComponent: () => import('./features/doctors/appointments/doctor-completed-appointment/doctor-completed-appointment.component').then((m) => m.DoctorCompletedAppointmentComponent),
              },
              {
                path: 'doctor-appointments-grid',
                loadComponent: () => import('./features/doctors/appointments/doctor-appointments-grid/doctor-appointments-grid.component').then((m) => m.DoctorAppointmentsGridComponent),
              },
              {
                path: 'doctor-appointment-start',
                loadComponent: () => import('./features/doctors/appointments/doctor-appointment-start/doctor-appointment-start.component').then((m) => m.DoctorAppointmentStartComponent),
              },
              {
                path: 'doctor-upcoming-appointment-details',
                loadComponent: () => import('./features/doctors/appointments/doctor-upcoming-appointment-details/doctor-upcoming-appointment-details.component').then((m) => m.DoctorUpcomingAppointmentDetailsComponent),
              },
              {
                path: 'doctor-appointment-details',
                loadComponent: () => import('./features/doctors/appointments/doctor-appointment-details/doctor-appointment-details.component').then((m) => m.DoctorAppointmentDetailsComponent),
              }
            ],
          },
          {
            path: 'available-timings',
            loadComponent: () => import('./features/doctors/available-timings/available-timings.component').then((m) => m.AvailableTimingsComponent),
          },
          {
            path: 'add-prescription',
            loadComponent: () => import('./features/doctors/add-prescription/add-prescription.component').then((m) => m.AddPrescriptionComponent),
          },
          {
            path: 'edit-prescription',
            loadComponent: () => import('./features/doctors/edit-prescription/edit-prescription.component').then((m) => m.EditPrescriptionComponent),
          },
          {
            path: 'doctor-dashboard',
            loadComponent: () => import('./features/doctors/doctor-dashboard/doctor-dashboard.component').then((m) => m.DoctorDashboardComponent),
          },
          {
            path: 'my-patients',
            loadComponent: () => import('./features/doctors/my-patients/my-patients.component').then((m) => m.MyPatientsComponent),
          },
          {
            path: 'patient-profile',
            loadComponent: () => import('./features/doctors/patient-profile/patient-profile.component').then((m) => m.PatientProfileComponent),
          },
          {
            path: 'chat-doctor',
            loadComponent: () => import('./features/doctors/chat-doctor/chat-doctor.component').then((m) => m.ChatDoctorComponent),
          },
    
          {
            path: 'reviews',
            loadComponent: () => import('./features/doctors/reviews/reviews.component').then((m) => m.ReviewsComponent),
          },
          {
            path: 'register',
            loadComponent: () => import('./features/doctors/register/register.component').then((m) => m.RegisterComponent),
            children: [
              {
                path: 'doctor-register',
                loadComponent: () => import('./features/doctors/register/register.component').then((m) => m.RegisterComponent),
              },
              {
                path: 'doctor-register-step1',
                loadComponent: () => import('./features/doctors/register/register.component').then((m) => m.RegisterComponent),
              },
              {
                path: 'doctor-register-step2',
                loadComponent: () => import('./features/doctors/register/register.component').then((m) => m.RegisterComponent),
              },
              {
                path: 'doctor-register-step3',
                loadComponent: () => import('./features/doctors/register/register.component').then((m) => m.RegisterComponent),
              },
            ],
          },
    
          {
            path: 'blog',
            loadComponent: () => import('./features/doctors/blog/blog.component').then((m) => m.BlogComponent),
            children: [
              {
                path: 'doctor-blog',
                loadComponent: () => import('./features/doctors/blog/blog.component').then((m) => m.BlogComponent),
              },
              {
                path: 'doctor-add-blog',
                loadComponent: () => import('./features/doctors/blog/blog.component').then((m) => m.BlogComponent),
              },
              {
                path: 'edit-blog',
                loadComponent: () => import('./features/doctors/blog/blog.component').then((m) => m.BlogComponent),
              },
              {
                path: 'doctor-pending-blog',
                loadComponent: () => import('./features/doctors/blog/blog.component').then((m) => m.BlogComponent),
              },
            ],
          },
          {
            path: 'doctor-change-password',
            loadComponent: () => import('./features/doctors/doctor-change-password/doctor-change-password.component').then((m) => m.DoctorChangePasswordComponent),
          },
          {
            path: 'doctor-search-grid',
            loadComponent: () => import('./features/doctors/doctor-search-grid/doctor-search-grid.component').then((m) => m.DoctorSearchGridComponent),
          },
          {
            path: 'edit-billing',
            loadComponent: () => import('./features/doctors/edit-billing/edit-billing.component').then((m) => m.EditBillingComponent),
          },
          {
            path: 'available-timings',
            loadComponent: () => import('./features/doctors/schedule-timings/schedule-timings.component').then((m) => m.ScheduleTimingsComponent),
          },
          {
            path: 'patient-details',
            loadComponent: () => import('./features/doctors/patient-details/patient-details.component').then((m) => m.PatientDetailsComponent),
          },
          {
            path: 'doctor-payment',
            loadComponent: () => import('./features/doctors/doctor-payment/doctor-payment.component').then((m) => m.DoctorPaymentComponent),
          },
          {
            path: 'appointments',
            loadComponent: () => import('./features/doctors/appointments/appointments.component').then((m) => m.AppointmentsComponent),
          },
          {
            path: 'settings',
            loadComponent: () => import('./features/doctors/settings/settings.component').then((m) => m.SettingsComponent),
            children: [
              {
                path: 'doctor-profile-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-profile-settings/doctor-profile-settings.component').then((m) => m.DoctorProfileSettingsComponent),
              },
              {
                path: 'doctor-insurance-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-insurance-settings/doctor-insurance-settings.component').then((m) => m.DoctorInsuranceSettingsComponent),
              },
              {
                path: 'doctor-business-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-business-settings/doctor-business-settings.component').then((m) => m.DoctorBusinessSettingsComponent),
              },
              {
                path: 'doctor-clinics-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-clinics-settings/doctor-clinics-settings.component').then((m) => m.DoctorClinicsSettingsComponent),
              },
              {
                path: 'doctor-education-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-education-settings/doctor-education-settings.component').then((m) => m.DoctorEducationSettingsComponent),
              },
              {
                path: 'doctor-experience-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-experience-settings/doctor-experience-settings.component').then((m) => m.DoctorExperienceSettingsComponent),
              },
              {
                path: 'doctor-awards-settings',
                loadComponent: () => import('./features/doctors/settings/doctor-awards-settings/doctor-awards-settings.component').then((m) => m.DoctorAwardsSettingsComponent),
              },
            ],
          },
          {
            path: 'doctor-request',
            loadComponent: () => import('./features/doctors/doctor-request/doctor-request.component').then((m) => m.DoctorRequestComponent),
          },
          {
            path: 'doctor-specialities',
            loadComponent: () => import('./features/doctors/doctor-specialities/doctor-specialities.component').then((m) => m.DoctorSpecialitiesComponent),
          },
          { path: 'invoices', loadComponent: () => import('./features/doctors/invoices/invoices.component').then((m) => m.InvoicesComponent), }
        ],
      },
      { path: 'patients', loadComponent: () => import('./features/patients/patients.component').then((m) => m.PatientsComponent),     
        children: [
          { path: 'booking', loadComponent: () => import('./features/patients/booking/booking.component').then((m) => m.BookingComponent),
            children: [
              {
                path: 'booking2',
                loadComponent: () => import('./features/patients/booking/booking2/booking2.component').then((m) => m.Booking2Component),
              },
              {
                path: 'booking1',
                loadComponent: () => import('./features/patients/booking/booking1/booking1.component').then((m) => m.Booking1Component),
              },
              {
                path: 'booking-success',
                loadComponent: () => import('./features/patients/booking/booking-success/booking-success.component').then((m) => m.BookingSuccessComponent),
              },
              {
                path: 'booking-success-one',
                loadComponent: () => import('./features/patients/booking/booking-success-one/booking-success-one.component').then((m) => m.BookingSuccessOneComponent),
              },
              {
                path: 'booking-success-one',
                loadComponent: () => import('./features/patients/booking/booking-success-one/booking-success-one.component').then((m) => m.BookingSuccessOneComponent),
              },
              { path: 'booking-popup', loadComponent: () => import('./features/patients/booking/booking-popup/booking-popup.component').then((m) => m.BookingPopupComponent) },
            ],
          },
          { path: 'doctors', loadComponent: () => import('./features/patients/doctors/doctors.component').then((m) => m.DoctorsComponent),
            children: [
              {
                path: 'map-grid',
                loadComponent: () => import('./features/patients/doctors/map-grid/map-grid.component').then((m) => m.MapGridComponent),
              },
              {
                path: 'map-list',
                loadComponent: () => import('./features/patients/doctors/map-list/map-list.component').then((m) => m.MapListComponent),
              },
              { path: 'map-list-availability', loadComponent: () => import('./features/patients/doctors/map-list-availability/map-list-availability.component').then((m) => m.MapListAvailabilityComponent) },
            ],
          },
          { path: 'search-doctor', loadComponent: () => import('./features/patients/search-doctor/search-doctor.component').then((m) => m.SearchDoctorComponent),
            children: [
              {
                path: 'search1',
                loadComponent: () => import('./features/patients/search-doctor/search1/search1.component').then((m) => m.Search1Component),
              },
              {
                path: 'search2',
                  loadComponent: () => import('./features/patients/search-doctor/search2/search2.component').then((m) => m.Search2Component),
              },
              { path: 'doctor-grid', loadComponent: () => import('./features/patients/search-doctor/doctor-grid/doctor-grid.component').then((m) => m.DoctorGridComponent) },
            ],
          },
          { path: 'doctor-profile',
            loadComponent: () => import('./features/patients/doctor-profile/doctor-profile.component').then((m) => m.DoctorProfileComponent),
            children:[
              {
                path: 'doctor-profile1',
                loadComponent: () => import('./features/patients/doctor-profile/doctor-profile1/doctor-profile1.component').then((m) => m.DoctorProfile1Component),
              },
              {
                path: 'doctor-profile2',
                loadComponent: () => import('./features/patients/doctor-profile/doctor-profile2/doctor-profile2.component').then((m) => m.DoctorProfile2Component),
              },
          
            ]
          },
          { path: 'checkout', loadComponent: () => import('./features/patients/checkout/checkout.component').then((m) => m.CheckoutComponent),
          },
          { path: 'patient-dashboard', loadComponent: () => import('./features/patients/patient-dashboard/patient-dashboard.component').then((m) => m.PatientDashboardComponent),
          },
          { path: 'favourites', loadComponent: () => import('./features/patients/favourites/favourites.component').then((m) => m.FavouritesComponent),
          },
          { path: 'chat', loadComponent: () => import('./features/patients/chat/chat.component').then((m) => m.ChatComponent),
          },
          { path: 'profile-settings', loadComponent: () => import('./features/patients/profile-settings/profile-settings.component').then((m) => m.ProfileSettingsComponent),
          },
          { path: 'change-password', loadComponent: () => import('./features/patients/change-password/change-password.component').then((m) => m.ChangePasswordComponent),
          },
          { path: 'booking-success', loadComponent: () => import('./features/patients/booking/booking-success/booking-success.component').then((m) => m.BookingSuccessComponent),
          },
          { path: 'consultation', loadComponent: () => import('./features/patients/consultation/consultation.component').then((m) => m.ConsultationComponent),
          },
          { path: 'dependent', loadComponent: () => import('./features/patients/dependent/dependent.component').then((m) => m.DependentComponent),
          },
          { path: 'payment', loadComponent: () => import('./features/patients/payment/payment.component').then((m) => m.PaymentComponent),
          },
          { path: 'register', loadComponent: () => import('./features/patients/register/register.component').then((m) => m.RegisterComponent),
            children: [
              {
                path: 'patient-register-step1',
                loadComponent: () => import('./features/patients/register/patient-register-step1/patient-register-step1.component').then((m) => m.PatientRegisterStep1Component),
              },
              {
                path: 'patient-register-step2',
                loadComponent: () => import('./features/patients/register/patient-register-step2/patient-register-step2.component').then((m) => m.PatientRegisterStep2Component),
              },
              {
                path: 'patient-register-step3',
                loadComponent: () => import('./features/patients/register/patient-register-step3/patient-register-step3.component').then((m) => m.PatientRegisterStep3Component),
              },
              {
                path: 'patient-register-step4',
                loadComponent: () => import('./features/patients/register/patient-register-step4/patient-register-step4.component').then((m) => m.PatientRegisterStep4Component),
              },
              {
                path: 'patient-register-step5',
                loadComponent: () => import('./features/patients/register/patient-register-step5/patient-register-step5.component').then((m) => m.PatientRegisterStep5Component),
              },
            ],
          },
          { path: 'medical-records',
            loadComponent: () => import('./features/patients/medical-records/medical-records.component').then((m) => m.MedicalRecordsComponent),
          },
          { path: 'medical-details',
            loadComponent: () => import('./features/patients/medical-details/medical-details.component').then((m) => m.MedicalDetailsComponent),
          },
          { path: 'patient-accounts',
            loadComponent: () => import('./features/patients/patient-accounts/patient-accounts.component').then((m) => m.PatientAccountsComponent),
          },  
          { path: 'appointments',
            loadComponent: () => import('./features/patients/appointments/appointments.component').then((m) => m.AppointmentsComponent),
            children: [
              {
                path: 'patient-cancelled-appointment',
                loadComponent: () => import('./features/patients/appointments/patient-cancelled-appointment/patient-cancelled-appointment.component').then((m) => m.PatientCancelledAppointmentComponent),
              },
              {
                path: 'patient-completed-appointment',
                loadComponent: () => import('./features/patients/appointments/patient-completed-appointment/patient-completed-appointment.component').then((m) => m.PatientCompletedAppointmentComponent),
              },
              {
                path: 'patient-upcoming-appointment',
                  loadComponent: () => import('./features/patients/appointments/patient-upcoming-appointment/patient-upcoming-appointment.component').then((m) => m.PatientUpcomingAppointmentComponent),
              },
              {
                path: 'patient-appointments',
                loadComponent: () => import('./features/patients/appointments/patient-appointments/patient-appointments.component').then((m) => m.PatientAppointmentsComponent),
              },
              {
                path: 'patient-appointment-details',
                loadComponent: () => import('./features/patients/appointments/patient-appoinment-details/patient-appoinment-details.component').then((m) => m.PatientAppoinmentDetailsComponent),
              },
              {
                path: 'patient-appointment-grid',
                loadComponent: () => import('./features/patients/appointments/patient-appointment-grid/patient-appointment-grid.component').then((m) => m.PatientAppointmentGridComponent),
              }
            ],
          },
    
          { path: 'patient-invoice',
            loadComponent: () => import('./features/patients/patient-invoice/patient-invoice.component').then((m) => m.PatientInvoiceComponent),
          },
          { path: 'doctor-profile',
                loadComponent: () => import('./features/patients/doctor-profile/doctor-profile.component').then((m) => m.DoctorProfileComponent),
            },
            { path: 'two-factor-authentication', loadComponent: () => import('./features/patients/two-factor-authentication/two-factor-authentication.component').then((m) => m.TwoFactorAuthenticationComponent) },
            { path: 'delete-account', loadComponent: () => import('./features/patients/delete-account/delete-account.component').then((m) => m.DeleteAccountComponent) },
        ],
      },
      { path: 'pharmacy',
        loadComponent: () => import('./features/pharmacy/pharmacy.component').then((m) => m.PharmacyComponent),
        children: [
          {
            path: 'pharmacy-index',
            loadComponent: () => import('./features/pharmacy/pharmacy-index/pharmacy-index.component').then((m) => m.PharmacyIndexComponent),
          },
          {
            path: 'pharmacy-details',
            loadComponent: () => import('./features/pharmacy/pharmacy-details/pharmacy-details.component').then((m) => m.PharmacyDetailsComponent),
          },
          {
            path: 'pharmacy-search',
            loadComponent: () => import('./features/pharmacy/pharmacy-search/pharmacy-search.component').then((m) => m.PharmacySearchComponent),
          },
          {
            path: 'product-all',
            loadComponent: () => import('./features/pharmacy/product-all/product-all.component').then((m) => m.ProductAllComponent),
          },
          {
            path: 'product-description',
            loadComponent: () => import('./features/pharmacy/product-description/product-description.component').then((m) => m.ProductDescriptionComponent),
          },
          {
            path: 'cart',
            loadComponent: () => import('./features/pharmacy/cart/cart.component').then((m) => m.CartComponent),
          },
          {
            path: 'product-checkout',
            loadComponent: () => import('./features/pharmacy/product-checkout/product-checkout.component').then((m) => m.ProductCheckoutComponent),
          },
          {
            path: 'payment-success',
            loadComponent: () => import('./features/pharmacy/payment-success/payment-success.component').then((m) => m.PaymentSuccessComponent),
          },
          {
            path: 'register',
              loadComponent: () => import('./features/pharmacy/register/register.component').then((m) => m.RegisterComponent),
              children: [
                {
                  path: 'pharmacy-register-step3',
                  loadComponent: () => import('./features/pharmacy/register/pharmacy-register-step3/pharmacy-register-step3.component').then((m) => m.PharmacyRegisterStep3Component),
                },
                {
                  path: 'pharmacy-register-step2',
                  loadComponent: () => import('./features/pharmacy/register/pharmacy-register-step2/pharmacy-register-step2.component').then((m) => m.PharmacyRegisterStep2Component),
                },
                {
                  path: 'pharmacy-register-step1',
                  loadComponent: () => import('./features/pharmacy/register/pharmacy-register-step1/pharmacy-register-step1.component').then((m) => m.PharmacyRegisterStep1Component),
                },
                {
                  path: 'pharmacy-register',
                    loadComponent: () => import('./features/pharmacy/register/pharmacy-register/pharmacy-register.component').then((m) => m.PharmacyRegisterComponent),
                },
              ]
          },
        ],
      },
      { path: 'pages', loadComponent: () => import('./features/pages/pages.component').then((m) => m.PagesComponent),
        children: [
          {
            path: 'about-us',
            loadComponent: () => import('./features/pages/about-us/about-us.component').then((m) => m.AboutUsComponent),
          },
          {
            path: 'blank-page',
            loadComponent: () => import('./features/pages/blank-page/blank-page.component').then((m) => m.BlankPageComponent),
          },
          {
            path: 'invoices',
            loadComponent: () => import('./features/pages/invoices/invoices.component').then((m) => m.InvoicesComponent),
            children: [
              {
                path: 'invoice-list',
                loadComponent: () => import('./features/pages/invoices/invoice-list/invoice-list.component').then((m) => m.InvoiceListComponent),
              },
              {
                path: 'invoice-view',
                loadComponent: () => import('./features/pages/invoices/invoice-view/invoice-view.component').then((m) => m.InvoiceViewComponent),
              },
            ],
          },
          {
            path: 'contact-us',
            loadComponent: () => import('./features/pages/contact-us/contact-us.component').then((m) => m.ContactUsComponent),
          },
          {
            path: 'call',
            loadComponent: () => import('./features/pages/call/call.component').then((m) => m.CallComponent),
            children: [
              {
                path: 'voice-call',
                loadComponent: () => import('./features/pages/call/voice-call/voice-call.component').then((m) => m.VoiceCallComponent),
              },
              {
                path: 'video-call',
                loadComponent: () => import('./features/pages/call/video-call/video-call.component').then((m) => m.VideoCallComponent),
              },
            ],
          },
          {
            path: 'pricing',
            loadComponent: () => import('./features/pages/pricing/pricing.component').then((m) => m.PricingComponent),
          },
          {
            path: 'faq',
            loadComponent: () => import('./features/pages/faq/faq.component').then((m) => m.FaqComponent),
          },
          {
            path: 'maintenance',
            loadComponent: () => import('./features/pages/maintenance/maintenance.component').then((m) => m.MaintenanceComponent),
          },
          {
            path: 'coming-soon',
            loadComponent: () => import('./features/pages/coming-soon/coming-soon.component').then((m) => m.ComingSoonComponent),
          },
          {
            path: 'terms-condition',
            loadComponent: () => import('./features/pages/terms-condition/terms-condition.component').then((m) => m.TermsConditionComponent),
          },
          {
            path: 'privacy-policy',
            loadComponent: () => import('./features/pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent),
          },
          {
            path: 'components',
            loadComponent: () => import('./features/pages/components/components.component').then((m) => m.ComponentsComponent),
          },
          {
            path: 'social-media',
            loadComponent: () => import('./features/pages/social-media/social-media.component').then((m) => m.SocialMediaComponent),
          },
          {
            path: 'signup',
            loadComponent: () => import('./features/pages/signup/signup.component').then((m) => m.SignupComponent),
          },
          { path: 'clinic', loadComponent: () => import('./features/pages/clinic/clinic.component').then((m) => m.ClinicComponent) },
          { path: 'speciality', loadComponent: () => import('./features/pages/speciality/speciality.component').then((m) => m.SpecialityComponent) },
          { path: 'hospitals', loadComponent: () => import('./features/pages/hospitals/hospitals.component').then((m) => m.HospitalsComponent) },
          { path: 'booking', loadComponent: () => import('./features/pages/booking/booking.component').then((m) => m.BookingComponent) },
        ],
      },
     
      { path: 'blog', loadComponent: () => import('./features/blog/blog.component').then((m) => m.BlogComponent),
        children: [
          {
            path: 'blog-details',
            loadComponent: () => import('./features/blog/blog-details/blog-details.component').then((m) => m.BlogDetailsComponent),
          },
          {
            path: 'blog-grid',
            loadComponent: () => import('./features/blog/blog-grid/blog-grid.component').then((m) => m.BlogGridComponent),
          },
          {
            path: 'blog-list',
            loadComponent: () => import('./features/blog/blog-list/blog-list.component').then((m) => m.BlogListComponent),
          },
        ],
      },
      {
        path: 'error',
        loadComponent: () => import('./features/error/error.component').then((m) => m.ErrorComponent),
        children: [
          {
            path: 'error404',
            loadComponent: () => import('./features/error/error404/error404.component').then((m) => m.Error404Component),
          },
          {
            path: 'error500',
            loadComponent: () => import('./features/error/error500/error500.component').then((m) => m.Error500Component),
          },
        ],
      }
    ]
  },
  {
    path: 'authentication',
    loadComponent: () => import('./authentication/authentication.component').then((m) => m.AuthenticationComponent),
    children: [
      {
        path: 'login-email',
        loadComponent: () => import('./authentication/login-email/login-email.component').then((m) => m.LoginEmailComponent),
      },    
      { 
        path: 'login-phone',
        loadComponent: () => import('./authentication/login-phone/login-phone.component').then((m) => m.LoginPhoneComponent),
      },
      {
        path: 'doctor-signup',
        loadComponent: () => import('./authentication/doctor-signup/doctor-signup.component').then((m) => m.DoctorSignupComponent),
      },
      {
        path: 'patient-signup',
        loadComponent: () => import('./authentication/patient-signup/patient-signup.component').then((m) => m.PatientSignupComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () => import('./authentication/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
      },
      {
        path: 'forgot-password2',
        loadComponent: () => import('./authentication/forgot-password2/forgot-password2.component').then((m) => m.ForgotPassword2Component),
      },
      {
        path: 'login-email-otp',
        loadComponent: () => import('./authentication/login-email-otp/login-email-otp.component').then((m) => m.LoginEmailOtpComponent),
      },
      {
        path: 'login-phone-otp',
          loadComponent: () => import('./authentication/login-phone-otp/login-phone-otp.component').then((m) => m.LoginPhoneOtpComponent),
      },
      {
        path: 'signup-success',
        loadComponent: () => import('./authentication/signup-success/signup-success.component').then((m) => m.SignupSuccessComponent),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./authentication/reset-password/reset-password.component').then((m) => m.ResetPasswordComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./authentication/register/register.component').then((m) => m.RegisterComponent),
      },
      {
        path: 'mobile-otp',
        loadComponent: () => import('./authentication/mobile-otp/mobile-otp.component').then((m) => m.MobileOtpComponent),
      },
      {
        path: 'email-otp',
        loadComponent: () => import('./authentication/email-otp/email-otp.component').then((m) => m.EmailOtpComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('./authentication/login/login.component').then((m) => m.LoginComponent),
      },
    ],
  },
  {
    path: 'admin',
    loadComponent: () => import('./admin/admin.component').then((m) => m.AdminComponent),
    children: [
      {
        path: '', loadComponent: () => import('./admin/authentication/authentication.component').then((m) => m.AuthenticationComponent),
        children: [
          {
            path: '',
            redirectTo: 'admin-login',
            pathMatch: 'full'
          },
          {
            path: 'admin-login',
            loadComponent: () => import('./admin/authentication/login/login.component').then((m) => m.LoginComponent),
          },
          {
            path: 'admin-forgot-password',
            loadComponent: () => import('./admin/authentication/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
          },
          {
            path: 'admin-register',
            loadComponent: () => import('./admin/authentication/register/register.component').then((m) => m.RegisterComponent),
          },
          {
            path: 'lock-screen',
            loadComponent: () => import('./admin/authentication/lock-screen/lock-screen.component').then((m) => m.LockScreenComponent),
          },
        ],
      },
      {
        path: 'appointment-list',
        loadComponent: () => import('./admin/appointment-list/appointment-list.component').then((m) => m.AppointmentListComponent),
      },
      {
        path: 'blank-page',
        loadComponent: () => import('./admin/blank-page/blank-page.component').then((m) => m.BlankPageComponent),
      },
      {
        path: 'components',
        loadComponent: () => import('./admin/ui-interface/components/components.component').then((m) => m.ComponentsComponent),
      },

      {
        path: 'doctor-list',
        loadComponent: () => import('./admin/doctor-list/doctor-list.component').then((m) => m.DoctorListComponent),
      },

      {
        path: 'invoice',
        loadComponent: () => import('./admin/invoice/invoice.component').then((m) => m.InvoiceComponent),
      },

      {
        path: 'patient-list',
        loadComponent: () => import('./admin/patient-list/patient-list.component').then((m) => m.PatientListComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./admin/profile/profile.component').then((m) => m.ProfileComponent),
      },

      {
        path: 'reviews',
        loadComponent: () => import('./admin/reviews/reviews.component').then((m) => m.ReviewsComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./admin/settings/settings.component').then((m) => m.SettingsComponent),
      },
      {
        path: 'specialities',
        loadComponent: () => import('./admin/specialities/specialities.component').then((m) => m.SpecialitiesComponent),
      },

      {
        path: 'transactions-list',
        loadComponent: () => import('./admin/transactions-list/transactions-list.component').then((m) => m.TransactionsListComponent),
      },
      {
        path: 'forms',
        loadComponent: () => import('./admin/ui-interface/forms/forms.component').then((m) => m.FormsComponent),
        children : [
          {
            path: 'form-basic-inputs',  
            loadComponent: () => import('./admin/ui-interface/forms/form-basic-inputs/form-basic-inputs.component').then((m) => m.FormBasicInputsComponent),
          },
          {
            path: 'form-horizontal',
            loadComponent: () => import('./admin/ui-interface/forms/form-horizontal/form-horizontal.component').then((m) => m.FormHorizontalComponent),
          },
          {
            path: 'form-input-groups',
            loadComponent: () => import('./admin/ui-interface/forms/form-input-groups/form-input-groups.component').then((m) => m.FormInputGroupsComponent),
          },
          {
            path: 'form-mask',
            loadComponent: () => import('./admin/ui-interface/forms/form-mask/form-mask.component').then((m) => m.FormMaskComponent),
          },
          {
            path: 'form-validation',
            loadComponent: () => import('./admin/ui-interface/forms/form-validation/form-validation.component').then((m) => m.FormValidationComponent),
          },
          {
            path: 'form-vertical',
            loadComponent: () => import('./admin/ui-interface/forms/form-vertical/form-vertical.component').then((m) => m.FormVerticalComponent),
          },
        ]
      },
      {
        path: 'errors',
        loadComponent: () => import('./admin/errors/errors.component').then((m) => m.ErrorsComponent),
        children: [
          {
            path: 'error404',
            loadComponent: () => import('./admin/errors/error404/error404.component').then((m) => m.Error404Component),
          },
          {
            path: 'error500',
            loadComponent: () => import('./admin/errors/error500/error500.component').then((m) => m.Error500Component),
          },
        ],
      },
      {
        path: 'tables',
        loadComponent: () => import('./admin/ui-interface/tables/tables.component').then((m) => m.TablesComponent),
        children: [
          {
            path: 'data-tables',
            loadComponent: () => import('./admin/ui-interface/tables/data-tables/data-tables.component').then((m) => m.DataTablesComponent),
          },
          {
            path: 'tables-basic',
            loadComponent: () => import('./admin/ui-interface/tables/tables-basic/tables-basic.component').then((m) => m.TablesBasicComponent),
          },
        ],
      },
      {
        path: 'reports',
        loadComponent: () => import('./admin/reports/reports.component').then((m) => m.ReportsComponent),
        children: [
          {
            path: 'invoice-report',
            loadComponent: () => import('./admin/reports/invoice-report/invoice-report.component').then((m) => m.InvoiceReportComponent),
          },
        ],
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./admin/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      }
    ],
  },
  { path: 'pharmacy',
    loadComponent: () => import('./pharmacy/pharmacy.component').then((m) => m.PharmacyComponent),
    children: [
      {
        path: '',
          loadComponent: () => import('./pharmacy/authentication/authentication.component').then((m) => m.AuthenticationComponent),
          children: [
            {
              path: '',
              redirectTo: 'pharmacy-login',
              pathMatch: 'full'
            },
            {
              path: 'pharmacy-login',
              loadComponent: () => import('./pharmacy/authentication/login/login.component').then((m) => m.LoginComponent),
            },
            {
              path: 'pharmacy-forgot-password',
              loadComponent: () => import('./pharmacy/authentication/forgot-password/forgot-password.component').then((m) => m.ForgotPasswordComponent),
            },
            {
              path: 'pharmacy-register',
              loadComponent: () => import('./pharmacy/authentication/register/register.component').then((m) => m.RegisterComponent),
            }
          ],
      },
      {
        path: 'products',
        loadComponent: () => import('./pharmacy/products/products.component').then((m) => m.ProductsComponent),
        children: [
          {
            path: 'product-list',
            loadComponent: () => import('./pharmacy/products/product-list/product-list.component').then((m) => m.ProductListComponent),
          },
          {
            path: 'add-product',
            loadComponent: () => import('./pharmacy/products/add-product/add-product.component').then((m) => m.AddProductComponent),
          },
          {
            path: 'outstock',
            loadComponent: () => import('./pharmacy/products/outstock/outstock.component').then((m) => m.OutstockComponent),
          },
          {
            path: 'expired',
            loadComponent: () => import('./pharmacy/products/expired/expired.component').then((m) => m.ExpiredComponent),
          },
          {
            path: 'edit-product',
            loadComponent: () => import('./pharmacy/products/edit-product/edit-product.component').then((m) => m.EditProductComponent),
          },
        ],
      },
      {
        path: 'categories',
        loadComponent: () => import('./pharmacy/categories/categories.component').then((m) => m.CategoriesComponent),
      },
      {
        path: 'purchase',
        loadComponent: () => import('./pharmacy/purchase/purchase.component').then((m) => m.PurchaseComponent),
        children: [
          {
            path: 'purchase-list',
            loadComponent: () => import('./pharmacy/purchase/purchase-list/purchase-list.component').then((m) => m.PurchaseListComponent),
          },
          {
            path: 'add-purchase',
            loadComponent: () => import('./pharmacy/purchase/add-purchase/add-purchase.component').then((m) => m.AddPurchaseComponent),
          },
          {
            path: 'order',
            loadComponent: () => import('./pharmacy/purchase/order/order.component').then((m) => m.OrderComponent),
          },
          {
            path: 'edit-purchase',
            loadComponent: () => import('./pharmacy/purchase/edit-purchase/edit-purchase.component').then((m) => m.EditPurchaseComponent),
          },
        ],
      },
      {
        path: 'sales',
        loadComponent: () => import('./pharmacy/sales/sales.component').then((m) => m.SalesComponent),
      },
      {
        path: 'supplier',
        loadComponent: () => import('./pharmacy/supplier/supplier.component').then((m) => m.SupplierComponent),
        children: [
          {
            path: 'supplier-list',
            loadComponent: () => import('./pharmacy/supplier/supplier-list/supplier-list.component').then((m) => m.SupplierListComponent),
          },
          {
            path: 'edit-supplier',
            loadComponent: () => import('./pharmacy/supplier/edit-supplier/edit-supplier.component').then((m) => m.EditSupplierComponent),
          },
          {
            path: 'add-supplier',
            loadComponent: () => import('./pharmacy/supplier/add-supplier/add-supplier.component').then((m) => m.AddSupplierComponent),
          },
        ],
      },
      {
        path: 'transactions-list',
        loadComponent: () => import('./pharmacy/transactions-list/transactions-list.component').then((m) => m.TransactionsListComponent),
      },
      {
        path: 'reports',
        loadComponent: () => import('./pharmacy/reports/reports.component').then((m) => m.ReportsComponent),
        children: [
          {
            path: 'invoice-report',
            loadComponent: () => import('./pharmacy/reports/invoice-report/invoice-report.component').then((m) => m.InvoiceReportComponent),
          },
        ],
      },
      {
        path: 'profile',
        loadComponent: () => import('./pharmacy/profile/profile.component').then((m) => m.ProfileComponent),
      },
      {
        path: 'settings',
        loadComponent: () => import('./pharmacy/settings/settings.component').then((m) => m.SettingsComponent),
      },

      {
        path: 'customer-orders',
        loadComponent: () => import('./pharmacy/customer-orders/customer-orders.component').then((m) => m.CustomerOrdersComponent),
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pharmacy/dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'invoice',
        loadComponent: () => import('./pharmacy/invoice/invoice.component').then((m) => m.InvoiceComponent),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'error/error404',
    pathMatch: 'full',
  }


      
]as const;
