import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../../features/blog/blog.component').then((m) => m.BlogComponent),
    children: [
      {
        path: 'blog-details',
        loadComponent: () =>
          import(
            '../../features/blog/blog-details/blog-details.component'
          ).then((m) => m.BlogDetailsComponent),
      },
      {
        path: 'blog-grid',
        loadComponent: () =>
          import('../../features/blog/blog-grid/blog-grid.component').then(
            (m) => m.BlogGridComponent,
          ),
      },
      {
        path: 'blog-list',
        loadComponent: () =>
          import('../../features/blog/blog-list/blog-list.component').then(
            (m) => m.BlogListComponent,
          ),
      },
    ],
  },
];
