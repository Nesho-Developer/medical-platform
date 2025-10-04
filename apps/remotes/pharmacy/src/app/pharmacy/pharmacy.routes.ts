import { Routes } from '@angular/router';

export const pharmacyRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pharmacy/pharmacy.component').then((m) => m.PharmacyComponent),
    children: [
      {
        path: 'pharmacy-index',
        loadComponent: () =>
          import('../pharmacy/pharmacy-index/pharmacy-index.component').then(
            (m) => m.PharmacyIndexComponent,
          ),
      },
      {
        path: 'pharmacy-details',
        loadComponent: () =>
          import(
            '../pharmacy/pharmacy-details/pharmacy-details.component'
          ).then((m) => m.PharmacyDetailsComponent),
      },
      {
        path: 'pharmacy-search',
        loadComponent: () =>
          import('../pharmacy/pharmacy-search/pharmacy-search.component').then(
            (m) => m.PharmacySearchComponent,
          ),
      },
      {
        path: 'product-all',
        loadComponent: () =>
          import('../pharmacy/product-all/product-all.component').then(
            (m) => m.ProductAllComponent,
          ),
      },
      {
        path: 'product-description',
        loadComponent: () =>
          import(
            '../pharmacy/product-description/product-description.component'
          ).then((m) => m.ProductDescriptionComponent),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('../pharmacy/cart/cart.component').then(
            (m) => m.CartComponent,
          ),
      },
      {
        path: 'product-checkout',
        loadComponent: () =>
          import(
            '../pharmacy/product-checkout/product-checkout.component'
          ).then((m) => m.ProductCheckoutComponent),
      },
      {
        path: 'payment-success',
        loadComponent: () =>
          import('../pharmacy/payment-success/payment-success.component').then(
            (m) => m.PaymentSuccessComponent,
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('../pharmacy/register/register.component').then(
            (m) => m.RegisterComponent,
          ),
        children: [
          {
            path: 'pharmacy-register-step3',
            loadComponent: () =>
              import(
                '../pharmacy/register/pharmacy-register-step3/pharmacy-register-step3.component'
              ).then((m) => m.PharmacyRegisterStep3Component),
          },
          {
            path: 'pharmacy-register-step2',
            loadComponent: () =>
              import(
                '../pharmacy/register/pharmacy-register-step2/pharmacy-register-step2.component'
              ).then((m) => m.PharmacyRegisterStep2Component),
          },
          {
            path: 'pharmacy-register-step1',
            loadComponent: () =>
              import(
                '../pharmacy/register/pharmacy-register-step1/pharmacy-register-step1.component'
              ).then((m) => m.PharmacyRegisterStep1Component),
          },
          {
            path: 'pharmacy-register',
            loadComponent: () =>
              import(
                '../pharmacy/register/pharmacy-register/pharmacy-register.component'
              ).then((m) => m.PharmacyRegisterComponent),
          },
        ],
      },
    ],
  },
];
