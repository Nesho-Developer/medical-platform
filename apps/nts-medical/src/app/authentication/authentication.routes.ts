import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login-email',
        loadComponent: () =>
          import('../authentication/login-email/login-email.component').then(
            (m) => m.LoginEmailComponent,
          ),
      },
      {
        path: 'login-phone',
        loadComponent: () =>
          import('../authentication/login-phone/login-phone.component').then(
            (m) => m.LoginPhoneComponent,
          ),
      },
      {
        path: 'doctor-signup',
        loadComponent: () =>
          import(
            '../authentication/doctor-signup/doctor-signup.component'
          ).then((m) => m.DoctorSignupComponent),
      },
      {
        path: 'patient-signup',
        loadComponent: () =>
          import(
            '../authentication/patient-signup/patient-signup.component'
          ).then((m) => m.PatientSignupComponent),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import(
            '../authentication/forgot-password/forgot-password.component'
          ).then((m) => m.ForgotPasswordComponent),
      },
      {
        path: 'forgot-password2',
        loadComponent: () =>
          import(
            '../authentication/forgot-password2/forgot-password2.component'
          ).then((m) => m.ForgotPassword2Component),
      },
      {
        path: 'login-email-otp',
        loadComponent: () =>
          import(
            '../authentication/login-email-otp/login-email-otp.component'
          ).then((m) => m.LoginEmailOtpComponent),
      },
      {
        path: 'login-phone-otp',
        loadComponent: () =>
          import(
            '../authentication/login-phone-otp/login-phone-otp.component'
          ).then((m) => m.LoginPhoneOtpComponent),
      },
      {
        path: 'signup-success',
        loadComponent: () =>
          import(
            '../authentication/signup-success/signup-success.component'
          ).then((m) => m.SignupSuccessComponent),
      },
      {
        path: 'reset-password',
        loadComponent: () =>
          import(
            '../authentication/reset-password/reset-password.component'
          ).then((m) => m.ResetPasswordComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../authentication/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
      },
      {
        path: 'mobile-otp',
        loadComponent: () =>
          import('../authentication/mobile-otp/mobile-otp.component').then(
            (m) => m.MobileOtpComponent,
          ),
      },
      {
        path: 'email-otp',
        loadComponent: () =>
          import('../authentication/email-otp/email-otp.component').then(
            (m) => m.EmailOtpComponent,
          ),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('../authentication/login/login.component').then(
            (m) => m.LoginComponent,
          ),
      },
    ],
  },
];
