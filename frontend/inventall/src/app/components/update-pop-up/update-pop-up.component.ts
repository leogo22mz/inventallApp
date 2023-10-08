import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ItemsService } from '../../services/items.service';
import { CommunicationService } from '../../services/communication-service.service';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.scss'],
})
export class UpdatePopUpComponent implements OnInit {
  // Propiedades para los valores a actualizar
  itemName: string = '';
  itemQuantity: number = 0;
  entryDate: string = '';
  itemDescription: string = '';

  // ID del elemento a actualizar (pasado desde el componente Home)
  @Input() itemId: number = 0;

  constructor(
    private modalController: ModalController,
    private itemsService: ItemsService,
    private communicationService: CommunicationService
  ) {}

  ngOnInit() {}

  async updateAndClose() {
    await this.updateItem();
    await this.closePopUp();
  }

  async closePopUp() {
    await this.modalController.dismiss();
  }

  async updateItem() {
    // Crear un objeto con los valores actualizados solo si se han rellenado
    const updatedItem: any = {};
    if (this.itemName.trim() !== '') {
      updatedItem.name = this.itemName;
    }
    if (this.itemQuantity !== 0) {
      updatedItem.quantity = this.itemQuantity;
    }
    if (this.entryDate.trim() !== '') {
      updatedItem.entry_date = this.entryDate;
    }
    if (this.itemDescription.trim() !== '') {
      updatedItem.description = this.itemDescription;
    }

    // Llamar al servicio para actualizar el elemento solo si se han rellenado campos
    if (Object.keys(updatedItem).length > 0) {
      await this.itemsService.updateItem(this.itemId, updatedItem).toPromise();
    }

    // Emitir una notificación de actualización
    this.communicationService.notifyItemUpdate();
  }
}
