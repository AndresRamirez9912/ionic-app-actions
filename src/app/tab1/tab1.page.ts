import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { task } from '../interfaces/task.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private modalCtrl: ModalController) {}

  tasks: task[] = [
    { description: 'Primera tarea', completed: false },
    { description: 'Segunda tarea', completed: false },
    { description: 'Tercera tarea', completed: false },
    { description: 'Cuarta tarea', completed: false },
    { description: 'Quinta tarea', completed: false },
    { description: 'Sexta tarea', completed: false },
  ];

  async newTask() {
    // Start the modal and get the data
    const modal = await this.modalCtrl.create({
      component: ModalPage,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    if (data.taskName) {
      // Add the element into the array
      const myTask: task = {
        completed: false,
        description: data.taskName,
      };
      this.tasks.push(myTask);
    }
  }
}
