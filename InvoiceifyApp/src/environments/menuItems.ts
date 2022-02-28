import { IMenu } from '../app/core/interfaces';

export const menuItems: IMenu[] = [
  {
    title: 'Dashboard',
    path: 'dashboard',
    icon: 'home',
    children: [
      {
        title: 'Statistics',
        path: 'statistics'
      }
    ]
  },
  {
    title: 'Store',
    path: 'store',
    icon: 'shop',
    children: [
      {
        title: 'Categories',
        path: 'categories'
      },
      {
        title: 'Products',
        path: 'products'
      }
    ]
  }
];
