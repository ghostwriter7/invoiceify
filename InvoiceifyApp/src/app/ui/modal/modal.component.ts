import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() title!: string;

  public isVisible = false;

  public showModal(): void {
    this.isVisible = true;
  }

  public handleCancel(): void {
    this.isVisible = false;
  }

  public handleOk(): void {
    this.isVisible = false;
  }

}
