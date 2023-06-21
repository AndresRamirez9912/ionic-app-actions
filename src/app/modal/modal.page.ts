import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  taskName: string = '';

  ngOnInit() {}

  cancelCreate() {
    this.modalCtrl.dismiss({
      taskName: null,
      completed: null,
    });
  }

  create() {
    this.modalCtrl.dismiss({
      taskName: this.taskName,
      completed: false,
    });
  }
}
