import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pharmacy/pharmacy.component').then((m) => m.PharmacyComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../pharmacy/authentication/authentication.component').then(
            (m) => m.AuthenticationComponent,
          ),
        children: [
          {
            path: '',
            redirectTo: 'pharmacy-login',
            pathMatch: 'full',
          },
          {
            path: 'pharmacy-login',
            loadComponent: () =>
              import('../pharmacy/authentication/login/login.component').then(
                (m) => m.LoginComponent,
              ),
          },
          {
            path: 'pharmacy-forgot-password',
            loadComponent: () =>
              import(
                '../pharmacy/authentication/forgot-password/forgot-password.component'
              ).then((m) => m.ForgotPasswordComponent),
          },
          {
            path: 'pharmacy-register',
            loadComponent: () =>
              import(
                '../pharmacy/authentication/register/register.component'
              ).then((m) => m.RegisterComponent),
          },
        ],
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../pharmacy/products/products.component').then(
            (m) => m.ProductsComponent,
          ),
        children: [
          {
            path: 'product-list',
            loadComponent: () =>
              import(
                '../pharmacy/products/product-list/product-list.component'
              ).then((m) => m.ProductListComponent),
          },
          {
            path: 'add-product',
            loadComponent: () =>
              import(
                '../pharmacy/products/add-product/add-product.component'
              ).then((m) => m.AddProductComponent),
          },
          {
            path: 'outstock',
            loadComponent: () =>
              import('../pharmacy/products/outstock/outstock.component').then(
                (m) => m.OutstockComponent,
              ),
          },
          {
            path: 'expired',
            loadComponent: () =>
              import('../pharmacy/products/expired/expired.component').then(
                (m) => m.ExpiredComponent,
              ),
          },
          {
            path: 'edit-product',
            loadComponent: () =>
              import(
                '../pharmacy/products/edit-product/edit-product.component'
              ).then((m) => m.EditProductComponent),
          },
        ],
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('../pharmacy/categories/categories.component').then(
            (m) => m.CategoriesComponent,
          ),
      },
      {
        path: 'purchase',
        loadComponent: () =>
          import('../pharmacy/purchase/purchase.component').then(
            (m) => m.PurchaseComponent,
          ),
        children: [
          {
            path: 'purchase-list',
            loadComponent: () =>
              import(
                '../pharmacy/purchase/purchase-list/purchase-list.component'
              ).then((m) => m.PurchaseListComponent),
          },
          {
            path: 'add-purchase',
            loadComponent: () =>
              import(
                '../pharmacy/purchase/add-purchase/add-purchase.component'
              ).then((m) => m.AddPurchaseComponent),
          },
          {
            path: 'order',
            loadComponent: () =>
              import('../pharmacy/purchase/order/order.component').then(
                (m) => m.OrderComponent,
              ),
          },
          {
            path: 'edit-purchase',
            loadComponent: () =>
              import(
                '../pharmacy/purchase/edit-purchase/edit-purchase.component'
              ).then((m) => m.EditPurchaseComponent),
          },
        ],
      },
      {
        path: 'sales',
        loadComponent: () =>
          import('../pharmacy/sales/sales.component').then(
            (m) => m.SalesComponent,
          ),
      },
      {
        path: 'supplier',
        loadComponent: () =>
          import('../pharmacy/supplier/supplier.component').then(
            (m) => m.SupplierComponent,
          ),
        children: [
          {
            path: 'supplier-list',
            loadComponent: () =>
              import(
                '../pharmacy/supplier/supplier-list/supplier-list.component'
              ).then((m) => m.SupplierListComponent),
          },
          {
            path: 'edit-supplier',
            loadComponent: () =>
              import(
                '../pharmacy/supplier/edit-supplier/edit-supplier.component'
              ).then((m) => m.EditSupplierComponent),
          },
          {
            path: 'add-supplier',
            loadComponent: () =>
              import(
                '../pharmacy/supplier/add-supplier/add-supplier.component'
              ).then((m) => m.AddSupplierComponent),
          },
        ],
      },
      {
        path: 'transactions-list',
        loadComponent: () =>
          import(
            '../pharmacy/transactions-list/transactions-list.component'
          ).then((m) => m.TransactionsListComponent),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('../pharmacy/reports/reports.component').then(
            (m) => m.ReportsComponent,
          ),
        children: [
          {
            path: 'invoice-report',
            loadComponent: () =>
              import(
                '../pharmacy/reports/invoice-report/invoice-report.component'
              ).then((m) => m.InvoiceReportComponent),
          },
        ],
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('../pharmacy/profile/profile.component').then(
            (m) => m.ProfileComponent,
          ),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('../pharmacy/settings/settings.component').then(
            (m) => m.SettingsComponent,
          ),
      },

      {
        path: 'customer-orders',
        loadComponent: () =>
          import('../pharmacy/customer-orders/customer-orders.component').then(
            (m) => m.CustomerOrdersComponent,
          ),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('../pharmacy/dashboard/dashboard.component').then(
            (m) => m.DashboardComponent,
          ),
      },
      {
        path: 'invoice',
        loadComponent: () =>
          import('../pharmacy/invoice/invoice.component').then(
            (m) => m.InvoiceComponent,
          ),
      },
    ],
  },
];
