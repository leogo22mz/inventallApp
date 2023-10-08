import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsService } from '../services/items.service';
import { ModalController } from '@ionic/angular';
import { UpdatePopUpComponent } from '../../app/components/update-pop-up/update-pop-up.component';
import { CommunicationService } from '../services/communication-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: any = [];

  constructor(
    private itemsService: ItemsService,
    private router: Router,
    private modalController: ModalController,
    @Inject(CommunicationService) private communicationService: CommunicationService // Usa @Inject con el token de inyección
  ) {}

  ngOnInit() {
    this.getAllItems();

    // Suscríbete al evento de actualización
    this.communicationService.itemUpdated$.subscribe(() => {
      this.reloadItems();
    });
  }

  getAllItems() {
    this.itemsService.getItems().subscribe(response => {
      this.items = response;
    });
  }

  gotoCrud() {
    this.router.navigateByUrl("/crud");
  }

  async updatePopUp(id: number) {
    const modal = await this.modalController.create({
      component: UpdatePopUpComponent,
      componentProps: { itemId: id },
    });
    await modal.present();
  }

  ionViewDidEnter() {
    this.reloadItems();
  }

  async reloadItems() {
    try {
      // Llama al servicio para obtener la lista de elementos
      this.items = await this.itemsService.getItems().toPromise();
      console.log('Lista de elementos recargada con éxito.');
    } catch (error) {
      console.error('Error al cargar la lista de elementos:', error);
    }
  }

  async deleteItem(id: number) {
    try {
      // Llama al servicio para eliminar el elemento
      await this.itemsService.deleteItem(id).toPromise();
      // Emitir una notificación de actualización
      this.communicationService.notifyItemUpdate();
      console.log('Elemento eliminado con éxito.');
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  }
}
