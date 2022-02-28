import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { UiModule } from '../../ui/ui.module';

@NgModule({
  declarations: [
    CategoriesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    UiModule
  ],
})
export class StoreModule {}
