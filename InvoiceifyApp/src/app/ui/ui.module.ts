import { NgModule } from '@angular/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { HeaderComponent } from './header/header.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ModalComponent
  ],
  imports: [
    NzSwitchModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzCardModule,
    NzSpinModule,
    NzPageHeaderModule,
    NzModalModule
  ],
  exports: [
    NzSwitchModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzCardModule,
    NzSpinModule,
    NzPageHeaderModule,
    HeaderComponent,
    NzModalModule,
    ModalComponent
  ]
})
export class  UiModule {}
