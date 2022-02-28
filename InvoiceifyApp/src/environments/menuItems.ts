import { IMenu } from '../app/core/interfaces';

export const menuItems: IMenu[] = [
  {
    module: 'Dashboard',
    path: 'dashboard',
    icon: 'home',
    children: [
      {
        submodule: 'Statistics',
        path: 'statistics'
      }
    ]
  },
  {
    module: 'Store',
    path: 'store',
    icon: 'shop',
    children: [
      {
        submodule: 'Categories',
        path: 'categories'
      },
      {
        submodule: 'Products',
        path: 'products'
      }
    ]
  }
];
