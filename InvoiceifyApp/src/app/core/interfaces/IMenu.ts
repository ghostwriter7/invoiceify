export interface IMenu {
  module: string;
  path: string;
  icon: string;
  children: { path: string, submodule: string }[]
}
