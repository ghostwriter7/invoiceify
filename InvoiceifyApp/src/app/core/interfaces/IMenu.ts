export interface IMenu {
  title: string;
  path: string;
  icon: string;
  children: { path: string, title: string }[]
}
