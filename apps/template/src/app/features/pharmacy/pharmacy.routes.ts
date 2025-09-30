import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/pharmacy/pharmacy.component').then(
        (m) => m.PharmacyComponent,
      ),
    children: [
      {
        path: 'pharmacy-index',
        loadComponent: () =>
          import(
            '../../features/pharmacy/pharmacy-index/pharmacy-index.component'
          ).then((m) => m.PharmacyIndexComponent),
      },
      {
        path: 'pharmacy-details',
        loadComponent: () =>
          import(
            '../../features/pharmacy/pharmacy-details/pharmacy-details.component'
          ).then((m) => m.PharmacyDetailsComponent),
      },
      {
        path: 'pharmacy-search',
        loadComponent: () =>
          import(
            '../../features/pharmacy/pharmacy-search/pharmacy-search.component'
          ).then((m) => m.PharmacySearchComponent),
      },
      {
        path: 'product-all',
        loadComponent: () =>
          import(
            '../../features/pharmacy/product-all/product-all.component'
          ).then((m) => m.ProductAllComponent),
      },
      {
        path: 'product-description',
        loadComponent: () =>
          import(
            '../../features/pharmacy/product-description/product-description.component'
          ).then((m) => m.ProductDescriptionComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../../features/pharmacy/cart/cart.component').then(
            (m) => m.CartComponent,
          ),
      },
      {
        path: 'product-checkout',
        loadComponent: () =>
          import(
            '../../features/pharmacy/product-checkout/product-checkout.component'
          ).then((m) => m.ProductCheckoutComponent),
      },
      {
        path: 'payment-success',
        loadComponent: () =>
          import(
            '../../features/pharmacy/payment-success/payment-success.component'
          ).then((m) => m.PaymentSuccessComponent),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../../features/pharmacy/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
        children: [
          {
            path: 'pharmacy-register-step3',
            loadComponent: () =>
              import(
                '../../features/pharmacy/register/pharmacy-register-step3/pharmacy-register-step3.component'
              ).then((m) => m.PharmacyRegisterStep3Component),
          },
          {
            path: 'pharmacy-register-step2',
            loadComponent: () =>
              import(
                '../../features/pharmacy/register/pharmacy-register-step2/pharmacy-register-step2.component'
              ).then((m) => m.PharmacyRegisterStep2Component),
          },
          {
            path: 'pharmacy-register-step1',
            loadComponent: () =>
              import(
                '../../features/pharmacy/register/pharmacy-register-step1/pharmacy-register-step1.component'
              ).then((m) => m.PharmacyRegisterStep1Component),
          },
          {
            path: 'pharmacy-register',
            loadComponent: () =>
              import(
                '../../features/pharmacy/register/pharmacy-register/pharmacy-register.component'
              ).then((m) => m.PharmacyRegisterComponent),
          },
        ],
      },
    ],
  },
];
